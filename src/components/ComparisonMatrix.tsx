import type { TabType } from "./SolutionExperience";

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
        <span className="text-[10px]">（バイリンガルFM約1,000万円＋事務員約500万円）</span>
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
    inhouse: "属人的（退職による崩壊リスク有）",
  },
];

const domesticRows = [
  {
    item: "採用期間",
    luare: "最短1週間で稼働開始",
    inhouse: "3〜6ヶ月以上（見つからないリスク）",
  },
  {
    item: "退職リスク",
    luare: "ゼロ（当社内で安定的にチーム運営）",
    inhouse: "常に存在（突然の退職で業務停止）",
  },
  {
    item: "属人化",
    luare: "チーム体制とAIによる完全標準化",
    inhouse: "特定担当者の頭の中にノウハウが偏在",
  },
  {
    item: "教育コスト",
    luare: "不要（即戦力のプロフェッショナル）",
    inhouse: "実務指導からカルチャーフィットまで多大",
  },
  {
    item: "継続運営",
    luare: "安定稼働を保証（欠員による停止なし）",
    inhouse: "担当者の休暇・休職時に業務が停滞",
  },
  {
    item: "柔軟性",
    luare: "事業フェーズに応じてリソースを増減可能",
    inhouse: "業務量に応じた細かな人員調整が困難",
  },
];

