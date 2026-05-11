import React from "react";
import BlogBody from "./components/BlogBody";
import BlogHero from "./components/BlogHero";
import BlogOverlay from "./components/BlogOverlay";
import BlogFooter from "./components/BlogFooter";
import { fetchWpPosts, mapWpPostToSummary } from "./wp";

export const revalidate = 300;

const page = async () => {
  const posts = (await fetchWpPosts()).map(mapWpPostToSummary);

  return (
    <section className="bg-[#F7F1D7]">
      <BlogHero />
      <BlogBody posts={posts} />
      <BlogOverlay />
      <BlogFooter />
    </section>
  );
};

export default page;
