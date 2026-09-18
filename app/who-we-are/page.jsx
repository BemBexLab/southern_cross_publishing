/** @type {import("next").Metadata} */
export const metadata = {
  title: "Who We Are",
  description:
    "Learn about Crux Publishing House, our values, and how our Australian publishing team supports authors from idea to published book.",
  alternates: {
    canonical: "/who-we-are",
  },
  openGraph: {
    title: "Who We Are",
    description:
      "Learn about Crux Publishing House, our values, and how our Australian publishing team supports authors from idea to published book.",
    url: "/who-we-are",
      siteName: "Crux Publishing House",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are",
    description:
      "Learn about Crux Publishing House, our values, and how our Australian publishing team supports authors from idea to published book.",
  },
};

import HeroSection from "./components/Hero";
import MotionSection from "@/components/MotionSection";
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
      <MotionSection delay={0.02} distance={18}>
        <HeroSection
        bgImage="/who-we-are/Service.webp"
        title="A Publishing House Built Around Your Story"
        description={`Crux Publishing House is an Australian self publishing company with over 1,000 authors published across fiction, non-fiction, memoirs, biographies, self help, children's books, and audiobooks. We treat every single manuscript we receive as if it were the only one on our desk, because to the person who wrote it, it is. We're not a factory. We're a team of professional editors, writers, designers, marketers, and publishers who genuinely love books and who take real pride in helping people share their stories with the world.`}
        ctaText="Get a Free Audiobook Quote"
        ctaHref="/contact"
        />
      </MotionSection>
      <MotionSection delay={0.04}>
        <OurStory />
      </MotionSection>
      <MotionSection delay={0.05}>
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
      </MotionSection>
      <MotionSection delay={0.04}>
        <Section3 />
      </MotionSection>
      <MotionSection delay={0.03}>
        <GetInTouch />
      </MotionSection>
      <MotionSection delay={0.04}>
        <FAQs
        eyebrow="Need Help?"
        title="Publishing Questions"
        items={[
          { question: "What is Crux Publishing House?", answer: "Crux Publishing House is an Australian-based self-publishing company that assists authors in converting their book from idea to published reality. We are not a traditional publisher; we work for you, according to your timeline, with your vision guiding every decision we make." },
          { question: "Where are you based, and who do you work with?", answer: "We are located in Australia and work with authors right across the country, from fresh writers who have never published anything before, to business owners, coaches, and professionals who want a book that comes up properly." },
          { question: "What makes you different from other publishing services?", answer: "We take care of the complete publishing process under one company, including ghostwriting, editing, cover design, formatting, ISBN registration, audiobook production, and global distribution. Now, you do not have to stitch together five different providers. Crux Publishing House: one team, one process, one finished book." },
          { question: "Do you only work with finished manuscripts?", answer: "No. Many of our authors come to us with just an idea or a rough set of notes, or sometimes a voice note describing the book's purpose, genre, and all the information. Our ghostwriting team can complete a manuscript from a concept; you just need to know what story or message you want to share." },
          { question: "Will I own my book once it is published?", answer: "Always. The rights, the royalties, and the creative ownership stay with you from day one. Crux Publishing House is here to produce and publish your work, not to claim any part of it." },
          { question: "How do I know if Crux Publishing House is the right fit for me?", answer: "If you have a book inside you and want it published properly, professionally edited, beautifully designed, and available to readers worldwide, our company is here for exactly that. The best way to find out is a free consultation call with our team." },
        ]}
        />
      </MotionSection>
      <MotionSection delay={0.04}>
        <WhyAustralianAuthors />
      </MotionSection>
      <MotionSection delay={0.04}>
        <OurStory
        title="Crux Publishing House: Where Vision Becomes Legacy"
        imageSrc="/who-we-are/VIsion.webp"
        imageAlt="Book With an Eyeglasses"
        paragraphs={[
          "Crux Publishing House was born from a simple but deeply held belief: every person with a story worth telling deserves access to professional publishing.",
          "We're proudly Australian. We understand the Australian reader, the Australian market, and what it takes to make a book succeed locally and globally. But we've always had our eyes on the wider world, because great stories don't stop at borders.",
          "Our work spans ghostwriting, professional book editing, cover design, ISBN registration, Amazon A+ content optimisation, global distribution across 40+ platforms, and full audiobook production.",
        ]}
        />
      </MotionSection>
      <MotionSection delay={0.04}>
        <ReadyToPublish
        eyebrow="Let’s Collaborate"
        title="Ready to Become One of Our Authors"
        description="Crux Publishing House is here to bring your vision to life—one expertly crafted page at a time."
        ctaText="Start the Conversation "
        ctaHref="/contact"
        backgroundImageSrc="/publishing-services/dc171d58-b99f-4f30-8bee-5f356e9d63f9_removalai_preview.webp"
        illustrationSrc="/publishing-services/Group (1).webp"
        illustrationAlt="Custom illustration"
        />
      </MotionSection>
    </div>
  );
}
