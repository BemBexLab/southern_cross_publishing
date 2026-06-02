"use client"

import React from 'react';
import Image from 'next/image';

const steps = [
    {
        Point: "We start with your manuscript and your vision Before anything is recorded, we sit down with you to understand your book, your target listener, and the kind of listening experience you want to create. This shapes every decision that follows — from narrator selection to scoring choices."
    },
    {
        Point: "We match you with the right narrator Based on your genre, tone, and preferences, we shortlist professional narrators and send you sample auditions. You listen, you choose, and we move forward only once you are confident in the voice that will bring your book to life."
    },
    {
        Point: "Recording begins, chapter by chapter Your narrator records the full manuscript in a professional studio environment. Raw recordings are sent to you at key checkpoints so you can flag anything that needs to be re-recorded before editing begins."
    },
    {
        Point: "Our audio engineers edit and score Your recordings go through our full editing process, word by word, track by track. Background scoring is added where appropriate and mixed carefully against the narration. The audio is then mastered to broadcast quality."
    },
    {
        Point: "You review and approve the final product We send you the completed audiobook before it goes anywhere. You listen, request any final adjustments, and give your approval. Nothing is submitted for distribution without your sign-off."
    },
    {
        Point: "We distribute across every major platform Once you are satisfied, we handle the full distribution submission: Audible, Amazon, Apple Books, Spotify, Google Play, and more. We manage the metadata, keywords, book description, and cover image resizing so your audiobook is listed correctly and discoverable from day one."
    }
];

const Section4 = () => {
    return (
        <section className='bg-[#EAE5CC]'>
            <div className="max-w-[1800px] mx-auto min-h-screen py-16 px-2 sm:px-6 text-[#1A3C34]">
            {/* Eyebrow */}
            <div className="mb-4">
                <p className=" text-2xl montserrat italic font-semibold text-black">How It Works</p>
            </div>

            <div className="grid grid-cols-1 gap-16 items-start lg:grid-cols-2 lg:items-stretch">
                {/* Left Column: Text Content */}
                <div className="flex flex-col lg:h-[530px]">
                    <h2 className="text-3xl md:text-5xl goneva leading-tight mb-5 max-w-3xl text-[#018752]">
                        How We Produce Your Audiobook: Step by Step
                    </h2>

                    <div className="section4-scroll space-y-2 lg:min-h-0 lg:flex-1 lg:overflow-y-scroll lg:pr-4">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start">
                                {/* Custom Bullet Point */}
                                <span className="mt-2 mr-4 text-xs">•</span>
                                <p className="text-xl leading-relaxed text-gray-800">
                                    {step.Point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Illustration */}
                <div className="relative flex flex-col  w-full h-full min-h-[450px] lg:min-h-[600px]">
                    <div className="relative w-full flex-grow">
                        {/* 
      Note: Ensure the referenced image asset is placed in your /public folder.
      If you have a cropped version of just the girl/phone, use that path here.
    */}
                        <Image
                            src="/audiobook-service/Frame.webp"
                            alt="Audiobook production process illustration"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain object-top"
                        />
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
          .section4-scroll {
            scrollbar-width: thin;
            scrollbar-color: rgba(176, 190, 185, 0.45) transparent;
          }

          .section4-scroll:hover,
          .section4-scroll:focus-within {
            scrollbar-color: rgba(1, 135, 82, 0.9) transparent;
          }

          .section4-scroll::-webkit-scrollbar {
            width: 6px;
          }

          .section4-scroll::-webkit-scrollbar-track {
            background: transparent;
          }

          .section4-scroll::-webkit-scrollbar-thumb {
            background: rgba(1, 135, 82, 0.45);
            border-radius: 999px;
          }

          .section4-scroll:hover::-webkit-scrollbar-thumb,
          .section4-scroll:focus-within::-webkit-scrollbar-thumb {
            background: rgba(1, 135, 82, 0.9);
          }
        `}</style>
        </section>
    );
};

export default Section4;
