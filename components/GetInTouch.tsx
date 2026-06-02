import React from "react";
import { BiEnvelope } from "react-icons/bi";
import {
  FaCheck,
  } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

type GetInTouchProps = {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  formHeadline?: string;
  ctaText?: string;
};

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#FDD118] text-[#078c52] sm:h-12 sm:w-12">
        {icon}
      </div>
      <p className="montserrat min-w-0 pt-1 text-sm font-medium leading-[1.5] break-words text-[#f6ecd1] sm:text-[1.02rem]">
        {text}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block min-w-0 transition-opacity hover:opacity-85"
      >
        {content}
      </a>
    );
  }

  return content;
};

const defaultParagraphs = [
  "You don't need a finished manuscript, a polished pitch, or any publishing experience to reach out to us. All you need is the story you've been sitting on and the decision to finally do something about it. We've heard every kind of idea, rough, half-formed, fully written, completely stuck, and we know exactly how to move it forward.",
  "Drop us a message, and one of our publishing specialists will get back to you personally, no automated replies, no sales scripts. Just a real conversation about your book, your timeline, and what working together would actually look like.",
  "Send Us a Message"
];

const GetInTouch = ({
  title = "Your book is closer than you think. Let's talk about it.",
  subtitle = "Start with a simple conversation",
  paragraphs = defaultParagraphs,
  formHeadline = "Send Us a Message",
  ctaText,
}: GetInTouchProps) => {
  return (
    <section
      className="relative overflow-hidden bg-[#078c52] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{
        backgroundImage: "url('/home/Rectangle 42.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative mx-auto grid w-full max-w-[1720px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(520px,1fr)] lg:items-start lg:gap-12 xl:gap-16">
        <div className="w-full pt-2 text-[#f6ecd1] lg:pt-8">
          <h2 className="goneva w-full text-[1.75rem] leading-[1.08] sm:text-[2.1rem] md:text-[2.45rem] lg:text-[2.85rem] xl:text-[3.1rem]">
            {title}
          </h2>

          <p className="montserrat my-3 text-[1rem] font-medium italic leading-tight text-[#FDD118] sm:my-2 sm:text-[1.16rem] md:text-[1.32rem] lg:text-[1.55rem] xl:text-[1.7rem]">
            {subtitle}
          </p>

          <div className="montserrat w-full space-y-3 text-[0.96rem] leading-[1.65] text-[#e8eddc] sm:text-[1rem] md:text-[1.04rem] lg:text-[1.06rem]">
            {paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-7 lg:gap-5">
            <ContactItem
              icon={<FiPhone className="h-6 w-6 sm:h-7 sm:w-7" />}
              text="+1 (786) 496-1231"
              href="tel:+17864961231"
            />
            <ContactItem
              icon={<BiEnvelope className="h-6 w-6 sm:h-7 sm:w-7" />}
              text="info@southerncrosspublishing.com.au"
              href="mailto:info@southerncrosspublishing.com.au"
            />
            <div className="sm:col-span-2">
              <ContactItem
                icon={<IoLocationOutline className="h-6 w-6 sm:h-7 sm:w-7" />}
                text="1680 Michigan Ave 700 326 Miami Beach, FL 33139, USA"
              />
            </div>
          </div>
        </div>

        <div className="w-full rounded-[18px] bg-[linear-gradient(135deg,rgba(223,236,214,0.72),rgba(179,212,190,0.82))] p-5 shadow-[0_22px_65px_rgba(4,76,47,0.18)] backdrop-blur-[4px] sm:p-7 md:p-8 lg:px-8 lg:py-8 xl:px-9">
          <h3 className="montserrat text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#078c52] sm:text-[1.95rem] md:text-[2.15rem] lg:text-[2.45rem]">
            {formHeadline}
          </h3>

          <form className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="montserrat h-12 w-full rounded-[17px] border-none bg-[#f6efd7] px-4 text-[0.96rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:h-[52px] sm:px-5 sm:text-[1rem] lg:px-6"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="montserrat h-12 w-full rounded-[17px] border-none bg-[#f6efd7] px-4 text-[0.96rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:h-[52px] sm:px-5 sm:text-[1rem] lg:px-6"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                placeholder="Email"
                className="montserrat h-12 w-full rounded-[17px] border-none bg-[#f6efd7] px-4 text-[0.96rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:h-[52px] sm:px-5 sm:text-[1rem] lg:px-6"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="montserrat h-12 w-full rounded-[17px] border-none bg-[#f6efd7] px-4 text-[0.96rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:h-[52px] sm:px-5 sm:text-[1rem] lg:px-6"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              className="montserrat min-h-[140px] w-full resize-none rounded-[17px] border-none bg-[#f6efd7] px-4 py-4 text-[0.96rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:min-h-[150px] sm:px-5 sm:py-5 sm:text-[1rem] lg:px-6"
            />

            <label className="flex items-start gap-3 text-[#526356]">
              <span className="mt-[2px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[7px] bg-[#078c52] text-[#f6efd7] sm:h-[26px] sm:w-[26px]">
                <FaCheck className="h-4 w-4" />
              </span>
              <span className="montserrat max-w-[510px] text-[0.8rem] leading-[1.45] sm:text-[0.9rem] md:text-[0.94rem]">
                By submitting this form, you agree to be contacted via phone or email regarding your publishing inquiry. We respect your privacy and will never share your details with third parties.
              </span>
            </label>

            <button
              type="submit"
              className="montserrat inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-[#078c52] px-6 text-[1rem] font-medium text-[#f6efd7] transition hover:opacity-95 sm:w-auto sm:min-w-[190px] sm:text-[1.15rem] lg:h-[50px] lg:text-[1.3rem]"
            >
              {ctaText ?? "Let's Build Your Book"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
