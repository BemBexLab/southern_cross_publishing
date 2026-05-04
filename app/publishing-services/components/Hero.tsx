"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";

interface HeroSectionProps {
    bgImage: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref?: string; // Optional: if you want to make it a link instead of button
    onCtaClick?: () => void; // Optional: click handler
}

const HeroSection: React.FC<HeroSectionProps> = ({
    bgImage,
    title,
    description,
    ctaText,
    ctaHref,
    onCtaClick,
}) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        let frame = 0;

        const updateParallax = () => {
            frame = 0;

            if (!sectionRef.current) {
                return;
            }

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = viewportHeight / 2;
            const distanceFromCenter = sectionCenter - viewportCenter;

            setOffsetY(distanceFromCenter * -0.12);
        };

        const onScroll = () => {
            if (frame) {
                return;
            }

            frame = window.requestAnimationFrame(updateParallax);
        };

        updateParallax();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);

            if (frame) {
                window.cancelAnimationFrame(frame);
            }
        };
    }, []);

    const handleCtaAction = () => {
        if (onCtaClick) onCtaClick();
    };

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-[720px] w-full items-center overflow-hidden sm:min-h-[820px] lg:min-h-screen"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 scale-[1.12] will-change-transform"
                style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)` }}
            >
                <img
                    src={bgImage}
                    alt="Hero background"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                {/* Optional overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/45 sm:bg-black/40" />
            </div>

            {/* Content Layer */}
            <div className="container relative z-10 mx-auto w-full px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-30">
                <div className="max-w-[1180px]">
                    <h1 className="goneva text-[2.4rem] leading-[0.98] text-[#F7F1D7] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-[5.25rem]">
                        {title}
                    </h1>

                    <div className="montserrat mt-4 max-w-[1100px] space-y-6 text-base font-medium leading-relaxed text-gray-100 sm:mt-6 sm:text-lg lg:mt-8 lg:text-xl">
                        <p>{description}</p>
                    </div>

                    {ctaHref ? (
                        <a
                            href={ctaHref}
                            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#FDD118] px-5 py-3 text-base font-bold text-[#018752] shadow-xl transition-transform active:scale-95 sm:mt-10 sm:px-6 sm:text-lg"
                        >
                            <FiPhoneCall className="text-xl sm:text-2xl" />
                            <span>{ctaText}</span>
                        </a>
                    ) : (
                        <button
                            onClick={handleCtaAction}
                            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#FDD118] px-5 py-3 text-base font-bold text-[#018752] shadow-xl transition-transform active:scale-95 sm:mt-10 sm:px-6 sm:text-lg"
                        >
                            <FiPhoneCall className="text-xl sm:text-2xl" />
                            <span>{ctaText}</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
