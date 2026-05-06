"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider";
import { FaArrowRight } from "react-icons/fa";

// Add "Fiction" to tags if you want them to show under Fiction filter.
export const BOOKS = [
  {
    title: "DON'T CUT the GRASS on Sunday",
    author: "K.Stephen Jumper",
    cover: "/home/Rectangle 21.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/0ee4hTIt",
  },
  {
    title: "The Bee's Colony, The Rise of the New Queen",
    author: "Joel B.Gindo",
    cover: "/home/Rectangle 47.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/03dFgTaS",
  },
  {
    title: "Growing together",
    author: "Allison Sullins",
    cover: "/home/Rectangle 48.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0h1r5jAM",
  },
  {
    title: "Tales of the Hippie Dippie Gardener",
    author: "Jim Fritz",
    cover: "/home/Rectangle 49.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Fiction"],
    link: "https://a.co/d/01RL87Q4",
  },
  {
    title: "God carried me",
    author: "Bertha Stumon",
    cover: "/home/Rectangle 50.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/084ustJB",
  },
  {
    title: "THE LABYRINTH",
    author: "Keith Cuvo",
    cover: "/home/Rectangle 52.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Non Fiction"],
    link: "https://a.co/d/0fpe2YQe",
  },
  {
    title: "El Color del Renacer",
    author: "Luz Diaz",
    cover: "/home/Rectangle 51.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Biography"],
    link: "https://a.co/d/080ryfQM",
  },
  {
    title: "THE TIME CAPSULE MYSTERY",
    author: "Jenny Lynn",
    cover: "/home/Rectangle 53.png",
    date: "6-July-2023",
    genre: "Novel",
    tags: ["Children Book"],
    link: "https://a.co/d/0eaNfhXz",
  },
];

const INITIAL_VISIBLE_COUNT = 12;

const OurBook = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refreshHard();
  }, []);

  const visibleBooks = BOOKS.slice(0, INITIAL_VISIBLE_COUNT);
  return (
    <AOSProvider>

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-center montserrat font-semibold italic text-2xl">
            Our Work
          </p>
          <h2 className="text-center text-[#018752] goneva font-medium mt-5 text-5xl">Illustrations That Bring Stories To Life</h2>
      </section>

      <section className="flex w-full flex-col items-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Cards Grid */}
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 justify-items-center gap-x-6 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-24">
          {visibleBooks.map((book, idx) => (
            <Link
              href={book.link}
              data-aos="fade-up"
              key={`${book.title}-${idx}`}
              className="group flex w-full max-w-[260px] flex-col items-center text-center"
            >
              {/* Book Cover */}
              <div className="relative mb-4 h-[300px] w-[190px] overflow-hidden sm:h-[330px] sm:w-[210px] lg:h-[350px] lg:w-[225px]">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover shadow-md transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-white/10 px-5 pb-6 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-white/50 bg-white/20 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
                    VIEW BOOK
                  </span>
                </div>
              </div>
              {/* Book Title */}
              <h3 className="mb-0.5 w-full max-w-[230px] truncate text-[18px] font-bold text-black sm:text-[20px] lg:w-[180px] lg:text-[22px]">
                {book.title}
              </h3>
              {/* Author */}
              <span className="mb-2 block text-[14px] text-[#444] sm:text-[15px]">
                {book.author}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="rounded-md montserrat bg-[#FDD118] px-6 py-3 text-sm text-[#018752] font-semibold transition hover:opacity-90"
          >
            View All <FaArrowRight className="ml-2 inline-block" />
          </Link>
        </div>
      </section>
    </AOSProvider>
  );
};

export default OurBook;
