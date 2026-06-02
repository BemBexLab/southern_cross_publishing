import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishingServicePageData, publishingServiceSlugs } from "./data";
import PublishingServicePageContent from "./PublishingServicePageContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishingServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/publishing-services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const pageData = getPublishingServicePageData(slug);

  if (!pageData) {
    return {
      title: "Publishing Service Not Found",
    };
  }

  const title = pageData.seoTitle ?? pageData.hero.title;

  return {
    title,
    description: pageData.seoDescription,
    alternates: {
      canonical: `/publishing-services/${pageData.slug}`,
    },
    openGraph: {
      title,
      description: pageData.seoDescription,
      url: `/publishing-services/${pageData.slug}`,
      siteName: "Southern Cross Publishing",
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: pageData.seoDescription,
    },
  };
}

const page = async (props: PageProps<"/publishing-services/[slug]">) => {
  const { slug } = await props.params;
  const pageData = getPublishingServicePageData(slug);

  if (!pageData) {
    notFound();
  }

  return <PublishingServicePageContent pageData={pageData} />;
};

export default page;
