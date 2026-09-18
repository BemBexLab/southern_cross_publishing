import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const descriptionParagraphs = [
  "When you're planning to publish a book, one of the first questions you'll face is: how much will editing cost? The answer varies based on several factors, including the type of editing, word count, the editor's experience, and the complexity of the project. In this guide, we'll break down the costs of professional book editing services in simple terms.",
  "We'll cover the price per word for book editing, the cost of developmental editing, and how much copy editing typically costs.",
];

const BlogHero = () => {
  return (
    <section className="bg-[#f7f1d7] px-4 pb-10 pt-36 sm:px-6 sm:pb-12 sm:pt-40 lg:px-8 lg:pb-14 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="goneva text-4xl leading-none text-[#018752] sm:text-5xl lg:text-6xl">
            Our Blog
          </h1>
          <p className="dm-sans mx-auto mt-2 max-w-3xl text-base leading-relaxed text-black sm:mt-3 sm:text-lg sm:leading-snug">
            Insights, tips, and resources for aspiring and established authors.
            Discover the latest in publishing, marketing, and storytelling.
          </p>
        </div>

        {/* Blog Card */}
        <div className="mx-auto mt-12 overflow-hidden rounded-3xl bg-[#018752] sm:mt-16 lg:mt-20">
          <div className="grid items-stretch xl:grid-cols-[minmax(0,3fr)_minmax(280px,2fr)] xl:min-h-[300px]">
            <div className="px-5 pb-0 pt-6 text-[#f7f1d7] sm:px-6 sm:pt-7 md:px-8 md:pt-8 xl:col-start-1 xl:row-start-1 xl:px-10 xl:pb-0">
              <h2 className="goneva max-w-4xl text-2xl leading-tight sm:text-3xl md:text-4xl xl:text-5xl">
                Pricing for Professional Book Editing Services (2026 Guide)
              </h2>
            </div>

            {/* Right: Illustration */}
            <div className="border-y border-white/10 xl:col-start-2 xl:row-span-3 xl:row-start-1 xl:border-l xl:border-y-0 xl:border-white/10 xl:flex xl:items-stretch xl:justify-end">
              <div className="relative mx-auto aspect-[1.2/1] w-full max-w-[420px] px-5 py-3 sm:max-w-[520px] sm:px-6 md:aspect-[1.45/1] md:max-w-[620px] md:px-8 xl:m-0 xl:flex xl:h-full xl:w-auto xl:max-w-none xl:flex-1 xl:items-end xl:justify-end xl:px-0 xl:py-0">
                <Image
                  src="/blog/Group 1000001755.svg"
                  alt="Book editing illustration"
                  width={400}
                  height={260}
                  priority
                  className="h-full w-auto object-contain object-bottom"
                />
              </div>
            </div>

            <div className="px-5 pt-4 text-[#f7f1d7] sm:px-6 md:px-8 xl:col-start-1 xl:row-start-2 xl:px-10 xl:pt-4">
              <div className="dm-sans max-w-3xl space-y-2 text-sm leading-relaxed text-[#f1ead2] sm:text-[15px] md:space-y-3 md:text-base xl:pr-4">
                {descriptionParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="px-5 pb-6 pt-5 sm:px-6 sm:pb-7 md:px-8 md:pb-8 xl:col-start-1 xl:row-start-3 xl:px-10 xl:pt-5">
              <Link
                href="/blog"
                className="dm-sans inline-flex min-h-10 w-full items-center justify-center gap-2 rounded bg-[#FDD118] px-4 text-sm font-bold text-[#018752] transition hover:bg-[#ffd23c] sm:w-fit sm:px-5"
              >
                Read More
                <FaArrowRight className="h-3.5 w-3.5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
