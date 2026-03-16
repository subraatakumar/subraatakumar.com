---
title: "Week 1: The Multi-Model Evaluator (Production Build)."
description: "A deep technical learning journal for building a professional side-by-side evaluator using Next.js and AI SDK v6 with Google-first defaults, BYOK providers, streaming comparisons, and robust error handling."
date: "2026-03-09"
image: "/images/24weeks/week-1.png"
slug: "24-weeks-of-ai-native-saas"
tags:
  - ai
  - saas
  - software-development
  - large-language-models
  - Subrata Kumar Das
excerpt: "Week 1 goes from prototype to production: model-agnostic architecture, typed API contracts, side-by-side streaming, partial-failure comparison reporting, and real-world quota troubleshooting."
author: "Subrata Kumar Das"
updated: "2026-03-16"
draft: false
readingTime: "18 min"
---

## **Week 1 Mission: Build the Foundation Correctly** ![Page Views](https://visitor-badge.laobi.icu/badge?page_id=subraatakumar.subraatakumar.com&label=Page%20Views)

Week 1 is not just "call an LLM API and print text."

Week 1 is where we define the **architecture contract** for the entire 24-week journey:

* one UI
* multiple providers
* typed request flow
* streaming responses
* graceful failure handling
* no hard lock-in to one model vendor

If this base is weak, every week after this becomes technical debt.

If this base is strong, every week after this becomes compounding leverage.

