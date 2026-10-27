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
    "mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#FDD118] px-5 py-3 text-sm font-medium text-[#018752] shadow-[0_14px_30px_rgba(210,176,49,0.28)] transition-transform active:scale-95 sm:mt-8 sm:px-6 sm:text-base";

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0 scale-[1.12]">
        <Image
          src="/ebook-services/Mask group.webp"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-24 xl:px-10">
        <div className={`grid items-center gap-8 lg:gap-6 xl:gap-8 ${imageSrc ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}>
          <div className="w-full max-w-none">
            <h1 className="goneva max-w-none text-4xl leading-tight text-[#018752] sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            {imageSrc ? (
              <div className="relative mx-auto mt-6 w-full max-w-xl lg:hidden">
                <div className="relative aspect-[1.02/0.88] w-full">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="100vw"
                    className="object-contain object-center"
                    loading="eager"
                  />
                </div>
              </div>
            ) : null}

            <div className="dm-sans mt-6 max-w-none space-y-6 text-lg font-medium leading-relaxed text-[#1F1F1F] lg:mt-7">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>

            <Link href={ctaHref} className={ctaClassName}>
              <FiPhoneCall className="text-xl sm:text-2xl" />
              <span>{ctaText}</span>
            </Link>
          </div>

          {imageSrc ? (
            <div className="relative hidden w-full max-w-none lg:block">
              <div className="relative aspect-[1.02/0.88] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 44vw"
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
