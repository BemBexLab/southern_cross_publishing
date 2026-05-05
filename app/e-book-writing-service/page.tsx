import React from "react";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div className="relative isolate bg-[#F7F1D7]">
      <Hero
        title="E-Book Writing & Ghostwriting Services"
        description="At Ink Founders, we have expert eBook writing and ghostwriting services designed to convert your ideas into unique, engaging, and high-quality books from your ideas. Whether you have a rough concept or a detailed outline, our experienced writers create a publish-ready book with clarity, creativity, and precision."
        ctaText="Request a Call"
        ctaHref="/request-quote"
      />
    </div>
  );
};

export default page;
