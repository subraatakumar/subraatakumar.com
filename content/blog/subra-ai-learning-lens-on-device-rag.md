---
title: "How We Built On-Device RAG for Subra AI’s Learning Lens"
description: "An implementation walkthrough of local ingestion, SQLite FTS5 retrieval, Lens-scoped context, and on-device generation in Subra AI's Learning Lens."
date: "2026-09-23"
slug: "subra-ai-learning-lens-on-device-rag"
tags:
  - rag
  - on-device-ai
  - react-native
  - sqlite
  - fts5
  - gemma
author: "Subrata Kumar Das"
updated: "2026-09-23"
draft: false
readingTime: "12 min"
excerpt: "The actual retrieval and generation pipeline behind Subra AI’s Learning Lens, why we started with local full-text search, and where the current approach needs to improve."
---

Learning Lens answers questions about material a user has put in a private Vault. The core engineering problem is to find useful passages from that material and give them to an on-device language model at answer time. We implemented a retrieval-augmented generation (RAG) pipeline: ingest files locally, turn their useful content into searchable text, retrieve matches within the Learning Vault, and pass the matches to an on-device Gemma model.

This article describes the implementation in the current Subra AI codebase. It also explains why the design is a practical starting point for a mobile personal Vault, and where its guarantees stop.

## First, what does RAG mean?

Imagine you add a React textbook to the Vault and ask, “How does React decide what to update?” The downloaded language model has general knowledge about React, but it has not memorized your textbook. **Retrieval** finds passages from the textbook that mention the relevant idea. **Augmentation** places those passages beside your question in the model’s input. **Generation** is the model writing an explanation from that input. The three steps make up *retrieval-augmented generation*, or RAG.

This is similar to answering an open-book question: find the useful pages first, then write the answer. The book does not train or change the model. Its passages are supplied only for that answer.

For one question, the actual sequence is:

1. You import a PDF chapter about React. The app extracts its text and marks it ready for search.
2. You ask how React decides what to update. Search looks for matching words in Learning Vault documents.
3. The app selects a few matching passages and attaches their filenames and any available page markers.
4. Gemma receives the question and passages, then writes an answer. Its instructions ask it to use those passages and cite them.

The answer is generated when you ask; importing the PDF does not retrain Gemma.

## The pipeline in one view

```text
PDF / text / image / audio
          │
          ▼
Local extraction or on-device inference
          │
          ▼
Lens-scoped SQLite Vault record + FTS5 search row
          │
          ▼
Question → local retrieval → selected text chunks
          │
          ▼
Question + source labels + chunks → on-device Gemma → answer
```

Retrieval and generation have distinct jobs. **SQLite** is a database stored on the phone; it selects candidate evidence. **Gemma** is the downloaded language model that reads the evidence and writes an explanation on the phone. The model does not search the database. Keeping the search outside the model lets us filter by Lens before private content enters the prompt.

## 1. Ingest sources into a local Vault

Each source is copied into app-owned file storage. A SQLite `vault_documents` record stores its ID, filename, media type, relative file path, Lens ID, processing status, and **derived text**: text extracted from or generated about the original. The original file and derived text have separate lifecycles: a user can delete the original image or recording while keeping its searchable description or transcript.

The source types reach searchable text through different paths:

| Source | Current extraction path | Searchable representation |
| --- | --- | --- |
| PDF | Extract text page by page | Page text with `SOURCE_PAGE:n` markers |
| Text or Markdown | Read the local file | File text |
| Image | Analyze the local image with the downloaded Gemma model | Model-generated readable text and visual description |
| Audio | Transcribe local recording in timed chunks | Transcript with timestamps |
| Live transcription | Save the transcript as a text source | Transcript text |

The image path is particularly important: merely storing pixels does not make an image retrievable through text search. Before image import, the UI checks for the local model and offers a route to download it if absent. On successful import, the app saves the original image, asks the local vision model to extract readable text and describe meaningful visual content, and stores the result as derived text. If analysis fails, the image remains in the Vault with a `needs-processing` status rather than being marked searchable.

Audio likewise becomes searchable only after transcription. The app stores chunk checkpoints and combines completed transcripts with time markers. The original media is still available independently of the transcript.

