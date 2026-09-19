import React from "react";

const Section3 = () => {
  return (
    <section className="overflow-hidden bg-[#2d7a44]">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16 xl:px-12 xl:py-20 2xl:px-16">
        
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-12 xl:gap-16 2xl:gap-20">
          
          {/* Left Side - Audiobook Illustration */}
          <div className="flex w-full items-center justify-center lg:w-1/2 lg:flex-[1.05]">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[650px] 2xl:max-w-[700px]">
              <img
                src="/publishing-services/Audiobook.webp"
                alt="3D Audiobook player with earphones"
                className="
                  h-auto
                  w-full
                  object-contain
                  transition-transform
                  duration-700
                  lg:-rotate-3
                  xl:-rotate-6
                  lg:hover:rotate-0
                "
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 lg:flex-[1.05]">
            
            {/* Heading */}
            <div className="mb-5 sm:mb-6 md:mb-7 lg:mb-8">
              <h3 className="dm-sans mb-2 text-base font-semibold italic text-black sm:text-lg md:mb-3 md:text-xl lg:mb-4 lg:text-2xl">
                Why It Matters
              </h3>

              <h2 className="goneva text-[28px] leading-[1.15] text-[#FDD118] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[54px]">
                Your Book Has Readers Who Prefer to Listen: Are You Reaching
                Them?
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="dm-sans space-y-4 text-sm font-light leading-6 text-white/90 sm:space-y-5 sm:text-base sm:leading-7 md:space-y-6 md:text-[17px] md:leading-8 lg:text-base lg:leading-7 xl:text-lg xl:leading-8">
              <p>
                The global audiobook market is growing rapidly, and Australian
                listeners are part of that shift. Platforms like Audible, Apple
                Books, Spotify, and Google Play have made it easier than ever
                for readers to consume books in audio format, which means
                authors who do not have an audiobook version are missing a
                growing share of their potential audience every single day.
              </p>

              <p>
                An audiobook also does something a printed or digital book
                cannot. It puts a voice behind your words. The right narration
                makes your story feel alive in a way that changes how listeners
                experience it. A well-produced audiobook builds a deeper
                connection between your writing and your readers, and that
                connection translates directly into reviews, loyalty, and
                sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;