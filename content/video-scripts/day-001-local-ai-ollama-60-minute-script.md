# Day 1 of 365: Taking AI Off the Cloud and Bringing It to Local Hardware

**Target duration:** 60 minutes  
**Series:** 365 Days to 50 LPA  
**Format:** Presenter-led tutorial with terminal demonstration, diagrams, and screen recording  
**Primary audience:** Mobile/full-stack developers beginning applied AI, engineers preparing for senior roles, and technical founders  

## Production note

This is a spoken script, not a promise that compensation will automatically follow from completing a calendar. “50 LPA” is the career target. The series must demonstrate stronger engineering judgment, shipped work, communication, and business impact—the things that can improve access to higher-value roles.

Commands and model availability can change. Confirm the current model tag in the official Ollama library before recording. Local processing improves data control, but privacy still depends on the complete application: plugins, telemetry, external tools, and any cloud integrations must be reviewed separately.

---

## 00:00–02:30 — Cold open: Day 1 begins

**[VISUAL: Black screen. A cloud icon appears on the left, a laptop on the right. A stream of prompt text begins moving toward the cloud, then stops and reverses into the laptop.]**

**HOST:**

What if I told you that the AI assistant you use every day does not always need the internet, does not always need a paid API, and does not always need to send your prompt to somebody else’s server?

Today, we are taking AI off the cloud and bringing it directly onto our own hardware.

This is Day 1 of my 365 Days to 50 LPA journey.

For the next 365 days, I am not going to chase a salary by collecting random buzzwords. I am going to build the engineering depth, product judgment, system-design thinking, and public evidence expected from a stronger senior or staff-level engineer working across mobile, full stack, and applied AI.

And we are starting at the most useful place: understanding where an AI model actually runs, what it consumes, and what that decision means for privacy, performance, and cost.

By the end of this session, we will:

1. Understand what a large language model is.
2. Install or verify Ollama as a local inference runtime.
3. Run an open model on our own machine.
4. Read the output of `ollama ps`.
5. Understand why a model file that is only a few gigabytes can consume much more runtime memory.
6. Create a smaller-context model configuration.
7. Connect this local experiment to a real enterprise concern: infrastructure cost and concurrency.

Most importantly, we will finish with evidence—not just “I watched a tutorial,” but commands, observations, and engineering decisions we can explain.

**[ON SCREEN: DAY 1 — LOCAL AI, MEMORY, CONTEXT, COST]**

Let’s begin.

---

## 02:30–06:30 — Why begin the journey with local AI?

**[VISUAL: Presenter on camera. Beside the presenter: Privacy, Cost, Offline, Control.]**

**HOST:**

Before touching the terminal, let’s answer a reasonable question: why should a mobile or full-stack engineer care about running an AI model locally?

Because AI architecture is not only about selecting a model. It is about deciding where computation happens, where data travels, what hardware is required, how much each request costs, and what happens when the network disappears.

When we call a hosted AI API, the workflow usually looks like this: our application sends a prompt across the network; a provider schedules the request on remote accelerators; the model generates tokens; and the response returns to our application.

That approach is powerful. Cloud models may be larger, easier to scale initially, and easier to update centrally. This video is not arguing that cloud AI is bad.

But it comes with trade-offs:

- Data leaves the local device unless we design a different boundary.
- Every request depends on network access and provider availability.
- Usage can create per-token or subscription costs.
- Latency includes networking and queueing, not only inference.
- The product becomes dependent on external rate limits, policies, and model lifecycle decisions.

Local AI changes that boundary. We download the model once and run inference on hardware we control. That can give us:

- Better control over prompts and private data.
- Offline availability after the software and model are downloaded.
- Predictable marginal inference cost on already-owned hardware.
- Direct visibility into memory and performance constraints.
- Freedom to prototype without consuming a paid API on every request.

But local AI also has constraints:

- Our device has limited RAM or VRAM.
- Smaller models may produce weaker results than frontier cloud models.
- Battery, thermal pressure, disk space, and startup time matter.
- We—not a cloud provider—must choose, test, and update the model.

This ability to explain both sides is part of the Day 1 lesson. Senior engineering is rarely “technology A is always better than technology B.” It is knowing which trade-off fits the problem.

**[ON SCREEN: Architecture is a trade-off, not a religion.]**

