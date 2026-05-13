import AtSouthernCross, {
  defaultAtSouthernCrossCards,
} from "@/components/AtSouthernCross";
import ComprehensivePublishing from "@/components/ComprehensivePublishing";
import FAQs from "@/components/FAQs";
import GetInTouch from "@/components/GetInTouch";
import HomeHero from "@/components/HomeHero";
import HowItWorks from "@/components/HowItWorks";
import LogoSlider from "@/components/LogoSlider";
import LookingForSelfPublishing from "@/components/LookingForSelfPublishing";
import MotionSection from "@/components/MotionSection";
import OurBook from "@/components/OurBook";
import Testimonials from "@/components/Testimonials";
import WitnessOurUniqueness, {
  defaultWitnessServices,
} from "@/components/WitnessOurUniqueness";
import YourStory from "@/components/YourStory";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative isolate bg-[#F7F1D7]">
      <MotionSection delay={0.02} distance={18}>
        <HomeHero />
      </MotionSection>
      <MotionSection delay={0.06} distance={18}>
        <LogoSlider />
      </MotionSection>
      <MotionSection delay={0.08}>
        <ComprehensivePublishing />
      </MotionSection>

      <MotionSection className="relative z-30" delay={0.1} distance={40}>
        {/* Overlapping div */}
        <div className="relative -mt-10 -mb-10 px-4 pb-10 sm:-mt-14 sm:-mb-14 sm:px-6 sm:pb-14 lg:-mt-24 lg:-mb-24 lg:translate-y-[84px] lg:px-8 lg:pb-20">
          <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[30px] bg-[#078c52] text-white lg:min-h-[380px] lg:grid-cols-[1.32fr_0.68fr]">
            <div className="flex w-full flex-col justify-center px-6 py-8 sm:px-8 sm:py-9 md:px-10 md:py-10 lg:w-[100%] lg:pl-[40px] lg:pr-0 lg:py-9">
              <p className="montserrat max-w-full text-sm font-medium tracking-[0.01em] text-[#f6c72f] sm:text-[15px] md:text-base lg:max-w-[44rem] lg:text-[15px]">
                Publish Your Book in Australia With a Team That Handles the Complete Process.
              </p>

              <h2 className="goneva mt-4 max-w-full text-[2rem] leading-[0.96] text-[#f7f1d7] sm:text-[2.45rem] md:mt-5 md:text-[2.95rem] lg:max-w-full lg:text-[3.1rem]">
                Let Southern Cross take the hassle out of publishing, so you can focus on your story
              </h2>

              <div className="relative mt-6 flex min-h-[220px] items-end justify-center lg:hidden">
                <Image
                  src="/home/Illustration for Web-01 1.svg"
                  alt="Person reading in a chair"
                  width={430}
                  height={360}
                  className="w-full max-w-[250px] object-contain sm:max-w-[300px] md:max-w-[360px]"
                  sizes="(min-width: 768px) 360px, (min-width: 640px) 300px, 250px"
                />
              </div>

              <p className="montserrat mt-6 max-w-full text-[0.98rem] leading-7 text-white/92 sm:text-base sm:leading-[1.6] md:text-[1.02rem] md:leading-[1.6] lg:mt-7 lg:max-w-full lg:text-md lg:leading-[1.45]">
                You wrote it. You lived it. Now, let us handle everything that comes after that. From the first edit to the final listing on Amazon, our team quietly takes care of the process while you stay focused on what matters: your words.
              </p>

              <a
                href="/contact"
                className="montserrat mt-7 inline-flex w-fit items-center gap-3 rounded-[10px] bg-[#FDD118] px-6 py-4 text-lg font-semibold text-[#067446] transition-transform duration-200 hover:-translate-y-0.5 sm:mt-8 sm:px-7 sm:text-[1.05rem] md:mt-7 md:px-7 md:py-4 md:text-base lg:mt-9 lg:px-7 lg:py-4"
              >
                Get Your Free Publishing Quote Today
                <FaArrowRight />
              </a>
            </div>

            <div className="relative hidden min-h-[100%] items-center justify-center px-4 pb-0 pt-0 lg:flex">
              <Image
                src="/home/Illustration for Web-01 1.svg"
                alt="Person reading in a chair"
                width={430}
                height={360}
                className="w-full max-w-[820px] object-contain"
                sizes="(min-width: 1024px) 820px"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection delay={0.04}>
        <WitnessOurUniqueness
          eyebrow="Witness our Uniqueness"
          title="Complete Self Publishing Services in Australia: Editing, Design, Distribution and Marketing Under One Roof."
          services={defaultWitnessServices}
        />
      </MotionSection>

      <MotionSection delay={0.02} distance={18}>
        {/* Seperator */}
        <div className="bg-[#EBE5CC] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto h-px w-full max-w-[1700px] bg-[#d8d0b2]" />
        </div>
      </MotionSection>

      <MotionSection delay={0.03}>
        <LookingForSelfPublishing />
      </MotionSection>
      <MotionSection delay={0.04}>
        <HowItWorks />
      </MotionSection>
      <MotionSection delay={0.03}>
        <YourStory />
      </MotionSection>
      <MotionSection delay={0.04}>
        <OurBook />
      </MotionSection>
      <MotionSection delay={0.04}>
        <AtSouthernCross
          eyebrow="At Southern Cross, we do it right"
          title="Everything Your Book Needs, Handled by People Who Know Books"
          cards={defaultAtSouthernCrossCards}
        />
      </MotionSection>
      <MotionSection delay={0.04}>
        <Testimonials />
      </MotionSection>
      <MotionSection delay={0.03}>
        <GetInTouch />
      </MotionSection>
      <MotionSection delay={0.04}>
        <FAQs />
      </MotionSection>
    </section>
  );
}
