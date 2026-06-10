import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Luare Consulting — 会社概要・代表略歴",
  description:
    "Luare Consulting 代表取締役 陸 沿青（Yanqing Lu）の経歴。KPMG、三菱UFJモルガン・スタンレー証券等を経て、Big 4品質のハイエンド財務コンサルティングを提供。",
};

export default function AboutPage() {
  return (
    <>
      {/* ──────────────── NAVBAR (About version) ──────────────── */}
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-navy/95 backdrop-blur-md border-b border-brand-silver/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          <Link
            href="/"
            className="font-serif text-lg sm:text-xl font-medium tracking-wider text-brand-platinum hover:text-white transition-colors"
          >
            株式会社 Luare Consulting
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-xs font-medium uppercase tracking-[0.2em] text-brand-silver hover:text-brand-platinum transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xs font-medium uppercase tracking-[0.2em] text-brand-platinum transition-colors"
              style={{ borderBottom: "1px solid #C5A059" }}
            >
              About Us
            </Link>
          </nav>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center border border-brand-platinum text-brand-platinum hover:bg-brand-platinum hover:text-brand-navy px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </header>

      <main className="flex-1">
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
              style={{ color: "#C5A059" }}
            >
              会社概要・代表略歴
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-wider text-brand-platinum leading-tight">
              About Us
            </h1>

            {/* Thin gold divider */}
            <div
              className="mx-auto mt-8 w-16 h-[1.5px]"
              style={{ backgroundColor: "#C5A059" }}
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
                    style={{ borderColor: "rgba(197, 160, 89, 0.35)" }}
                  />

                  {/* Photo container */}
                  <div className="relative overflow-hidden rounded-sm shadow-2xl">
                    <Image
                      src="/images/Photo.png"
                      alt="陸 沿青 — 代表取締役 / Managing Partner"
                      width={560}
                      height={700}
                      className="w-full h-auto object-cover grayscale contrast-[1.05] brightness-[1.02]"
                      priority
                      unoptimized={true}
                    />

                    {/* Bottom gradient overlay with name */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent px-6 pt-20 pb-6">
                      <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-platinum tracking-wider">
                        陸 沿青
                      </h2>
                      <span className="text-xs font-medium tracking-[0.15em] text-brand-silver/80 mt-1 block">
                        Yanqing Lu
                      </span>
                    </div>
                  </div>

                  {/* Role badge below photo */}
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="w-8 h-[1.5px] shrink-0"
                      style={{ backgroundColor: "#C5A059" }}
                    />
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.25em]"
                      style={{ color: "#C5A059" }}
                    >
                      代表取締役 / Managing Partner
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
                    <div className="border-l-2 pl-5" style={{ borderColor: "#C5A059" }}>
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 block mb-2">
                        保有資格
                      </span>
                      <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                        米国公認会計士（USCPA, Inactive, グアム州）
                      </p>
                    </div>

                    {/* Education */}
                    <div className="border-l-2 pl-5" style={{ borderColor: "#C5A059" }}>
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 block mb-2">
                        学歴
                      </span>
                      <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                        南オーストラリア大学（現：アデレード大学）
                        <br />
                        経営学部 卒業
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
                      style={{ backgroundColor: "#C5A059" }}
                    />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                      Biography
                    </h3>
                  </div>
                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide">
                    オーストラリアにて経営学士号を取得後、日系上場専門商社および米国系製造大手の日本法人にてグローバル経理実務を経験。その後、KPMGあずさ監査法人にて会計アドバイザリー業務に従事し、数々の多国籍企業の内部統制・財務基盤構築を支援。
                  </p>
                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide mt-4">
                    さらに、三菱UFJモルガン・スタンレー証券の投資銀行部門、米国系ベンチャー会計事務所を経て独立、Luare
                    Consultingを設立。
                  </p>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-slate-100 mb-12" />

                {/* ── Philosophy ── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-6 h-[1.5px] shrink-0"
                      style={{ backgroundColor: "#C5A059" }}
                    />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                      Philosophy
                    </h3>
                  </div>

                  <blockquote
                    className="border-l-[3px] pl-6 mb-5"
                    style={{ borderColor: "#C5A059" }}
                  >
                    <p className="font-serif text-lg sm:text-xl font-medium text-brand-charcoal leading-relaxed tracking-wide">
                      「Big 4品質の専門性を、最適化された組織モデルで提供する。」
                    </p>
                  </blockquote>

                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide">
                    日米中のビジネス最前線で培った知見を統合。代表自身が品質統制の最高責任者として、お客様にグローバル水準のガバナンスをお約束します。
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
                style={{ backgroundColor: "#C5A059" }}
              />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Career Highlights
              </h3>
            </div>

            <div className="relative">
              {/* Vertical gold line */}
              <div
                className="absolute left-[11px] top-2 bottom-2 w-[1.5px]"
                style={{ backgroundColor: "rgba(197, 160, 89, 0.25)" }}
              />

              <div className="space-y-10">
                {[
                  {
                    label: "Education",
                    title: "南オーストラリア大学 経営学部",
                    desc: "オーストラリアにて経営学士号を取得",
                  },
                  {
                    label: "Global Accounting",
                    title: "日系上場専門商社 / 米国系製造大手",
                    desc: "グローバル経理実務を経験",
                  },
                  {
                    label: "Big 4 Advisory",
                    title: "KPMGあずさ監査法人",
                    desc: "会計アドバイザリー業務、多国籍企業の内部統制・財務基盤構築を支援",
                  },
                  {
                    label: "Investment Banking",
                    title: "三菱UFJモルガン・スタンレー証券",
                    desc: "投資銀行部門にて金融アドバイザリーに従事",
                  },
                  {
                    label: "Venture / US CPA",
                    title: "米国系ベンチャー会計事務所",
                    desc: "USCPA資格取得、スタートアップ・中小企業の財務支援",
                  },
                  {
                    label: "Founder",
                    title: "株式会社 Luare Consulting 設立",
                    desc: "ハイエンド財務コンサルティング＆BPOファームとして独立",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    {/* Dot */}
                    <div className="relative shrink-0 mt-1">
                      <div
                        className="w-[23px] h-[23px] rounded-full border-[2px] flex items-center justify-center bg-white transition-all duration-300 group-hover:scale-110"
                        style={{ borderColor: "#C5A059" }}
                      >
                        <div
                          className="w-[7px] h-[7px] rounded-full"
                          style={{ backgroundColor: "#C5A059" }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.3em] block mb-1"
                        style={{ color: "#C5A059" }}
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
                style={{ backgroundColor: "#C5A059" }}
              />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Company Information
              </h3>
            </div>

            <div className="border-t border-slate-200">
              <dl className="divide-y divide-slate-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">会社名</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">株式会社Luare Consulting</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">事業内容</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">Finance BPO / 財務コンサルティング / 内部統制構築支援</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">対応言語</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">日本語 / 英語 / 中国語</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">代表</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">陸 沿青 (USCPA)</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CTA BOTTOM BAR
           ══════════════════════════════════════════════════════════════ */}
        <section
          className="border-t py-16"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.97)",
            borderColor: "rgba(197, 160, 89, 0.15)",
          }}
        >
          <div className="mx-auto max-w-4xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-platinum tracking-wider mb-2">
                ご相談・お問い合わせ
              </h3>
              <p className="text-xs text-brand-silver/70 tracking-wider">
                グローバル財務に関するあらゆるご相談を承ります。
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300"
              style={{
                borderColor: "#C5A059",
                color: "#C5A059",
              }}
            >
              Contact Us →
            </Link>
          </div>
        </section>
      </main>

      {/* ──────────────── FOOTER ──────────────── */}
      <footer className="bg-brand-charcoal text-brand-silver border-t border-brand-darknavy/40 pt-12 pb-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-serif text-sm tracking-[0.2em] text-brand-platinum">
              LUARE
            </span>
            <span className="text-[10px] tracking-widest text-brand-silver/40 font-mono">
              Luare Consulting Group © 2026
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
