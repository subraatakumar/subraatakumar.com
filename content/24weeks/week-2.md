---
title: "Week 2: Local RAG Architecture (LM Studio vs Microsoft Foundry Local)."
description: "Decision-complete architecture for Week 2 Local RAG, covering both LM Studio and Microsoft Foundry Local designs, with Microsoft Foundry Local selected as the implementation path."
date: "2026-03-16"
image: "/images/24weeks/week-2.png"
slug: "24-weeks-of-ai-native-saas"
tags:
  - ai
  - saas
  - software-development
  - large-language-models
  - rag
  - Subrata Kumar Das
excerpt: "Week 2 defines a production-ready Local RAG architecture with ingestion, chunking, embeddings, retrieval, citations, and failure handling, comparing LM Studio and Foundry Local before choosing Foundry Local for build execution."
author: "Subrata Kumar Das"
updated: "2026-03-16"
draft: false
readingTime: "16 min"
---

## **Week 2 Mission: Build a Local RAG Engine That You Can Trust**

Week 1 proved we can compare model outputs.

Week 2 is about **grounding** those outputs in your own documents.

Goal: Build a Local RAG system where answers come from your files (Markdown/PDF), with visible citations and deterministic architecture.

---

## **What This Plan Covers**

This architecture plan includes both:

* **Option A: LM Studio Local RAG Architecture**
* **Option B: Microsoft Foundry Local RAG Architecture**

And then locks implementation choice:

* **Final build path for this project: Microsoft Foundry Local RAG**

---

## **Decision Summary (Locked)**

### Why compare both?

Both are local-first inference approaches, but they differ in ecosystem and operational model.

### Final decision for Week 2 build

We will implement with **Microsoft Foundry Local** for this project, because:

1. It aligns with your current direction and tooling interest.
2. It gives a clear local runtime contract (CLI/SDK/REST style).
3. It keeps a clean path to Microsoft ecosystem integration later (if needed).

LM Studio architecture is still documented fully as a fallback/alternative.

---

## **Shared Week-2 Architecture (Applies to Both Options)**

Regardless of runtime, the RAG pipeline is the same:

1. **Ingest files** (`.md`, `.pdf`)
2. **Extract text** and normalize content
3. **Chunk text** into retrievable units
4. **Generate embeddings** for each chunk
5. **Store vectors** in Chroma with metadata
6. **Retrieve top-k chunks** for user query
7. **Generate answer** from retrieved context
8. **Return citations** mapped to chunk metadata

---

## **Core Data Model (Minimal, Locked)**

Each chunk stored in vector DB must include:

```ts
type ChunkRecord = {
  id: string;            // e.g., source::page::chunk_index
  source: string;        // filename or logical doc id
  page: number | null;   // null for markdown/plain text
  chunk_id: string;      // stable per document
  text: string;          // chunk text
  embedding: number[];   // vector
  token_count: number;   // optional but recommended
  created_at: string;    // ISO timestamp
};
```

---

## **API Interfaces (Locked for Week 2)**

### `POST /api/ingest`

Purpose: ingest one or more local files and index them into Chroma.

Request:

```ts
type IngestRequest = {
  files: Array<{
    name: string;
    mimeType: 'text/markdown' | 'application/pdf' | 'text/plain';
    contentBase64: string;
  }>;
  options?: {
    chunkSize?: number;      // default: 800 chars
    chunkOverlap?: number;   // default: 120 chars
  };
};
```

Response:

```ts
type IngestResponse = {
  success: boolean;
  documentsIndexed: number;
  chunksIndexed: number;
  skipped: Array<{ name: string; reason: string }>;
  errors: Array<{ name: string; message: string }>;
};
```

### `POST /api/chat`

Purpose: run retrieval-grounded Q&A over indexed chunks.

Request:

```ts
type ChatRequest = {
  query: string;
  options?: {
    topK?: number;              // default: 5
    minScore?: number;          // default: 0.2
    temperature?: number;       // default: 0.2
    systemPrompt?: string;
  };
};
```

Response:

```ts
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

## **Chunking Strategy (Locked)**

* **Chunk size:** 800 characters
* **Overlap:** 120 characters
* **Splitter rule:** paragraph-aware first, fallback to hard-length split
* **Normalization:** collapse repeated spaces/newlines, preserve bullet and heading boundaries where possible

Why this default:

* Keeps chunks small enough for precise retrieval
* Preserves enough context continuity through overlap
* Works well for both markdown notes and extracted PDF text

---

## **Retrieval Strategy (Locked)**

* Similarity search in Chroma with `topK = 5`
* Apply optional score threshold `minScore = 0.2`
* If fewer than 2 matches pass threshold, still return best 1 with a warning
* Inject retrieved chunks into prompt with explicit citation tags, e.g.:

```txt
[CTX-1] source=architecture.md page=null chunk=architecture::12
...
[CTX-2] source=srs.pdf page=8 chunk=srs::8::3
```

Generation must cite contexts by source and chunk.

---

## **Citation Format (Locked)**

Answer body will include numbered citations, and API returns structured citation objects.

Example render style:

```txt
The retrieval layer should use score-threshold fallback and deterministic chunk IDs for observability [1][2].

