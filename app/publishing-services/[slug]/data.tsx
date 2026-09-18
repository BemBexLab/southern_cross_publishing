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
  description: ReactNode;
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
  seoTitle?: string;
  seoDescription: string;
  hero: HeroSectionData;
  bookConsultation: BookConsultationSectionData;
  whyChoose: WhyChooseSectionData;
  getInTouch: GetInTouchSectionData;
  faqs: FAQSectionData;
}

export const publishingServicePages: Record<string, PublishingServicePageData> = {
  "e-book-writing-service": {
    slug: "e-book-writing-service",
    seoTitle: "eBook Writing Services Australia",
    seoDescription:
      "Professional eBook writing, ghostwriting, editing, formatting, and distribution services for Australian authors and businesses.",
    hero: {
      title: "eBook Writing Services Australia",
      description: (
        <>
          Professional eBook Writing Services for Australian Authors &
          Businesses. From your first idea to a fully formatted, globally
          distributed eBook: Crux Publishing House handles every word,
          every page, every platform. <br /> Whether you have a fully written
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
            "Matched With Writers Who Know Your Genre. When you work with Crux Publishing House, you are matched with people who actually understand your type of book.",
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
        "What makes Crux Publishing House different is that we are genuinely invested in your success, not just getting a file delivered. Here is what that looks like in practice:",
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
        "Crux Publishing House has helped authors across Australia turn years of knowledge and experience into published books. We would love to do the same for you.",
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
          question: "Who owns the eBook once it's finished, me or Crux Publishing House?",
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
    seoTitle: "eBook Formatting Services Australia",
    seoDescription:
      "Professional eBook formatting, interior layout design, and multi-platform publishing support for Australian authors.",
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
      title: "Why Australian Authors Choose Crux Publishing House",
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
        "Crux Publishing House has helped authors across Australia turn years of knowledge and experience into published books. We would love to do the same for you.",
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
          question: "How is Crux Publishing House different from a generic online formatting service?",
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

  "childrenbook-publishing": {
    slug: "childrenbook-publishing",
    seoTitle: "Children's Book Publishing Services Australia",
    seoDescription:
      "Children's book writing, illustration, editing, formatting, and publishing services for Australian authors and educators.",
     hero: {
      title: "Children's Book Publishing Services Australia",
      description: (
        <>
          <b>Professional Children's Book Writing, Illustration & Publishing:</b><br />
          Publishing a children's book is not the same as publishing any other book. The fine thing we have to see carefully is that the words and pictures have to work together. The age range matters. The page count, the trim size, the illustration style, every decision affects whether a child picks it up and whether a parent buys it.<br />At Crux Publishing House Australia, our team has done this before, and we will walk you through it properly from the very first conversation.
        </>
      ),
      ctaText: "Request a call",
      ctaHref: "/contact",
    },
    bookConsultation: {
      eyebrow: "What we handle for you",
      title: "From Manuscript to Published Children's Book, Every Step, Done Properly",
      description:
        "Children's books fail for very specific reasons: inconsistent illustration style, word counts that don't suit the age group, covers that don't stand out on Amazon, or text that reads beautifully aloud but doesn't land on the page. We have seen every one of these problems. Here is how we prevent them.",
      cards: [
        {
          title: "Children's book writing & ghostwriting",
          description:
            "Writing for children takes a specific skill. The words have to be short, the rhythm has to pull a child through the page, and every sentence has to earn its place. Our writers work across picture books, early readers, middle grade, and junior fiction, and they understand the difference between them.",
          items: [
            "Vocabulary and reading level should be according to the age.",
            "Rhythm and read-aloud pacing built in",
            "Story arc suited to the format & page count",
          ],
        },
        {
          title: "Professional illustration & cover design",
          description: "In a children's book, the illustration is not decoration; it is half the story. The pictures demonstrate the story and help the child to understand it clearly. We work with illustrators who understand how to carry the narrative between pages, how to show what the text does not say, and how to make a cover that stops a child in a bookshop aisle.",
          items: [
            "Style matched to your story and age group",
            "Full spread illustrations or spot art",
            "Print-ready files & digital formats",
            "Cover designed for Amazon, Booktopia & print",
          ],
        },
        {
          title: "All production services under one roof",
          items: [
            "Developmental editing",
            "Proofreading & copy editing",
            "Interior layout & typesetting",
            "ISBN Registration",
            "Print & eBook distribution",
            "Amazon A+ content setup",
          ],
          twoColumnItems: true,
        },
        {
          title: "Who this is right for",
          items: [
            "Parents who want to convert a family story into a real book",
            "Teachers and educators building classroom resources",
            "Grandparents with a story that deserves to be kept",
            "Authors with a manuscript that needs illustration",
            "Anyone with a story idea and no idea where to start",
          ],
        },
      ],
      ctaText: "Book a free consultation",
      ctaHref: "/contact",
    },
    whyChoose: {
      illustrationSrc: "/ebook-services/Frame.svg",
      title: "Why Australian Authors Trust Crux Publishing House With Their Children's Books",
      description:
        <>Children's books are personal. Most of our clients approach us with a story that means something to them, a character their own child loves, a lesson they want to pass on, or a memory they do not want to lose. That is not a small thing, and we do not treat it like one. <br /> We have worked with grandparents, primary school teachers, speech pathologists, parents of children with additional needs, and first-time authors who had never published anything before. What everyone of them had in common was a story worth telling,  and a need for people who actually knew how to tell it properly on the page.</>,
      items: [
        <>Australian owned and operated: not a contact centre overseas</>,
        <>Illustrators matched to your book's age group, tone, and visual style</>,
        <>Word counts and structure suited to the right reading level from the start</>,
        <>You own 100% of all rights, text, and illustrations, on completion</>,
        <>Print and digital publishing available, including hardback and paperback</>,
        <>Distribution to Amazon, Booktopia, Book Depository, and 40+ platforms</>,
      ],
      ctaText: "Request a call",
      ctaHref: "/contact",
    },
    getInTouch: {
      title: "Let's talk about your book.",
      subtitle: "Have a conversation",
      paragraphs: [
        "Most people who contact us do not have a complete manuscript. They approach us on the basis of an idea and a story they have been meaning to write down, or a draft that has been sitting in a folder for two years. And that is completely fine; and i wouldny wrong if I say that it is actually where most of our best projects begin.",
        "We do have questions about your story, your audience, and what you want to do with the book once it is published. Then we will tell you, straight up, regarding time and cost.",
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
          question: "Do I need to manage the illustrator, or will it be handled by you?",
          answer:
            "No, we take care of everything from writing, editing, formatting, to illustrations, and publishing. We match you with illustrators from our network based on what your book needs, particularly. You review examples and give your input before anything gets finalised, as you are always part of the decision, of course.",
        },
        {
          question: "How much time does it take to publish a children's book from start?",
          answer:
            "If it's a picture book, it will take around thirty to forty-five business days in writing, illustration, formatting, and distribution. That timeline depends on how many illustration rounds are required and how quickly feedback comes back at every stage. If you already have a completed manuscript and only need illustration and production, it is typically completed between twenty to thirsty business days. We give you a specific schedule at the start, with milestones, so you always know what is happening and what comes next.",
        },
        {
          question: "Will my children's book be available in print and as an eBook?",
          answer:
            "Yes, and for children's books specifically, print is often the more important format. We produce both a print edition in paperback or hardback and a digital edition for Kindle Kids, Apple Books, and Google Play. We can also organise print-on-demand, which means copies are printed as they are ordered, without you needing to hold stock. If you want a print run of physical books for school visits, launches, or gifts, we can arrange that too.",
        },
        {
          question: "Will I own the book and the illustrations once it's finished?",
          answer:
            "Yes, you do, all of it. The text, the illustrations, the cover, the ISBN. Everything is transferred to you in full upon project completion. We do not retain any rights, take any royalties, or require any ongoing involvement once the book is live. It is your book, your name on the cover, and your income from sales. It is also written into the agreement from the start.",
        },
      ],
    },
  },

  "book-marketing": {
    slug: "book-marketing",
    seoTitle: "Book Marketing Services Australia",
    seoDescription:
      "Book marketing services for Australian authors, including Amazon optimisation, launch strategy, distribution, and author branding.",
     hero: {
      title: "Your Book Is Written; Now Let's Make Sure People Find It.",
      description: (
        <>
          Most self published books sell fewer than 100 copies, not because they weren't good enough, but because readers never found them. The publishing market in Australia and globally is noisier than it's ever been. Without a clear marketing strategy, even a brilliant book gets buried. That's where we come in.
          <br />
          At Crux Publishing House, our book marketing team makes sure the right readers find your work, wherever they are searching.
        </>
      ),
      ctaText: "Get Your Free Marketing Quote",
      ctaHref: "/contact",
    },
    bookConsultation: {
      eyebrow: "What We Do For Your Book",
      title: "Complete Book Marketing Services, Built Around Your Goals",
      description:
        "We don't hand you a template and wish you luck. Every author we work with gets a marketing approach that fits their book, their genre, and the readers they're actually trying to reach.",
      cards: [
        {
          title: "Amazon A+ Content & Platform Optimisation",
          description:
            "Your Amazon listing is often the very first impression a reader gets of your book. Most authors leave it bare. We build it properly, rich A+ content, targeted keywords, and a description that genuinely sells without sounding like a sales pitch.",
          items: [
            "Amazon A+ content design and copy",
            "Keyword-optimised book description",
            "Category and BISAC selection for discoverability",
            "Author Central profile setup and optimisation",
            "Metadata for Apple Books, Kobo, and Barnes & Noble"
          ],
        },
        {
          title: "Author Branding & Online Presence",
          description: "We help you build a presence that makes your name as memorable as your title, because readers who trust you will follow you to your next book and the one after that.",
          items: [
            "Author brand identity and messaging",
            "Social media profile setup and bio copy",
            "Profile banners for Facebook, Instagram, and LinkedIn",
            "Australian Authors Marketplace profile listing",
          ],
        },
        {
          title: "Social Media Marketing & Content Strategy",
          description: "Instagram, Facebook, LinkedIn, or all three, develop a strategy on the platform that makes sense for your book",
          items: [
            "Platform selection based on your genre and audience",
            "Content calendar and post strategy",
            "Launch campaign planning and execution",
            "Promotional graphics and branded assets",
            "Reader engagement and community building guidance",
          ],
          twoColumnItems: true,
        },
        {
          title: "Global Distribution Across 40+ Platforms",
          description: "What's the point of a beautifully marketed book if it isn't actually available when someone goes looking for it? We get your book listed everywhere.",
          items: [
            "Distribution to Amazon, Apple Books, Kobo, and more",
            "Print-on-demand setup for physical copies",
            "eBook formatting and multi-platform submission",
            "Bookstore eligibility in Australia, US, and UK",
            "Ongoing listing management and updates",
          ],
        },
        {
          title: "Book Launch Strategy & Campaign Planning",
          description: "We do our best possible thing of gaining traction when it first hits the market.",
          items: [
            "Pre-launch reader list and ARC strategy",
            "Launch week content and activity plan",
            "Review strategy and early reader outreach",
            "Email announcement copy and templates",
            "Post-launch momentum and second-wind planning",
          ],
        },
        {
          title: "Ongoing Marketing Support After Launch",
          description: "Whether you're planning a second edition, a speaking event, or you just want to keep building your audience, our team is available to help you keep moving forward.",
          items: [
            "Quarterly marketing check-ins and strategy reviews",
            "Second edition and updated listing support",
            "New content and promotional campaigns",
            "Speaking and media opportunity preparation",
            "Long-term author platform growth planning",
          ],
        },
      ],
      ctaText: "Book a free consultation",
      ctaHref: "/contact",
    },
    whyChoose: {
      illustrationSrc: "/ebook-services/Frame.svg",
      title: "Why Crux Publishing House",
      description:
        <><b>What Makes Our Approach Different</b></>,
      items: [
        <>Australian-Based Team, Global Reach</>,
        <>One Team, Every Stage</>,
        <>You Keep 100% of Your Rights and Royalties</>,
        <>No Automated Replies. No Sales Scripts.</>,
        <>Transparent Process, Clear Timeline</>,
      ],
      ctaText: "Request a call",
      ctaHref: "/contact",
    },
    getInTouch: {
      title: "Have a Conversation",
      subtitle: "Ready to Give Your Book the Audience It Deserves?",
      paragraphs: [
        "You don't need a finished marketing plan to reach out, just the book and the decision to do something about it. Drop us a message and one of our publishing specialists will get back to you personally. No automated replies, no generic follow-up sequence. Just a real conversation about your book, your timeline, and what working together would actually look like.",
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
          question: "What does \"40+ platform distribution\" actually mean for my book?",
          answer:
            "It means your book is properly listed and available for purchase on over 40 of the major online bookselling platforms around the world, including Amazon, Apple Books, Kobo, Barnes & Noble, Google Play Books, and Booktopia in Australia, among others. With that we also handle the metadata, categories, keywords, and product descriptions for each platform so your book actually comes up when readers search for books like yours.",
        },
        {
          question: "How much time it will take in book marketing?",
          answer:
            "It completely depends on where your book.  If you have a completed, edited manuscript ready to go, we can typically have the full marketing setup, platforms, listings, author profile, A+ content, and launch plan, ready within four to eight weeks. If we are building the marketing strategy alongside the writing or editing process, then obviousy the timeline will be longer. We will discuss everything in our initial consultation.",
        },
        {
          question: "Will my book be listed on Australian bookstores, not just Amazon?",
          answer:
            "Yes. Australian distribution is very much part of what we do. That includes Booktopia, which is the largest Australian online bookstore, as well as physical bookstore eligibility through distribution networks. We also list your book on the Australian Authors Marketplace as part of the author profile setup. Your book reaches readers in Australia, the UK, the US, and across Europe, wherever people are buying books online.",
        },
        {
          question: "Do I have to manage any of the platforms myself after launch?",
          answer:
            "No. That's the whole point of working with us. You don't need to learn how Amazon's KDP dashboard works, figure out Kobo's submission process, or understand what BISAC codes are. We are here to manage these things. You get access to your royalty reports directly from each platform, so you can see how your book is selling, but the technical side of managing your listings is our job, not yours.",
        },
        {
          question: "What genres and book types do your marketing services cover?",
          answer:
            "We work across every major genre, fiction, non-fiction, memoir, biography, self-help, health and wellness, business, children's books, audiobook, and more. The marketing strategy we created is always particular to your genre and your target readership, because the way you reach readers of literary fiction is very different from the way you reach people looking for a business book or a parenting guide. We match your book with people on our team who genuinely understand your genre.",
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
