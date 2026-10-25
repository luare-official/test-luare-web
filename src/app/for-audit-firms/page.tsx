import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "監査法人や専門家との協業｜中国語・英語対応の実務支援 | Luare Consulting",
  description:
    "中国語・英語の専門的なやり取りから、監査調書の作成補助や内部統制関連業務まで。監査法人の業務体制に合わせて実務を支援します。",
  keywords: [
    "監査法人との協業",
    "監査法人向け実務支援",
    "監査 中国語対応",
    "監査 英語対応",
    "監査調書 作成補助",
    "内部統制 関連業務",
    "監査法人 外部委託",
    "Luare Consulting",
  ],
  alternates: {
    canonical: "https://luare-consulting.com/for-audit-firms",
  },
  openGraph: {
    title: "監査法人や専門家との協業｜中国語・英語対応の実務支援",
    description:
      "中国語・英語の専門的なやり取りから、監査調書の作成補助や内部統制関連業務まで。監査法人の業務体制に合わせて実務を支援します。",
    url: "https://luare-consulting.com/for-audit-firms",
    siteName: "Luare Consulting",
    type: "website",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "監査法人や専門家との協業｜中国語・英語対応の実務支援",
  description:
    "中国語・英語の専門的なやり取りから、監査調書の作成補助や内部統制関連業務まで。監査法人の業務体制に合わせて実務を支援します。",
  serviceType: "監査法人向け実務支援・専門家との協業",
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
      <div className="min-h-screen bg-white text-[#293b45] [font-family:var(--font-noto-sans),Meiryo,sans-serif]">
        <header className="border-b border-[#dbe6e9] bg-white">
          <div className="mx-auto flex min-h-[83px] max-w-[1156px] items-center justify-between gap-4 px-5 sm:px-7">
            <Link href="/" className="shrink-0 text-[17px] font-bold leading-tight tracking-[-0.05em] text-[#213c4b] sm:text-[20px]" aria-label="Luare Consulting ホーム">
              Luare Consulting
              <span className="mt-1 block text-[9px] font-normal tracking-[0.09em] text-[#78909d]">
                ACCOUNTING &amp; FINANCE
              </span>
            </Link>
            <nav aria-label="ページ内メニュー" className="flex items-center gap-3 text-xs text-[#5c6d77] sm:gap-7">
              <a className="hidden hover:text-[#215e74] sm:inline" href="#approach">
                協業体制
              </a>
              <a
                className="inline-flex min-h-10 items-center justify-center rounded-[4px] bg-[#24657d] px-3 py-2 text-center text-[11px] font-semibold text-white hover:bg-[#174d63] sm:px-6 sm:text-[13px]"
                href="#contact"
              >
                協業のご相談
              </a>
            </nav>
          </div>
        </header>

        <main>
          <div className="border-b border-[#dbe6e9] bg-[linear-gradient(120deg,#fff_0%,#fff_58%,#f4f8fa_100%)]">
            <div className="mx-auto max-w-[1156px] px-5 sm:px-7">
              <nav aria-label="パンくずリスト" className="flex flex-wrap items-center gap-2 pt-6 text-[11px] text-[#84969f] sm:pt-7">
                <Link className="hover:underline" href="/">ホーム</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">監査法人や専門家との協業</span>
              </nav>
              <div className="pb-14 pt-10 sm:pb-[72px] sm:pt-[45px]">
                <p className="text-[11px] font-semibold tracking-[0.17em] text-[#397f96]">
                  FOR AUDIT &amp; ACCOUNTING FIRMS
                </p>
                <h1 className="mt-[18px] max-w-[1000px] text-[30px] font-semibold leading-[1.44] tracking-[-0.035em] text-[#233e50] sm:text-[43px] lg:text-[54px]">
                  監査法人や専門家との協業
                  <span className="block font-bold text-[#185e76]">
                    中国語・英語対応の実務支援
                  </span>
                </h1>
                <p className="mt-6 max-w-[840px] text-[16px] font-medium leading-[1.8] text-[#355465] sm:text-[19px]">
                  中国語・英語の専門的なやり取りから、監査調書の作成補助や内部統制関連業務まで。監査法人の業務体制に合わせて実務を支援します。
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-[4px] bg-[#24657d] px-6 py-3 text-[13px] font-semibold tracking-[0.035em] text-white hover:bg-[#174d63]"
                    href="#contact"
                  >
                    協業を相談する
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section id="approach" aria-labelledby="approach-title" className="scroll-mt-8 py-14 sm:py-[66px]">
            <div className="mx-auto max-w-[1156px] px-5 sm:px-7">
              <p className="text-[11px] font-semibold tracking-[0.17em] text-[#397f96]">
                WHY LUARE / PROFESSIONAL NETWORK
              </p>
              <h2 id="approach-title" className="mt-3 text-[24px] font-semibold leading-[1.45] tracking-[-0.02em] text-[#233e50] sm:text-[28px]">
                多言語での実務連携
              </h2>
              <p className="mt-4 max-w-[790px] text-[14px] leading-[1.95] text-[#627883]">
                会計・内部統制の業務背景を理解したうえで、日本語・英語・中国語による実務上の確認や関係者間の調整を支援します。中国語での現地ヒアリングや監査関連の照会対応も、案件内容に応じてご相談いただけます。
              </p>
              <article className="mt-7 border border-l-[3px] border-[#dbe6e9] border-l-[#b9d1d8] bg-white p-6 sm:p-[30px]">
                <p className="text-[11px] font-medium tracking-[0.1em] text-[#43829a]">
                  MULTILINGUAL AUDIT COORDINATION
                </p>
                <h3 className="mt-3 text-[17px] font-semibold text-[#21485c]">
                  中国語・英語による実務連携
                </h3>
                <p className="mt-3 text-[13px] leading-[2] text-[#627783]">
                  海外拠点への資料依頼、照会事項の整理、回答内容の確認など、監査に必要なコミュニケーションを日英中で支援します。単なる翻訳ではなく、会計・監査の文脈に沿ったやり取りを重視します。
                </p>
              </article>
            </div>
          </section>

          <section id="contact" aria-labelledby="contact-title" className="scroll-mt-4 bg-[#244e62] py-14 text-white sm:py-[66px]">
            <div className="mx-auto max-w-[1156px] px-5 sm:px-7">
              <p className="text-[11px] font-semibold tracking-[0.17em] text-[#bfdae2]">
                CONTACT FOR PROFESSIONAL FIRMS
              </p>
              <h2 id="contact-title" className="mt-3 text-[24px] font-semibold leading-[1.45] sm:text-[28px]">
                監査法人や専門家の皆様へ
              </h2>
              <p className="mt-4 max-w-[900px] text-[14px] leading-[1.95] text-[#bfdae2]">
                中国語・英語対応が必要な監査関連業務や、監査調書作成補助、資料収集・分析、内部統制関連業務、進捗管理等の協業についてご相談ください。
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-[4px] bg-white px-6 py-3 text-[13px] font-semibold text-[#245e75] hover:bg-[#edf5f7]"
              >
                協業について問い合わせる <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#dbe6e9] py-7">
          <div className="mx-auto flex max-w-[1156px] flex-wrap justify-between gap-3 px-5 text-[11px] leading-[1.9] text-[#83939a] sm:px-7">
            <span>© 2026 Luare Consulting</span>
            <span>監査関連実務支援は、受託可能範囲・独立性・守秘義務・品質管理等を確認のうえ個別に対応します。</span>
          </div>
        </footer>
      </div>
    </>
  );
}
