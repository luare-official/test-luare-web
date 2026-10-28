import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Company Profile | Luare Consulting",
  description:
    "Profile of Yanqing Lu (USCPA, Inactive), Managing Partner of Luare Consulting. Providing next-generation AI accounting BPO combining AI agents and expert teams.",
  alternates: {
    canonical: "https://luare-consulting.com/en/about",
    languages: {
      "x-default": "https://luare-consulting.com/about",
      ja: "https://luare-consulting.com/about",
      en: "https://luare-consulting.com/en/about",
      "zh-CN": "https://luare-consulting.com/zh/about",
    },
  },
};

export default function AboutPageEn() {
  return (
    <>
      <Navbar theme="light" solid={true} />

      <main className="flex-1 pt-20" lang="en">
      <section className="luare-v6-section" id="representative">
        <div className="luare-v6-container">
          <ScrollReveal><p className="luare-v6-eyebrow">REPRESENTATIVE</p></ScrollReveal>
          <div className="luare-v6-rep-grid">
            <ScrollReveal>
              <div className="luare-v6-rep-photo">
                <Image src="/images/Photo.png" alt="Yanqing Lu, Luare Consulting representative" width={900} height={1125} unoptimized />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="luare-v6-rep-copy">
                <p className="luare-v6-label">Luare Consulting Representative</p>
                <h2 className="luare-v6-rep-name">Yanqing Lu</h2>
                <p className="luare-v6-qual">US Certified Public Accountant (USCPA, Inactive, Guam)</p>
                <p className="luare-v6-label">Education</p>
                <p><strong>University of South Australia (now Adelaide University)<br />Bachelor of Business</strong></p>
                <p className="luare-v6-label luare-v6-label-spaced">Biography</p>
                <p className="luare-v6-bio">
                  After earning a Bachelor of Business in Australia, Yanqing gained global accounting experience at a listed Japanese trading company and the Japanese subsidiary of a major US manufacturing firm. Subsequently, at KPMG AZSA LLC, he engaged in accounting advisory services, supporting numerous multinational corporations in building internal controls and financial infrastructures. Following his tenure in the investment banking division of Mitsubishi UFJ Morgan Stanley Securities and a US-affiliated venture accounting firm, he founded Luare Consulting.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

        {/* ══════════════════════════════════════════════════════════════
            COMPANY INFORMATION
           ══════════════════════════════════════════════════════════════ */}
        <section className="bg-brand-white py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex items-center gap-3 mb-12">
              <div
                className="w-8 h-[1.5px] shrink-0"
                style={{ backgroundColor:"#1766A0" }}
              />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Company Information
              </h3>
            </div>

            <div className="border-t border-slate-200">
              <dl className="divide-y divide-slate-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">Company Name</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">Luare Consulting Co., Ltd.</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">Business Description</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">Accounting & Finance BPO / Accounting Consulting Services</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">Supported Languages</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">Japanese / English / Chinese</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">Representative</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">Yanqing Lu (USCPA, Inactive)</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CTA BOTTOM BAR
           ══════════════════════════════════════════════════════════════ */}
        <section
          className="border-t h-auto md:h-auto py-16 md:pt-24 md:pb-20"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.97)",
            borderColor: "rgba(23,102,160,0.15)",
          }}
        >
          <div className="mx-auto max-w-4xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-platinum tracking-wider mb-2">
                Consultation & Inquiries
              </h3>
              <p className="text-xs text-brand-silver/70 tracking-wider">
                We welcome all inquiries regarding global finance.
              </p>
            </div>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center border px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300"
              style={{
                borderColor:"#1766A0",
                color:"#1766A0",
              }}
            >
              Contact Us →
            </Link>
          </div>
        </section>
      </main>

      <FooterEn />
    </>
  );
}
