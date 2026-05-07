import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import {
  defaultOgImage,
  organizationSchema,
  siteUrl,
  websiteSchema,
} from "@/lib/seo";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Media.X by Revenuxe - AI Video Production, Ad Films, UGC & Brand Shoots",
    template: "%s | Media.X by Revenuxe",
  },
  description:
    "Media.X by Revenuxe is an AI media and content production studio for AI videos, ad films, UGC, product photography, brand shoots, motion graphics and performance creative.",
  authors: [{ name: "Media.X by Revenuxe" }],
  creator: "Media.X by Revenuxe",
  publisher: "Media.X by Revenuxe",
  applicationName: "Media.X by Revenuxe",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Media.X by Revenuxe",
    url: "/",
    title: "Media.X by Revenuxe - AI Video Production, Ad Films, UGC & Brand Shoots",
    description:
      "AI video, ad films, UGC, product shoots and brand films built faster with AI and finished by real filmmakers.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Media.X by Revenuxe AI media production studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media.X by Revenuxe - AI Video Production, Ad Films, UGC & Brand Shoots",
    description:
      "AI video, ad films, UGC, product shoots and brand films built faster with AI and finished by real filmmakers.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </body>
    </html>
  );
}
