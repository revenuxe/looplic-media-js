# Phase 11 Admin Leads-Only Dashboard

Phase 11 removes the property-management surface from the active admin dashboard and makes leads the primary admin workflow.

## Completed

- Rebuilt `/admin/dashboard` as a leads-only dashboard.
- Removed dashboard tabs for listings, property types, amenities, and locations.
- Added lead metrics for total leads, today's leads, and this week's leads.
- Added lead search across name, email, phone, team size, location, business, and timeline.
- Kept lead refresh, lead detail modal, email/call actions, delete, and logout.
- Removed the Next.js `/admin/property/[propertyId]` route.

## Verification

| Check | Result |
| --- | --- |
| `npm run lint` | Pass |
| `npm run typecheck` | Pass |
| `npm run build` | Pass |

The production route table includes `/admin/dashboard`, `/admin/leads`, and `/admin/login`; it no longer includes `/admin/property/[propertyId]`.
