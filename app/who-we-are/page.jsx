import HeroSection from "./components/Hero";
import OurStory from "./components/OurStory";
import Section3 from "./components/Section3";
import AtSouthernCross, {
  defaultAtSouthernCrossCards,
} from "@/components/AtSouthernCross";
import FAQs from "@/components/FAQs";
import GetInTouch from "@/components/GetInTouch";
import WhyAustralianAuthors from "@/components/WhyAustralianAuthors";
import ReadyToPublish from "../publishing-services/components/ReadyToPublish";

import { GrTransaction } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsTransparency } from "react-icons/bs";
import { IoDocuments } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Home() {
  return (
    <div className="relative isolate bg-[#F7F1D7]">
      <HeroSection
        bgImage="/who-we-are/Service.webp"
        title="A Publishing House Built Around Your Story"
        description={`Southern Cross Publishing is an Australian self publishing company with over 1,000 authors published across fiction, non-fiction, memoirs, biographies, self help, children's books, and audiobooks. We treat every single manuscript we receive as if it were the only one on our desk, because to the person who wrote it, it is. \nWe're not a factory. We're a team of professional editors, writers, designers, marketers, and publishers who genuinely love books and who take real pride in helping people share their stories with the world.`}
        ctaText="Get a Free Audiobook Quote"
      />
      <OurStory />
      <AtSouthernCross
        eyebrow=""
        title="What We Stand For The Values Behind Everything We Do"
        description=""
        sectionClassName="bg-[#F7F1D7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        cards={[
          {
            title: "Partnership Over Transaction",
            description:
              "We're not a printing press you mail manuscripts to. We're partners. We get involved, care about the outcome, and with you through every stage of the publishing journey, not just the parts that are easy.",
            variant: "light",
            iconSrc: <GrTransaction size={40} />,
          },
          {
            title: "Uncompromising Quality",
            description:
              "Every book we publish goes through the same rigorous process, whether it's someone's first novel or their fifth. Quality isn't something we offer at a premium; it's the baseline we work from, always.",
            variant: "light",
            iconSrc: <BsGraphUpArrow size={40} />,
          },
          {
            title: "Complete Transparency",
            description:
              "No confusing contracts, hidden fees nor any surprises. You'll always know exactly what's included in your package, exactly where your book is in the process, and exactly what to expect at every step.",
            variant: "light",
            iconSrc: <BsTransparency size={40} />,
          },
          {
            title: "Every Story Matters",
            description:
              "We don't rank manuscripts by commercial potential or prestige. A personal memoir matters as much as a business book. A children's story matters as much as literary fiction. If it's your story, it matters to us.",
            variant: "light",
            iconSrc: <IoDocuments size={40} />,
          },
          {
            title: "Global Vision, Local Heart",
            description:
              "We're Australian to our core, but we've always believed Australian stories deserve a global stage. We build that stage, one book at a time, with distribution that reaches readers on every continent. From Sydney to Melbourne, Perth to Brisbane, and readers across the UK, US, and beyond, we distribute your book everywhere it needs to be.",
            variant: "light",
            iconSrc: <AiOutlineGlobal size={40} />,
          },
          {
            title: "Author Comes First",
            description:
              "Your name is on the cover. Your ideas bring the process. Your approval matters at every stage. We work for you, not the other way around. The book is always yours, in every sense of the word.",
            variant: "light",
            iconSrc: <IoMdPerson size={40} />,
          },
        ]}
      />
      <Section3 />
      <GetInTouch
        title="Let us know if anything needed. Searching of any guidance from an expert?"
        subtitle="Have a conversation"
        paragraphs={[
          "You have taken a step towards the journey of success in self-publishing but still have a lot to ask? And searching for an expert's guidance who can help you in bring your ideas, and voice to reality, but haven't found anyone, then you are at the right place. Ink Founders is for you.",
          "Ink Founders provide a free discussion opportunity where you can clear your doubts, share your story ideas or concepts, and get the exploration trip to examine our services clearly and can find out how we can provide you with the best by turning your words into book form. So, let's take a step and join us today.",
        ]}
      />
      <FAQs />
      <WhyAustralianAuthors />
      <OurStory
        title="Southern Cross Publishing: Where Vision Becomes Legacy"
        imageSrc="/who-we-are/VIsion.webp"
        imageAlt="Book With an Eyeglasses"
        paragraphs={[
          "Southern Cross Publishing was born from a simple but deeply held belief: every person with a story worth telling deserves access to professional publishing.",
          "We're proudly Australian. We understand the Australian reader, the Australian market, and what it takes to make a book succeed locally and globally. But we've always had our eyes on the wider world, because great stories don't stop at borders.",
          "Our work spans ghostwriting, professional book editing, cover design, ISBN registration, Amazon A+ content optimisation, global distribution across 40+ platforms, and full audiobook production.",
        ]}
      />
      <ReadyToPublish
        eyebrow="Let’s Collaborate"
        title="Ready to Become One of Our Authors"
        description="Southern Cross Publishing is here to bring your vision to life—one expertly crafted page at a time."
        ctaText="Start the Conversation "
        backgroundImageSrc="/publishing-services/dc171d58-b99f-4f30-8bee-5f356e9d63f9_removalai_preview.webp"
        illustrationSrc="/publishing-services/Group (1).webp"
        illustrationAlt="Custom illustration"
      />
    </div>
  );
}
