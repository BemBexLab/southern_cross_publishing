"use client";

import React from 'react';
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
    const handleCtaAction = () => {
        if (onCtaClick) onCtaClick();
    };

    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Hero background"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                {/* Optional overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Layer */}
            <div className="container mx-auto relative z-10 mt-10">
                <div className="max-w-4xl px-2">
                    <p className='goneva leading-[1.02] text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-[#F7F1D7] max-w-2xl'>
                        About Southern Cross Publishing: Australia's Trusted Self Publishing Company
                    </p>
                    <h1 className="goneva leading-[1.02] text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-[#F7F1D7] mt-8">
                        {title}
                    </h1>

                    <div className="space-y-6 text-md sm:text-lg text-gray-100 leading-tight sm:leading-relaxed max-w-2xl font-light mb-5 mt-2 sm:mt-8">
                        <p>{description}</p>
                    </div>

                    {ctaHref ? (
                        <a
                            href={ctaHref}
                            className="inline-flex items-center gap-3 bg-[#f5ce47] hover:bg-[#eac030] text-[#018752] font-bold py-3 px-5 rounded-lg shadow-xl transition-transform active:scale-95"
                        >
                            <FiPhoneCall className="text-2xl" />
                            <span className="text-lg">{ctaText}</span>
                        </a>
                    ) : (
                        <button
                            onClick={handleCtaAction}
                            className="flex items-center gap-3 bg-[#f5ce47] hover:bg-[#eac030] text-[#018752] font-bold py-3 px-5 rounded-lg shadow-xl transition-transform active:scale-95"
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