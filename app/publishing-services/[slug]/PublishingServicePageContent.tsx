import React from "react";
import MotionSection from "@/components/MotionSection";
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
      <MotionSection delay={0.02} distance={18}>
        <Hero
          title={hero.title}
          description={hero.description}
          ctaText={hero.ctaText}
          ctaHref={hero.ctaHref}
          imageSrc={hero.imageSrc}
          imageAlt={hero.imageAlt}
        />
      </MotionSection>
      <MotionSection delay={0.06}>
        <BookConsultation section={bookConsultation} />
      </MotionSection>
      <MotionSection delay={0.05}>
        <WhyChoose section={whyChoose} />
      </MotionSection>
      <MotionSection delay={0.04}>
        <GetInTouch
          title={getInTouch.title}
          subtitle={getInTouch.subtitle}
          paragraphs={getInTouch.paragraphs}
          formHeadline={getInTouch.formHeadline}
          ctaText={getInTouch.ctaText}
        />
      </MotionSection>
      <MotionSection delay={0.04}>
        <FAQs
          eyebrow={faqs.eyebrow}
          title={faqs.title}
          items={faqs.items}
          initialOpenIndex={faqs.initialOpenIndex}
          columnGroups={faqs.columnGroups}
        />
      </MotionSection>
    </div>
  );
};

export default PublishingServicePageContent;
