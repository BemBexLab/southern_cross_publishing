import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Section5 = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="lg:hidden">
          <div className="flex flex-col">
            <h2 className="mb-6 max-w-[22rem] text-3xl leading-[1.08] text-[#018752] sm:mb-8 sm:max-w-[34rem] sm:text-4xl">
              Expert Self Publishing Services in Australia:{' '}
              <br className="hidden sm:block" />
              Complete Support
            </h2>

            <div className="relative mb-6 h-[190px] overflow-visible sm:mb-8 sm:h-[320px]">
              <img
                src="/publishing-services/Book_Cover_Mockups_03 1.webp"
                alt="Books displayed on a wooden shelf"
                className="absolute bottom-0 right-[-0.75rem] h-full w-auto max-w-none object-contain sm:right-[-1.5rem]"
              />
            </div>

            <div className="space-y-6 text-[15px] font-normal leading-relaxed text-[#1F1F1F] sm:text-lg sm:leading-8">
              <p>
                Southern Cross Publishing is a complete self publishing company
                that helps authors turn their ideas into professionally
                published books. Our services cover writing, editing, design,
                publishing, and marketing, and we handle the entire process for
                you, from the first conversation to the final listing. Whether
                you are a first time author with just an idea, a writer sitting
                on a completed manuscript, or a business professional ready to
                share your expertise with the world, our team is here to guide
                you at every step, in your genre, with your goals in mind. What
                sets us apart is our complete, all in one approach. With
                experienced ghostwriters, editors, designers, and marketing
                professionals working together under one roof, we make sure your
                book is created, published, and promoted to the highest
                professional standards. We provide access to 40+ global
                publishing platforms, giving your book worldwide reach while you
                retain full ownership of everything you have written.
              </p>
            </div>

            <a
              href="/our-books"
              className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#FDD118] px-6 py-4 font-bold text-[#018752] shadow-sm transition-all hover:bg-[#eac030] sm:mt-10 sm:w-auto sm:px-10"
            >
              <span className="text-base sm:text-lg">Browse the Collection</span>
              <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1 sm:text-2xl" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:min-h-[540px] lg:flex-col lg:justify-center">
          <div className="z-10 w-full px-2 lg:max-w-[calc(48%+60px)]">
            <h2 className="mb-8 text-3xl leading-[1.1] text-[#018752] md:text-4xl lg:text-4xl">
              Expert Self Publishing Services in Australia:{' '}
              <br className="hidden md:block" />
              Complete Support
            </h2>

            <div className="mb-10 space-y-6 text-[15px] font-normal leading-relaxed text-[#1F1F1F] md:text-lg">
              <p>
                Southern Cross Publishing is a complete self publishing company
                that helps authors turn their ideas into professionally
                published books. Our services cover writing, editing, design,
                publishing, and marketing, and we handle the entire process for
                you, from the first conversation to the final listing. Whether
                you are a first time author with just an idea, a writer sitting
                on a completed manuscript, or a business professional ready to
                share your expertise with the world, our team is here to guide
                you at every step, in your genre, with your goals in mind. What
                sets us apart is our complete, all in one approach. With
                experienced ghostwriters, editors, designers, and marketing
                professionals working together under one roof, we make sure your
                book is created, published, and promoted to the highest
                professional standards. We provide access to 40+ global
                publishing platforms, giving your book worldwide reach while you
                retain full ownership of everything you have written.
              </p>
            </div>

            <a
              href="/our-books"
              className="group inline-flex items-center gap-3 rounded-md bg-[#FDD118] px-10 py-4 font-bold text-[#018752] shadow-sm transition-all hover:bg-[#eac030]"
            >
              <span className="text-lg">Browse the Collection</span>
              <FaArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:flex lg:w-[48vw] lg:max-w-[860px] lg:items-center lg:justify-end">
        <img
          src="/publishing-services/Book_Cover_Mockups_03 1.webp"
          alt="Books displayed on a wooden shelf"
          className="block h-auto w-full object-contain object-right"
        />
      </div>
    </section>
  );
};

export default Section5;
