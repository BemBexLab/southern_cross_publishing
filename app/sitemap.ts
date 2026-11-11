import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { publishingServiceSlugs } from "./publishing-services/[slug]/data";
import { fetchWpPosts } from "./blog/wp";
import { siteUrl } from "./seo";

function getRouteLastModified(
  sourcePath: string,
  fallbackLastModified: string,
): string {
  try {
    const lastModified = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", sourcePath],
      { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();

    if (lastModified) return lastModified;
  } catch {
    // Fall back for builds where Git history is unavailable.
  }

  return fallbackLastModified;
}

// Fallbacks preserve existing dates when a Vercel shallow clone omits older
// route history. A new commit touching the route supplies its current date.
const staticRoutes = [
  {
    path: "/",
    sourcePath: "app/page.tsx",
    lastModified: "2026-10-30T23:45:43+05:00",
  },
  {
    path: "/publishing-services",
    sourcePath: "app/publishing-services/page.tsx",
    lastModified: "2026-10-30T23:45:43+05:00",
  },
  {
    path: "/audiobook-service",
    sourcePath: "app/audiobook-service",
    lastModified: "2026-10-30T23:45:43+05:00",
  },
  {
    path: "/our-books",
    sourcePath: "app/our-books",
    lastModified: "2026-10-28T04:52:09+05:00",
  },
  {
    path: "/who-we-are",
    sourcePath: "app/who-we-are",
    lastModified: "2026-10-30T23:45:43+05:00",
  },
  {
    path: "/blog",
    sourcePath: "app/blog/page.tsx",
    lastModified: "2026-10-30T23:45:43+05:00",
  },
  {
    path: "/contact",
    sourcePath: "app/contact",
    lastModified: "2026-10-28T04:52:09+05:00",
  },
  {
    path: "/privacy-policy",
    sourcePath: "app/privacy-policy",
    lastModified: "2026-10-28T04:52:09+05:00",
  },
  {
    path: "/terms-condition",
    sourcePath: "app/terms-condition",
    lastModified: "2026-10-28T04:52:09+05:00",
  },
];

const publishingServiceLastModified = "2026-10-28T23:27:50+05:00";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: Awaited<ReturnType<typeof fetchWpPosts>> = [];

  try {
    blogPosts = await fetchWpPosts();
  } catch {
    // Keep the sitemap available if the WordPress API is temporarily down.
  }

  const publishingServiceLastModifiedForRoutes = getRouteLastModified(
    "app/publishing-services/[slug]",
    publishingServiceLastModified,
  );

  const routes = [
    ...staticRoutes.map(({ path, sourcePath, lastModified }) => ({
      path,
      lastModified: getRouteLastModified(sourcePath, lastModified),
    })),
    ...publishingServiceSlugs.map((slug) => ({
      path: `/publishing-services/${slug}`,
      lastModified: publishingServiceLastModifiedForRoutes,
    })),
  ];

  return [
    ...routes.map(({ path, lastModified }) => ({
      url: new URL(path, siteUrl).toString(),
      lastModified,
      changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
      lastModified: post.modified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
