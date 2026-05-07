import { cache } from "react";

export type BlogAuthor = {
  name: string;
  role?: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  author: BlogAuthor;
  coverImage?: string;
  coverImageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  body: BlogBlock[];
};

export type BlogBlock =
  | { _type: "block"; style?: "normal" | "h2" | "h3"; children?: { text?: string }[] }
  | { _type: "list"; items: string[] }
  | { _type: "quote"; text: string; byline?: string };

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zujxe2ee";
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const sanityApiVersion = process.env.SANITY_API_VERSION || "2025-01-01";
const sanityReadToken = process.env.SANITY_API_READ_TOKEN;

const hasSanityConfig = Boolean(sanityProjectId && sanityDataset);

const fallbackPosts: BlogPost[] = [
  {
    title: "How AI Video Production Helps Brands Ship Campaigns Faster",
    slug: "ai-video-production-for-faster-campaigns",
    excerpt:
      "A practical guide to using AI video, real production craft and performance editing to move from brief to launch with fewer delays.",
    category: "AI Video",
    tags: ["AI video", "production", "performance creative"],
    publishedAt: "2026-04-18",
    readingTime: 6,
    author: { name: "Media.X by Revenuxe Team", role: "AI Media Studio" },
    coverImage: "/media-x-by-revenuxe-og.webp",
    coverImageAlt: "Media.X by Revenuxe AI media production studio",
    seoTitle: "AI Video Production for Faster Brand Campaigns",
    seoDescription:
      "Learn how AI video production speeds up scripting, storyboarding, asset creation and campaign iteration for modern brands.",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Modern brands need more creative than traditional production calendars can comfortably support. AI video helps teams compress ideation, pre-visualization and versioning without removing the taste and judgment of a real creative team.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "Start with a stronger brief" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "The best AI-assisted workflows still begin with clear positioning, audience insight, visual references and a measurable conversion goal. That clarity gives every generated asset a job.",
          },
        ],
      },
      {
        _type: "list",
        items: [
          "Define the offer, audience and platform before generating visuals.",
          "Use AI storyboards to compare hooks before shoot day.",
          "Create modular assets that can become reels, ads, thumbnails and landing-page media.",
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "Blend AI speed with production craft" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "AI can create momentum, but directors, editors and motion artists still shape the final piece. The winning setup is not AI versus production. It is AI for speed, humans for taste and platform strategy for results.",
          },
        ],
      },
    ],
  },
  {
    title: "UGC, Ad Films or Product Shoots: What Should Your Brand Make First?",
    slug: "ugc-ad-films-product-shoots-brand-priority",
    excerpt:
      "A simple decision framework for picking the right content format based on launch stage, budget, trust, polish and paid media goals.",
    category: "Strategy",
    tags: ["UGC", "ad films", "product shoots"],
    publishedAt: "2026-04-08",
    readingTime: 5,
    author: { name: "Media.X by Revenuxe Team", role: "Creative Strategy" },
    coverImage: "/media-x-by-revenuxe-og.webp",
    coverImageAlt: "Media.X by Revenuxe content production strategy",
    seoTitle: "UGC vs Ad Films vs Product Shoots: What to Make First",
    seoDescription:
      "Compare UGC, ad films and product shoots so your brand can prioritize content that matches its stage and marketing goal.",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Not every brand needs the same first asset. A new D2C launch may need product clarity, a scaling brand may need testimonial-style UGC, and a premium category may need cinematic trust signals.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "Pick the format by the job" }],
      },
      {
        _type: "list",
        items: [
          "Choose UGC when the campaign needs trust, speed and message testing.",
          "Choose product shoots when customers need to inspect detail, texture, packaging or use cases.",
          "Choose ad films when the brand needs a more memorable campaign moment.",
        ],
      },
      {
        _type: "quote",
        text: "The best content mix usually has one polished brand asset and many sharp performance variants.",
        byline: "Media.X by Revenuxe production principle",
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "A healthy monthly system includes all three over time. The sequence matters because each format answers a different customer objection.",
          },
        ],
      },
    ],
  },
  {
    title: "A Practical SEO Checklist for Creative Studio Blog Posts",
    slug: "seo-checklist-for-creative-studio-blogs",
    excerpt:
      "The blog publishing checklist Media.X by Revenuxe uses for search-friendly titles, metadata, internal links, schema and helpful content structure.",
    category: "SEO",
    tags: ["SEO", "content marketing", "creative studio"],
    publishedAt: "2026-03-26",
    readingTime: 7,
    author: { name: "Media.X by Revenuxe Team", role: "SEO Content" },
    coverImage: "/media-x-by-revenuxe-og.webp",
    coverImageAlt: "SEO checklist for creative studio blogs",
    seoTitle: "SEO Checklist for Creative Studio Blog Posts",
    seoDescription:
      "Use this SEO checklist for creative studio blogs covering titles, descriptions, schema, internal links and helpful content.",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "A strong publishing workflow should make SEO decisions easy before a post goes live. Editors need clear fields for meta titles, descriptions, slugs, categories, canonical URLs, image alt text and structured content.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "Before publishing" }],
      },
      {
        _type: "list",
        items: [
          "Use one primary keyword in the title, H1, intro and meta description.",
          "Write a human excerpt that can also work as social preview copy.",
          "Add descriptive alt text to every important image.",
          "Link to relevant service pages and one or two related blog posts.",
          "Validate Article, Breadcrumb and WebPage schema.",
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "A structured editorial setup keeps search fields, content previews and publishing checks flexible as the content library grows.",
          },
        ],
      },
    ],
  },
];

const postProjection = `{
  title,
  "slug": slug.current,
  excerpt,
  category,
  tags,
  publishedAt,
  updatedAt,
  readingTime,
  "author": author->{name, role},
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  seoTitle,
  seoDescription,
  canonicalUrl,
  body
}`;

const sanityFetch = async <T>(query: string): Promise<T | null> => {
  if (!hasSanityConfig) {
    return null;
  }

  const url = new URL(
    `https://${sanityProjectId}.api.sanity.io/v${sanityApiVersion}/data/query/${sanityDataset}`
  );
  url.searchParams.set("query", query);

  try {
    const response = await fetch(url, {
      headers: sanityReadToken
        ? {
            Authorization: `Bearer ${sanityReadToken}`,
          }
        : undefined,
      next: { revalidate: 30, tags: ["blog"] },
    });

    if (!response.ok) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `Sanity blog fetch failed: ${response.status} ${response.statusText}`
        );
      }
      return null;
    }

    const data = (await response.json()) as { result?: T };
    return data.result ?? null;
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Sanity blog fetch failed before receiving a response.");
    }
    return null;
  }
};

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const posts = await sanityFetch<BlogPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postProjection}`
  );

  return posts?.length ? posts : fallbackPosts;
});

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  const post = await sanityFetch<BlogPost | null>(
    `*[_type == "post" && slug.current == ${JSON.stringify(slug)}][0] ${postProjection}`
  );

  return post || fallbackPosts.find((item) => item.slug === slug) || null;
});

export const getBlogSlugs = cache(async () => {
  const posts = await getBlogPosts();
  return posts.map((post) => post.slug);
});

export const formatPostDate = (value: string) =>
  new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));

export const blockText = (block: BlogBlock) =>
  block._type === "block"
    ? block.children?.map((child) => child.text || "").join("") || ""
    : "";