---

## 06:30–11:00 — What is an LLM?

**[VISUAL: Animated sentence: “The developer opened the…” Candidate next words appear with probabilities.]**

**HOST:**

An LLM, or large language model, is a model trained on enormous collections of text and code to learn statistical patterns in language.

A useful beginner mental model is “very sophisticated autocomplete.” Given the tokens already present, the model estimates what token should come next. It repeats that process to generate an answer.

That description sounds simple, but the learned behavior can support summarization, question answering, translation, code generation, classification, extraction, and many other tasks.

The word “large” often refers to the number of learned parameters. When we see names containing 1B, 3B, 8B, or 70B, the B means billions of parameters.

Parameters are not facts stored like rows in a database. They are numerical values learned during training. Together, they shape how the model transforms an input sequence into probabilities for the next token.

Here are four concepts to keep separate:

**First: training.** Training is the expensive process that learns the parameters. We are not training Llama or Gemma today.

**Second: model weights.** These are the learned parameters we download. They form the model’s long-term learned behavior.

**Third: inference.** This is what happens when we run the trained model to answer a prompt.

**Fourth: context.** This is the temporary input and conversation history available to the model during a particular request or session.

If the model weights are the learned brain, context is the whiteboard currently in front of it.

That distinction becomes critical later, because the model file may remain the same while context length changes memory consumption dramatically.

**[VISUAL: WEIGHTS = LEARNED PARAMETERS. CONTEXT = CURRENT WORKING INPUT.]**

Commercial services include products built around models from providers such as OpenAI and Anthropic. Open-weight families that can be downloaded include Llama, Gemma, Mistral, Qwen, and others, depending on their licences and available formats.

“Open weight” is the careful term here. A downloadable model is not automatically open source in every conventional sense. We still need to read its licence and acceptable-use terms before using it in a product.

---

## 11:00–15:30 — What Ollama does

**[VISUAL: Model library → Ollama → Terminal / Local API / App.]**

**HOST:**

Ollama makes local model inference much easier.

Without a tool like Ollama, a beginner may need to find the correct model files, choose a compatible quantization, configure a runtime, handle GPU acceleration, expose an interface, and remember several commands before seeing one response.

Ollama packages much of that workflow behind a simple command-line experience.

At a high level, it gives us:

- A way to pull and manage compatible models.
- A local inference runtime.
- Hardware acceleration where supported.
- A command-line chat experience.
- A local HTTP API, commonly available on port `11434`.
- A `Modelfile` format for creating reusable configurations.

That local API is especially important for application developers. We can connect a Node application, a Python service, a desktop tool, or another local client to the runtime without building a model server from scratch.

The ecosystem also includes browser interfaces such as Open WebUI, coding tools, and integrations with frameworks such as LangChain or LlamaIndex.

However, remember the privacy boundary: Ollama itself can run inference locally, but an interface or plugin connected to it could still send data elsewhere. “The model is local” does not automatically mean “every component is offline.” We verify the whole path.

Local inference also avoids per-token API fees, but it is not literally costless. We still pay for hardware, electricity, storage, maintenance, and engineering time. On a machine we already own, the incremental cost of experimentation can be very low—and that is the useful point.

**[ON SCREEN: No per-token bill ≠ no cost at all.]**

---

## 15:30–21:00 — Demo 1: Run a model locally

**[SCREEN RECORDING: Official Ollama website, then terminal.]**

**HOST:**

Let’s move from theory to evidence.

If Ollama is not installed, visit the official Ollama website and follow the instructions for your operating system. I will not reproduce an installation command from memory because installation instructions can change. Always use the official source.

Once installed, open a terminal.

First, verify that the command is available.

**[TYPE:]**

```bash
ollama --version
```

Your version may differ from mine. The important signal is that the shell recognizes the command.

Now let’s run a small model. I am using Llama 3.2 in this demonstration because the source chapter uses it. Check the official model library for the exact currently supported tag on the day you record.

**[TYPE:]**

```bash
ollama run llama3.2
```

The first run may download the model, so this step needs internet access. After the model is present locally, inference can work without an active internet connection.

Once the prompt appears, ask something easy to verify.

**[TYPE AS MODEL PROMPT:]**

```text
Explain the difference between RAM and disk storage in three bullet points.
```

