const rows = [
  {
    item: "年間コスト（目安）",
    luare: "約400万円〜",
    big4: "600万〜1,000万円以上",
    inhouse: "1,500万円以上（採用・維持費込）",
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

export default function ComparisonMatrix() {
  return (
    <section
      id="comparison"
      className="py-28 sm:py-36 bg-brand-white border-b border-slate-100"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">

        {/* ── Section heading ── */}
        <div className="max-w-2xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
            The Value Vacuum
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
            圧倒的なコストパフォーマンス
          </h2>
          <p className="mt-5 text-sm text-brand-slate/80 leading-relaxed max-w-xl">
            Big 4水準の専門性を、最適化された適正コストで。
          </p>
        </div>

        {/* ── TABLE ── */}
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                {/* Column 1: 比較項目 */}
                <th className="w-[22%] py-5 pr-6 text-left align-bottom">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40">
                    比較項目
                  </span>
                </th>

                {/* Column 2: Luare — gold highlighted */}
                <th
                  className="w-[26%] px-6 py-5 text-center align-bottom border-x-[1.5px]"
                  style={{
                    borderColor: '#C5A059',
                    backgroundColor: 'rgba(197, 160, 89, 0.06)',
                  }}
                >
                  {/* Gold top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2.5px]"
                    style={{ backgroundColor: '#C5A059' }}
                  />
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.35em] block mb-1.5"
                    style={{ color: '#C5A059' }}
                  >
                    Recommended
                  </span>
                  <span className="font-serif text-base font-bold text-brand-charcoal">
                    Luare Consulting
                  </span>
                </th>

                {/* Column 3: Big 4 */}
                <th className="w-[26%] px-6 py-5 text-center align-bottom border-b border-slate-100">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/35 block mb-1.5">
                    Alternative A
                  </span>
                  <span className="font-serif text-sm font-medium text-brand-slate/50">
                    Big 4 / グローバルBPO
                  </span>
                </th>

                {/* Column 4: In-house */}
                <th className="w-[26%] px-6 py-5 text-center align-bottom border-b border-slate-100">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/35 block mb-1.5">
                    Alternative B
                  </span>
                  <span className="font-serif text-sm font-medium text-brand-slate/50">
                    自社採用（インハウス）
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`group transition-colors duration-150 hover:bg-slate-50/60 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
                  }`}
                >
                  {/* Item label */}
                  <td className="py-5 pr-6 align-middle border-t border-slate-100">
                    <span className="text-xs font-bold text-brand-charcoal/80 leading-snug tracking-wide">
                      {row.item}
                    </span>
                  </td>

                  {/* Luare — gold highlighted column */}
                  <td
                    className="px-6 py-5 text-center align-middle border-t border-x-[1.5px]"
                    style={{
                      borderColor: '#C5A059',
                      borderTopColor: 'rgba(197, 160, 89, 0.2)',
                      backgroundColor: 'rgba(197, 160, 89, 0.06)',
                    }}
                  >
                    <span className="text-xs font-bold text-brand-charcoal leading-snug">
                      {row.luare}
                    </span>
                  </td>

                  {/* Big 4 */}
                  <td className="px-6 py-5 text-center align-middle border-t border-slate-100">
                    <span className="text-xs text-brand-slate/45 font-medium leading-snug">
                      {row.big4}
                    </span>
                  </td>

                  {/* In-house */}
                  <td className="px-6 py-5 text-center align-middle border-t border-slate-100">
                    <span className="text-xs text-brand-slate/45 font-medium leading-snug">
                      {row.inhouse}
                    </span>
                  </td>
                </tr>
              ))}

              {/* Bottom border cap for Luare column */}
              <tr>
                <td className="py-0 border-t border-slate-100" />
                <td
                  className="py-0 border-x-[1.5px]"
                  style={{
                    borderColor: '#C5A059',
                    borderTopColor: 'rgba(197, 160, 89, 0.2)',
                    backgroundColor: 'rgba(197, 160, 89, 0.06)',
                    height: '3px',
                  }}
                >
                  {/* Gold bottom bar */}
                  <div
                    className="w-full h-[2.5px]"
                    style={{ backgroundColor: '#C5A059' }}
                  />
                </td>
                <td className="py-0 border-t border-slate-100" />
                <td className="py-0 border-t border-slate-100" />
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Footnote ── */}
        <p className="mt-8 text-[11px] text-brand-slate/45 leading-relaxed tracking-wide">
          ※Luareは最新の財務AIとPMO体制を駆使することで中間コストを排除し、専門家の『実務価値』のみをお客様に提供します。
        </p>

      </div>
    </section>
  );
}
