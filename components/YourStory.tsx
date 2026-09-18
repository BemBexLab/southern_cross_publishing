import React from "react";

const storyParagraphs = [
  "Publishing your first book should feel like a milestone, not a maze. We know that the moment you decide to write, something shifts. Suddenly, the idea that once felt private becomes something you want the world to see. That excitement is real, and it deserves to be protected.",
  "At Crux Publishing House, we've created our complete process around keeping that feeling alive, from your very first conversation with us to the day your book lands in a reader's hands.",
  "We do a lot more than just publishing books; we make them with care. Our network of experienced writers, editors, illustrators, and publishing specialists works closely with every author we take on, because no two stories are the same and no two authors need the same kind of support.",
  "No matter if you come to us with a finished draft or a single sentence of an idea, we meet you exactly where you are and walk the rest of the road with you.",
  "Your words were always worth reading. We are just here to make sure the right people find them.",
];

const YourStory = () => {
  return (
    <section className="relative overflow-hidden bg-[#06684b] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/home/Rectangle 20.webp")' }}
        aria-hidden="true"
      >
        {/* Subtle brand-colored overlay to guarantee text contrast and readability on all screen sizes */}
        <div className="absolute inset-0 bg-[#06684b]/80 sm:bg-[#06684b]/70" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="max-w-[860px]">
          <h2 className="goneva max-w-[18ch] text-3xl leading-[1.1] text-[#f7f1d7] sm:max-w-[22ch] sm:text-4xl md:max-w-[26ch] md:text-5xl lg:max-w-[30ch] lg:text-6xl">
            Your Story, Your Dream, Our Commitment, let&apos;s make your story into a reality too, along with 1000 authors
          </h2>

          <div className="dm-sans mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-white/90 sm:mt-8 sm:text-[1.05rem] sm:leading-[1.6] md:space-y-6 md:text-[1.1rem] md:leading-[1.65] lg:mt-10">
            {storyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourStory;