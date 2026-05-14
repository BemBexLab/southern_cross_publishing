"use client";

import Image from "next/image";
import EdgeKart from "@/public/home/EdgeKart.webp";
import Harvest from "@/public/home/Harvest.webp";
import InfinityParker from "@/public/home/InfinityParker.webp";
import OmegaMillion from "@/public/home/OmegaMillion.webp";
import PastelAndCo from "@/public/home/Pastel&Co..webp";

const logos = [
  OmegaMillion,
  Harvest,
  EdgeKart,
  PastelAndCo,
  InfinityParker,
];

const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden bg-[#F7F1D7]">
      <div className="relative flex h-28 items-center overflow-hidden px-3 sm:h-32 sm:px-4 md:h-36 md:px-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F7F1D7] to-transparent sm:w-14 md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F7F1D7] to-transparent sm:w-14 md:w-20" />

        <div
          className="flex w-max shrink-0 items-center gap-8 pr-8 will-change-transform sm:gap-10 sm:pr-10 md:gap-12 md:pr-12"
          style={{ animation: "logo-marquee 26s linear infinite" }}
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="relative h-[2.9rem] shrink-0 sm:h-[3.4rem] md:h-[4.2rem] lg:h-[4.6rem]"
              style={{ aspectRatio: `${logo.width} / ${logo.height}` }}
              aria-hidden={index >= logos.length}
            >
              <Image
                src={logo}
                alt={index < logos.length ? "Client logo" : ""}
                fill
                sizes="(max-width: 640px) 34vw, (max-width: 768px) 24vw, (max-width: 1024px) 18vw, 240px"
                className="object-contain"
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
