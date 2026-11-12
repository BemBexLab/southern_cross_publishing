import { ReactNode } from "react";

export type BlogImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type BlogContentBlock =
  | {
      type: "heading";
      level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      text: string;
    }
  | { type: "paragraphs"; paragraphs: (string | ReactNode)[] }
  | { type: "list"; listItems: (string | ReactNode)[] }
  | {
      type: "table";
      columns: number;
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "faqs";
      heading: string;
      items: { question: string; answer: string }[];
    }
  | { type: "image"; image: BlogImage };

export type BlogPostData = {
  slug: string;
  h1: string;
  excerpt: string;
  date: string;
  readTime?: number;
  image: BlogImage | null;
  content: BlogContentBlock[];
};

// Copy this example to add a post. Use a unique slug and an ISO date (YYYY-MM-DD).
// `h1` is the article title. Content blocks render in array order.
// Use h2–h6 for subsections; heading blocks also support h1 when needed.
// Set `image` to null for the hero placeholder. Image URLs can be public paths
// or remote URLs from hosts allowed in next.config.ts.
// Values are JSON-compatible data: no JSX, HTML, functions, or components.
export const BlogData: BlogPostData[] = [
  {
    slug: "how-to-self-publish-a-book-in-australia",
    h1: "How to Self-Publish a Book in Australia: A Complete Guide for First-Time Authors",
    excerpt: "Publishing a book is an exciting achievement for aspiring writers. Fortunately, self-publishing in Australia gives authors greater creative control, ownership and flexibility.",
    date: "2026-11-12",
    image: {
      url: "/blog/image3.png",
      alt: "Publishing in Australia? Avoid These Mistakes!",
    },
    content: [
      {
        type: "paragraphs",
        paragraphs: [
          "You no longer need to secure a traditional publishing contract before sharing your work. Independent authors can manage production, printing and distribution independently.",
          "However, understanding the publishing process is essential. This guide explains how to self-publish a book in Australia, from manuscript preparation to marketing."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "What Is Self-Publishing?",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Self-publishing allows authors to publish their books without relying on a traditional publishing house to manage the entire process.",
          "Authors typically organise editing, cover design, formatting, ISBN arrangements, printing and distribution. They also make decisions about pricing and marketing.",
          "Unlike traditional publishing, independent publishing gives authors greater control over their creative and commercial decisions."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "7 Steps to Self-Publish a Book in Australia",
      },
      {
        type: "image",
        image: {
          url: "/blog/image2.png",
          alt: "Book editing illustration",
          width: 1200,
          height: 630,
        },
      },
      {
        type: "heading",
        level: "h3",
        text: "1. Complete and Prepare Your Manuscript",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Start by finishing your manuscript and organising its structure. Review every chapter for clarity, consistency and readability.",
          "Consider your intended audience, book category and publishing goals before moving forward.",
          <b key="preparation-list-intro">Important preparation tasks include:</b>
        ],
      },
      {
        type: "list",
        listItems: [
          "Complete the manuscript draft.",
          "Organise chapters and sections.",
          "Check grammar and spelling.",
          "Review factual information.",
          "Prepare a suitable book title."
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "A professionally prepared manuscript creates a stronger foundation for successful book publishing."
        ],
      },
      {
        type: "heading",
        level: "h3",
        text: "2. Get Professional Book Editing",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Editing improves your manuscript's quality, readability and overall presentation. It also helps identify structural problems before publication.",
          <b key="editing-list-intro">Depending on your manuscript, you may need:</b>
        ],
      },
      {
        type: "list",
        listItems: [
          "Developmental editing for structure and content.",
          "Copy editing for grammar and consistency.",
          "Line editing for sentence clarity and flow.",
          "Proofreading for final spelling and punctuation checks.",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Professional editing is particularly valuable for first-time authors who want to publish polished books."
        ],
      },
      {
        type: "heading",
        level: "h3",
        text: "3. Design Your Book Cover and Format the Interior",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Your book cover creates the first impression for potential readers. Interior formatting ensures that the finished book looks professional and remains easy to read.",
          <b key="design-list-intro">Consider these essential design elements:</b>
        ],
      },
      {
        type: "list",
        listItems: [
          "Professional front and back cover design.",
          "Appropriate typography and font sizes.",
          "Consistent chapter headings.",
          "Correct margins and page layouts.",
          "Print-ready PDF or suitable ebook files."
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Both paperback and ebook editions require appropriate formatting specifications."
        ],
      },
      {
        type: "heading",
        level: "h3",
        text: "4. Understand ISBN Registration in Australia",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "An ISBN, or International Standard Book Number, identifies a specific book edition and format.",
          "Australian authors can obtain ISBN information through the Australian ISBN Agency, administered by Thorpe-Bowker.",
          "An ISBN is generally useful when distributing books through retailers, libraries and other book supply channels.",
          "Remember that separate editions and formats may require different ISBNs. An ISBN is not the same as copyright protection."
        ],
      },
      {
        type: "heading",
        level: "h3",
        text: "5. Choose Your Book Printing and Publishing Format",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Before publishing, decide how readers will access your book.",
        ],
      },
      {
        type: "table",
        columns: 2,
        caption: "Common publishing formats include:",
        headers: ["Book format", "Suitable for"],
        rows: [
          ["Paperback", "Affordable physical books"],
          ["Hardcover", "Premium printed editions"],
          ["Ebook", "Digital readers"],
          ["Audiobook", "Listeners and audio platforms"],
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Print-on-demand is another option for independent authors. Books are printed when customers place orders, reducing the need to maintain large inventories.",
          "Your printing decision should reflect your audience, budget and distribution strategy."
        ],
      },
      {
        type: "heading",
        level: "h3",
        text: "6. Publish and Distribute Your Book",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Once your manuscript and design files are ready, prepare them for your selected publishing platforms.",
          "Distribution determines where readers can discover and purchase your book.",
          <b key="design-list-intro">Consider the following options:</b>
        ],
      },
      {
        type: "list",
        listItems: [
          "Amazon Kindle Direct Publishing for eligible ebook and print publishing.",
          "IngramSpark for print and distribution opportunities.",
          "Direct sales through your own website.",
          "Independent bookstores and library supply channels.",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Platform availability, eligibility and distribution agreements vary. Always review current publishing requirements before submitting your files."
        ],
      },
      {
        type: "heading",
        level: "h3",
        text: "7. Promote Your Book and Build an Author Platform",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Publishing your book is only the beginning. Marketing helps readers discover your work and understand why it deserves their attention.",
          <b key="design-list-intro">Start with a practical promotional strategy:</b>
        ],
      },
      {
        type: "list",
        listItems: [
          "Create an author website.",
          "Develop an engaging book description.",
          "Build an email subscriber list.",
          "Share useful content on social media.",
          "Encourage genuine reader reviews.",
          "Plan promotional activities around launch dates."
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Consistent author branding and targeted book promotion can help establish long-term visibility."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "How Much Does It Cost to Self-Publish a Book in Australia?",
      },
      {
        type: "image",
        image: {
          url: "/blog/image4.png",
          alt: "Book editing illustration",
          width: 1200,
          height: 630,
        },
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Self-publishing costs depend on manuscript length, editing requirements, design complexity, printing quantities and distribution choices."
        ],
      },
      {
        type: "table",
        columns: 2,
        headers: ["Publishing expense", "What it covers"],
        rows: [
          ["Editing", "Manuscript refinement and proofreading"],
          ["Cover design", "Professional book artwork"],
          ["Formatting", "Interior layout and digital files"],
          ["ISBN", "Book identification"],
          ["Printing", "Physical book production"],
          ["Marketing", "Advertising and promotional activities"],
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "There is no universal publishing price. Request an itemised quotation and compare services before committing to a publishing package.",
          <>For a detailed breakdown, read our guide to <b>self-publishing costs in Australia (DB - How Much Does Self-Publishing Cost in Australia? )</b>.</>
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "Self-Publishing vs Traditional Publishing: Which Is Better?",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Both publishing approaches offer different advantages. Your decision should depend on your creative priorities, financial resources and publishing expectations.",
        ],
      },
      {
        type: "table",
        columns: 3,
        headers: ["Factor", "Self-publishing", "Traditional publishing"],
        rows: [
          ["Creative control", "Generally greater", "Shared with publisher"],
          ["Initial investment", "Often author-funded", "Usually publisher-funded"],
          ["Publishing timeline", "More flexible", "Often longer"],
          ["Royalties", "Depends on platform and costs", "Depends on contract"],
          ["Marketing", "More author involvement", "Publisher support varies"],
          ["Production decisions", "Author-controlled", "Publisher-controlled"],
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Neither option guarantees commercial success. Research both approaches before selecting your publishing route.",
          <>Explore <b>traditional publishing vs self-publishing (DB - Traditional Publishing vs Self-Publishing)</b> to understand their differences.</>
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "Common Mistakes First-Time Authors Should Avoid",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "New authors sometimes rush publication without understanding production and distribution requirements.",
          <b key="mistakes-list-intro">Avoid these common mistakes:</b>
        ],
      },
      {
        type: "list",
        listItems: [
          "Publishing without professional editing.",
          "Choosing an unsuitable book cover.",
          "Ignoring formatting requirements.",
          "Underestimating production expenses.",
          "Selecting distribution platforms without research.",
          "Neglecting book marketing.",
          "Signing publishing agreements without reviewing their terms."
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          <>Read our guide on <b>mistakes to avoid when self-publishing (DB - Self-Publishing Mistakes to Avoid)</b> before starting your publishing journey.</>,
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "How Much Can Self-Published Authors Earn?",
      },
      {
        type: "image",
        image: {
          url: "/blog/image1.png",
          alt: "Book editing illustration",
          width: 1200,
          height: 630,
        },
      },
      {
        type: "paragraphs",
        paragraphs: [
          <>Author earnings depend on book pricing, platform fees, printing expenses, distribution arrangements and actual sales.</>,
          "Some independent authors generate additional income through ebooks, paperbacks and audiobooks. However, earnings vary considerably between authors and titles.",
          <>Review <b>how much self-published authors earn</b> before setting realistic financial expectations.</>
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "How to Choose a Self-Publishing Company in Australia",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Choosing a publishing partner requires careful research. Compare service quality, contract terms, pricing transparency and distribution arrangements.",
          <b key="company-checklist-intro">Before signing an agreement, ask:</b>
        ],
      },
      {
        type: "list",
        listItems: [
          "What services are included?",
          "Who owns the manuscript and copyright?",
          "Are revisions included?",
          "Are additional fees charged?",
          "Who controls publishing accounts?",
          "What distribution channels are available?",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          <>Our guide to <b>choosing a self-publishing company (DB - How to Choose a Self-Publishing Company)</b> explains what authors should evaluate before making their decision.</>
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "Is Self-Publishing Worth It in Australia?",
      },
      {
        type: "paragraphs",
        paragraphs: [
          <>Self-publishing can be worthwhile for authors seeking creative independence, flexible production decisions and greater control over their publishing journey.</>,
          "However, success depends on preparation, professional production, realistic budgeting and effective promotion.",
          <b key="worth-it-internal-link">Explore <b>is self-publishing worth it</b> to evaluate whether independent publishing suits your goals.</b>
        ],
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How do I self-publish a book in Australia?",
            answer: "Complete your manuscript, arrange editing and design, obtain relevant ISBNs, prepare publishing files, select distribution platforms and promote your book.",
          },
          {
            question: "Do I need an ISBN to self-publish in Australia?",
            answer: "An ISBN is not legally mandatory for every publication. However, it is important for many commercial book distribution and identification purposes.",
          },
          {
            question: "Can I self-publish a book without a publisher?",
            answer: "Yes. Authors can independently organise production, upload eligible books to publishing platforms and manage distribution without a traditional publishing contract.",
          },
          {
            question: "How long does self-publishing take in Australia?",
            answer: "Timelines vary according to manuscript readiness, editing, design, printing and platform approvals. There is no fixed publishing timeframe.",
          },
          {
            question: "Can self-published authors sell books in Australian bookstores?",
            answer: "Generally, authors initially own copyright in their original work. However, contracts and licensing agreements can affect the rights granted to other parties.",
          },
          {
            question: "Do self-published authors own their copyright?",
            answer: "Generally, authors initially own copyright in their original work. However, contracts and licensing agreements can affect the rights granted to other parties.",
          },
          {
            question: "Is self-publishing better than traditional publishing?",
            answer: "Neither approach is universally better. Self-publishing offers greater control, while traditional publishing may provide publisher-funded production and distribution support.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-much-does-it-cost-to-self-publish-a-book-in-australia",
    h1: "How Much Does It Cost to Self-Publish a Book in Australia?",
    excerpt: "Self-publishing gives Australian authors creative freedom and greater control over their publishing decisions. However, understanding financial investment is essential.",
    date: "2026-11-13",
    image: {
      url: "/blog/blog2/image7.png",
      alt: "How Much Does It Cost to Self-Publish a Book in Australia?",
    },
    content: [
      {
        type: "paragraphs",
        paragraphs: [
          "The total cost depends on manuscript length, editing requirements, cover design, printing quantities and distribution choices.",
          "So, how much does it cost to self-publish a book in Australia? A professional text-only book can require several thousand dollars.",
          "This guide breaks down actual Australian publishing benchmarks, ISBN fees, printing costs and other essential expenses."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "How Much Does It Cost to Self-Publish a Book in Australia?",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "According to the Australian Society of Authors, professional production of a 75,000 word text-only book costs approximately A3,350–A5,350+.",
          "This benchmark covers editing, proofreading, cover design and layout files. It excludes printing, marketing, sales and distribution.",
          "Your final investment may differ depending on manuscript quality and publishing requirements."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "Self-Publishing Cost Breakdown in Australia",
      },
      {
        type: "table",
        columns: 3,
        headers: ["Publishing service", "Australian cost benchmark"],
        caption: "The individual expenses help authors prepare realistic publishing budgets.",
        rows: [
          ["Manuscript editing", "A1,000–A2,000+"],
          ["Proofreading", "Around A$600"],
          ["Professional cover design", "A1,000–A2,000+"],
          ["Interior layout files", "Around A$750"],
          ["Production subtotal", "A3,350–A5,350+"],
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "These figures are Australian Society of Authors benchmarks, not guaranteed supplier quotations.",
          "Actual prices depend on manuscript condition, professional experience and production complexity."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "1. How Much Does Book Editing Cost in Australia?",
      },
      {
        type: "image",
        image: {
          url: "/blog/blog2/image6.png",
          alt: "Book editing illustration",
          width: 1200,
          height: 630,
        },
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Editing is one of the most important expenses when preparing a manuscript for publication.",
          "The Australian Society of Authors estimates A1,000–A2,000+ for editing a 75,000-word text-only book.",
          "Different editing services involve different levels of professional attention."
        ],
      },
      {
        type: "list",
        listItems: [
          "Developmental editing improves structure and storytelling.",
          "Copy editing checks grammar and consistency.",
          "Line editing improves sentence clarity and readability.",
          "Proofreading identifies final spelling and punctuation errors.",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Request an individual quotation based on your manuscript's word count and editing requirements."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "2. Book Cover Design Costs in Australia",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "A professional book cover helps communicate your genre and attract potential readers.",
          "The Australian Society of Authors suggests A1,000–A2,000+ as a production benchmark for cover design.",
          "Illustrated children's books may require additional artwork and specialist illustration services.",
          "Before hiring a designer, confirm these inclusions:"
        ],
      },
      {
        type: "list",
        listItems: [
          "Front and back cover artwork.",
          "Spine design for printed editions.",
          "Commercial image licensing.",
          "Print-ready cover files.",
          "Ebook cover specifications."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "3. How Much Does Book Formatting Cost?",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Book formatting prepares manuscripts for paperback, hardcover and digital publishing.",
          "The Australian Society of Authors provides an indicative A$750 benchmark for layout files.",
          "Your final quotation depends on page count, images, tables and formatting complexity.",
          "Professional typesetting helps maintain consistent typography, spacing and chapter layouts."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "4. ISBN Registration Cost in Australia",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "An ISBN identifies a particular book edition, format and publisher.",
          "Australian authors can purchase ISBNs through the official Australian ISBN Agency, Thorpe-Bowker.",
        ],
      },
      {
        type: "table",
        columns: 2,
        headers: ["ISBN option", "Price (AUD)"],
        caption: "Current listed prices include:",
        rows: [
          ["Single ISBN", "A$44"],
          ["10 ISBNs", "A$88"],
          ["100 ISBNs", "A$480"],
          ["New publisher account setup", "A$55"],
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "A first-time publisher purchasing one ISBN would therefore pay A$99, including account setup.",
          "Each separately identified edition or format generally requires its own ISBN.",
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "5. Book Printing Costs in Australia",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Printing expenses depend on page count, paper quality, binding, colour and order quantity.",
          "An Australian printing supplier published these indicative prices for an A5, 200-page black-and-white paperback.",
        ],
      },
      {
        type: "table",
        columns: 3,
        headers: ["Quantity", "Total printing cost", "Cost per book"],
        rows: [
          ["50 copies", "A$517.95", "A$10.36"],
          ["100 copies", "A$890.07", "A$8.90"],
          ["250 copies", "A$1,982.42", "A$7.93"],
          ["500 copies", "A$3,778.02", "A$7.56"],
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "These prices include GST but exclude delivery. The supplier checked them on 12 October 2026.",
          "Larger orders reduce individual printing costs, although they require greater upfront investment.",
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "6. Amazon KDP Print-on-Demand Costs",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Print-on-demand allows authors to produce books when customers place orders.",
          "Amazon KDP publishes Australian paperback printing benchmarks for different book specifications.",
        ],
      },
      {
        type: "table",
        columns: 2,
        headers: ["Paperback specification", "Australian printing cost"],
        rows: [
          ["100-page black-and-white", "A$4.49"],
          ["200-page black-and-white", "A$6.47"],
          ["300-page black-and-white", "A$8.62"],
          ["100-page colour", "A$9.37"],
          ["150-page colour", "A$12.97"],
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "These are Amazon.com.au marketplace examples, not universal printing prices.",
          "Print-on-demand reduces inventory expenses because authors do not purchase large quantities upfront.",
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "What Is the Total Cost to Self-Publish a Book?",
      },
      {
        type: "image",
        image: {
          url: "/blog/blog2/image8.png",
          alt: "Book editing illustration",
          width: 1200,
          height: 630,
        },
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Consider a 75,000-word text-only book with professional editing, proofreading, cover design and formatting.",
          "Using the Australian Society of Authors benchmark, production costs reach A3,350–A5,350+.",
          "Add a first-time single ISBN purchase of A"
        ],
      },
      {
        type: "table",
        columns: 2,
        headers: ["Expense", "Estimated cost"],
        caption: "99and100printedcopiescostingapproximatelyA890.",
        rows: [
          ["Professional production", "A3,350–A5,350+"],
          ["Single ISBN and setup", "A$99"],
          ["100 printed copies", "A$890.07"],
          ["Estimated total", "A4,339.07–A6,339.07+"],
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "This example excludes marketing, distribution, delivery and additional production requirements.",
          "It is an illustrative budget, not a fixed publishing package quotation."
        ],
      },
      {
        type: "heading",
        level: "h2",
        text: "How Can Authors Reduce Self-Publishing Costs?",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Reducing unnecessary expenses helps authors manage their publishing investment.",
          "Consider these practical approaches:"
        ],
      },
      {
        type: "list",
        listItems: [
          "Complete manuscript revisions before professional editing.",
          "Compare multiple design and editing quotations.",
          "Use print-on-demand to avoid excess inventory.",
          "Purchase suitable ISBN quantities.",
          "Prepare a realistic marketing budget.",
          "Review publishing agreements before payment."
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Avoid sacrificing essential editing or professional presentation simply to reduce costs.",
          <>For additional planning guidance, explore <b>self-publishing costs in Australia (DB - How Much Does Self-Publishing Cost in Australia?)</b>.</>
        ],
      },
      {
        type: "faqs",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How much does it cost to self-publish a book in Australia?",
            answer: "A professional 75,000-word text-only book has an indicative production benchmark of A3,350–A5,350+, excluding printing, marketing and distribution.",
          },
          {
            question: "What is the cheapest way to self-publish in Australia?",
            answer: "Authors can manage suitable production tasks independently and use print-on-demand. However, professional editing and appropriate cover design remain important.",
          },
          {
            question: "How much does an ISBN cost in Australia?",
            answer: "Thorpe-Bowker lists one ISBN at A44.First-timepublisheraccountsetupaddsA55.",
          },
          {
            question: "How much does it cost to print 100 books?",
            answer: "An Australian supplier lists approximately A$890.07 for 100 A5, 200-page black-and-white paperbacks, including GST but excluding delivery.",
          },
          {
            question: "Is Amazon KDP free to use?",
            answer: "KDP does not charge an upfront publishing upload fee for standard paperback publishing. Printing costs are deducted when copies are sold.",
          },
          {
            question: "Are self-publishing packages worth the investment?",
            answer: "Packages can simplify publishing by combining editing, design and production services. Compare inclusions, revisions, ownership and additional charges before purchasing.",
          },
          {
            question: "Can I recover my self-publishing investment?",
            answer: "Authors can recover production expenses through book sales, but results depend on demand, pricing, distribution fees and actual sales.",
          },
        ],
      },
    ],
  },
];

export default BlogData;
