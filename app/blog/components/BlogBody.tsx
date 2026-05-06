"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegCalendar,
} from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";

const popularTags = [
  "Self Publishing",
  "Marketing",
  "Writing Tips",
  "Cover Design",
  "Ebooks",
  "Audiobooks",
  "Children's Books",
  "Ghostwriting",
];

const recentPosts = [
  "Pricing for Professional Book Editing Services (2026 Guide)",
  "How Much Does It Cost to Self Publish a Book? Real Costs Explained",
];

const blogPosts = [
  {
    id: 1,
    title: "Pricing for Professional Book Editing Services (2026 Guide)",
    excerpt:
      "When you're planning to publish a book, one of the first questions you'll face is:",
    highlight: '"How much will editing cost?"',
    image: "https://picsum.photos/seed/blog-editing-1/720/460",
  },
  {
    id: 2,
    title: "Pricing for Professional Book Editing Services (2026 Guide)",
    excerpt:
      "When you're planning to publish a book, one of the first questions you'll face is:",
    highlight: '"How much will editing cost?"',
    image: "https://picsum.photos/seed/blog-editing-2/720/460",
  },
  {
    id: 3,
    title: "Pricing for Professional Book Editing Services (2026 Guide)",
    excerpt:
      "When you're planning to publish a book, one of the first questions you'll face is:",
    highlight: '"How much will editing cost?"',
    image: "https://picsum.photos/seed/blog-editing-3/720/460",
  },
  {
    id: 4,
    title: "Pricing for Professional Book Editing Services (2026 Guide)",
    excerpt:
      "When you're planning to publish a book, one of the first questions you'll face is:",
    highlight: '"How much will editing cost?"',
    image: "https://picsum.photos/seed/blog-editing-1/720/460",
  },
  {
    id: 5,
    title: "Pricing for Professional Book Editing Services (2026 Guide)",
    excerpt:
      "When you're planning to publish a book, one of the first questions you'll face is:",
    highlight: '"How much will editing cost?"',
    image: "https://picsum.photos/seed/blog-editing-2/720/460",
  },
  {
    id: 6,
    title: "Pricing for Professional Book Editing Services (2026 Guide)",
    excerpt:
      "When you're planning to publish a book, one of the first questions you'll face is:",
    highlight: '"How much will editing cost?"',
    image: "https://picsum.photos/seed/blog-editing-3/720/460",
  },
];

const POSTS_PER_PAGE = 3;

const BlogBody = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const visiblePosts = blogPosts.slice(
    currentPage * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE + POSTS_PER_PAGE
  );

  return (
    <section className="bg-[#F7F1D7] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[18rem_minmax(0,1fr)] xl:gap-8">
          <aside className="xl:border-r xl:border-stone-300 xl:pr-8">
            <div className="space-y-8">
              <div>
                <label htmlFor="blog-search" className="sr-only">
                  Search blog posts
                </label>
                <input
                  id="blog-search"
                  type="search"
                  placeholder="Search"
                  className="montserrat h-11 w-full rounded-full border border-stone-200 bg-white px-5 text-sm text-stone-500 placeholder:text-stone-400 focus:outline-none"
                />
              </div>

              <div className="rounded-2xl bg-neutral-900 px-6 py-6 text-amber-50 shadow-xl">
                <h2 className="montserrat max-w-xs text-2xl font-semibold leading-tight text-yellow-300">
                  Subscribe to Our Newsletter
                </h2>
                <p className="montserrat mt-4 text-sm leading-6 text-stone-200">
                  Get the latest publishing tips and industry insights delivered
                  to your inbox.
                </p>
                <div className="mt-5 space-y-4">
                  <input
                    type="email"
                    placeholder="Your Email address"
                    className="montserrat h-10 w-full rounded-full border-none bg-white px-5 text-sm text-stone-600 placeholder:text-stone-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="montserrat flex h-11 w-full items-center justify-center rounded-md bg-yellow-300 px-4 text-sm font-semibold text-emerald-700 transition hover:bg-yellow-200"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>

              <div>
                <h3 className="montserrat text-3xl font-semibold leading-none text-emerald-700">
                  Popular Tags
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {popularTags.map((tag, index) => {
                    const isFeatured = index === 0;

                    return (
                      <button
                        key={tag}
                        type="button"
                        className={`montserrat rounded-full border px-4 py-2 text-xs leading-none transition ${
                          isFeatured
                            ? "border-lime-200 bg-lime-100 text-emerald-700"
                            : "border-stone-300 bg-amber-50 text-stone-500"
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-stone-300 pt-7">
                <h3 className="montserrat text-3xl font-semibold leading-none text-emerald-700">
                  Recent Posts
                </h3>
                <div className="mt-5 space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post}
                      href="/blog"
                      className="montserrat block max-w-sm text-sm leading-5 text-stone-500 transition hover:text-emerald-700"
                    >
                      {post}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="space-y-5">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-2xl border border-lime-200 bg-amber-50 transition-colors duration-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="grid items-start gap-5 p-4 sm:p-5 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[18rem_minmax(0,1fr)] xl:gap-6">
                    <div className="relative aspect-[1.44/0.92] w-full overflow-hidden rounded-xl bg-amber-100 lg:max-w-64 xl:max-w-72">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 256px, 288px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex min-w-0 flex-col justify-between overflow-hidden">
                      <div>
                        <h2 className="montserrat max-w-xl text-2xl font-semibold leading-tight text-emerald-700 sm:text-[1.6rem] xl:text-3xl">
                          {post.title}
                        </h2>
                        <p className="montserrat mt-4 max-w-2xl text-sm leading-6 text-stone-600">
                          {post.excerpt}
                        </p>
                        <p className="montserrat mt-3 text-base font-semibold leading-6 text-stone-700">
                          {post.highlight}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="montserrat flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-400">
                          <span className="inline-flex items-center gap-2">
                            <FaRegCalendar className="h-3 w-3" />
                            March 4, 2025
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <LuClock3 className="h-3 w-3" />
                            10 Min Read
                          </span>
                        </div>

                        <Link
                          href="/blog"
                          className="montserrat inline-flex items-center gap-3 text-sm font-medium text-emerald-700 transition hover:text-emerald-800"
                        >
                          Read More
                          <FaArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to page ${index + 1}`}
                    onClick={() => setCurrentPage(index)}
                    className={`h-0.5 w-12 rounded-full transition ${
                      index === currentPage
                        ? "bg-emerald-600"
                        : "bg-stone-300 hover:bg-lime-200"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 self-end">
                <button
                  type="button"
                  aria-label="Previous posts"
                  onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}
                  disabled={currentPage === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-600 text-emerald-600 transition hover:bg-emerald-50 disabled:border-stone-300 disabled:text-stone-300 disabled:hover:bg-transparent"
                >
                  <FaArrowLeft className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  aria-label="Next posts"
                  onClick={() =>
                    setCurrentPage((page) => Math.min(page + 1, totalPages - 1))
                  }
                  disabled={currentPage === totalPages - 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 text-emerald-700 transition hover:bg-yellow-200 disabled:bg-stone-200 disabled:text-stone-400"
                >
                  <FaArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBody;
