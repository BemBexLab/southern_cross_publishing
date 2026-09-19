"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaArrowRight,
  FaChevronDown,
  FaTimes,
  FaBars,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Publishing Services",
    href: "/publishing-services",
    children: [
      {
        label: "Book Writing Service",
        href: "/publishing-services/book-writing-service",
      },
      {
        label: "Book Formatting",
        href: "/publishing-services/book-formatting",
      },
      {
        label: "Children's Book Publishing",
        href: "/publishing-services/childrenbook-publishing",
      },
      {
        label: "Book Marketing",
        href: "/publishing-services/book-marketing",
      },
    ],
  },
  { label: "Audiobook Service", href: "/audiobook-service" },
  { label: "Our Books", href: "/our-books" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isPublishingServicesRoute = pathname.startsWith("/publishing-services/");
  const isBlogRoute = pathname === "/blog" || pathname.startsWith("/blog/");
  const useDarkNavLinks =
    pathname === "/our-books" ||
    isPublishingServicesRoute ||
    pathname === "/contact" ||
    isBlogRoute;

  const logoSrc = useDarkNavLinks ? "/image (1).png" : "/image (2).png";

  // Theme tokens
  const navBg = useDarkNavLinks
    ? scrolled
      ? "bg-white/85 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      : "bg-white/65"
    : scrolled
      ? "bg-black/35 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
      : "bg-black/20";
  const navBorder = useDarkNavLinks ? "border-black/10" : "border-white/15";
  const desktopLinkTone = useDarkNavLinks
    ? "text-black/75 hover:text-black"
    : "text-white/85 hover:text-white";
  const underlineTone = useDarkNavLinks ? "bg-black" : "bg-white";
  const activeDesktopTone = useDarkNavLinks ? "text-black" : "text-[#FDD118]";

  // Scroll detection for subtle background shift
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Body scroll lock when drawer is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  // Close drawer on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setDrawerOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${navBg} ${navBorder}`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-8">
          {/* Logo (Bigger) */}
          <Link
            href="/"
            className="flex flex-shrink-0 items-center"
            aria-label="Crux Publishing House - Home"
          >
            <div className="relative h-12 w-36 min-w-[9rem] sm:h-14 sm:w-44 md:h-16 md:w-52 lg:h-20 lg:w-60 xl:h-[96px] xl:w-[300px]">
              <Image
                src={logoSrc}
                alt="Crux Publishing House Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 xl:flex 2xl:gap-2">
            {navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`)) ||
                link.children?.some((child) => child.href === pathname);

              return (
                <li key={link.href} className="group relative">
                  <div className="flex items-center gap-1.5">
                    <Link
                      href={link.href}
                      className={`relative whitespace-nowrap px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 2xl:text-[15px] ${
                        isActive ? activeDesktopTone : desktopLinkTone
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full transition-all duration-300 ease-out ${
                          isActive ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                        } ${underlineTone}`}
                      />
                    </Link>

                    {hasChildren && (
                      <FaChevronDown
                        className={`text-[9px] transition-transform duration-300 group-hover:rotate-180 ${
                          useDarkNavLinks ? "text-black/60" : "text-white/70"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {hasChildren && (
                    <div className="pointer-events-none absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                      <div className="min-w-[260px] overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                        {link.children?.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                isChildActive
                                  ? "bg-[#f5c842]/25 text-[#1a5c35]"
                                  : "text-black/75 hover:bg-black/5 hover:text-black"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[#f5c842] px-5 py-2.5 text-sm font-bold text-[#1a5c35] shadow-[0_4px_14px_rgba(245,200,66,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd44f] hover:shadow-[0_8px_22px_rgba(245,200,66,0.45)] xl:inline-flex 2xl:px-6 2xl:py-3 2xl:text-base"
            >
              Request a Quote
              <FaArrowRight className="text-xs" />
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 xl:hidden ${
                useDarkNavLinks
                  ? "border-black/10 bg-white/60 text-black hover:bg-white"
                  : "border-white/25 bg-black/20 text-white hover:bg-black/30"
              }`}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
            >
              <FaBars className="text-base" />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Right Drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-[70] flex h-full w-[86%] max-w-[380px] flex-col bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-out xl:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <Link href="/" onClick={() => setDrawerOpen(false)} className="flex items-center">
            {/* Drawer Logo (Bigger) */}
            <div className="relative h-12 w-36 min-w-[9rem]">
              <Image
                src="/image (1).png"
                alt="Crux Publishing House"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black transition-colors hover:bg-black/10"
            aria-label="Close menu"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`)) ||
                link.children?.some((child) => child.href === pathname);

              return (
                <li key={link.href}>
                  {hasChildren ? (
                    <div className="overflow-hidden rounded-xl">
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          onClick={() => setDrawerOpen(false)}
                          className={`relative flex-1 rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                            isActive
                              ? "text-black"
                              : "text-black/70 hover:bg-black/5 hover:text-black"
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <span className="absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full bg-[#f5c842]" />
                          )}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((o) => !o)}
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-black/70 transition-all ${
                            servicesOpen ? "bg-[#f5c842]/20 text-[#1a5c35]" : "hover:bg-black/5"
                          }`}
                          aria-label="Toggle Publishing Services submenu"
                          aria-expanded={servicesOpen}
                          aria-controls="drawer-services-submenu"
                        >
                          <FaChevronDown
                            className={`text-xs transition-transform duration-300 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <div
                        id="drawer-services-submenu"
                        className={`grid transition-all duration-300 ease-in-out ${
                          servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-0.5 py-1 pl-4 pr-2">
                            {link.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setDrawerOpen(false)}
                                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                    isChildActive
                                      ? "bg-[#f5c842]/20 text-[#1a5c35]"
                                      : "text-black/65 hover:bg-black/5 hover:text-black"
                                  }`}
                                >
                                  <span
                                    className={`h-1.5 w-1.5 rounded-full ${
                                      isChildActive ? "bg-[#1a5c35]" : "bg-black/30"
                                    }`}
                                  />
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`relative block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "text-black"
                          : "text-black/70 hover:bg-black/5 hover:text-black"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full bg-[#f5c842]" />
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-black/10 px-5 py-5">
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f5c842] px-6 py-3.5 text-sm font-bold text-[#1a5c35] shadow-[0_6px_18px_rgba(245,200,66,0.4)] transition-all hover:bg-[#ffd44f] active:scale-[0.98]"
          >
            Request a Quote
            <FaArrowRight className="text-xs" />
          </Link>

          <div className="mt-4 flex flex-col gap-2 text-xs text-black/60">
            <a
              href="tel:+61261906580"
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-black/5 hover:text-black"
            >
              <FaPhoneAlt className="text-[10px]" />
              (02) 6190 6580
            </a>
            <a
              href="mailto:contact@cruxpublishinghouse.com.au"
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-black/5 hover:text-black"
            >
              <FaEnvelope className="text-[10px]" />
              contact@cruxpublishinghouse.com.au
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}