import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaRegCalendar } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import BlogFooter from "../components/BlogFooter";
import {
  decodeHtml,
  estimateReadTime,
  fetchWpPost,
  fetchWpPosts,
  formatPostDate,
  stripHtml,
} from "../wp";

export const revalidate = 300;

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await fetchWpPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Southern Cross Publishing",
    };
  }

  const title = decodeHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered);
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${title} | Southern Cross Publishing`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

const page = async (props: PageProps<"/blog/[slug]">) => {
  const { slug } = await props.params;
  const post = await fetchWpPost(slug);

  if (!post) {
    notFound();
  }

  const title = decodeHtml(post.title.rendered);
  const excerpt = stripHtml(post.excerpt.rendered);
  const publishedDate = formatPostDate(post.date);
  const readTime = estimateReadTime(post.content.rendered);
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const recentPosts = (await fetchWpPosts())
    .filter((recentPost) => recentPost.id !== post.id)
    .slice(0, 3)
    .map((recentPost) => ({
      slug: recentPost.slug,
      title: decodeHtml(recentPost.title.rendered),
      date: formatPostDate(recentPost.date),
    }));

  return (
    <section className="bg-[#f6eed0] pt-28 sm:pt-32 lg:pt-36">
      <article className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12">
            <div>
              <Link
                href="/blog"
                className="montserrat inline-flex items-center gap-2 rounded-md bg-[#8fd387] px-3 py-2 text-sm font-medium text-[#14522f] transition hover:bg-[#7dca74]"
              >
                <FaArrowLeft className="h-3 w-3" />
                Back to blog
              </Link>

              <header className="mt-7">
                <h1 className="goneva max-w-[760px] text-[2.15rem] leading-[0.98] text-[#018752] sm:text-[2.7rem] lg:text-[3.2rem]">
                  {title}
                </h1>
              </header>

              <div className="mt-8 overflow-hidden rounded-[10px] border border-[#e5dbc1] bg-[#fff9e9] shadow-[0_10px_24px_rgba(80,64,24,0.06)]">
                {featuredImage?.source_url ? (
                  <img
                    src={featuredImage.source_url}
                    alt={featuredImage.alt_text || title}
                    className="h-auto w-full object-cover"
                  />
                ) : (
                  <div className="flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_top,#f2f6b5,transparent_58%),linear-gradient(135deg,#fff4d4,#efe4b8)] px-8 py-10 text-center">
                    <div>
                      <p className="montserrat text-xs font-semibold uppercase tracking-[0.24em] text-[#99831a]">
                        Southern Cross Publishing
                      </p>
                      <p className="goneva mt-4 text-3xl leading-tight text-[#018752]">
                        Practical publishing guidance for authors building better books
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="montserrat mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-[#a1967c]">
                <span className="inline-flex items-center gap-2">
                  <FaRegCalendar className="h-3 w-3 text-[#c4b677]" />
                  {publishedDate}
                </span>
                <span className="inline-flex items-center gap-2">
                  <LuClock3 className="h-3 w-3 text-[#c4b677]" />
                  {readTime} min read
                </span>
              </div>

              <div className="mt-5">
                {excerpt ? (
                  <p className="montserrat text-[0.97rem] leading-[1.75] text-[#6d665a]">
                    {excerpt}
                  </p>
                ) : null}
              </div>

              <div className="mt-8 rounded-[10px] bg-transparent">
                <div
                  className="wp-blog-content montserrat max-w-none text-[0.96rem] leading-[1.72] text-[#443f36] [&_a]:text-[#018752] [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-6 [&_blockquote]:rounded-[10px] [&_blockquote]:border-l-4 [&_blockquote]:border-[#d5c16d] [&_blockquote]:bg-[#f1e7c6] [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:italic [&_em]:italic [&_h1]:mt-8 [&_h1]:text-[2rem] [&_h1]:leading-tight [&_h1]:text-[#1f6c45] [&_h2]:mt-8 [&_h2]:text-[1.7rem] [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-[#3f3b2f] [&_h3]:mt-7 [&_h3]:text-[1.15rem] [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:text-[#3f3b2f] [&_hr]:my-8 [&_hr]:border-[#ded1ac] [&_img]:my-6 [&_img]:rounded-[10px] [&_li]:leading-[1.7] [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-[#3f3b2f] [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-[8px] [&_tbody_tr]:border-b [&_tbody_tr]:border-[#e6dcc1] [&_td]:px-3 [&_td]:py-3 [&_td]:align-top [&_th]:bg-[#e7ddb6] [&_th]:px-3 [&_th]:py-3 [&_th]:text-left [&_th]:text-[#3f3b2f] [&_tr:nth-child(even)]:bg-[#fbf5df] [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[12px] bg-[#ebe0b9] px-5 py-4 text-[#2c2a25]">
                <div>
                  <p className="montserrat text-sm uppercase tracking-[0.16em] text-[#018752]">
                    Want more publishing insights?
                  </p>
                  <p className="montserrat mt-1 text-sm leading-6 text-[#534d41]">
                    Browse more articles or read this post on the original WordPress site.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/blog"
                    className="montserrat inline-flex min-h-11 items-center justify-center rounded-md border border-[#018752] px-5 text-sm font-semibold text-[#018752] transition hover:bg-[#018752] hover:text-[#f7f1d7]"
                  >
                    View all posts
                  </Link>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="montserrat inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#fdd118] px-5 text-sm font-semibold text-[#018752] transition hover:bg-[#ffd53b]"
                  >
                    Open source article
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <aside className="lg:border-l lg:border-[#d9ccaa] lg:pl-8">
              <div className="lg:sticky lg:top-32">
                <div className="rounded-[10px] bg-[#252525] p-5 text-[#f7f1d7] shadow-[0_18px_35px_rgba(24,20,12,0.18)]">
                  <h2 className="montserrat text-[1.05rem] font-semibold leading-[1.2] text-[#fdd118]">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="montserrat mt-3 text-[0.76rem] leading-[1.55] text-[#ddd5c3]">
                    Get the latest publishing tips and career-building advice delivered to your inbox.
                  </p>
                  <div className="mt-4 space-y-3">
                    <input
                      type="email"
                      placeholder="Your Email address"
                      className="montserrat h-10 w-full rounded-[4px] border-none bg-[#fff7df] px-4 text-sm text-[#44413b] placeholder:text-[#9f9b8d] focus:outline-none"
                    />
                    <button
                      type="button"
                      className="montserrat flex h-10 w-full items-center justify-center rounded-[4px] bg-[#fdd118] px-4 text-sm font-semibold text-[#1d5f3f] transition hover:bg-[#ffd53b]"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="montserrat text-[1rem] font-semibold text-[#23a05f]">
                    Recent Posts
                  </h3>
                  <div className="mt-4 space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.slug}
                        href={`/blog/${recentPost.slug}`}
                        className="block border-b border-[#ddd1b1] pb-4 transition hover:opacity-85"
                      >
                        <p className="montserrat text-[0.8rem] leading-[1.5] text-[#7e786a]">
                          {recentPost.title}
                        </p>
                        <p className="montserrat mt-1 text-[0.7rem] text-[#b0a48a]">
                          {recentPost.date}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
