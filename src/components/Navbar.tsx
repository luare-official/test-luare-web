"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  theme?: "light" | "dark";
  solid?: boolean;
  overlay?: boolean;
  heroStyle?: boolean;
}

export default function Navbar({
  theme = "dark",
  solid = false,
  overlay = false,
  heroStyle = false,
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

  const getLangUrl = (targetLang: "JP" | "EN" | "ZH") => {
    let baseRoute = pathname;
    if (baseRoute.startsWith("/en")) baseRoute = baseRoute.replace("/en", "");
    else if (baseRoute.startsWith("/zh")) baseRoute = baseRoute.replace("/zh", "");
    if (baseRoute === "") baseRoute = "/";
    if (targetLang === "JP") return baseRoute;
    if (targetLang === "EN") return baseRoute === "/" ? "/en" : "/en" + baseRoute;
    return baseRoute === "/" ? "/zh" : "/zh" + baseRoute;
  };

  const prefix = currentLang === "JP" ? "" : currentLang === "EN" ? "/en" : "/zh";
  const sectionLink = (hash: string) => (prefix || "") + "/#" + hash;
  const contactLink = currentLang === "JP" ? "/contact" : prefix + "/contact";
  const contactText = currentLang === "JP" ? "お問い合わせ" : currentLang === "ZH" ? "联系我们" : "Contact";

  const navItems = currentLang === "JP"
    ? [
        [sectionLink("people"), "Luareについて"],
        [sectionLink("services"), "サービス"],
        [sectionLink("case-studies"), "事例"],
      ]
    : [
        [prefix + "/#services", "Services"],
        [prefix + "/insights", "Insights"],
        [prefix + "/about", currentLang === "ZH" ? "关于我们" : "About"],
      ];

  if (heroStyle) {
    return (
      <header className="luare-unicell-header">
        <Link href={prefix || "/"} className="luare-unicell-logo-box" aria-label="Luare Consulting">
          <img src="/images/luare-consulting-logo.jpg" alt="Luare Consulting" />
        </Link>

        <div className="luare-unicell-nav-bubble">
          <nav>
            {navItems.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="luare-unicell-lang">
            {(["JP", "EN", "ZH"] as const).map((lang, index) => (
              <span key={lang}>
                {index > 0 && <i>/</i>}
                <Link
                  href={getLangUrl(lang)}
                  className={currentLang === lang ? "is-active" : ""}
                >
                  <i className={"luare-nav-flag luare-nav-flag-" + lang.toLowerCase()} aria-hidden="true" />
                  <b>{lang}</b>
                </Link>
              </span>
            ))}
          </div>

          <Link href={contactLink} className="luare-unicell-contact">
            {contactText}
          </Link>
        </div>
      </header>
    );
  }

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

  const logoColor = overlayMode || theme === "light" ? "text-white" : "text-[#30383f]";
  const hamburgerColor = overlayMode || theme === "light" ? "text-white" : "text-[#30383f]";
  const languageText = overlayMode || theme === "light" ? "text-white/70" : "text-[#6c7883]";
  const languageActive = overlayMode || theme === "light" ? "text-white" : "text-[#058dca]";

  const standardNavItems =
    currentLang === "JP"
      ? [
          [sectionLink("services"), "Services"],
          [sectionLink("people"), "People"],
          [sectionLink("case-studies"), "Case Studies"],
          [sectionLink("faq"), "FAQ"],
        ]
      : [
          [prefix + "/#services", "Services"],
          [prefix + "/insights", "Insights"],
          [prefix + "/about", currentLang === "ZH" ? "代表简介 / 关于我们" : "About Us"],
        ];

  return (
    <header className={"fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 " + headerBg}>
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link href={prefix || "/"} className={"transition-colors " + logoColor}>
          <span className="block font-[var(--font-inter)] text-[16px] font-semibold tracking-[0.04em] sm:text-[17px]">
            Luare Consulting
          </span>
          <span className="mt-0.5 block font-[var(--font-inter)] text-[7px] font-medium tracking-[0.2em] opacity-70 sm:text-[8px]">
            ACCOUNTING &amp; FINANCE
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <nav className="flex items-center gap-5 lg:gap-7">
            {standardNavItems.map(([href, label]) => (
              <Link key={href} href={href} className={"luare-nav-link " + linkColor}>
                {label}
              </Link>
            ))}
          </nav>

          <div className={"flex items-center gap-2 font-[var(--font-inter)] text-[10px] font-medium tracking-[0.08em] " + languageText}>
            {(["JP", "EN", "ZH"] as const).map((lang, index) => (
              <span key={lang} className="flex items-center gap-2">
                {index > 0 && <span className="opacity-35">/</span>}
                <Link
                  href={getLangUrl(lang)}
                  className={"transition-colors hover:opacity-100 " + (currentLang === lang ? languageActive : "")}
                >
                  {lang}
                </Link>
              </span>
            ))}
          </div>

          <Link
            href={contactLink}
            className="rounded-full bg-[#078fcf] px-5 py-3 text-[10px] font-semibold tracking-[0.12em] text-white transition-colors hover:bg-[#0678ad]"
          >
            {contactText}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <div className={"flex items-center gap-1.5 font-[var(--font-inter)] text-[9px] font-medium " + languageText}>
            <Link href={getLangUrl("JP")} className={currentLang === "JP" ? languageActive : ""}>JP</Link>
            <span className="opacity-35">/</span>
            <Link href={getLangUrl("EN")} className={currentLang === "EN" ? languageActive : ""}>EN</Link>
            <span className="opacity-35">/</span>
            <Link href={getLangUrl("ZH")} className={currentLang === "ZH" ? languageActive : ""}>ZH</Link>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={"p-1.5 transition-colors " + hamburgerColor}
            aria-label="Toggle navigation menu"
          >
            <span className="flex w-6 flex-col gap-[5px]">
              <i className={"h-px w-full bg-current transition-transform " + (isMenuOpen ? "translate-y-[6px] rotate-45" : "")} />
              <i className={"h-px w-full bg-current transition-opacity " + (isMenuOpen ? "opacity-0" : "")} />
              <i className={"h-px w-full bg-current transition-transform " + (isMenuOpen ? "-translate-y-[6px] -rotate-45" : "")} />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[78px] z-40 overflow-y-auto bg-[#123e68] px-7 py-10 md:hidden">
          <nav className="flex flex-col">
            {standardNavItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-white/12 py-5 font-[var(--font-inter)] text-sm font-medium tracking-[0.1em] text-white/88"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href={contactLink}
            onClick={() => setIsMenuOpen(false)}
            className="mt-9 flex w-full items-center justify-center rounded-full bg-white py-4 text-xs font-semibold tracking-[0.12em] text-[#123e68]"
          >
            {contactText}
          </Link>
        </div>
      )}
    </header>
  );
}