**[PAUSE. Let the response generate. Do not cut away immediately. Show generation speed.]**

We are not judging intelligence from one prompt. We are confirming that inference works on this machine.

Try a second prompt related to coding:

```text
Write a JavaScript function that returns the largest number in a non-empty array. Explain its time complexity.
```

Read the code. Do not trust it because it came from a model. Check the empty-input assumption, check the loop or reduction, and verify the complexity claim.

This review habit matters throughout the 365-day journey: AI can propose; we remain accountable for correctness.

To exit the interactive session, use the command shown by your installed Ollama version—commonly `/bye`—or press the appropriate terminal interrupt.

**[B-ROLL: Disconnect Wi-Fi only if the model is already downloaded and the test is safe for the recording setup. Run one short prompt to demonstrate offline inference.]**

If the response still generates, we have direct evidence that the model is executing locally.

---

## 21:00–26:30 — Will a model run smoothly? Parameters, files, and memory

**[VISUAL: Four cards: 1–3B, 7–9B, 14–32B, 70B+. A large “depends” label appears.]**

**HOST:**

Now we reach the first engineering constraint: will a model run smoothly on our machine?

The chapter provides a beginner rule of thumb based on parameter count:

- Around 1B to 3B models can often run on ordinary modern laptops.
- Around 7B to 9B models commonly need more memory.
- Models in the 14B to 32B range are better suited to upgraded laptops, stronger desktops, or workstations.
- 70B-class models usually require substantial memory and may need multi-GPU or high-memory systems for comfortable use.

But parameter count alone is not enough.

The actual memory requirement depends on:

- Numerical precision or quantization.
- Runtime implementation.
- Context length.
- KV-cache representation.
- GPU offloading.
- Parallel requests.
- Operating-system and application overhead.

An 8B model stored at a compact quantization can be far smaller than the same parameter count stored at higher precision.

So use three checks rather than one.

**Check one: model name and parameter count.** This gives us a rough class.

**Check two: download size and quantization.** This gives us a better estimate of the model-weight footprint, though runtime memory will still be higher.

**Check three: observe the running model.** This is where `ollama ps` becomes useful.

The chapter suggests keeping an extra 1.5 to 2 gigabytes beyond the model file. Treat that only as a starting heuristic for small experiments—not a universal guarantee. A large context window or multiple sessions can demand much more.

On Apple Silicon, CPU and GPU share unified memory. On many Windows and Linux systems with discrete graphics cards, VRAM and system RAM are separate pools. If the entire workload cannot remain on the accelerator, some parts may run on CPU or move across memory boundaries, often reducing speed.

The question is therefore not only “does it launch?” It is:

- How many tokens per second do we get?
- How long is time to first token?
- Does memory pressure affect other apps?
- Is the device throttling?
- Is the quality sufficient at the selected model size?

That is a much more senior way to evaluate “runs smoothly.”

---

## 26:30–32:30 — Demo 2: Read `ollama ps`

**[SCREEN RECORDING: Two terminal windows. Model session on one side, monitoring command on the other.]**

**HOST:**

Keep the model loaded, open a second terminal, and run:

```bash
ollama ps
```

The exact columns can vary by version, but the source example shows something like:

```text
NAME               ID              SIZE    PROCESSOR    CONTEXT    UNTIL
llama3.2:latest     a80c4f17acd5    18 GB   100% GPU     131072     4 minutes from now
```

Let’s read it carefully.

**NAME** identifies the loaded model and tag.

**ID** is the identifier for that model artifact.

**SIZE** is the approximate memory footprint reported for the active model, not merely the download size on disk.

**PROCESSOR** tells us how the model is placed across CPU and GPU. If it says 100% GPU, Ollama has placed the model on the accelerator. That is generally a good sign, but it does not prove that every workload will be fast. Generation speed still depends on the model, hardware, prompt length, thermal state, and runtime.

**CONTEXT** shows the configured token capacity for the running model.

**UNTIL** indicates how long Ollama plans to keep the model loaded while idle. Unloading it returns memory to the system; the next request may then pay a model-load delay.

Now here is the surprising part from the source experiment: why might a model with an approximately 2-gigabyte file footprint show an 18-gigabyte runtime size?

Because runtime memory includes more than the stored model weights.

Use this simplified mental equation:

