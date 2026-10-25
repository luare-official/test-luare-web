import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "監査法人・専門家の皆様へ｜監査関連実務支援 | Luare Consulting";
const pageDescription =
  "監査関連資料の整理、海外拠点との照会・資料調整、内部統制関連業務など。日英中の専門的なやり取りを含む実務連携を、案件に応じて支援します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "監査法人 実務支援",
    "監査 中国語対応",
    "監査 英語対応",
    "海外拠点 監査対応",
    "監査関連資料",
    "内部統制 実務支援",
    "Luare Consulting",
  ],
  alternates: { canonical: "https://luare-consulting.com/for-audit-firms" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://luare-consulting.com/for-audit-firms",
    siteName: "Luare Consulting",
    type: "website",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "監査法人・専門家向け監査関連実務支援",
  description: pageDescription,
  serviceType: "監査関連実務支援・内部統制関連業務",
  audience: {
    "@type": "Audience",
    audienceType: "監査法人・会計事務所・専門家",
  },
  provider: {
    "@type": "Organization",
    name: "株式会社Luare Consulting",
    url: "https://luare-consulting.com/",
  },
  url: "https://luare-consulting.com/for-audit-firms",
  availableLanguage: ["ja", "en", "zh"],
};

export default function AuditFirmsCollaborationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex min-h-screen flex-col bg-white text-[#0B3158] [font-family:var(--font-noto-sans),Meiryo,sans-serif]">
        <header className="border-b border-[#CBD5E1] bg-white">
          <div className="mx-auto flex min-h-[83px] max-w-[1156px] items-center px-5 sm:px-7">
            <Link href="/" className="text-[17px] font-bold leading-tight tracking-[-0.05em] text-[#0B3158] sm:text-[20px]" aria-label="Luare Consulting ホーム">
              Luare Consulting
              <span className="mt-1 block text-[9px] font-normal tracking-[0.09em] text-[#475569]">
                ACCOUNTING &amp; FINANCE
              </span>
            </Link>
          </div>
        </header>

        <main className="flex-1 bg-[linear-gradient(120deg,#fff_0%,#fff_58%,#f4f8fa_100%)]">
          <div className="mx-auto max-w-[1156px] px-5 pb-16 sm:px-7 sm:pb-24">
            <nav aria-label="パンくずリスト" className="flex flex-wrap items-center gap-2 pt-6 text-[11px] text-[#475569] sm:pt-7">
              <Link className="hover:underline" href="/">ホーム</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">監査法人・専門家の皆様へ</span>
            </nav>

            <div className="max-w-[850px] pt-12 sm:pt-16">
              <p className="text-[11px] font-semibold tracking-[0.17em] text-[#1766A0]">
                FOR AUDIT &amp; ACCOUNTING FIRMS
              </p>
              <h1 className="mt-4 text-[29px] font-semibold leading-[1.5] tracking-[-0.035em] text-[#0B3158] sm:text-[42px]">
                監査法人・専門家の皆様へ
              </h1>
              <p className="mt-5 text-[16px] font-medium leading-[1.9] text-[#0B3158] sm:text-[18px]">
                Luare Consultingでは、監査法人や会計専門家の皆様と、案件に応じた実務連携に対応しています。
              </p>

              <section aria-labelledby="support-title" className="mt-9 border-t border-[#CBD5E1] pt-8">
                <h2 id="support-title" className="text-[18px] font-semibold text-[#0B3158]">
                  主な対応領域
                </h2>
                <p className="mt-3 text-[14px] leading-[2] text-[#475569]">
                  海外拠点への資料依頼・照会事項の整理、監査関連資料の収集・分析、内部統制関連業務など。
                  会計・監査の文脈を踏まえ、日本語・英語・中国語でのコミュニケーションを含めて支援します。
                </p>
              </section>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[4px] bg-[#1766A0] px-6 py-3 text-[13px] font-semibold text-white hover:bg-[#0B3158]"
              >
                案件について相談する <span className="ml-2" aria-hidden="true">→</span>
              </Link>
              <p className="mt-6 text-[11px] leading-[1.9] text-[#475569]">
                ※受託可能範囲・独立性・守秘義務・品質管理等を確認のうえ、個別に対応します。
              </p>
            </div>
          </div>
        </main>

        <footer className="border-t border-[#CBD5E1] py-7">
          <div className="mx-auto max-w-[1156px] px-5 text-[11px] text-[#475569] sm:px-7">
            © 2026 Luare Consulting
          </div>
        </footer>
      </div>
    </>
  );
}
