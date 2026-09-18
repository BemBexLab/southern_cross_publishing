"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BOOKS } from "@/components/OurBook";

const categories = ["All", "Fiction", "Non Fiction", "Biography", "Children Book"];

const Section2 = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredBooks =
    activeTab === "All"
      ? BOOKS
      : BOOKS.filter((book) => book.tags.includes(activeTab));

  return (
    <section className="flex flex-col items-center bg-[#EAE5CC] px-6 pt-10 pb-20 md:px-12 lg:px-24">
      <div className="mb-12 text-center">
        <h2 className="mb-6 font-serif text-3xl text-[#018752] md:text-5xl">Our Books</h2>
        <p className="dm-sans text-lg leading-relaxed text-black">
          Every cover you see here started as an idea in someone's head. Some came to us as rough
          notes, others as half finished manuscripts, and a few as nothing more than a conversation
          about what the author wanted to say. What you are looking at now is what happens when the
          right team works alongside the right author: a finished, professionally published book
          that the world can actually hold and read.
        </p>
      </div>

      <div className="mb-16 w-full max-w-5xl">
        <div className="flex flex-wrap justify-center border-b border-[#1A3C34]/20 pb-0 md:justify-between">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-4 pb-4 text-sm font-medium transition-all md:text-base ${
                activeTab === cat ? "text-[#1A3C34]" : "text-[#1A3C34]/50"
              }`}
            >
              {cat}
              {activeTab === cat && (
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#FDD118] to-[#1A3C34]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-16 grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {filteredBooks.map((book, index) => (
          <Link
            key={`${book.title}-${index}`}
            href={book.link}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="group relative mb-6 h-[300px] w-[200px] cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="rounded-sm object-cover"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 200px, 200px"
                loading="eager"
                unoptimized
              />
            </div>
            <p className="max-w-[200px] text-center text-sm font-semibold text-[#1A3C34] md:text-base">
              {book.title}
            </p>
            <p className="mt-1 max-w-[200px] text-center text-xs text-[#1A3C34]/70 md:text-sm">
              {book.author}
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/contact"
        className="flex items-center gap-2 rounded-md bg-[#FDD118] px-10 py-3 text-sm font-bold text-[#1A3C34] transition-colors hover:bg-[#f5c820]"
      >
        View All
        <FaArrowRight className="text-base" />
      </Link>
    </section>
  );
};

export default Section2;
