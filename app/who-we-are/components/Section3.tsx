import React from 'react';
import Image from 'next/image';

const stats = [
  { value: "7+", label: "Authors Published" },
  { value: "15+", label: "Genres Covered" },
  { value: "50+", label: "Global Platforms" },
  { value: "100%", label: "Author Owned Right" },
];

const Section3 = () => {
  return (
    <section className="bg-[#E9E7C3] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Image Container */}
        <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-sm">
          {/* 
            Note: Referencing image_642003.png (the book composite image).
            Ensure this image is in your /public folder.
          */}
          <Image
            src="/who-we-are/Rectangle (1).webp" 
            alt="Audiobook mockups on landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col">
          <h2 className="font-serif text-[#018752] text-4xl mb-2">
            Our Mission
          </h2>

          <p className="text-[#1A3C34]/80 text-[16px] leading-relaxed mb-6 max-w-xl">
            To give every author, regardless of experience or background, access to the 
            professional publishing process that their story deserves, from first word to 
            final reader.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-[#1F1F1F1A]/80 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="font-serif text-[#018752] text-4xl font-semibold">
                  {stat.value}
                </span>
                <span className="text-[#1A3C34]/70 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section3;