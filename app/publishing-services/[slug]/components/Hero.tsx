import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

interface HeroProps {
  title: string;
  description: string | ReactNode;
  ctaText: string;
  ctaHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero = ({
  title,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt = "E-book writing service illustration",
}: HeroProps) => {
  const ctaClassName =
    "mt-7 flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-md bg-[#FDD118] px-5 py-3 text-center text-sm font-medium text-[#018752] shadow-[0_14px_30px_rgba(210,176,49,0.28)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 sm:mt-8 sm:w-fit sm:px-6 sm:text-base";

  return (
    <section className="relative isolate flex min-h-[680px] w-full items-start overflow-hidden bg-[#F7F1D7] pt-[clamp(6.5rem,16vw,8rem)] pb-10 sm:min-h-[760px] sm:pt-28 sm:pb-16 lg:min-h-[760px] lg:items-center lg:py-20 xl:min-h-[820px] xl:py-24">
      <div className="absolute inset-0 z-0 scale-[1.12] transform-gpu">
        <Image
          src="/ebook-services/Mask group.webp"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#F7F1D7]/10" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] min-w-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div
          className={`grid min-w-0 items-start gap-8 sm:gap-10 lg:items-center lg:gap-10 xl:gap-16 ${imageSrc ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : "grid-cols-1"}`}
        >
          <div className="min-w-0 w-full">
            <h1 className="goneva max-w-[16ch] text-balance text-[clamp(2.25rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em] text-[#018752]">
              {title}
            </h1>

            {imageSrc ? (
              <div className="relative mx-auto mt-7 w-full max-w-[38rem] lg:hidden">
                <div className="relative aspect-[1.02/0.88] w-full">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 640px) 80vw, 100vw"
                    className="object-contain object-center"
                    loading="eager"
                  />
                </div>
              </div>
            ) : null}

            <div className="dm-sans mt-7 w-full max-w-[64ch] space-y-5 break-words text-[clamp(1rem,1.5vw,1.2rem)] font-medium leading-[1.55] text-[#1F1F1F] sm:mt-8 sm:space-y-6 lg:mt-7">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>

            <Link href={ctaHref} className={ctaClassName}>
              <FiPhoneCall className="shrink-0 text-xl sm:text-2xl" />
              <span className="whitespace-normal sm:whitespace-nowrap">{ctaText}</span>
            </Link>
          </div>

          {imageSrc ? (
            <div className="relative hidden w-full min-w-0 max-w-[42rem] justify-self-center lg:block">
              <div className="relative aspect-[1.02/0.88] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 45vw"
                  className="object-contain object-center"
                  loading="eager"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
