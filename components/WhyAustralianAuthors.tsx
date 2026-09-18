import Image from "next/image";

const authorReasons = [
  {
    title: "We Work With Authors at Every Stage: Idea, Draft, or Finished Manuscript",
    description:
      "Whether you have a completed manuscript, a rough draft, or just an idea, we can work with it. You don't need to have it all figured out before coming to us. That's exactly what we're here for.",
    iconSrc: "/who-we-are/contract_5617923 1.svg",
    iconAlt: "icon",
  },
  {
    title: "Complete Self-Publishing Services Under One Roof: Writing to Global Distribution",
    description:
      `Writing, editing, design, publishing, marketing, audiobooks, distribution, all handled by one team that knows each other and works together. No gaps. No, "that's not our department." One partner for everything.`,
    iconSrc: "/who-we-are/leadership_12773480 1.svg",
    iconAlt: "icon",
  },
  {
    title: "You Keep 100% of Your Rights",
    description:
      "Your book is yours. We help you publish it, we don't own it. You retain full intellectual property, full royalty rights, and full control over what happens to your work. Always.",
    iconSrc: "/who-we-are/book_5765621 1.svg",
    iconAlt: "icon",
  },
  {
    title: "Affordable Without Cutting Corners",
    description:
      "Publishing professionally doesn't have to cost a fortune. We've built our packages to be genuinely affordable while maintaining the quality standard every author deserves. The two aren't mutually exclusive.",
    iconSrc: "/who-we-are/contract_5617923 1.svg",
    iconAlt: "icon",
  },
  {
    title: "Marketing Is Built In, Not an Afterthought",
    description:
      "Most publishers stop at publication. We don't. Our marketing team helps your book reach the readers it deserves, from Amazon optimisation to social media campaigns that actually work.",
    iconSrc: "/who-we-are/leadership_12773480 1.svg",
    iconAlt: "icon",
  },
  {
    title: "Over 1,000 Published Authors, and Counting",
    description:
      "Over 1,000 authors have published through Crux . The reason they come to us, and the reason they send their friends to us, is because the experience is as good as the result.",
    iconSrc: "/who-we-are/book_5765621 1.svg",
    iconAlt: "icon",
  },
];

const WhyAustralianAuthors = () => {
  return (
    <section className="bg-[#078c52] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-8xl flex-col items-center text-center">
        <div className="mx-auto w-full max-w-8xl text-center">
          <h2 className="goneva text-[1.9rem] leading-[1.08] text-[#FDD118] sm:text-[2.4rem] lg:text-[3.05rem]">
            Why Australian Authors Choose Crux  Publishing for Their Book
          </h2>
          {/* <p className="dm-sans mx-auto mt-5 w-full text-lg italic leading-[1.55] text-[#d8e8d6]">
            Whether you have a completed manuscript, a rough draft, or just an
            idea, we can work with it. You don&apos;t need to have it all figured
            out before coming to us. That&apos;s exactly what we&apos;re here for.
          </p> */}
        </div>

        <div className="mt-14 max-w-8xl grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-10 lg:mt-20 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-16">
          {authorReasons.map((reason, index) => (
            <article
              key={reason.title}
              className={`flex flex-col items-center px-2 text-center sm:px-6 lg:px-12 ${
                index % 3 !== 2 ? "lg:border-r lg:border-white/30" : ""
              }`}
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] bg-[#f6ecd0] shadow-[0_10px_24px_rgba(0,0,0,0.08)] sm:h-[82px] sm:w-[82px]">
                {reason.iconSrc ? (
                  <Image
                    src={reason.iconSrc}
                    alt={reason.iconAlt}
                    width={42}
                    height={42}
                    className="h-[42px] w-[42px] object-contain"
                  />
                ) : (
                  <div className="h-[42px] w-[42px]" aria-hidden="true" />
                )}
              </div>

              <h3 className="dm-sans mt-5 max-w-lg text-2xl font-semibold leading-[1.2] text-[#f8f2db]">
                {reason.title}
              </h3>

              <p className="dm-sans mt-3 max-w-lg text-lg text-[#d7e6d4]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAustralianAuthors;
