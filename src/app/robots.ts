import type { MetadataRoute } from "next";

const baseUrl = "https://looplic.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/thank-you", "/listings"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
