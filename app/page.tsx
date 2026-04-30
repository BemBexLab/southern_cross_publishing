import ComprehensivePublishing from "@/components/ComprehensivePublishing";
import HomeHero from "@/components/HomeHero";
import LogoSlider from "@/components/LogoSlider";
import Image from "next/image";

export default function Home() {
  return (
    <section className='bg-[#F7F1D7]'>
      <HomeHero />
      <LogoSlider />
      <ComprehensivePublishing />
    </section>
  );
}