```text
Runtime memory ≈ model weights + KV cache + runtime buffers + overhead
```

The chapter focuses on the KV cache. During generation, transformer layers reuse the keys and values computed for previous tokens. Keeping those values in memory avoids repeating all earlier work from scratch for every new token.

The cache normally grows with sequence length, number of layers, hidden dimensions, batch size, and cache precision. Long context can therefore consume a substantial amount of memory.

One correction is important: do not describe every large reported allocation as universally fixed or identical across machines. Runtimes can allocate, reserve, page, or optimize memory differently. Measure your actual version and hardware.

**[ON SCREEN: Measure the runtime. Do not infer everything from the download size.]**

Capture your own `ollama ps` output. In the final video, hide usernames, sensitive paths, hostnames, or unrelated terminal history.

---

## 32:30–38:00 — Context windows: the digital whiteboard

**[VISUAL: A small whiteboard with four notes, then a huge whiteboard filled with pages.]**

**HOST:**

Let’s make context intuitive.

A context window is the amount of tokenized input the model can consider for a request. Depending on the application, this can include:

- The system instruction.
- Conversation history.
- Retrieved documents.
- Tool results.
- The current user prompt.
- Tokens being generated.

Think of it as a digital whiteboard.

With a small whiteboard, the model can see a few instructions and recent messages. It is cheap to maintain but cannot hold a large document or a very long conversation.

With a huge whiteboard, the model can see much more—but we pay for that capacity in memory and computation.

Context is measured in tokens, not words. In English, one token is often roughly three to four characters, but the ratio changes by language, formatting, code, and tokenizer. Never use “one token equals 0.75 words” as an exact conversion.

What happens when the input exceeds the supported context?

That depends on the client and runtime. The application may reject the request, truncate older content, or use a strategy to summarize and compact history. It is not safe to assume the model itself neatly erases the oldest message in every implementation.

For quick questions, short transactions, and focused code assistance, a context of a few thousand tokens may be enough.

For document analysis, long code files, or conversations that require extended history, we may need tens of thousands of tokens.

But “larger” is not automatically “better.” A larger window can:

- Increase memory usage.
- Increase prompt-processing latency.
- Reduce concurrency.
- Add irrelevant material that distracts the model.
- Increase cost in hosted systems.

The correct question is: what is the smallest context that reliably supports this task?

That sentence is the bridge from a hobby experiment to enterprise architecture.

---

## 38:00–44:00 — Demo 3: Create a smaller-context model

**[SCREEN RECORDING: Create a dedicated demo directory rather than using the Desktop.]**

**HOST:**

Now we will turn the lesson into a repeatable configuration.

Create a working folder and move into it. Use any safe path you prefer.

```bash
mkdir -p day-001-local-ai
cd day-001-local-ai
```

Create a file named exactly `Modelfile` with no extension. Add:

```text
FROM llama3.2
PARAMETER num_ctx 2048
```

The `FROM` line identifies the base model. The `num_ctx` parameter sets a smaller default context window for this custom configuration.

Now create the derived model:

```bash
ollama create llama3.2-small -f Modelfile
```

Then run it:

```bash
ollama run llama3.2-small
```

Ask the same short prompt we used earlier so that the workload is comparable.

In a second terminal, run:

```bash
ollama ps
```

The source chapter observed a drop from a reported 18-gigabyte runtime at 131,072 context tokens to around 2.3 gigabytes at 2,048 tokens.

Your numbers may be different—and that is not a failure. Hardware, model tag, Ollama version, cache format, and runtime behavior can all change the result.

Record a small comparison table:

```text
Configuration        Context      Reported size      Processor      Notes
Default              _______      _______            _______        _______
llama3.2-small        2048         _______            _______        _______
```

Now we have a reproducible experiment:

- Same base model.
- Same test prompt.
- Different context configuration.
- Measured runtime output.

For a stronger benchmark, repeat each prompt several times, separate cold starts from warm runs, and record time to first token and generation speed. One run is an observation, not a benchmark.

Also remember what we traded away. A 2,048-token context cannot support the same amount of conversation history or document content as a 131,072-token context.

We did not “optimize for free.” We exchanged capacity for a smaller memory footprint.

**[ON SCREEN: Optimization = an explicit trade-off.]**

---

## 44:00–50:30 — From laptop memory to enterprise cost

