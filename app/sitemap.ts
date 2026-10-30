import type { MetadataRoute } from "next";
import { publishingServiceSlugs } from "./publishing-services/[slug]/data";
import { fetchWpPosts } from "./blog/wp";
import { siteUrl } from "./seo";

const staticRoutes = [
  "/",
  "/publishing-services",
  "/audiobook-service",
  "/our-books",
  "/who-we-are",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms-condition",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: Awaited<ReturnType<typeof fetchWpPosts>> = [];

  try {
    blogPosts = await fetchWpPosts();
  } catch {
    // Keep the sitemap available if the WordPress API is temporarily down.
  }

  const routes = [
    ...staticRoutes,
    ...publishingServiceSlugs.map((slug) => `/publishing-services/${slug}`),
  ];

  return [
    ...routes.map((path) => ({
      url: new URL(path, siteUrl).toString(),
      changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
      lastModified: post.modified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
