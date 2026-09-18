import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  const plans = [
    {
      title: "Silver",
      description:
        "Everything a new author needs to go from manuscript to published, without difficulties. Professional editing, a custom cover, interior formatting, ISBN registration, and distribution to the platforms that matter most. ",
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
      className="relative overflow-hidden py-10 sm:py-14 lg:py-16"
      style={{
        backgroundImage: "url('/publishing-service/Group 1000001754.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <p className="dm-sans mb-3 text-xl italic text-[#FDD118] sm:mb-4 sm:text-2xl">
            Pricing & Packages
          </p>
          <h2 className="goneva py-2 text-4xl font-medium text-[#F7F1D7] sm:text-5xl lg:text-6xl">
            We Priced These Packages Around Real Authors, Not Ideal Ones
          </h2>
          <p className="mx-auto max-w-5xl text-base leading-relaxed text-[#F7F1D7] sm:text-lg lg:text-xl">
            Some people come to us with a finished draft. Some come with a voice note and a dream. Either way, there is a plan here that meets you where you actually are, not where publishing expects you to be. 
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5 sm:space-y-6 lg:space-y-7">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 rounded-[28px] bg-[#fdf8e1] px-5 py-8 sm:px-8 sm:py-10 lg:flex-row lg:gap-x-10 lg:rounded-[40px] lg:px-10 lg:py-12"
            >
              {/* Left Column */}
              <div className="lg:w-1/3">
                <h4 className="goneva text-4xl text-[#018752] sm:text-5xl">
                  {plan.title}
                </h4>
                <p className="dm-sans my-6 text-base text-[#1F1F1F] sm:my-8 sm:text-lg">
                  {plan.description}
                </p>
                <a
                  href="/contact"
                  className="dm-sans inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#428a5a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#356e48] sm:px-6 sm:text-base"
                >
                  Custom Quote <FaArrowRight size={12} />
                </a>
              </div>

              {/* Right Column (Features) */}
              <div className="lg:w-2/3">
                <p className="dm-sans mb-4 text-lg font-bold text-[#018752] sm:mt-2 sm:text-xl">
                  Included:
                </p>
                <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                  {plan.features.map((col, colIndex) => (
                    <div key={colIndex} className="space-y-3">
                      {col.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-base sm:text-lg">
                          <HiCheckCircle className="mt-1 shrink-0 text-[#018752]" />
                          <span className="leading-snug text-[#1F1F1F]">
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
