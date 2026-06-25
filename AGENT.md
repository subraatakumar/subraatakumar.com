# Project Skill: Subsite Style Ownership

This Next.js app uses route-specific layouts to let major subsections behave like separate sub-websites with their own visual systems.

## Core rule

Each major subsite should maintain its own style through its local `layout.tsx` file instead of relying on the root site shell.

## How it works

- The root site shell is defined in `app/layout.tsx`.
- Shared global CSS exists in `app/globals.css`, but several subsections intentionally override or bypass the root presentation layer.
- Product or content subsites define their own layout, navigation, footer, fonts, colors, and spacing inside their local route layout.
- Many subsite layouts hide the root `.sk-header` and `.sk-footer` so the subsection can behave like an independent site.

## Current subsite layouts

- `app/watertracker/layout.tsx`
- `app/moodtracker/layout.tsx`
- `app/pilltracker/layout.tsx`
- `app/shehealth/layout.tsx`
- `app/stepcounter/layout.tsx`
- `app/blog/layout.tsx`
- `app/subratalabs/layout.tsx`
- `app/180days/layout.tsx`
- `app/24weeks/layout.tsx`

## Implementation guidance

- When updating a subsite, preserve that subsite's local design language unless the task explicitly asks for a redesign.
- Put subsite-specific styling in the relevant route layout or route-local components.
- Avoid pushing one subsite's visual rules into another subsite.
- Treat `blog`, `subratalabs`, `180days`, `24weeks`, and each product area as separate visual surfaces.
- If a new subsite is added, create a dedicated `app/<subsite>/layout.tsx` when it needs its own shell.

## Content discoverability rule

Any meaningful website update should also review and update SEO, GEO, and `public/llms.txt` when applicable.

## SEO and GEO expectations

- Check whether the page metadata still matches the updated content.
- Update titles, descriptions, canonical paths, and Open Graph or Twitter metadata when page purpose or messaging changes.
- Preserve or improve structured data when relevant.
- Consider GEO as generative engine optimization: content should remain clear, well-structured, and easy for AI systems to interpret and cite.
- When adding new important pages, features, or content sections, review whether they should be reflected in `public/llms.txt`.

## `llms.txt` maintenance

- Keep `public/llms.txt` aligned with the current site structure and important content.
- Add or revise entries when new sections, flagship pages, or high-value reference content are introduced.
- Remove stale references when content is deleted, renamed, or materially repositioned.

## Metadata ownership

- Page-level metadata should live with the route whenever possible.
- Reuse shared SEO constants and URL helpers from `lib/seo.ts`.
- Any important new page or major content rewrite should review title, description, canonical path, Open Graph metadata, and Twitter metadata.
- Avoid leaving new pages with inherited metadata that describes a different section or purpose.

## Routing and subsite policy

- New product or microsite sections should usually use `app/<slug>/layout.tsx` when they need their own shell.
- Pages inside a subsite should inherit that subsite layout unless there is a clear reason to diverge.
- Route structure, page messaging, metadata, and navigation should stay aligned.

## Content source rules

- Blog content lives in `content/blog`.
- 180 Days series content lives in `content/180days`.
- 24 Weeks series content lives in `content/24weeks`.
- When content is added or edited, keep slugs, headings, summaries, and internal links consistent with the rendered route.

## Discoverability checklist

When adding, renaming, removing, or substantially repositioning pages, review the following:

- `app/sitemap.ts`
- `app/robots.ts`
- `public/llms.txt`
- internal links from hub pages such as `/`, `/products`, `/for-ai`, `/blog`, `/180days`, and `/24weeks`

## Structured data policy

- Preserve existing JSON-LD unless the content model changes and requires an update.
- Add or refine structured data for important pages when it improves search understanding.
- Prefer page-relevant structured data over generic markup when both are possible.

## Asset and social preview policy

- Important new sections or flagship pages should have a representative social preview image in `public/`.
- Do not rely on unrelated inherited Open Graph imagery for major pages.
- Keep image paths, alt text, and metadata references aligned.

## Verification expectations

- After meaningful code or content changes, run `npm run lint`.
- After routing, metadata, layout, or content-structure changes, run `npm run build` when feasible.
- If verification is skipped, note that explicitly in the final update.

## Maintenance note

- Watch for discoverability drift between routes and `public/llms.txt`.
- If `llms.txt` references a page that no longer exists, or misses a page that has become strategically important, update it in the same change whenever practical.
