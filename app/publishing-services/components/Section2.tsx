import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Section2 = () => {
  return (
    <section className="bg-[#F7F1D7] py-6 md:py-10">
      <div className="container max-w-8xl mx-auto px-2">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
          
          {/* Left Side: Illustration Container */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {/* 
               Place your exported illustration here. 
               The illustration in the screenshot has a yellow circular 
               blob background and a green-themed character.
            */}
            <img 
              src="/publishing-services/Group.webp" 
              alt="Person working at desk illustration"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl md:text-3xl goneva lg:text-4xl font-serif text-[#018752] leading-tight">
              Professional Book Publishing Services in Australia
            </h2>
            
            <div className="montserrat py-5 text-[#1F1F1F] text-[15px] md:text-lg font-normal">
              <p>
                If you have been searching for reliable book publishing services in Australia, 
                Southern Cross Publishing brings everything your book needs under one roof. 
                Whether you are a first time author figuring out how to publish a book, or an 
                experienced writer who needs professional ghostwriting, developmental 
                editing, proofreading, custom book cover design, or worldwide distribution, 
                our team manages every stage of the publishing process so your book reaches 
                the right readers, on the right platforms, at the right time.
                We specialise in self publishing services across all major genres, fiction, non-
                fiction, memoirs, biographies, self help, children's books, health and wellness 
                guides, business books, and audiobook production. Our professional book 
                editors, ghostwriters, and illustrators work directly with you to produce a 
                polished, market-ready book that stands out on Amazon, Apple Books, Barnes 
                & Noble, Kobo, and 40-plus global platforms. We also provide Amazon A+ 
                content optimisation to increase your book's visibility and drive consistent, 
                long-term sales.
              </p>
            </div>

            <button className="flex montserrat items-center gap-3 bg-[#FDD118] text-[#018752] font-bold py-3.5 px-8 rounded-md transition-all group">
              <span>Get a Free Publishing Quote</span>
              <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section2;