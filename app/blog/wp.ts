import "server-only";

const WP_POSTS_API =
  process.env.WP_POSTS_API ||
  "https://projectdemolink.com/projectdemo/index.php/wp-json/wp/v2/posts";

export const BLOG_REVALIDATE_SECONDS = 300;

type WpRenderedField = {
  rendered: string;
};

type WpMedia = {
  source_url?: string;
  alt_text?: string;
};

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  link: string;
  title: WpRenderedField;
  excerpt: WpRenderedField;
  content: WpRenderedField;
  _embedded?: {
    ["wp:featuredmedia"]?: WpMedia[];
  };
};

export type BlogPostSummary = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image?: string;
  imageAlt?: string;
  readTime: number;
};

export const decodeHtml = (value: string) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCharCode(parseInt(code, 16))
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

export const stripHtml = (value: string) =>
  decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

export const formatPostDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));

export const estimateReadTime = (html: string) => {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

export const mapWpPostToSummary = (post: WpPost): BlogPostSummary => ({
  id: post.id,
  slug: post.slug,
  title: decodeHtml(post.title.rendered),
  excerpt: stripHtml(post.excerpt.rendered),
  date: formatPostDate(post.date),
  link: post.link,
  image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  imageAlt: post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text,
  readTime: estimateReadTime(post.content.rendered),
});

export async function fetchWpPosts(): Promise<WpPost[]> {
  const response = await fetch(`${WP_POSTS_API}?per_page=100&_embed`, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch WordPress posts");
  }

  return (await response.json()) as WpPost[];
}

export async function fetchWpPost(slug: string): Promise<WpPost | null> {
  const response = await fetch(
    `${WP_POSTS_API}?slug=${encodeURIComponent(slug)}&_embed`,
    {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch WordPress post for slug "${slug}"`);
  }

  const posts = (await response.json()) as WpPost[];

  return posts[0] ?? null;
}
