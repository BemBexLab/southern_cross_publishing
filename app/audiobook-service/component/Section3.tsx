import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-[#2d7a44] py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: 3D Audiobook Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[550px]">
              {/* This asset should be the combined player and earphones image */}
              <img 
                src="/publishing-services/Audiobook.webp" 
                alt="3D Audiobook player with earphones"
                className="w-full h-auto object-contain transform lg:-rotate-6 transition-transform hover:rotate-0 duration-700"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-[#f5ce47] italic font-serif text-lg lg:text-xl mb-4">
                Why It Matters
              </h3>
              <h2 className="text-[#f5ce47] text-3xl md:text-4xl lg:text-[44px] font-serif leading-[1.15] mb-8">
                Your Book Has Readers Who Prefer to Listen: Are You Reaching Them?
              </h2>
            </div>

            <div className="space-y-6 text-white/90 text-[15px] md:text-[17px] leading-relaxed font-light">
              <p>
                The global audiobook market is growing rapidly, and Australian listeners are 
                part of that shift. Platforms like Audible, Apple Books, Spotify, and Google Play 
                have made it easier than ever for readers to consume books in audio format, 
                which means authors who do not have an audiobook version are missing a 
                growing share of their potential audience every single day.
              </p>
              <p>
                An audiobook also does something a printed or digital book cannot. It puts a 
                voice behind your words. The right narration makes your story feel alive in a 
                way that changes how listeners experience it. A well-produced audiobook 
                builds a deeper connection between your writing and your readers, and that 
                connection translates directly into reviews, loyalty, and sales.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;