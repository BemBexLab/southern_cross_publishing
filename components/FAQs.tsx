"use client";

import React, { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export const defaultFaqItems: FAQItem[] = [
  {
    question:
      "Do I need a finished manuscript to use your book publishing services?",
    answer:
      "Not at all. Most of our authors come to us somewhere in the middle, a rough draft, a scattered set of notes, or just a strong idea they haven't put on paper yet. We work with you from wherever you are right now. If you have a finished manuscript, great. If you have a voice memo and a vision, that works too. We figure out the starting point together on our first call.",
  },
  {
    question: "How long does the full publishing process take?",
    answer:
      "Timelines vary depending on where your manuscript is when we start and how much work it needs. A book going through ghostwriting, editing, design, and full distribution typically takes between three and six months. We give you a realistic timeline at the start of our process, with no surprise delays. You'll always know exactly where your book stands.",
  },
  {
    question:
      "Will my self published book be available on Amazon and global bookstores?",
    answer:
      "Yes. We distribute across 40+platforms globally, including Amazon, Barnes & Noble, Apple Books, Kobo, and more. Your book will be available in both print and eBook formats, fully listed with proper metadata and Amazon A+ content so it shows up when readers search for books like yours.",
  },
  {
    question: "Do I keep ownership of my book after you publish it?",
    answer:
      "Completely. You retain 100% ownership of your manuscript, your cover design, and all rights to your work. Publishing with Southern Cross Publishing is a service, not a rights agreement. Every royalty your book earns belongs to you, and every creative decision stays yours from start to finish.",
  },
  {
    question:
      "What genres and book types do you publish: fiction, non-fiction, memoirs, and audiobooks?",
    answer:
      "We work across every major genre; fiction, non-fiction, memoirs, biographies, self help, health and wellness, children's books, business guides, and more. We match you with writers and editors who have genuine experience in your specific genre, so the people working on your book actually understand what makes it work.",
  },
];

export const defaultFaqColumnGroups = [
  [0, 2],
  [1, 3, 4],
];

export type FAQsProps = {
  eyebrow?: string;
  title?: string;
  items?: FAQItem[];
  initialOpenIndex?: number;
  columnGroups?: number[][];
};

const cardBaseClass =
  "w-full self-start rounded-[8px] bg-transparent shadow-[0_14px_34px_rgba(205,190,143,0.22)] transition-all duration-200";

const getColumnGroups = (items: FAQItem[], columnGroups?: number[][]) => {
  if (columnGroups?.length) {
    return columnGroups
      .map((group) => group.filter((index) => items[index]))
      .filter((group) => group.length > 0);
  }

  const midpoint = Math.ceil(items.length / 2);

  return [
    items.slice(0, midpoint).map((_, index) => index),
    items.slice(midpoint).map((_, index) => index + midpoint),
  ].filter((group) => group.length > 0);
};

const FAQs = ({
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
  items = defaultFaqItems,
  initialOpenIndex = 0,
  columnGroups = defaultFaqColumnGroups,
}: FAQsProps) => {
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);
  const groups = getColumnGroups(items, columnGroups);

  const renderFaqCard = (index: number) => {
    const item = items[index];

    if (!item) {
      return null;
    }

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
            {isOpen ? "-" : "+"}
          </span>

          <span
            className={`montserrat flex-1 text-[1.06rem] font-semibold leading-[1.18] tracking-[-0.01em] sm:text-[1.1rem] ${
              isOpen ? "text-[#018752]" : "text-[#242424]"
            }`}
          >
            {item.question}
          </span>
        </button>

        {isOpen ? (
          <p className="montserrat ml-[43px] mt-4 pr-1 text-[0.88rem] leading-[1.55] text-[#242424] sm:text-[0.91rem]">
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
            {eyebrow}
          </p>
          <h2 className="goneva mt-3 text-[2rem] leading-none text-[#0d9b68] sm:text-[2.35rem] lg:text-[2.65rem]">
            {title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-[58px] lg:grid-cols-2 lg:items-start lg:gap-x-[56px]">
          {groups.map((group, groupIndex) => (
            <div
              key={`faq-group-${groupIndex}`}
              className="flex flex-col gap-6 lg:gap-[24px]"
            >
              {group.map(renderFaqCard)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
