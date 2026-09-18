import React from "react";

type StepCard = {
  id: number;
  title: string;
  body: string;
  left: string;
  top: number;
  rotate: number;
  row: 1 | 2;
};

const steps: StepCard[] = [
  {
    id: 1,
    title: "We sit down together, virtually or otherwise",
    body: "Before anything else, we listen. This first conversation is about you, your background, your vision, the kind of book you want to put into the world, and the readers you want to reach. No forms and pressure. Just an honest chat so we understand exactly what we're building together.",
    left: "9.5%",
    top: 68,
    rotate: -4,
    row: 1,
  },
  {
    id: 2,
    title: "We map out your book's entire blueprint",
    body: "After getting the complete understanding of your vision, our team will create a clear publishing plan according to your genre, your audience, and your goals. You will know exactly what's happening, in what order, and why, before a single page gets written or edited.",
    left: "34%",
    top: 82,
    rotate: 4,
    row: 1,
  },
  {
    id: 3,
    title: "Our writers and editors get to work",
    body: "This is where your idea becomes a manuscript. Whether we are ghostwriting from scratch, editing what you have already written, or somewhere in between, our subject matter experts shape your content into clean, compelling, reader ready prose that sounds authentically like you.",
    left: "58%",
    top: 112,
    rotate: 4,
    row: 1,
  },
  {
    id: 4,
    title: "Your book gets dressed; cover, layout, and everything in between",
    body: "Readers absolutely judge a book by its cover, so we make sure yours earns a second look. Our designers work on a complete visual package, interior formatting, typography, and a cover that reflects the heart of your story and stands out in any marketplace.",
    left: "82%",
    top: 118,
    rotate: -6,
    row: 1,
  },
  {
    id: 5,
    title: "Nothing leaves without passing our standards",
    body: "Every manuscript goes through a thorough quality review before it goes anywhere near a publishing platform. We check for consistency, accuracy, flow, and formatting across every format, print, eBook, and audiobook, so what reaches readers is something you are genuinely proud of.",
    left: "17.5%",
    top: 52,
    rotate: 5,
    row: 2,
  },
  {
    id: 6,
    title: "Your book goes live across every platform that matters",
    body: "We handle the submission, listings, metadata, and Amazon A+ content. Your book lands on 40+ global platforms, fully optimised so the right readers find it. You don't need to navigate a single publishing portal.",
    left: "50%",
    top: 150,
    rotate: -3,
    row: 2,
  },
  {
    id: 7,
    title: "You're a published author, and we stay with you",
    body: "Publication is not the finish line; it's the starting gun. We continue supporting you with marketing strategies, author branding, and promotional tools that help your book build momentum long after launch day.",
    left: "77.5%",
    top: 118,
    rotate: -4,
    row: 2,
  },
];

const StepCardBlock = ({
  step,
  className = "",
}: {
  step: StepCard;
  className?: string;
}) => (
  <article
    className={`relative flex h-[320px] w-[242px] flex-col items-center rounded-[18px] bg-[#0a9654] px-5 pb-5 pt-8 text-center text-[#f7f1d7] shadow-none ${className}`}
  >
    <div className="absolute left-1/2 top-3 h-7 w-7 -translate-x-1/2 rounded-full border-[4px] border-[#f3c423] bg-[#f7f1d7]" />
    <h3 className="dm-sans mt-4 text-[0.96rem] font-bold leading-[1.08] text-[#f3c423]">
      {step.id}. {step.title}
    </h3>
    <p className="dm-sans mt-4 text-[0.8rem] leading-[1.1] text-[#f7f1d7]">
      {step.body}
    </p>
  </article>
);

const HowItWorks = () => {
  const topRow = steps.filter((step) => step.row === 1);
  const bottomRow = steps.filter((step) => step.row === 2);

  return (
    <section className="overflow-x-hidden bg-[#EBE5CC] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        <p className="dm-sans pb-4 text-center text-lg font-semibold italic sm:text-lg md:text-xl lg:text-2xl">
          How It Works
        </p>
        <h2 className="goneva mx-auto max-w-[17ch] text-center text-[2.2rem] leading-[1.02] text-[#018752] sm:max-w-[18ch] sm:text-[2.75rem] md:max-w-[20ch] md:text-[3rem] lg:max-w-[27ch] lg:text-[3.2rem]">
          A clear, honest road from your very first conversation to the day you hold your published book
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:hidden">
          {steps.map((step) => (
            <div key={step.id} className="flex justify-center">
              <StepCardBlock
                step={step}
                className="h-auto min-h-[280px] w-full max-w-[390px] px-4 pb-6 pt-7 md:min-h-[300px]"
              />
            </div>
          ))}
        </div>

        <div className="relative mt-10 hidden lg:block">
          <div className="relative h-[1050px] w-full">
            <svg
              className="pointer-events-none absolute left-1/2 top-0 h-[240px] w-screen -translate-x-1/2"
              viewBox="0 0 1440 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M-8 156C151 118 302 103 456 110C652 121 818 171 990 165C1163 160 1329 92 1456 -10"
                stroke="#8A897C"
                strokeWidth="1.4"
                strokeDasharray="9 10"
              />
            </svg>

            {topRow.map((step) => (
              <div
                key={step.id}
                className="absolute"
                style={{
                  left: step.left,
                  top: `${step.top}px`,
                  transform: `translateX(-50%) rotate(${step.rotate}deg)`,
                }}
              >
                <StepCardBlock step={step} />
              </div>
            ))}

            <svg
              className="pointer-events-none absolute left-1/2 top-[570px] h-[240px] w-screen -translate-x-1/2"
              viewBox="0 0 1440 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M-6 70C166 7 329 11 476 88C642 175 830 182 1001 118C1167 57 1317 54 1450 155"
                stroke="#8A897C"
                strokeWidth="1.4"
                strokeDasharray="9 10"
              />
            </svg>

            {bottomRow.map((step) => (
              <div
                key={step.id}
                className="absolute"
                style={{
                  left: step.left,
                  top: `${step.top + 542}px`,
                  transform: `translateX(-50%) rotate(${step.rotate}deg)`,
                }}
              >
                <StepCardBlock step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
