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
      className="relative py-5 sm:py-10 overflow-hidden"
      style={{
        backgroundImage: "url('/publishing-service/Group 1000001754.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full p-16 px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FDD118] montserrat italic text-2xl mb-2 sm:mb-4">
            Pricing & Packages
          </p>
          <h2 className="text-[#F7F1D7] goneva font-medium text-4xl md:text-6xl font-serif py-2">
            Flexible Plans Tailored To Your Needs
          </h2>
          <p className="text-[#F7F1D7] text-xl max-w-7xl mx-auto">
            "Pricing may vary depending on the genre, page and word count, and
            your specific needs for publishing, marketing, or ghostwriting. For
            a personalized estimate and detailed consultation, click on 'Custom
            Quote' to speak with a publishing expert."
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5 mx-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#fdf8e1] rounded-[40px] py-15 px-8 flex flex-col lg:flex-row gap-x-10"
            >
              {/* Left Column */}
              <div className="lg:w-1/3">
                <h4 className="text-[#018752] goneva text-5xl">
                  {plan.title}
                </h4>
                <p className="text-[#1F1F1F] montserrat text-lg my-8">
                  {plan.description}
                </p>
                <button className="flex items-center montserrat gap-2 bg-[#428a5a] hover:bg-[#356e48] text-white px-6 py-3 rounded-lg text-md font-semibold transition-colors">
                  Custom Quote <FaArrowRight size={12} />
                </button>
              </div>

              {/* Right Column (Features) */}
              <div className="lg:w-2/3">
                <p className="text-[#018752] montserrat font-bold text-xl mb-4 sm:mt-5">Included:</p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {plan.features.map((col, colIndex) => (
                    <div key={colIndex} className="space-y-3">
                      {col.map((feature, i) => (
                        <div key={i} className="flex items-center text-lg gap-2">
                          <HiCheckCircle
                            className="text-[#018752]"
                          />
                          <span className="text-[#1F1F1F] leading-tight">
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
