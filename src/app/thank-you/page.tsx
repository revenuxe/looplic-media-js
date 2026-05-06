import type { Metadata } from "next";
import ThankYou from "@/legacy-pages/ThankYou";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Thank You",
  description: "Thank you for contacting media.x by revenuxe.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return <ThankYou />;
}
