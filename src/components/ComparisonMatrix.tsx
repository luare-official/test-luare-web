import type { TabType } from "./SolutionExperience";
import CostReductionChart from "./CostReductionChart";

interface ComparisonMatrixProps {
  activeTab: TabType;
}

const globalRows = [
  {
    item: "年間コスト（目安）",
    luare: "約400万円〜",
    big4: "600万〜1,000万円以上",
    inhouse: (
      <>
        約1,500万円
        <br />
        <span className="text-[10px]">（バイリンガル経理・財務マネージャー約1,000万円＋事務員約500万円）</span>
      </>
    ),
  },
  {
    item: "バイリンガル対応",
    luare: "ネイティブ水準（標準提供）",
    big4: "高額な追加オプション",
    inhouse: "採用難易度が極めて高い",
  },
  {
    item: "インフラ・DX",
    luare: "AI・クラウド型（最新鋭）",
    big4: "レガシーシステム",
    inhouse: "自社構築の初期投資が莫大",
  },
  {
    item: "機動力・拡張性",
    luare: "圧倒的に高い（即時対応）",
    big4: "官僚的で承認フローが長い",
    inhouse: "業務の属人化と、退職による体制崩壊リスク",
  },
];

const domesticRows = [
  {
    item: "採用期間",
    luare: "最短2週間で稼働開始",
    inhouse: "3〜6ヶ月以上（見つからないリスク）",
  },
  {
    item: "教育・引継ぎ",
    luare: (
      <>
        不要（貴社に完全カスタマイズされた
        <br />
        AIエージェントを構築）
      </>
    ),
    inhouse: "実務指導からカルチャーフィット、引継ぎまで多大",
  },
  {
    item: "退職リスク",
    luare: (
      <>
        ゼロ（離職無縁のAIエージェントと
        <br />
        安定した専門家体制）
      </>
    ),
    inhouse: "常に存在（突然の退職で業務停止）",
  },
  {
    item: "属人化",
    luare: "専門家伴走とAIエージェントによる完全標準化",
    inhouse: "特定担当者の頭の中にノウハウが偏在",
  },
  {
    item: "継続運営",
    luare: "安定稼働を保証（欠員による停止なし）",
    inhouse: "担当者の休暇・休職時に業務が停滞",
  },
  {
    item: "対応範囲",
    luare: "事業規模およびご要望に応じて支援範囲の調整可能",
    inhouse: "業務量に応じた細かな人員調整が困難",
  },
  {
    item: "総コスト",
    luare: (
      <>
        業務量に応じた、自社採用を圧倒する
        <br />
        コストパフォーマンス
      </>
    ),
    inhouse: "固定人件費 ＋ 採用費 ＋ 見えない退職コスト",
  },
];

