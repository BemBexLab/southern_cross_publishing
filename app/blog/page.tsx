import type { Metadata } from "next";
import React from "react";
import BlogBody from "./components/BlogBody";
import BlogHero from "./components/BlogHero";
import BlogOverlay from "./components/BlogOverlay";
import BlogFooter from "./components/BlogFooter";
import MotionSection from "@/components/MotionSection";
import { fetchWpPosts, mapWpPostToSummary } from "./wp";
import { createPageMetadata } from "../seo";

// WordPress content is fetched for each request.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = createPageMetadata({
  title: "Crux Publishing Blog: Book Publishing Insights",
  description:
    "Read the Crux Publishing blog for expert tips on book writing, publishing, marketing, self-publishing, editing, and building a successful author journey.",
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
