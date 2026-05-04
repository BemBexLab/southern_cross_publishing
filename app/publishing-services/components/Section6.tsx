import React from 'react';

const Section6 = () => {
  const steps = [
    { num: "01", title: "Manuscript Evaluation", desc: "Before any editing begins, our team reads your manuscript carefully and provides a thorough assessment. We look at structure, pacing, character development, argument flow for non-fiction, market positioning, and overall readiness for publication." },
    { num: "02", title: "Professional Book Editing: Developmental, Copy and Line Editing", desc: "Editing is not one step, it is three, and each one catches something different. Developmental editing addresses the big picture: structure, chapter flow, narrative arc, and whether your book delivers on its promise. Copy editing goes deeper, fixing sentence level issues, tightening language, and improving clarity throughout. Line editing focuses on rhythm, tone, and word choice, the things that make a reader stop and read a sentence twice because it landed perfectly." },
    { num: "03", title: "Proofreading", desc: "Once editing is complete, your manuscript goes through a dedicated proofread, a final, meticulous pass that catches every remaining typo, punctuation error, and inconsistency, issue before your book goes near a publishing platform." },
    { num: "04", title: "Interior Formatting and Layout Design", desc: " A book that reads well on screen needs to be formatted properly for both print and digital. Our formatting team handles everything, typography, chapter headers, spacing, margins, page numbers, table of contents, image placement, and file preparation for both print on demand and eBook formats including EPUB and PDF. Every interior we produce meets the technical standards required by Amazon KDP, IngramSpark, and every other major platform." },
    { num: "05", title: "Custom Book Cover Design", desc: " Our designers create covers that are genre-appropriate, visually striking, and built to communicate what your book is about at a glance. Every cover is delivered print-ready and optimised for digital storefronts." },
    { num: "06", title: "ISBN Registration and Barcode Generation", desc: "We handle your ISBN registration and barcode generation so your book is properly listed, searchable, and eligible for distribution through online retailers and physical bookstores worldwide." },
    { num: "07", title: "Global Publishing and Distribution", desc: "Once your book is ready, we handle the entire publishing and distribution process. We submit your title to 40+ global platforms including Amazon, Apple Books, Barnes & Noble, Kobo, Booktopia, and more, managing all the metadata, categories, keywords, and listing details that determine whether readers find your book or scroll past it." },
    { num: "08", title: "Amazon A+ Content Optimisation", desc: "We create and optimise your Amazon A+ content, the enhanced product description that appears below your book listing and significantly increases click-through and conversion rates. This includes keyword research, category selection, compelling book descriptions, and author page setup, all designed to put your book in front of readers who are already searching for exactly what you wrote." }
  ];

  return (
    <section className="bg-[#fdf8e1] py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto max-w-[1600px] px-2 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-black italic font-semibold text-2xl montserrat mb-3">What We Do</h3>
          <h2 className="text-[#018752] text-3xl md:text-5xl font-serif mb-6">
            Every Publishing Service Your Book Needs Explained
          </h2>
          <p className="text-[#1F1F1F] text-lg max-w-5xl mx-auto">
            Publishing a book involves far more steps than most people expect. Below is a clear breakdown of every service Southern Cross Publishing provides, so you know exactly what you are getting and what happens at each stage of your journey.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2 lg:gap-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col group">
              
              {/* THE LINE LOGIC */}
              {/* Desktop Horizontal line */}
              <div className="absolute left-[-100vw] right-[-100vw] top-5 hidden h-[2px] -translate-y-1/2 bg-[#2d7a44] z-0 lg:block" />
              
              {/* Vertical line for mobile - positioned exactly at center of dot */}
              <div className="absolute left-5 top-5 h-[calc(100%+6rem)] w-[2px] -translate-x-1/2 bg-[#2d7a44] z-0 last:hidden lg:hidden" />

              {/* THE DOT */}
              <div className="relative w-10 h-10 rounded-full border-6 border-[#2d7a44] bg-[#fdf8e1] z-10 mb-8 flex items-center justify-center shrink-0">
                
              </div>

              {/* CONTENT - Added pl-2 (on mobile) and lg:pl-0 to move text away from the vertical line */}
              <div className="flex flex-col relative z-10 pl-6 lg:pl-0">
                <span className="text-[#f5ce47] text-4xl sm:text-6xl font-bold leading-none mb-3 select-none">
                  {step.num}
                </span>
                <span className="text-[#2d7a44] font-bold text-sm uppercase tracking-widest mb-4">
                  Steps
                </span>
                <h4 className="text-black font-bold text-xl mb-4 leading-tight">
                  {step.title}
                </h4>
                <p className="text-black text-lg leading-relaxed">
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
