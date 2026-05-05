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
      <GetInTouch />
      <FAQs />
      <ExpertNonFiction
        eyebrow="Expert Non-Fiction Book Writing Services"
        title="Let Southern Cross take the hassle out of publishing, so you can focus on your story"
        description="You wrote it. You lived it. Now, let us handle everything that comes after that. From the first edit to the final listing on Amazon, our team quietly takes care of the process while you stay focused on what matters: your words."
        ctaText="Get Your Free Publishing Quote Today"
      />
    </div>
  );
}
