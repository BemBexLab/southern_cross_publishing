import type { Metadata } from "next";

export const siteUrl =
  process.env.SITE_URL || "https://www.southerncrosspublishing.com";
export const siteName = "Crux Publishing House";
export const defaultDescription =
  "Crux Publishing House helps authors across Australia with book writing, editing, design, audiobook production, publishing, and global distribution.";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: CreatePageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
