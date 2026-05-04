import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Section5 = () => {
  return (
    <section className="bg-[#fdf8e1] overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto max-w-[1400px] ">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 z-10 px-2">
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-serif text-[#018752] leading-[1.1] mb-8">
              Expert Self Publishing Services in Australia: <br className="hidden md:block" />
              Complete Support
            </h2>
            
            <div className="space-y-6 text-[#1F1F1F] text-[15px] md:text-[17px] leading-relaxed font-normal mb-10 max-w-xl">
              <p>
                Southern Cross Publishing is a complete self publishing company that 
                helps authors turn their ideas into professionally published books. Our 
                services cover writing, editing, design, publishing, and marketing, and 
                we handle the entire process for you, from the first conversation to the 
                final listing.
                Whether you are a first time author with just an idea, a writer sitting on 
                a completed manuscript, or a business professional ready to share your 
                expertise with the world, our team is here to guide you at every step, in 
                your genre, with your goals in mind.
                What sets us apart is our complete, all in one approach. With 
                experienced ghostwriters, editors, designers, and marketing 
                professionals working together under one roof, we make sure your 
                book is created, published, and promoted to the highest professional 
                standards. We provide access to 40+ global publishing platforms, 
                giving your book worldwide reach while you retain full ownership of 
                everything you have written.
              </p>
            </div>

            <button className="flex items-center gap-3 bg-[#f5ce47] hover:bg-[#eac030] text-[#018752] font-bold py-4 px-10 rounded-md transition-all group shadow-sm mx-auto sm:mx-0">
              <span className="text-lg">Browse the Collection</span>
              <HiOutlineArrowNarrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Visual Side - Single Integrated Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px] lg:max-w-none lg:w-[115%] lg:-mr-20">
              <img 
                src="/publishing-services/Book_Cover_Mockups_3.webp" // Reference: Screenshot 2026-05-01 at 9.39.16 PM.png
                alt="Books displayed on a wooden shelf"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section5;