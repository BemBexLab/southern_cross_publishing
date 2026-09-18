import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type ReadyToPublishProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImageSrc?: string;
  illustrationSrc?: string;
  illustrationAlt?: string;
  ctaIcon?: React.ReactNode;
  sectionClassName?: string;
  backgroundLayerClassName?: string;
  containerClassName?: string;
  layoutClassName?: string;
  contentWrapperClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  ctaButtonClassName?: string;
  illustrationOuterClassName?: string;
  illustrationInnerClassName?: string;
  illustrationClassName?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
};

const ReadyToPublish = ({
  eyebrow = "Expert Non-Fiction Book Writing Services",
  title = "Ready to Publish? Let's Start With a Conversation.",
  description = "You do not need a finished manuscript, a publishing background, or any prior experience to reach out. Just bring your idea, your draft, or your story, and we will tell you honestly what it needs and how we can help. No sales pressure, no automated replies. Just a real conversation about your book.",
  ctaText = "Book Your Free Consultation Today",
  ctaHref = "/contact",
  backgroundImageSrc = "/publishing-services/dc171d58-b99f-4f30-8bee-5f356e9d63f9_removalai_preview.webp",
  illustrationSrc = "/publishing-services/Group (1).webp",
  illustrationAlt = "Creative thinking illustration",
  ctaIcon = <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1" />,
  sectionClassName = "relative overflow-hidden border-t border-green-800 bg-[#242424]",
  backgroundLayerClassName = "absolute inset-0 opacity-100 z-0 pointer-events-none",
  containerClassName = "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
  layoutClassName = "flex flex-col gap-10 pt-10 sm:gap-12 sm:pt-12 lg:flex-row lg:items-end lg:gap-12 lg:pt-20",
  contentWrapperClassName = "w-full text-left lg:w-1/2 lg:pb-20",
  eyebrowClassName = "dm-sans mb-3 text-base font-medium text-[#FDD118] sm:text-lg",
  titleClassName = "mb-4 max-w-2xl text-3xl leading-tight text-[#F7F1D7] sm:text-4xl lg:text-[2.75rem]",
  descriptionClassName = "dm-sans mb-8 max-w-2xl text-base leading-relaxed text-[#F7F1D7] sm:text-lg sm:leading-8 lg:mb-10",
  ctaButtonClassName = "group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#FDD118] px-5 py-3 font-bold text-[#018752] transition-all sm:w-auto sm:px-8 sm:py-4",
  illustrationOuterClassName = "flex w-full justify-center lg:w-1/2 lg:justify-end",
  illustrationInnerClassName = "relative z-30 -mb-8 -mt-4 w-full max-w-[420px] sm:-mb-10 sm:-mt-10 sm:max-w-[560px] lg:mb-0 lg:mt-0 lg:max-w-[800px] lg:translate-y-[15px]",
  illustrationClassName = "block h-auto w-full object-contain",
  backgroundPosition = "bottom center",
  backgroundRepeat = "repeat-x",
  backgroundSize = "contain",
}: ReadyToPublishProps) => {
  return (
    <section className={sectionClassName}>
      <div
        className={backgroundLayerClassName}
        style={{
          backgroundImage: `url('${backgroundImageSrc}')`,
          backgroundPosition,
          backgroundRepeat,
          backgroundSize,
        }}
      />

      <div className={containerClassName}>
        <div className={layoutClassName}>
          <div className={contentWrapperClassName}>
            <h3 className={eyebrowClassName}>{eyebrow}</h3>

            <h2 className={titleClassName}>{title}</h2>

            <p className={descriptionClassName}>{description}</p>

            <a href={ctaHref} className={ctaButtonClassName}>
              <span>{ctaText}</span>
              {ctaIcon}
            </a>
          </div>

          <div className={illustrationOuterClassName}>
            <div className={illustrationInnerClassName}>
              <img
                src={illustrationSrc}
                alt={illustrationAlt}
                className={illustrationClassName}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToPublish;
