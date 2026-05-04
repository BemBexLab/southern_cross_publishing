"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  "/home/OmegaMillion.png",
  "/home/Harvest.png",
  "/home/EdgeKart.png",
  "/home/Pastel&Co..png",
  "/home/InfinityParker.png",
];

const logoItems = [...logos, ...logos];

const LogoSlider = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trackRef.current) {
      return;
    }

    const animation = trackRef.current.animate(
      [
        { transform: "translate3d(0, 0, 0)" },
        { transform: "translate3d(-50%, 0, 0)" },
      ],
      {
        duration: 22000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#F7F1D7]">
      <div className="relative flex h-24 items-center overflow-hidden sm:h-28 md:h-32">
        <div
          ref={trackRef}
          data-logo-slider-track
          className="flex min-w-max items-center gap-8 pr-8 will-change-transform sm:gap-10 sm:pr-10 md:gap-12 md:pr-12"
        >
          {logoItems.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-[72px] w-24 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-95 sm:h-[88px] sm:w-32 md:h-[110px] md:w-48 lg:h-[126px] lg:w-60"
              aria-hidden={index >= logos.length}
            >
              <Image
                src={logo}
                alt={index < logos.length ? "Client logo" : ""}
                width={150}
                height={164}
                className="h-auto w-auto max-h-full max-w-full object-contain filter brightness-150 sm:brightness-200 md:brightness-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
