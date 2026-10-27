import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

interface HeroSectionProps {
  bgImage: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const HeroSection = ({
  bgImage,
  title,
  description,
  ctaText,
  ctaHref,
}: HeroSectionProps) => {
  const buttonClasses =
    "inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-lg bg-[#FDD118] px-4 py-3 sm:px-5 text-[#018752] font-bold shadow-xl transition-all duration-300 hover:bg-[#eac030] active:scale-95";

  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="absolute inset-0 z-0 scale-[1.08] sm:scale-[1.1] lg:scale-[1.12]">
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="w-full max-w-[950px] 2xl:max-w-[1100px]">
          <p className="goneva text-base leading-tight tracking-[2.3] text-[#F7F1D7] sm:text-lg md:text-xl xl:text-2xl">
            Crux Publishing House
          </p>

          <h1 className="goneva mt-4 max-w-5xl text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] text-[#F7F1D7] sm:mt-6 md:mt-7 lg:mt-8">
            {title}
          </h1>

          <div className="dm-sans mt-4 mb-6 max-w-4xl text-sm font-light leading-relaxed text-gray-100 sm:mt-6 sm:text-base md:mt-7 md:text-lg md:leading-relaxed lg:mt-8 lg:text-lg xl:text-xl 2xl:max-w-5xl">
            <p>{description}</p>
          </div>

          <Link href={ctaHref} className={buttonClasses}>
            <FiPhoneCall className="shrink-0 text-xl sm:text-2xl" />
            <span>{ctaText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
