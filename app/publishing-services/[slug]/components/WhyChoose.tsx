import { FaCircleCheck } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import type { WhyChooseSectionData } from "../data";

interface WhyChooseProps {
  section: WhyChooseSectionData;
}

const WhyChoose = ({ section }: WhyChooseProps) => {
  return (
    <section className="bg-[#f5edd1] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-0">
      <div className="mx-auto grid max-w-8xl items-center gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <div className="relative mx-auto w-full max-w-xl self-stretch lg:h-full lg:max-w-none">
          <div className="relative aspect-[1.18/0.94] w-full overflow-hidden lg:h-full lg:min-h-full lg:aspect-auto">
            {section.illustrationSrc ? (
              <img
                src={section.illustrationSrc}
                alt=""
                className="absolute bottom-0 inset-0 h-full w-full object-fit object-center scale-[0.99] lg:object-center"
              />
            ) : (
              <div className="h-full w-full" aria-hidden="true" />
            )}
          </div>
        </div>
          
        {/* Right Side Text Div */}
        <div className="max-w-3xl lg:py-15">
          <h2 className="goneva text-3xl leading-tight text-[#068a56] sm:text-4xl lg:text-5xl">
            {section.title}
          </h2>

          <p className="dm-sans text-lg leading-relaxed text-[#505050]">
            {section.description}
          </p>

          <ul className="mt-7 space-y-4">
            {section.items.map((item, itemIndex) => (
              <li
                key={`why-choose-${itemIndex}`}
                className="dm-sans flex items-start gap-3 text-base leading-relaxed text-[#505050] sm:text-lg"
              >
                <FaCircleCheck className="mt-1 shrink-0 text-base text-[#0a8d58]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={section.ctaHref}
            className="dm-sans mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#ffd01f] px-6 py-3 text-base text-[#018752] transition hover:bg-[#ffd73a] sm:px-7"
          >
            <FiPhoneCall className="text-2xl" />
            <span className="font-black">{section.ctaText}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
