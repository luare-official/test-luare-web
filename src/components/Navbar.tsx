"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  theme?: "light" | "dark";
  solid?: boolean;
  overlay?: boolean;
}

export default function Navbar({
  theme = "dark",
  solid = false,
  overlay = false,
}: NavbarProps) {
  const pathname = usePathname() || "";
  const currentLang: "JP" | "EN" | "ZH" = pathname.startsWith("/en")
    ? "EN"
    : pathname.startsWith("/zh")
      ? "ZH"
      : "JP";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasBackground = solid || isScrolled;
  const overlayMode = overlay && !hasBackground;

  const headerBg = overlayMode
    ? "bg-transparent border-transparent"
    : hasBackground
      ? theme === "light"
        ? "bg-[#153f72]/95 backdrop-blur-md border-white/10 shadow-sm"
        : "bg-white/95 backdrop-blur-md border-slate-200/70 shadow-sm"
      : "bg-transparent border-transparent";

  const linkColor = overlayMode
    ? "text-white/90 hover:text-white"
    : theme === "light"
      ? "text-white/75 hover:text-white"
      : "text-[#4b5967] hover:text-[#27323b]";

  const logoColor = overlayMode
    ? "text-white"
    : theme === "light"
      ? "text-white"
      : "text-[#30383f]";

  const contactBtnStyle = overlayMode
    ? "border-white/70 text-white hover:bg-white hover:text-[#27323b]"
    : theme === "light"
      ? "border-white/60 text-white hover:bg-white hover:text-[#153f72]"
      : "border-[#05a9e6] text-[#058dca] hover:bg-[#05a9e6] hover:text-white";

  const hamburgerColor = overlayMode || theme === "light" ? "text-white" : "text-[#30383f]";

  const aboutText =
    currentLang === "ZH"
      ? "代表简介 / 关于我们"
      : currentLang === "EN"
        ? "Representative / About"
        : "About Us";

  const contactText = currentLang === "ZH" ? "联系我们" : "Contact";
  const servicesLink =
    currentLang === "ZH"
      ? "/zh/#services"
      : currentLang === "EN"
        ? "/en/#services"
        : "/#services";
  const insightsLink =
    currentLang === "ZH"
      ? "/zh/insights"
      : currentLang === "EN"
        ? "/en/insights"
        : "/insights";
  const aboutLink =
    currentLang === "ZH"
      ? "/zh/about"
      : currentLang === "EN"
        ? "/en/about"
        : "/about";
  const contactLink =
    currentLang === "ZH"
      ? "/zh/contact"
      : currentLang === "EN"
        ? "/en/contact"
        : "/contact";

  const getLangUrl = (targetLang: "JP" | "EN" | "ZH") => {
    let baseRoute = pathname;
    if (baseRoute.startsWith("/en")) baseRoute = baseRoute.replace("/en", "");
    else if (baseRoute.startsWith("/zh")) baseRoute = baseRoute.replace("/zh", "");
    if (baseRoute === "") baseRoute = "/";

    if (targetLang === "JP") return baseRoute;
    if (targetLang === "EN") return baseRoute === "/" ? "/en" : `/en${baseRoute}`;
    return baseRoute === "/" ? "/zh" : `/zh${baseRoute}`;
  };

  const languageText = overlayMode || theme === "light" ? "text-white/70" : "text-[#6c7883]";
  const languageActive = overlayMode || theme === "light" ? "text-white" : "text-[#058dca]";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${headerBg}`}>
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className={`transition-colors ${logoColor}`}>
          <span className="block font-[var(--font-inter)] text-[16px] font-semibold tracking-[0.04em] sm:text-[17px]">
            Luare Consulting
          </span>
          <span className="mt-0.5 block font-[var(--font-inter)] text-[7px] font-medium tracking-[0.2em] opacity-70 sm:text-[8px]">
            ACCOUNTING &amp; FINANCE
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          <nav className="flex items-center gap-6 lg:gap-8">
            <Link href={servicesLink} className={`luare-nav-link ${linkColor}`}>
              Services
            </Link>
            <Link href={insightsLink} className={`luare-nav-link ${linkColor}`}>
              Insights
            </Link>
            <Link href={aboutLink} className={`luare-nav-link ${linkColor}`}>
              {aboutText}
            </Link>
          </nav>

          <div className={`flex items-center gap-2 font-[var(--font-inter)] text-[10px] font-medium tracking-[0.08em] ${languageText}`}>
            {(["JP", "EN", "ZH"] as const).map((lang, index) => (
              <span key={lang} className="flex items-center gap-2">
                {index > 0 && <span className="opacity-35">/</span>}
                <Link
                  href={getLangUrl(lang)}
                  className={`transition-colors hover:opacity-100 ${currentLang === lang ? languageActive : ""}`}
                >
                  {lang}
                </Link>
              </span>
            ))}
          </div>

          <Link
            href={contactLink}
            className={`rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${contactBtnStyle}`}
          >
            {contactText}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <div className={`flex items-center gap-1.5 font-[var(--font-inter)] text-[9px] font-medium ${languageText}`}>
            <Link href={getLangUrl("JP")} className={currentLang === "JP" ? languageActive : ""}>JP</Link>
            <span className="opacity-35">/</span>
            <Link href={getLangUrl("EN")} className={currentLang === "EN" ? languageActive : ""}>EN</Link>
            <span className="opacity-35">/</span>
            <Link href={getLangUrl("ZH")} className={currentLang === "ZH" ? languageActive : ""}>ZH</Link>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`p-1.5 transition-colors ${hamburgerColor}`}
            aria-label="Toggle navigation menu"
          >
            <span className="flex w-6 flex-col gap-[5px]">
              <i className={`h-px w-full bg-current transition-transform ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <i className={`h-px w-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <i className={`h-px w-full bg-current transition-transform ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[78px] z-40 overflow-y-auto bg-[#153f72] px-7 py-10 md:hidden">
          <nav className="flex flex-col">
            {[
              [servicesLink, "Services"],
              [insightsLink, "Insights"],
              [aboutLink, aboutText],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-white/12 py-5 font-[var(--font-inter)] text-sm font-medium tracking-[0.12em] text-white/85"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href={contactLink}
            onClick={() => setIsMenuOpen(false)}
            className="mt-9 flex w-full items-center justify-center rounded-full border border-white/60 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            {contactText}
          </Link>
        </div>
      )}
    </header>
  );
}
