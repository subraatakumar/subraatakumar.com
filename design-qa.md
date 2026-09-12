# Design QA — AI technology constellation

- Source visual truth: `/var/folders/__/_x25mj4n5w963vgqqw3cbgl40000gn/T/codex-clipboard-0266731b-620c-43d1-b406-a7d3b6fc205e.png`
- Implementation: `http://localhost:4173/365-days-to-50-lpa/#stack-title`
- Implementation screenshot: Codex in-app Browser capture, 637 × 820 viewport, emitted in the implementation turn (the browser API does not expose a filesystem path)
- Source pixels: 637 × 405
- Implementation comparison region: approximately 637 × 405 CSS pixels at device scale 1
- State: default, light theme

## Full-view comparison evidence

The implementation preserves the reference silhouette: three isometric tiles in the first row, two in the second, and one centered in the third. The source's white canvas, faint grid texture, grey layered edges, soft elevation, and generous negative space are retained. The six generic demo technologies were intentionally replaced with the six technologies central to this journey.

## Focused-region comparison evidence

The component was inspected at the reference width. Tile dimensions, row offsets, icon scale, border radius, grid density, and shadows were readable at this size, so no additional crop was necessary. The first pass exposed a missing Azure mark and visible technology labels. The Azure asset was replaced with a verified Devicon SVG and the labels were removed visually while retained as accessible names.

## Required fidelity surfaces

- Fonts and typography: the source component contains no visible copy; the final tiles likewise use logos only. The surrounding section retains the 365-day subsite typography.
- Spacing and layout rhythm: matches the reference's 3–2–1 pyramid, centred alignment, and open vertical spacing. Mobile scales the complete arrangement as one visual so it does not collapse into an unrelated grid.
- Colors and visual tokens: white faces, pale grey grid lines and edges, subtle blue-grey shadows, and authentic brand colours match the reference direction.
- Image quality and asset fidelity: official SVG brand marks are loaded from Simple Icons, with the Azure mark loaded from Devicon because the former endpoint is unavailable. No logos are approximated with text or custom drawings.
- Copy and content: technology choices were deliberately changed to Python, FastAPI, Microsoft Azure, React, Docker, and PostgreSQL to describe this roadmap accurately.

## Comparison history

1. First comparison: Azure logo returned 404 and labels made the tiles busier than the source. Result: blocked.
2. Fix: verified and replaced the Azure SVG source, removed visible labels, retained accessible names, and increased logo size. Post-fix evidence shows all six marks in the correct 3–2–1 arrangement. Result: passed.

## Findings

No actionable P0, P1, or P2 differences remain. The component is an adapted technology map rather than a literal reuse of the screenshot's original logos.

## Follow-up polish

- P3: vendor the six third-party SVGs locally if complete independence from public asset CDNs becomes a deployment requirement.

final result: passed
