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
    default: "Looplic - AI Video Production, Ad Films, UGC & Brand Shoots",
    template: "%s | Looplic",
  },
  description:
    "Looplic is an AI media and content production studio for AI videos, ad films, UGC, product photography, brand shoots, motion graphics and performance creative.",
  authors: [{ name: "Looplic" }],
  creator: "Looplic Media",
  publisher: "Looplic Media",
  applicationName: "Looplic",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Looplic",
    url: "/",
    title: "Looplic - AI Video Production, Ad Films, UGC & Brand Shoots",
    description:
      "AI video, ad films, UGC, product shoots and brand films built faster with AI and finished by real filmmakers.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Looplic AI media production studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Looplic - AI Video Production, Ad Films, UGC & Brand Shoots",
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
