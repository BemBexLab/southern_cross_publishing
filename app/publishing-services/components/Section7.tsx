import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Section7 = () => {
  return (
    <section className="relative w-full py-20 lg:py-10 overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/publishing-services/aab22737c0c341637148fb92adb4cfc2ad672097.webp" // Replace with your actual background image path
          alt="Writing background"
          className="w-full h-full object-cover"
        />
        {/* Heavy dark overlay to make text pop */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        
        {/* Yellow Sub-heading */}
        <p className="text-[#f5ce47] font-medium text-sm md:text-base uppercase tracking-widest mb-6">
          Expert Non-Fiction Book Writing Services
        </p>

        {/* Main Title - Serif font is key here */}
        <h2 className="text-[#F7F1D7] text-3xl md:text-3xl lg:text-4xl font-serif leading-[1.2] mb-8 ">
          The Only Thing Standing Between You and a Published Book Is the First Step
        </h2>

        {/* Description Text */}
        <p className="text-gray-300 text-[15px] md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          We have helped hundreds of Australian authors go from a rough idea to a professionally published book 
          available worldwide. Your story is next.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 bg-[#f5ce47] hover:bg-[#eac030] text-[#018752] font-bold py-4 px-10 rounded-md transition-all group shadow-lg">
            <span className="text-lg">Get a Quote</span>
            <HiOutlineArrowNarrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Section7;