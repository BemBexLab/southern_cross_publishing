"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

  return (
    <nav
      className="absolute inset-x-0 top-0 z-50 w-full montserrat bg-transparent"
      style={{ paddingLeft: "25px", paddingRight: "25px" }}
    >
      {/* ── Main row ── */}
      <div className="flex h-25 w-full items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex flex-shrink-0 items-center">
          <div className="relative mt-1 h-[55px] w-[180px] sm:h-[65px] sm:w-[220px] lg:h-[75px] lg:w-[290px]">
            <Image
              src="/navbar/Frame 1000001530.svg"
              alt="Southern Cross Publishing Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav links — hidden below xl */}
        <ul className="hidden xl:flex items-center gap-6 2xl:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`montserrat relative py-2 text-sm 2xl:text-base font-light tracking-wide transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-[#f5c842]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA button — hidden below xl */}
        <Link
          href="/request-quote"
          className="hidden xl:flex flex-shrink-0 items-center gap-2 rounded-[10px] bg-[#f5c842] px-4 py-3 2xl:px-6 2xl:py-3.5 text-sm 2xl:text-base font-bold text-[#1a5c35] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd44f] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] whitespace-nowrap"
        >
          Request a Quote
          <span><FaArrowRight /></span>
        </Link>

        {/* Hamburger — visible below xl */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex xl:hidden flex-col justify-center gap-[5px] p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile / Tablet drawer ── */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 pb-5 pt-3">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-4 py-3 text-sm sm:text-base font-light transition-all hover:bg-white/10 hover:text-white ${
                      isActive ? "text-[#f5c842]" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA inside mobile menu */}
          <div className="mt-4 px-4">
            <Link
              href="/request-quote"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-[10px] bg-[#f5c842] px-6 py-3 text-sm sm:text-base font-bold text-[#1a5c35] transition-all hover:bg-[#ffd44f]"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
