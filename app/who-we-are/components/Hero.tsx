"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";

interface HeroSectionProps {
    bgImage: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref?: string;
    onCtaClick?: () => void;
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
            className="relative min-h-screen w-full flex items-center overflow-hidden"
        >
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
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="container mx-auto relative z-10 mt-10">
                <div className="max-w-5xl px-2">
                    <p className='goneva leading-[1.02] text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-[#F7F1D7] max-w-3xl'>
                        About Southern Cross Publishing: Australia's Trusted Self Publishing Company
                    </p>
                    <h1 className="goneva leading-[1.02] text-4xl md:text-6xl text-[#F7F1D7] mt-8">
                        {title}
                    </h1>

                    <div className="space-y-6 text-md sm:text-lg text-gray-100 leading-tight sm:leading-relaxed max-w-4xl font-light mb-5 mt-2 sm:mt-8">
                        <p>{description}</p>
                    </div>

                    {ctaHref ? (
                        <a
                            href={ctaHref}
                            className="inline-flex items-center gap-3 bg-[#FDD118] hover:bg-[#eac030] text-[#018752] font-bold py-3 px-5 rounded-lg shadow-xl transition-transform active:scale-95"
                        >
                            <FiPhoneCall className="text-2xl" />
                            <span className="text-lg">{ctaText}</span>
                        </a>
                    ) : (
                        <button
                            onClick={handleCtaAction}
                            className="flex items-center gap-3 bg-[#FDD118] hover:bg-[#eac030] text-[#018752] font-bold py-3 px-5 rounded-lg shadow-xl transition-transform active:scale-95"
                        >
                            <FiPhoneCall className="text-2xl" />
                            <span className="text-lg">{ctaText}</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
