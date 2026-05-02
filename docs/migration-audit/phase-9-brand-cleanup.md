# Phase 9 Brand Cleanup

Date: 2026-05-02

Phase 9 removes the remaining EverySpaces/workspace-facing content from the active website and keeps Looplic as the only public brand surface.

## Removed Public Route Family

| Removed Route | Removed Code |
| --- | --- |
| `/areas-we-serve` | `src/app/areas-we-serve/page.tsx`, `src/legacy-pages/AreasWeServePage.tsx` |
| `/office-space/[citySlug]` | `src/app/office-space/[citySlug]/page.tsx`, `src/legacy-pages/CityLandingPage.tsx` |
| `/office-space/[citySlug]/[areaSlug]` | `src/app/office-space/[citySlug]/[areaSlug]/page.tsx`, `src/legacy-pages/AreaPage.tsx` |

The associated workspace/location data and UI were also removed:

- `src/data/areas.ts`
- `src/data/cityContent.ts`
- `src/components/AreasWeServe.tsx`
- `src/components/ExpandableServicesSection.tsx`

`src/App.tsx` no longer declares the legacy Vite routes for the removed route family.

## Brand Text Cleanup

- Updated admin route metadata from EverySpaces wording to Looplic wording.
- Updated legacy admin `SEOHead` titles/descriptions to Looplic wording.
- Rewrote the thank-you page copy so it no longer references workspace options or Every Space.
- Updated admin editor placeholder text from workspace/coworking examples to project/content examples.
- Removed office-space and areas routes from `src/app/sitemap.ts`.

## Verification

| Check | Result | Notes |
| --- | --- | --- |
| Active source text scan | Passes | No EverySpaces, Every Space, everyspaces, office-space, areas-we-serve, coworking, or workspace text remains in active `src`/public app code. |
| `npm run lint` | Passes | App Router lint target is clean. |
| `npm run build` | Passes | Next route table no longer includes areas or office-space routes. |
| `npm run build:vite` | Passes | Legacy Vite fallback still builds after route removal. Existing CSS, chunk size, and Supabase import warnings remain. |
| `npm test` | Passes | 1 Vitest file, 1 test passed. |
| Next dev HTTP check | Passes | `/areas-we-serve`, `/office-space/bangalore`, and `/office-space/bangalore/koramangala` returned HTTP 404. `/sitemap.xml` contains Looplic URLs and no office-space or areas URLs. |

## Carry Forward

- Historical migration audit files still mention EverySpaces where they document previous risks and removed route behavior.
- The private admin tool still uses the underlying Supabase property tables because that schema exists in the backend. Public website routes for those records are removed.
