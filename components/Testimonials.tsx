"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Melbourne, VIC, Australia",
    body: "The audiobook production absolutely exceeded my expectations. The narration was professional, the sound quality was outstanding, and it genuinely sounds like something you would hear on Audible alongside titles from major publishers. The team delivered exactly what I was hoping for, and I couldn’t be happier with the final result.",
  },
  {
    name: "Sarah Williams",
    location: "Sydney, NSW, Australia",
    body: "I approached the team with nothing more than a half-finished manuscript saved in a Word document. They helped transform my ideas into a professionally published book that I’m incredibly proud of. The editing process was detailed and thoughtful while still preserving my personal writing style and voice, which was extremely important to me.",
  },
  {
    name: "Daniel Harrison",
    location: "Brisbane, QLD, Australia",
    body: "The team managed every aspect of my publishing journey, from cover design and formatting to Amazon setup and global distribution. My book is now available across multiple platforms, and I never had to worry about the technical side of publishing. Their guidance made the entire process simple and stress-free.",
  },
  {
    name: "Emma Collins",
    location: "Perth, WA, Australia",
    body: "As a first-time author, I had no idea where to begin. The publishing team walked me through every stage, from refining my manuscript to launching my book professionally. Their attention to detail and communication throughout the process gave me complete confidence.",
  },
  {
    name: "Andrew Mitchell",
    location: "Adelaide, SA, Australia",
    body: "From the initial consultation to the final book launch, the experience was seamless. The design quality, publishing support, and marketing guidance helped bring my story to life in a way I never imagined possible.",
  },
  {
    name: "Margaret Ronald",
    location: "Melbourne, Australia",
    body: "I came to Crux Publishing House with nothing more than an unfinished manuscript sitting in a Word document. The team helped transform my ideas into a professionally published book that I am genuinely proud of. Their editors were incredibly thorough while still preserving my unique voice, which was one of the most important things to me as an author.",
  },
  {
    name: "James Tucker",
    location: "Sydney, Australia",
    body: "The Crux Publishing House team made the entire publishing process simple and stress-free. From cover design and formatting to Amazon setup and global distribution, they handled every technical detail with professionalism. My book is now available across multiple platforms, and I never felt overwhelmed trying to figure everything out myself.",
  },
  {
    name: "Sandra Chandler",
    location: "Brisbane, Australia",
    body: "I was nervous about trusting someone else with my personal story, but the ghostwriting process with Crux Publishing House felt like a genuine collaboration from the beginning. They listened carefully, understood my vision, and kept me involved throughout every chapter. The drafts reflected my ideas beautifully, and the final result exceeded my expectations.",
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

  const visibleTestimonials = [
    testimonials[(activeIndex - 1 + totalTestimonials) % totalTestimonials],
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % totalTestimonials],
  ];

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
      <div className="mx-auto max-w-[1480px]">
        <div className="mx-auto max-w-[1040px] text-center">
          <p className="montserrat text-[1.35rem] font-semibold italic text-[#2d2d2d] sm:text-[1.55rem]">
            What our authors say
          </p>
          <h2 className="goneva mt-3 text-[2rem] leading-none text-[#078c52] sm:text-[2.55rem] lg:text-[3rem]">
            Real stories from real Australian authors
          </h2>
          <p className="montserrat mx-auto mt-4 max-w-[880px] text-[0.95rem] leading-[1.25] text-[#4e4b43] sm:text-[1.02rem]">
          </p>
        </div>

        <div
          className={`mt-12 flex flex-wrap justify-center gap-5 transition-all duration-200 ease-out sm:mt-14 sm:gap-6 lg:mt-16 lg:gap-8 ${motionClass}`}
        >
          {visibleTestimonials.map((testimonial, index) => {
            const isActiveCard = index === 1;
            const offsetClass = isActiveCard
              ? "lg:translate-y-[28px] xl:translate-y-[34px]"
              : "translate-y-0";
            const cardClass = isActiveCard
              ? "border-[#f5c842] shadow-[0_20px_55px_rgba(217,196,119,0.3)]"
              : "border-transparent shadow-[0_14px_45px_rgba(217,196,119,0.18)]";

            return (
              <article
                key={`${testimonial.name}-${index}`}
                data-testimonial-card
                className={`flex w-full flex-col rounded-[10px] border bg-white px-5 py-[22px] transition-all duration-300 sm:max-w-[420px] sm:px-6 sm:py-6 md:w-[calc(50%-12px)] md:max-w-[430px] xl:min-h-[206px] xl:w-[380px] xl:max-w-[380px] ${offsetClass} ${cardClass}`}
              >
                <StarRow />

                <p className="montserrat mt-8 max-w-[320px] text-[0.86rem] leading-[1.45] text-[#7b7a78] sm:max-w-[340px] sm:text-[0.92rem]">
                  {testimonial.body}
                </p>

                <div className="mt-auto pt-8">
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
