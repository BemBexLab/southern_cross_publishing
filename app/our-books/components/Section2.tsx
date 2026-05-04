"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const categories = ["All", "Fiction", "Non Fiction", "Biography", "Children Book"];

const books = [
  { id: 1, title: "Don't Cut the Grass on Sunday", src: "/our-books/books/Rectangle 21.webp" },
  { id: 2, title: "The Bee's Colony", src: "/our-books/books/Rectangle 47.webp" },
  { id: 3, title: "Growing Together", src: "/our-books/books/Rectangle 49.webp" },
  { id: 4, title: "Tales of the Hippie Dippie Gardener", src: "/our-books/books/Rectangle 50.webp" },
  { id: 5, title: "God Carried Me", src: "/our-books/books/Rectangle 51.webp" },
  { id: 6, title: "The Labyrinth", src: "/our-books/books/Rectangle 52.webp" },
  { id: 7, title: "El Color del Renacer", src: "/our-books/books/Rectangle 53.webp" },
  { id: 8, title: "The Time Capsule Mystery", src: "/our-books/books/Rectangle 54.webp" },
];

const Section2 = () => {
  const [activeTab, setActiveTab] = useState("Fiction");

  return (
    <section className="bg-[#E9E7C3] py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl text-center mb-12">
        <h2 className="font-serif text-[#1A3C34] text-3xl md:text-4xl mb-6">Our Books</h2>
        <p className="text-[#1A3C34]/80 text-sm md:text-base leading-relaxed">
          Every cover you see here started as an idea in someone&apos;s head. Some came to us as rough notes, others as half finished manuscripts, and 
          a few as nothing more than a conversation about what the author wanted to say. What you are looking at now is what happens when the 
          right team works alongside the right author: a finished, professionally published book that the world can actually hold and read.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="w-full max-w-5xl mb-16">
        <div className="flex flex-wrap justify-center md:justify-between border-b border-[#1A3C34]/20 pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`pb-4 px-4 text-sm md:text-base font-medium transition-all relative ${
                activeTab === cat ? "text-[#1A3C34]" : "text-[#1A3C34]/50"
              }`}
            >
              {cat}
              {activeTab === cat && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FFD22F] to-[#1A3C34]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full max-w-6xl mb-16">
        {books.map((book) => (
          <div key={book.id} className="flex flex-col items-center">
            {/* Book Image Container */}
            <div className="relative w-[200px] h-[300px] mb-6 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image
                src={book.src}
                alt={book.title}
                fill
                className="object-cover rounded-sm"
              />
            </div>
            {/* Placeholder Description */}
            <p className="text-center text-[#1A3C34]/70 text-xs md:text-sm max-w-[180px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button className="bg-[#FFD22F] text-[#1A3C34] font-bold py-3 px-10 rounded-md flex items-center gap-2 hover:bg-[#f5c820] transition-colors text-sm">
        View All
        <span className="text-lg">→</span>
      </button>
    </section>
  );
};

export default Section2;