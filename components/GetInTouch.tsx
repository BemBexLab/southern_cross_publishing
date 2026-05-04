import React from "react";
import { BiEnvelope } from "react-icons/bi";
import {
  FaCheck,
  } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

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
      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[8px] bg-[#f7c51d] text-[#078c52] sm:h-[48px] sm:w-[48px]">
        {icon}
      </div>
      <p className="montserrat text-sm font-medium leading-[1.35] text-[#f6ecd1] sm:text-[1.02rem]">
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

const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden bg-[#078c52] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-14" style={{ 
      backgroundImage: "url('/home/Rectangle 42.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
     }}>
      <div className="relative mx-auto grid max-w-[1520px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-10">
        <div className="pt-2 text-[#f6ecd1] lg:pt-10">
          <h2 className="goneva max-w-[600px] text-lg leading-[1.08] sm:text-xl lg:text-4xl">
            Your book is closer than you think. Let's talk about it.
          </h2>

          <p className="montserrat text-lg font-medium italic leading-tight text-[#f7c51d] my-2 sm:text-xl lg:text-2xl">
            Start with a simple conversation
          </p>

          <div className="montserrat max-w-[560px] space-y-2 text-[1rem] leading-[1.34] text-[#e8eddc] sm:text-[1.08rem]">
            <p>
              You don't need a finished manuscript, a polished pitch, or any
              publishing experience to reach out to us. All you need is the
              story you've been sitting on and the decision to finally do
              something about it. We've heard every kind of idea, rough,
              half-formed, fully written, completely stuck, and we know exactly
              how to move it forward.
            </p>
            <p>
              Drop us a message, and one of our publishing specialists will get
              back to you personally, no automated replies, no sales scripts.
              Just a real conversation about your book, your timeline, and what
              working together would actually look like.
            </p>
          </div>

          <div className="mt-3 grid gap-4 sm:grid-cols-2 sm:gap-4 lg:mt-5">
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

        <div className="rounded-[18px] bg-[linear-gradient(135deg,rgba(223,236,214,0.72),rgba(179,212,190,0.82))] p-6 shadow-[0_22px_65px_rgba(4,76,47,0.18)] backdrop-blur-[4px] sm:p-8 lg:rounded-[18px] lg:px-[34px] lg:py-[30px]">
          <h3 className="montserrat text-[2rem] font-semibold tracking-[-0.03em] text-[#078c52] sm:text-[2.4rem] lg:text-[2.55rem]">
            Get In Touch Now!
          </h3>

          <form className="mt-8 space-y-5 lg:mt-7">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-[14px]">
              <input
                type="text"
                placeholder="First Name"
                className="montserrat h-[52px] rounded-[17px] border-none bg-[#f6efd7] px-6 text-[1rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="montserrat h-[52px] rounded-[17px] border-none bg-[#f6efd7] px-6 text-[1rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-[14px]">
              <input
                type="email"
                placeholder="Email"
                className="montserrat h-[52px] rounded-[17px] border-none bg-[#f6efd7] px-6 text-[1rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="montserrat h-[52px] rounded-[17px] border-none bg-[#f6efd7] px-6 text-[1rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              className="montserrat min-h-[138px] w-full resize-none rounded-[17px] border-none bg-[#f6efd7] px-6 py-5 text-[1rem] text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none"
            />

            <label className="flex items-start gap-3 text-[#526356]">
              <span className="mt-[2px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] bg-[#078c52] text-[#f6efd7]">
                <FaCheck className="h-4 w-4" />
              </span>
              <span className="montserrat max-w-[510px] text-[0.92rem] leading-[1.14] sm:text-[0.96rem]">
                By submitting this form, you agree to be contacted via phone or
                email regarding your publishing inquiry. We respect your privacy
                and will never share your details with third parties.
              </span>
            </label>

            <button
              type="submit"
              className="montserrat inline-flex h-[50px] items-center justify-center rounded-[5px] bg-[#078c52] px-6 text-[1.5rem] font-medium text-[#f6efd7] transition hover:opacity-95 sm:min-w-[175px]"
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