This design suits a private mobile Vault: **ingestion** is the one-time preparation that turns an imported file into text the app can search. Chat then searches that text. It also gives the app a clear readiness state for each document: saved is different from **indexed**, which means prepared for search.

## 2. Restrict retrieval to the Learning Lens

Vault records carry a `lens_id`, such as `learning`. Learning Chat passes that ID into retrieval, and the database query searches only rows with the same ID. This is what **Lens scope** means here: a question in Learning Lens searches Learning Vault content.

The database applies this filter before passing results to Gemma. Content from another Lens should not be supplied to the model in the first place. The same shared Vault and Chat components can serve future Lenses with different scopes and grounding modes.

## 3. Search locally with FTS5, then select chunks

**FTS5** means **Full-Text Search 5**. It is SQLite’s text-search extension. It builds a separate search index that helps the app find words inside long documents quickly. If you ask about “reconciliation,” the app can find candidate documents containing that term without reading every textbook in JavaScript. The index stores derived text, not the original PDF, image, or audio bytes.

The search table stores `lens_id` alongside the filename and content:

```sql
CREATE VIRTUAL TABLE IF NOT EXISTS vault_search
USING fts5(
  document_id UNINDEXED,
  lens_id UNINDEXED,
  name,
  content
);
```

The retrieval query uses both the Lens filter and an FTS match:

```sql
SELECT name, content
FROM vault_search
WHERE lens_id = ? AND vault_search MATCH ?
LIMIT ?;
```

Each `?` is a parameter supplied by the app: the Lens ID, the search expression, and the maximum candidate count. `UNINDEXED` means FTS5 stores that field for identification and filtering without adding its words to the full-text index. `MATCH` asks FTS5 to look for query terms in the indexed text.

A normal database query can find an exact value such as a document ID. FTS5 is optimized for finding terms within longer text. It narrows the search to candidate documents before JavaScript scores smaller passages.

The first version of retrieval scanned indexed documents and counted query-term matches. We added FTS5 as a local candidate search. The app rebuilds its search rows from indexed Vault documents during database initialization and updates a row when imported or derived content changes. Deleting an entry and its inference also removes its search row. The search index is derived from the Vault records; it is not another copy of the original media files.

If FTS5 is unavailable, retrieval falls back to the earlier keyword scan. This fallback keeps local search functional across SQLite builds with different extension support.

The current index is **document-level**: one FTS5 row represents a document’s searchable text. A **chunk** is a shorter piece of that text. After FTS5 finds candidate documents, the app splits their content into chunks of up to roughly 220 words each, scores each chunk by the number of matching query terms, discards zero-match chunks, sorts the rest, and returns at most four. These are word counts, not model tokens. This second filter is necessary: a document match does not mean every part of that document is relevant. A 100-page PDF may mention React on many pages, while only one paragraph addresses the question.

The question is split into terms longer than two characters. The FTS5 query looks for any of those terms; chunk scoring then favors passages containing more of them. This is a straightforward word-match strategy. It does not measure whether two differently worded sentences mean the same thing. The current chunk score checks whether each term appears in the chunk, not how often it appears.

In simplified form:

```ts
const candidates = await searchIndexedDocuments(question, lensId);
const context = candidates
  .flatMap(document => splitIntoChunks(document.content))
  .map(chunk => ({chunk, score: countMatchingTerms(chunk, question)}))
  .filter(result => result.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 4);
```

This is a good first mobile implementation because SQLite is already used for Vault metadata, search stays on the device, and keyword matches are easy to inspect. It is **not** semantic retrieval: a question that paraphrases a passage without sharing its vocabulary can be missed. Document-level FTS can also overlook a useful late passage if the candidate limit is filled by other documents.

## 4. Pass bounded evidence to the model

The **prompt** is the text the app sends to Gemma for one answer. The retriever formats selected content with a source label and adds it to that prompt. For a PDF page, the intended shape is:

```text
[React Handbook.pdf · page 12]
React compares the next element tree with the previous one...
```

The Chat controller also includes the latest question, conversation context, and Lens-specific instructions. Learning Lens is configured with `groundingMode: 'vault'`. Its system instruction tells Gemma to use only the supplied Vault sources, cite their bracketed labels, and say that the Learning Vault lacks enough information if the sources are insufficient.

