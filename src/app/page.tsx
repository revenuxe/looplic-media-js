import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Index from "@/legacy-pages/Index";
import {
  breadcrumbSchema,
  createSeoMetadata,
  serviceItemListSchema,
  webPageSchema,
} from "@/lib/seo";
import { serviceList } from "@/data/serviceDetails";

export const metadata: Metadata = createSeoMetadata({
  title: "AI Video Production, Ad Films, UGC & Brand Shoots",
  description:
    "Looplic is a Bangalore-based AI media studio producing AI videos, ad films, UGC ads, product shoots, motion graphics and brand content for modern brands.",
  path: "/",
  keywords: [
    "AI video production company",
    "ad film production company Bangalore",
    "UGC agency India",
    "AI media company",
    "product photography Bangalore",
    "brand shoot agency",
    "performance creative agency",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Looplic AI Studio",
            description:
              "AI video production, ad films, UGC, product photography, brand shoots and performance creative for modern brands.",
            path: "/",
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          serviceItemListSchema(serviceList),
        ]}
      />
      <Index />
    </>
  );
}
