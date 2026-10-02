"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const books = [
    {
      src: "/home/Rectangle 4341.svg",
      alt: "The Man of Light book cover",
      fanOffsetX: 180,
      fanOffsetY: 56,
      fanDelay: 0.05,
      className:
        "left-[4px] top-[150px] z-10 -rotate-[22deg] sm:left-[38px] sm:top-[150px] md:left-[92px] md:top-[96px] md:-rotate-[18deg] lg:left-[70px] lg:top-[115px] lg:-rotate-[19deg]",
    },
    {
      src: "/home/Rectangle 4342.svg",
      alt: "Faith Over Feelings book cover",
      fanOffsetX: 82,
      fanOffsetY: 26,
      fanDelay: 0.12,
      className:
        "left-[82px] top-[88px] z-20 -rotate-[6deg] sm:left-[146px] sm:top-[56px] md:left-[255px] md:top-[14px] md:-rotate-[5deg] lg:left-[315px] lg:top-[22px] lg:-rotate-[6deg]",
    },
    {
      src: "/home/Rectangle 4343.svg",
      alt: "Still I Rise book cover",
      fanOffsetX: -82,
      fanOffsetY: 26,
      fanDelay: 0.2,
      className:
        "left-[164px] top-[78px] z-30 rotate-[7deg] sm:left-[250px] sm:top-[50px] md:left-[430px] md:top-[20px] md:rotate-[6deg] lg:left-[560px] lg:top-[28px] lg:rotate-[7deg]",
    },
    {
      src: "/home/Rectangle 4344.svg",
      alt: "The Book of Veolding Integration cover",
      fanOffsetX: -180,
      fanOffsetY: 56,
      fanDelay: 0.28,
      className:
        "left-[230px] top-[144px] z-10 rotate-[22deg] sm:left-[350px] sm:top-[146px] md:left-[576px] md:top-[90px] md:rotate-[18deg] lg:left-[810px] lg:top-[110px] lg:rotate-[20deg]",
    },
  ] as const;
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative flex flex-col items-center overflow-hidden bg-[#F7F1D7] px-4 pb-4 pt-24 sm:px-6 sm:pb-4 sm:pt-26 lg:px-8 lg:pb-4 lg:pt-20">
        <BackgroundStars />

        <div className="relative z-10 mx-auto flex w-full max-w-full flex-col items-center">
          <h2 className="goneva mt-4 max-w-5xl text-center text-[2rem] leading-tight text-[#018752] sm:mt-6 sm:text-4xl md:text-5xl lg:mt-10 lg:text-6xl">
            Publish Your Book in Australia With a{" "}
            <br className="hidden md:block" />
            Team That Handles the Complete Process
          </h2>

          <div className="mt-10 w-full lg:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-6 sm:gap-5 sm:px-2">
              {books.map((book, index) => (
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

          <div className="mx-auto mb-16 hidden w-full overflow-x-clip lg:block">
            <div className="relative mx-auto h-[560px] w-full max-w-[1280px] xl:h-[680px] 2xl:h-[760px]">
              {books.map((book, index) => (
                <m.div
                  key={index}
                  className={`absolute w-[260px] origin-bottom transform xl:w-[320px] 2xl:w-[370px] ${book.className}`}
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

          <p className="max-w-6xl text-center text-base leading-relaxed text-[#1A3C34] opacity-90 sm:text-lg md:text-xl">
            Our self publishing services cover ghostwriting, professional book
            editing and proofreading, custom book cover design, interior
            formatting, ISBN registration, Amazon A+ content optimisation,
            global distribution across 40+ platforms, and complete audiobook
            production. Now, let Crux Publishing House take the hassle out of
            publishing
          </p>
        </div>
      </section>
    </LazyMotion>
  );
};

// Helper component for the background star icons
const BackgroundStars = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden text-[#018752]">
    <Star className="top-10 left-[10%] w-12 h-12 opacity-20" />
    <Star className="top-[40%] left-[5%] w-8 h-8 opacity-15" />
    <Star className="bottom-20 left-[12%] w-14 h-14 opacity-20" />
    <Star className="top-20 right-[15%] w-16 h-16 opacity-25" />
    <Star className="top-[50%] right-[8%] w-10 h-10 opacity-15" />
    <Star className="bottom-32 right-[12%] w-12 h-12 opacity-20" />
    <Burst className="left-[18%] top-24 h-14 w-14 opacity-20 md:h-16 md:w-16" />
    <Burst className="right-[10%] top-[34%] h-10 w-10 opacity-15 md:h-12 md:w-12" />
    <Burst className="bottom-24 left-[8%] h-12 w-12 opacity-20 md:h-14 md:w-14" />
    <Burst className="bottom-16 right-[18%] h-16 w-16 opacity-20 md:h-20 md:w-20" />
  </div>
);

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`absolute fill-[#1A3C34] ${className}`}>
    <path d="M12 0l2.5 8.5h8.5l-7 5.5 2.5 8.5-6.5-5-6.5 5 2.5-8.5-7-5.5h8.5z" />
  </svg>
);

const Burst = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 81 81"
    className={`absolute fill-[#018752] ${className}`}
  >
    <path d="M58.3803 81C52.3484 75.2538 46.3165 69.618 40.3923 63.8718C34.3604 69.5075 28.4361 75.1432 22.4042 81C23.0505 72.4911 23.5891 64.2033 24.2354 55.9154C16.1569 54.6999 8.18617 53.3738 0 52.1582C6.78591 47.4065 13.5718 42.6548 20.25 37.9031C16.1569 30.6098 12.1715 23.427 7.97073 16.0232C15.8338 18.4543 23.5891 20.9959 31.4521 23.427C34.4681 15.6917 37.3763 7.95635 40.5 0C43.5159 7.84584 46.5319 15.6917 49.5479 23.427C57.3032 20.9959 65.0585 18.5648 73.0293 16.0232C68.9362 23.427 64.8431 30.6098 60.75 37.9031C67.5359 42.6548 74.2141 47.296 81 52.1582C72.8138 53.4843 64.8431 54.6999 56.7646 55.9154C57.1955 64.2033 57.734 72.4911 58.3803 81Z" />
  </svg>
);

export default Hero;
