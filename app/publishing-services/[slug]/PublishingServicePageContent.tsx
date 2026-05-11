import React from "react";
import Hero from "./components/Hero";
import BookConsultation from "./components/BookConsultation";
import WhyChoose from "./components/WhyChoose";
import GetInTouch from "@/components/GetInTouch";
import FAQs from "@/components/FAQs";
import type { PublishingServicePageData } from "./data";

interface PublishingServicePageContentProps {
  pageData: PublishingServicePageData;
}

const PublishingServicePageContent = ({
  pageData,
}: PublishingServicePageContentProps) => {
  const { hero, bookConsultation, whyChoose, getInTouch, faqs } = pageData;

  return (
    <div className="relative isolate bg-[#F7F1D7]">
      <Hero
        title={hero.title}
        description={hero.description}
        ctaText={hero.ctaText}
        ctaHref={hero.ctaHref}
      />
      <BookConsultation section={bookConsultation} />
      <WhyChoose section={whyChoose} />
      <GetInTouch
        title={getInTouch.title}
        subtitle={getInTouch.subtitle}
        paragraphs={getInTouch.paragraphs}
        formHeadline={getInTouch.formHeadline}
        ctaText={getInTouch.ctaText}
      />
      <FAQs
        eyebrow={faqs.eyebrow}
        title={faqs.title}
        items={faqs.items}
        initialOpenIndex={faqs.initialOpenIndex}
        columnGroups={faqs.columnGroups}
      />
    </div>
  );
};

export default PublishingServicePageContent;
