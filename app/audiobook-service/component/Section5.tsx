import React from 'react';
import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';

const Section5 = () => {
  return (
    <section className="bg-[#E9E7C3] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image Container */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
          {/* Replace with your actual composite image of the books and landscape */}
          <Image
            src="/audiobook-service/Rectangle.webp" 
            alt="Audiobook mockups shown over a landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col space-y-6">
          <h3 className="goneva text-[#018752] text-5xl font-medium">
            Global Distribution
          </h3>
          
          <h2 className="goneva text-[#018752] text-3xl md:text-5xl leading-tight">
            Your Audiobook. Available Everywhere Listeners Are Already Searching
          </h2>

          <div className="space-y-4 text-[#1F1F1F] text-lg leading-relaxed max-w-4xl">
            <p>
              A great audiobook needs to be where your listeners are, and today, 
              listeners are spread across multiple platforms. Southern Cross 
              Publishing distributes your finished audiobook to every major platform, 
              so you are not locked into one storefront and your book is available to 
              the widest possible audience from the moment it goes live.
            </p>
            <p>
              You retain full ownership of your audiobook and all royalties it earns. 
              We distribute on your behalf, we never take a share of your sales.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="/contact"
              className="bg-[#FDD118] w-65 text-[#018752] font-bold py-4 px-8 rounded-lg flex items-center gap-2 hover:bg-[#f5c820] transition-colors"
            >
              Browse the Collection
              <FaArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section5;
