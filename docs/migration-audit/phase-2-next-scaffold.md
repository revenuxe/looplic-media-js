# Phase 2 Next.js Scaffold

Date: 2026-05-02

Phase 2 adds a parallel Next.js App Router foundation while keeping the current Vite SPA available. No existing route content has been migrated yet.

## Added

- `next`
- React 19 and React DOM 19
- React 19 type packages
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `next.config.ts`
- `next-env.d.ts`
- `src/legacy-pages/*` as a temporary home for the original Vite route components

## Script Changes

The Vite commands remain the default commands for now:

- `npm run dev`
- `npm run build`
- `npm run preview`

New Next.js commands:

- `npm run dev:next`
- `npm run build:next`
- `npm run start:next`

## Why Vite Stays Default For Now

The App Router foundation is present, but public routes have not been migrated yet. Keeping Vite as the default prevents the current website from being accidentally replaced by the temporary scaffold page.

The original Vite route components were moved from `src/pages` to `src/legacy-pages` so Next.js does not mistake them for Pages Router routes. `src/App.tsx` now imports from `src/legacy-pages`, so the Vite SPA remains available.

## Next Phase

Phase 3 should start moving public static routes into the `app/` directory:

1. Shared providers/client shell.
2. Root page.
3. About, contact, policy, terms.
4. Services index and service detail pages.

After route parity is reached, default scripts can switch from Vite to Next.js.

## Verification

| Check | Result | Notes |
| --- | --- | --- |
| `npm run build:next` | Passes | App Router scaffold prerenders `/` and `/_not-found`. |
| `npm run build` | Passes | Legacy Vite SPA still builds from `src/legacy-pages`. |
| `npm test` | Passes | 1 Vitest file, 1 test passed. |
| `npm run lint:next` | Passes with warning | One Fast Refresh warning on `src/app/layout.tsx` metadata export from the shared Vite ESLint config. |
| `npm run lint` | Fails | Same baseline code issues remain: legacy admin/listing `any` usage, shadcn empty interfaces, `prefer-const`, and Tailwind `require()`. Generated `.next` output is now ignored by ESLint and Git. |

## Dependency Notes

- Installed `next@^16.2.4`, `react@^19.2.5`, and `react-dom@^19.2.5`, matching the current Next.js manual App Router install guidance.
- Updated `next-themes`, `react-day-picker`, `vaul`, `@types/react`, and `@types/react-dom` for React 19 compatibility.
- `npm install` still reports 20 vulnerabilities: 3 low, 8 moderate, 9 high.
