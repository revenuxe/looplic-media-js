import type { Metadata } from "next";
import type { ServiceDetail } from "@/data/serviceDetails";

export const siteUrl = "https://media.revenuxe.com";
export const siteName = "Media.X by Revenuxe";
export const defaultOgImage = "/media-x-by-revenuxe-og.webp";

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();

type SeoMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  image?: string;
};

export const createSeoMetadata = ({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  image = defaultOgImage,
}: SeoMetadataInput): Metadata => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  keywords,
  openGraph: {
    type: "website",
    siteName,
    title,
    description,
    url: path,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Media.X by Revenuxe AI media production studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  robots: noIndex
    ? {
        index: false,
        follow: false,
      }
    : {
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
});

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "Media.X by Revenuxe",
  alternateName: "Media.X by Revenuxe",
  description:
    "AI media company and content production studio specializing in AI video, ad films, UGC, product photography, brand shoots, motion graphics and performance creative.",
  url: siteUrl,
  logo: absoluteUrl("/favicon.ico"),
  image: absoluteUrl(defaultOgImage),
  telephone: "+919886285028",
  email: "hello@media.revenuxe.com",
  priceRange: "$$",
  areaServed: ["India", "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Global remote"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/media-x-by-revenuxe"],
  knowsAbout: [
    "AI video production",
    "Ad film production",
    "UGC content",
    "Product photography",
    "Brand shoots",
    "Motion graphics",
    "Performance creative",
    "AI avatars",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const webPageSchema = ({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
});

export const serviceSchema = (detail: ServiceDetail) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(`/services/${detail.slug}`)}#service`,
  name: detail.title,
  description: detail.longDesc.replace(/<\/?br>/g, " "),
  serviceType: detail.title,
  url: absoluteUrl(`/services/${detail.slug}`),
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: ["India", "Global remote"],
  audience: {
    "@type": "Audience",
    audienceType: "D2C brands, SaaS companies, agencies, founders and modern marketing teams",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: absoluteUrl("/contact"),
    priceCurrency: "INR",
  },
});

export const faqSchema = (faqs: ServiceDetail["faqs"]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

export const serviceItemListSchema = (services: ServiceDetail[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    description: service.shortDesc,
    url: absoluteUrl(`/services/${service.slug}`),
  })),
});
