import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TermsConditions from "@/legacy-pages/TermsConditions";
import { breadcrumbSchema, createSeoMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Terms & Conditions - Service Agreement",
  description:
    "Terms & conditions for engaging media.x by revenuxe for AI video production, ad films, UGC, product shoots and content services. Scope, payment, IP, deliverables and revisions.",
  path: "/terms-and-conditions",
  keywords: [
    "media.x by revenuxe terms and conditions",
    "AI video production agreement",
    "ad film service agreement",
    "content production terms",
    "IP ownership video",
    "payment terms studio India",
  ],
});

export default function TermsConditionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Terms and Conditions",
            description:
              "Service agreement terms for media.x by revenuxe's AI video, ad film, UGC and content production services.",
            path: "/terms-and-conditions",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms and Conditions", path: "/terms-and-conditions" },
          ]),
        ]}
      />
      <TermsConditions />
    </>
  );
}
