# Sanity Blog Integration Plan

## Goal

Use Sanity as the editorial source for Looplic blogs while keeping the Next.js frontend fast, SEO-friendly and resilient. The current frontend already supports Sanity Content Lake reads through environment variables and falls back to starter posts until the CMS is connected.

## Environment

Add these values in local `.env` and the production host:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_VERSION="2025-01-01"
SANITY_API_READ_TOKEN="optional-read-token-for-private-datasets"
```

The frontend fetches public published content from:

```text
https://<project-id>.api.sanity.io/v<api-version>/data/query/<dataset>
```

If the Sanity dataset is private, create a read token in Sanity Manage and add it as `SANITY_API_READ_TOKEN`. Keep this server-only variable out of any `NEXT_PUBLIC_` prefix.

## Recommended Sanity Schema

Create a `post` document with these fields:

- `title`: required string, 55-70 characters preferred.
- `slug`: required slug generated from `title`.
- `excerpt`: required text, 140-160 characters preferred.
- `category`: required string or reference.
- `tags`: array of strings.
- `publishedAt`: required datetime.
- `updatedAt`: datetime.
- `readingTime`: number.
- `author`: reference to an `author` document with `name` and `role`.
- `coverImage`: image with required `alt` field.
- `seoTitle`: string, 50-60 characters preferred.
- `seoDescription`: text, 140-160 characters preferred.
- `canonicalUrl`: optional URL for syndicated content.
- `body`: portable text blocks, images, callouts and quotes.

## SEO Requirements

- Every post should have a unique slug, SEO title, meta description and excerpt.
- Cover images need descriptive alt text and 1200x630 social sharing variants where possible.
- The frontend renders canonical metadata, Open Graph, Twitter card metadata, Breadcrumb schema and Article schema.
- Blog URLs are included in `sitemap.ts`; posts revalidate every 300 seconds.
- Use internal links from posts to service pages such as `/services/ai-video-production`, `/services/ugc-content` and `/contact`.

## Publishing Workflow

1. Draft post in Sanity with title, category, tags and brief.
2. Add SEO title, meta description, slug and canonical URL if needed.
3. Add cover image with alt text.
4. Structure the body with one clear H1 from the page title, descriptive H2 sections, short paragraphs and internal links.
5. Preview the post on the Next.js frontend.
6. Publish in Sanity.
7. Trigger or wait for ISR revalidation.

## Future Enhancements

- Add Sanity Visual Editing and draft previews.
- Add an `/api/revalidate` endpoint secured by a Sanity webhook secret.
- Add related posts by category and tag matching.
- Add author pages and category archive pages when the content library grows.
- Add a table of contents for long-form posts.
