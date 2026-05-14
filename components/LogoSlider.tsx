"use client";

import Image from "next/image";

const logos = [
  "/home/OmegaMillion.webp",
  "/home/Harvest.webp",
  "/home/EdgeKart.webp",
  "/home/Pastel&Co..webp",
  "/home/InfinityParker.webp",
];

const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden bg-[#F7F1D7]">
      <div className="relative flex h-28 items-center overflow-hidden sm:h-32 md:h-36">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F7F1D7] to-transparent sm:w-14 md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F7F1D7] to-transparent sm:w-14 md:w-20" />

        <div
          className="flex w-max shrink-0 items-center gap-6 pr-6 will-change-transform sm:gap-10 sm:pr-10 md:gap-12 md:pr-12"
          style={{ animation: "logo-marquee 26s linear infinite" }}
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-[84px] w-[8.5rem] shrink-0 items-center justify-center sm:h-[96px] sm:w-36 md:h-[116px] md:w-48 lg:h-[126px] lg:w-60"
              aria-hidden={index >= logos.length}
            >
              <Image
                src={logo}
                alt={index < logos.length ? "Client logo" : ""}
                width={240}
                height={80}
                sizes="(max-width: 640px) 136px, (max-width: 768px) 144px, (max-width: 1024px) 192px, 240px"
                className="h-auto w-auto max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes logo-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-25%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
