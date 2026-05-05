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
    <section className="bg-[#F7F1D7] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Image Container */}
        <div className="relative w-full aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-sm">
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
          <h2 className="goneva text-[#018752] text-6xl mb-2">
            Our Mission
          </h2>

          <p className="text-[#1F1F1F] montserrat text-lg leading-relaxed mb-6 max-w-4xl">
            To give every author, regardless of experience or background, access to the professional publishing process that their story deserves, from first word to final reader.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-[#1F1F1F1A] rounded-3xl p-14 flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="montserrat text-[#018752] text-5xl font-black">
                  {stat.value}
                </span>
                <span className="text-[#1F1F1F] montserrat text-sm font-semibold uppercase tracking-wide">
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
