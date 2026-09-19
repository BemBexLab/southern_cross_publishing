"use client";

import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "motion/react";

const bookImages = [
  {
    src: "/home/Rectangle 7.webp",
    alt: "The Man of Light book cover",
    fanOffsetX: 180,
    fanOffsetY: 56,
    fanDelay: 0.05,
    className:
      "left-[4px] top-[150px] z-10 -rotate-[22deg] sm:left-[38px] sm:top-[150px] md:left-[92px] md:top-[96px] md:-rotate-[18deg] lg:left-[70px] lg:top-[115px] lg:-rotate-[19deg]",
  },
  {
    src: "/home/Rectangle 8.webp",
    alt: "Faith Over Feelings book cover",
    fanOffsetX: 82,
    fanOffsetY: 26,
    fanDelay: 0.12,
    className:
      "left-[82px] top-[88px] z-20 -rotate-[6deg] sm:left-[146px] sm:top-[56px] md:left-[255px] md:top-[14px] md:-rotate-[5deg] lg:left-[315px] lg:top-[22px] lg:-rotate-[6deg]",
  },
  {
    src: "/home/Rectangle 9.webp",
    alt: "Still I Rise book cover",
    fanOffsetX: -82,
    fanOffsetY: 26,
    fanDelay: 0.2,
    className:
      "left-[164px] top-[78px] z-30 rotate-[7deg] sm:left-[250px] sm:top-[50px] md:left-[430px] md:top-[20px] md:rotate-[6deg] lg:left-[560px] lg:top-[28px] lg:rotate-[7deg]",
  },
  {
    src: "/home/Rectangle 10.webp",
    alt: "The Book of Veolding Integration cover",
    fanOffsetX: -180,
    fanOffsetY: 56,
    fanDelay: 0.28,
    className:
      "left-[230px] top-[144px] z-10 rotate-[22deg] sm:left-[350px] sm:top-[146px] md:left-[576px] md:top-[90px] md:rotate-[18deg] lg:left-[810px] lg:top-[110px] lg:rotate-[20deg]",
  },
] as const;

const ComprehensivePublishing = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h2 className="goneva mx-auto w-full max-w-[1200px] pb-8 text-center text-[2rem] leading-[1.02] font-medium text-[#018752] sm:pb-10 sm:text-[2.45rem] md:text-[3rem] lg:text-[3.4rem]">
          Comprehensive Publishing Services From Rough Manuscript To The
          Professional Book.
        </h2>

        <div className="mx-auto w-full lg:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-6 sm:gap-5 sm:px-2">
            {bookImages.map((book, index) => (
              <m.div
                key={`${book.src}-slide`}
                className="motion-section min-w-0 shrink-0 snap-center"
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={book.src}
                  width={520}
                  height={780}
                  alt={book.alt}
                  priority={index === 0}
                  quality={100}
                  sizes="(min-width: 640px) 280px, 78vw"
                  className="h-auto w-[78vw] max-w-[240px] rounded-[18px] object-contain sm:w-[260px] sm:max-w-[260px] md:w-[280px] md:max-w-[280px]"
                />
              </m.div>
            ))}
          </div>
        </div>

        <div className="mx-auto hidden w-full overflow-x-clip lg:block">
          <div className="relative mx-auto h-[560px] w-full max-w-[1280px] xl:h-[680px] 2xl:h-[760px]">
            {bookImages.map((book, index) => (
              <m.div
                key={book.src}
                className={`motion-section absolute w-[260px] origin-bottom transform xl:w-[320px] 2xl:w-[370px] ${book.className}`}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: book.fanOffsetX,
                        y: book.fanOffsetY,
                        scale: 0.82,
                      }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: prefersReducedMotion ? 0.24 : 0.85,
                  delay: prefersReducedMotion ? 0 : book.fanDelay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={book.src}
                  width={520}
                  height={780}
                  alt={book.alt}
                  priority={index < 2}
                  quality={100}
                  sizes="(min-width: 1536px) 370px, (min-width: 1280px) 320px, 260px"
                  className="h-auto w-full rounded-[20px]"
                />
              </m.div>
            ))}
          </div>
        </div>

        <div className="dm-sans mx-auto mb-6 max-w-[1600px] space-y-4 text-center text-[1rem] leading-[1.7] text-[#232323] sm:mb-8 sm:text-[1.05rem] md:text-[1.1rem] lg:space-y-5 lg:text-[1.18rem]">
          <p>
            We know that the moment you decide to write a book, something
            shifts; suddenly, the idea that once felt private has now become
            something you want the world to know. That excitement is a real
            one, and it, of course, deserves to be protected.
          </p>
          <p>
            At Crux  Publishing, we have created our complete author publishing services process around keeping that feeling alive, from your very first conversation with us to the day your book lands in a reader's hands.
          </p>
          <p>
            We do a lot more than just publishing books. We make them with
            proper care. Our network of experienced writers, editors,
            illustrators, and publishing specialists works closely with every
            author we work with, because no two stories are the same and no two
            authors need the same kind of support. No matter if you come to us
            with a completed manuscript or a single sentence of an idea, we
            meet you exactly where you are and help you complete the rest of
            the book with you.
          </p>
        </div>

        <h3 className="dm-sans mx-auto w-full max-w-[1500px] px-2 pb-2 text-center text-[1.05rem] font-semibold italic leading-[1.45] text-[#222] sm:px-6 sm:text-[1.2rem] md:text-[1.45rem] lg:text-[1.7rem]">
          Your words are always worth reading. We are just here to make sure the right people find them.
        </h3>
      </section>
    </LazyMotion>
  );
};

export default ComprehensivePublishing;
