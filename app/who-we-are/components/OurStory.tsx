import React from "react";
import Image from "next/image";

type OurStoryProps = {
  title?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  sectionClassName?: string;
  containerClassName?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  paragraphsWrapperClassName?: string;
  paragraphClassName?: string;
  imagePriority?: boolean;
};

export const defaultOurStoryParagraphs = [
  "Southern Cross Publishing was born from a simple but deeply held belief: every person with a story worth telling deserves access to professional publishing.",
  "We're proudly Australian. We understand the Australian reader, the Australian market, and what it takes to make a book succeed locally and globally. But we've always had our eyes on the wider world, because great stories don't stop at borders. Our work spans ghostwriting, professional book editing, cover design, ISBN registration, Amazon A+ content optimisation, global distribution across 40+ platforms, and full audiobook production.",
];

const OurStory = ({
  title = "Our Story",
  paragraphs = defaultOurStoryParagraphs,
  imageSrc = "/who-we-are/VIsion.webp",
  imageAlt = "Illustration of an open book with glasses",
  sectionClassName = "bg-[#F7F1D7] py-16 px-6 md:px-12 lg:px-24",
  containerClassName = "max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
  imageWrapperClassName = "relative w-full aspect-[2/1] flex items-center justify-center",
  imageClassName = "object-contain",
  contentClassName = "flex flex-col space-y-6",
  titleClassName = "goneva text-[#018752] text-3xl md:text-6xl",
  paragraphsWrapperClassName = "space-y-2 montserrat text-[#1F1F1F] text-lg leading-relaxed max-w-4xl",
  paragraphClassName = "",
  imagePriority = true,
}: OurStoryProps) => {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={imageWrapperClassName}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={imageClassName}
            priority={imagePriority}
          />
        </div>

        <div className={contentClassName}>
          <h2 className={titleClassName}>{title}</h2>

          <div className={paragraphsWrapperClassName}>
            {paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 24)}`} className={paragraphClassName}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
