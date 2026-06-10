"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  theme?: "light" | "dark";
  solid?: boolean;
}

export default function Navbar({ theme = "dark", solid = false }: NavbarProps) {
  const [lang, setLang] = useState<"JP" | "EN" | "ZH">("JP");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasBackground = solid || isScrolled;

  // Header styles based on theme and scroll/solid states
  const headerBg = hasBackground
    ? theme === "light"
      ? "bg-brand-navy/95 backdrop-blur-md border-brand-silver/10 shadow-sm"
      : "bg-brand-white/95 backdrop-blur-md border-brand-silver/20 shadow-sm"
    : "bg-transparent border-transparent";

  // Text color styles
  const linkColor = theme === "light"
    ? "text-brand-silver hover:text-brand-platinum"
    : "text-brand-slate hover:text-brand-navy";

  const logoColor = theme === "light"
    ? "text-brand-platinum hover:text-white"
    : "text-brand-navy hover:text-brand-charcoal";

  const toggleContainerBg = theme === "light"
    ? "border-brand-silver/20 bg-white/5"
    : "border-brand-silver/30 bg-brand-offwhite";

  const toggleBtnActive = theme === "light"
    ? "bg-brand-gold text-brand-navy"
    : "bg-brand-navy text-white";

  const toggleBtnInactive = theme === "light"
    ? "text-brand-silver hover:text-white"
    : "text-brand-slate hover:text-brand-navy";

  const contactBtnStyle = theme === "light"
    ? "border-brand-platinum text-brand-platinum hover:bg-brand-platinum hover:text-brand-navy"
    : "border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white";

  const hamburgerIconColor = theme === "light" ? "text-brand-platinum" : "text-brand-navy";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${headerBg}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={`font-serif text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider transition-colors whitespace-nowrap ${logoColor}`}
          >
            株式会社 Luare Consulting
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link href="/#concept" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${linkColor}`}>
            Concept
          </Link>
          <Link href="/#gateway" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${linkColor}`}>
            Services
          </Link>
          <Link href="/#strengths" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${linkColor}`}>
            Strengths
          </Link>
          <Link href="/insights" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${linkColor}`}>
            Insights
          </Link>
          <Link href="/about" className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${linkColor}`}>
            About Us
          </Link>
        </nav>

        {/* Right Controls: Lang Toggle & CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Lang Selector */}
          <div className={`flex items-center border rounded-none overflow-hidden p-0.5 transition-colors ${toggleContainerBg}`}>
            {(["JP", "EN", "ZH"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-[10px] font-semibold tracking-wider transition-all rounded-none cursor-pointer ${
                  lang === l ? toggleBtnActive : toggleBtnInactive
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center border px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${contactBtnStyle}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile controls (Lang Toggle & Hamburger) */}
        <div className="flex md:hidden items-center gap-4">
          {/* Lang Selector (Small) */}
          <div className={`flex items-center border rounded-none overflow-hidden p-0.5 transition-colors ${toggleContainerBg}`}>
            {(["JP", "EN", "ZH"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 text-[9px] font-semibold tracking-wider transition-all rounded-none cursor-pointer ${
                  lang === l ? toggleBtnActive : toggleBtnInactive
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-1.5 focus:outline-none transition-colors ${hamburgerIconColor}`}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              // X Icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-brand-navy z-40 flex flex-col justify-between px-6 py-8 border-t border-brand-silver/10 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-6 text-left">
            <Link
              href="/#concept"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] text-brand-silver hover:text-brand-platinum transition-colors py-2 border-b border-white/5 uppercase"
            >
              Concept
            </Link>
            <Link
              href="/#gateway"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] text-brand-silver hover:text-brand-platinum transition-colors py-2 border-b border-white/5 uppercase"
            >
              Services
            </Link>
            <Link
              href="/#strengths"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] text-brand-silver hover:text-brand-platinum transition-colors py-2 border-b border-white/5 uppercase"
            >
              Strengths
            </Link>
            <Link
              href="/insights"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] text-brand-silver hover:text-brand-platinum transition-colors py-2 border-b border-white/5 uppercase"
            >
              Insights
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] text-brand-silver hover:text-brand-platinum transition-colors py-2 border-b border-white/5 uppercase"
            >
              About Us
            </Link>
          </nav>

          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full inline-flex items-center justify-center border border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-brand-navy py-4 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
