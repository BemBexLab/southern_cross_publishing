import React from "react";

const Section6 = () => {
  const steps = [
    {
      num: "01",
      title: "Manuscript Evaluation",
      desc: "Before any editing begins, our team reads your manuscript carefully and provides a thorough assessment. We look at structure, pacing, character development, argument flow for non-fiction, market positioning, and overall readiness for publication.",
    },
    {
      num: "02",
      title: "Professional Book Editing: Developmental, Copy and Line Editing",
      desc: "Editing is not one step, it is three, and each one catches something different. Developmental editing addresses the big picture: structure, chapter flow, narrative arc, and whether your book delivers on its promise. Copy editing goes deeper, fixing sentence level issues, tightening language, and improving clarity throughout. Line editing focuses on rhythm, tone, and word choice, the things that make a reader stop and read a sentence twice because it landed perfectly.",
    },
    {
      num: "03",
      title: "Proofreading",
      desc: "Once editing is complete, your manuscript goes through a dedicated proofread, a final, meticulous pass that catches every remaining typo, punctuation error, and inconsistency, issue before your book goes near a publishing platform.",
    },
    {
      num: "04",
      title: "Interior Formatting and Layout Design",
      desc: "A book that reads well on screen needs to be formatted properly for both print and digital. Our formatting team handles everything, typography, chapter headers, spacing, margins, page numbers, table of contents, image placement, and file preparation for both print on demand and eBook formats including EPUB and PDF. Every interior we produce meets the technical standards required by Amazon KDP, IngramSpark, and every other major platform.",
    },
    {
      num: "05",
      title: "Custom Book Cover Design",
      desc: "Our designers create covers that are genre-appropriate, visually striking, and built to communicate what your book is about at a glance. Every cover is delivered print-ready and optimised for digital storefronts.",
    },
    {
      num: "06",
      title: "ISBN Registration and Barcode Generation",
      desc: "We handle your ISBN registration and barcode generation so your book is properly listed, searchable, and eligible for distribution through online retailers and physical bookstores worldwide.",
    },
    {
      num: "07",
      title: "Global Publishing and Distribution",
      desc: "Once your book is ready, we handle the entire publishing and distribution process. We submit your title to 40+ global platforms including Amazon, Apple Books, Barnes & Noble, Kobo, Booktopia, and more, managing all the metadata, categories, keywords, and listing details that determine whether readers find your book or scroll past it.",
    },
    {
      num: "08",
      title: "Amazon A+ Content Optimisation",
      desc: "We create and optimise your Amazon A+ content, the enhanced product description that appears below your book listing and significantly increases click-through and conversion rates. This includes keyword research, category selection, compelling book descriptions, and author page setup, all designed to put your book in front of readers who are already searching for exactly what you wrote.",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#fdf8e1] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-5xl text-center sm:mb-16 lg:mb-20">
          <h3 className="dm-sans mb-3 text-lg font-semibold italic text-black sm:text-xl lg:text-2xl">
            What We Publish
          </h3>
          <h2 className="mb-5 font-serif text-3xl leading-tight text-[#018752] sm:text-4xl md:text-5xl">
            Every Publishing Service Your Book Needs Explained
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-[#1F1F1F] sm:text-lg">
            Publishing a book involves far more steps than most people expect.
            Below is a clear breakdown of every service Crux Publishing House
            provides, so you know exactly what you are getting and
            what happens at each stage of your journey.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative min-w-0 pb-12 pl-14 sm:pb-14 sm:pl-16 lg:pb-0 lg:pl-0"
            >
              {/* THE LINE LOGIC */}
              {/* Desktop Horizontal line */}
              <div className="absolute left-[-100vw] right-[-100vw] top-5 z-0 hidden h-[2px] -translate-y-1/2 bg-[#2d7a44] lg:block" />

              {/* Keep the vertical timeline continuous on small and medium screens. */}
              {index < steps.length - 1 && (
                <div className="absolute bottom-0 left-5 top-5 z-0 w-[2px] -translate-x-1/2 bg-[#2d7a44] lg:hidden" />
              )}

              {/* THE DOT */}
              <div className="absolute left-0 top-0 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[6px] border-[#2d7a44] bg-[#fdf8e1] lg:relative lg:left-auto lg:top-auto lg:mb-8" />

              <div className="relative z-10 flex flex-col">
                <span className="mb-3 select-none text-4xl font-bold leading-none text-[#FDD118] sm:text-5xl lg:text-6xl">
                  {step.num}
                </span>
                <span className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2d7a44] sm:text-sm lg:mb-4">
                  Steps
                </span>
                <h4 className="mb-3 text-lg font-bold leading-tight text-black sm:text-xl lg:mb-4">
                  {step.title}
                </h4>
                <p className="text-base leading-relaxed text-black sm:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
