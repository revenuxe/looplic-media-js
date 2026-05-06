# Phase 1 Migration Baseline

Date: 2026-05-02

Project: media.x by revenuxe Media Vite React SPA

Goal: freeze the current site behavior, SEO surface, route map, and known risks before migrating to Next.js SSR/SSG. The Next.js migration must preserve the current design and visible content unless a later phase explicitly fixes brand/domain inconsistencies.

## Current Stack

- Framework: Vite 5 + React 18 + TypeScript
- Routing: `react-router-dom`
- Head/SEO: `react-helmet-async` through `src/components/SEOHead.tsx`
- Styling: Tailwind CSS + shadcn/Radix UI components
- Animation: `framer-motion`
- Data/backend: Supabase client in browser
- Deployment config: Vercel SPA rewrite in `vercel.json`
- Dev server: Vite on port `8080`

## Baseline Routes

These routes are currently declared in `src/App.tsx`.

| Current Route | Current Component | Recommended Next.js Route | Rendering Target |
| --- | --- | --- | --- |
| `/` | `Index` | `app/page.tsx` | Static/ISR |
| `/about` | `AboutUs` | `app/about/page.tsx` | Static |
| `/contact` | `Contact` | `app/contact/page.tsx` | Static with client form |
| `/privacy-policy` | `PrivacyPolicy` | `app/privacy-policy/page.tsx` | Static |
| `/terms-and-conditions` | `TermsConditions` | `app/terms-and-conditions/page.tsx` | Static |
| `/thank-you` | `ThankYou` | `app/thank-you/page.tsx` | Static, noindex |
| `/services` | `ServicesPage` | `app/services/page.tsx` | Static |
| `/services/:slug` | `ServiceDetailPage` | `app/services/[slug]/page.tsx` | Static generated from `serviceDetails` |
| `/areas-we-serve` | `AreasWeServePage` | `app/areas-we-serve/page.tsx` | Static |
| `/listings` | `ListingsPage` | `app/listings/page.tsx` | SSR/ISR from Supabase |
| `/listings/:slug` | `PropertyDetailPage` | `app/listings/[slug]/page.tsx` | SSR/ISR from Supabase |
| `/office-space/:citySlug` | `CityLandingPage` | `app/office-space/[citySlug]/page.tsx` | Static generated from `cityContent` |
| `/office-space/:citySlug/:areaSlug` | `AreaPage` | `app/office-space/[citySlug]/[areaSlug]/page.tsx` | Static generated from `areasByCity` |
| `/admin/login` | `AdminLogin` | `app/admin/login/page.tsx` | Client/private, noindex |
| `/admin/dashboard` | `AdminDashboard` | `app/admin/dashboard/page.tsx` | Client/private, noindex |
| `/admin/leads` | `AdminLeads` | `app/admin/leads/page.tsx` | Client/private, noindex |
| `/admin/property/:propertyId` | `AdminPropertyForm` | `app/admin/property/[propertyId]/page.tsx` | Client/private, noindex |
| `*` | `NotFound` | `app/not-found.tsx` | Static |

## Static Dynamic Slugs

Service slugs currently available from `src/data/serviceDetails.ts`:

- `ai-video-production`
- `product-photography`
- `ugc-content`
- `ad-film-production`
- `brand-shoots`
- `performance-creative`
- `motion-graphics`
- `podcast-video`
- `ai-avatars`
- `ecommerce-video`
- `social-content`
- `scripts-storyboards`

City/location pages are generated from:

- `src/data/cityContent.ts`
- `src/data/areas.ts`

Property listing pages are fetched from Supabase in the browser today and should become server-rendered or ISR pages in Next.js.

## Current SEO Baseline

The root `index.html` contains media.x by revenuxe metadata:

- Title: `media.x by revenuxe - AI Media Company | AI Video, Ad Films, UGC & Brand Shoots`
- Canonical: `https://media-x-by-revenuxe.media/`
- Organization schema URL: `https://media-x-by-revenuxe.media`
- Email: `hello@media-x-by-revenuxe.media`

Page metadata is currently applied client-side through `SEOHead`. During migration, each page should move to Next.js `metadata` or `generateMetadata`.

Public SEO pages with media.x by revenuxe metadata:

- `/`
- `/about`
- `/contact`
- `/services`
- `/services/:slug`
- `/privacy-policy`
- `/terms-and-conditions`

Pages with EverySpaces/workspace metadata still present:

