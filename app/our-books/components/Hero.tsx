import React from 'react';
import Image from 'next/image';

const Hero = () => {
  // Array defining the four separate book images and their specific transformations
  const books = [
    {
      src: "/our-books/book1.webp", // Replace with your actual file path
      rotate: "-rotate-[15deg]",
      translateY: "translate-y-8",
      zIndex: "z-10",
    },
    {
      src: "/our-books/book2.webp",
      rotate: "-rotate-[6deg]",
      translateY: "translate-y-2",
      zIndex: "z-20",
    },
    {
      src: "/our-books/book3.webp",
      rotate: "rotate-[2deg]",
      translateY: "translate-y-0",
      zIndex: "z-30",
    },
    {
      src: "/our-books/book4.webp",
      rotate: "rotate-[12deg]",
      translateY: "translate-y-8",
      zIndex: "z-40",
    },
  ];

  return (
    <section className="relative bg-[#E9E7C3] py-20 px-6 overflow-hidden flex flex-col items-center">
      {/* Decorative Background Stars */}
      <BackgroundStars />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* Header Text */}
        <h2 className="font-serif text-[#018752] text-3xl md:text-5xl text-center leading-tight mb-10 mt-10 max-w-4xl">
          Publish Your Book in Australia With a <br className="hidden md:block" /> 
          Team That Handles the Complete Process
        </h2>

        {/* Fanned Books Container */}
        <div className="flex justify-center items-center h-[400px] md:h-[500px] w-full mb-16 px-4">
          <div className="flex -space-x-12 md:-space-x-20">
            {books.map((book, index) => (
              <div
                key={index}
                className={`relative w-[180px] h-[260px] md:w-[280px] md:h-[400px] shadow-2xl transition-transform hover:scale-105 duration-300 ${book.rotate} ${book.translateY} ${book.zIndex}`}
              >
                <Image
                  src={book.src}
                  alt={`Book cover ${index + 1}`}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-[#1A3C34] text-center text-sm md:text-base leading-relaxed max-w-5xl opacity-90">
          Our self publishing services cover ghostwriting, professional book editing and proofreading, 
          custom book cover design, interior formatting, ISBN registration, Amazon A+ content optimisation, 
          global distribution across 40+ platforms, and complete audiobook production. 
          Now, let Southern Cross take the hassle out of publishing
        </p>
      </div>
    </section>
  );
};

// Helper component for the background star icons
const BackgroundStars = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden text-[#018752]">
    {/* Positions are approximate based on image_633346.png */}
    <Star className="top-10 left-[10%] w-12 h-12 opacity-20" />
    <Star className="top-[40%] left-[5%] w-8 h-8 opacity-15" />
    <Star className="bottom-20 left-[12%] w-14 h-14 opacity-20" />
    <Star className="top-20 right-[15%] w-16 h-16 opacity-25" />
    <Star className="top-[50%] right-[8%] w-10 h-10 opacity-15" />
    <Star className="bottom-32 right-[12%] w-12 h-12 opacity-20" />
  </div>
);

const Star = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`absolute fill-[#1A3C34] ${className}`}
  >
    <path d="M12 0l2.5 8.5h8.5l-7 5.5 2.5 8.5-6.5-5-6.5 5 2.5-8.5-7-5.5h8.5z" />
  </svg>
);

export default Hero;