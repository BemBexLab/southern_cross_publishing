import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Publishing Services", href: "#" },
  { label: "Our Books", href: "#" },
  { label: "Our Publishing", href: "#" },
  { label: "Who we are", href: "#" },
  { label: "Blog", href: "#" },
];

const services = [
  { label: "Book Publishing", href: "#" },
  { label: "Ebook Formatting", href: "/publishing-services/ebook-formatting" },
  { label: "Children Book", href: "#" },
  { label: "Book Marketing", href: "#" },
  { label: "E-Book Writing Service", href: "/e-book-writing-service" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: <FaFacebookF className="h-[14px] w-[14px]" />,
  },
  {
    label: "Twitter",
    href: "#",
    icon: <FaTwitter className="h-[14px] w-[14px]" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <FaInstagram className="h-[14px] w-[14px]" />,
  },
];

const BlogFooter = () => {
  return (
    <footer
      className="w-full px-4 pb-10 pt-44 sm:px-6 sm:pt-52 lg:px-20 lg:pb-10 lg:pt-64"
      style={{ backgroundColor: "#252525" }}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,490px)_minmax(0,1fr)] lg:gap-[48px]">
          <div className="w-full">
            <div
              aria-label="Southern Cross Publishing"
              className="h-[72px] w-full max-w-[745px] bg-left bg-no-repeat sm:h-[84px] lg:h-[100px]"
              style={{
                backgroundImage: "url('/navbar/Logos options-08 2.svg')",
                backgroundSize: "contain",
              }}
            >
              <span className="sr-only">Southern Cross Publishing</span>
            </div>

            <p
              className="montserrat mt-7 w-full max-w-[650px] text-base leading-[1.2] sm:text-lg sm:leading-[1.16]"
              style={{ color: "#a8a196" }}
            >
              Australia's reliable self-publishing partner. We help Australians authors convert their stories into professionally published books, from the first idea to global distribution. Your story deserves to be read, and we help you in that.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:ml-auto lg:grid-cols-2 lg:gap-x-[34px] lg:gap-y-10 xl:grid-cols-3 xl:gap-y-0">
            <nav className="montserrat min-w-0">
              <h3
                className="text-[1.12rem] font-medium"
                style={{ color: "#FDD118" }}
              >
                Quick Links
              </h3>
              <div
                className="mt-4 flex flex-col gap-[16px] text-[0.98rem] leading-none"
                style={{ color: "#eee5d3" }}
              >
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition-opacity hover:opacity-80"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <nav className="montserrat min-w-0">
              <h3
                className="text-[1.12rem] font-medium"
                style={{ color: "#FDD118" }}
              >
                Our Services
              </h3>
              <div
                className="mt-4 flex flex-col gap-[16px] text-[0.98rem] leading-none"
                style={{ color: "#eee5d3" }}
              >
                {services.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition-opacity hover:opacity-80"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <nav className="montserrat min-w-0 sm:col-span-2 lg:col-span-2 xl:col-span-1">
              <h3
                className="text-[1.12rem] font-medium"
                style={{ color: "#FDD118" }}
              >
                Follow Us
              </h3>
              <div
                className="mt-4 flex flex-col gap-[16px] text-[0.98rem]"
                style={{ color: "#eee5d3" }}
              >
                {socials.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 transition-opacity hover:opacity-80"
                >
                  <span
                    className="inline-flex h-4 w-4 items-center justify-center"
                    style={{ color: "#f4eedc" }}
                  >
                    {link.icon}
                  </span>
                  <span className="leading-none">{link.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-10 h-px w-full" style={{ backgroundColor: "#4a4a4a" }} />

        <div
          className="montserrat mt-8 flex flex-col gap-4 text-[0.97rem] sm:gap-5 lg:flex-row lg:items-center lg:justify-between"
          style={{ color: "#a8a196" }}
        >
          <p>Copyright © 2026. Logolpsum. All rights reserved.</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6 lg:justify-end lg:text-right" style={{ color: "#efe6d4" }}>
            <a href="/terms" className="transition-opacity hover:opacity-80">
              Terms &amp; Conditions
            </a>
            <a href="/privacy" className="transition-opacity hover:opacity-80">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
