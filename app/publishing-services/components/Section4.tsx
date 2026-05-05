import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Section4 = () => {
  return (
    <section className="relative overflow-hidden border-t border-green-800 bg-[#242424]">
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 pt-10 sm:gap-12 sm:pt-12 lg:flex-row lg:items-end lg:gap-12 lg:pt-20">
          
          {/* Left Content Side */}
          <div className="w-full text-left lg:w-1/2 lg:pb-20">
            <h3 className="montserrat mb-3 text-base font-medium text-[#FDD118] sm:text-lg">
              Expert Non-Fiction Book Writing Services
            </h3>
            
            <h2 className="mb-4 max-w-2xl text-3xl leading-tight text-[#F7F1D7] sm:text-4xl lg:text-[2.75rem]">
              Ready to Publish? Let's Start With a Conversation.
            </h2>
            
            <p className="montserrat mb-8 max-w-2xl text-base leading-relaxed text-[#F7F1D7] sm:text-lg sm:leading-8 lg:mb-10">
              You do not need a finished manuscript, a publishing background, or any prior 
              experience to reach out. Just bring your idea, your draft, or your story, and 
              we will tell you honestly what it needs and how we can help. No sales pressure, 
              no automated replies. Just a real conversation about your book.
            </p>

            <button className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#FDD118] px-5 py-3 font-bold text-[#018752] transition-all sm:w-auto sm:px-8 sm:py-4">
              <span>Book Your Free Consultation Today</span>
              <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Illustration Side */}
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
            <div className="relative z-30 -mb-8 -mt-4 w-full max-w-[420px] sm:-mb-10 sm:-mt-10 sm:max-w-[560px] lg:mb-0 lg:mt-0 lg:max-w-[800px] lg:translate-y-[15px]">
              <img 
                src="/publishing-services/Group (1).webp" 
                alt="Creative thinking illustration"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section4;
