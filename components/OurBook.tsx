"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const BOOKS = [
  {
  title: "In the Arms of the Ordinary: A Journey Back to Myself",
  author: "Heather Pelletier",
  cover: "https://m.media-amazon.com/images/I/71T2WaWo5JL._SY466_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Biography / Autobiography"],
  // link: "https://a.co/d/0eKnGbwb",
},
{
  title: "The Informant’s Wife: A memoir of love and lies",
  author: "Colitha Bush",
  cover: "https://m.media-amazon.com/images/I/81S3kbKx3cL._SL1500_.jpg",
  date: "",
  genre: "Biography / Autobiography",
  tags: ["Biography / Autobiography"],
  // link: "https://a.co/d/0bJnBPmR",
},
{
  title: "The Enduring Echo",
  author: "E. Harlod Luce",
  cover: "https://m.media-amazon.com/images/I/71JQdMlKrtL._SL1499_.jpg",
  date: "",
  genre: "Biography / Autobiography",
  tags: ["Biography / Autobiography"],
  // link: "https://a.co/d/05NHVpbu",
},
{
  title: "Soft Boy Hard World",
  author: "Kerrick Montonio",
  cover: "https://m.media-amazon.com/images/I/71atDiIqjiL._SL1491_.jpg",
  date: "",
  genre: "Biography / Autobiography",
  tags: ["Biography / Autobiography"],
  // link: "https://a.co/d/0d54QhSw",
},
{
  title: "JOLTED BY A COMMON THREAT, WE UNITED",
  author: "Shalom Brenner, Marsha Bensoussan",
  cover: "https://m.media-amazon.com/images/I/615kVTq1xqL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Biography / Autobiography"],
  // link: "https://a.co/d/0hVJtl99",
},
{
  title: "Moments: A song without notes",
  author: "Joseph Colao",
  cover: "https://m.media-amazon.com/images/I/51jKFv1B8hL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Biography / Autobiography"],
  // link: "https://a.co/d/0asn4WpW",
},
{
  title: "Made for More: Because You Were Never Meant to Settle for Less",
  author: "Nonye Ejiofor",
  cover: "https://m.media-amazon.com/images/I/71P1CKX55zL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Biography / Autobiography"],
  // link: "https://a.co/d/0dx2e6op",
},
{
  title: "Whisker's Bedtime Adventures: Tales From the Meadow",
  author: "Donna G Fowler",
  cover: "https://m.media-amazon.com/images/I/81lmnPVD4zL._SL1430_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Children Book"],
  // link: "https://a.co/d/01xzHWyC",
},
{
  title: "Word Detective: Grade 4 Ages 9-10 Word Study and Sentence Practice Workbook",
  author: "Alma English",
  cover: "https://m.media-amazon.com/images/I/71JcpUKIGWL._SL1293_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Children Book"],
  // link: "https://a.co/d/06twlcFV",
},
{
  title: "Princess Kitsune: An enchanting fantasy tale inspired by Japanese folktales and legends",
  author: "Hikari Miyanami",
  cover: "https://m.media-amazon.com/images/I/71hUcGLKf-L._SL1500_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Children Book"],
  // link: "https://a.co/d/0csMvk3u",
},
{
  title: "Catch the Wind: A Story of Grief, Courage & Love",
  author: "Michele LaPlante",
  cover: "https://m.media-amazon.com/images/I/61AQ-dfaT8L._SL1000_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Children Book"],
  // link: "https://a.co/d/0fC43ayi",
},
{
  title: "The Sky Still Has Stars: A Book For Kids Who Lost A Parent",
  author: "Aaron Scallen",
  cover: "https://m.media-amazon.com/images/I/61rVZEVfIUL._SL1000_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Children Book"],
  // link: "https://a.co/d/08DH1TpA",
},
{
  title: "My Dear Son: A Love Letter From a Mother to Her Son",
  author: "Alicia Marie",
  cover: "https://m.media-amazon.com/images/I/7155dyCnFiL._SL1000_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Children Book"],
  // link: "https://a.co/d/05YDcnn3",
},
{
  title: "The Bearded Robber: One robber. Endless escapes.",
  author: "Noah Scott",
  cover: "https://m.media-amazon.com/images/I/71-kRZspLJL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Children Book"],
  // link: "https://a.co/d/0jfLcOx6",
},
{
  title: "Johnny And The Little Green Dino",
  author: "Matthew Curtis",
  cover: "https://m.media-amazon.com/images/I/614LZrNjxPL._SL1000_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Children Book"],
  // link: "https://a.co/d/0cM0GR7d",
},
{
  title: "Unpaved: Heartbreak, road trips, and the detours that change us",
  author: "Ashley Christine Cole",
  cover: "https://m.media-amazon.com/images/I/71RJJ1U2wjL._SL1500_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Fiction"],
  // link: "https://a.co/d/0803PoKX",
},
{
  title: "Silence speaks more than words",
  author: "Kenel Edouard",
  cover: "https://m.media-amazon.com/images/I/51+qdUixg1L._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Fiction"],
  // link: "https://a.co/d/0gV3vyjy",
},
{
  title: "Little Dorrit: A Child of the Marshalsea, a Family Buried in Debt, and the Cruelty of Wealth and Power",
  author: "Charles Dickens, Heritage Ink Publishing",
  cover: "https://m.media-amazon.com/images/I/7106jmCwIQL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Fiction"],
  // link: "https://a.co/d/0b1ZpXJC",
},
{
  title: "Nanomancer: The Waking System - I",
  author: "R. R. Clark",
  cover: "https://m.media-amazon.com/images/I/714mg5w-Y0L._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Fiction"],
  // link: "https://a.co/d/03cvvvUd",
},
{
  title: "365 Catholic Hymns for the Soul: Year of Beloved Traditional, Contemporary, and Sacred Catholic Hymns with Daily Scriptures, Prayers, Reflections, and Meditations for Faith, Hope, Worship",
  author: "Rev. Fr. Francis Casey",
  cover: "https://m.media-amazon.com/images/I/71WKCBqjiaL._SL1280_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Fiction"],
  // link: "https://a.co/d/09sigANb",
},
{
  title: "Scars",
  author: "Lily Ferguson",
  cover: "https://m.media-amazon.com/images/I/61xWR0HZMjL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Fiction"],
  // link: "https://a.co/d/0aPDCyPF",
},
{
  title: "The Science of Sauna: Essential Oils in the Sauna - A Professional Guide to Safe Aroma Use, Air Quality and Health-Oriented Aufguss Practice",
  author: "Dr. Karsten Gröning",
  cover: "https://m.media-amazon.com/images/I/71lJROwFJjL._SL1413_.jpg",
  date: "",
  genre: "Non-Fiction",
  tags: ["Non Fiction"],
  // link: "https://a.co/d/0cH3qYq4",
},
{
  title: "How To Thrive Without Burnout: The Mind Shift Method",
  author: "Dr. Bettina Marie Mrusek",
  cover: "https://m.media-amazon.com/images/I/61Y-R3cMEFL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Non Fiction"],
  // link: "https://a.co/d/09AYWM3E",
},
{
  title: "When the Body Changes, God Remains: A Christian Guide to Finding Hope, Peace, and Strength Through Perimenopause and Menopause",
  author: "Arabella Rosewood",
  cover: "https://m.media-amazon.com/images/I/71cG+sPgTOL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Non Fiction"],
  // link: "https://a.co/d/0hKBwYBR",
},
{
  title: "What Happened in World History 1976 The Year You Were Born: Back in 1976, Major Events, Culture, Technology, Economy, Sports & Cost of Living, Famous Leaders, 70's Slangs",
  author: "Curious Chrony",
  cover: "https://m.media-amazon.com/images/I/71TMHST8q+L._SL1491_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Non Fiction"],
  // link: "https://a.co/d/01fCRo99",
},
{
  title: "Denver Airport Conspiracy Machine: Denver Airport, Hidden Art, Bunkers, and the Conspiracy Theories That Captivate Conspiracy Theorists",
  author: "Rowan K. Ravenscroft",
  cover: "https://m.media-amazon.com/images/I/81ZFLC5NN8L._SL1500_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Non Fiction"],
  // link: "https://a.co/d/05hYYPzr",
},
{
  title: "KEWANEE, ILLINOIS: Reflections on its First Years 1854-1865",
  author: "Dean R. Karau",
  cover: "https://m.media-amazon.com/images/I/61e2ZiqkkqL._SL1293_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Non Fiction"],
  // link: "https://a.co/d/0eL1dno1",
},
{
  title: "Gracefully Broken: A 31-Day Devotional & Prayer Journal",
  author: "Barbara (Mimi) Seymour",
  cover: "https://m.media-amazon.com/images/I/71UGx7w0wJL._SL1499_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Non Fiction"],
  // link: "https://a.co/d/0bM74Jpd",
},
{
  title: "Faith and Focus: A Christian Student Guide to Thriving in College",
  author: "DR. S E Amenumey",
  cover: "https://m.media-amazon.com/images/I/71z1jjPLt2L._SL1491_.jpg",
  date: "",
  genre: "Novel",
  tags: ["Non Fiction"],
  // link: "https://a.co/d/0hFNN7bX",
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
            <div
              rel="noopener noreferrer"
              key={`${book.title}-${idx}`}
              className="group flex w-full max-w-[300px] flex-col items-center text-center mx-auto"
            >
              {/* Book Cover */}
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg duration-300">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex flex-col items-center justify-between bg-gradient-to-br from-[#078c52] via-[#05643f] to-[#16352b] px-5 py-7 text-center text-[#fff8de]"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em]">
                    CRUX PUBLISHING
                  </span>
                  <span className="line-clamp-5 text-base font-bold leading-tight sm:text-lg">
                    {book.title}
                  </span>
                  <span className="line-clamp-2 text-xs tracking-wide">
                    {book.author}
                  </span>
                </div>
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title} by ${book.author}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 25vw, 300px"
                  loading="eager"
                  unoptimized
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Book Info */}
              <div className="mt-5 w-full px-2">
                <h3
                  title={book.title}
                  className="h-7 truncate text-lg font-bold leading-tight text-gray-900 sm:h-8 sm:text-xl"
                >
                  {book.title}
                </h3>
                <span className="mt-2 block text-sm text-gray-600 sm:text-base">
                  {book.author}
                </span>
              </div>
            </div>
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
