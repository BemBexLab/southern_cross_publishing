"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useSidebarSectionNavigation } from "@/components/legal/useSidebarSectionNavigation";
import Link from "next/link";

const sections = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms" },
  { id: "scope-of-services", title: "Scope of Services" },
  {
    id: "ownership-and-intellectual-property",
    title: "Ownership and Intellectual Property",
  },
  { id: "payments-and-billing", title: "Payments and Billing" },
  { id: "revisions-and-delivery", title: "Revisions and Delivery" },
  { id: "client-responsibilities", title: "Client Responsibilities" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "termination", title: "Termination" },
  { id: "modifications-to-terms", title: "Modifications to Terms" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact-information", title: "Contact Information" },
];

const TermsContent = () => {
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
          <section id="acceptance-of-terms">
            <h2 className="mb-4 text-[28px] leading-tight bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium sm:text-3xl lg:mb-6 lg:text-4xl">
              Acceptance of Terms
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              By accessing or using the services provided by Southern Cross
              Publishing, you agree to be bound by these Terms and Conditions.
              If you do not agree with any part of these terms, you should not
              use our services.
            </p>
          </section>

          <section id="scope-of-services">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight sm:text-3xl lg:mb-6 lg:text-4xl">
              Scope of Services
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Southern Cross Publishing provides professional services related
              to content creation, editing, publishing, and marketing. The
              exact scope of services is defined in individual agreements or
              proposals agreed upon between the Company and the client.
            </p>
          </section>

          <section id="ownership-and-intellectual-property">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Ownership and Intellectual Property
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              All content created or provided by the client remains the
              intellectual property of the client. Southern Cross Publishing
              does not claim ownership or royalties unless explicitly agreed
              upon in writing. We act solely as a service provider, assisting
              in the development, refinement, and distribution of your work.
            </p>
          </section>

          <section id="payments-and-billing">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Payments and Billing
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                All services are subject to agreed pricing and payment terms.
                Payments may be required upfront or in milestones, depending on
                the project. Once work has commenced, payments are generally
                non-refundable unless otherwise specified in writing.
              </p>
              <p>
                Failure to complete payments may result in suspension or
                termination of services.
              </p>
            </div>
          </section>

          <section id="revisions-and-delivery">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Revisions and Delivery
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Revisions are provided in accordance with the selected service
              package. Delivery timelines are estimates and may vary based on
              the scope of work and client responsiveness. Delays in
              communication or feedback from the client may impact project
              timelines.
            </p>
          </section>

          <section id="client-responsibilities">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Client Responsibilities
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Clients are responsible for ensuring that all materials provided
              are accurate, lawful, and do not infringe upon any third-party
              rights. Southern Cross Publishing shall not be held liable for
              any issues arising from content provided by the client.
            </p>
          </section>

          <section id="limitation-of-liability">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              <p>
                Southern Cross Publishing shall not be held responsible for any
                indirect, incidental, or consequential damages arising from the
                use of our services. This includes, but is not limited to, loss
                of profits, business opportunities, or market performance of
                any published work.
              </p>
              <p>
                We do not guarantee specific sales outcomes, rankings, or
                commercial success.
              </p>
            </div>
          </section>

          <section id="confidentiality">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Confidentiality
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              We maintain strict confidentiality of all client information and
              project materials. Any sensitive information shared with us will
              be used solely for the purpose of delivering agreed services and
              will not be disclosed without consent, except where required by
              law.
            </p>
          </section>

          <section id="termination">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Termination
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              We reserve the right to terminate or suspend services if the
              client breaches these Terms and Conditions, fails to meet payment
              obligations, or engages in conduct that disrupts the working
              relationship.
            </p>
          </section>

          <section id="modifications-to-terms">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Modifications to Terms
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Southern Cross Publishing reserves the right to update these
              Terms and Conditions at any time. Continued use of our services
              after any modifications constitutes acceptance of the updated
              terms.
            </p>
          </section>

          <section id="governing-law">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Governing Law
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              These Terms and Conditions shall be governed and interpreted in
              accordance with applicable laws and regulations in the
              jurisdiction where the business operates.
            </p>
          </section>

          <section id="contact-information">
            <h2 className="mb-4 text-[28px] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-medium leading-tight  sm:text-3xl lg:mb-6 lg:text-4xl">
              Contact Information
            </h2>
            {/* <p className="mb-6 text-base text-gray-500 sm:text-lg lg:mb-8">
              If you have any questions or concerns regarding these Terms and
              Conditions, you may contact us at:
            </p> */}

            <div className="mb-6 space-y-1 text-base text-gray-500 sm:text-lg">
              <p className="font-medium text-[#3E3E3E]">
                <Link href="/" className="hover:underline">Southern Cross Publishing</Link>
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
                    Southern Cross Publishing
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

export default TermsContent;
