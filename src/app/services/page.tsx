import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serviceCategories, serviceItems } from "@/lib/serviceCatalog";

export const metadata: Metadata = {
  title: "サービス一覧｜会計・内部統制・経理BPO | Luare Consulting",
  description:
    "外資系・グローバル企業の日本法人に向けた会計・決算、海外監査対応、J-SOX・内部統制、経理BPO、Finance Setup、業務改善、M&Aの専門サービスをご紹介します。",
  alternates: { canonical: "https://luare-consulting.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1 bg-white pt-20">
        <section className="border-b border-[#dce7eb] bg-[#f7fafb]">
          <div className="mx-auto max-w-[1140px] px-5 pb-14 pt-12 sm:px-10 sm:pb-20 sm:pt-16">
            <nav aria-label="パンくずリスト" className="mb-12 flex gap-3 text-xs text-[#657780]">
              <Link className="hover:text-[#215d76] hover:underline" href="/">ホーム</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">サービス一覧</span>
            </nav>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-[#5b8191]">SERVICES</p>
            <h1 className="text-[clamp(30px,4vw,48px)] font-semibold leading-[1.35] tracking-tight text-[#263d4c]">
              サービス一覧
            </h1>
            <p className="mt-6 max-w-[800px] text-sm leading-8 text-[#526772] sm:text-base">
              海外親会社との連携が必要な日本法人から、海外事業を持つ企業まで。
              Luare Consultingは、会計・財務の実務と仕組みづくりを支援します。
              ご相談内容に近い分野から、詳しいサービスをご覧ください。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-20">
          <nav aria-label="サービス分野から選ぶ" className="mb-16 flex flex-wrap gap-3">
            {serviceCategories.map((group) => (
              <a
                key={group.number}
                href={`#category-${group.number}`}
                className="inline-flex items-center gap-3 rounded-full border border-[#cbdce2] px-4 py-3 text-xs font-semibold text-[#2d5568] transition-colors hover:border-[#487c8d] hover:bg-[#edf4f6] sm:text-sm"
              >
                <span className="text-[#7b929d]">{group.number}</span>
                {group.title}
                <span aria-hidden="true">↘</span>
              </a>
            ))}
          </nav>

          <div className="space-y-16 sm:space-y-20">
            {serviceCategories.map((group) => {
              const items = group.itemIds
                .map((id) => serviceItems.find((item) => item.id === id))
                .filter((item): item is (typeof serviceItems)[number] => item !== undefined);
              return (
                <section
                  key={group.number}
                  id={`category-${group.number}`}
                  className="scroll-mt-24 border-t border-[#c9d9dd] pt-7 sm:pt-10"
                  aria-labelledby={`heading-${group.number}`}
                >
                  <header className="mb-8 grid gap-4 sm:grid-cols-[64px_1fr] sm:gap-7">
                    <span className="text-sm font-semibold tracking-[0.14em] text-[#688b98]">{group.number}</span>
                    <div>
                      <h2 id={`heading-${group.number}`} className="text-[clamp(23px,3vw,32px)] font-semibold tracking-tight text-[#28495a]">
                        {group.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-[#5b6e76]">{group.lead}</p>
                    </div>
                  </header>
                  <div className="sm:pl-[92px]">
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group grid grid-cols-[1fr_auto] gap-5 border-b border-[#e2e9eb] py-6 transition-colors hover:bg-[#f8fbfc] sm:py-7"
                      >
                        <div>
                          <h3 className="text-lg font-semibold leading-7 text-[#2c4859] group-hover:text-[#13688d]">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#637780]">{item.description}</p>
                        </div>
                        <span aria-hidden="true" className="self-center text-lg text-[#608998] transition-transform group-hover:translate-x-1">↗</span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="border-t border-[#dbe6e9] bg-[#f6f9fa]">
          <div className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20">
            <p className="text-[11px] font-semibold tracking-[0.19em] text-[#5d8492]">CONTACT</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#28495a] sm:text-3xl">まずは課題をお聞かせください。</h2>
            <p className="mt-4 max-w-[720px] text-sm leading-8 text-[#5b7079]">
              支援内容や進め方は、現状とご要望を伺ったうえで個別にご提案します。
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#24647f] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#184f67]">
              お問い合わせ <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
