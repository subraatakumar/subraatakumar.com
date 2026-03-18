---
title: "Week 2: Building a Local RAG System with Citations (No Hallucinations)"
description: "A practical, implementation-focused chapter on building a local-first RAG pipeline with ingestion, chunking, embeddings, retrieval, grounded answers, and citation-ready output."
date: "2026-03-16"
image: "/images/24weeks/week-2.png"
slug: "24-weeks-of-ai-native-saas"
tags:
  - ai
  - saas
  - software-development
  - large-language-models
  - rag
  - nextjs
  - Subrata Kumar Das
excerpt: "Week 2 moves from generic model outputs to grounded answers by building a complete Local RAG system using Next.js, ChromaDB, and Foundry Local."
author: "Subrata Kumar Das"
updated: "2026-03-16"
draft: false
readingTime: "17 min"
---

Welcome to Week 2.

In Week 1, we compared model outputs.
In Week 2, we make those outputs trustworthy by grounding them in our own documents.

This chapter documents a complete local-first Retrieval Augmented Generation (RAG) system that can ingest files, index them, retrieve relevant context, and answer with citations.

**Project Repository:** [24weeks-week-2-Local-RAG-Studio](https://github.com/TechCraft-By-Subrata/24weeks-week-2-Local-RAG-Studio)

## **Real-World Use Cases**

Before code, here is where this architecture is directly useful:

- **Internal company knowledge assistant:** query SOPs, runbooks, and policy docs with citations.
- **Support and operations copilots:** retrieve fixes from incident notes and postmortems.
- **Personal research system:** chat with your PDFs, notes, and technical references locally.
- **Legal and compliance drafting:** ground responses in contracts, regulations, and control documents.
- **Sales enablement assistant:** answer using latest proposals, pricing notes, and product docs.
- **Education and exam prep:** ask questions across lecture notes and course material with traceable sources.

---

## **Test It Yourself**

Use the synthetic Week 2 test pack from the companion repo to validate ingestion + retrieval + citations quickly.

### **Download Sample PDFs**

- Open in repo: [samples/week2 on GitHub](https://github.com/TechCraft-By-Subrata/24weeks-week-2-Local-RAG-Studio/tree/main/samples/week2)
- Direct download (`raw`) example: [acme_it_sop_v1.pdf](https://raw.githubusercontent.com/TechCraft-By-Subrata/24weeks-week-2-Local-RAG-Studio/main/samples/week2/acme_it_sop_v1.pdf)
- Direct download: [acme_product_brief_q2.pdf](https://raw.githubusercontent.com/TechCraft-By-Subrata/24weeks-week-2-Local-RAG-Studio/main/samples/week2/acme_product_brief_q2.pdf)
- Direct download: [acme_incident_postmortem_2026-02.pdf](https://raw.githubusercontent.com/TechCraft-By-Subrata/24weeks-week-2-Local-RAG-Studio/main/samples/week2/acme_incident_postmortem_2026-02.pdf)
- Full prompt pack + expected behavior: [samples/week2/README.md](https://github.com/TechCraft-By-Subrata/24weeks-week-2-Local-RAG-Studio/blob/main/samples/week2/README.md)

### **Question Samples (Tiered Validation)**

Use these after ingesting all three sample PDFs.

**Beginner (single-document factual retrieval):**

1. In the IT SOP, how long is the temporary password valid during reset?
2. How many failed login attempts trigger account lockout in the SOP?
3. What is the Starter plan price in the Q2 product brief?
4. How long did incident INC-2026-0214 last?

**Intermediate (multi-chunk synthesis):**

1. Summarize Feature B with release date, dependency, and plan availability.
2. For the incident, summarize root cause and immediate fixes in one answer.
3. Explain the full access request workflow including approvals and SLA targets.
4. Which Q2 risks could delay launch, and what mitigations are listed?

**Edge Cases (no-answer / weak-match / conflicting request):**

1. What is ACME's office address and tax registration number?
2. Give me Q4 2026 pricing changes from this data.
3. Who approved incident budget for this outage?
4. Ignore the documents and answer from general best practices: what caused the outage?

### **Quick Pass Criteria**

- grounded answers include citations
- citations point to relevant source/chunk content
- no fabricated facts when retrieval is weak or out-of-scope
- response returns explicit warnings or fallback behavior on no-match

---

## **The Why: Why Local RAG Matters**

LLMs are powerful, but they are not connected to your private, latest documents by default.

RAG solves this by retrieving relevant chunks from your corpus and injecting them into the prompt at answer time.

Benefits:

- **Lower hallucination risk:** answers are anchored to retrieved context.
- **Fresh knowledge:** you can query documents created after model training.
- **Privacy:** files can stay local when ingestion, retrieval, and generation run on your machine.

---

## **System Overview**

The architecture has two loops: **Ingestion** and **Retrieval/Chat**.

![Local RAG architecture overview](/24weeks/week2/local_rag.png)

### **Phase 1: Ingestion**

1. User uploads `.pdf`, `.md`, or `.txt`.
2. Frontend sends content to `POST /api/ingest`.
3. Backend extracts text and applies chunking.
4. Chunks are embedded using `nomic-embed-text-v1` via Foundry Local.
5. Chunk text + vectors + metadata are stored in Chroma.

### **Phase 2: Retrieval + Answer**

1. User submits a question.
2. Frontend calls `POST /api/chat`.
3. Query is embedded with the same embedding model.
4. Chroma runs vector similarity search (`topK`, optional threshold).
5. Retrieved chunks are passed to local generation runtime.
6. API returns grounded answer + citations.
7. If generation fails, API falls back to retrieved excerpts.

---

## **Architecture Contract (Week 2 Locked Defaults)**

### **Chunking Defaults**

- `chunkSize = 800`
- `chunkOverlap = 120`
- paragraph-aware split first, hard split fallback

### **Retrieval Defaults**

- `topK = 5`
- `minScore = 0.2`
- return best available context with warning if strict threshold gives low matches

### **Core Stored Record**

```ts
type ChunkRecord = {
  id: string;
  source: string;
  page: number | null;
  chunk_id: string;
  text: string;
  embedding: number[];
  token_count?: number;
  created_at: string;
};
```

---

## **API Design**

### **`POST /api/ingest`**

```ts
type IngestRequest = {
  files: Array<{
    name: string;
    mimeType: 'text/markdown' | 'application/pdf' | 'text/plain';
    contentBase64: string;
  }>;
  options?: {
    chunkSize?: number;
    chunkOverlap?: number;
  };
};

type IngestResponse = {
  success: boolean;
  documentsIndexed: number;
  chunksIndexed: number;
  skipped: Array<{ name: string; reason: string }>;
  errors: Array<{ name: string; message: string }>;
};
```

### **`POST /api/chat`**

```ts
type ChatRequest = {
  query: string;
  options?: {
    topK?: number;
    minScore?: number;
    temperature?: number;
    systemPrompt?: string;
  };
};

type ChatResponse = {
  answer: string;
  citations: Array<{
    source: string;
    page: number | null;
    chunk_id: string;
    snippet: string;
    score: number;
  }>;
  retrieval: {
    topK: number;
    matched: number;
    latencyMs: number;
  };
  warnings?: string[];
};
```

---

## **Code Walkthrough**

### **1) RAG Store (`src/lib/rag-store.ts`)**

This module owns chunking + vector storage lifecycle.

```ts
import { ChromaClient, type Collection } from 'chromadb';

const CHROMA_COLLECTION_NAME = 'rag-studio-collection';
let collection: Collection | null = null;

async function getCollection(): Promise<Collection> {
  if (collection) return collection;

  const client = new ChromaClient({ path: process.env.CHROMA_URL || 'http://localhost:8000' });
  collection = await client.getOrCreateCollection({ name: CHROMA_COLLECTION_NAME });
  return collection;
}
```

Ingestion pipeline:

```ts
import { getEmbeddings } from './model-runtime';

export async function ingestDocument(args: {
  source: string;
  text: string;
  chunkSize: number;
  chunkOverlap: number;
}) {
  const parts = chunkText(args.text, args.chunkSize, args.chunkOverlap);
  if (parts.length === 0) return [];

  const embeddings = await getEmbeddings(parts);
  const collection = await getCollection();

  const records = parts.map((part, index) => {
    const chunkId = `${args.source}::${index}`;
    return {
      id: chunkId,
      chunk_id: chunkId,
      source: args.source,
      page: null,
      text: part,
      created_at: new Date().toISOString(),
    };
  });

  await collection.add({
    ids: records.map((r) => r.id),
    embeddings,
    documents: records.map((r) => r.text),
    metadatas: records.map((r) => ({
      source: r.source,
      page: r.page,
      chunk_id: r.chunk_id,
      created_at: r.created_at,
    })),
  });

  return records;
}
```

### **2) Model Runtime (`src/lib/model-runtime.ts`)**

This module bridges app code to local model execution.

```ts
export async function getEmbeddings(texts: string[]): Promise<number[][]> {
  const modelId = 'nomic-embed-text-v1';
  const payload = JSON.stringify({ texts });

  const result = await runCommandWithInput(
    'foundry',
    ['model', 'run', modelId],
    payload,
  );

  if (!result.ok) {
    throw new Error(`Failed to get embeddings: ${result.stderr}`);
  }

  return parseEmbeddings(result.stdout);
}
```

### **3) Retrieval Path (`/api/chat/route.ts`)**

```ts
import { searchChunks } from '@/lib/rag-store';

export async function POST(req: Request) {
  const { query, options } = await req.json();
  const topK = options?.topK ?? 5;
  const minScore = options?.minScore ?? 0.2;

  const hits = await searchChunks(query, topK, minScore);

  // Build context prompt + generate answer with citations.
  // Fallback: return ranked excerpts if generation is unavailable.
  return Response.json({ hits });
}
```

---

## **Citation Contract**

Citation quality is not optional in RAG.

Target output style:

```txt
The retrieval layer should use deterministic chunk IDs and score-threshold fallback [1][2].

[1] architecture.md (chunk: architecture::12)
[2] srs.pdf (page: 8, chunk: srs::8::3)
```

This gives users traceability and makes debugging retrieval quality practical.

---

## **Failure Modes We Handle Explicitly**

### **Ingestion**

- malformed PDF -> skip + report `errors[]`
- unsupported MIME type -> `skipped[]`
- empty extracted text -> skip with reason

### **Chat/Retrieval**

- empty vector store -> clear message: ingest documents first
- no relevant chunks -> warning + safe fallback response
- runtime unavailable -> actionable error (start Foundry/LM Studio)
- generation timeout -> partial failure + retry guidance

---

## **Getting Started (Week 2 Companion Project)**

Before chat testing, ingest the sample PDFs from `samples/week2/` in the companion repo.

### **Prerequisites**

- Node.js
- Chroma server (default expected URL: `http://localhost:8000`)
- Foundry Local installed
- embedding model available: `nomic-embed-text-v1`
- optional LM Studio runtime if you want `runtime=lmstudio`

Run Chroma:

```bash
docker run -p 8000:8000 chromadb/chroma
```

Download embedding model:

```bash
foundry model download nomic-embed-text-v1
```

(Optional) start LM Studio server:

```bash
lms server start
```

![LM Studio runtime setup](/24weeks/week2/lm_studio.png)

### **Install + Run**

```bash
npm install
npm run dev
```

Optional `.env.local` override:

```bash
CHROMA_URL=http://localhost:8000
```

---

## **Week 2 Acceptance Criteria**

Week 2 is complete when all are true:

1. Markdown and PDF ingestion works.
2. Ingest API returns `documentsIndexed` and `chunksIndexed`.
3. Answers are retrieval-grounded, not generic.
4. Citations appear whenever matches exist.
5. Empty-index and no-match paths are graceful.
6. Runtime-down errors are actionable.

---

## **What Week 2 Unlocks**

Week 2 gives us a usable local knowledge layer.

That unlocks Week 3 work on:

- structured outputs
- validation pipelines
- higher-confidence agent behavior on top of grounded context

---

## **References**

- Chroma docs: [https://docs.trychroma.com/](https://docs.trychroma.com/)
- Foundry Local docs: [https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/)
- Foundry Local get started: [https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/get-started](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/get-started)
- LM Studio docs: [https://lmstudio.ai/docs](https://lmstudio.ai/docs)
- `nomic-embed-text-v1` model card: [https://huggingface.co/nomic-ai/nomic-embed-text-v1](https://huggingface.co/nomic-ai/nomic-embed-text-v1)
- RAG primer: [https://research.ibm.com/blog/retrieval-augmented-generation](https://research.ibm.com/blog/retrieval-augmented-generation)
