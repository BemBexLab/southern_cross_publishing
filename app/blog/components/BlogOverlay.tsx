import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const BlogOverlay = () => {
  return (
    <section className="relative z-10 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
      <div className="mx-auto -mb-32 max-w-6xl overflow-hidden rounded-3xl bg-[#018752] shadow-[0_22px_45px_rgba(0,0,0,0.18)] sm:-mb-36 lg:-mb-44">
        <div className="grid items-center gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,1fr)] lg:gap-10 lg:px-12 lg:py-0 xl:px-14">
          <div className="max-w-2xl">
            <h2 className="goneva text-3xl leading-tight text-[#f7f1d7] sm:text-4xl lg:text-5xl">
              Ready to Publish Your Book?
            </h2>
            <p className="montserrat mt-5 max-w-3xl text-sm leading-6 text-[#dcebdc] sm:text-base sm:leading-7">
              Lorem ipsum dolor sit amet consectetur. Amet et tellus diam ut.
              Duis vitae morbi amet non a tellus gravida egestas amet. Non
              varius rhoncus ipsum.
            </p>

            <Link
              href="/contact"
              className="montserrat mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#FDD118] px-6 text-base font-semibold text-[#018752] transition hover:bg-[#ffd23c] sm:px-7"
            >
              Get started today
              <FaArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="relative aspect-[1.05/0.82] w-full lg:min-h-[320px]">
              <Image
                src="/blog/Illustration for Web-01 1.svg"
                alt="Illustration of a person reading while sitting in a chair"
                fill
                sizes="(max-width: 639px) 88vw, (max-width: 1023px) 70vw, 32vw"
                className="object-contain object-center lg:object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOverlay;
