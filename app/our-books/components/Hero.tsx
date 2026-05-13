"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "motion/react";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const books = [
    {
      src: "/our-books/book1.webp", // Replace with your actual file path
      rotate: "-rotate-[15deg]",
      translateY: "translate-y-8",
      zIndex: "z-10",
      fanOffsetX: 140,
      fanOffsetY: 32,
      fanDelay: 0.04,
    },
    {
      src: "/our-books/book2.webp",
      rotate: "-rotate-[6deg]",
      translateY: "translate-y-2",
      zIndex: "z-20",
      fanOffsetX: 64,
      fanOffsetY: 10,
      fanDelay: 0.11,
    },
    {
      src: "/our-books/book3.webp",
      rotate: "rotate-[2deg]",
      translateY: "translate-y-0",
      zIndex: "z-30",
      fanOffsetX: -48,
      fanOffsetY: 8,
      fanDelay: 0.18,
    },
    {
      src: "/our-books/book4.webp",
      rotate: "rotate-[12deg]",
      translateY: "translate-y-8",
      zIndex: "z-40",
      fanOffsetX: -132,
      fanOffsetY: 32,
      fanDelay: 0.25,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % books.length);
    }, 3200);

    return () => {
      window.clearInterval(interval);
    };
  }, [books.length]);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative flex flex-col items-center overflow-hidden bg-[#F7F1D7] px-4 pb-4 pt-24 sm:px-6 sm:pb-4 sm:pt-26 lg:px-8 lg:pb-4 lg:pt-20">
        <BackgroundStars />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
          <h2 className="goneva mt-4 max-w-5xl text-center text-[2rem] leading-tight text-[#018752] sm:mt-6 sm:text-4xl md:text-5xl lg:mt-10 lg:text-6xl">
            Publish Your Book in Australia With a <br className="hidden md:block" />
            Team That Handles the Complete Process
          </h2>

          <div className="mt-10 w-full lg:hidden">
            <div className="relative mx-auto h-[320px] max-w-sm overflow-hidden sm:h-[380px] sm:max-w-xl">
              {books.map((book, index) => {
                const isActive = index === activeIndex;
                const isPrevious = index === (activeIndex - 1 + books.length) % books.length;
                const isNext = index === (activeIndex + 1) % books.length;

                return (
                  <m.div
                    key={`mobile-${index}`}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 24, scale: 0.9 }
                    }
                    animate={{
                      opacity: isActive ? 1 : isPrevious || isNext ? 0.7 : 0,
                      scale: isActive ? 1 : isPrevious || isNext ? 0.9 : 0.75,
                      x: isActive ? "-50%" : isPrevious ? "-95%" : isNext ? "-5%" : "-50%",
                      y: "-50%",
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0.2 : 0.55,
                      delay: prefersReducedMotion ? 0 : index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`absolute left-1/2 top-1/2 w-[190px] rounded-sm shadow-2xl sm:w-[220px] ${
                      isActive
                        ? "z-30"
                        : isPrevious || isNext
                          ? "z-20"
                          : "z-10"
                    }`}
                  >
                    <div className="relative h-[260px] w-full sm:h-[320px]">
                      <Image
                        src={book.src}
                        alt={`Book cover ${index + 1}`}
                        fill
                        className="rounded-sm object-cover"
                      />
                    </div>
                  </m.div>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {books.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  aria-label={`Show book ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-[#018752]" : "w-2.5 bg-[#018752]/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mb-16 hidden w-full items-center justify-center px-4 lg:flex lg:h-[520px] xl:h-[560px]">
            <div className="flex -space-x-12 xl:-space-x-20">
              {books.map((book, index) => (
                <m.div
                  key={index}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: book.fanOffsetX,
                          y: book.fanOffsetY,
                          scale: 0.82,
                          rotate: 0,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.24 : 0.85,
                    delay: prefersReducedMotion ? 0 : book.fanDelay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative h-[360px] w-[240px] shadow-2xl transition-transform duration-300 hover:scale-105 xl:h-[420px] xl:w-[290px] ${book.rotate} ${book.translateY} ${book.zIndex}`}
                >
                  <Image
                    src={book.src}
                    alt={`Book cover ${index + 1}`}
                    fill
                    className="rounded-sm object-cover"
                  />
                </m.div>
              ))}
            </div>
          </div>

          <p className="max-w-6xl text-center text-base leading-relaxed text-[#1A3C34] opacity-90 sm:text-lg md:text-xl">
            Our self publishing services cover ghostwriting, professional book editing and proofreading,
            custom book cover design, interior formatting, ISBN registration, Amazon A+ content optimisation,
            global distribution across 40+ platforms, and complete audiobook production.
            Now, let Southern Cross take the hassle out of publishing
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
  <svg 
    viewBox="0 0 24 24" 
    className={`absolute fill-[#1A3C34] ${className}`}
  >
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
