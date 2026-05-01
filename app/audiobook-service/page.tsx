import LogoSlider from "@/components/LogoSlider";
import HeroSection from "../publishing-services/components/Hero";
import Section3 from "./component/Section3";


export default function Home() {
    return (
        <div className="relative isolate bg-[#F7F1D7]">

            <HeroSection
                bgImage="/publishing-services/Rectangle.webp"
                title="Professional Audiobook Production Services in Australia"
                description="Human narration, background scoring, and expert audio editing, everything your audiobook needs to compete on Audible, Apple Books, Spotify and beyond Audiobooks are one of the fastest growing formats in publishing today. Readers are listening on commutes, during workouts, before bed, and if your book is not available in audio, you are leaving a significant audience behind. Southern Cross Publishing handles the complete audiobook production process, from matching you with the right narrator to delivering a fully mastered, platform-ready audio file. You focus on your story. We handle everything that makes it listenable."
                ctaText=" Get a Free Audiobook Quote"
            />
            <LogoSlider />
            <Section3 />
        </div>
    );
}
