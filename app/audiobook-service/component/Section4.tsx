"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    Point:
      "We start with your manuscript and your vision Before anything is recorded, we sit down with you to understand your book, your target listener, and the kind of listening experience you want to create. This shapes every decision that follows — from narrator selection to scoring choices.",
  },
  {
    Point:
      "We match you with the right narrator Based on your genre, tone, and preferences, we shortlist professional narrators and send you sample auditions. You listen, you choose, and we move forward only once you are confident in the voice that will bring your book to life.",
  },
  {
    Point:
      "Recording begins, chapter by chapter Your narrator records the full manuscript in a professional studio environment. Raw recordings are sent to you at key checkpoints so you can flag anything that needs to be re-recorded before editing begins.",
  },
  {
    Point:
      "Our audio engineers edit and score Your recordings go through our full editing process, word by word, track by track. Background scoring is added where appropriate and mixed carefully against the narration. The audio is then mastered to broadcast quality.",
  },
  {
    Point:
      "You review and approve the final product We send you the completed audiobook before it goes anywhere. You listen, request any final adjustments, and give your approval. Nothing is submitted for distribution without your sign-off.",
  },
  {
    Point:
      "We distribute across every major platform Once you are satisfied, we handle the full distribution submission: Audible, Amazon, Apple Books, Spotify, Google Play, and more. We manage the metadata, keywords, book description, and cover image resizing so your audiobook is listed correctly and discoverable from day one.",
  },
];

const Section4 = () => {
  return (
    <section className="overflow-hidden bg-[#EAE5CC]">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-10 text-[#1A3C34] sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16 xl:px-12 xl:py-20 2xl:px-16">
        
        {/* Eyebrow */}
        <div className="mb-3 sm:mb-4">
          <p className="dm-sans text-base font-semibold italic text-black sm:text-lg md:text-xl lg:text-2xl">
            How It Works
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-10 xl:gap-14 2xl:gap-16">
          
          {/* Left Column */}
          <div className="flex min-w-0 flex-col lg:h-[560px] xl:h-[600px] 2xl:h-[640px]">
            
            <h2 className="goneva mb-5 max-w-3xl text-[30px] leading-[1.15] text-[#018752] sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] 2xl:text-6xl">
              How We Produce Your Audiobook: Step by Step
            </h2>

            {/* Steps */}
            <div
              className="section4-scroll space-y-4 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-4 xl:pr-6"
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  {/* Bullet */}
                  <span className="mt-[7px] shrink-0 text-lg leading-none text-[#018752] sm:mt-[8px]">
                    •
                  </span>

                  <p className="dm-sans text-sm leading-6 text-gray-800 sm:text-base sm:leading-7 md:text-[17px] md:leading-8 lg:text-base lg:leading-7 xl:text-lg xl:leading-8">
                    {step.Point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full items-center justify-center">
            <div
              className="relative h-[300px] w-full max-w-[650px] sm:h-[380px] md:h-[460px] lg:h-full lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[620px]"
            >
              <Image
                src="/audiobook-service/Frame.webp"
                alt="Audiobook production process illustration"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1023px) 90vw, 48vw"
                className="object-contain object-center lg:object-top"
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
