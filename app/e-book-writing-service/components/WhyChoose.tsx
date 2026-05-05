import { FaCircleCheck } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const whyChooseItems = [
  "Premium, start-to-end publishing solutions",
  "Experienced publishing professionals",
  "Transparent process & communication",
  "Full author ownership and rights",
  "Global publishing expertise",
];

const illustrationSrc = "/ebook-services/Frame.svg";

const WhyChoose = () => {
  return (
    <section className="bg-[#f5edd1] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-0">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <div className="relative mx-auto w-full max-w-xl lg:h-full lg:self-stretch">
          <div className="relative aspect-[1.18/0.94] w-full lg:absolute lg:inset-0 lg:h-full">
            {illustrationSrc ? (
              <img
                src={illustrationSrc}
                alt=""
                className="h-full w-full object-contain object-bottom"
              />
            ) : (
              <div className="h-full w-full" aria-hidden="true" />
            )}
          </div>
        </div>

        <div className="max-w-xl lg:py-20">
          <h2 className="goneva text-3xl leading-tight text-[#068a56] sm:text-4xl lg:text-5xl">
            Why Choose Southern Cross Publishing
          </h2>

          <ul className="mt-7 space-y-4">
            {whyChooseItems.map((item) => (
              <li
                key={item}
                className="montserrat flex items-start gap-3 text-base leading-relaxed text-[#505050] sm:text-lg"
              >
                <FaCircleCheck className="mt-1 shrink-0 text-base text-[#0a8d58]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="montserrat mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#ffd01f] px-6 py-3 text-base text-[#018752] transition hover:bg-[#ffd73a] sm:px-7">
            <FiPhoneCall className="text-2xl" />
            <span className="font-black">Request a Call</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
