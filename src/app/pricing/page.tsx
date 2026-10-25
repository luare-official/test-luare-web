import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "料金・参考費用 | Luare Consulting",
  description: "内部統制・J-SOX、決算改善、FP&A支援の参考費用を、想定単価・工数・期間とあわせてご案内。案件の範囲に応じて個別にお見積りします。",
  alternates: { canonical: "https://luare-consulting.com/pricing" },
};

const examples = [
  {
    id:"jsox",
    title:"J-SOX 3点セット構築支援",
    subtitle:"業務ヒアリング・3点セット作成・評価準備など",
    price:"288万円",
    condition:"16,000円／時間 × 合計180時間",
    period:"想定期間：6か月",
    href:"/services/internal-control",
  },
  {
    id:"closing",
    title:"決算実務・改善支援",
    subtitle:"決算関連実務・CF資料・締め工程の可視化と改善など",
    price:"576万円",
    condition:"12,000円／時間 × 月80時間 × 6か月",
    period:"想定期間：6か月",
    href:"/services/accounting-management",
  },
  {
    id:"fpa",
    title:"FP&A・KPI高度化支援",
    subtitle:"予実分析・事業KPI分析・指標の精度改善など",
    price:"648万円",
    condition:"18,000円／時間 × 月60時間 × 6か月",
    period:"想定期間：6か月",
    href:"/services/accounting-management#fpa",
  }
] as const;

export default function PricingPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1 bg-white pt-20">
        <section className="border-b border-[#dbe6e9] bg-[#f5f9fa]">
          <div className="mx-auto max-w-[1080px] px-5 pb-14 pt-10 sm:px-10">
            <nav aria-label="パンくずリスト" className="mb-10 flex gap-3 text-xs text-[#607986]">
              <Link href="/" className="hover:underline">ホーム</Link><span>/</span><span aria-current="page">料金</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[.2em] text-[#4d879c]">PRICING</p>
            <h1 className="mt-3 text-[clamp(32px,4.4vw,46px)] font-semibold text-[#223e50]">料金・参考費用</h1>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-[#607682] sm:text-base">
              業務の専門性、対象範囲、必要な工数に応じてお見積りします。
              以下はご相談内容をイメージいただくための参考試算です。
            </p>
          </div>          <div className="mx-auto max-w-[1080px] px-5 pb-8 sm:px-10">
            <p className="mt-3 max-w-3xl text-xs leading-7 text-[#607682]">
              参考金額は「対象業務ごとの時間単価 × 想定工数」によって計算しています。時間単価は支援内容によって異なるため、すべての業務に共通する一律単価ではありません。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1080px] px-5 py-14 sm:px-10 sm:py-20">
          <div className="mb-9">
            <h2 className="text-2xl font-semibold text-[#24465a]">支援内容別の参考試算</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c7783]">各例は想定条件に基づく計算です。定額プラン・お約束する見積額・過去の実績金額ではありません。</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {examples.map(example=>(
              <article key={example.id} className="flex flex-col rounded-lg border border-[#d8e6e9] bg-white p-6 shadow-[0_5px_25px_rgba(25,61,81,.035)]">
                <h3 className="min-h-[3.3rem] text-lg font-semibold leading-7 text-[#23475a]">{example.title}</h3>
                <p className="mt-2 min-h-[5rem] text-[13px] leading-7 text-[#65808c]">{example.subtitle}</p>
                <div className="mt-5 border-t border-[#e1e9ec] pt-5">
                  <p className="text-xs font-semibold text-[#5d8190]">参考試算総額</p>
                  <p className="mt-2 text-[31px] font-semibold tracking-tight text-[#20566e]">{example.price}</p>
                  <p className="mt-3 text-[13px] leading-7 text-[#415f6f]">{example.condition}</p>
                  <p className="mt-1 text-xs text-[#67828e]">{example.period}</p>
                </div>
                <Link href={example.href} className="mt-7 inline-flex items-center gap-2 border-t border-[#e1e9ec] pt-5 text-sm font-semibold text-[#22718b] hover:underline">
                  支援内容を見る <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-lg bg-[#f3f7f8] p-5 text-xs leading-7 text-[#5c7481]">
            ※上記はご相談を具体化するための参考例です。実際の業務範囲・工数・支援期間・消費税区分・実費や契約条件は個別のお見積りで確認します。表示金額は最終的な契約価格ではありません。
          </p>
        </section>

        <section className="bg-[#f5f9fa] py-14 sm:py-20">
          <div className="mx-auto max-w-[1080px] px-5 sm:px-10">
            <p className="text-xs font-semibold tracking-widest text-[#558798]">HOW WE WORK</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#24465a]">必要な業務から、ご相談ください。</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-[#59717e]">
              すべての業務を一括で依頼いただく必要はありません。現在の体制やご希望を伺い、
              対象業務・担当体制・必要な期間を整理したうえで、個別にご提案します。
              仲介会社を介さず、担当窓口と直接ご相談いただけます。
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#24647f] px-8 py-4 text-sm font-semibold text-white hover:bg-[#174e65]">
              料金・支援範囲を相談する <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