**Project Repository:** [24weeks-week-1-The-Multi-Model-Evaluator](https://github.com/TechCraft-By-Subrata/24weeks-week-1-The-Multi-Model-Evaluator)

---

## **What We Built (Production Version)**

We built a **professional side-by-side model evaluator** with:

* Two fixed comparison panels (Left model vs Right model)
* Shared prompt composer
* Provider-agnostic execution (`google | openai | anthropic`)
* Session-only BYOK key handling (no persistence)
* Streaming responses via AI SDK v6 patterns
* Comparison report that still works when one model fails
* Model status states (`Queued`, `Streaming`, `Ready`, `Error`)
* Real-world quota error visibility and recovery

---

## **Why This Architecture (and not a quick hack)**

### 1) **Model-Agnostic by design**
A single request contract lets us route to Google, OpenAI, or Anthropic without rewriting UI logic.

### 2) **Typed API contract**
We enforce request shape explicitly so frontend and backend stay in sync as features grow.

### 3) **Streaming-first UX**
Users should see model output as it arrives. Perceived performance matters.

### 4) **Failure is a first-class case**
In AI systems, failures are normal: key issues, quota limits, invalid model IDs, provider downtime.

### 5) **Comparison must survive partial failure**
If one model succeeds and one fails, evaluation should still produce insight.

---

## **System Architecture (End-to-End)**

### **UI Flow**
1. User writes one prompt.
2. App sends the same prompt to both panels.
3. Each panel carries its own provider/model/key config.
4. Each panel streams independently.
5. UI shows per-panel output + errors + status.
6. A final comparison report appears once both requests finish (including partial-failure cases).

### **API Flow (`/api/chat`)**
1. Accept typed payload: `messages`, `panel`, `options`.
2. Resolve provider-specific model from `panel.provider`.
3. Convert UI messages to model messages.
4. Stream text with optional `systemPrompt` and `temperature`.
5. Return UI stream response with original messages for stable message IDs.

### **Error-Handling Flow**
* Missing key -> explicit provider-specific error
* Invalid JSON/request shape -> 400-style contract errors
* Quota/rate-limit/provider errors -> surfaced as readable messages in panel
* Busy-state correctness -> only `submitted`/`streaming` treated as running

---

## **Core API Contract (Public Interface)**

This is the contract that powers the evaluator:

```ts
{
  messages: UIMessage[]
  panel: {
    provider: 'google' | 'openai' | 'anthropic'
    modelId: string
    apiKey?: string
  }
  options?: {
    systemPrompt?: string
    temperature?: number
  }
}
```

### Why this contract works

* `messages` keeps conversation context in sync with `useChat`.
* `panel` makes each side independently configurable.
* `options` allows controlled tuning without breaking base payload shape.

---

## **Implementation Walkthrough: Backend Route**

Below is the core pattern used in the app route. This is the center of the model router.

```ts
import { createAnthropic } from '@ai-sdk/anthropic';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createOpenAI } from '@ai-sdk/openai';
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
  type LanguageModel,
} from 'ai';

type ProviderName = 'google' | 'openai' | 'anthropic';

type PanelConfig = {
  provider: ProviderName;
  modelId: string;
  apiKey?: string;
};

type ChatRequestBody = {
  messages: UIMessage[];
  panel: PanelConfig;
  options?: {
    systemPrompt?: string;
    temperature?: number;
  };
};

function getModel(panel: PanelConfig): LanguageModel {
  const modelId = panel.modelId.trim();
  const apiKey = panel.apiKey?.trim();

  if (!modelId) throw new Error('Model ID is required.');

  if (panel.provider === 'google') {
    const fallbackKey = process.env.GOOGLE_API_KEY?.trim();
    const googleApiKey = apiKey || fallbackKey;
    if (!googleApiKey) {
      throw new Error('No Google API key found. Add GOOGLE_API_KEY or provide panel key.');
    }
    const google = createGoogleGenerativeAI({ apiKey: googleApiKey });
    return google(modelId);
  }

  if (!apiKey) {
    throw new Error(`API key is required for ${panel.provider}.`);
  }

  if (panel.provider === 'openai') {
    const openai = createOpenAI({ apiKey });
    return openai(modelId);
  }

  const anthropic = createAnthropic({ apiKey });
  return anthropic(modelId);
}

export async function POST(req: Request) {
  const body = (await req.json()) as ChatRequestBody;
  const { messages, panel, options } = body;

  const model = getModel(panel);

  const result = streamText({
    model,
    system: options?.systemPrompt?.trim() || undefined,
    temperature: options?.temperature,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({ originalMessages: messages });
}
```

### Why each part matters

* `getModel()` isolates provider branching to one place.
* `convertToModelMessages()` aligns UI messages with model input format.
* `toUIMessageStreamResponse({ originalMessages })` prevents message-duplication issues in chat UIs.

### Common pitfalls

* Using outdated provider packages/APIs.
* Not validating `modelId` and key presence.
* Returning non-UI stream response formats with `useChat`.

---

## **Implementation Walkthrough: Frontend Evaluator Logic**

The frontend uses AI SDK `useChat` with `DefaultChatTransport` for each panel.

```tsx
const {
  messages: leftMessages,
  sendMessage: sendLeft,
  status: leftStatus,
  stop: stopLeft,
  error: leftError,
  clearError: clearLeftError,
} = useChat({
  transport: new DefaultChatTransport({ api: '/api/chat' }),
});

const {
  messages: rightMessages,
  sendMessage: sendRight,
  status: rightStatus,
  stop: stopRight,
  error: rightError,
  clearError: clearRightError,
} = useChat({
  transport: new DefaultChatTransport({ api: '/api/chat' }),
});
```

Prompt submission sends the same user text to both chats with panel-specific body config:

```tsx
sendLeft(
  { text: promptText },
  {
    body: {
      panel: {
        provider: leftPanel.provider,
        modelId: leftPanel.modelId.trim(),
        apiKey: leftPanel.apiKey.trim() || undefined,
      },
      options: {
        systemPrompt: options.systemPrompt.trim() || undefined,
        temperature: options.temperature,
      },
    },
  },
);
```

### Busy-state correctness (important fix)

```ts
function isBusyStatus(status: string): boolean {
  return status === 'submitted' || status === 'streaming';
}

const isRunning = isBusyStatus(leftStatus) || isBusyStatus(rightStatus);
```

Why: `error` is **not** a running state. This fix removes the stuck "Running..." bug.

---

## **Comparison Report Logic (Handles Partial Failure)**

A key Week 1 learning: comparison should still be useful if one side fails.

```ts
function getComparisonReport({ leftText, rightText, leftError, rightError }) {
  const leftOk = Boolean(leftText) && !leftError;
  const rightOk = Boolean(rightText) && !rightError;

  if (leftOk && rightOk) {
    return { summary: 'Both models returned successfully.', winner: '...'};
  }

  if (leftOk && !rightOk) {
    return { summary: 'Partial success: left model succeeded, right model failed.', winner: 'Left model by availability' };
  }

  if (!leftOk && rightOk) {
    return { summary: 'Partial success: right model succeeded, left model failed.', winner: 'Right model by availability' };
  }

  return { summary: 'Both model runs failed.', winner: 'No winner' };
}
```

### Why this matters

Without this, users lose confidence in the evaluator when one provider fails.
With this, users still get actionable output and next-step guidance.

---

## **Google Default Model Suggestions (Free-Tier Testing Focus)**

In the UI we expose practical default suggestions for Google selection:

```ts
const PROVIDER_MODEL_SUGGESTIONS = {
  google: [
    'gemini-2.5-pro',
    'gemini-2.5-flash',
    'gemini-2.5-flash-lite',
    'gemini-3-flash-preview',
    'gemini-3.1-flash-lite-preview',
  ],
};
```

### Why this helps

* Faster test setup for new users
* Reduces invalid-model guesswork
* Keeps defaults aligned with current free-tier experimentation patterns

---

## **What Broke During Build (and How We Fixed It)**

### 1) Old `useChat({ api, body })` pattern mismatch
**Problem:** Newer AI SDK uses transport objects.

**Fix:** Move to `DefaultChatTransport` and pass per-request options with `sendMessage(..., { body })`.

### 2) Old `message.content` rendering
**Problem:** Modern UI messages expose `parts`, not single `content`.

**Fix:** Render assistant text by collecting text parts from `message.parts`.

### 3) Stuck running status after provider error
**Problem:** UI considered non-ready statuses as running.

**Fix:** Busy only for `submitted` and `streaming`.

### 4) No comparison when one model failed
**Problem:** Successful side had output, but no final cross-panel summary.

**Fix:** Add partial-failure report path.

### 5) Quota/rate-limit confusion
**Problem:** Users thought app was broken when provider quota returned `limit: 0`.

**Fix:** Surface raw provider error in panel + add quota troubleshooting guidance.

---

## **Hands-On Testing Checklist**

Use this every time you modify the evaluator:

1. **Happy path (Google + Google):** both panels stream and final report appears.
2. **Mixed provider path (Google + OpenAI/Anthropic):** both work with proper keys.
3. **Missing key path:** OpenAI/Anthropic panel shows explicit key-required error.
4. **Invalid model path:** clear provider error shown in affected panel.
5. **Quota failure path:** one panel fails with quota error, other succeeds, report still generated.
6. **Stop behavior:** click Stop while streaming, both panels halt.
7. **Status behavior:** no lingering `Running...` after a terminal state.
8. **Type/lint health:**

```bash
npx tsc --noEmit
npm run lint
```

---

## **Production Hardening: Next Steps**

Week 1 production baseline is done. For Week 1.5 / Week 2 quality, add:

* **Judge-model scoring:** automatic ranking by factuality, completeness, clarity.
* **Observability:** request IDs, timings, provider latency metrics, error taxonomy.
* **Retry/backoff policy:** especially for transient 429/5xx.
* **Provider fallback strategy:** optional automatic fallback if one provider fails.
* **Key safety:** never persist user keys, rotate leaked keys immediately.
* **Prompt/result logging policy:** redact sensitive inputs before storing traces.

---

## **Setup Snapshot (Current Working Version)**

Install:

```bash
npm install
```

Env:

```env
GOOGLE_API_KEY=your_google_api_key
```

Run:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## **Read More / References (Official Docs)**

### Project Code
* Week 1 source code repository: [https://github.com/TechCraft-By-Subrata/24weeks-week-1-The-Multi-Model-Evaluator](https://github.com/TechCraft-By-Subrata/24weeks-week-1-The-Multi-Model-Evaluator)

### Next.js
* Next.js App Router: [https://nextjs.org/docs/app](https://nextjs.org/docs/app)
* Route Handlers: [https://nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

### AI SDK Core + UI
* AI SDK docs home: [https://ai-sdk.dev/docs](https://ai-sdk.dev/docs)
* `useChat` (AI SDK UI): [https://ai-sdk.dev/docs/ai-sdk-ui/chatbot](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot)
* Transport concepts: [https://ai-sdk.dev/docs/ai-sdk-ui/transport](https://ai-sdk.dev/docs/ai-sdk-ui/transport)
* `streamText` reference: [https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text)
* `convertToModelMessages` reference: [https://ai-sdk.dev/docs/reference/ai-sdk-core/convert-to-model-messages](https://ai-sdk.dev/docs/reference/ai-sdk-core/convert-to-model-messages)

### Provider Packages
* Google provider: [https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai](https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai)
* OpenAI provider: [https://ai-sdk.dev/providers/ai-sdk-providers/openai](https://ai-sdk.dev/providers/ai-sdk-providers/openai)
* Anthropic provider: [https://ai-sdk.dev/providers/ai-sdk-providers/anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic)

### Gemini Pricing + Rate Limits
* Gemini API pricing: [https://ai.google.dev/gemini-api/docs/pricing](https://ai.google.dev/gemini-api/docs/pricing)
* Gemini rate limits: [https://ai.google.dev/gemini-api/docs/rate-limits](https://ai.google.dev/gemini-api/docs/rate-limits)

---

## **Learning Outcome (Week 1 Complete)**

By finishing this build, we now have a **real AI integration base layer**:

* typed
* provider-agnostic
* streaming-capable
* failure-aware
* extensible for automated evaluation

This is exactly the foundation needed for Week 2, where we can move from plain output comparison toward **retrieval-aware and quality-evaluated AI workflows**.
