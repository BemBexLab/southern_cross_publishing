"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
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
    "mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#FDD118] px-5 py-3 text-sm font-bold text-[#018752] shadow-[0_14px_30px_rgba(210,176,49,0.28)] transition-transform active:scale-95 sm:mt-8 sm:px-6 sm:text-base";

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[680px] w-full items-center overflow-hidden sm:min-h-[760px] lg:min-h-[820px]"
    >
      <div
        className="absolute inset-0 z-0 scale-[1.12] will-change-transform"
        style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)` }}
      >
        <img
          src="/ebook-services/Mask group.png"
          alt="E-book writing service background"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1510px] px-4 pt-24 sm:px-6 sm:pt-28 lg:px-[70px] lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.95fr)] lg:gap-8 xl:grid-cols-[minmax(0,0.94fr)_minmax(500px,1fr)]">
          <div className="max-w-[620px] xl:max-w-[7a50px]">
            <h1 className="goneva text-[2.35rem] leading-[1.02] text-[#018752] sm:text-5xl lg:text-[3.85rem] xl:text-[4.1rem]">
              {title}
            </h1>

            <div className="montserrat mt-5 max-w-[510px] space-y-6 text-[0.96rem] font-medium leading-[1.32] text-[#5d5d55] sm:mt-6 sm:text-base lg:mt-7 lg:max-w-[470px] lg:text-[1.02rem]">
              <p>{description}</p>
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

          <div className="relative mx-auto hidden w-full max-w-[610px] justify-self-end lg:block xl:max-w-[700px]">
            <div className="relative aspect-[1.02/0.88] w-full">
              <Image
                src="/ebook-services/Ebook Hero Page-01 1.svg"
                alt="E-book writing service illustration"
                fill
                sizes="(max-width: 1024px) 0px, 44vw"
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
