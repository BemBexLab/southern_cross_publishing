import React from "react";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";

const consultationCards = [
  {
    title: "Idea Development & Research",
    description:
      "Ink Founders team helps refine and purify your concept, structure your content, and conduct in-depth research to make sure the accuracy and relevance for your target audience.",
  },
  {
    title: "Original, High-Quality Writing",
    description: "Every eBook is written from scratch, ensuring:",
    items: [
      "100% original content",
      "No plagiarism",
      "Clear, engaging, and reader-focused writing",
    ],
  },
  {
    title: "Genres We Cover",
    description:
      "Ink Founders offers writing services across a wide range of genres, including:",
    items: [
      "Business & Entrepreneurship",
      "Technology & Education",
      "Self-Help & Personal Development",
      "Fiction & Creative Writing",
      "Health & Wellness",
      "Biographies & Memoirs",
    ],
    twoColumnItems: true,
  },
  {
    title: "Voice Matching (Ghostwriting)",
    description:
      "For ghostwriting projects, we carefully adapt to your tone, style, and personality so the book truly feels like you wrote it.",
  },
  {
    title: "Our Writing Process",
    items: [
      "Concept discussion & project planning",
      "Client review & revisions",
      "Outline creation & approval",
      "Final delivery (ready for editing & publishing)",
      "Writing & content development",
    ],
    twoColumnItems: true,
  },
  {
    title: "Who This Service Is For",
    items: ["First-time authors", "Entrepreneurs & coaches", "Business owners"],
  },
];

const BookConsultation = () => {
  return (
    <section className="bg-[#018752] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-9xl">
        <div className="mx-auto max-w-8xl text-center">
          <p className="montserrat text-xl italic text-[#f6efd8] sm:text-2xl">
            Lorem ipsum dolor sit amet
          </p>
          <h2 className="goneva mt-4 text-[2rem] leading-[1.08] text-[#f8c81d] sm:text-[2.5rem] lg:text-[3rem]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing.
          </h2>
          <p className="montserrat mx-auto mt-6 max-w-8xl text-[0.98rem] leading-[1.55] text-[#d0e5d7] sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque
            habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum
            sed tortor parturient nisl. Posuere ridiculus adipiscing pulvinar
            suspendisse. Proin turpis in pharetra odio odio ullamcorper elit.
            Massa tristique nec in commodo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {consultationCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-[20px] border border-white/25 bg-transparent p-6 text-[#f7f2df] transition-colors duration-300 hover:bg-white sm:p-7"
            >
              <h3 className="montserrat text-[1.35rem] font-semibold leading-tight text-[#f6efd8] transition-colors duration-300 group-hover:text-[#078c52]">
                {card.title}
              </h3>

              {card.description ? (
                <p className="montserrat mt-4 text-[1rem] leading-[1.45] text-[#d6e6d7] transition-colors duration-300 group-hover:text-[#545454]">
                  {card.description}
                </p>
              ) : null}

              {card.items ? (
                <ul
                  className={`mt-5 grid gap-x-8 gap-y-3 ${
                    card.twoColumnItems ? "sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="montserrat flex items-start gap-3 text-[0.98rem] leading-[1.35] text-[#f6efd8] transition-colors duration-300 group-hover:text-[#545454]"
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
          <button className="montserrat inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#f8c81d] px-6 py-3 text-base font-semibold text-[#078c52] transition hover:bg-[#ffd541] sm:px-8">
            <span>Book a Consultation</span>
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
