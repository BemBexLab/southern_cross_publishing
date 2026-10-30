import type { Metadata } from "next";
import React from "react";
import BlogBody from "./components/BlogBody";
import BlogHero from "./components/BlogHero";
import BlogOverlay from "./components/BlogOverlay";
import BlogFooter from "./components/BlogFooter";
import MotionSection from "@/components/MotionSection";
import { fetchWpPosts, mapWpPostToSummary } from "./wp";
import { createPageMetadata } from "../seo";

// Blog content is rendered on request, while the WordPress response is cached
// server-side for five minutes in `app/blog/wp.ts`.
export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title: "Our Blogs | Crux Publishing House",
  description:
    "Explore the Crux Publishing House blog for helpful writing tips, publishing insights, book marketing advice, and resources for aspiring and established authors.",
  path: "/blog",
});

const page = async () => {
  const posts = (await fetchWpPosts()).map(mapWpPostToSummary);

  return (
    <section className="bg-[#F7F1D7]">
      <MotionSection delay={0.02} distance={18}>
        <BlogHero />
      </MotionSection>
      <MotionSection delay={0.04}>
        <BlogBody posts={posts} />
      </MotionSection>
      <MotionSection className="relative z-30" delay={0.04}>
        <BlogOverlay />
      </MotionSection>
      <MotionSection delay={0.04}>
        <BlogFooter />
      </MotionSection>
    </section>
  );
};

export default page;
