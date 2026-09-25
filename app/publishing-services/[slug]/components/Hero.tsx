"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

interface HeroProps {
  title: string;
  description: string | React.ReactNode;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  onCtaClick,
  imageSrc,
  imageAlt = "E-book writing service illustration",
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = sectionCenter - viewportCenter;

      setOffsetY(distanceFromCenter * -0.12);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const ctaClassName =
    "mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#FDD118] font-medium px-5 py-3 text-sm text-[#018752] shadow-[0_14px_30px_rgba(210,176,49,0.28)] transition-transform active:scale-95 sm:mt-8 sm:px-6 sm:text-base";

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 scale-[1.12] will-change-transform"
        style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)` }}
      >
        <img
          src="/ebook-services/Mask group.webp"
          alt="E-book writing service background"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-24 xl:px-10">
        <div
          className={`grid items-center gap-8 lg:gap-6 xl:gap-8 ${
            imageSrc ? "lg:grid-cols-2" : "lg:grid-cols-1"
          }`}
        >
          <div className="w-full max-w-none">
            <h1 className="goneva max-w-none text-4xl leading-tight text-[#018752] sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            {imageSrc ? (
              <div className="relative mx-auto mt-6 w-full max-w-xl lg:hidden">
                <div className="relative aspect-[1.02/0.88] w-full">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="100vw"
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
            ) : null}

            <div className="dm-sans mt-6 max-w-none space-y-6 text-lg font-medium leading-relaxed text-[#1F1F1F] lg:mt-7">
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>

            {ctaHref ? (
              <a href={ctaHref} className={ctaClassName}>
                <FiPhoneCall className="text-xl sm:text-2xl" />
                <span>{ctaText}</span>
              </a>
            ) : (
              <button onClick={onCtaClick} className={ctaClassName}>
                <FiPhoneCall className="text-xl sm:text-2xl" />
                <span>{ctaText}</span>
              </button>
            )}
          </div>

          {imageSrc ? (
            <div className="relative hidden w-full max-w-none lg:block">
              <div className="relative aspect-[1.02/0.88] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 0px, 44vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
