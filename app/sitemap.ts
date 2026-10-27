import type { MetadataRoute } from "next";
import { publishingServiceSlugs } from "./publishing-services/[slug]/data";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...publishingServiceSlugs.map((slug) => `/publishing-services/${slug}`),
  ];

  return routes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));
}
