import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { publishingServiceSlugs } from "./publishing-services/[slug]/data";
import { fetchWpPosts } from "./blog/wp";
import { siteUrl } from "./seo";

let attemptedFullGitHistory = false;

function readGitDate(args: string[]): string | undefined {
  try {
    return (
      execFileSync("git", args, {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim() || undefined
    );
  } catch {
    return undefined;
  }
}

function getRouteLastModified(sourcePaths: string[]): string {
  const routeDate = () =>
    readGitDate(["log", "-1", "--format=%cI", "--", ...sourcePaths]);

  let lastModified = routeDate();

  // Vercel shallow-clones only recent commits. Fetch full history if needed so
  // an unchanged route can retain its own date instead of using the deploy date.
  if (!lastModified && !attemptedFullGitHistory) {
    attemptedFullGitHistory = true;

    if (readGitDate(["rev-parse", "--is-shallow-repository"]) === "true") {
      try {
        execFileSync("git", ["fetch", "--unshallow", "--no-tags"], {
          cwd: process.cwd(),
          stdio: "ignore",
        });
      } catch {
        // Use the deployment commit date below if the remote cannot be fetched.
      }
    }

    lastModified = routeDate();
  }

  return (
    lastModified ??
    readGitDate(["log", "-1", "--format=%cI"]) ??
    new Date().toISOString()
  );
}

const staticRoutes = [
  {
    path: "/",
    sourcePaths: [
      "app/page.tsx",
      "components/AtSouthernCross.tsx",
      "components/ComprehensivePublishing.tsx",
      "components/FAQs.tsx",
      "components/GetInTouch.tsx",
      "components/HomeHero.tsx",
      "components/HowItWorks.tsx",
      "components/LogoSlider.tsx",
      "components/LookingForSelfPublishing.tsx",
      "components/MotionSection.tsx",
      "components/OurBook.tsx",
      "components/Testimonials.tsx",
      "components/WitnessOurUniqueness.tsx",
      "components/YourStory.tsx",
    ],
  },
  {
    path: "/publishing-services",
    sourcePaths: [
      "app/publishing-services/page.tsx",
      "app/publishing-services/components",
    ],
  },
  {
    path: "/audiobook-service",
    sourcePaths: ["app/audiobook-service"],
  },
  {
    path: "/our-books",
    sourcePaths: ["app/our-books"],
  },
  {
    path: "/who-we-are",
    sourcePaths: ["app/who-we-are"],
  },
  {
    path: "/blog",
    sourcePaths: ["app/blog/page.tsx", "app/blog/components"],
  },
  {
    path: "/contact",
    sourcePaths: ["app/contact"],
  },
  {
    path: "/privacy-policy",
    sourcePaths: ["app/privacy-policy"],
  },
  {
    path: "/terms-condition",
    sourcePaths: ["app/terms-condition"],
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: Awaited<ReturnType<typeof fetchWpPosts>> = [];

  try {
    blogPosts = await fetchWpPosts();
  } catch {
    // Keep the sitemap available if the WordPress API is temporarily down.
  }

  const publishingServiceLastModifiedForRoutes = getRouteLastModified([
    "app/publishing-services/[slug]",
  ]);

  const routes = [
    ...staticRoutes.map(({ path, sourcePaths }) => ({
      path,
      lastModified: getRouteLastModified(sourcePaths),
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
