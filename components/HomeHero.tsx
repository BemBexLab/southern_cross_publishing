import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HomeHero = () => {
  return (
    <section
      className="relative w-full h-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: 'url("/home/Mask group.png")',
        backgroundColor: "#018752",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />

      {/* Outer wrapper — matches original mx-15 and vertical padding */}
      <div className="relative flex flex-col justify-center px-5 pb-4 pt-20 sm:px-8 sm:pb-6 sm:pt-24 md:px-12 lg:mx-15 lg:px-0 lg:pb-8 lg:pt-28">

        {/* Two-column grid on lg+, single column below */}
        <div className="grid w-full items-center gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-14 2xl:gap-16">

          {/* ── Left column: heading + body + buttons ── */}
          <div className="flex flex-col gap-4 text-center sm:gap-5 lg:text-left">
            <h1 className="goneva text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Professional Book Publishing Services in Australia
            </h1>

            <div className="montserrat space-y-4 text-sm leading-7 text-white/90 sm:text-base lg:text-sm xl:text-base 2xl:text-lg 2xl:leading-8">
              <p>
                Australia's trusted self publishing company: ghostwriting,
                editing, design, distribution and marketing, all in one place.
              </p>
              <p>
                At Southern Cross Publishing, we assist you from writing to the
                final printed page. Are you holding a half finished manuscript,
                a voice note full of ideas, or a story you've carried for
                years? We are here to shape it into something the world will
                remember.
              </p>
              <p>
                We are an Australian based company, and work with authors
                across every genre, every background, and every stage of the
                writing journey.
              </p>
            </div>

            <div className="montserrat flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
              <Link
                href="/start"
                className="flex min-h-12 items-center justify-center gap-3 rounded-[8px] bg-[#f5c842] px-6 py-3 text-sm font-bold text-[#1a5c35] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd44f] hover:shadow-lg sm:px-7 sm:py-4 sm:text-[15px]"
              >
                Start Your Publishing Journey
                <FaArrowRight />
              </Link>
              <Link
                href="/services"
                className="flex min-h-12 items-center justify-center gap-3 rounded-[8px] border-2 border-[#f5c842] px-6 py-3 text-sm font-bold text-[#f5c842] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5c842] hover:text-[#1a5c35] hover:shadow-lg sm:px-7 sm:py-4 sm:text-[15px]"
              >
                Explore our services
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* ── Right column: book image ── */}
          <div className="order-first mx-auto w-full max-w-[260px] sm:max-w-[320px] md:max-w-[420px] lg:order-none lg:mx-0 lg:max-w-none">
            <div className="relative h-[260px] w-full sm:h-[320px] md:h-[420px] lg:h-[750px] xl:h-[720px] 2xl:h-[800px]">
              <Image
                src="/home/Hero Image 1.png"
                fill
                alt="Illustration for Southern Cross Publishing"
                className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                sizes="(max-width: 639px) 85vw, (max-width: 1023px) 60vw, (max-width: 1279px) 45vw, (max-width: 1535px) 500px, 620px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;