import React from 'react';

const Section6 = () => {
  const steps = [
    { num: "01", title: "Manuscript Evaluation", desc: "Before any editing begins, our team reads your manuscript carefully and provides a thorough assessment. We look at structure, pacing, character development, argument flow for non-fiction, market positioning, and overall readiness for publication." },
    { num: "02", title: "Professional Book Editing: Developmental, Copy and Line Editing", desc: "Editing is not one step, it is three, and each one catches something different. Developmental editing addresses the big picture: structure, chapter flow, narrative arc, and whether your book delivers on its promise." },
    { num: "03", title: "Proofreading", desc: "Once editing is complete, your manuscript goes through a dedicated proofread, a final meticulous pass that catches every remaining typo, punctuation error, and inconsistency issue before your book goes near a publishing platform." },
    { num: "04", title: "Interior Formatting and Layout Design", desc: "A book that reads well on screen needs to be formatted properly for both print and digital. Our formatting team handles everything: typography, chapter headers, spacing, margins, page numbers, table of contents, and file preparation." },
    { num: "05", title: "Custom Book Cover Design", desc: "Our designers create covers that are genre-appropriate, visually striking, and built to communicate what your book is about at a glance. Every cover is delivered print-ready and optimised for digital storefronts." },
    { num: "06", title: "ISBN Registration and Barcode Generation", desc: "We handle your ISBN registration and barcode generation so your book is properly listed, searchable, and eligible for distribution through online retailers and physical bookstores worldwide." },
    { num: "07", title: "Global Publishing and Distribution", desc: "Once your book is ready, we handle the entire publishing and distribution process. We submit your title to 40+ global platforms including Amazon, Apple Books, Barnes & Noble, Kobo, and Booktopia." },
    { num: "08", title: "Amazon A+ Content Optimisation", desc: "We create and optimise your Amazon A+ content, the enhanced product description that appears below your book listing and significantly increases click-through and conversion rates." }
  ];

  return (
    <section className="bg-[#fdf8e1] py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-2 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-[#018752] italic font-serif text-xl mb-3">What We Do</h3>
          <h2 className="text-[#018752] text-3xl md:text-4xl font-serif mb-6">
            Every Publishing Service Your Book Needs Explained
          </h2>
          <p className="text-[#143d2c]/70 text-sm md:text-base max-w-4xl mx-auto">
            Publishing a book involves far more steps than most people expect. Below is a clear breakdown of every service Southern Cross Publishing provides.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2 lg:gap-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col group">
              
              {/* THE LINE LOGIC */}
              {/* Desktop Horizontal line */}
              <div className="hidden lg:block absolute top-3 left-[-100vw] right-[-100vw] h-[2px] bg-[#2d7a44] z-0" />
              
              {/* Vertical line for mobile - positioned exactly at center of dot */}
              <div className="lg:hidden absolute top-3 left-[11px] w-[2px] h-[calc(100%+6rem)] bg-[#2d7a44] z-0 last:hidden" />

              {/* THE DOT */}
              <div className="relative w-6 h-6 rounded-full border-3 border-[#2d7a44] bg-[#fdf8e1] z-10 mb-8 flex items-center justify-center shrink-0">
                
              </div>

              {/* CONTENT - Added pl-2 (on mobile) and lg:pl-0 to move text away from the vertical line */}
              <div className="flex flex-col relative z-10 pl-6 lg:pl-0">
                <span className="text-[#f5ce47] text-4xl sm:text-6xl font-bold leading-none mb-3 select-none">
                  {step.num}
                </span>
                <span className="text-[#2d7a44] font-bold text-sm uppercase tracking-widest mb-4">
                  Steps
                </span>
                <h4 className="text-[#143d2c] font-bold text-lg mb-4 leading-tight">
                  {step.title}
                </h4>
                <p className="text-[#143d2c]/80 text-[15px] leading-relaxed">
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