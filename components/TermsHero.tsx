import React from "react";

type TermsHeroProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
};

export default function TermsHero({
  title,
  description,
}: TermsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#018752] min-h-[50vh] pt-20">
      <div className="absolute" />
      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="items-center">
          <div className="max-w-3xl">
            <span className="montserrat inline-flex items-center rounded-full border border-[#018752]/15 bg-white/85 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#018752] shadow-[0_10px_30px_rgba(1,135,82,0.08)]">
              Southern Cross Publishing
            </span>

            <h1 className="goneva mt-6 text-4xl leading-[0.95] text-white sm:text-5xl lg:text-7xl">
              {title}
            </h1>

            <p className="montserrat mt-6 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
