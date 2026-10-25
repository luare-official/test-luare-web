import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Company Profile | Luare Consulting",
  description:
    "Profile of Yanqing Lu (US.CPA, Inactive), Managing Partner of Luare Consulting. Providing next-generation AI accounting BPO combining AI agents and expert teams.",
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

      <main className="flex-1" lang="en">
        {/* ══════════════════════════════════════════════════════════════
            HERO SECTION
           ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 overflow-hidden">
          {/* Background: navy + subtle skyline */}
          <div className="absolute inset-0 bg-brand-navy">
            <Image
              src="/images/global_cities_skyline.png"
              alt=""
              fill
              className="object-cover object-center opacity-[0.08]"
              priority
            />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 py-28 sm:py-36 text-center">
            {/* Gold accent label */}
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
              style={{ color:"#EDF5FC" }}
            >
              Company Profile & Representative Biography
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-wider text-brand-platinum leading-tight">
              About Us
            </h1>

            {/* Thin gold divider */}
            <div
              className="mx-auto mt-8 w-16 h-[1.5px]"
              style={{ backgroundColor:"#1766A0" }}
            />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MAIN 2-COLUMN SECTION
           ══════════════════════════════════════════════════════════════ */}
        <section className="bg-brand-white py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
              {/* ─── LEFT COLUMN: Portrait ─── */}
              <div className="w-full lg:w-[38%] shrink-0">
                <div className="relative">
                  {/* Gold accent frame behind the photo */}
                  <div
                    className="absolute -top-3 -left-3 w-full h-full rounded-sm border"
                    style={{ borderColor: "rgba(23,102,160,0.35)" }}
                  />

                  {/* Photo container */}
                  <div className="relative overflow-hidden rounded-sm shadow-2xl">
                    <Image
                      src="/images/Photo.png"
                      alt="Yanqing Lu — Managing Partner"
                      width={560}
                      height={700}
                      className="w-full h-auto object-cover"
                      priority
                      unoptimized={true}
                    />

                    {/* Bottom gradient overlay with name */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent px-6 pt-20 pb-6">
                      <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-platinum tracking-wider">
                        Yanqing Lu
                      </h2>
                      <span className="text-xs font-medium tracking-[0.15em] text-brand-silver/80 mt-1 block">
                        US.CPA (Inactive)
                      </span>
                    </div>
                  </div>

                  {/* Role badge below photo */}
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="w-8 h-[1.5px] shrink-0"
                      style={{ backgroundColor:"#1766A0" }}
                    />
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.25em]"
                      style={{ color:"#1766A0" }}
                    >
                      Managing Partner
                    </span>
                  </div>
                </div>
              </div>

              {/* ─── RIGHT COLUMN: Biography ─── */}
              <div className="w-full lg:w-[62%]">
                {/* ── Credentials Block ── */}
                <div className="mb-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Qualification */}
                    <div className="border-l-2 pl-5" style={{ borderColor:"#1766A0" }}>
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 block mb-2">
                        Qualifications
                      </span>
                      <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                        US Certified Public Accountant
                        <br />
                        (USCPA, Inactive, Guam)
                      </p>
                    </div>

                    {/* Education */}
                    <div className="border-l-2 pl-5" style={{ borderColor:"#1766A0" }}>
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 block mb-2">
                        Education
                      </span>
                      <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                        University of South Australia
                        <br />
                        Bachelor of Business
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-slate-100 mb-12" />

                {/* ── Biography ── */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-6 h-[1.5px] shrink-0"
                      style={{ backgroundColor:"#1766A0" }}
                    />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                      Biography
                    </h3>
                  </div>
                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide">
                    After earning a Bachelor of Business in Australia, Yanqing gained global accounting experience at a listed Japanese trading company and the Japanese subsidiary of a major US manufacturing firm. Subsequently, at KPMG AZSA LLC, he engaged in accounting advisory services, supporting numerous multinational corporations in building internal controls and financial infrastructures.
                  </p>
                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide mt-4">
                    Following his tenure in the investment banking division of Mitsubishi UFJ Morgan Stanley Securities and a US-affiliated venture accounting firm, he founded Luare Consulting.
                  </p>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-slate-100 mb-12" />

                {/* ── Philosophy ── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-6 h-[1.5px] shrink-0"
                      style={{ backgroundColor:"#1766A0" }}
                    />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                      Philosophy
                    </h3>
                  </div>

                  <blockquote
                    className="border-l-[3px] pl-6 mb-5"
                    style={{ borderColor:"#1766A0" }}
                  >
                    <p className="font-serif text-lg sm:text-xl font-medium text-brand-charcoal leading-relaxed tracking-wide">
                      A partner freeing executives from
                      <br />
                      &quot;unseen accounting risks&quot;.
                    </p>
                  </blockquote>

                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide">
                    Chronic challenges such as hiring difficulties and the risk of system collapse due to turnover plague accounting departments. By combining global-standard professional support with the power of technology, we fundamentally eliminate these uncertainties and build clear financial operations that accelerate management decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CAREER TIMELINE
           ══════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 border-t border-slate-100 py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex items-center gap-3 mb-14">
              <div
                className="w-8 h-[1.5px] shrink-0"
                style={{ backgroundColor:"#1766A0" }}
              />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Career Highlights
              </h3>
            </div>

            <div className="relative">
              {/* Vertical gold line */}
              <div
                className="absolute left-[11px] top-2 bottom-2 w-[1.5px]"
                style={{ backgroundColor: "rgba(23,102,160,0.25)" }}
              />

              <div className="space-y-10">
                {[
                  {
                    label: "Education",
                    title: "University of South Australia",
                    desc: "Earned a Bachelor of Business in Australia",
                  },
                  {
                    label: "Global Accounting",
                    title: "Listed Japanese Trading Co. / Major US Manufacturer",
                    desc: "Experienced in global accounting operations",
                  },
                  {
                    label: "Big 4 Advisory / US CPA",
                    title: "KPMG AZSA LLC",
                    desc: "Obtained USCPA license; provided accounting advisory, supporting multinational companies in building internal controls and financial foundations",
                  },
                  {
                    label: "Investment Banking",
                    title: "Mitsubishi UFJ Morgan Stanley Securities",
                    desc: "Engaged in M&A advisory in the Investment Banking Division",
                  },
                  {
                    label: "Venture",
                    title: "US-affiliated Venture Accounting Firm",
                    desc: "Engaged in general accounting consulting services (audit, internal control construction support, accounting outsourcing, M&A, etc.)",
                  },
                  {
                    label: "Founder",
                    title: "Founded Luare Consulting Co., Ltd.",
                    desc: "Established an accounting/finance consulting & AI agent firm",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    {/* Dot */}
                    <div className="relative shrink-0 mt-1">
                      <div
                        className="w-[23px] h-[23px] rounded-full border-[2px] flex items-center justify-center bg-white transition-all duration-300 group-hover:scale-110"
                        style={{ borderColor:"#1766A0" }}
                      >
                        <div
                          className="w-[7px] h-[7px] rounded-full"
                          style={{ backgroundColor:"#1766A0" }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.3em] block mb-1"
                        style={{ color:"#1766A0" }}
                      >
                        {item.label}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-brand-charcoal tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-slate/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">Yanqing Lu (US.CPA, Inactive)</dd>
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

      <footer className="bg-brand-charcoal text-brand-silver border-t border-brand-darknavy/40 pt-12 pb-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] tracking-widest text-brand-silver/40 font-mono">
              Luare Consulting Group © 2026
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
