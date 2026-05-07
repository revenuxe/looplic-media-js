import type { Metadata } from "next";
import ThankYou from "@/legacy-pages/ThankYou";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Thank You",
  description: "Thank you for contacting Media.X by Revenuxe.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return <ThankYou />;
}
