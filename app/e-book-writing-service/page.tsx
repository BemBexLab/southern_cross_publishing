import React from "react";
import Hero from "./components/Hero";
import BookConsultation from "./components/BookConsultation";
import WhyChoose from "./components/WhyChoose";
import GetInTouch from "@/components/GetInTouch";
import FAQs from "@/components/FAQs";

const page = () => {
  return (
    <div className="relative isolate bg-[#F7F1D7]">
      <Hero
        title="E-Book Writing & Ghostwriting Services"
        description="At Ink Founders, we have expert eBook writing and ghostwriting services designed to convert your ideas into unique, engaging, and high-quality books from your ideas. Whether you have a rough concept or a detailed outline, our experienced writers create a publish-ready book with clarity, creativity, and precision."
        ctaText="Request a Call"
        ctaHref="/request-quote"
      />
      <BookConsultation />
      <WhyChoose />
      <GetInTouch
        title="Let us know if anything needed. Searching of any guidance from an expert?"
        subtitle="Have a conversation"
        paragraphs={["You have taken a step towards the journey of success in self-publishing but still have a lot to ask? And searching for an expert's guidance who can help you in bring your ideas, and voice to reality, but haven't found anyone, then you are at the right place. Ink Founders is for you.", "Ink Founders provide a free discussion opportunity where you can clear your doubts, share your story ideas or concepts, and get the exploration trip to examine our services clearly and can find out how we can provide you with the best by turning your words into book form. So, let's take a step and join us today."]}
      />
      <FAQs />
    </div>
  );
};

export default page;
