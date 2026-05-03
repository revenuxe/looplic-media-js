import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import AppLink from "@/components/AppLink";
import FooterSection from "@/components/FooterSection";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import {
  blockText,
  formatPostDate,
  getBlogPost,
  getBlogPosts,
  getBlogSlugs,
  type BlogBlock,
} from "@/lib/blog";
import {
  absoluteUrl,
  breadcrumbSchema,
  createSeoMetadata,
  siteName,
} from "@/lib/seo";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return createSeoMetadata({
      title: "Blog Post Not Found",
      description: "This Looplic blog post could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createSeoMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    image: post.coverImage || undefined,
  });
}

const renderBlock = (block: BlogBlock, index: number) => {
  if (block._type === "list") {
    return (
      <ul key={index} className="my-6 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-muted-foreground">
            <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block._type === "quote") {
    return (
      <blockquote key={index} className="my-8 border-l-4 border-accent bg-card p-6">
        <p className="text-xl font-serif italic leading-relaxed text-foreground">
          "{block.text}"
        </p>
        {block.byline && (
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">
            {block.byline}
          </p>
        )}
      </blockquote>
    );
  }

  const text = blockText(block);

  if (block.style === "h2") {
    return (
      <h2 key={index} className="mb-4 mt-10 text-2xl font-serif leading-tight sm:text-3xl">
        {text}
      </h2>
    );
  }

  if (block.style === "h3") {
    return (
      <h3 key={index} className="mb-3 mt-8 text-xl font-serif leading-tight sm:text-2xl">
        {text}
      </h3>
    );
  }

  return (
    <p key={index} className="mb-5 text-base leading-8 text-muted-foreground">
      {text}
    </p>
  );
};

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getBlogPosts())
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    image: post.coverImage ? [post.coverImage] : [absoluteUrl("/looplic-og.webp")],
    author: {
      "@type": "Person",
      name: post.author?.name || siteName,
    },
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <Navbar />

      <article>
        <header className="bg-primary px-4 py-14 text-primary-foreground sm:px-6 md:py-24 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <AppLink
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Back to blog
            </AppLink>
            <div className="mb-5 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground/65">
              <span className="text-accent">{post.category}</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} /> {formatPostDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} /> {post.readingTime} min read
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-serif leading-tight sm:text-5xl md:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-primary-foreground/70">
              <span>{post.author?.name || "Looplic Team"}</span>
              {post.author?.role && (
                <>
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span>{post.author.role}</span>
                </>
              )}
            </div>
          </div>
        </header>

        {post.coverImage && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="-mt-12 overflow-hidden border border-border bg-card md:-mt-16">
              <img
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                className="h-[240px] w-full object-cover sm:h-[420px] lg:h-[560px]"
              />
            </div>
          </div>
        )}

        <section className="px-4 py-12 sm:px-6 md:py-20 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div>
              {post.body.map((block, index) => renderBlock(block, index))}
            </div>
          </div>
        </section>
      </article>

      <section className="bg-secondary px-4 py-12 sm:px-6 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Keep Reading
            </p>
            <h2 className="mt-2 text-2xl font-serif sm:text-4xl">Related articles</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <AppLink
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="border border-border bg-background p-5 transition-colors hover:border-accent/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.category}
                </p>
                <h3 className="mt-3 text-xl font-serif leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
