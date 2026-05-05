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
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[8px] bg-[#f7c51d] text-[#078c52] sm:h-[48px] sm:w-[48px]">
        {icon}
      </div>
      <p className="montserrat pt-1 text-sm font-medium leading-[1.4] text-[#f6ecd1] sm:text-[1.02rem]">
        {text}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="transition-opacity hover:opacity-85"
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
];

const GetInTouch = ({
  title = "Your book is closer than you think. Let's talk about it.",
  subtitle = "Start with a simple conversation",
  paragraphs = defaultParagraphs,
}: GetInTouchProps) => {
  return (
    <section
      className="relative overflow-hidden bg-[#078c52] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-14"
      style={{
        backgroundImage: "url('/home/Rectangle 42.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative mx-auto grid max-w-[1520px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-10">
        <div className="max-w-[680px] pt-2 text-[#f6ecd1] lg:pt-10">
          <h2 className="goneva max-w-[600px] text-[1.65rem] leading-[1.08] sm:text-[2rem] md:text-[2.3rem] lg:text-4xl">
            {title}
          </h2>

          <p className="montserrat my-3 text-[1.02rem] font-medium italic leading-tight text-[#f7c51d] sm:my-2 sm:text-[1.18rem] md:text-[1.35rem] lg:text-2xl">
            {subtitle}
          </p>

          <div className="montserrat max-w-[560px] space-y-3 text-[0.98rem] leading-[1.5] text-[#e8eddc] sm:text-[1.02rem] md:text-[1.06rem]">
            {paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-4 lg:mt-5">
            <ContactItem
              icon={<FiPhone className="h-7 w-7" />}
              text="+1 (786) 496-1231"
              href="tel:+17864961231"
            />
            <ContactItem
              icon={<BiEnvelope className="h-7 w-7" />}
              text="info@inkfounders.com"
              href="mailto:info@inkfounders.com"
            />
            <div className="sm:col-span-2">
              <ContactItem
                icon={<IoLocationOutline className="h-7 w-7" />}
                text="1680 Michigan Ave 700 326 Miami Beach, FL 33139, USA"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[18px] bg-[linear-gradient(135deg,rgba(223,236,214,0.72),rgba(179,212,190,0.82))] p-5 shadow-[0_22px_65px_rgba(4,76,47,0.18)] backdrop-blur-[4px] sm:p-8 lg:rounded-[18px] lg:px-[34px] lg:py-[30px]">
          <h3 className="montserrat text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#078c52] sm:text-[2.15rem] lg:text-[2.55rem]">
            Get In Touch Now!
          </h3>

          <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-5 lg:mt-7">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-[14px]">
              <input
                type="text"
                placeholder="First Name"
                className="montserrat h-[50px] rounded-[17px] border-none bg-[#f6efd7] px-5 text-[0.98rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:h-[52px] sm:px-6 sm:text-[1rem]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="montserrat h-[50px] rounded-[17px] border-none bg-[#f6efd7] px-5 text-[0.98rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:h-[52px] sm:px-6 sm:text-[1rem]"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-[14px]">
              <input
                type="email"
                placeholder="Email"
                className="montserrat h-[50px] rounded-[17px] border-none bg-[#f6efd7] px-5 text-[0.98rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:h-[52px] sm:px-6 sm:text-[1rem]"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="montserrat h-[50px] rounded-[17px] border-none bg-[#f6efd7] px-5 text-[0.98rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:h-[52px] sm:px-6 sm:text-[1rem]"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              className="montserrat min-h-[128px] w-full resize-none rounded-[17px] border-none bg-[#f6efd7] px-5 py-4 text-[0.98rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none sm:min-h-[138px] sm:px-6 sm:py-5 sm:text-[1rem]"
            />

            <label className="flex items-start gap-3 text-[#526356]">
              <span className="mt-[2px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] bg-[#078c52] text-[#f6efd7]">
                <FaCheck className="h-4 w-4" />
              </span>
              <span className="montserrat max-w-[510px] text-[0.82rem] leading-[1.35] sm:text-[0.92rem] md:text-[0.96rem]">
                By submitting this form, you agree to be contacted via phone or
                email regarding your publishing inquiry. We respect your privacy
                and will never share your details with third parties.
              </span>
            </label>

            <button
              type="submit"
              className="montserrat inline-flex h-[50px] w-full items-center justify-center rounded-[5px] bg-[#078c52] px-6 text-[1.12rem] font-medium text-[#f6efd7] transition hover:opacity-95 sm:w-auto sm:min-w-[175px] sm:text-[1.3rem] lg:text-[1.5rem]"
            >
              Let's Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
