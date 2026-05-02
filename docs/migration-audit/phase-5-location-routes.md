# Phase 5 Location Route Migration

Date: 2026-05-02

Phase 5 migrates the static location route family into the Next.js App Router while preserving the existing EverySpaces content for now.

## Migrated Routes

| Route | Next.js File | Rendering |
| --- | --- | --- |
| `/areas-we-serve` | `src/app/areas-we-serve/page.tsx` | Static |
| `/office-space/[citySlug]` | `src/app/office-space/[citySlug]/page.tsx` | Static generated from `cityContent` |
| `/office-space/[citySlug]/[areaSlug]` | `src/app/office-space/[citySlug]/[areaSlug]/page.tsx` | Static generated from `allAreas` |

## SEO Work

- `/areas-we-serve` now has server-rendered Next metadata.
- City pages use `generateMetadata` from `src/data/cityContent.ts`.
- Area pages use `generateMetadata` from `src/data/areas.ts`.
- Invalid city and area slugs call `notFound()`.

## Compatibility Work

- `src/legacy-pages/AreasWeServePage.tsx` now uses `AppLink` instead of `react-router-dom`.
- `src/legacy-pages/CityLandingPage.tsx` now accepts an optional `citySlug` prop for Next and falls back to the browser path for the legacy Vite SPA.
- `src/legacy-pages/AreaPage.tsx` now accepts optional `citySlug` and `areaSlug` props for Next and falls back to the browser path for the legacy Vite SPA.

## Carry Forward

- These location pages still contain EverySpaces branding, metadata, and JSON-LD. This preserves current route behavior but keeps the Phase 1 brand/domain risk open.
- The pages still render legacy `SEOHead` for Vite compatibility. This can be removed after the default app switches fully to Next.
- Several copied strings still show mojibake from the source files; no content was intentionally rewritten in this phase.

## Verification

| Check | Result | Notes |
| --- | --- | --- |
| `npm run lint:next` | Passes | App Router lint target is clean. |
| `npm run build:next` | Passes | Prerenders `/areas-we-serve`, both city pages, and 36 area detail pages. |
| `npm run build` | Passes | Legacy Vite SPA still builds. Existing CSS, chunk size, and dynamic/static Supabase import warnings remain. |
| `npm test` | Passes | 1 Vitest file, 1 test passed. |
| Next dev HTTP check | Passes | `/areas-we-serve`, `/office-space/bangalore`, `/office-space/hyderabad`, `/office-space/bangalore/koramangala`, and `/office-space/hyderabad/hitec-city` returned HTTP 200. |
