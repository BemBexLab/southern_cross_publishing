"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Publishing Services", href: "/publishing-services" },
  { label: "Audiobook Service", href: "/audiobook-service" },
  { label: "Our Books", href: "/our-books" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const useDarkNavLinks =
    pathname === "/our-books" || pathname === "/e-book-writing-service" || pathname === "/contact" || pathname === "/blog";
  const logoSrc = useDarkNavLinks
    ? "/navbar/Frame 1000001530 (1).svg"
    : "/navbar/Frame 1000001530.svg";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="absolute inset-x-0 top-0 z-50 w-full bg-transparent px-4 montserrat sm:px-6 lg:px-8">
      <div className="flex h-20 w-full items-center justify-between gap-3 sm:h-24 lg:h-28">
        <Link href="/" className="flex flex-shrink-0 items-center">
          <div className="relative mt-1 h-12 w-40 sm:h-14 sm:w-52 lg:h-16 lg:w-64 xl:h-[75px] xl:w-[290px]">
            <Image
              src={logoSrc}
              alt="Southern Cross Publishing Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <ul className="hidden xl:flex items-center gap-6 2xl:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`relative py-2 text-sm font-light tracking-wide whitespace-nowrap transition-colors duration-200 2xl:text-base ${
                    isActive
                      ? useDarkNavLinks
                        ? "text-black"
                        : "text-[#FDD118]"
                      : useDarkNavLinks
                        ? "text-black/75 hover:text-black"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {!isActive && (
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-300 ease-out group-hover:w-full ${
                        useDarkNavLinks ? "bg-black" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-[10px] bg-[#f5c842] px-4 py-3 text-sm font-bold text-[#1a5c35] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd44f] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] xl:flex 2xl:px-6 2xl:py-3.5 2xl:text-base"
        >
          Request a Quote
          <FaArrowRight />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-shrink-0 flex-col justify-center gap-[5px] rounded-full p-2.5 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 origin-center bg-black transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 origin-center bg-black transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`mt-2 rounded-[22px] border pb-5 pt-3 shadow-[0_20px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl ${
            useDarkNavLinks
              ? "border-black/10 bg-white/55"
              : "border-white/20 bg-white/12"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-4 py-3 text-sm font-light transition-all sm:text-base ${
                      useDarkNavLinks
                        ? "hover:bg-white/55 hover:text-black"
                        : "hover:bg-white/10 hover:text-white"
                    } ${
                      isActive
                        ? useDarkNavLinks
                          ? "text-black"
                          : "text-[#f5c842]"
                        : useDarkNavLinks
                          ? "text-black/75"
                          : "text-white/85"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 px-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-[10px] bg-[#FDD118] px-6 py-3 text-sm font-bold text-[#1a5c35] transition-all hover:bg-[#ffd44f] sm:text-base"
            >
              Request a Quote
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
