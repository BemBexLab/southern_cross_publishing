import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  const plans = [
    {
      title: "Silver",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
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
          "Access to Ink Founders author portal",
          "100% copyright ownership",
          "ISBN & barcode generation",
          "eBook, Paperback & Hardcover formats",
        ],
      ],
    },
    {
      title: "Gold",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
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
          "Access to Ink Founders author portal",
          "100% ownership & full copyright rights",
          "ISBN and barcode generation",
          "Available in eBook, Paperback & Hardcover formats",
        ],
      ],
    },
    {
      title: "Platinum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
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
          "Access to Ink Founders author portal",
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
        backgroundImage: "url('/publishing-service/Group 1000001754.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <p className="montserrat mb-3 text-xl italic text-[#FDD118] sm:mb-4 sm:text-2xl">
            Pricing & Packages
          </p>
          <h2 className="goneva py-2 text-4xl font-medium text-[#F7F1D7] sm:text-5xl lg:text-6xl">
            Flexible Plans Tailored To Your Needs
          </h2>
          <p className="mx-auto max-w-5xl text-base leading-relaxed text-[#F7F1D7] sm:text-lg lg:text-xl">
            "Pricing may vary depending on the genre, page and word count, and
            your specific needs for publishing, marketing, or ghostwriting. For
            a personalized estimate and detailed consultation, click on 'Custom
            Quote' to speak with a publishing expert."
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
                <p className="montserrat my-6 text-base text-[#1F1F1F] sm:my-8 sm:text-lg">
                  {plan.description}
                </p>
                <a
                  href="/contact"
                  className="montserrat inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#428a5a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#356e48] sm:px-6 sm:text-base"
                >
                  Custom Quote <FaArrowRight size={12} />
                </a>
              </div>

              {/* Right Column (Features) */}
              <div className="lg:w-2/3">
                <p className="montserrat mb-4 text-lg font-bold text-[#018752] sm:mt-2 sm:text-xl">
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
