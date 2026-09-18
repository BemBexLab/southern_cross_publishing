import React from "react";

const storyParagraphs = [
  "Publishing your first book should feel like a milestone, not a maze. We know that the moment you decide to write, something shifts. Suddenly, the idea that once felt private becomes something you want the world to see. That excitement is real, and it deserves to be protected.",
  "At Crux Publishing House, weve created our complete process around keeping that feeling alive, from your very first conversation with us to the day your book lands in a reader's hands.",
  "We do a lot more than just publishing books; we make them with care. Our network of experienced writers, editors, illustrators, and publishing specialists works closely with every author we take on, because no two stories are the same and no two authors need the same kind of support.",
  "No matter if you come to us with a finished draft or a single sentence of an idea, we meet you exactly where you are and walk the rest of the road with you.",
  "Your words were always worth reading. We are just here to make sure the right people find them.",
];

const YourStory = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#06684b] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{
        backgroundImage: 'url("/home/Rectangle 20.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-[860px]">
          <h2 className="goneva max-w-[18ch] text-[2.4rem] leading-[0.98] text-[#f7f1d7] sm:max-w-[20ch] sm:text-[3.1rem] md:max-w-[22ch] md:text-[3.7rem] lg:max-w-[24ch] lg:text-[4.3rem]">
            Your Story, Your Dream, Our Commitment, let&apos;s make your story
            into a reality too, along with 1000 authors
          </h2>

          <div className="dm-sans mt-8 max-w-[760px] space-y-4 text-[1rem] leading-[1.55] text-white/92 sm:text-[1.05rem] sm:leading-[1.6] md:text-[1.08rem] md:leading-[1.65] lg:mt-10 lg:text-[1.1rem] lg:leading-[1.7]">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourStory;