export default function ComparisonMatrix({ activeTab }: ComparisonMatrixProps) {
  return (
    <section id="comparison" className="py-24 sm:py-32 bg-brand-white border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">

        {/* ── DOMESTIC COMPARISON ── */}
        {activeTab === "domestic" && (
          <div className="animate-in fade-in duration-500">
            <div className="max-w-2xl mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                Why Us
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
                なぜ経理チーム代行なのか
              </h2>
              <p className="mt-5 text-sm text-brand-slate/80 leading-relaxed max-w-xl">
                自社での採用・育成と比較し、圧倒的なスピードと安定性を提供します。
              </p>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr>
                    <th className="w-[30%] py-5 pr-6 text-left align-bottom">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40">
                        比較項目
                      </span>
                    </th>
                    <th
                      className="w-[35%] px-6 py-5 text-center align-bottom border-x-[1.5px]"
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
                    <th className="w-[35%] px-6 py-5 text-center align-bottom border-b border-slate-100">
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
                      <td className="py-5 pr-6 align-middle border-t border-slate-100">
                        <span className="text-xs font-bold text-brand-charcoal/80 leading-snug tracking-wide">{row.item}</span>
                      </td>
                      <td
                        className="px-6 py-5 text-center align-middle border-t border-x-[1.5px]"
                        style={{ borderColor: '#C5A059', borderTopColor: 'rgba(197, 160, 89, 0.2)', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                      >
                        <span className="text-xs font-bold text-brand-charcoal leading-snug">{row.luare}</span>
                      </td>
                      <td className="px-6 py-5 text-center align-middle border-t border-slate-100">
                        <span className="text-xs text-brand-slate/45 font-medium leading-snug">{row.inhouse}</span>
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

            {/* ── Cost Performance Visual ── */}
            <div className="mt-12 p-8 sm:p-10 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-[45%]">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal mb-4 leading-snug">
                  必要な業務だけを、<br />必要な分だけ。
                </h3>
                <p className="text-sm text-brand-slate leading-relaxed font-medium">
                  採用・教育・退職リスクを含めた<br />
                  <span className="text-brand-navy font-bold">総コスト最適化</span>を支援します。
                </p>
              </div>
              <div className="w-full md:w-[55%] flex flex-col gap-6">
                {/* Traditional In-house */}
                <div>
                  <div className="flex justify-between text-[11px] sm:text-xs font-bold text-brand-slate mb-2 uppercase tracking-wide">
                    <span>自社採用（インハウス）の総コスト</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-10 bg-slate-100 rounded-sm overflow-hidden flex shadow-inner">
                    <div className="h-full bg-slate-300/80 w-[40%] border-r border-white/40 flex items-center justify-center">
                      <span className="text-[10px] text-brand-slate/80 font-bold whitespace-nowrap px-2">採用・教育コスト</span>
                    </div>
                    <div className="h-full bg-slate-400 w-[60%] flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold whitespace-nowrap px-2">見えない退職リスク + 人件費</span>
                    </div>
                  </div>
                </div>
                {/* Luare */}
                <div>
                  <div className="flex justify-between text-[11px] sm:text-xs font-bold text-brand-charcoal mb-2 uppercase tracking-wide">
                    <span>Luare 経理チーム代行</span>
                    <span className="text-brand-gold font-bold">最大約50%最適化</span>
                  </div>
                  <div className="w-full h-10 bg-slate-100 rounded-sm overflow-hidden flex shadow-inner">
                    <div className="h-full bg-brand-navy w-[50%] flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <span className="text-[10px] text-white font-bold whitespace-nowrap px-2">プロフェッショナルの実務価値のみ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── GLOBAL COMPARISON ── */}
        {activeTab === "global" && (
          <div className="animate-in fade-in duration-500">
            <div className="max-w-2xl mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                The Value Vacuum
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
                圧倒的なコストパフォーマンス
              </h2>
              <p className="mt-5 text-sm text-brand-slate/80 leading-relaxed max-w-xl">
                グローバル水準の専門性を、最適化されたコストで。
              </p>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr>
                    <th className="w-[22%] py-5 pr-6 text-left align-bottom">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40">比較項目</span>
                    </th>
                    <th
                      className="w-[26%] px-6 py-5 text-center align-bottom border-x-[1.5px]"
                      style={{ borderColor: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2.5px]" style={{ backgroundColor: '#C5A059' }} />
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] block mb-1.5" style={{ color: '#C5A059' }}>Recommended</span>
                      <span className="font-serif text-base font-bold text-brand-charcoal">Luare Consulting</span>
                    </th>
                    <th className="w-[26%] px-6 py-5 text-center align-bottom border-b border-slate-100">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/35 block mb-1.5">Alternative A</span>
                      <span className="font-serif text-sm font-medium text-brand-slate/50">大手グローバルBPO</span>
                    </th>
                    <th className="w-[26%] px-6 py-5 text-center align-bottom border-b border-slate-100">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/35 block mb-1.5">Alternative B</span>
                      <span className="font-serif text-sm font-medium text-brand-slate/50">自社採用（インハウス）</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {globalRows.map((row, idx) => (
                    <tr key={idx} className={`group transition-colors duration-150 hover:bg-slate-50/60 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                      <td className="py-5 pr-6 align-middle border-t border-slate-100">
                        <span className="text-xs font-bold text-brand-charcoal/80 leading-snug tracking-wide">{row.item}</span>
                      </td>
                      <td
                        className="px-6 py-5 text-center align-middle border-t border-x-[1.5px]"
                        style={{ borderColor: '#C5A059', borderTopColor: 'rgba(197, 160, 89, 0.2)', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                      >
                        <span className="text-xs font-bold text-brand-charcoal leading-snug">{row.luare}</span>
                      </td>
                      <td className="px-6 py-5 text-center align-middle border-t border-slate-100">
                        <span className="text-xs text-brand-slate/45 font-medium leading-snug">{row.big4}</span>
                      </td>
                      <td className="px-6 py-5 text-center align-middle border-t border-slate-100">
                        <span className="text-xs text-brand-slate/45 font-medium leading-snug">{row.inhouse}</span>
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
            <p className="mt-8 text-[11px] text-brand-slate/45 leading-relaxed tracking-wide">
              ※Luareは最新の財務AIとPMO体制を駆使することで中間コストを排除し、専門家の『実務価値』のみをお客様に提供します。
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