[1] architecture.md (chunk: architecture::12)
[2] srs.pdf (page: 8, chunk: srs::8::3)
```

---

## **Failure Modes and Handling (Locked)**

### Ingestion failures

1. **Malformed PDF / unreadable file**
   * Skip file, return error entry in `errors[]`
2. **Unsupported mime type**
   * Skip with explicit reason in `skipped[]`
3. **No extractable text**
   * Skip and report `empty_text`

### Retrieval/chat failures

1. **Vector DB empty**
   * Return graceful message: "No indexed documents found. Ingest files first."
2. **No relevant chunks**
   * Return low-confidence answer + warning + empty citations
3. **Local model unavailable**
   * Return actionable error: runtime not running/model not loaded
4. **Timeout during generation**
   * Return partial failure with retry suggestion

---

## **Option A: LM Studio Local RAG Architecture**

### Runtime

* Local generation model hosted via LM Studio local server endpoint
* Separate embedding model via LM Studio (if available in your setup) or fallback embedding runtime

### Service wiring

* `Ingest Service` -> parser -> chunker -> embedder -> Chroma
* `Chat Service` -> query embed -> retrieve top-k -> prompt builder -> LM Studio generation

### Pros

* Quick start with user-friendly desktop workflow
* Easy model switching in UI
* Great for experimentation and demos

### Tradeoffs

* Environment parity across machines can vary
* Embedding model/runtime setup may be less standardized depending on local stack

### Recommended when

* Fast prototyping and model experimentation is top priority

---

## **Option B: Microsoft Foundry Local RAG Architecture (Selected)**

### Runtime

* Generation model served by Foundry Local runtime
* Embedding model also served via Foundry Local where supported by selected model set

### Service wiring

* `Ingest API` calls Foundry Local embedding endpoint for each chunk
* Chroma stores vectors and metadata
* `Chat API` retrieves top-k chunks and calls Foundry Local generation endpoint with contextual prompt

### Pros

* More standardized local runtime contract for enterprise-like workflows
* Clear alignment with Microsoft AI platform path
* Better long-term fit for structured local deployment discipline

### Tradeoffs

* Model availability varies by platform/runtime support
* Initial local setup can be more procedural than LM Studio

### Recommended when

* You want disciplined local architecture with Microsoft ecosystem alignment

---

## **Selected Build Blueprint (Microsoft Foundry Local)**

### Components

1. **Frontend UI** (Next.js page)
   * Upload documents
   * Ask grounded questions
   * Render citations and retrieval info
2. **Ingest API** (`POST /api/ingest`)
   * Parse + chunk + embed + upsert to Chroma
3. **Chat API** (`POST /api/chat`)
   * Embed query + retrieve + generate + cite
4. **Vector Store** (Chroma)
   * Local persistent collection
5. **Foundry Local Runtime**
   * One generation model + one embedding model

### Default operational values

* `chunkSize = 800`
* `chunkOverlap = 120`
* `topK = 5`
* `temperature = 0.2`

### Security baseline

* Local-only storage by default
* No external doc upload by default
* No secret values written to client logs

---

## **Evaluation Checklist (Acceptance Criteria)**

Week-2 is complete only if all pass:

1. Upload markdown and PDF files successfully.
2. Ingest API reports counts (`documentsIndexed`, `chunksIndexed`).
3. Chat response uses retrieved context (not generic answer).
4. Every answer includes at least one citation when retrieval matches exist.
5. "No documents ingested" case handled gracefully.
6. "No relevant chunks" case returns warning and safe fallback behavior.
7. Foundry Local runtime down/not loaded case shows actionable error.
8. End-to-end median response time is acceptable for local dev (documented by logs).

---

## **Implementation Sequence (Week-2 Build Order)**

1. Build ingestion parser + chunker utility.
2. Integrate Foundry Local embeddings.
3. Upsert chunks to Chroma with metadata schema.
4. Build retrieval pipeline and query embedding.
5. Build answer generation with citation-aware prompt template.
6. Add UI for upload + ask + citation rendering.
7. Add edge-case handling and acceptance tests.

---

## **Reference Links**

### Local RAG fundamentals
* RAG overview: [https://www.pinecone.io/learn/retrieval-augmented-generation/](https://www.pinecone.io/learn/retrieval-augmented-generation/)

### Chroma
* Chroma docs: [https://docs.trychroma.com/](https://docs.trychroma.com/)

### LM Studio
* LM Studio docs: [https://lmstudio.ai/docs](https://lmstudio.ai/docs)

### Microsoft Foundry Local
* What is Foundry Local: [https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/what-is-foundry-local](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/what-is-foundry-local)
* Foundry Local get started: [https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/get-started](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/get-started)
* Foundry Local SDK reference: [https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/reference/reference-sdk](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/reference/reference-sdk)

---

## **Week-2 Outcome Target**

By the end of Week 2, you should have a fully local RAG prototype that can:

* ingest personal docs,
* retrieve grounded context,
* answer with citations,
* and run on Microsoft Foundry Local as the selected runtime.

This sets up Week 3 to focus on structured outputs and validation pipelines on top of reliable retrieval-grounded generation.
