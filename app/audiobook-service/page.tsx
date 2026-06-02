import type { Metadata } from "next";
import LogoSlider from "@/components/LogoSlider";
import MotionSection from "@/components/MotionSection";
import HeroSection from "../publishing-services/components/Hero";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import AtSouthernCross from "@/components/AtSouthernCross";
import { FaMicrophone } from "react-icons/fa6";
import { LuAudioLines } from "react-icons/lu";
import Testimonials from "@/components/Testimonials";
import GetInTouch from "@/components/GetInTouch";
import OurAudioBook from "@/components/OurAudioBook";
import ExpertNonFiction from "../publishing-services/components/ExpertNonFiction";
import FAQs from "@/components/FAQs";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Audiobook Production Services Australia",
  description:
    "Professional audiobook production services in Australia with human narration, editing, mastering, scoring, and distribution.",
  path: "/audiobook-service",
});

export default function Home() {
  return (
    <div className="relative isolate bg-[#F7F1D7]">
      <MotionSection delay={0.02} distance={18}>
      <HeroSection
        bgImage="/audiobook-service/Service Section Hero Image 2 1.webp"
        title="Professional Audiobook Production Services in Australia"
        description="Human narration, background scoring, and expert audio editing, everything your audiobook needs to compete on Audible, Apple Books, Spotify and beyond Audiobooks are one of the fastest growing formats in publishing today. Readers are listening on commutes, during workouts, before bed, and if your book is not available in audio, you are leaving a significant audience behind. Southern Cross Publishing handles the complete audiobook production process, from matching you with the right narrator to delivering a fully mastered, platform-ready audio file. You focus on your story. We handle everything that makes it listenable."
        ctaText=" Get a Free Audiobook Quote"
        ctaHref="/contact"
      />
      </MotionSection>
      <MotionSection delay={0.06} distance={18}>
      <LogoSlider />
      </MotionSection>
      <MotionSection delay={0.05}>
      <AtSouthernCross
        eyebrow=""
        title="Three Core Services That Make Your Audiobook Sound Professional"
        sectionClassName="bg-[#F7F1D7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        cards={[
          {
            title:
              "Professional Audiobook Narration: The Right Voice for Your Book",
            description:
              "The narrator is the most important decision in audiobook production. The wrong voice — even a technically skilled one, can make a listener switch off within minutes. The right voice pulls them through every chapter without them noticing time passing. At Southern Cross Publishing, we match you with a professional narrator whose tone, pace, gender, and accent genuinely suit your genre and the emotional register of your book. Before full production begins, you receive sample readings from shortlisted narrators so you can hear how your words sound in their voice. You choose. We then manage the full recording process, chapter by chapter, with your manuscript as the guide — so every line is captured cleanly and consistently. We work with narrators experienced across every major genre, fiction, non-fiction, memoirs, biographies, self help, children's books, business guides, and health and wellness. Whether your book needs a warm conversational tone or a dramatic storytelling voice, we find the right match before a single word is recorded.",
            iconSrc: <FaMicrophone />,
            variant: "light",
          },
          {
            title:
              "Original Background Scoring: Sound That Supports Your Story",
            description:
              "Background music in an audiobook is not decoration. When it is done well, it is invisible, it sets the emotional tone of a chapter without pulling the listener's attention away from the narration. When it is done poorly, it becomes a distraction that undermines everything the narrator has built. Our audio team composes and selects background scoring that fits the mood of your book without competing with the voice that is telling it. For the opening and closing credits, we add music that frames your audiobook professionally, the kind of production quality listeners associate with major publishing houses. For chapter transitions and emotionally significant passages, we work with subtle scoring that deepens the listening experience without overpowering it. Every piece of music we use is either original composition or properly licensed, so your audiobook is cleared for distribution on every platform without copyright complications.",
            iconSrc: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clipPath="url(#clip0_217_33)">
                  <path
                    d="M9.66412 18.6961C10.6983 18.6961 11.6699 18.2935 12.4009 17.5626C13.1325 16.8316 13.5351 15.8593 13.5351 14.8258C13.5351 13.7916 13.1325 12.82 12.4009 12.0884C11.6699 11.3574 10.6977 10.9548 9.66412 10.9548C8.63057 10.9548 7.65831 11.3574 6.9267 12.0884C5.41766 13.5974 5.41766 16.0535 6.9267 17.5626C7.65831 18.2935 8.63057 18.6961 9.66412 18.6961ZM7.83895 13.0006C8.3267 12.5135 8.97508 12.2452 9.66412 12.2452C10.3531 12.2452 11.0009 12.5135 11.4886 13.0006C11.9764 13.4884 12.2448 14.1361 12.2448 14.8258C12.2448 15.5148 11.9764 16.1626 11.4886 16.6503C11.0009 17.1374 10.3531 17.4058 9.66412 17.4058C8.97508 17.4058 8.3267 17.1374 7.83895 16.6503C6.83379 15.6439 6.83379 14.0064 7.83895 13.0006Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M17.4193 29.6774C15.2845 29.6774 13.5483 31.4135 13.5483 33.5483C13.5483 35.6832 15.2845 37.4193 17.4193 37.4193C19.5541 37.4193 21.2903 35.6832 21.2903 33.5483C21.2903 31.4135 19.5541 29.6774 17.4193 29.6774ZM17.4193 36.129C15.9961 36.129 14.8387 34.9716 14.8387 33.5483C14.8387 32.1251 15.9961 30.9677 17.4193 30.9677C18.8425 30.9677 20 32.1251 20 33.5483C20 34.9716 18.8425 36.129 17.4193 36.129Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M10.3225 22.5807C10.3225 20.4458 8.58637 18.7097 6.45153 18.7097C4.3167 18.7097 2.58057 20.4458 2.58057 22.5807C2.58057 24.7155 4.3167 26.4517 6.45153 26.4517C8.58637 26.4517 10.3225 24.7155 10.3225 22.5807ZM3.87089 22.5807C3.87089 21.1575 5.02831 20 6.45153 20C7.87476 20 9.03218 21.1575 9.03218 22.5807C9.03218 24.0039 7.87476 25.1613 6.45153 25.1613C5.02831 25.1613 3.87089 24.0039 3.87089 22.5807Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M25.1747 26.4652C24.1405 26.4652 23.1689 26.8678 22.4379 27.5988C21.7063 28.3297 21.3037 29.302 21.3037 30.3355C21.3037 31.3697 21.7063 32.3413 22.4379 33.073C23.1689 33.8039 24.1411 34.2065 25.1747 34.2065C26.2082 34.2065 27.1805 33.8039 27.9121 33.073C29.4211 31.5639 29.4211 29.1078 27.9121 27.5988C27.1805 26.8678 26.2082 26.4652 25.1747 26.4652ZM26.9998 32.1607C26.0244 33.1355 24.325 33.1355 23.3502 32.1607C22.8624 31.673 22.594 31.0252 22.594 30.3355C22.594 29.6465 22.8624 28.9988 23.3502 28.511C23.8379 28.0239 24.4856 27.7555 25.1747 27.7555C25.8637 27.7555 26.5121 28.0239 26.9998 28.511C28.005 29.5175 28.005 31.1549 26.9998 32.1607Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M9.66412 26.4652C8.62992 26.4652 7.65831 26.8678 6.9267 27.5988C5.41766 29.1078 5.41766 31.5639 6.9267 33.073C7.65831 33.8039 8.63057 34.2065 9.66412 34.2065C10.6977 34.2065 11.6699 33.8039 12.4009 33.073C13.1325 32.342 13.5351 31.3697 13.5351 30.3355C13.5351 29.3013 13.1325 28.3297 12.4009 27.5988C11.6706 26.8678 10.6983 26.4652 9.66412 26.4652ZM11.4893 32.1607C10.5138 33.1355 8.81444 33.1355 7.8396 32.1607C6.83379 31.1542 6.83379 29.5175 7.8396 28.511C8.32734 28.0239 8.97573 27.7555 9.66476 27.7555C10.3538 27.7555 11.0015 28.0239 11.4893 28.511C11.977 28.9988 12.2454 29.6465 12.2454 30.3355C12.2448 31.0252 11.9764 31.673 11.4893 32.1607Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M37.4192 2.58069H36.1289V3.87101H37.4192V2.58069Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M34.8387 2.58069H33.5483V3.87101H34.8387V2.58069Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M32.2581 2.58069H30.9678V3.87101H32.2581V2.58069Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M29.6775 2.58069H28.3872V3.87101H29.6775V2.58069Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M27.097 2.58069H25.8066V3.87101H27.097V2.58069Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M24.5159 2.58069H23.2256V3.87101H24.5159V2.58069Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M21.9353 2.58069H20.645V3.87101H21.9353V2.58069Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M19.3548 2.58069H18.0645V3.87101H19.3548V2.58069Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M19.3548 16.7742H18.0645V18.0645H19.3548V16.7742Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M21.9353 16.7742H20.645V18.0645H21.9353V16.7742Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M24.5159 16.7742H23.2256V18.0645H24.5159V16.7742Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M27.097 16.7742H25.8066V18.0645H27.097V16.7742Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M29.6775 16.7742H28.3872V18.0645H29.6775V16.7742Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M32.2581 16.7742H30.9678V18.0645H32.2581V16.7742Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M34.8387 16.7742H33.5483V18.0645H34.8387V16.7742Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M37.4192 16.7742H36.1289V18.0645H37.4192V16.7742Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M33.5485 5.16125H21.9355V15.4838H33.5485V5.16125ZM32.2581 14.1935H23.2259V6.45158H32.2581V14.1935Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M40 6.45161V0H15.4839V5.27161C6.78645 6.23742 0 13.6303 0 22.5806C0 32.1858 7.81419 40 17.4194 40C27.0245 40 34.8387 32.1858 34.8387 22.5806C34.8387 21.9355 34.7903 21.2884 34.7187 20.6452H40V14.1935H37.4194V6.45161H40ZM17.4194 38.7097C8.52581 38.7097 1.29032 31.4742 1.29032 22.5806C1.29032 13.6871 8.52581 6.45161 17.4194 6.45161C17.6258 6.45161 17.8381 6.45677 18.0645 6.4671V7.79677C17.8523 7.76 17.6368 7.74194 17.4194 7.74194C15.2845 7.74194 13.5484 9.47806 13.5484 11.6129C13.5484 13.0419 14.329 14.2897 15.4839 14.96V17.1116C13.1813 17.9232 11.6129 20.1045 11.6129 22.5806C11.6129 25.7819 14.2174 28.3871 17.4194 28.3871C20.6213 28.3871 23.2258 25.7819 23.2258 22.5806C23.2258 21.9194 23.1 21.2665 22.8781 20.6452H25.0452C24.7052 21.2252 24.5161 21.8858 24.5161 22.5806C24.5161 24.7155 26.2523 26.4516 28.3871 26.4516C30.5219 26.4516 32.2581 24.7155 32.2581 22.5806C32.2581 21.8871 32.0755 21.2239 31.7361 20.6452H33.4329C33.509 21.2871 33.5484 21.9355 33.5484 22.5806C33.5484 31.4742 26.3129 38.7097 17.4194 38.7097ZM19.9832 20.6452H21.4852C21.7755 21.251 21.9355 21.911 21.9355 22.5806C21.9355 25.071 19.909 27.0968 17.4194 27.0968C14.9297 27.0968 12.9032 25.071 12.9032 22.5806C12.9032 20.8155 13.9329 19.2484 15.4839 18.5129V20.0168C14.7052 20.6058 14.1935 21.531 14.1935 22.5806C14.1935 24.3594 15.6406 25.8064 17.4194 25.8064C19.1981 25.8064 20.6452 24.3594 20.6452 22.5806C20.6452 21.8516 20.3929 21.1858 19.9832 20.6452ZM17.4194 24.5161C16.3523 24.5161 15.4839 23.6477 15.4839 22.5806C15.4839 21.5135 16.3523 20.6452 17.4194 20.6452C18.4865 20.6452 19.3548 21.5135 19.3548 22.5806C19.3548 23.6477 18.4865 24.5161 17.4194 24.5161ZM14.8387 11.6129C14.8387 10.1897 15.9961 9.03226 17.4194 9.03226C17.6381 9.03226 17.8529 9.07032 18.0645 9.12581V14.0994C17.8529 14.1555 17.6381 14.1935 17.4194 14.1935C15.9961 14.1935 14.8387 13.0361 14.8387 11.6129ZM25.8064 22.5806C25.8064 21.8284 26.1439 21.1387 26.7187 20.6452H30.0555C30.6303 21.1387 30.9677 21.8284 30.9677 22.5806C30.9677 24.0039 29.8103 25.1613 28.3871 25.1613C26.9639 25.1613 25.8064 24.0039 25.8064 22.5806ZM38.7097 15.4839V19.3548H34.549H28.3594H16.7742V15.4839H17.4194H19.3548V13.5806V9.64516V5.26258V5.16129H16.7742V1.29032H38.7097V5.16129H36.129V15.4839H38.7097Z"
                    fill="#F7F1D7"
                    stroke="#F7F1D7"
                    strokeWidth="0.3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_217_33">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ),
            variant: "light",
          },
          {
            title:
              "Professional Audiobook Editing and Mastering: Every Detail Checked, Every Error Removed",
            description:
              "Recording is only the beginning. Raw audio, even from a professional narrator in a controlled environment: contains things that need to be removed before a listener ever hears it. Breath sounds, mouth clicks, pacing inconsistencies, background noise, misreads, and technical artefacts all need to be caught and corrected by an experienced audio engineer who listens word by word, not just track by track. Our editing team goes through your recording with that level of detail. We remove every unwanted sound, correct every timing issue, and balance the audio so it sounds consistent from the first minute to the last, whether the listener is using earphones, a speaker, or a car stereo. We then master the final audio to meet the technical requirements of every major distribution platform, including ACX standards for Audible and Amazon, Apple Books, Spotify, and Google Play. Before anything is submitted for distribution, you receive the completed audiobook for your review and approval. Nothing goes live until you are satisfied with how it sounds.",
            iconSrc: <LuAudioLines />,
            variant: "light",
          },
        ]}
      />
      </MotionSection>
      <MotionSection delay={0.04}>
      <Section3 />
      </MotionSection>
      <MotionSection delay={0.04}>
      <Section4 />
      </MotionSection>
      <MotionSection delay={0.04}>
      <Section5 />
      </MotionSection>
      <MotionSection delay={0.04}>
      <Testimonials />
      </MotionSection>
      <MotionSection delay={0.03}>
      <GetInTouch
        title="Let us know if anything needed. Searching of any guidance from an expert?"
        subtitle="Have a conversation"
        paragraphs={[
          "You have taken a step towards the journey of success in self-publishing but still have a lot to ask? And searching for an expert's guidance who can help you in bring your ideas, and voice to reality, but haven't found anyone, then you are at the right place. Southern Cross Publishing is for you.",
          "Southern Cross Publishing provide a free discussion opportunity where you can clear your doubts, share your story ideas or concepts, and get the exploration trip to examine our services clearly and can find out how we can provide you with the best by turning your words into book form. So, let's take a step and join us today.",
        ]}
      />
      </MotionSection>
      <MotionSection delay={0.04}>
      <OurAudioBook />
      </MotionSection>
      <MotionSection delay={0.04}>
      <ExpertNonFiction
        eyebrow=""
        title="Ready to Turn Your Book Into an Audiobook? Let's Talk."
        description="You do not need to know anything about audio production to get started. You just need your manuscript and the decision to reach listeners as well as readers. Our team handles everything else, narration, scoring, editing, mastering, and global distribution, so your audiobook sounds exactly the way your book deserves to sound."
        ctaText="Get a Quote"
        ctaHref="/contact"
      />
      </MotionSection>
      <MotionSection delay={0.04}>
      <FAQs
        eyebrow=""
        title=""
        items={[
          { question: "Do I have to get involved in the recording process?", answer: "No. After the approval of the narrator and the completion of the recording review, you don’t have to deal with any technical aspects until the last stage, where you sign off on the project for distribution. Everything will happen the way you wanted and planned from the beginning." },
          { question: "Can I pick my own narrator?", answer: "Absolutely. The narrator we select will fit your book’s genre, and after the sampling phase, we will proceed only after getting your approval on the voice choice." },
          { question: "I have already recorded my own audio version. What should I do next?", answer: "Nothing special. We will help you edit, refine, and master it. There’s no need to re-record everything; just provide us with the necessary material, and we will take care of everything." },
          { question: "On which platforms will my audiobook be distributed?", answer: "We are distributing our audiobooks through all major channels, like Audible, Amazon, Apple Books, Spotify, Google Play, so your audiobook will be easily available on whatever platform people use." },
          { question: "Do I keep the royalties my audiobook earns?", answer: "Every cent. You hold complete rights to your audiobook, including all revenue that it produces. We handle distribution for you, but we never take any percentage from your sales." },
          { question: "How long does audiobook production take?", answer: "The production process lasts four to six weeks after you approve the narrator based on your manuscript length, which determines the total time needed. We provide you with an exact schedule that prevents any unexpected events and keeps everything on schedule." },
        ]}
        initialOpenIndex={0}
        // columnGroups={[[0], [1]]}
      />
      </MotionSection>
    </div>
  );
}
