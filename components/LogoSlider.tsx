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
    <section
      aria-label="Client logos"
      className="w-full overflow-hidden bg-[#F7F1D7]"
    >
      <div className="relative flex h-[clamp(5.5rem,18vw,9rem)] items-center overflow-hidden px-2 sm:px-4 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#F7F1D7] to-transparent sm:w-12 md:w-16 lg:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#F7F1D7] to-transparent sm:w-12 md:w-16 lg:w-24" />

        <div
          className="flex w-max shrink-0 items-center gap-[clamp(1.5rem,5vw,3rem)] pr-[clamp(1.5rem,5vw,3rem)] will-change-transform"
          style={{ animation: "logo-marquee 26s linear infinite" }}
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="relative h-[clamp(2.5rem,9vw,4.5rem)] w-[clamp(8rem,34vw,15rem)] shrink-0"
              aria-hidden={index >= logos.length}
            >
              <Image
                src={logo}
                alt={index < logos.length ? "Client logo" : ""}
                fill
                sizes="(max-width: 640px) 34vw, 240px"
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

          @media (prefers-reduced-motion: reduce) {
            div {
              animation-play-state: paused !important;
            }
          }
        }
      `}</style>
    </section>
  );
}
