"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    name: "Elizabeth",
    location: "Chicago",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    name: "Catherine",
    location: "New York",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    name: "Victoria",
    location: "Washington, DC",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

const StarRow = () => (
  <div className="flex items-center gap-1 text-[#f7c51d]">
    {Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[15px] w-[15px]"
        fill="currentColor"
      >
        <path d="M10 1.6l2.45 4.97 5.49.8-3.97 3.87.94 5.47L10 14.13 5.09 16.7l.94-5.47L2.06 7.37l5.49-.8L10 1.6z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [phase, setPhase] = useState<"idle" | "exiting" | "entering">("idle");
  const totalTestimonials = testimonials.length;
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const orderedTestimonials = testimonials.map(
    (_, index) => testimonials[(activeIndex + index) % totalTestimonials]
  );

  useEffect(() => {
    if (phase !== "exiting" || pendingIndex === null) return;

    exitTimeoutRef.current = setTimeout(() => {
      setActiveIndex(pendingIndex);
      setPhase("entering");
    }, 180);

    return () => {
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
    };
  }, [pendingIndex, phase]);

  useEffect(() => {
    if (phase !== "entering") return;

    enterTimeoutRef.current = setTimeout(() => {
      setPhase("idle");
      setPendingIndex(null);
    }, 180);

    return () => {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    };
  }, [phase]);

  const queueTransition = (nextIndex: number, nextDirection: "left" | "right") => {
    if (phase !== "idle") return;
    setDirection(nextDirection);
    setPendingIndex(nextIndex);
    setPhase("exiting");
  };

  const handlePrevious = () => {
    queueTransition(
      (activeIndex - 1 + totalTestimonials) % totalTestimonials,
      "left"
    );
  };

  const handleNext = () => {
    queueTransition((activeIndex + 1) % totalTestimonials, "right");
  };

  const motionClass =
    phase === "idle"
      ? "translate-x-0 opacity-100"
      : phase === "exiting"
        ? direction === "right"
          ? "-translate-x-6 opacity-0"
          : "translate-x-6 opacity-0"
        : direction === "right"
          ? "translate-x-6 opacity-0"
          : "-translate-x-6 opacity-0";

  return (
    <section className="bg-[#f7f0d7] px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="montserrat text-[1.35rem] font-semibold italic text-[#2d2d2d] sm:text-[1.55rem]">
            Read Testimonials
          </p>
          <h2 className="goneva mt-3 text-[2rem] leading-none text-[#078c52] sm:text-[2.55rem] lg:text-[3rem]">
            From Our Happy Customers
          </h2>
          <p className="montserrat mx-auto mt-4 max-w-[880px] text-[0.95rem] leading-[1.25] text-[#4e4b43] sm:text-[1.02rem]">
            Lorem ipsum dolor sit amet consectetur. Congue eget auctor turpis
            pharetra. Odio consectetur eget scelerisque sodales. Aliquam
            ullamcorper elementum donec mi semper justo. Enim cursus pulvinar
            elementum id mauris.
          </p>
        </div>

        <div
          className={`mt-12 flex flex-wrap justify-center gap-5 transition-all duration-200 ease-out sm:mt-14 sm:gap-6 lg:mt-16 lg:gap-8 ${motionClass}`}
        >
          {orderedTestimonials.map((testimonial, index) => {
            const offsetClass =
              index === 1 ? "xl:translate-y-[34px]" : "xl:translate-y-0";

            return (
              <article
                key={testimonial.name}
                data-testimonial-card
                className={`w-full rounded-[10px] bg-white px-5 py-[22px] shadow-[0_14px_45px_rgba(217,196,119,0.18)] transition-transform duration-300 sm:max-w-[370px] sm:px-6 sm:py-6 md:w-[calc(50%-12px)] md:max-w-[360px] xl:min-h-[206px] xl:w-[325px] xl:max-w-[325px] ${offsetClass}`}
              >
                <StarRow />

                <p className="montserrat mt-8 max-w-[270px] text-[0.86rem] leading-[1.45] text-[#7b7a78] sm:text-[0.92rem]">
                  {testimonial.body}
                </p>

                <div className="mt-8">
                  <h3 className="montserrat text-[0.95rem] font-bold text-[#111111]">
                    {testimonial.name}
                  </h3>
                  <p className="montserrat mt-[2px] text-[0.62rem] text-[#7d7a74]">
                    {testimonial.location}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 sm:mt-16 lg:mt-[108px]">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={handlePrevious}
            disabled={phase !== "idle"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#15a56a] text-[#15a56a] transition hover:bg-[#15a56a] hover:text-[#f7f0d7] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaArrowLeft />
          </button>

          <div className="flex items-center gap-[8px] sm:gap-[10px]">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-[2px] w-6 rounded-full ${
                  index === activeIndex ? "bg-[#0d9b68]" : "bg-[#d9dfc6]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={handleNext}
            disabled={phase !== "idle"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7c51d] text-[#0d9b68] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
