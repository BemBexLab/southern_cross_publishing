import React from "react";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "One team from start to finish",
      desc: "You are never handed off to a different company at each stage. The same team that evaluates your manuscript oversees editing, design, publishing, and post launch support. Everyone working on your book knows your story from the beginning.",
    },
    {
      title: "No hidden fees, no surprises",
      desc: "We are transparent about what is included in every package before any work begins. No confusing contracts, no add-ons you did not agree to, no unexpected charges when your book is ready to publish.",
    },
    {
      title: "You keep 100% of your rights and royalties",
      desc: "Publishing with Crux Publishing House is a service agreement, not a rights agreement. Your manuscript, your cover, your content, and every royalty your book earns belong entirely to you, from the first draft to the final sale.",
    },
    {
      title: "Realistic timelines, honest communication",
      desc: "We give you a clear production timeline at the start and keep you updated at every stage. If something changes, you hear it from us first, not when you chase for an update.",
    },
    {
      title: "Marketing is not an afterthought",
      desc: "Most publishing services stop at publication. We build your author presence and marketing strategy alongside your book, Amazon A+ content, platform optimisation, social positioning, and promotional planning, so your book has a real chance of being discovered.",
    },
  ];

  return (
    <section className="bg-[#fdf8e1] flex overflow-hidden">
      <div className="container mx-auto gap-x-13 max-w-[1400px] px-2">
        {/* Changed items-center to items-start to align image to the top */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Side: Illustration */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px]">
              {/* lg:pt-2 helps align the top of the hand with the first line of text */}
              <img
                src="/publishing-services/Stand (1).webp"
                alt="Flashlight highlighting a green book"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full py-10">
            <div className="mb-2">
              <h3 className="text-black dm-sans font-semibold italic text-2xl mb-3">
                Why Choose Us
              </h3>
              <h2 className="text-[#018752] text-xl md:text-xl lg:text-4xl goneva leading-[1.1]">
                Why Australian Authors Choose Crux Publishing House Over Every Other Option
              </h2>
            </div>

            <div className="space-y-1 dm-sans text-[#1F1F1F] text-md">
              <p>
                <b>One team from start to finish: </b> You are never handed off to a
                different company at each stage. The same team that evaluates
                your manuscript oversees editing, design, publishing, and post
                launch support. Everyone working on your book knows your story
                from the beginning.
              </p>
              <p>
                <b>No hidden fees, no surprises: </b> We are transparent about what is
                included in every package before any work begins. No confusing
                contracts, no add-ons you did not agree to, no unexpected
                charges when your book is ready to publish.
              </p>
              <p>
                <b>You keep 100% of your rights and royalties: </b> Publishing with
                Crux Publishing House is a service agreement, not a rights agreement.
                Your manuscript, your cover, your content, and every royalty
                your book earns belong entirely to you, from the first draft to
                the final sale.
              </p>
              <p>
                <b>Realistic timelines, honest communication:</b> We give you a clear
                production timeline at the start and keep you updated at every
                stage. If something changes, you hear it from us first, not when
                you chase for an update.
              </p>
              <p>
                <b>Marketing is not an afterthought: </b> Most publishing services stop
                at publication. We build your author presence and marketing
                strategy alongside your book, Amazon A+ content, platform
                optimisation, social positioning, and promotional planning, so
                your book has a real chance of being discovered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
