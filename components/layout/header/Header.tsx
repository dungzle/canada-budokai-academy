"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import DropdownLink from "@/components/layout/header/DropdownLink";
import ActionButton from "@/components/ui/ActionButton";

interface NavLink {
  label: string;
  id: string;
  href?: string;
}

interface NavLinks {
  about: NavLink[];
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
};

const SCROLL_THRESHOLD = 50;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="font-sans font-bold text-xl">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 h-[var(--header-height)] transition-all duration-500 bg-black backdrop-blur-md shadow-2xl border-b border-gold-600/40">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 lg:gap-4 cursor-pointer transition-all duration-300"
          >
            <Image
              src="/dojo-logo.webp"
              alt="Canada Budokai Academy Logo"
              width={100}
              height={100}
              className={`transition-all duration-500 h-10 md:h-14 w-auto object-contain shrink-0`}
            />
            <span className="font-sans font-bold text-sm md:text-xl tracking-tight transition-all duration-300 text-white wrap-break-word">
              CANADA <span className="text-gold-500">BUDOKAI ACADEMY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-[0.2em] transition-colors text-white">
            <DropdownLink title="About" items={NAV_LINKS.about} />
            <Link
              href="/locations"
              className="hover:text-gold-600 transition-colors uppercase cursor-pointer"
            >
              Locations
            </Link>
            <Link
              href="/faq"
              className="hover:text-gold-600 transition-colors uppercase cursor-pointer"
            >
              FAQ
            </Link>
            <ActionButton href="/contact" className="tracking-widest">
              CONTACT US
            </ActionButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-105 hover:bg-white/15 hover:text-gold-500 active:scale-95 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-50 bg-black transition-all duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-10 h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/"
              onClick={() => {
                handleLogoClick();
                setMenuOpen(false);
              }}
            >
              <Image
                src="/dojo-logo.webp"
                alt="Canada Budokai Academy Logo"
                width={66}
                height={66}
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-105 hover:bg-white/15 hover:text-gold-500 active:scale-95 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/70"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-8">
            {/* About Section */}
            <div>
              <h4 className="text-sm text-gold-500 font-bold uppercase tracking-[0.1em] mb-4">
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
                    <Link
                      key={item.id}
                      href={`/#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="text-left text-white/70 hover:text-gold-600 uppercase text-xs tracking-widest transition-colors"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* Other Links */}
            <div className="space-y-4">
              <Link
                href="/locations"
                onClick={() => setMenuOpen(false)}
                className="block text-left text-white hover:text-gold-600 uppercase text-sm font-bold tracking-widest transition-colors"
              >
                Locations
              </Link>
              <Link
                href="/faq"
                onClick={() => setMenuOpen(false)}
                className="block text-left text-white hover:text-gold-600 uppercase text-sm font-bold tracking-widest transition-colors"
              >
                FAQ
              </Link>
            </div>
            <ActionButton
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-full rounded-lg tracking-widest"
            >
              CONTACT US
            </ActionButton>
          </div>
        </div>
      </div>
    </header>
  );
}
