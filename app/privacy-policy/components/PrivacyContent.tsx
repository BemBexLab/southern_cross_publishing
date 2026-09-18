"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useSidebarSectionNavigation } from "@/components/legal/useSidebarSectionNavigation";
import Link from "next/link";

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "purpose-of-data-collection", title: "Purpose of Data Collection" },
  { id: "disclosure-of-information", title: "Disclosure of Information" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights-and-choices", title: "Your Rights and Choices" },
  { id: "third-party-links", title: "Third-Party Links" },
  {
    id: "international-data-transfers",
    title: "International Data Transfers",
  },
  { id: "changes-to-this-policy", title: "Changes to This Policy" },
  { id: "contact-information", title: "Contact Information" },
];

const PrivacyContent = () => {
  const { activeTab, activeIndex, handleSectionClick } =
    useSidebarSectionNavigation(sections);

  return (
    <div className="font-jakarta mx-auto max-w-7xl bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-6 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* --- Sidebar (Table of Contents) --- */}
        <aside className="w-full lg:sticky lg:top-24 lg:w-[360px] lg:self-start">
          <h2 className="border-b border-[#ECECEC] pb-2 text-[20px] font-semibold leading-none tracking-[-0.01em] text-[#3E3E3E] md:text-[21px]">
            Table Of Content
          </h2>
          <div className="mt-[18px] flex flex-col gap-[10px] sm:gap-[12px]">
            {sections.map((section, index) => {
              const isActive = activeTab === section.id;
              const distanceFromActive = Math.abs(index - activeIndex);
              const isNearActive = distanceFromActive === 1;
              const inactiveGlassEffect = isNearActive
                ? index < activeIndex
                  ? "bg-white/80 backdrop-blur-[2px] shadow-[inset_0_-13px_20px_-20px_rgba(178,64,2,0.9)]"
                  : "bg-white/80 backdrop-blur-[2px] shadow-[inset_0_13px_20px_-20px_rgba(178,64,2,0.9)]"
                : "bg-white";

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section.id);
                  }}
                  className={`flex min-h-[36px] items-center rounded-[5px] border px-[14px] py-2 text-[14px] font-normal leading-tight tracking-[0.01em] transition-all duration-200 sm:px-[18px] sm:text-[15px]
                  ${
                    isActive
                      ? "border-[#B24002] bg-[#018752] text-white "
                      : `border-[#EFEFEF] text-[#7A7A7A] ${inactiveGlassEffect} hover:border-[#E8E8E8] hover:bg-white hover:text-[#5F5F5F]`
                  }`}
                >
                  {section.title}
                </a>
              );
            })}
          </div>
        </aside>

        <main className="w-full space-y-8 lg:w-3/4 lg:space-y-10">
          <section id="information-we-collect">
            <h2 className="mb-4 text-[28px] leading-tight bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium sm:text-3xl lg:mb-6 lg:text-4xl">
              Information We Collect
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                We collect personal information that you voluntarily provide
                when you interact with us, including when you submit inquiries,
                request services, or communicate with our team. This
                information may include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing details</li>
                <li>
                  Any materials related to your project, such as manuscripts,
                  drafts, or creative content
                </li>
              </ul>
              <p>
                With the information you provide directly, we may automatically
                collect certain technical and usage data. This includes your IP
                address, browser type, device information, pages visited, and
                general interaction patterns on our website. Such data is
                collected to improve functionality, monitor performance, and
                enhance user experience.
              </p>
              <p>
                We may also use cookies and similar tracking technologies to
                understand user behavior, remember preferences, and optimize our
                website. These technologies do not typically identify you
                personally but help us deliver a more efficient and personalized
                experience.
              </p>
            </div>
          </section>

          <section id="purpose-of-data-collection">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Purpose of Data Collection
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                The information we collect is used to facilitate the delivery
                of our services and to ensure a smooth and professional client
                experience. Specifically, we use this information to communicate
                with you, manage your project, process payments, provide
                support, and improve our offerings.
              </p>
              <p>
                We may also use your information to send relevant updates,
                service notifications, or promotional communications. You retain
                the right to opt out of such communications at any time.
              </p>
            </div>
          </section>

          <section id="disclosure-of-information">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Disclosure of Information
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                Crux Publishing House does not sell or rent your personal
                information to third parties. However, we may share your
                information with trusted partners and service providers who
                assist in operating our business. These may include payment
                processors, technical support providers, and internal team
                members working directly on your project.
              </p>
              <p>
                We may also disclose your information where required by law,
                regulation, or legal process, or when such disclosure is
                necessary to protect our rights, enforce our agreements, or
                prevent fraudulent or unlawful activities.
              </p>
            </div>
          </section>

          <section id="data-security">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Data Security
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              We take reasonable administrative, technical, and organizational
              measures to protect your personal information against
              unauthorized access, loss, misuse, or alteration. While we strive
              to safeguard your data, no system can be guaranteed to be
              completely secure, and we cannot ensure absolute protection
              against all risks.
            </p>
          </section>

          <section id="data-retention">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Data Retention
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              We retain personal information only for as long as it is
              necessary to fulfill the purposes outlined in this Privacy
              Policy, including the provision of services, compliance with
              legal obligations, and resolution of disputes. Once information
              is no longer required, it is securely deleted or anonymized.
            </p>
          </section>

          <section id="your-rights-and-choices">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Your Rights and Choices
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                Depending on your location and applicable laws, you may have
                the right to access, correct, or request deletion of your
                personal information. You may also have the right to restrict
                or object to certain processing activities and to withdraw
                consent where applicable.
              </p>
              <p>
                Requests related to your personal data can be submitted to us
                through the contact details provided below.
              </p>
            </div>
          </section>

          <section id="third-party-links">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Third-Party Links
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Our website may contain links to external websites or services
              that are not operated by us. Crux Publishing House is not
              responsible for the privacy practices or content of such
              third-party platforms, and we encourage users to review their
              respective policies.
            </p>
          </section>

          <section id="international-data-transfers">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              International Data Transfers
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              As a global service provider, your information may be transferred
              to and processed in locations outside your country of residence.
              By using our services, you consent to such transfers, provided
              that appropriate safeguards are in place.
            </p>
          </section>

          <section id="changes-to-this-policy">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be reflected on this page with an
              updated effective date. Continued use of our website or services
              after such changes constitutes your acceptance of the revised
              policy.
            </p>
          </section>

          <section id="contact-information">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Contact Information
            </h2>
            <p className="mb-6 text-base text-gray-500 sm:text-lg lg:mb-8">
              If you have any questions or concerns regarding this Privacy
              Policy or the handling of your information, you may contact us
              at:
            </p>

            <div className="mb-6 space-y-1 text-base text-gray-500 sm:text-lg">
              <p className="font-medium text-[#3E3E3E]">
                <Link href="/" className="hover:underline">Crux Publishing House</Link>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="shrink-0 rounded bg-[#018752] p-2 text-white">
                  <MdEmail color="#FFFFFF" size={18} />
                </div>
                <a
                  href="mailto:info@southerncrosspublishing.com.au"
                  className="break-all text-base text-gray-500 hover:underline sm:text-lg"
                >
                  info@southerncrosspublishing.com.au
                </a>
              </div>

              {/* <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <div className="shrink-0 rounded bg-[#018752] p-2 text-white">
                  <FaLocationDot color="#FFFFFF" size={18} />
                </div>
                <span className="text-base text-gray-500 sm:text-lg">
                  <Link href="/" className="hover:underline">
                    Crux Publishing House
                  </Link>
                </span>
              </div> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyContent;
