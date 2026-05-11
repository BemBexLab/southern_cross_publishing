import React from "react";
import { notFound } from "next/navigation";
import { getPublishingServicePageData, publishingServiceSlugs } from "./data";
import PublishingServicePageContent from "./PublishingServicePageContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishingServiceSlugs.map((slug) => ({ slug }));
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
