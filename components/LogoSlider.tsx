"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  "/home/OmegaMillion.png",
  "/home/Harvest.png",
  "/home/EdgeKart.png",
  "/home/Pastel&Co..png",
  "/home/InfinityParker.png",
];

const LogoSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const updateSlider = () => {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      const setWidth = setRef.current?.scrollWidth ?? 0;

      if (!containerWidth || !setWidth) return;

      setDistance(setWidth);
      setCopies(Math.max(2, Math.ceil(containerWidth / setWidth) + 1));
    };

    updateSlider();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateSlider)
        : null;

    if (containerRef.current) resizeObserver?.observe(containerRef.current);
    if (setRef.current) resizeObserver?.observe(setRef.current);

    window.addEventListener("resize", updateSlider);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateSlider);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative flex h-[88px] w-full items-center overflow-hidden sm:h-[104px] md:h-[123px]"
      >
        <div
          className="flex w-max items-center gap-8 will-change-transform"
          style={{
            animation: distance
              ? "logo-slider-marquee 22s linear infinite"
              : undefined,
            ["--logo-slider-distance" as string]: `-${distance}px`,
          }}
        >
          {Array.from({ length: copies }).map((_, groupIndex) => (
            <div
              key={groupIndex}
              ref={groupIndex === 0 ? setRef : undefined}
              className="flex shrink-0 items-center gap-8"
              aria-hidden={groupIndex > 0}
            >
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${groupIndex}-${logoIndex}`}
                  className="flex h-[72px] w-[96px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-95 sm:h-[88px] sm:w-[132px] md:h-[110px] md:w-[190px] lg:h-[126px] lg:w-[250px]"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={150}
                    height={164}
                    className="h-auto w-auto max-h-full max-w-full object-contain filter brightness-150 sm:brightness-200 md:brightness-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes logo-slider-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--logo-slider-distance));
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
