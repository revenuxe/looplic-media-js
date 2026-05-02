import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Contact from "@/legacy-pages/Contact";
import { breadcrumbSchema, createSeoMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact Looplic - Hire an AI Video, Ad Film & UGC Studio",
  description:
    "Brief Looplic on your next AI video, ad film, UGC, product shoot, motion graphics or brand campaign. Bangalore-based AI media studio, since 2025. We respond within 24 hours.",
  path: "/contact",
  keywords: [
    "contact Looplic",
    "hire AI video agency",
    "ad film production company Bangalore",
    "UGC agency India",
    "product shoot studio",
    "brand shoot",
    "AI media company contact",
    "get a quote video production",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            type: "ContactPage",
            name: "Contact Looplic",
            description:
              "Contact Looplic for AI video production, ad films, UGC, product shoots, brand shoots and performance creative.",
            path: "/contact",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Contact />
    </>
  );
}
