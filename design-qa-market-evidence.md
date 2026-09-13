# Design QA — Market evidence gallery

- Source visual truth: four live job pages verified and captured on 13 September 2026; paths are under `public/365-days-to-50-lpa/market-evidence/`.
- Implementation screenshot: `/tmp/market-evidence-desktop.png`, plus Codex in-app Browser mobile capture.
- Desktop viewport: 1440 × 1100 CSS pixels, device scale factor 1.
- Mobile viewport: 376 × 710 CSS pixels, device scale factor 1.
- Source image pixels: 1440 × 1000 each.
- State: first evidence active on desktop; all evidence cards visible in mobile flow.

## Full-view comparison evidence

The desktop implementation presents one readable screenshot in front with three visibly layered cards behind it. Metadata, capture date, counter, controls, and live-source link remain outside the preserved screenshot. The mobile implementation removes the layered positioning and exposes every card in a single vertical scrolling sequence.

## Focused-region comparison evidence

Each source capture was opened at original resolution before implementation. Role title, company, location, and opening details are readable. The implementation was checked at desktop and mobile widths; no additional focused crop was needed.

## Findings

- Fonts and typography: hierarchy is consistent with the existing 365-day visual system.
- Spacing and layout rhythm: card metadata and screenshot framing remain balanced at desktop and collapse cleanly on mobile.
- Colors and visual tokens: existing slate, amber, cyan, border, and elevation tokens are reused.
- Image quality and asset fidelity: all four captures are 1440 × 1000 PNGs from verified live sources; no listing imagery was recreated.
- Copy and content: company, role, location, experience, capture date, and source links match the verified pages.
- Interaction: desktop provides previous/next controls and left/right keyboard navigation; mobile uses native vertical page scrolling.

## Comparison history

1. Initial implementation rendered the four captures with the requested responsive interaction model. Desktop and mobile inspection found no actionable P0/P1/P2 issues.

## Follow-up polish

- P3: recapture listings periodically and retain older dated snapshots as historical evidence.

final result: passed
