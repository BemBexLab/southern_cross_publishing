import React from "react";

import { HiCheckCircle } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  const plans = [
    {
      title: "Silver",
      description:
        "Everything a new author needs to go from manuscript to published, without difficulties. Professional editing, a custom cover, interior formatting, ISBN registration, and distribution to the platforms that matter most.",
      features: [
        [
          "Amazon Author Central setup",
          "Outline creation or revision",
          "Manuscript review",
          "Line-by-line editing & proofreading",
          "Interior formatting & layout",
          "Custom book cover design",
          "Amazon Kindle & Print publishing",
        ],
        [
          "Print-on-Demand integration",
          "Author bio creation",
          "Marketing consultation",
          "Access to Crux Publishing House author portal",
          "100% copyright ownership",
          "ISBN & barcode generation",
          "eBook, Paperback & Hardcover formats",
        ],
      ],
    },
    {
      title: "Gold",
      description:
        "Chosen by most of our authors for good reason, Gold gives you everything in Silver plus ghostwriting support, Amazon A+ content optimisation, and a marketing foundation that means your book has a real chance of being discovered.",
      features: [
        [
          "Author profile setup on major platforms",
          "Book outline creation or revision",
          "Manuscript review & feedback",
          "Line editing & professional proofreading",
          "Interior formatting & layout design",
          "Custom-designed book cover",
          "Publish on 40+ platforms (Amazon, B&N, Apple Books, Kobo, etc.)",
        ],
        [
          "Global Print-on-Demand setup",
          "Author bio writing",
          "Personalized marketing consultation",
          "Access to Crux Publishing House author portal",
          "100% ownership & full copyright rights",
          "ISBN and barcode generation",
          "Available in eBook, Paperback & Hardcover formats",
        ],
      ],
    },
    {
      title: "Platinum",
      description:
        "Our most comprehensive service, from imagination to global release, we take care of every step. Complete ghostwriting, professional audiobook production, global distribution across 40+ platforms, priority support, and a dedicated publishing consultant who stays with your project from start to end. For authors who want the best.",
      features: [
        [
          "One-on-one interviews & story development",
          "Custom book outline creation",
          "Manuscript review",
          "Complete ghostwriting in your voice",
          "Unlimited revisions during writing",
          "Line editing & professional proofreading",
          "Interior formatting & layout design",
        ],
        [
          "Custom book cover design",
          "Amazon publishing (Kindle & Print)",
          "Print-on-Demand setup",
          "Author bio writing",
          "Marketing consultation sessions",
          "Access to Crux Publishing House author portal",
          "100% ownership & copyright rights",
          "ISBN and barcode generation",
        ],
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20"
      style={{
        backgroundImage:
          "url('/publishing-service/Group 1000001754.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-[1200px] text-center sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          <p className="dm-sans mb-2 text-base italic text-[#FDD118] sm:mb-3 sm:text-lg md:text-xl lg:text-2xl">
            Pricing & Packages
          </p>

          <h2 className="goneva text-[30px] font-medium leading-[1.15] text-[#F7F1D7] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl">
            We Priced These Packages Around Real Authors, Not Ideal Ones
          </h2>

          <p className="mx-auto mt-4 max-w-5xl text-sm leading-6 text-[#F7F1D7] sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:text-xl">
            Some people come to us with a finished draft. Some come with a
            voice note and a dream. Either way, there is a plan here that meets
            you where you actually are, not where publishing expects you to be.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5 sm:space-y-6 lg:space-y-7">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                rounded-[22px]
                bg-[#fdf8e1]
                px-4
                py-6
                sm:rounded-[26px]
                sm:px-6
                sm:py-8
                md:px-8
                md:py-10
                lg:grid
                lg:grid-cols-[0.8fr_1.2fr]
                lg:gap-10
                lg:rounded-[32px]
                lg:px-10
                lg:py-10
                xl:grid-cols-[0.75fr_1.25fr]
                xl:gap-14
                xl:rounded-[40px]
                xl:px-12
                xl:py-12
              "
            >
              {/* Left Column */}
              <div className="min-w-0">
                <h4 className="goneva text-3xl leading-none text-[#018752] sm:text-4xl md:text-5xl">
                  {plan.title}
                </h4>

                <p className="dm-sans my-4 text-sm leading-6 text-[#1F1F1F] sm:my-5 sm:text-base sm:leading-7 md:my-6 md:text-[17px] md:leading-7 lg:my-7">
                  {plan.description}
                </p>

                <a
                  href="/contact"
                  className="
                    dm-sans
                    group
                    inline-flex
                    min-h-[46px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#428a5a]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#356e48]
                    hover:shadow-md
                    sm:w-auto
                    sm:px-6
                    sm:text-base
                  "
                >
                  <span>Custom Quote</span>

                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Right Column */}
              <div className="mt-7 min-w-0 border-t border-[#018752]/20 pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14">
                <p className="dm-sans mb-5 text-lg font-bold text-[#018752] sm:text-xl">
                  Included:
                </p>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
                  {plan.features.map((col, colIndex) => (
                    <div key={colIndex} className="space-y-3 sm:space-y-4">
                      {col.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 sm:gap-3"
                        >
                          <HiCheckCircle className="mt-[3px] shrink-0 text-lg text-[#018752] sm:text-xl" />

                          <span className="dm-sans text-sm leading-5 text-[#1F1F1F] sm:text-base sm:leading-6 lg:text-[17px] lg:leading-6">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;