---
title: "How to build a Liveness-Check Login with face-api.js and React"
description: "Build a login that requires a liveness check (e.g., 'Blink twice to login') to prevent photo-based bypasses — using face-api.js in the browser."
date: "2026-05-07"
tags:
  - face-api.js
  - react
  - ai
  - authentication
  - javascript
  - software-development
author: "Subrata Kumar Das"
readingTime: "10 min"
excerpt: "Face login is cool. Face login that can't be fooled by a photo is cooler. Learn how liveness detection works, explore a working React prototype, and see how to extend it into a fullstack authentication system — all using free, open-source tools."
draft: false
slug: "how-to-build-a-liveness-check-login-with-face-api-js-and-react"
---


> *"What if your login page could tell the difference between a real person and a photo of one?"*

That's the idea we're going to explore today. We'll look at how to build an **anti-spoofing face login** — a login system that asks users to do something like *"blink twice"* or *"turn your head left"* before letting them in. This makes it nearly impossible for someone to bypass the system by just holding up a photo.

By the end of this article, you'll understand:

- What `face-api.js` is and why it's perfect for this
- How face recognition works in the browser (no server needed!)
- What a real prototype of this looks like
- How to extend it into a fullstack project with anti-spoofing

---

## The Problem with Regular Face Login

Imagine you build a face login. A user looks at their webcam, the app recognises them, and they're in. Sounds secure, right?

Not quite. What if someone just **holds up a photo** of the registered user? A basic face recognition system won't know the difference. It sees a face, matches it, and logs in the attacker. This is called a **spoofing attack**.

The fix is a **liveness check** — asking the user to perform a real-time action that a photo simply cannot replicate. Things like:

- Blink twice
- Smile
- Turn your head to the left
- Open your mouth

This is what makes face login actually secure. And the good news? We can implement all of this **entirely in the browser**, for free, using open-source tools.

---

## Meet face-api.js

