import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ServiceDetailPage from "@/legacy-pages/ServiceDetailPage";
import { serviceDetails } from "@/data/serviceDetails";
import {
  breadcrumbSchema,
  createSeoMetadata,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

type ServiceParams = {
  slug: string;
};

export function generateStaticParams(): ServiceParams[] {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ServiceParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug];

  if (!detail) {
    return {
      title: "Service Not Found | Media.X by Revenuxe",
    };
  }

  return createSeoMetadata({
    title: `${detail.title} Agency`,
    description: detail.shortDesc,
    path: `/services/${detail.slug}`,
    keywords: detail.keywords.split(",").map((keyword) => keyword.trim()),
  });
}

export default async function ServiceRoutePage({
  params,
}: {
  params: Promise<ServiceParams>;
}) {
  const { slug } = await params;

  if (!serviceDetails[slug]) {
    notFound();
  }

  const detail = serviceDetails[slug];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: detail.title,
            description: detail.shortDesc,
            path: `/services/${detail.slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: detail.title, path: `/services/${detail.slug}` },
          ]),
          serviceSchema(detail),
          faqSchema(detail.faqs),
        ]}
      />
      <ServiceDetailPage slug={slug} />
    </>
  );
}
