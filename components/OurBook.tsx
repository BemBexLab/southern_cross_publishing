"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const BOOKS = [
  {
    title: "DON'T CUT the GRASS on Sunday",
    author: "K.Stephen Jumper",
    cover: "/home/Rectangle 21.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/0ee4hTIt",
  },
  {
    title: "The Bee's Colony, The Rise of the New Queen",
    author: "Joel B.Gindo",
    cover: "/home/Rectangle 47.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/03dFgTaS",
  },
  {
    title: "Growing together",
    author: "Allison Sullins",
    cover: "/home/Rectangle 48.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0h1r5jAM",
  },
  {
    title: "Tales of the Hippie Dippie Gardener",
    author: "Jim Fritz",
    cover: "/home/Rectangle 49.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    link: "https://a.co/d/01RL87Q4",
  },
  {
    title: "God carried me",
    author: "Bertha Stumon",
    cover: "/home/Rectangle 50.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/084ustJB",
  },
  {
    title: "THE LABYRINTH",
    author: "Keith Cuvo",
    cover: "/home/Rectangle 52.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/0fpe2YQe",
  },
  {
    title: "El Color del Renacer",
    author: "Luz Diaz",
    cover: "/home/Rectangle 51.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/080ryfQM",
  },
  {
    title: "THE TIME CAPSULE MYSTERY",
    author: "Jenny Lynn",
    cover: "/home/Rectangle 53.webp",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0eaNfhXz",
  },
];

const INITIAL_VISIBLE_COUNT = 12;

const OurBook = () => {
  const visibleBooks = BOOKS.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="dm-sans text-lg font-semibold italic text-gray-600 sm:text-xl md:text-2xl">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-medium text-[#018752] goneva sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Illustrations That Bring Stories To Life
          </h2>
        </div>
      </section>

      {/* Books Grid Section */}
      <section className="w-full px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
          {visibleBooks.map((book, idx) => (
            <Link
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              key={`${book.title}-${idx}`}
              className="group flex w-full max-w-[300px] flex-col items-center text-center mx-auto"
            >
              {/* Book Cover */}
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg duration-300">
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title} by ${book.author}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 25vw, 300px"
                  loading="eager"
                  unoptimized
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-white/60 bg-white/20 px-5 py-2 text-xs font-semibold tracking-wider text-white shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:px-6 sm:py-2.5 sm:text-sm">
                    VIEW BOOK
                  </span>
                </div>
              </div>

              {/* Book Info */}
              <div className="mt-5 w-full px-2">
                {/* min-h ensures grid alignment stays perfect even if titles wrap to 1 vs 2 lines */}
                <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-tight text-gray-900 sm:min-h-[4rem] sm:text-xl">
                  {book.title}
                </h3>
                <span className="mt-2 block text-sm text-gray-600 sm:text-base">
                  {book.author}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center sm:mt-14 lg:mt-16">
          <Link
            href="/our-books"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-[#FDD118] px-6 py-3 text-sm font-semibold text-[#018752] shadow-md transition-all duration-300 hover:bg-[#ffd44f] hover:shadow-lg sm:px-8 sm:py-3.5 sm:text-base"
          >
            View All Books
            <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurBook;
