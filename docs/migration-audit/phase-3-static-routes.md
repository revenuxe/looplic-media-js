# Phase 3 Static Route Migration

Date: 2026-05-02

Phase 3 migrates the first public routes into the Next.js App Router while preserving the current visual/content components.

## Migrated App Router Routes

| Route | Next.js File | Source Content |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | `src/legacy-pages/Index.tsx` |
| `/about` | `src/app/about/page.tsx` | `src/legacy-pages/AboutUs.tsx` |
| `/contact` | `src/app/contact/page.tsx` | `src/legacy-pages/Contact.tsx` |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | `src/legacy-pages/PrivacyPolicy.tsx` |
| `/terms-and-conditions` | `src/app/terms-and-conditions/page.tsx` | `src/legacy-pages/TermsConditions.tsx` |
| `/thank-you` | `src/app/thank-you/page.tsx` | `src/legacy-pages/ThankYou.tsx` |

## Metadata

Each migrated route now exports Next.js `metadata`, so title, description, canonical, keywords, and noindex controls are available during server rendering/prerendering.

The legacy `SEOHead` component remains in the page content temporarily to keep Vite compatibility during the transition. It should be removed from migrated page content after all public routes move to Next.js.

## Shared Component Changes

- Added `src/components/AppLink.tsx` as a router-neutral link component.
- Updated shared marketing components away from direct `react-router-dom` `Link` usage:
  - `Navbar`
  - `HeroSection`
  - `FooterSection`
  - `ServicesSection`
- Added `src/app/providers.tsx` for client providers:
  - React Query
  - Helmet provider during transition
  - Tooltip provider
  - Toast providers
- Marked interactive/shared animation components as client components where needed.
- Moved the Supabase browser client import in `ContactForm` into the submit handler so `/contact` can prerender safely.

## Verification

| Check | Result | Notes |
| --- | --- | --- |
| `npm run build:next` | Passes | Prerenders `/`, `/about`, `/contact`, `/privacy-policy`, `/terms-and-conditions`, `/thank-you`, and `/_not-found`. |
| `npm run build` | Passes | Legacy Vite SPA still builds. |
| `npm test` | Passes | 1 Vitest file, 1 test passed. |
| `npm run lint:next` | Passes | App Router lint target is clean after disabling Vite Fast Refresh rule for `src/app`. |
| Next dev HTTP check | Passes | `/`, `/about`, `/contact`, `/privacy-policy`, `/terms-and-conditions`, and `/thank-you` returned HTTP 200. |

## Carry Forward

- Full `npm run lint` still fails from baseline legacy issues outside the migrated route scope.
- The current shared components still use regular `<a>` navigation through `AppLink`. Once the Vite SPA is retired, `AppLink` can be switched to `next/link`.
- Service routes should be migrated next: `/services` and `/services/[slug]`.
- After route parity, remove `react-helmet-async` and `SEOHead` from migrated pages.
