import "server-only";
import { BlogData, type BlogContentBlock, type BlogImage, type BlogPostData } from "@/data/BlogData";
import {
  decodeHtml,
  estimateReadTime,
  fetchWpPost,
  formatPostDate,
  stripHtml,
  type BlogPostSummary,
} from "./wp";

function getLocalPostWordCount(post: BlogPostData): number {
  return post.content.flatMap((block) => {
    if (block.type === "paragraphs") {
      return block.paragraphs.filter((item): item is string => typeof item === "string");
    }
    if (block.type === "heading") return [block.text];
    if (block.type === "list") {
      return block.listItems.filter((item): item is string => typeof item === "string");
    }
    if (block.type === "table") return [...block.headers, ...block.rows.flat()];
    if (block.type === "faqs") {
      return block.items.flatMap(({ question, answer }) => [question, answer]);
    }
    return [];
  }).join(" ").split(/\s+/).filter(Boolean).length;
}

export function getLocalBlogSummaries(): BlogPostSummary[] {
  return BlogData.map((post, index) => ({
    id: -(index + 1),
    slug: post.slug,
    title: post.h1,
    excerpt: post.excerpt,
    date: formatPostDate(post.date),
    link: `/blog/${post.slug}`,
    image: post.image?.url,
    imageAlt: post.image?.alt,
    readTime: post.readTime ?? Math.max(1, Math.ceil(getLocalPostWordCount(post) / 200)),
  }));
}

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  image: BlogImage | null;
  content:
    | { source: "local"; blocks: BlogContentBlock[] }
    | { source: "wordpress"; html: string };
};

// Local slugs take precedence. All other slugs use the existing cached WP fetch.
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const localPost = BlogData.find((post) => post.slug === slug);

  if (localPost) {
    return {
      slug: localPost.slug,
      title: localPost.h1,
      excerpt: localPost.excerpt,
      date: localPost.date,
      readTime:
        localPost.readTime ?? Math.max(1, Math.ceil(getLocalPostWordCount(localPost) / 200)),
      image: localPost.image,
      content: { source: "local", blocks: localPost.content },
    };
  }

  const post = await fetchWpPost(slug);
  if (!post) return null;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  return {
    slug: post.slug,
    title: decodeHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    date: post.date,
    readTime: estimateReadTime(post.content.rendered),
    image: featuredImage?.source_url
      ? { url: featuredImage.source_url, alt: featuredImage.alt_text || decodeHtml(post.title.rendered) }
      : null,
    content: { source: "wordpress", html: post.content.rendered },
  };
}
