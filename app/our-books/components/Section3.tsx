import React from 'react';
import Image from 'next/image';

const partners = [
  {
    name: "Wilma Gibson Smith",
    title: "Author of Forged in the Mountains: A Family's Resilience",
    image: "/our-books/partners/Rectangle 60.webp", // Replace with actual paths
  },
  {
    name: "Leonard Serratore",
    title: "Author of The Adventure Of Scott And Lenny: Learn How To Fly",
    image: "/our-books/partners/Rectangle 63.webp",
  },
  {
    name: "K. Stephen Jumper",
    title: "Author of Don't Cut the Grass On Sunday: A Monday Conversation for Non-Christians & Skeptics Alike",
    image: "/our-books/partners/Rectangle 66.webp",
  },
  {
    name: "Scott Frank",
    title: "Author of Kael and the Whale with the Polka-Dot Tail",
    image: "/our-books/partners/Rectangle 72.webp",
  },
  {
    name: "Jack CartwrightJack",
    title: "Author of Deadly Little Secret/The Harder They Fall and other",
    image: "/our-books/partners/Rectangle 73.webp",
  },
  {
    name: "JIM FRITZ",
    title: "Author of Tales of the Hippie Dippie Gardener",
    image: "/our-books/partners/Rectangle 78.webp",
  },
];

const Section3 = () => {
  return (
    <section className="bg-[#E9E7C3] py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="font-serif text-[#1A3C34] text-3xl md:text-4xl mb-6">
          Meet Our Publishing Partners
        </h2>
        <p className="text-[#1A3C34]/80 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. A turpis urna augue volutpat posuere neque magna. 
          Cras adipiscing purus dignissim in ipsum nibh risus non. Pharetra neque quis non eget et risus. 
          Libero suspendisse praesent sed duis ipsum vitae sed ipsum ut.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group relative flex flex-col bg-transparent border border-[#1A3C34]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#0E7A4D] hover:border-[#0E7A4D]"
          >
            {/* Image Container */}
            <div className="p-4 pb-0">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 pt-4 flex flex-col">
              <div className="border-t border-[#1A3C34]/20 pt-4 group-hover:border-white/20">
                <h3 className="font-bold text-[#1A3C34] text-lg mb-2 group-hover:text-white transition-colors">
                  {partner.name}
                </h3>
                <p className="text-[#1A3C34]/70 text-sm leading-snug group-hover:text-white/80 transition-colors">
                  {partner.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;