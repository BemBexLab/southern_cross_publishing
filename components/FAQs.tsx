"use client";

import React, { useState } from "react";

const faqItems = [
  {
    question:
      "Do I need a finished manuscript to use your book publishing services?",
    answer:
      "Not at all. Most of our authors come to us somewhere in the middle, a rough draft, a scattered set of notes, or just a strong idea they haven't put on paper yet. We work with you from wherever you are right now. If you have a finished manuscript, great. If you have a voice memo and a vision, that works too. We figure out the starting point together on our first call.",
  },
  {
    question: "How long does the full publishing process take?",
    answer:
      "Timelines depend on the stage of your manuscript and the services you need, but we map out the process with you clearly before we begin so you know what to expect at every step.",
  },
  {
    question: "Do I keep ownership of my book after you publish it?",
    answer:
      "Yes. You retain ownership of your work while we support you through editing, design, production, and distribution.",
  },
  {
    question:
      "Will my self published book be available on Amazon and global bookstores?",
    answer:
      "Yes. We help make your book available through major online platforms and broad distribution channels.",
  },
  {
    question:
      "What genres and book types do you publish: fiction, non-fiction, memoirs, and audiobooks?",
    answer:
      "We work across a wide range of categories, including fiction, non-fiction, memoirs, children's books, and audiobook-ready projects.",
  },
];

const cardBaseClass =
  "w-full self-start rounded-[8px] bg-transparent shadow-[0_14px_34px_rgba(205,190,143,0.22)] transition-all duration-200";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const leftColumnItems = [0, 2];
  const rightColumnItems = [1, 3, 4];

  const renderFaqCard = (index: number) => {
    const item = faqItems[index];
    const isOpen = openIndex === index;

    return (
      <article
        key={item.question}
        className={`${cardBaseClass} ${
          isOpen
            ? "min-h-[220px] px-5 py-6 sm:px-7 sm:py-7"
            : "min-h-[88px] px-5 py-5 sm:px-7 sm:py-6"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpenIndex(isOpen ? -1 : index)}
          className="flex w-full items-start gap-[16px] text-left"
          aria-expanded={isOpen}
        >
          <span
            aria-hidden="true"
            className={`mt-[1px] inline-flex h-7 w-7 shrink-0 items-center justify-center text-[1.95rem] leading-none ${
              isOpen ? "text-[#15a56a]" : "text-[#44413b]"
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>

          <span
            className={`montserrat flex-1 text-[1.06rem] font-semibold leading-[1.18] tracking-[-0.01em] sm:text-[1.1rem] ${
              isOpen ? "text-[#12985f]" : "text-[#494641]"
            }`}
          >
            {item.question}
          </span>
        </button>

        {isOpen ? (
          <p className="montserrat ml-[43px] mt-4 pr-1 text-[0.88rem] leading-[1.55] text-[#8e877c] sm:text-[0.91rem]">
            {item.answer}
          </p>
        ) : null}
      </article>
    );
  };

  return (
    <section className="bg-[#f7f1d7] px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1340px]">
        <div className="text-center">
          <p className="montserrat text-xl font-semibold italic text-[#2d2d2d] sm:text-2xl">
            FAQs
          </p>
          <h2 className="goneva mt-3 text-[2rem] leading-none text-[#0d9b68] sm:text-[2.35rem] lg:text-[2.65rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-[58px] lg:grid-cols-2 lg:items-start lg:gap-x-[56px]">
          <div className="flex flex-col gap-6 lg:gap-[24px]">
            {leftColumnItems.map(renderFaqCard)}
          </div>

          <div className="flex flex-col gap-6 lg:gap-[24px]">
            {rightColumnItems.map(renderFaqCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