The generated answer is produced locally through the same on-device model service used for chat. The model must be downloaded before generation or media inference can run. The Vault can still store and list files without a model, but RAG answering depends on that model being available.

The practical benefit of this design is a small, controlled prompt: the model receives a few selected passages instead of entire textbooks or recordings. This reduces **context use**, the amount of input the model must hold while answering, and gives it identifiable source labels to refer to.

## What this implementation does and does not guarantee

The application enforces **Lens-scoped retrieval** in SQL. It also prevents unprocessed documents from entering the search index by indexing only records marked `indexed`. The Learning prompt requests Vault-only, cited answers.

There are still limits to the current implementation:

- **Vault-only answers are instructed, not mechanically verified.** The controller sends a no-match notice to the model, but it does not yet stop generation when retrieval returns no evidence. A model can still answer from prior knowledge despite the instruction. Automatically returning “I couldn’t find enough in your Vault” before model generation would be **application-level abstention**.
- **Citations are requested, not checked.** The model writes citation text; the app does not verify each claim against a retrieved chunk. Page markers are embedded in document content and chunking may separate a later chunk from its page marker, so page attribution is not always reliable. Audio timestamps remain text within the retrieved passage rather than structured citation metadata.
- **Image descriptions may be wrong.** The local vision model creates a useful searchable representation, but that representation is model output rather than exact OCR with confidence scores.
- **Retrieval is lexical, meaning it matches words.** FTS5 and term counting are fast and transparent, but synonyms and conceptual questions can fail when wording differs. **Semantic retrieval** would compare meaning, often by turning text into numeric vectors called embeddings.
- **Follow-up retrieval uses the latest question.** Earlier conversation is included in the generation prompt, but the search query is built from the latest user message. A follow-up such as “explain that further” may retrieve no useful passage because it does not repeat the subject’s terms.

These limits matter because “RAG” does not automatically mean “verified answer.” The current system grounds the prompt in retrieved local content; a stronger guarantee requires application-level abstention and citation validation.

## Why this was the right starting architecture

For a personal learning Vault on a phone, FTS5 gives us a valuable combination: local operation, no external search service, modest implementation complexity, clear Lens filtering, and inspectable matches. It also reuses the app’s SQLite storage. A separate **vector index** would store embeddings for meaning-based search and require additional on-device computation and storage. FTS5 is a strong starting choice for exact words, names, and technical terms; it is not universally the best retriever for every question.

The implementation separates concerns cleanly:

1. Ingestion converts each media type into searchable text.
2. SQLite stores and scopes that text.
3. Retrieval selects a bounded amount of evidence.
4. The local model explains the evidence.

That split lets us improve retrieval without rebuilding the Chat UI or changing the privacy model.

## The next RAG improvements

The next step is a first-class `vault_chunks` table with `document_id`, `lens_id`, text, page number or audio time range, and processing version. FTS5 should index those chunks directly. This would avoid splitting full documents on every query and keep page or time information attached to each result.

Then we can add three safeguards in order:

1. **Application-level abstention:** if retrieval finds no sufficiently relevant chunk, return a Vault-insufficient response before calling Gemma.
2. **Citation validation:** attach retrieved chunk IDs to answers and check that displayed citations refer to supplied evidence.
3. **Hybrid retrieval where needed:** combine FTS5 word matches with local embedding matches for paraphrased questions, then rank the combined results and keep a small context set.

The best retrieval method depends on corpus size and question style. Exact technical terms in a small collection often work well with FTS5. A large textbook library or questions expressed in different wording can justify chunk-level indexing and local semantic search. We can make that choice using a test set of questions with expected documents, pages, timestamps, and unanswerable cases.

## Closing

Subra AI’s Learning Lens RAG pipeline runs extraction, search, and generation on the device. Its current strength is the clear boundary between a Lens-scoped Vault, local evidence retrieval, and local answer generation. Its current weakness is that relevance and citations are still partly delegated to the model. The architecture makes those limits visible and gives us a direct path to stronger retrieval and verifiable grounding as the Learning Vault grows.
