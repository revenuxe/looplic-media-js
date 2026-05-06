import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import AppLink from "@/components/AppLink";
import FooterSection from "@/components/FooterSection";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { getBlogPosts, formatPostDate } from "@/lib/blog";
import {
  breadcrumbSchema,
  createSeoMetadata,
  webPageSchema,
} from "@/lib/seo";

export const revalidate = 30;

export const metadata: Metadata = createSeoMetadata({
  title: "Blog - AI Video, Content Production & Creative SEO",
  description:
    "Read media.x by revenuxe insights on AI video production, ad films, UGC, product shoots, performance creative and SEO-led content marketing.",
  path: "/blog",
  keywords: [
    "media.x by revenuxe blog",
    "AI video production blog",
    "content production SEO",
    "UGC marketing tips",
    "creative studio blog",
    "creative content blog",
  ],
});

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={[
          webPageSchema({
            type: "CollectionPage",
            name: "media.x by revenuxe Blog",
            description:
              "AI video, production, UGC, performance creative and SEO insights from media.x by revenuxe.",
            path: "/blog",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <Navbar />

      <section className="bg-primary px-4 py-14 text-primary-foreground sm:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            media.x by revenuxe Insights
          </p>
          <h1 className="max-w-4xl text-4xl font-serif leading-tight sm:text-5xl md:text-7xl">
            Ideas for content that <span className="italic text-accent">ships</span>, ranks and sells.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Practical notes on AI video, content production systems, UGC, ad films, SEO and the creative workflows modern brands need to move faster.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="px-4 py-12 sm:px-6 md:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Featured
                </p>
                <h2 className="mt-2 text-2xl font-serif sm:text-4xl">Latest thinking</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="border border-border px-3 py-1 text-xs font-semibold text-muted-foreground"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <AppLink
              to={`/blog/${featuredPost.slug}`}
              className="group grid overflow-hidden border border-border bg-card md:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="aspect-[16/10] bg-secondary md:aspect-auto">
                {featuredPost.coverImage && (
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.coverImageAlt || featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex min-h-[360px] flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <span className="text-accent">{featuredPost.category}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} /> {formatPostDate(featuredPost.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} /> {featuredPost.readingTime} min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif leading-tight sm:text-4xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <span className="mt-8 inline-flex w-fit items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
                  Read article <ArrowUpRight size={16} />
                </span>
              </div>
            </AppLink>
          </div>
        </section>
      )}

      <section className="bg-secondary px-4 py-12 sm:px-6 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              All Articles
            </p>
            <h2 className="mt-2 text-2xl font-serif sm:text-4xl">Production, AI and growth notes</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <AppLink
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex min-h-[360px] flex-col justify-between border border-border bg-background p-5 transition-colors hover:border-accent/50"
              >
                <div>
                  <div className="mb-5 aspect-[16/9] overflow-hidden bg-card">
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.coverImageAlt || post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="mb-3 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <span className="text-accent">{post.category}</span>
                    <span>{post.readingTime} min</span>
                  </div>
                  <h3 className="text-xl font-serif leading-tight">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Read more <ArrowUpRight size={15} />
                </span>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
