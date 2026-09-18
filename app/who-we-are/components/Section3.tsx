"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "motion/react";

type Stat = {
  target: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { target: 1000, suffix: "+", label: "Authors Published" },
  { target: 15, suffix: "+", label: "Genres Covered" },
  { target: 50, suffix: "+", label: "Global Platforms" },
  { target: 100, suffix: "%", label: "Author Owned Right" },
];

function CountUpStat({
  target,
  suffix,
  label,
  start,
}: Stat & { start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    let frame = 0;
    let startTime: number | null = null;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [start, target]);

  return (
    <div className="rounded-3xl bg-[#1F1F1F1A] p-14 text-center">
      <span className="dm-sans block text-5xl font-black text-[#018752]">
        {count}
        {suffix}
      </span>
      <span className="dm-sans mt-3 block text-sm font-semibold uppercase tracking-wide text-[#1F1F1F]">
        {label}
      </span>
    </div>
  );
}

export default function Section3() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#F7F1D7] px-6 py-16 md:px-12 lg:px-24"
    >
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2.5rem] shadow-sm">
          <Image
            src="/who-we-are/Rectangle (1).webp"
            alt="Audiobook mockups on landscape"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="goneva mb-2 text-6xl text-[#018752]">Our Mission</h2>

          <p className="dm-sans mb-6 max-w-4xl text-lg leading-relaxed text-[#1F1F1F]">
            To give every author, regardless of experience or background,
            access to the professional publishing process that their story
            deserves, from first word to final reader.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {stats.map((stat) => (
              <CountUpStat key={stat.label} {...stat} start={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