export default function ComparisonMatrix({ activeTab }: ComparisonMatrixProps) {
  return (
    <section id="comparison" className="pt-4 md:pt-6 pb-16 sm:pb-24 md:pb-32 bg-brand-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* ── DOMESTIC COMPARISON ── */}
        {activeTab === "domestic" && (
          <div className="animate-in fade-in duration-500">
            <div className="max-w-2xl mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Why Us
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
                なぜ、自社で「採用」を増やす前に<br />仕組みを整えるべきなのか？
              </h2>
            </div>

            <div className="max-w-5xl md:max-w-[1000px] mx-auto overflow-x-auto mb-16">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr>
                    <th className="w-auto md:w-[35%] whitespace-nowrap py-5 pr-8 md:pr-0 text-left md:text-center align-bottom">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40">
                        比較項目
                      </span>
                    </th>
                    <th
                      className="w-1/2 md:w-[30%] px-4 md:px-6 py-5 text-left md:text-center align-bottom border-x-[1.5px] relative"
                      style={{ borderColor: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2.5px]" style={{ backgroundColor: '#C5A059' }} />
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] block mb-1.5" style={{ color: '#C5A059' }}>
                        Recommended
                      </span>
                      <span className="font-serif text-base font-bold text-brand-charcoal">
                        Luare Consulting
                      </span>
                    </th>
                    <th className="w-1/2 md:w-[35%] px-4 md:px-6 py-5 text-left md:text-center align-bottom border-b border-slate-100">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/35 block mb-1.5">
                        Traditional Option
                      </span>
                      <span className="font-serif text-sm font-medium text-brand-slate/50">
                        自社採用（インハウス）
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {domesticRows.map((row, idx) => (
                    <tr key={idx} className={`group transition-colors duration-150 hover:bg-slate-50/60 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                      <td className="py-5 pr-8 md:pr-0 align-middle border-t border-slate-100 whitespace-nowrap">
                        <div className="text-left md:text-center text-xs font-bold text-brand-charcoal/80 whitespace-normal leading-snug tracking-wide">
                          {row.item}
                        </div>
                      </td>
                      <td
                        className="px-4 md:px-6 py-5 align-middle border-t border-x-[1.5px]"
                        style={{ borderColor: '#C5A059', borderTopColor: 'rgba(197, 160, 89, 0.2)', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                      >
                        <div className="text-left md:text-center text-xs font-bold text-brand-charcoal leading-snug">
                          {row.luare}
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-5 align-middle border-t border-slate-100">
                        <div className="text-left md:text-center text-xs text-brand-slate/45 font-medium leading-snug">
                          {row.inhouse}
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-0 border-t border-slate-100" />
                    <td className="py-0 border-x-[1.5px]" style={{ borderColor: '#C5A059', borderTopColor: 'rgba(197, 160, 89, 0.2)', backgroundColor: 'rgba(197, 160, 89, 0.06)', height: '3px' }}>
                      <div className="w-full h-[2.5px]" style={{ backgroundColor: '#C5A059' }} />
                    </td>
                    <td className="py-0 border-t border-slate-100" />
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-12 max-w-3xl">
              <p className="text-base sm:text-lg leading-relaxed font-bold text-brand-navy">
                新しく人材を採用する場合、求人費・社保・退職リスク
                <br />
                といった「見えないコスト」が常に発生します。
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                Luare Consultingでは、業務量に応じた最適化設計で
                <br />
                これらのリスクとコストを根本から排除します。
              </p>
            </div>

            {/* ── Vertical Cost Reduction Chart ── */}
            <CostReductionChart />

            {/* ── Loop Diagram (from RationalChoice) ── */}
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
              
              {/* Left: Luare Flow */}
              <div className="flex-1 bg-white border border-brand-gold/30 rounded-2xl p-8 sm:p-12 shadow-md text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
                <h3 className="font-serif text-lg font-bold text-brand-navy mb-10 tracking-wide uppercase">
                  Luareの最適化アプローチ
                </h3>
                
                <div className="flex flex-col items-center gap-2">
                  {["業務棚卸", "標準化", "継続運営", "残業削減", "増員抑制", "継続運営"].map((item, idx, arr) => (
                    <div key={idx} className="flex flex-col items-center w-full">
                      <div className={`w-full max-w-[200px] py-3 px-6 border font-bold rounded shadow-sm text-sm tracking-widest ${idx >= 3 ? 'bg-brand-navy text-white border-brand-navy' : 'bg-brand-gold/10 text-brand-navy border-brand-gold/20'}`}>
                        {item}
                      </div>
                      {idx < arr.length - 1 && (
                        <div className={`h-6 w-[1px] my-1 flex items-center justify-center relative ${idx >= 2 ? 'bg-brand-navy/30' : 'bg-brand-gold/50'}`}>
                          <div className={`absolute bottom-0 w-2 h-2 border-r border-b rotate-45 translate-y-[3px] ${idx >= 2 ? 'border-brand-navy/30' : 'border-brand-gold/50'}`}></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Hiring Loop */}
              <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
                <h3 className="font-serif text-lg font-bold text-slate-400 mb-10 tracking-wide uppercase">
                  一般的な採用のループ
                </h3>
                
                <div className="flex flex-col items-center gap-2">
                  {["新規採用", "教 育", "引継ぎ", "属人化再発", "退職リスク", "再採用"].map((item, idx, arr) => (
                    <div key={idx} className="flex flex-col items-center w-full">
                      <div className="w-full max-w-[200px] py-3 px-6 bg-slate-50 border border-slate-200 text-slate-500 font-bold rounded shadow-sm text-sm tracking-widest">
                        {item}
                      </div>
                      {idx < arr.length - 1 && (
                        <div className="h-6 w-[1px] bg-slate-300 my-1 flex items-center justify-center relative">
                          <div className="absolute bottom-0 w-2 h-2 border-r border-b border-slate-300 rotate-45 translate-y-[3px]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── GLOBAL COMPARISON ── */}
        {activeTab === "global" && (
          <div className="animate-in fade-in duration-500">
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-0 leading-[1.4]">
                圧倒的なコストパフォーマンス
              </h2>
              <p className="mt-5 text-sm text-brand-slate/80 leading-relaxed max-w-xl">
                グローバル水準の専門性を、最適化されたコストで。
              </p>
              
              {/* Lead Statement */}
              <div className="mt-10 mb-2">
                <p className="text-[15px] sm:text-[17px] leading-[1.8] font-bold text-brand-navy">
                  Luare Consultingでは、経理財務特化型AIと専門家による支援体制を駆使することで、専門家の『確かな品質』と、自動化による『圧倒的なスピード』を、最適化された適正価格で提供します。
                </p>
              </div>
            </div>

            <div className="max-w-5xl md:max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr>
                    <th className="w-auto md:w-[22%] whitespace-nowrap py-5 pr-8 md:pr-0 text-left md:text-center align-bottom">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40">比較項目</span>
                    </th>
                    <th
                      className="w-1/3 md:w-[26%] px-4 md:px-6 py-5 text-left md:text-center align-bottom border-x-[1.5px] relative"
                      style={{ borderColor: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2.5px]" style={{ backgroundColor: '#C5A059' }} />
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] block mb-1.5" style={{ color: '#C5A059' }}>Recommended</span>
                      <span className="font-serif text-base font-bold text-brand-charcoal">Luare Consulting</span>
                    </th>
                    <th className="w-1/3 md:w-[26%] px-4 md:px-6 py-5 text-left md:text-center align-bottom border-b border-slate-100">
                      <span className="font-serif text-sm font-medium text-brand-slate/50">大手グローバルBPO</span>
                    </th>
                    <th className="w-1/3 md:w-[26%] px-4 md:px-6 py-5 text-left md:text-center align-bottom border-b border-slate-100">
                      <span className="font-serif text-sm font-medium text-brand-slate/50">自社採用（インハウス）</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {globalRows.map((row, idx) => (
                    <tr key={idx} className={`group transition-colors duration-150 hover:bg-slate-50/60 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                      <td className="py-5 pr-8 md:pr-0 align-middle border-t border-slate-100 whitespace-nowrap">
                        <div className="text-left md:text-center text-xs font-bold text-brand-charcoal/80 whitespace-normal leading-snug tracking-wide">
                          {row.item}
                        </div>
                      </td>
                      <td
                        className="px-4 md:px-6 py-5 align-middle border-t border-x-[1.5px]"
                        style={{ borderColor: '#C5A059', borderTopColor: 'rgba(197, 160, 89, 0.2)', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                      >
                        <div className="text-left md:text-center text-xs font-bold text-brand-charcoal leading-snug">
                          {row.luare}
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-5 align-middle border-t border-slate-100">
                        <div className="text-left md:text-center text-xs text-brand-slate/45 font-medium leading-snug">
                          {row.big4}
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-5 align-middle border-t border-slate-100">
                        <div className="text-left md:text-center text-xs text-brand-slate/45 font-medium leading-snug">
                          {row.inhouse}
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-0 border-t border-slate-100" />
                    <td className="py-0 border-x-[1.5px]" style={{ borderColor: '#C5A059', borderTopColor: 'rgba(197, 160, 89, 0.2)', backgroundColor: 'rgba(197, 160, 89, 0.06)', height: '3px' }}>
                      <div className="w-full h-[2.5px]" style={{ backgroundColor: '#C5A059' }} />
                    </td>
                    <td className="py-0 border-t border-slate-100" />
                    <td className="py-0 border-t border-slate-100" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
