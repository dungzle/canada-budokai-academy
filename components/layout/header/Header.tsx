"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import DropdownLink from "@/components/layout/header/DropdownLink";

interface NavLink {
  label: string;
  id: string;
  href?: string;
}

interface NavLinks {
  about: NavLink[];
  program: NavLink[];
}

const NAV_LINKS: NavLinks = {
  about: [
    {
      label: "Our Philosophy",
      id: "our-philosophy",
      href: "/about/our-philosophy",
    },
    {
      label: "Our Practice",
      id: "our-practice",
      href: "/about/our-practice",
    },
    {
      label: "Instructors",
      id: "instructors",
      href: "/about/instructors",
    },
    {
      label: "The Dai Nippon Butoku Kai",
      id: "dnbk",
      href: "/about/dnbk",
    },
  ],
  program: [
    { label: "Adult Beginner Class", id: "adult-beginner" },
    { label: "Adult Advance Class", id: "adult-advance" },
    { label: "Children Class", id: "children-class" },
    { label: "Grading", id: "grading" },
  ],
};

const HEADER_OFFSET = 80;
const SCROLL_THRESHOLD = 50;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="font-sans font-bold text-xl">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 h-[var(--header-height)] transition-all duration-500 bg-budokai-dark backdrop-blur-md shadow-2xl border-b border-gold-600/40">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 lg:gap-4 cursor-pointer transition-all duration-300"
          >
            <Image
              src="/dojo-logo.png"
              alt="Canada Budokai Academy Logo"
              width={100}
              height={100}
              className={`transition-all duration-500 h-10 md:h-14 w-auto object-contain shrink-0`}
            />
            <span className="font-sans font-bold text-sm md:text-xl tracking-tight transition-all duration-300 text-white wrap-break-word">
              CANADA <span className="text-gold-600">BUDOKAI ACADEMY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-[0.2em] transition-colors text-white">
            <DropdownLink
              title="About"
              items={NAV_LINKS.about}
              onClick={scrollToSection}
            />
            <DropdownLink
              title="Program"
              items={NAV_LINKS.program}
              onClick={scrollToSection}
            />
            <button
              onClick={() => scrollToSection("training")}
              className="hover:text-gold-600 transition-colors uppercase cursor-pointer"
            >
              Schedule
            </button>
            <Link
              href="/faq"
              className="hover:text-gold-600 transition-colors uppercase cursor-pointer"
            >
              FAQ
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-gold-600 text-budokai-dark rounded-full hover:bg-white transition-all shadow-md cursor-pointer uppercase"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors text-white`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-50 bg-budokai-dark transition-all duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-10 h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-12">
            <Image
              src="/dojo-logo.png"
              alt="Canada Budokai Academy Logo"
              width={66}
              height={66}
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-8">
            {/* About Section */}
            <div>
              <h4 className="text-[10px] text-gold-600 font-bold uppercase tracking-[0.4em] mb-4">
                About
              </h4>
              <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                {NAV_LINKS.about.map((item) =>
                  item.href ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-left text-white/70 hover:text-gold-600 uppercase text-xs tracking-widest transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-white/70 hover:text-gold-600 uppercase text-xs tracking-widest transition-colors"
                    >
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Program Section */}
            <div>
              <h4 className="text-[10px] text-gold-600 font-bold uppercase tracking-[0.4em] mb-4">
                Program
              </h4>
              <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                {NAV_LINKS.program.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-white/70 hover:text-gold-600 uppercase text-xs tracking-widest transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Other Links */}
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection("training")}
                className="block text-left text-white hover:text-gold-600 uppercase text-sm font-bold tracking-widest transition-colors"
              >
                Schedule
              </button>
              <Link
                href="/faq"
                onClick={() => setMenuOpen(false)}
                className="block text-left text-white hover:text-gold-600 uppercase text-sm font-bold tracking-widest transition-colors"
              >
                FAQ
              </Link>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-4 bg-gold-600 text-budokai-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
