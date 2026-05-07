import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServicesPage from "@/legacy-pages/ServicesPage";
import {
  breadcrumbSchema,
  createSeoMetadata,
  serviceItemListSchema,
  webPageSchema,
} from "@/lib/seo";
import { serviceList } from "@/data/serviceDetails";

export const metadata: Metadata = createSeoMetadata({
  title: "AI Video, Ad Film, UGC & Content Production Services",
  description:
    "Explore Media.X by Revenuxe's full suite of AI video, ad film, UGC, product, brand, motion graphics, podcast and performance creative services for D2C, SaaS and modern brands.",
  path: "/services",
  keywords: [
    "AI video production services",
    "ad film production company",
    "UGC agency India",
    "performance creative agency",
    "motion graphics studio",
    "AI avatar agency",
    "ecommerce video production",
    "podcast production Bangalore",
    "social media content agency",
  ],
});

export default function ServicesRoutePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            type: "CollectionPage",
            name: "Media.X by Revenuxe Services",
            description:
              "AI video, ad films, UGC, product photography, brand shoots, motion graphics, podcasts, AI avatars and performance creative services.",
            path: "/services",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceItemListSchema(serviceList),
        ]}
      />
      <ServicesPage />
    </>
  );
}
