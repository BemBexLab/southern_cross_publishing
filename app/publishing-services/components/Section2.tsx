import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Section2 = () => {
  return (
    <section className="bg-[#F7F1D7] pb-10 sm:pb-12 lg:pb-16">
      <div className="container mx-auto max-w-[1840px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
          <div className="w-full max-w-[760px] lg:hidden">
            <h2 className="goneva text-3xl leading-tight text-[#018752] sm:text-4xl">
              Professional Book Publishing Services in Australia
            </h2>
          </div>
          
          {/* Left Side: Illustration Container */}
          <div className="flex w-full items-center justify-center lg:flex-[0.9]">
            <img 
              src="/publishing-services/Group.webp" 
              alt="Person working at desk illustration"
              className="h-auto w-full max-w-[340px] object-contain sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px]"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full max-w-[1080px] lg:flex-[1.25] lg:max-w-none">
            <h2 className="goneva hidden text-3xl leading-tight text-[#018752] lg:block lg:text-[2.75rem]">
              Professional Book Publishing Services in Australia
            </h2>
            
            <div className="montserrat py-5 text-[15px] font-normal leading-7 text-[#1F1F1F] sm:text-base md:py-6 md:text-lg md:leading-8">
              <p>
                If you have been searching for reliable book publishing services in Australia, Southern Cross Publishing brings everything your book needs under one roof. Whether you are a first time author figuring out how to publish a book, or an experienced writer who needs professional ghostwriting, developmental editing, proofreading, custom book cover design, or worldwide distribution, our team manages every stage of the publishing process so your book reaches the right readers, on the right platforms, at the right time.
              </p>
              <p>
                We specialise in self publishing services across all major genres, fiction, non-fiction, memoirs, biographies, self help, children's books, health and wellness guides, business books, and audiobook production. Our professional book editors, ghostwriters, and illustrators work directly with you to produce a polished, market-ready book that stands out on Amazon, Apple Books, Barnes & Noble, Kobo, and 40-plus global platforms. We also provide Amazon A+ content optimisation to increase your book's visibility and drive consistent, long-term sales.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#FDD118] px-6 py-3.5 font-bold text-[#018752] transition-all sm:w-auto sm:px-8"
            >
              <span>Get a Free Publishing Quote</span>
              <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section2;
