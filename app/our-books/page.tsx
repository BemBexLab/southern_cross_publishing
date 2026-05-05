import LogoSlider from "@/components/LogoSlider";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import GetInTouch from "@/components/GetInTouch";
import FAQs from "@/components/FAQs";
import ExpertNonFiction from "../publishing-services/components/ExpertNonFiction";

export default function Home() {
  return (
    <div className="relative isolate bg-[#F7F1D7]">
      <Hero />
      <LogoSlider />
      <Section2 />
      <Section3 />
      <GetInTouch
        title="Let us know if anything needed. Searching of any guidance from an expert?"
        subtitle="Have a conversation"
        paragraphs={["You have taken a step towards the journey of success in self-publishing but still have a lot to ask? And searching for an expert's guidance who can help you in bring your ideas, and voice to reality, but haven't found anyone, then you are at the right place. Ink Founders is for you.", "Ink Founders provide a free discussion opportunity where you can clear your doubts, share your story ideas or concepts, and get the exploration trip to examine our services clearly and can find out how we can provide you with the best by turning your words into book form. So, let's take a step and join us today."]}
      />
      <FAQs />
      <ExpertNonFiction
        eyebrow="Expert Non-Fiction Book Writing Services"
        title="Let Southern Cross take the hassle out of publishing, so you can focus on your story"
        description="You wrote it. You lived it. Now, let us handle everything that comes after that. From the first edit to the final listing on Amazon, our team quietly takes care of the process while you stay focused on what matters: your words."
        ctaText="Get Your Free Publishing Quote Today"
        ctaHref="/contact"
      />
    </div>
  );
}
