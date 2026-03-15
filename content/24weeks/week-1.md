---
title: "Week 1: The Multi-Model Evaluator."
description: "Build a side-by-side comparison tool for GPT-4, Claude, and Gemini to test architectural logic."
date: "2026-03-09"
image: "/images/24weeks/week-1.png"
slug: "24-weeks-of-ai-native-saas"
tags:
  - ai
  - saas
  - software-development
  - large-language-models
  - Subrata Kumar Das
excerpt: "Embark on a 24-week journey to build and master AI-native SaaS applications. This series covers everything from integrating LLMs and building autonomous agents to ensuring enterprise-grade reliability and safety."
author: "Subrata Kumar Das"
updated: "2026-03-09"
draft: false
readingTime: "5 min"
---
## **The Zero-Cost API Strategy** ![Page Views](https://visitor-badge.laobi.icu/badge?page_id=subraatakumar.subraatakumar.com&label=Page%20Views)


You can access the models required for **Week 1** through the following free resources:

* **Google AI Studio (Gemini):** Google offers a very generous free tier for **Gemini 2.0 Flash**, allowing up to **1,500 requests per day** at no cost.
* **Groq Cloud (Llama & Mistral):** To get high-speed open-source models (like Llama 3.3) for your side-by-side comparison, Groq provides free API access with near-instant inference speeds.
* **OpenRouter (Unified Gateway):** Instead of managing multiple separate billing accounts, use **OpenRouter**. It allows you to filter specifically for **"Free Models"** (marked as **$0.00/token**), giving you access to dozens of variations for your evaluator without a credit card.
* **GitHub Models:** If you have a GitHub account, you have access to their **Model Sandbox**, which provides limited free API credits to test flagship models like **GPT-4o** and **Claude 3.5 Sonnet**.

---

## **Week 1 Architectural Setup**

Since you are **Architecting the 2030 Stack**, your goal isn't just to call an API—it's to build a **Model Agnostic** system.

* **The Build:** A simple web dashboard (using **Streamlit** or **Next.js**) where one input sends a prompt to three different models simultaneously.
* **The Logic:** Use the **Vercel AI SDK** or a simple Python wrapper to abstract the "Provider" layer. This way, you can swap models by just changing an environment variable.
* **The Comparison:** Use this tool to test **Architectural Logic** (e.g., asking for a microservices transition plan) to see which model handles complex system design most accurately.

---

### **Your Weekend Action Plan**

Since we are kicking this off on **Monday, March 09**, here is your prep:

1. **Register:** Get your free API keys from **Google AI Studio** and **Groq**.
2. **Code:** Set up a basic project folder.
3. **Test:** Run a few "Logic Challenges" to ensure the side-by-side display works.

## Create a NextJS Project

```
npx create-next-app@latest sidebyside --typescript --eslint --app
```

![](/24weeks/week1/img1.png)

Since you are **Architecting the 2030 Stack**, you definitely want to answer **Yes**.

The **React Compiler** (formerly known as React Forget) is a foundational shift in how React handles performance. By 2030, manual optimization using `useMemo`, `useCallback`, and `React.memo` will be considered "legacy" work. The compiler automatically handles these optimizations at build-time, allowing you to write standard JavaScript while the engine ensures your **Architex** dashboard remains lightning-fast.

For your Week 1 build, this is a great technical detail to include in your journal:

> *"Starting the journey by opting into the **React Compiler**. In the 2030 stack, we move away from manual 'memoization' and let the build-chain handle performance automatically. This keeps the developer focused on architecture, not boilerplate."*

---

![](/24weeks/week1/img2.png)

For this one, **select Yes**.

Using a `src/` directory is the industry standard for production-grade Next.js applications. It separates your configuration files (like `package.json`, `tailwind.config.ts`, and `.env`) from your actual application logic.

In your **"24-Weeks to AI-Native"** journey, this is about building a clean, scalable architecture. By keeping your code in `src/`, you're following a disciplined project structure that stays organized as **Architex** grows from a simple evaluator into a complex system.

---

### **Your Project Selection Summary:**

* **React Compiler:** Yes (Next-gen performance)
* **Tailwind CSS:** Yes (Rapid UI building)
* **`src/` Directory:** **Yes** (Professional organization)
* **App Router:** Yes (Modern Next.js routing)
* **Import Alias:** Yes (Use `@/*` for cleaner imports)

---

![](/24weeks/week1/img2.png)


This is the foundational code for your **Week 1: Multi-Model Evaluator**. It uses the **Vercel AI SDK** with **Next.js** to create a side-by-side architectural comparison tool.

By using the `ai` library and `google-generative-ai` provider, you can keep your costs at **$0** using the free tier of **Google AI Studio**.

---

## **1. The Backend (Route Handler)**

Create a file at `app/api/chat/route.ts`. This is the "Model Router" that handles the architectural logic prompts.

```typescript
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Architecting the 2030 Stack: Week 1 Router
export async function POST(req: Request) {
  const { messages, modelChoice } = await req.json();

  // You can swap these based on the free tier availability
  const model = modelChoice === 'gemini' 
    ? google('gemini-1.5-flash') 
    : google('gemini-2.0-flash-exp'); 

  const result = await streamText({
    model: model,
    messages,
    system: "You are a Senior System Architect. Provide structured, technical comparisons for the 2030 tech stack.",
  });

  return result.toDataStreamResponse();
}

```

---

## **2. The Frontend (Comparison Dashboard)**

Create your page at `app/page.tsx`. This creates the side-by-side view for your "Proof of Work" showcase.

```tsx
'use client';

import { useChat } from '@ai-sdk/react';

export default function MultiModelEvaluator() {
  const chatA = useChat({ body: { modelChoice: 'gemini' } });
  const chatB = useChat({ body: { modelChoice: 'gemini-pro' } });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    chatA.append({ role: 'user', content: chatA.input });
    chatB.append({ role: 'user', content: chatA.input });
  };

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-6">
        24-Weeks to AI-Native: Week 1 Evaluator
      </h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <input
          className="w-full p-4 border rounded shadow-sm"
          value={chatA.input}
          onChange={chatA.handleInputChange}
          placeholder="Enter an architectural logic challenge..."
        />
      </form>

      <div className="grid grid-cols-2 gap-6">
        <div className="border p-4 rounded bg-gray-50">
          <h2 className="font-bold mb-2">Model A (Gemini Flash)</h2>
          <div className="whitespace-pre-wrap">
            {chatA.messages[chatA.messages.length - 1]?.content}
          </div>
        </div>

        <div className="border p-4 rounded bg-gray-50">
          <h2 className="font-bold mb-2">Model B (Gemini Pro)</h2>
          <div className="whitespace-pre-wrap">
            {chatB.messages[chatB.messages.length - 1]?.content}
          </div>
        </div>
      </div>
    </div>
  );
}

```

---

## **3. Setup Instructions (Zero-Cost)**

1. **Environment Variables:** Create a `.env.local` file and add your key: `GOOGLE_GENERATIVE_AI_API_KEY=your_free_key_here`.
2. **Install Dependencies:** Run `npm install ai @ai-sdk/react @ai-sdk/google`.
3. **Run:** Execute `npm run dev` to see your dashboard live.

### **The "Showcase" Tip for Monday**

When you post your first journal entry on **Monday, March 16**, take a screen recording of this tool answering a complex question like: *"How should I handle state consistency in a distributed AI agentic workflow?"*

**Would you like me to draft the "Week 1 Journal Entry" text to accompany this build for your website?**