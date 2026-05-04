import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";


export default function Home() {
    return (
        <div className="relative isolate bg-[#F7F1D7]">
             <Hero />  
             <Section2 />
             <Section3 />

        </div>
    );
}
