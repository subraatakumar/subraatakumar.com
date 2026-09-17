# 365-day mobile, full-stack, and applied-AI journey content

Add one Markdown file per calendar day using a three-digit filename:

- `day-001.md` → 14 September 2026
- `day-002.md` → 15 September 2026
- `day-365.md` → 13 September 2027

Chapter frontmatter (use actual publication and update dates):

```yaml
---
title: "Day 1 — Set Up Our Workspace and Capture Our Starting Point"
description: "We establish our workspace and verify a small starting exercise."
date: "2026-09-13"
updated: "2026-09-13"
kind: "chapter"
---
```

We plan to publish each chapter one day before its scheduled session. The filename determines the session date through the journey calendar; `date` records actual publication and `updated` records the latest actual edit, never earlier than publication. Day 1 is published on 13 September for the 14 September session. If publication is late, record the real date rather than backdating it. Publication requires the site build and deployment; adding a file does not schedule a deployment automatically.

Write normal GitHub-flavoured Markdown below the frontmatter. Headings, links, lists, tables, blockquotes, inline code, and fenced code blocks are rendered automatically during the next site build. If a file is absent, its day page displays the planned topic, session date, and a timeless “Chapter pending” label.

Use `kind: "chapter"` for planned exercises; this is also the default for unclassified notes. Use `kind: "session-result"` only for actual session records with observed results, artifact links, and limitations. A file’s existence never marks a session or milestone complete. Use “we”; label illustrative examples and simulated feedback. Retain the chapter instructions when appending actual results and clearly identify each section.
