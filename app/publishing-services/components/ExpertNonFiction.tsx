"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export interface ExpertNonFictionProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  overlayClassName?: string;
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  ctaClassName?: string;
  parallaxStrength?: number;
}

const ExpertNonFiction: React.FC<ExpertNonFictionProps> = ({
  eyebrow = "Expert Non-Fiction Book Writing Services",

  title,

  description,

  ctaText = "Get a Quote",

  ctaHref = "/contact",

  backgroundImage =
    "/publishing-services/aab22737c0c341637148fb92adb4cfc2ad672097.webp",

  overlayClassName = "absolute inset-0 bg-black/80",

  sectionClassName =
    "relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden py-14 sm:py-16 md:py-20 lg:min-h-screen lg:py-24 xl:py-28",

  containerClassName =
    "relative z-10 mx-auto w-full max-w-[1600px] px-4 text-center sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16",

  titleClassName =
    "goneva mx-auto max-w-[1200px] text-[30px] leading-[1.15] text-[#F7F1D7] sm:text-4xl md:text-5xl lg:text-[52px] xl:text-6xl 2xl:text-[68px]",

  descriptionClassName =
    "dm-sans mx-auto mt-5 mb-7 max-w-[1200px] text-sm leading-6 text-[#F7F1D7]/90 sm:mt-6 sm:mb-8 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:text-xl lg:leading-9",

  ctaClassName =
    "group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[#FDD118] px-6 py-3 text-sm font-bold text-[#018752] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eac030] hover:shadow-xl sm:w-auto sm:gap-3 sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4",

  parallaxStrength = -0.12,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      if (!sectionRef.current) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * Disable parallax for reduced-motion users.
       */
      if (reducedMotion) {
        setOffsetY(0);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();

      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;

      const distanceFromCenter = sectionCenter - viewportCenter;

      /*
       * Use less movement on phones/tablets.
       */
      let responsiveStrength = parallaxStrength;

      if (viewportWidth < 640) {
        responsiveStrength = parallaxStrength * 0.25;
      } else if (viewportWidth < 1024) {
        responsiveStrength = parallaxStrength * 0.55;
      }

      /*
       * Prevent extreme background movement on
       * very tall sections or small screens.
       */
      const calculatedOffset =
        distanceFromCenter * responsiveStrength;

      const maxOffset =
        viewportWidth < 640
          ? 35
          : viewportWidth < 1024
          ? 60
          : 110;

      const clampedOffset = Math.max(
        -maxOffset,
        Math.min(maxOffset, calculatedOffset)
      );

      setOffsetY(clampedOffset);
    };

    const onScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [parallaxStrength]);

  return (
    <section
      ref={sectionRef}
      className={sectionClassName}
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          z-0
          scale-[1.08]
          will-change-transform
          sm:scale-[1.1]
          lg:scale-[1.12]
        "
        style={{
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)`,
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        <div className={overlayClassName} />
      </div>

      {/* Content */}
      <div className={containerClassName}>
        {/* Eyebrow */}
        <p
          className="
            dm-sans
            mx-auto
            mb-3
            max-w-[900px]
            text-xs
            font-medium
            uppercase
            leading-5
            tracking-[0.15em]
            text-[#FDD118]
            sm:mb-4
            sm:text-sm
            sm:tracking-[0.18em]
            md:text-base
            lg:mb-5
            lg:text-lg
            xl:text-xl
          "
        >
          {eyebrow}
        </p>

        {/* Title */}
        <h2 className={titleClassName}>
          {title}
        </h2>

        {/* Description */}
        <p className={descriptionClassName}>
          {description}
        </p>

        {/* CTA */}
        <div className="mx-auto flex w-full max-w-[420px] justify-center sm:max-w-none">
          <a
            href={ctaHref}
            className={ctaClassName}
          >
            <span>{ctaText}</span>

            <FaArrowRight
              className="
                shrink-0
                text-base
                transition-transform
                duration-300
                group-hover:translate-x-1
                sm:text-lg
                md:text-xl
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertNonFiction;