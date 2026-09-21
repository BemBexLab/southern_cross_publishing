"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";

interface HeroSectionProps {
  bgImage: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  bgImage,
  title,
  description,
  ctaText,
  ctaHref,
  onCtaClick,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;

      const distanceFromCenter = sectionCenter - viewportCenter;

      // Reduce parallax strength on smaller devices
      const parallaxStrength =
        viewportWidth < 640 ? -0.04 : viewportWidth < 1024 ? -0.07 : -0.12;

      // Prevent background from moving too far
      const maxOffset =
        viewportWidth < 640 ? 30 : viewportWidth < 1024 ? 50 : 90;

      const calculatedOffset = distanceFromCenter * parallaxStrength;

      const clampedOffset = Math.max(
        -maxOffset,
        Math.min(maxOffset, calculatedOffset),
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
  }, []);

  const handleCtaAction = () => {
    onCtaClick?.();
  };

  const buttonClasses = `
    inline-flex
    w-full
    sm:w-auto
    items-center
    justify-center
    gap-2
    sm:gap-3
    rounded-lg
    bg-[#FDD118]
    px-4
    py-3
    sm:px-5
    text-[#018752]
    font-bold
    shadow-xl
    transition-all
    duration-300
    hover:bg-[#eac030]
    active:scale-95
  `;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        items-center
        overflow-hidden
        py-20
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          z-0
          scale-[1.08]
          sm:scale-[1.1]
          lg:scale-[1.12]
          will-change-transform
        "
        style={{
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)`,
        }}
      >
        <img
          src={bgImage}
          alt="Hero background"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/30" />
      </div>

      {/* Content */}
      <div
        className="
          container
          relative
          z-10
          mx-auto
          w-full
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        <div
          className="
            w-full
            max-w-[950px]
            2xl:max-w-[1100px]
          "
        >
          {/* Small heading */}
          <p
            className="
              goneva
              text-base
              leading-tight
              text-[#F7F1D7]
              sm:text-lg
              md:text-xl
              lg:text-xl
              xl:text-2xl
              2xl:text-2xl
            "
          >
            Crux Publishing House
          </p>

          {/* Main heading */}
          <h1
            className="
              goneva
              mt-4
              max-w-5xl
              text-[clamp(2.5rem,7vw,5rem)]
              leading-[0.95]
              text-[#F7F1D7]
              sm:mt-6
              md:mt-7
              lg:mt-8
            "
          >
            {title}
          </h1>

          {/* Description */}
          <div
            className="
              dm-sans
              mt-4
              mb-6
              max-w-4xl
              text-sm
              font-light
              leading-relaxed
              text-gray-100
              sm:mt-6
              sm:text-base
              md:mt-7
              md:text-lg
              md:leading-relaxed
              lg:mt-8
              lg:text-lg
              xl:text-xl
              2xl:max-w-5xl
            "
          >
            <p>{description}</p>
          </div>

          {/* CTA */}
          {ctaHref ? (
            <a href={ctaHref} className={buttonClasses}>
              <FiPhoneCall
                className="
                  shrink-0
                  text-xl
                  sm:text-2xl
                "
              />

              <span
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                "
              >
                {ctaText}
              </span>
            </a>
          ) : (
            <button
              type="button"
              onClick={handleCtaAction}
              className={buttonClasses}
            >
              <FiPhoneCall
                className="
                  shrink-0
                  text-xl
                  sm:text-2xl
                "
              />

              <span
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                "
              >
                {ctaText}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
