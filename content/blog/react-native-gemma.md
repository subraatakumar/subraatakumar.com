---
title: "React Native + Gemma: Building a Fully Offline AI Hydration Coach"
description: "How I embedded an on-device Gemma model in React Native for a sovereign, offline hydration coach without cloud APIs or token bills."
date: "2026-06-03"
slug: "react-native-gemma"
tags:
  - ai
  - react-native
  - gemma
  - mobile
  - offline
  - edge
  - architecture
author: "Subrata Kumar Das"
updated: "2026-06-03"
draft: false
readingTime: "9 min"
excerpt: "Explore the engineering decisions behind running Gemma in React Native as a fully offline hydration coach, including memory, native bindings, and runtime architecture."
---

![](/images/react-native-gemma.png)
It was 3:14 AM. The silence in the room was absolute, broken only by the hum of my laptop fan. On my desk sat two testing devices: a Xiaomi MI running Android and my daily driver iPhone 15. Both screens were completely black.

Beside them lay a half-empty glass of flat water. Irony at its finest.

For the past three weeks, I had been deep in the engineering trenches of a personal side project, trying to pull off a high-wire architectural act: embedding a fully sovereign, 100% offline, conversational AI Hydration Coach directly into the core of my application. No cloud servers. No API gateways. No network latency. And absolutely no monthly token subscriptions bleeding my runway dry.

The promise was intoxicating. A user could be on an isolated mountain trail with zero cell service, open **Water Tracker with Subra AI** on [iOS](https://apps.apple.com/us/app/water-tracker-with-subra-ai/id6759248297) or [Android](https://play.google.com/store/apps/details?id=com.subraatakumar.watertracker), ask their coach a question about thermal fluid loss, and receive a deeply contextualized, real-time response.

But at 3:15 AM, the log stream on my monitor wasn't giving me context. It was spitting a single, devastating error line over and over:

`Fatal Exception: libc++abi: terminating with uncaught exception of type std::runtime_error: Failed to map model memory`

The app wasn't just crashing; it was suffocating. I had invited an LLM ghost into my React Native sandbox, and it was ravenous for memory.

---

## Chapter 1: The Sovereign Edge Architecture

To understand how I got here, we have to look at the architectural blueprint. Most product teams building GenAI mobile features take the comfortable path: wrapping an `axios` fetch request around a remote cloud API endpoint.

It’s elegant until the user steps into an elevator, a subway tunnel, or an airplane. Then, your "smart" coach reverts to an expensive loading spinner. Worse, every time a user casually chats with your app, *you* get billed. If your app goes viral, your API bills scale linearly, threatening to bankrupt your project before monetization even kicks in.

As a solo indie developer, I wanted a localized architecture. A sovereign edge.

To pull this off, I needed a highly optimized runtime and a model small enough to fit inside a mobile app's tight memory sandbox, yet smart enough to avoid hallucinating medical advice.

Enter Google’s newly minted **LiteRT-LM** stack.

For the uninitiated, **LiteRT** (the production-ready framework formerly known as TensorFlow Lite) is the high-performance multi-platform runtime trusted by millions of edge applications. But raw LiteRT handles low-level tensor execution. To build an LLM app, you need an orchestration layer above it to manage Key-Value (KV) caches, enforce prompt templates, handle speculative decoding, and execute function calling. That is exactly what the [LiteRT-LM Overview](https://developers.google.com/edge/litert-lm/overview) brings to the table.

And the brain? The [Gemma 4 E2B](https://developers.google.com/edge/litert-lm/models/gemma-4) model family. Specially built for on-device applications, the E2B variant is a lightweight powerhouse. It packs a text decoder with 0.79GB of weights and 1.12GB of embedding parameters into a ~2.59 GB `.litertlm` file.

But don't let its size fool you. It supports a staggering **32k context length** and features **Multi-Token Prediction (MTP)** drafters natively out of the box, allowing the framework to predict multiple upcoming tokens concurrently for a massive speedup on mobile chips.

---

## Chapter 2: The Edge of the Bridge

While community wrappers like `react-native-litert-lm` have emerged to bridge these ecosystems, dropping a raw 2.5GB model file into a cross-platform environment is never a plug-and-play affair. To truly understand performance bottlenecks, optimize token-streaming speeds, and prevent memory leaks, you have to look under the hood at how LiteRT-LM binds to the device's native metal.

The actual implementation maps to raw native development guides:

* The Kotlin engine setup: [LiteRT-LM Android Guide](https://developers.google.com/edge/litert-lm/android)
* The Swift wrapper orchestration: [LiteRT-LM Swift Guide](https://developers.google.com/edge/litert-lm/swift)

The mission was clear: Initialize a singleton instance of the LiteRT-LM inference engine natively, load the heavy `.litertlm` model file into memory once, expose a thread-safe `sendMessage` method over the bridge, and stream the generated tokens back to the JavaScript UI in chunks.

Here is the structural logic of how the native engines map to both platforms to talk back to a cross-platform state layer.

### The iOS Blueprint (Swift)

On iOS, the compiler links against the local LiteRT-LM framework headers, initializing the model and managing the asynchronous stream over an `RCTEventEmitter`.

```swift
// WaterAIModule.swift
import Foundation
import LiteRTLM // Under the hood native framework linkage

@objc(WaterAIModule)
class WaterAIModule: RCTEventEmitter {
  private var lmEngine: Engine?
  private var currentConversation: Conversation?

  @objc func initializeEngine(_ modelPath: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    do {
      let settings = EngineSettings(modelPath: modelPath)
      // Max out context token space allocated for conversation
      settings.mainExecutorSettings.maxNumTokens = 8192 
      
      self.lmEngine = try Engine.create(settings: settings)
      self.currentConversation = try self.lmEngine?.createConversation(config: ConversationConfig(
        preface: "You are an expert Hydration AI Coach. Keep answers concise, scientific, and highly practical."
      ))
      resolve("Engine Warm and Ready")
    } catch {
      reject("ERR_INIT", "Failed to awaken LiteRT-LM Engine", error)
    }
  }

  @objc func askCoach(_ message: String) {
    guard let conversation = currentConversation else {
      sendEvent(withName: "onTokenReceived", body: ["error": "Engine not initialized"])
      return
    }
    
    Task {
      do {
        // Stream back tokens sequentially to make UI responsive
        let stream = try await conversation.sendMessage(role: "user", content: message)
        for try await chunk in stream {
          sendEvent(withName: "onTokenReceived", body: ["token": chunk.text])
        }
      } catch {
        sendEvent(withName: "onTokenReceived", body: ["error": error.localizedDescription])
      }
    }
  }
  
  override func supportedEvents() -> [String]! {
    return ["onTokenReceived"]
  }
}

```

### The Android Blueprint (Kotlin)

On the Android side, the Java Native Interface (JNI) overhead means handling context carefully, passing inputs securely down to the underlying XNNPACK or GPU backends.

```kotlin
// WaterAIModule.kt
package com.subraatakumar.watertracker

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.google.edge.litertlm.Engine
import com.google.edge.litertlm.EngineSettings
import com.google.edge.litertlm.Conversation
import kotlinx.coroutines.*

class WaterAIModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private var lmEngine: Engine? = null
    private var conversation: Conversation? = null
    private val moduleScope = CoroutineScope(Dispatchers.Default + SupervisorJob())

    override fun getName(): String = "WaterAIModule"

    @ReactMethod
    fun initializeEngine(modelPath: String, promise: Promise) {
        try {
            val settings = EngineSettings.builder()
                .setModelPath(modelPath)
                .setMaxNumTokens(8192)
                .build()
            
            lmEngine = Engine.create(settings)
            conversation = lmEngine?.createConversation()
            promise.resolve("Android Engine Alive")
        } catch (e: Exception) {
            promise.reject("ERR_ANDROID_INIT", e.localizedMessage, e)
        }
    }

    @ReactMethod
    fun askCoach(message: String) {
        val streamConversation = conversation ?: return
        moduleScope.launch {
            try {
                streamConversation.sendMessage("user", message).collect { chunk ->
                    val map = Arguments.createMap().apply {
                        putString("token", chunk.text)
                    }
                    reactApplicationContext
                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                        .emit("onTokenReceived", map)
                }
            } catch (e: Exception) {
                // Handle stream drop failures cleanly
            }
        }
    }
}

```

---

## Chapter 3: The 607MB Breakthrough

Back to 3:15 AM. The code looked immaculate, but the app was still imploding on startup.

The physical math of mobile development is ruthless. A standard mobile application gets allocated anywhere from 200MB to 500MB of resident RAM by the OS before it lands on the high-risk eviction list. My model file alone was 2.59 GB. How was I supposed to squeeze a mountain inside a wallet?

I poured over the technical specifications of Gemma 4 E2B. That's when I found the missing clue, hidden inside the mechanics of the runtime memory-mapping subsystem.

LiteRT-LM implements a highly advanced memory footprint optimization strategy: **It splits how it treats model parameters.**

```
Gemma 4 E2B Model (2.59 GB Total Container)
├── Text Decoder Weights (0.79 GB)  ---> Kept strictly in Resident Physical RAM
└── Embedding Parameters (1.12 GB)  ---> Memory-Mapped (.mmap) dynamically from disk

```

Instead of copying the full 2.59 GB binary wholesale into physical RAM blocks, the engine uses weight caching mechanisms (like XNNPACK's native allocations). It pins the critical 0.79GB text decoder directly in execution memory, while memory-mapping the massive embedding layers directly from the device's storage on-demand.

The physical memory footprint doesn't hit 2.5 GB. It settles beautifully at **just around 607MB to 700MB.**

But why was my build still failing?

Because of *how* I packaged the model container. I had manually bundled the raw tokenizer config files and the converted layers together, blinding the engine's memory-mapping parser. It was reading the whole file layout as unaligned, un-mappable raw byte-blobs.

To fix it, I had to utilize the official serialization architecture outlined in the [LiteRT-LM File Builder Documentation](https://developers.google.com/edge/litert-lm/file_builder). The builder aligns the internal headers perfectly so the mobile OS can execute memory mapping with zero block overhead.

I spun up a Python virtual environment and ran the compiler pipeline script:

```bash
pip install litert-lm-builder

litert-lm-builder \
  output --path ./assets/gemma-4-E2B-hydra.litertlm \
  system_metadata --str engine_target "mobile-edge" \
  llm_metadata --path ./configs/gemma_policy.pb \
  tflite_model --path ./models/prefill_decode.tflite --model_type prefill_decode --backend_constraint gpu \
  hf_tokenizer --path ./tokenizer/tokenizer.json

```

The script ran cleanly, packaging the binary layers while injecting explicit alignment offsets into the file structure. I dragged the brand-new, optimized `gemma-4-E2B-hydra.litertlm` file into the app bundles.

I hit rebuild.

---

## Chapter 4: It Listens, It Thinks, It Adapts

The compilation finished. I tapped the chat icon on the app screen. The interface faded into a clean, minimalist prompt box.

I typed: *"I just finished a 5K run in 85-degree humid weather. I’ve had 500ml of water today. Am I at risk?"*

I held my breath, waiting for the dreaded native crash log.

The monitor remained clear. Instead, token by token, words started cascading onto the mobile viewport with fluid speed—hitting nearly **50 tokens per second** accelerated entirely by the local device's GPU layers.

```
[Thinking...] 
User hydration state is dangerously low given thermal conditions. 
Prefill tokens: 1024 | Decode: ~52 tok/sec.

"You are experiencing significant net fluid deficit. At 85°F with high humidity, 
your sweat rate can easily exceed 1L/hour. Consuming only 500ml puts you in an 
acute state of dehydration. Skip pure water for the next 300ml—you need 
isotonic electrolytes immediately to restore plasma volume."

```

No remote servers were pinged. No user tracking data escaped into the cloud. It was completely secure, private, instantaneous intelligence running locally on a handheld piece of glass.

---

## The Takeaway: The Stack of 2030 is On-Device

Building intelligence at the edge forces you to shed the lazy habits of cloud-first development. You cannot throw infinite elastic computing resources at a bad algorithm or a bloated architectural layout when your execution limits are hard-capped by a lithium-ion battery and a mobile operating system's kernel.

But the reward? True application autonomy for a side project without ongoing maintenance costs.

If you want to experience how this architecture behaves in production under real-world constraints, you can test the implementation live on both modern ecosystems:

* Download the iOS live build: [Water Tracker with Subra AI on the App Store](https://apps.apple.com/us/app/water-tracker-with-subra-ai/id6759248297)
* Download the Android live build: [Water Tracker Engine on Google Play](https://play.google.com/store/apps/details?id=com.subraatakumar.watertracker)

The era of writing simple wrapper apps around expensive cloud endpoints is winding down. By bridging native frameworks like LiteRT-LM into accessible cross-platform viewports like React Native, we aren't just shipping apps—we're deploying highly optimized, self-contained digital minds directly into our users' pockets.

And the best part? The next time my cloud server goes down... my users will still be perfectly hydrated.

---

### Technical Reference Ledger & Documentation

* **Core Model Architecture:** [Gemma 4 LiteRT-LM Documentation](https://developers.google.com/edge/litert-lm/models/gemma-4)
* **Runtime Core Specifications:** [LiteRT-LM Core Overview](https://developers.google.com/edge/litert-lm/overview)
* **Android JNI Implementation Matrix:** [LiteRT-LM Android Integration](https://developers.google.com/edge/litert-lm/android)
* **iOS Metal Acceleration Layer:** [LiteRT-LM Swift Framework](https://developers.google.com/edge/litert-lm/swift)
* **Binary Alignment Utility:** [LiteRT-LM File Builder CLI](https://developers.google.com/edge/litert-lm/file_builder)