[`face-api.js`](https://github.com/justadudewhohacks/face-api.js/) is an open-source JavaScript library for face detection and recognition. It runs directly in the browser (or Node.js) and is built on top of **TensorFlow.js** — which means it uses your device's GPU for fast, smooth performance.

The best part for privacy-conscious apps? **Everything runs on the client side.** The user's face data never leaves their device.

Here's a quick overview of what it can do:

| Feature | What it does |
|---|---|
| **Face Detection** | Finds faces in an image or video and returns bounding boxes |
| **Face Recognition** | Identifies *who* the person is by comparing 128-point face descriptors |
| **Landmark Detection** | Locates 68 key points on the face — eyes, nose, mouth, jaw |
| **Expression Recognition** | Detects emotions like happiness, sadness, anger, surprise |
| **Age & Gender Estimation** | Predicts approximate age and gender |

For our anti-spoofing login, the **landmark detection** is the star. Those 68 points tell us exactly where the eyes, eyelids, and mouth corners are — which is exactly what we need to detect a blink or a smile.

---

## How Does Face Recognition Actually Work?

Let's demystify the process before we write any code.

### Step 1 — Register a User

When a user signs up, your app:
1. Opens their webcam
2. Detects their face using `face-api.js`
3. Generates a **face descriptor** — a 128-number array (think of it as a mathematical fingerprint of that face)
4. Saves this descriptor (in the browser, localStorage, or a database)

### Step 2 — Login Attempt

When the same user tries to log in:
1. The webcam opens again
2. A new face descriptor is generated from the live feed
3. The app compares the new descriptor against all saved ones using **Euclidean distance** (how "far apart" two descriptors are)
4. If the distance is small enough (below a threshold, usually `0.6`), it's a match

### Step 3 — The Liveness Check (Anti-Spoofing)

This is the extra layer. Before or after recognition, your app:
1. Shows a random challenge — *"Please blink twice"*
2. Watches the landmark data from the video stream in real time
3. Checks if the eyes actually closed and opened (or the mouth opened for a smile)
4. Only approves the login if the challenge is passed

A printed photo cannot blink. A video playing on a screen *could* fool a basic version, but adding randomised challenges makes even that impractical.

---

## The Models Behind the Magic

`face-api.js` ships with several pre-trained neural network models. You load the ones you need:

**SSD Mobilenet V1** — The default, high-accuracy detector. Great when precision matters.

**Tiny Face Detector** — Roughly 190 KB. Built for real-time performance on mobile or low-powered devices. This is usually your go-to for a live video stream.

**FaceLandmark68Net** — Detects 68 key points on the face. This is what enables liveness detection.

**FaceRecognitionNet** — A ResNet-34-like architecture that generates the 128-number face descriptor used for identity matching.

**FaceExpressionNet** — Detects emotions. Useful if your liveness challenge is *"please smile."*

You load them like this:

```javascript
await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
await faceapi.nets.faceExpressionNet.loadFromUri('/models');
```

The models are stored as a `model.json` (the architecture blueprint) and `.bin` files (the learned weights). They're split into small ~4 MB chunks so the browser can download them in parallel and start working quickly.

---

## A Look at the Prototype

I built a working prototype to demonstrate the core concept. You can find it here:

👉 **[Live Demo](https://subraatakumar.github.io/face-recognition-authentication-system-prototype/)**  
👉 **[GitHub Repository](https://github.com/subraatakumar/face-recognition-authentication-system-prototype)**

The prototype is built with **React + face-api.js + Tailwind CSS** and runs entirely in the browser. Here's what it does:

**Add a User** — You register your face. The app captures your face descriptor and saves it locally.

**Login with Face** — You look at the camera, and the app scans your face in real time, matching you against saved users.

**Client-Side Only** — No server, no database, no face data leaving your machine. This makes it a perfect starting point for understanding the concept before adding a backend.

To run it locally:

```bash
git clone git@github.com:subraatakumar/face-recognition-authentication-system-prototype.git
cd face-recognition-authentication-system-prototype
npm install
npm run dev
```

Then open `http://127.0.0.1:5173/` in your browser.

---

## Detecting a Blink — The Core of Anti-Spoofing

So how do we actually detect a blink? The `faceLandmark68Net` model gives us the positions of all 68 points on a face. Eyes occupy specific indices in that array.

A common technique is called the **Eye Aspect Ratio (EAR)**:

```
       |p2 - p6| + |p3 - p5|
EAR = ─────────────────────────
            2 * |p1 - p4|
```

When the eye is open, EAR is around `0.3`. When it closes (a blink), EAR drops close to `0`. By watching this value frame by frame on the video stream, you can reliably detect blinks.

Here's a simplified implementation:

```javascript
function getEAR(eyePoints) {
  const vertical1 = Math.abs(eyePoints[1].y - eyePoints[5].y);
  const vertical2 = Math.abs(eyePoints[2].y - eyePoints[4].y);
  const horizontal = Math.abs(eyePoints[0].x - eyePoints[3].x);
  return (vertical1 + vertical2) / (2.0 * horizontal);
}

// In your video loop:
const detections = await faceapi
  .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
  .withFaceLandmarks();

if (detections) {
  const landmarks = detections.landmarks;
  const leftEye = landmarks.getLeftEye();
  const rightEye = landmarks.getRightEye();
  
  const leftEAR = getEAR(leftEye);
  const rightEAR = getEAR(rightEye);
  const avgEAR = (leftEAR + rightEAR) / 2;

  if (avgEAR < 0.25) {
    // Eye is closed — a blink is happening!
    blinkCount++;
  }
}
```

A full liveness check waits for `blinkCount >= 2` within a time window (say, 5 seconds) before approving the session.

---

## Extending This into a Fullstack Project

The prototype is client-side only, which is fine for learning — but a real production system needs a backend. Here's how you'd extend it:

### On the Frontend (React)

1. Capture the user's face descriptor using `face-api.js`
2. Run the liveness challenge (e.g., blink detection)
3. Only if the challenge passes, send the descriptor to the server

### On the Backend (Node.js / any language)

1. During **registration**: receive the face descriptor, associate it with a user account, store it in a database
2. During **login**: receive the live descriptor, query all saved descriptors for that user (or look them up by username first), compute distances, and return success/failure

```javascript
// Pseudocode — backend login check
app.post('/login', async (req, res) => {
  const { username, liveDescriptor, livenessVerified } = req.body;

  if (!livenessVerified) {
    return res.status(401).json({ error: 'Liveness check failed' });
  }

  const user = await db.findUser(username);
  const distance = faceapi.euclideanDistance(liveDescriptor, user.faceDescriptor);

  if (distance < 0.6) {
    return res.json({ success: true, token: generateJWT(user) });
  }

  return res.status(401).json({ error: 'Face not recognised' });
});
```

### Security Considerations

- **Never trust the client** to tell the server that liveness passed. Re-verify server-side where possible, or at minimum use a signed token from the liveness check step.
- **Encrypt stored face descriptors.** They're mathematical data, not photos, but they're still biometric.
- **Add rate limiting.** Prevent brute-force attempts against the face matcher.
- **Use HTTPS always.** Webcam access requires a secure context.

---

## Real-World Use Cases of This Technology

This isn't just a cool side project — the underlying tech powers some serious real-world systems:

**Corporate Attendance** — Touchless check-in portals that verify employees are physically present (not dialling in from home while showing a photo at the scanner).

**Two-Factor Auth** — Replacing the second factor in 2FA with a face + liveness check instead of an SMS code.

**KYC (Know Your Customer)** — Fintech and banking apps verifying a user's identity during onboarding.

**Exam Proctoring** — Ensuring the person who sat the registration test is the same person taking the exam.

**Accessibility** — Hands-free navigation for users with motor disabilities who can log in or control interfaces using head movements or expressions.

---

## Understanding Model Formats (A Quick Primer)

If you dig into the `/models` folder of a face-api.js project, you'll notice files like `tiny_face_detector_model-weights_manifest.json` and several `.bin` files. This is the **TensorFlow.js format**.

Here's a quick cheat sheet for the formats you'll encounter as you explore AI:

| Format | Extension | Best For |
|---|---|---|
| TensorFlow.js | `.json` + `.bin` | Running models in the browser |
| TFLite | `.tflite` | Mobile apps (Android / iOS) |
| ONNX | `.onnx` | Sharing models across frameworks |
| PyTorch | `.pt` / `.pth` | Research and training |
| ExecuTorch | `.pte` | On-device AI with NPU/DSP acceleration |

Think of it like image formats: a RAW file is great for editing in Photoshop (like a `.pt` file), but you need a JPEG for a website (like `.json` + `.bin` shards) because it's compressed and browser-ready.

---

## What to Build Next

Once you've cloned the prototype and got it running, here are some ideas to level it up:

1. **Add a randomised liveness challenge** — Instead of always asking to blink, randomly pick from: blink, smile, turn left, turn right. This makes replay attacks much harder.

2. **Persist descriptors to a backend** — Connect a Node.js + MongoDB (or PostgreSQL) backend so registrations survive a page refresh.

3. **Add a fallback login** — Face login is great, but always give users a password fallback in case their camera fails.

4. **Try it in React Native** — TensorFlow Lite models can run on mobile via the `@tensorflow/tfjs-react-native` package, bringing the same ideas to your native app.

5. **Audit for edge cases** — Test with glasses, different lighting, hats. Real-world faces are messy, and your threshold tuning matters.

---

## Wrapping Up

Face recognition in the browser is no longer a futuristic concept — it's a practical, accessible tool that any React developer can start using today. `face-api.js` abstracts away all the neural network complexity, leaving you to focus on building the experience.

The prototype at [subraatakumar.github.io/face-recognition-authentication-system-prototype](https://subraatakumar.github.io/face-recognition-authentication-system-prototype/) gives you a solid working foundation. From there, adding the liveness check is the key step that takes it from a demo to something genuinely production-worthy.

If you build on top of this or have questions, feel free to open an issue on the repo. Happy building! 🚀

---

*Built with React, face-api.js, and TailwindCSS. All processing happens on your device — no face data is sent anywhere.*

### Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TechCraft-By-Subrata)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@techcraftclub)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/cA5fhVT8)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029VbCz72vFCCoUsMV4K30M)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/subraatakumar/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/subraatakumar/)

</div>
