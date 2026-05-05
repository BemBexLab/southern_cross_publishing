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
  backgroundImage = "/publishing-services/aab22737c0c341637148fb92adb4cfc2ad672097.webp",
  overlayClassName = "absolute inset-0 bg-black/80",
  sectionClassName = "relative flex h-screen w-full items-center justify-center overflow-hidden py-20 lg:py-10",
  containerClassName = "container relative z-10 mx-auto px-6 text-center",
  titleClassName = "goneva text-3xl leading-[1.2] text-[#F7F1D7] md:text-3xl lg:text-5xl",
  descriptionClassName = "mx-auto mb-8 max-w-7xl text-lg leading-relaxed text-[#F7F1D7] md:text-xl",
  ctaClassName = "group flex items-center gap-3 rounded-md bg-[#f5ce47] px-10 py-4 font-bold text-[#018752] shadow-lg transition-all hover:bg-[#eac030]",
  parallaxStrength = -0.12,
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

      setOffsetY(distanceFromCenter * parallaxStrength);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);

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
      <div
        className="absolute inset-0 z-0 scale-[1.12] will-change-transform"
        style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)` }}
      >
        <img
          src={backgroundImage}
          alt="Writing background"
          className="h-full w-full object-cover"
        />
        <div className={overlayClassName} />
      </div>

      <div className={containerClassName}>
        <p className="mb-6 text-xl font-medium uppercase tracking-widest text-[#f5ce47] md:text-2xl">
          {eyebrow}
        </p>

        <h2 className={titleClassName}>{title}</h2>

        <p className={descriptionClassName}>{description}</p>

        <div className="flex justify-center">
          <a href={ctaHref} className={ctaClassName}>
            <span className="text-lg">{ctaText}</span>
            <FaArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertNonFiction;
