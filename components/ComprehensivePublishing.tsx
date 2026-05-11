import React from "react";
import Image from "next/image";

const bookImages = [
  {
    src: "/home/Rectangle 7.png",
    alt: "The Man of Light book cover",
    className:
      "left-[4px] top-[150px] z-10 -rotate-[22deg] sm:left-[38px] sm:top-[150px] md:left-[92px] md:top-[96px] md:-rotate-[18deg] lg:left-[70px] lg:top-[115px] lg:-rotate-[19deg]",
  },
  {
    src: "/home/Rectangle 8.png",
    alt: "Faith Over Feelings book cover",
    className:
      "left-[82px] top-[88px] z-20 -rotate-[6deg] sm:left-[146px] sm:top-[56px] md:left-[255px] md:top-[14px] md:-rotate-[5deg] lg:left-[315px] lg:top-[22px] lg:-rotate-[6deg]",
  },
  {
    src: "/home/Rectangle 9.png",
    alt: "Still I Rise book cover",
    className:
      "left-[164px] top-[78px] z-30 rotate-[7deg] sm:left-[250px] sm:top-[50px] md:left-[430px] md:top-[20px] md:rotate-[6deg] lg:left-[560px] lg:top-[28px] lg:rotate-[7deg]",
  },
  {
    src: "/home/Rectangle 10.png",
    alt: "The Book of Veolding Integration cover",
    className:
      "left-[230px] top-[144px] z-10 rotate-[22deg] sm:left-[350px] sm:top-[146px] md:left-[576px] md:top-[90px] md:rotate-[18deg] lg:left-[810px] lg:top-[110px] lg:rotate-[20deg]",
  },
] as const;

const ComprehensivePublishing = () => {
  return (
    <section className="px-4">
      <h2 className="mx-auto w-full max-w-4xl pb-10 text-center text-3xl font-medium text-[#018752] goneva sm:text-4xl md:max-w-3xl md:text-5xl lg:max-w-1/2">
        Comprehensive Publishing Services From Rough Manuscript To The
        Professional Book.
      </h2>

      <div className="mx-auto w-full lg:hidden">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-6">
          {bookImages.map((book, index) => (
            <div
              key={`${book.src}-slide`}
              className="min-w-0 shrink-0 snap-center"
            >
              <Image
                src={book.src}
                width={520}
                height={780}
                alt={book.alt}
                priority={index === 0}
                quality={100}
                sizes="(min-width: 640px) 260px, 72vw"
                className="h-auto w-[72vw] max-w-[260px] rounded-[20px] object-contain sm:w-[260px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto hidden h-[780px] w-full overflow-x-clip lg:block">
        <div className="relative mx-auto h-full w-[360px] max-w-full sm:w-[620px] md:w-[860px] lg:w-[1280px]">
          {bookImages.map((book, index) => (
            <div
              key={book.src}
              className={`absolute w-[150px] origin-bottom transform sm:w-[220px] md:w-[290px] lg:w-[370px] ${book.className}`}
            >
              <Image
                src={book.src}
                width={520}
                height={780}
                alt={book.alt}
                priority={index < 2}
                quality={100}
                sizes="(min-width: 1024px) 370px, (min-width: 768px) 290px, (min-width: 640px) 220px, 150px"
                className="h-auto w-full rounded-[20px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="montserrat text-center mx-auto max-w-7xl text-xl space-y-3 mb-5">
        <p className="">
          We know that the moment you decide to write a book, something shifts;
          suddenly, the idea that once felt private has now become something you
          want the world to know. That excitement is a real one, and it, of
          course, deserves to be protected.
        </p>
        <p className="">
          At Southern Cross Publishing, we have created our complete process
          around keeping that feeling alive, from your very first conversation
          with us to the day your book lands in a reader's hands.
        </p>
        <p className="">
          We do a lot more than just publishing books. We make them with proper
          care. Our network of experienced writers, editors, illustrators, and
          publishing specialists works closely with every author we work with,
          because no two stories are the same and no two authors need the same
          kind of support. No matter if you come to us with a completed
          manuscript or a single sentence of an idea, we meet you exactly where
          you are and help you complete the rest of the book with you.
        </p>
      </div>

      <h3 className="mx-auto italic w-full max-w-8xl px-2 pb-8 text-center text-lg font-semibold montserrat sm:px-6 sm:text-xl md:pb-12 md:text-2xl">
        Your words were always worth reading. We are just here to make sure the
        right people find them.
      </h3>
    </section>
  );
};

export default ComprehensivePublishing;
