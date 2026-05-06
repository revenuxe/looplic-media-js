import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AboutUs from "@/legacy-pages/AboutUs";
import { breadcrumbSchema, createSeoMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About - AI Media Studio for Content That Performs",
  description:
    "Meet media.x by revenuxe, a Bangalore AI media company combining generative AI, filmmaking and performance creative to ship brand videos, UGC and product content faster.",
  path: "/about",
  keywords: [
    "about media.x by revenuxe",
    "AI media agency",
    "AI video studio",
    "content production India",
    "ad film studio",
    "UGC agency",
    "AI creative agency",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            type: "AboutPage",
            name: "About media.x by revenuxe",
            description:
              "media.x by revenuxe blends generative AI with production craft for AI video, ad films, UGC, product shoots and brand content.",
            path: "/about",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutUs />
    </>
  );
}