**[VISUAL: One GPU box. Large-context sessions fill it rapidly; small-context sessions fit in greater numbers.]**

**HOST:**

This is where Day 1 becomes relevant to a 50-LPA engineering target.

Running one model on a laptop is interesting. Explaining how runtime choices affect unit economics, reliability, and scale is professionally valuable.

In a production AI system, GPU memory is a capacity constraint. If every request holds a large KV cache, fewer requests fit on the same accelerator. When fewer requests fit, we need more hardware to serve the same traffic.

Suppose we have a customer-support classification task. The input contains a short policy instruction and a few paragraphs of ticket history. Giving that task a 128K-token context provides little benefit if it consistently uses fewer than 4K tokens.

Now compare it with a contract-analysis workflow that must examine a long document. That workflow may genuinely need a larger window—or a retrieval strategy that selects only the relevant sections.

The architectural principle is:

**Match context capacity to task requirements.**

Do not assign the maximum available context to every route simply because the model supports it.

Why?

**One: memory efficiency.** Smaller per-session caches can allow more active work on the same hardware.

**Two: latency.** Processing fewer prompt tokens is generally faster.

**Three: cost.** In hosted APIs, input tokens may be billed. In self-hosted infrastructure, memory and accelerator time affect capacity and operating expense.

**Four: reliability.** When memory is exhausted, requests can fail, spill onto slower execution paths, or force scaling events.

**Five: product quality.** A focused context containing relevant evidence can outperform a huge, noisy prompt.

The source chapter uses a simple example: if one session consumes roughly 18 gigabytes, a 24-gigabyte GPU has little room for concurrent sessions. If a constrained configuration consumes roughly 3 gigabytes, more sessions may fit.

Treat those numbers as an illustration, not a capacity plan. Real serving systems use batching, scheduling, paged attention, cache quantization, shared prefixes, model replicas, and platform-specific overhead. We load-test before promising a concurrency number.

Similarly, avoid claiming that reducing context always cuts costs by exactly 90 percent. It can produce very large savings in the right workload, but the actual result must be measured.

A credible design review might say:

> For each AI route, we will define a context budget based on observed input distributions and quality tests. We will reserve long context for workflows that need it, use retrieval or summarization where appropriate, and load-test memory, latency, and concurrency before selecting deployment capacity.

That is a statement a founder can connect to margin and an engineering leader can turn into acceptance criteria.

---

## 50:30–55:30 — How enterprise applications manage conversation memory

**[VISUAL: User → Application layer → Context policy → Local or hosted model.]**

**HOST:**

Ollama only receives the content our application sends to it. This means conversation memory is often an application responsibility.

A robust application can manage context through several techniques.

**Sliding window:** Keep only the most recent turns. This is simple, but older decisions disappear.

**Summarization:** Compress earlier conversation into a shorter representation. This saves tokens, but a poor summary may lose important details.

**Retrieval:** Store information separately and retrieve only what appears relevant to the current request. This is useful for knowledge bases, but retrieval quality becomes a new failure point.

**Structured state:** Instead of replaying an entire chat, store explicit fields such as user preference, selected product, account state, or workflow status.

**Route-specific budgets:** Give document analysis a larger context than a small intent-classification route.

**Prompt caching or shared prefixes:** Reuse repeated prompt material where supported.

Frameworks such as LangChain and LlamaIndex can help assemble these workflows, but a framework does not remove the need for measurement. We must still decide:

- What information is authoritative?
- What may be summarized?
- What must never be sent to a model?
- How do we detect truncation?
- How do we evaluate whether important context survived?

Consider a banking assistant. If a user asks, “What is my balance?”, the model should not need 100,000 words of conversation. The balance itself should come from an authorized tool or backend system, not from model memory. The prompt should include the minimum information required to format and explain the verified result.

Now consider a code review. We may need the changed files, relevant interfaces, tests, and project conventions—but still not the entire repository blindly.

Context engineering is the discipline of giving the model the right information, in the right structure, within an intentional budget.

That is bigger than “prompt engineering.”

---

## 55:30–58:30 — Day 1 evidence and interview articulation

**[VISUAL: Checklist appears one item at a time.]**

**HOST:**

We are almost done, but the journey only counts if we capture evidence.

For Day 1, save:

