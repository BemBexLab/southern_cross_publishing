"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BOOKS } from "@/components/OurBook";

const categories = [
  "All",
  "Fiction",
  "Non Fiction",
  "Biography / Autobiography",
  "Children Book",
];

const Section2 = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredBooks =
    activeTab === "All"
      ? BOOKS
      : BOOKS.filter((book) => book.tags.includes(activeTab));

  return (
    <section className="bg-[#EAE5CC] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        
        {/* Header */}
        <div className="mx-auto mb-8 max-w-[1200px] text-center sm:mb-10 md:mb-12">
          <h2 className="goneva mb-4 text-[30px] leading-tight text-[#018752] sm:text-4xl md:mb-5 md:text-5xl lg:text-[54px]">
            Our Books
          </h2>

          <p className="dm-sans text-sm leading-6 text-black sm:text-base sm:leading-7 md:text-lg md:leading-8">
            Every cover you see here started as an idea in someone's head.
            Some came to us as rough notes, others as half finished
            manuscripts, and a few as nothing more than a conversation about
            what the author wanted to say. What you are looking at now is what
            happens when the right team works alongside the right author: a
            finished, professionally published book that the world can actually
            hold and read.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mx-auto mb-10 w-full max-w-5xl sm:mb-12 md:mb-14 lg:mb-16">
          <div
            className="
              flex
              w-full
              gap-2
              overflow-x-auto
              border-b
              border-[#1A3C34]/20
              scrollbar-hide
              sm:justify-center
              md:justify-between
            "
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`
                  relative
                  shrink-0
                  whitespace-nowrap
                  px-3
                  pb-3
                  text-xs
                  font-medium
                  transition-all
                  duration-300
                  sm:px-4
                  sm:pb-4
                  sm:text-sm
                  md:text-base
                  ${
                    activeTab === cat
                      ? "text-[#1A3C34]"
                      : "text-[#1A3C34]/50 hover:text-[#1A3C34]/80"
                  }
                `}
              >
                {cat}

                {activeTab === cat && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#FDD118] to-[#1A3C34]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div
          className="
            mx-auto
            mb-10
            grid
            w-full
            max-w-[1080px]
            grid-cols-2
            gap-x-4
            gap-y-6
            sm:mb-12
            sm:gap-x-6
            sm:gap-y-8
            md:grid-cols-3
            md:max-w-[760px]
            md:gap-x-8
            md:gap-y-10
            lg:mb-14
            lg:grid-cols-4
            lg:max-w-[1080px]
            xl:mb-16
          "
        >
          {filteredBooks.map((book, index) => (
            <Link
              key={`${book.title}-${index}`}
              href={book.link}
              className="group flex min-w-0 flex-col items-center text-center"
            >
              {/* Book Cover */}
              <div
                className="
                  relative
                  mb-4
                  aspect-[2/3]
                  w-full
                  max-w-[150px]
                  overflow-hidden
                  rounded-sm
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:shadow-xl
                  sm:mb-5
                  sm:max-w-[180px]
                  md:max-w-[190px]
                  lg:max-w-[200px]
                  xl:max-w-[220px]
                "
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex flex-col items-center justify-between bg-gradient-to-br from-[#078c52] via-[#05643f] to-[#16352b] px-4 py-5 text-center text-[#fff8de]"
                >
                  <span className="text-[8px] font-semibold tracking-[0.16em]">
                    CRUX PUBLISHING
                  </span>
                  <span className="line-clamp-5 text-sm font-bold leading-tight">
                    {book.title}
                  </span>
                  <span className="line-clamp-2 text-[10px] tracking-wide">
                    {book.author}
                  </span>
                </div>
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="
                    (max-width: 639px) 150px,
                    (max-width: 767px) 180px,
                    (max-width: 1023px) 190px,
                    (max-width: 1279px) 200px,
                    220px
                  "
                  unoptimized
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Book Title */}
              <p className="dm-sans h-5 w-full max-w-[220px] truncate text-xs font-semibold leading-5 text-[#1A3C34] sm:h-6 sm:text-sm sm:leading-6 md:text-base">
                {book.title}
              </p>

              {/* Author */}
              <p className="dm-sans mt-1 w-full max-w-[220px] text-[11px] leading-4 text-[#1A3C34]/70 sm:text-xs md:text-sm">
                {book.author}
              </p>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="
              group
              inline-flex
              min-h-[46px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-md
              bg-[#FDD118]
              px-6
              py-3
              text-sm
              font-bold
              text-[#1A3C34]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#f5c820]
              hover:shadow-md
              sm:w-auto
              sm:px-8
              md:px-10
            "
          >
            <span>View All</span>

            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1 md:text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
