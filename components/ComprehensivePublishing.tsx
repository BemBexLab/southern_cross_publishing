import React from "react";
import Image from "next/image";

const bookImages = [
  {
    src: "/home/Rectangle 7.png",
    alt: "The Man of Light book cover",
    className:
      "left-[-1%] top-36 z-10 -rotate-[20deg] sm:left-[3%] sm:top-28 md:left-[4%] md:top-22 md:-rotate-[18deg]",
  },
  {
    src: "/home/Rectangle 8.png",
    alt: "Faith Over Feelings book cover",
    className:
      "left-[16%] top-14 z-20 -rotate-[4deg] sm:left-[19%] sm:top-6 md:left-[20%] md:top-2",
  },
  {
    src: "/home/Rectangle 9.png",
    alt: "Still I Rise book cover",
    className:
      "left-[37%] top-18 z-30 rotate-[8deg] sm:left-[40%] sm:top-12 md:left-[41%] md:top-10 md:rotate-[10deg]",
  },
  {
    src: "/home/Rectangle 10.png",
    alt: "The Book of Veolding Integration cover",
    className:
      "left-[57%] top-36 z-10 rotate-[22deg] sm:left-[60%] sm:top-28 md:left-[61%] md:top-22 md:rotate-[24deg]",
  },
] as const;

const ComprehensivePublishing = () => {
  return (
    <section className="px-4">
      <h2 className="mx-auto w-full max-w-4xl py-10 text-center text-3xl font-medium text-[#018752] goneva sm:text-4xl md:w-1/2 md:text-5xl">
        Comprehensive Publishing Services From Rough Manuscript To The Professional Book.
      </h2>

      <div className="mx-auto h-[560px] w-full max-w-[1460px] overflow-x-clip sm:h-[700px] md:h-[860px]">
        <div className="relative h-full w-full">
          {bookImages.map((book, index) => (
            <div
              key={book.src}
              className={`absolute w-[225px] origin-bottom transform sm:w-[300px] md:w-[440px] ${book.className}`}
            >
              <Image
                src={book.src}
                width={620}
                height={930}
                alt={book.alt}
                priority={index < 2}
                quality={100}
                sizes="(min-width: 768px) 440px, (min-width: 640px) 300px, 225px"
                className="h-auto w-full rounded-[20px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensivePublishing;
