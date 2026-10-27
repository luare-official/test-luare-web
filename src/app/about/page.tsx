import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会社概要 | Luare Consulting",
  description:
    "Luare Consulting 代表取締役 陸 沿青（US.CPA）の経歴。KPMG、三菱UFJモルガン・スタンレー証券等を経て、AIエージェントと専門家チームによる次世代型AI経理BPOを提供。",
  alternates: {
    canonical: "https://luare-consulting.com/about",
    languages: {
      "x-default": "https://luare-consulting.com/about",
      ja: "https://luare-consulting.com/about",
      en: "https://luare-consulting.com/en/about",
      "zh-CN": "https://luare-consulting.com/zh/about",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar theme="light" solid={true} />

      <main className="flex-1 pt-20">
      <section className="luare-v6-section" id="representative">
        <div className="luare-v6-container">
          <ScrollReveal><p className="luare-v6-eyebrow">REPRESENTATIVE</p></ScrollReveal>
          <div className="luare-v6-rep-grid">
            <ScrollReveal>
              <div className="luare-v6-rep-photo">
                <Image src="/images/Photo.png" alt="Luare Consulting 代表 陸 沿青" width={900} height={1125} unoptimized />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="luare-v6-rep-copy">
                <p className="luare-v6-label">Luare Consulting 代表</p>
                <h2 className="luare-v6-rep-name">陸 沿青</h2>
                <p className="luare-v6-qual">米国公認会計士（USCPA, Inactive, グアム州）</p>
                <p className="luare-v6-label">学歴</p>
                <p><strong>南オーストラリア大学（現：アデレード大学）<br />経営学部 卒業</strong></p>
                <p className="luare-v6-label luare-v6-label-spaced">Biography</p>
                <p className="luare-v6-bio">
                  オーストラリアにて経営学士号を取得後、日系上場専門商社および米国系製造大手の日本法人にて
                  グローバル経理実務を経験。その後、KPMGあずさ監査法人にて会計アドバイザリー業務に従事し、
                  数々の多国籍企業の内部統制・財務基盤構築を支援。さらに、三菱UFJモルガン・スタンレー証券の
                  投資銀行部門、米国系ベンチャー会計事務所を経て独立、Luare Consultingを設立。
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
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">会社名</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">株式会社Luare Consulting</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">事業内容</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">Accounting & Finance BPO / 会計コンサルティングサービス</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">対応言語</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">日本語 / 英語 / 中国語</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">代表</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">陸 沿青 (US.CPA)</dd>
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
                borderColor:"#1766A0",
                color:"#1766A0",
              }}
            >
              Contact Us →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
