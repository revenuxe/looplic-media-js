# Phase 7 Admin Route Migration

Date: 2026-05-02

Phase 7 removes the public listing route family by request and migrates the remaining admin/private route family into the Next.js App Router.

## Removed Listing Routes

| Removed Route | Removed Code |
| --- | --- |
| `/listings` | `src/app/listings/page.tsx`, `src/legacy-pages/ListingsPage.tsx` |
| `/listings/[slug]` | `src/app/listings/[slug]/page.tsx`, `src/legacy-pages/PropertyDetailPage.tsx` |

The Phase 6 listing helper layer was also removed:

- `src/lib/listingQueries.ts`
- `src/lib/listingMappers.ts`
- `src/lib/listingTypes.ts`

`src/App.tsx` no longer declares the legacy Vite listing routes, and the admin property table no longer links to deleted public listing detail pages.

## Migrated Admin Routes

| Route | Next.js File | Rendering |
| --- | --- | --- |
| `/admin/login` | `src/app/admin/login/page.tsx` | Static shell, client auth |
| `/admin/dashboard` | `src/app/admin/dashboard/page.tsx` | Static shell, client auth |
| `/admin/leads` | `src/app/admin/leads/page.tsx` | Static shell, client auth |
| `/admin/property/[propertyId]` | `src/app/admin/property/[propertyId]/page.tsx` | Dynamic route, client auth |

## SEO And Privacy Work

- All admin route files export `robots: { index: false, follow: false }`.
- Legacy admin pages still render `SEOHead noIndex` for Vite compatibility.

## Compatibility Work

- Admin pages now have client boundaries and no longer depend on React Router hooks when rendered by Next.
- `src/integrations/supabase/client.ts` now guards `localStorage` access so the shared Supabase client can be imported safely during Next compilation.
- The Vite SPA keeps the admin route declarations and browser behavior.

## Carry Forward

- Admin/property management still depends on the EverySpaces property schema in Supabase. The public listing pages are removed, but the private property admin remains because it is part of the existing admin tool.
- Admin page titles still use EverySpaces wording. This preserves current behavior but keeps the broader brand/domain cleanup open.
- Several copied strings still show mojibake from the source files; no content was intentionally rewritten in this phase.

## Verification

| Check | Result | Notes |
| --- | --- | --- |
| `npm run lint:next` | Passes | App Router lint target is clean. |
| `npm run build:next` | Passes | Admin routes build successfully, and `/listings` is no longer present in the route table. |
| `npm run build` | Passes | Legacy Vite SPA still builds. Existing CSS, chunk size, and Supabase import warnings remain. |
| `npm test` | Passes | 1 Vitest file, 1 test passed. |
| Next dev HTTP check | Passes | `/admin/login`, `/admin/dashboard`, `/admin/leads`, and `/admin/property/new` returned HTTP 200. `/listings` returned HTTP 404. |
