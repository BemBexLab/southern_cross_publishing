"use client";

import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

type GetInTouchProps = {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  formHeadline?: string;
  ctaText?: string;
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
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
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FDD118] text-[#078c52] sm:h-12 sm:w-12">
        {icon}
      </div>
      <p className="dm-sans min-w-0 pt-1 text-sm font-medium leading-relaxed break-words text-[#f6ecd1] sm:text-base">
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
  "Send Us a Message",
];

const GetInTouch = ({
  title = "Your book is closer than you think. Let's talk about it.",
  subtitle = "Start with a simple conversation",
  paragraphs = defaultParagraphs,
  formHeadline = "Send Us a Message",
  ctaText,
}: GetInTouchProps) => {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit message.");
      }

      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitStatus({
        type: "success",
        message:
          "Your message has been sent successfully. We'll get back to you soon.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-[#078c52] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{
        backgroundImage: "url('/home/Rectangle 42.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-start lg:gap-12 xl:gap-16">
        {/* Left Column: Text & Contact Info */}
        <div className="w-full pt-2 text-[#f6ecd1] lg:pt-8">
          <h2 className="goneva w-full text-3xl font-medium leading-tight text-[#f6ecd1] sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-5xl">
            {title}
          </h2>

          <p className="dm-sans mt-3 text-lg font-medium italic leading-tight text-[#FDD118] sm:mt-4 sm:text-xl md:text-2xl">
            {subtitle}
          </p>

          <div className="dm-sans mt-6 w-full space-y-4 text-base leading-relaxed text-[#e8eddc] sm:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 items-center">
            <ContactItem
              icon={<FiPhone className="h-5 w-5 sm:h-6 sm:w-6" />}
              text="(02) 6190 6580"
              href="tel:+61261906580"
            />
            <ContactItem
              icon={<IoLocationOutline className="h-5 w-5 sm:h-6 sm:w-6" />}
              text="368 Sussex St, Sydney, NSW, Australia, 2000"
            />
            <div className="sm:col-span-2">
              <ContactItem
                icon={<BiEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />}
                text="contact@cruxpublishinghouse.com.au"
                href="mailto:contact@cruxpublishinghouse.com.au"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full rounded-2xl bg-[linear-gradient(135deg,rgba(223,236,214,0.72),rgba(179,212,190,0.82))] p-5 shadow-[0_22px_65px_rgba(4,76,47,0.18)] backdrop-blur-[4px] sm:p-7 md:p-8 lg:p-10">
          <h3 className="dm-sans text-2xl font-semibold leading-tight tracking-tight text-[#078c52] sm:text-3xl lg:text-4xl">
            {formHeadline}
          </h3>

          <form
            className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                value={formState.firstName}
                onChange={(event) =>
                  updateField("firstName", event.target.value)
                }
                autoComplete="given-name"
                required
                className="dm-sans h-12 w-full rounded-2xl border-none bg-[#f6efd7] px-4 text-sm text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none focus:ring-2 focus:ring-[#078c52]/30 sm:h-14 sm:px-5 sm:text-base"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formState.lastName}
                onChange={(event) =>
                  updateField("lastName", event.target.value)
                }
                autoComplete="family-name"
                required
                className="dm-sans h-12 w-full rounded-2xl border-none bg-[#f6efd7] px-4 text-sm text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none focus:ring-2 focus:ring-[#078c52]/30 sm:h-14 sm:px-5 sm:text-base"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                placeholder="Email"
                value={formState.email}
                onChange={(event) => updateField("email", event.target.value)}
                autoComplete="email"
                required
                className="dm-sans h-12 w-full rounded-2xl border-none bg-[#f6efd7] px-4 text-sm text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none focus:ring-2 focus:ring-[#078c52]/30 sm:h-14 sm:px-5 sm:text-base"
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={formState.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                autoComplete="tel"
                required
                className="dm-sans h-12 w-full rounded-2xl border-none bg-[#f6efd7] px-4 text-sm text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none focus:ring-2 focus:ring-[#078c52]/30 sm:h-14 sm:px-5 sm:text-base"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={5}
              value={formState.message}
              onChange={(event) => updateField("message", event.target.value)}
              required
              className="dm-sans min-h-[140px] w-full resize-y rounded-2xl border-none bg-[#f6efd7] px-4 py-4 text-sm text-[#4e5e52] placeholder:text-[#9aa299] focus:outline-none focus:ring-2 focus:ring-[#078c52]/30 sm:min-h-[150px] sm:px-5 sm:py-5 sm:text-base"
            />

            <label className="flex items-start gap-3 text-[#526356]">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#078c52] text-[#f6efd7] sm:h-6 sm:w-6">
                <FaCheck className="h-3 w-3 sm:h-4 sm:w-4" />
              </span>
              <span className="dm-sans text-xs leading-relaxed sm:text-sm">
                By submitting this form, you agree to be contacted via phone or
                email regarding your publishing inquiry. We respect your privacy
                and will never share your details with third parties.
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="dm-sans inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#078c52] px-6 text-base font-medium text-[#f6efd7] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 sm:h-14 sm:w-auto sm:min-w-[200px] sm:text-lg lg:h-[56px] lg:text-xl"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                (ctaText ?? "Let's Build Your Book")
              )}
            </button>

            {submitStatus && (
              <p
                aria-live="polite"
                className={`dm-sans text-sm font-medium ${
                  submitStatus.type === "success"
                    ? "text-[#0c6a3f]"
                    : "text-[#a12a2a]"
                }`}
              >
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
