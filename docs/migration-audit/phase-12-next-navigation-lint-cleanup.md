# Phase 12 Next Navigation and Lint Cleanup

Phase 12 tightens the migrated Next.js codebase after retiring the Vite shell.

## Completed

- Updated `AppLink` to use `next/link` for internal navigation.
- Kept external, `mailto:`, and `tel:` links as regular anchors.
- Replaced admin `window.location.href` redirects with `useRouter().replace(...)`.
- Removed the remaining repo-wide lint blockers:
  - DayPicker calendar icon overrides now use the current `Chevron` component API.
  - Empty shadcn prop interfaces were changed to type aliases.
  - Supabase client no longer uses an explicit `any` generic.
  - Tailwind config uses an ES module plugin import instead of `require()`.

## Verification

| Check | Result |
| --- | --- |
| `npm run typecheck` | Pass |
| `npm run lint:all` | Pass |
| `npm run build` | Pass |

The production route table remains focused on the Next.js routes, including the leads-only admin routes from Phase 11.
