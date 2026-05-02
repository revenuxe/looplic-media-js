# Phase 4 Service Route Migration

Date: 2026-05-02

Phase 4 migrates the service index and service detail pages into Next.js App Router.

## Migrated Routes

| Route | Next.js File | Rendering |
| --- | --- | --- |
| `/services` | `src/app/services/page.tsx` | Static |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | Static generated from `serviceDetails` |

## SEO Work

- `/services` now has server-rendered Next metadata.
- Each service detail page uses `generateMetadata` from `src/data/serviceDetails.ts`.
- `generateStaticParams` emits all service slugs so the pages are prerendered.
- Invalid service slugs call `notFound()`.

## Compatibility Work

- `src/legacy-pages/ServicesPage.tsx` no longer imports `react-router-dom`.
- `src/legacy-pages/ServiceDetailPage.tsx` now accepts an optional `slug` prop for Next and falls back to the browser path for the legacy Vite SPA.
- Service links now use `AppLink`, keeping both Vite and Next compatible during migration.

## Carry Forward

- The service pages still render legacy `SEOHead` for Vite compatibility. This can be removed after the default app switches fully to Next.
- Several copied strings still show mojibake from the source files; no content was intentionally rewritten in this phase.

## Verification

| Check | Result | Notes |
| --- | --- | --- |
| `npm run build:next` | Passes | `/services` and all 12 `/services/[slug]` pages prerender successfully. |
| `npm run build` | Passes | Legacy Vite SPA still builds. |
| `npm test` | Passes | 1 Vitest file, 1 test passed. |
| `npm run lint:next` | Passes | App Router lint target is clean. |
| Next dev HTTP check | Passes | `/services`, `/services/ai-video-production`, `/services/product-photography`, and `/services/scripts-storyboards` returned HTTP 200. |
