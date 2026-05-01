import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';

const Section3 = () => {
  const plans = [
    {
      title: "Silver",
      description: "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
      features: [
        ["Amazon Author Central setup", "Outline creation or revision", "Manuscript review", "Line-by-line editing & proofreading", "Interior formatting & layout", "Custom book cover design", "Amazon Kindle & Print publishing"],
        ["Print-on-Demand integration", "Author bio creation", "Marketing consultation", "Access to Ink Founders author portal", "100% copyright ownership", "ISBN & barcode generation", "eBook, Paperback & Hardcover formats"]
      ]
    },
    {
      title: "Gold",
      description: "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
      features: [
        ["Author profile setup on major platforms", "Book outline creation or revision", "Manuscript review & feedback", "Line editing & professional proofreading", "Interior formatting & layout design", "Custom-designed book cover", "Publish on 40+ platforms (Amazon, B&N, Apple Books, Kobo, etc.)"],
        ["Global Print-on-Demand setup", "Author bio writing", "Personalized marketing consultation", "Access to Ink Founders author portal", "100% ownership & full copyright rights", "ISBN and barcode generation", "Available in eBook, Paperback & Hardcover formats"]
      ]
    },
    {
      title: "Platinum",
      description: "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
      features: [
        ["One-on-one interviews & story development", "Custom book outline creation", "Manuscript review", "Complete ghostwriting in your voice", "Unlimited revisions during writing", "Line editing & professional proofreading", "Interior formatting & layout design"],
        ["Custom book cover design", "Amazon publishing (Kindle & Print)", "Print-on-Demand setup", "Author bio writing", "Marketing consultation sessions", "Access to Ink Founders author portal", "100% ownership & copyright rights", "ISBN and barcode generation"]
      ]
    }
  ];

  return (
    <section className="relative bg-[#2d7a44] py-5 sm:py-10 overflow-hidden">
      {/* Background Star Decoration (Simplified) */}
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="white"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
      </div>

      <div className="container mx-auto px-2 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#f5ce47] italic font-serif text-xl mb-2 sm:mb-4">Pricing & Packages</h3>
          <h2 className="text-white text-4xl md:text-5xl font-serif mb-2 sm:mb-6">Flexible Plans Tailored To Your Needs</h2>
          <p className="text-white/70 text-sm max-w-3xl mx-auto leading-relaxed">
            "Pricing may vary depending on the genre, page and word count, and your specific needs for publishing, marketing, or ghostwriting. For a personalized estimate and detailed consultation, click on 'Custom Quote' to speak with a publishing expert."
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {plans.map((plan, index) => (
            <div key={index} className="bg-[#fdf8e1] rounded-[40px] p-4 md:p-8 flex flex-col lg:flex-row gap-10">
              {/* Left Column */}
              <div className="lg:w-1/3">
                <h4 className="text-[#2d7a44] text-5xl font-serif mb-6">{plan.title}</h4>
                <p className="text-[#2d7a44]/80 text-sm leading-relaxed mb-8">
                  {plan.description}
                </p>
                <button className="flex items-center gap-2 bg-[#428a5a] hover:bg-[#356e48] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors">
                  Custom Quote <FaArrowRight size={12} />
                </button>
              </div>

              {/* Right Column (Features) */}
              <div className="lg:w-2/3">
                <p className="text-[#2d7a44] font-bold mb-4">Included:</p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {plan.features.map((col, colIndex) => (
                    <div key={colIndex} className="space-y-3">
                      {col.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <HiCheckCircle className="text-[#2d7a44] mt-1 shrink-0" size={18} />
                          <span className="text-[#2d7a44]/80 text-sm leading-tight">{feature}</span>
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