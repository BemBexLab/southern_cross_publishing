import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  return (
    <section className="bg-[#E9E7C3] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Illustration */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center">
          {/* 
            Replace src with your actual exported image path.
            The 'object-contain' class ensures the book illustration 
            doesn't get cropped.
          */}
          <Image
            src="/who-we-are/VIsion.webp" 
            alt="Illustration of an open book with glasses"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col space-y-6">
          <h2 className="font-serif text-[#018752] text-3xl md:text-4xl">
            Our Story
          </h2>

          <div className="space-y-2 text-[#1A3C34]/80 text-md leading-relaxed max-w-2xl">
            <p>
              Southern Cross Publishing was born from a simple but deeply held belief: 
              every person with a story worth telling deserves access to professional 
              publishing.
            </p>
            
            <p>
              We&apos;re proudly Australian. We understand the Australian reader, the 
              Australian market, and what it takes to make a book succeed locally and 
              globally. But we&apos;ve always had our eyes on the wider world, because 
              great stories don&apos;t stop at borders.
            </p>

            <p>
              Our work spans ghostwriting, professional book editing, cover design, 
              ISBN registration, Amazon A+ content optimisation, global distribution 
              across 40+ platforms, and full audiobook production.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section2;