import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PrivacyPolicy from "@/legacy-pages/PrivacyPolicy";
import { breadcrumbSchema, createSeoMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy - How We Protect Your Data",
  description:
    "Read Media.X by Revenuxe's privacy policy. Learn how our AI video and content production studio collects, stores, and protects your personal and brand information.",
  path: "/privacy-policy",
  keywords: [
    "Media.X by Revenuxe privacy policy",
    "AI media data protection",
    "video production privacy",
    "brand data protection",
    "GDPR",
    "DPDP India",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Privacy Policy",
            description:
              "Privacy policy for Media.X by Revenuxe's AI video and content production services.",
            path: "/privacy-policy",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ]}
      />
      <PrivacyPolicy />
    </>
  );
}