- Your Ollama version.
- The exact model and tag tested.
- Your machine’s relevant memory and processor details.
- The prompt used for comparison.
- `ollama ps` output for the default configuration.
- The `Modelfile` containing `PARAMETER num_ctx 2048`.
- `ollama ps` output for the smaller-context configuration.
- A short note describing what changed.
- A limitations section explaining why the result may differ on other machines.

Do not publish private terminal data. Remove usernames, home-directory paths, tokens, proprietary prompts, and unrelated process information.

Now practise explaining the lesson as if an interviewer asks:

**“How would you reduce the serving cost of an LLM application?”**

A strong answer could be:

> I would begin with workload measurement rather than defaulting every route to the model’s maximum context. I would examine prompt-length distributions, required output quality, latency targets, and concurrency. Then I would set task-specific context budgets, use retrieval or summarization where appropriate, benchmark smaller or quantized models, and load-test actual GPU memory. The goal is to reduce unnecessary KV-cache and compute demand without losing task quality.

That answer connects a small local experiment to system design, evaluation, and business cost.

And that connection is the point of this journey.

---

## 58:30–60:00 — Closing and Day 2 bridge

**[VISUAL: Day 1 card becomes checked. Day 2 card slides into view.]**

**HOST:**

Day 1 is complete—not because we installed a tool, but because we learned how to reason about the runtime beneath an AI feature.

Today we established seven foundations:

1. An LLM generates tokens using learned parameters.
2. Ollama makes compatible open-weight models easier to run locally.
3. Local inference can improve offline access and data control.
4. Model parameter count and file size are only starting points for hardware planning.
5. Runtime memory also includes context-related cache and overhead.
6. Smaller context can reduce memory usage, but it also reduces how much information the model can consider.
7. In enterprise systems, context budgets affect latency, concurrency, reliability, and cost.

This is Day 1 of 365 Days to 50 LPA: one year of moving from “I can use AI” to “I can design, build, measure, and explain AI-enabled systems responsibly.”

If you are following the journey, do not just comment “done.” Share one measured observation from your machine: the model, context, reported memory, and processor placement. Evidence is more useful than motivation alone.

In Day 2, we will connect our current skills and gaps to a role scorecard, so every technical exercise supports a clear professional target.

Subscribe or follow to continue the journey, read the complete Day 1 notes through the link in the description, and remember:

The goal is not to put AI into everything.

The goal is to understand it well enough to make the right engineering decision.

I’ll see you on Day 2.

**[END SCREEN]**

**DAY 1 / 365**  
**LOCAL AI · OLLAMA · CONTEXT · ENTERPRISE COST**  
**Next: Building the role scorecard**

---

## Editor’s chapter markers

```text
00:00 Day 1: Taking AI off the cloud
02:30 Why local AI matters
06:30 What is an LLM?
11:00 What Ollama does
15:30 Demo: Run a local model
21:00 Will the model fit your hardware?
26:30 Demo: Understand ollama ps
32:30 Context windows and KV cache
38:00 Demo: Build a smaller-context model
44:00 Enterprise GPU cost and concurrency
50:30 Managing conversation memory
55:30 Day 1 evidence and interview answer
58:30 Summary and Day 2 preview
```

## Suggested video title

**I Ran AI Locally and Cut Its Memory from 18 GB to 2.3 GB | Day 1 of 365 to 50 LPA**

Use the measured values in the title only if the recorded experiment reproduces them. Otherwise replace them with the actual result or use:

**Taking AI Off the Cloud with Ollama | Day 1 of 365 to 50 LPA**

## Suggested thumbnail text

**AI WITHOUT THE CLOUD?**  
Small label: **DAY 1 / 365**

## Suggested description

Day 1 of my 365 Days to 50 LPA journey starts with local AI. We use Ollama to run an open-weight model on our own hardware, inspect its memory with `ollama ps`, understand context windows and KV cache, and create a smaller-context model configuration. Then we connect the experiment to enterprise AI cost, latency, and concurrency.

Completing this journey does not guarantee a particular salary. The target represents the level of engineering evidence, judgment, and business impact I am working to demonstrate.

## Suggested pinned comment

What does `ollama ps` report on your machine? Share the model, context length, reported size, and CPU/GPU placement—but remove usernames, private paths, and sensitive prompts before posting.
