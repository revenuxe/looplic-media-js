# Phase 8 Next Default And Metadata Routes

Date: 2026-05-02

Phase 8 switches the project defaults from the legacy Vite SPA to the migrated Next.js App Router app and replaces stale static crawl files.

## Script Changes

| Command | Phase 8 Behavior |
| --- | --- |
| `npm run dev` | Runs `next dev` |
| `npm run build` | Runs `next build` |
| `npm run start` | Runs `next start` |
| `npm run lint` | Runs the App Router lint target |
| `npm run dev:vite` | Runs the legacy Vite dev server |
| `npm run build:vite` | Builds the legacy Vite SPA |
| `npm run preview:vite` | Previews the legacy Vite build |

The old `dev:next`, `build:next`, `start:next`, and `lint:next` aliases remain available.

## Deployment Routing

- `vercel.json` no longer rewrites every path to `index.html`.
- `vercel.json` now declares the Next.js framework explicitly.

## Robots And Sitemap

- Removed stale `public/robots.txt`, which pointed to `https://everyspaces.com/sitemap.xml`.
- Removed stale `public/sitemap.xml`, which listed EverySpaces URLs.
- Added `src/app/robots.ts` for Next-generated `/robots.txt`.
- Added `src/app/sitemap.ts` for Next-generated `/sitemap.xml`.

The generated crawl files now use `https://media-x-by-revenuxe.media`, disallow `/admin/`, `/thank-you`, and `/listings`, and do not include deleted listing URLs.

## Carry Forward

- The active office-space route family is still present and still contains EverySpaces/workspace content. It is included at lower sitemap priority because the route family remains active, but this remains the biggest brand/domain cleanup item.
- The legacy Vite SPA remains available through explicit `*:vite` scripts for fallback until it is intentionally retired.
- Legacy page components still render `SEOHead` for Vite compatibility. Removing `react-helmet-async`, `SEOHead`, and the Vite shell should be handled in a later cleanup phase.

## Verification

| Check | Result | Notes |
| --- | --- | --- |
| `npm run lint` | Passes | New default lint target is App Router clean. |
| `npm run build` | Passes | New default build runs Next and emits `/robots.txt` and `/sitemap.xml`. |
| `npm run build:vite` | Passes | Legacy Vite build still works via explicit alias. Existing CSS, chunk size, and Supabase import warnings remain. |
| `npm test` | Passes | 1 Vitest file, 1 test passed. |
| Next dev HTTP check | Passes | `/robots.txt` and `/sitemap.xml` returned HTTP 200. `/listings` returned HTTP 404. Sitemap contains media.x by revenuxe URLs and no listing URLs. |
