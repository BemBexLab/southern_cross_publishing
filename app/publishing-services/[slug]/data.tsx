import type { ReactNode } from "react";

export interface HeroSectionData {
  title: string;
  description: ReactNode;
  ctaText: string;
  ctaHref: string;
}

export interface ConsultationCard {
  title: string;
  description?: string;
  items: ReactNode[];
  twoColumnItems?: boolean;
}

export interface BookConsultationSectionData {
  eyebrow: string;
  title: string;
  description: string;
  cards: ConsultationCard[];
  ctaText: string;
  ctaHref: string;
}

export interface WhyChooseSectionData {
  illustrationSrc: string;
  title: string;
  description: string;
  items: ReactNode[];
  ctaText: string;
  ctaHref: string;
}

export interface GetInTouchSectionData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  formHeadline: string;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionData {
  eyebrow?: string;
  title?: string;
  items: FAQItem[];
  initialOpenIndex?: number;
  columnGroups?: number[][];
}

export interface PublishingServicePageData {
  slug: string;
  hero: HeroSectionData;
  bookConsultation: BookConsultationSectionData;
  whyChoose: WhyChooseSectionData;
  getInTouch: GetInTouchSectionData;
  faqs: FAQSectionData;
}

export const publishingServicePages: Record<string, PublishingServicePageData> = {
  "e-book-writing-service": {
    slug: "e-book-writing-service",
    hero: {
      title: "eBook Writing Services Australia",
      description: (
        <>
          Professional eBook Writing Services for Australian Authors &
          Businesses. From your first idea to a fully formatted, globally
          distributed eBook: Southern Cross Publishing handles every word,
          every page, every platform. Whether you have a fully written
          manuscript sitting in a drawer or nothing more than a rough idea
          scribbled on a notepad, our professional eBook writing services
          write content that meets you exactly where you are.
        </>
      ),
      ctaText: "Get a Free Quote Today",
      ctaHref: "/contact",
    },
    bookConsultation: {
      eyebrow: "Complete eBook Writing & Production",
      title: "Everything You Need, Manuscript to Professional Book",
      description:
        "Our professional team take care of every step: writing, editing, design, formatting, and global distribution, so you can focus on what's most important your story and expertise.",
      cards: [
        {
          title: "eBook Writing & Ghostwriting",
          description:
            "Our professional ghostwriters work closely with you to understand your voice, expertise, and message, then develop it into a compelling, professionally structured eBook from scratch.",
          items: [
            "100% original, from-scratch writing",
            "Voice matching so it reads like you",
            "Structured for clarity and engagement",
          ],
        },
        {
          title: "Original, High-Quality Writing",
          description: "Every eBook is written from scratch, ensuring:",
          items: [
            "100% original content",
            "No plagiarism",
            "Clear, engaging, and reader-focused writing",
            "Proper structure & chapter flow",
          ],
        },
        {
          title: "Services We Handle For You",
          items: [
            "Editing & Proofreading",
            "eBook Cover Design",
            "EPUB / MOBI Formatting",
            "ISBN Registration",
            "Global Distribution (40+ platforms)",
            "Amazon A+ Content",
          ],
          twoColumnItems: true,
        },
        {
          title: "Who This Service Is For",
          items: [
            "First-time authors",
            "Entrepreneurs & coaches",
            "Business owners",
            "Health practitioners building a brand",
            "Executives with a story to tell",
          ],
        },
        {
          title: "Genres We Cover",
          description:
            "Matched With Writers Who Know Your Genre. When you work with Southern Cross Publishing, you are matched with people who actually understand your type of book.",
          items: [
            "Fiction",
            "Non-Fiction",
            "Memoirs & Biographies",
            "Children's Books",
            "Self-Help & Personal Development",
            "Business & Entrepreneurship",
            "Health & Wellness",
            "Technology & Education",
            "Audiobooks",
          ],
          twoColumnItems: true,
        },
        {
          title: "Our Publishing Process",
          items: [
            <>
              <b>Manuscript Evaluation:</b> Honest assessment of your project
              scope, timeline, and costs before anything begins.
            </>,
            <>
              <b>Professional Editing:</b> Complete refinement of clarity,
              flow, grammar, and consistency throughout your manuscript.
            </>,
            <>
              <b>Cover & Formatting:</b> Genre-appropriate cover design and
              polished interior layout for every device and platform.
            </>,
            <>
              <b>ISBN & Distribution:</b> Registration, cataloguing, and
              listing on 40+ global platforms, including Amazon, Apple Books,
              and Kobo.
            </>,
          ],
        },
      ],
      ctaText: "Book a Consultation",
      ctaHref: "/contact",
    },
    whyChoose: {
      illustrationSrc: "/ebook-services/Frame.svg",
      title: "Why Australian Authors Choose Us for eBook Writing",
      description:
        "What makes Southern Cross Publishing different is that we are genuinely invested in your success, not just getting a file delivered. Here is what that looks like in practice:",
      items: [
        <>Australian Owned & Written</>,
        <>Your Voice, Your Tone, Your Style, Always</>,
        <>You Own Your Rights</>,
        <>Optimised for Discovery: Your Book Found on Every Major Platform</>,
      ],
      ctaText: "Free consultation call",
      ctaHref: "/contact",
    },
    getInTouch: {
      title: "Your book is closer than you think. Let's talk about it.",
      subtitle: "Start with a simple conversation",
      paragraphs: [
        "If you have a manuscript sitting in a drawer, a concept you have been thinking about for years, or a draft that just needs a professional finish, this is where it starts. We offer a free, no-obligation consultation to talk through your project honestly: what it involves, how long it takes, and what it will cost. No pressure, no jargon.",
        "Southern Cross Publishing has helped authors across Australia turn years of knowledge and experience into published books. We would love to do the same for you.",
      ],
      formHeadline: "Send Us a Message",
      ctaText: "Let's Build Your Book",
    },
    faqs: {
      eyebrow: "Frequently Asked Questions",
      title: "Your Questions, Answered",
      initialOpenIndex: 0,
      items: [
        {
          question: "Do I need to have any writing experience to get started?",
          answer:
            "No, its not like that. Most of our clients approach us with an just an idea, a topic they know well, or a story they want to tell their book on, and that's genuinely enough. Our ghostwriters do the remaining part. After a detailed conversation, in which we understand your knowledge, your audience, and the tone you want, and then we do the heavy technical work. We send you every chapter or draft. You will review and give feedback along the way, as we proceed after your approval.",
        },
        {
          question: "Will the eBook actually sound like me, or will it feel generic?",
          answer:
            "This is something we take seriously. Before writing your book, we do assess content created by you the manuscript. We also get to know your idea and tone during our communication, and sometimes even your social media or existing writing. Our ghostwriters are experienced at adapting their style to match yours. By the time it's done, it should feel completely natural coming from you.",
        },
        {
          question: "How long does the whole process take from start to published?",
          answer:
            "It depends on the length and complexity of your eBook, but as a rough guide, most projects run between six to twelve weeks from the initial consultation through to final distribution. Shorter eBooks or those where the client has a clear brief ready tend to move faster. We give you a realistic timeline upfront during your free consultation, no false promises, but an honest schedule with clear milestones so you always know where things stand.",
        },
        {
          question: "Who owns the eBook once it's finished, me or Southern Cross?",
          answer:
            "Ofcourse you own it completely. Full intellectual property rights are transferred to you once the project completion. We retain nothing, no royalties, no licensing arrangements, no ongoing claims. It's your work, your name, your asset. This applies to the written content, the cover design, and everything else we produce for you as part of the project. You are free to publish, update, or use it however you like, its upto you.",
        },
        {
          question: "Where exactly will my eBook be available for sale once it's distributed?",
          answer:
            "We distribute to over 40 platforms globally, so your eBook will be available wherever readers are already buying. That includes Amazon Kindle, Apple Books, Google Play Books, Kobo, Barnes & Noble, and a wide range of smaller regional platforms. We also handle all the metadata and keyword optimisation so your book is actually easy to discover, not just listed, but findable by the right readers searching for your topic.",
        },
      ],
    },
  },

  "ebook-formatting": {
    slug: "ebook-formatting",
    hero: {
      title: "eBook Formatting Services Australia",
      description: (
        <>
          <b>eBook Formatting & Interior Design That Gets Your Book Published Right:</b><br />
          A great manuscript deserves a professional finish. Our eBook formatting team in Australia transforms your raw draft into a flawlessly formatted, device ready file correctly structured for Amazon Kindle, Apple Books, Kobo, and every major platform, so your book looks exactly as it should, wherever it's read.
        </>
      ),
      ctaText: "Request a call",
      ctaHref: "/contact",
    },
    bookConsultation: {
      eyebrow: "What we handle for you",
      title: "From Manuscript to Professional Book: Every Step Covered",
      description:
        "Most authors only discover formatting problems after their book has been rejected by a platform, or worse, after readers leave reviews about layout errors. We fix that before it happens. Here is exactly what is included in every eBook formatting and production project.",
      cards: [
        {
          title: "Interior formatting & layout design",
          description:
            "This is where most self published books fall apart visually. We professionally format every page, chapter headers, body text, pull quotes, images, and spacing, so your eBook reads cleanly on any screen size, from a Kindle Paperwhite to a desktop browser.",
          items: [
            "Kindle, EPUB & MOBI conversion",
            "Linked table of contents",
            "Device-tested on all major platforms",
          ],
        },
        {
          title: "Original, high quality writing",
          description:
            "Every eBook we write or ghostwrite is built from scratch, no templates, no recycled content. We match your knowledge and voice, structure the argument properly, and make sure every chapter earns its place.",
          items: [
            "100% original, plagiarism-free content",
            "Clear chapter flow & structure",
            "Reader focused, not keyword-stuffed",
            "Amazon metadata & description optimised",
          ],
        },
        {
          title: "All production services in one place",
          items: [
            "Professional editing & proofreading",
            "Custom eBook cover design",
            "ISBN registration",
            "Global distribution (40+ platforms)",
            "Amazon A+ content setup",
            "Author page creation",
          ],
          twoColumnItems: true,
        },
        {
          title: "Who this is built for",
          items: [
            "First time authors who want it done properly",
            "Business owners building authority in their field",
            "Coaches & consultants turning expertise into a book",
            "Anyone with a draft sitting unfinished",
          ],
        },
      ],
      ctaText: "Book a consultation",
      ctaHref: "/contact",
    },
    whyChoose: {
      illustrationSrc: "/ebook-services/Frame.svg",
      title: "Why Australian Authors Choose Southern Cross Publishing",
      description:
        "There is no shortage of overseas publishing services. What they cannot offer is a team that understands the Australian market, the Australian reader, and what it actually takes to build a reputation here. We have worked with tradies, doctors, retired executives, first time authors, and business founders, and the thing they all say afterwards is that they wish they had started sooner.",
      items: [
        <>Australian owned and staffed, not an overseas call centre</>,
        <>Your voice is preserved, ghostwriting that sounds like you, not a template</>,
        <>You own 100% of the intellectual property rights upon completion</>,
        <>Clear project timelines with no hidden milestones or surprise invoices</>,
        <>Books optimised for discoverability on Kindle, Apple Books, and Google Play</>,
        <>A single point of contact from first draft to final distribution</>
      ],
      ctaText: "Talk to our formatting team",
      ctaHref: "/contact",
    },
    getInTouch: {
      title: "Your book is closer than you think",
      subtitle: "Start with a simple conversation",
      paragraphs: [
        "If you have a manuscript sitting in a drawer, a concept you have been thinking about for years, or a draft that just needs a professional finish, this is where it starts. We offer a free initial consultation session to talk through your project honestly: what it involves, how long it takes, and what it will cost.",
        "Southern Cross Publishing has helped authors across Australia turn years of knowledge and experience into published books. We would love to do the same for you.",
      ],
      formHeadline: "Send Us a Message",
      ctaText: "Let's Build Your Book",
    },
    faqs: {
      eyebrow: "Frequently Asked Questions",
      title: "",
      initialOpenIndex: 0,
      items: [
        {
          question: "What file formats do you produce, and will my eBook work on Kindle?",
          answer:
            "Yes, Kindle compatibility is something we test specifically. We produce EPUB, MOBI, and KPF files depending on the platform requirements. Every file is checked on actual devices (Kindle Paperwhite, iPad, and desktop reader) before delivery. We also make sure your table of contents is correctly linked, your chapter breaks are clean, and your images display properly across screen sizes.",
        },
        {
          question: "How is Southern Cross different from a generic online formatting service?",
          answer:
            "We treat your project as a publishing job, which means we also look at your cover, your metadata, your distribution setup, and how discoverable your book will actually be. We are an Australian team working with Australian authors, and we stay involved until your book is live and listed properly.",
        },
        {
          question: "How long does eBook formatting and production take?",
          answer:
            "For just formatting, if your manuscript is clean and complete, we typically complete it within two to three business days. If the project includes editing, cover design, and complete distribution setup, expect three to six weeks, depending on the manuscript's length and the number of revision rounds. We give you a clear project schedule at the start and stick to it.",
        },
        {
          question: "Will my eBook actually be visible and searchable on Amazon and Apple Books?",
          answer:
            "Yes, it will. We optimise your metadata, write your book description for search, select the right categories and keywords for greater visibility, and set up Amazon A+ content where applicable, which makes your book easily discoverable by true readers who are actually searching for it.",
        },
      ],
    },
  },
};

export const defaultPublishingServiceSlug = "e-book-writing-service";

export const publishingServiceSlugs = Object.keys(publishingServicePages);

export function getPublishingServicePageData(slug: string) {
  return publishingServicePages[slug];
}

export const defaultPublishingServicePageData =
  publishingServicePages[defaultPublishingServiceSlug];
