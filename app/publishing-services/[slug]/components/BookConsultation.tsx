import React from "react";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import type { BookConsultationSectionData } from "../data";

interface BookConsultationProps {
  section: BookConsultationSectionData;
}

const BookConsultation = ({ section }: BookConsultationProps) => {
  return (
    <section className="bg-[#018752] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-9xl">
        <div className="mx-auto max-w-8xl text-center">
          <p className="dm-sans text-xl italic text-[#f6efd8] sm:text-2xl">
            {section.eyebrow}
          </p>
          <h2 className="goneva mt-4 text-[2rem] leading-[1.08] text-[#f8c81d] sm:text-[2.5rem] lg:text-[3rem]">
            {section.title}
          </h2>
          <p className="dm-sans mx-auto mt-6 max-w-8xl text-[0.98rem] leading-[1.55] text-[#d0e5d7] sm:text-lg">
            {section.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {section.cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-[20px] border border-white/25 bg-transparent p-6 text-[#f7f2df] transition-colors duration-300 hover:bg-white sm:p-7"
            >
              <h3 className="dm-sans text-[1.35rem] font-semibold leading-tight text-[#f6efd8] transition-colors duration-300 group-hover:text-[#078c52]">
                {card.title}
              </h3>

              {card.description ? (
                <p className="dm-sans mt-4 text-[1rem] leading-[1.45] text-[#d6e6d7] transition-colors duration-300 group-hover:text-[#545454]">
                  {card.description}
                </p>
              ) : null}

              {card.items ? (
                <ul
                  className={`mt-5 grid gap-x-8 gap-y-3 ${
                    card.twoColumnItems ? "sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {card.items.map((item, itemIndex) => (
                    <li
                      key={`${card.title}-${itemIndex}`}
                      className="dm-sans flex items-start gap-3 text-[0.98rem] leading-[1.35] text-[#f6efd8] transition-colors duration-300 group-hover:text-[#545454]"
                    >
                      <FaCircleCheck className="mt-0.5 shrink-0 text-[0.95rem] text-[#f8c81d]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={section.ctaHref}
            className="dm-sans inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#f8c81d] px-6 py-3 text-base font-semibold text-[#078c52] transition hover:bg-[#ffd541] sm:px-8"
          >
            <span>{section.ctaText}</span>
            <FaArrowRight className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