- `/areas-we-serve`
- `/office-space/:citySlug`
- `/office-space/:citySlug/:areaSlug`
- `/listings`
- `/listings/:slug`
- `/admin/login`
- `/admin/dashboard`
- `/admin/leads`

## Critical Brand/Domain Risk

The project is mixed between media.x by revenuxe and EverySpaces.

media.x by revenuxe references:

- `index.html`
- `src/components/Navbar.tsx`
- `src/components/FooterSection.tsx`
- `src/components/HeroSection.tsx`
- primary service pages
- `SEOHead` base URL: `https://media-x-by-revenuxe.media`

EverySpaces references:

- `public/robots.txt`
- `public/sitemap.xml`
- `src/data/cityContent.ts`
- `src/data/areas.ts`
- `src/pages/AreasWeServePage.tsx`
- `src/pages/ListingsPage.tsx`
- `src/pages/PropertyDetailPage.tsx`
- `src/pages/CityLandingPage.tsx`
- `src/pages/AreaPage.tsx`
- admin page titles

Before launch, decide whether location/listing pages belong on this media.x by revenuxe site. If they do, content and schema need to be rebranded. If they do not, those routes should be removed or noindexed before migration.

## Robots And Sitemap Baseline

`public/robots.txt` currently:

- Allows major crawlers.
- Disallows `/admin/`.
- Disallows `/thank-you`.
- Points sitemap to `https://everyspaces.com/sitemap.xml`.

`public/sitemap.xml` currently only includes:

- `/`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms-and-conditions`

All sitemap URLs currently use `https://everyspaces.com`, which conflicts with the media.x by revenuxe domain used by metadata.

Next.js migration should replace this with dynamic:

- `app/robots.ts`
- `app/sitemap.ts`

## Runtime And Verification Baseline

Dependencies were installed with `npm install`.

Verification results:

| Check | Result | Notes |
| --- | --- | --- |
| `npm run lint` | Fails | 41 errors, 9 warnings. Mostly existing `any` types in admin/listing pages, empty shadcn interfaces, `prefer-const`, and Tailwind `require()` lint. |
| `npm run build` | Passes | Built successfully with Vite. JS bundle is `954.32 kB` minified, `270.20 kB` gzip. |
| `npm test` | Passes | 1 Vitest file, 1 test passed. |
| Vite dev server | Passes | Verified `http://127.0.0.1:8080/` returned HTTP 200. |

Build warnings:

- CSS warning: Google Fonts `@import` appears after Tailwind directives in `src/index.css`.
- Bundle warning: main JS chunk exceeds 500 kB after minification.
- Browserslist data is old.

Dependency note:

- `npm install` updated `package-lock.json` to match `package.json` for `@supabase/supabase-js` `^2.105.1`.
- `npm install` reported 19 vulnerabilities: 3 low, 7 moderate, 9 high.

## Screenshot Baseline

Desktop screenshots were captured with headless Edge at `1440x1200`.

| Page | Screenshot |
| --- | --- |
| `/` | `docs/migration-audit/screenshots/home.png` |
| `/about` | `docs/migration-audit/screenshots/about.png` |
| `/services` | `docs/migration-audit/screenshots/services.png` |
| `/services/ai-video-production` | `docs/migration-audit/screenshots/service-ai-video.png` |
| `/contact` | `docs/migration-audit/screenshots/contact.png` |
| `/areas-we-serve` | `docs/migration-audit/screenshots/areas-we-serve.png` |
| `/listings` | `docs/migration-audit/screenshots/listings.png` |

These screenshots should be used as the visual preservation baseline during the Next.js migration.

## Migration Risks To Carry Forward

1. Client-side metadata currently means crawlers may not receive final per-page tags as reliably as server metadata.
2. Listing and property detail pages fetch content with `useEffect`, so important SEO content is not in the initial HTML.
3. Public pages and admin/listing code are bundled together in a large SPA chunk.
4. EverySpaces domain/brand content conflicts with media.x by revenuxe content.
5. Static sitemap is incomplete and points to the wrong domain.
6. JSON-LD on city/area pages points to EverySpaces.
7. Admin routes are noindexed by `SEOHead`, but after migration this should be enforced with server metadata and robots.
8. Current Vercel config rewrites all routes to `index.html`; this will be replaced by Next.js routing.

## Phase 1 Outcome

Phase 1 is complete enough to proceed to Phase 2.

Before implementing the migration, make one strategic decision:

- Keep and rebrand workspace/location/listing pages under media.x by revenuxe, or
- Remove/noindex them if they belong to EverySpaces and are not part of media.x by revenuxe Media.

