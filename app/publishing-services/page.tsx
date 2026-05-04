import LogoSlider from "@/components/LogoSlider";
import HeroSection from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";

export default function Home() {
    return (
        <div className="relative isolate bg-[#F7F1D7]">

            <HeroSection
                bgImage="/publishing-services/Rectangle.webp"
                title="Complete Book Publishing Services in Australia"
                description="From manuscript evaluation to global distribution, everything your book needs, handled by one dedicated team. Southern Cross Publishing brings together every skill your book needs under one roof, from the very first editorial pass to the day your book goes live on 40+ global platforms."
                ctaText="Request a Call"
            />
            <LogoSlider />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
        </div>
    );
}
