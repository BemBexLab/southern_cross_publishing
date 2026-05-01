import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Section4 = () => {
  return (
    <section className="relative bg-[#242424] overflow-hidden border-t border-green-800">
      {/* City Silhouette Background Layer */}
      <div 
        className="absolute inset-0 opacity-100 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/publishing-services/dc171d58-b99f-4f30-8bee-5f356e9d63f9_removalai_preview.webp')`,
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain'
        }}
      />

      <div className="container mx-auto max-w-7xl px-2 relative z-10">
        <div className="flex flex-col lg:flex-row items-end pt-10 lg:pt-20">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 text-left mb-12 lg:mb-0 lg:pb-20">
            <h3 className="text-[#FDD118] font-medium text-lg mb-2">
              Expert Non-Fiction Book Writing Services
            </h3>
            
            <h2 className="text-4xl md:text-3xl font-serif text-[#F7F1D7] leading-tight mb-2 max-w-md">
              Ready to Publish? Let's Start With a Conversation.
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              You do not need a finished manuscript, a publishing background, or any prior 
              experience to reach out. Just bring your idea, your draft, or your story, and 
              we will tell you honestly what it needs and how we can help. No sales pressure, 
              no automated replies. Just a real conversation about your book.
            </p>

            <button className="flex items-center gap-3 bg-[#f5ce47] hover:bg-[#eac030] text-[#1a1a1a] font-bold py-3 px-2 sm:py-4 sm:px-8 rounded-md transition-all group mx-auto sm:mx-0">
              <span>Book Your Free Consultation Today</span>
              <HiOutlineArrowNarrowRight className="text-xl transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Illustration Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[800px]">
              <img 
                src="/publishing-services/Group (1).webp" 
                alt="Creative thinking illustration"
                className="w-full h-auto object-contain block translate-y-[1px]"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Cream Decorative Bar */}
      <div className="h-6 bg-[#fdf8e1] w-full relative z-20" />
    </section>
  );
};

export default Section4;