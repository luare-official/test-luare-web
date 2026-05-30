const rows = [
  {
    item: "年間コスト（決算申告込）",
    luare: "400万円",
    big4: "600万〜1,000万円以上",
    inhouse: "1,500万円前後（総人件費換算）",
  },
  {
    item: "バイリンガル対応",
    luare: "完全対応（標準ネイティブ）",
    big4: "対応（個別高額オプション）",
    inhouse: "属人的（市場での採用が極めて困難）",
  },
  {
    item: "システム構築",
    luare: "財務特化型AI × クラウド（OPEX化）",
    big4: "レガシーシステム（オンプレミス等）",
    inhouse: "ゼロからの自社構築",
  },
  {
    item: "柔軟性・リスク",
    luare: "極めて高い（ライトアセット運営）",
    big4: "官僚的・変更に時間がかかる",
    inhouse: "退職リスク大・固定費の硬直化",
  },
];

export default function ComparisonMatrix() {
  return (
    <section
      id="comparison"
      className="py-28 sm:py-36 bg-brand-white border-b border-slate-100"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">

        {/* Heading block */}
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
            Diagnostic Comparison
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
            大手ファームの品質を、最適化されたバリューで。
          </h2>
          <p className="mt-5 text-sm text-brand-slate/80 leading-relaxed max-w-xl">
            従来の直接雇用や大手ファーム依存における「高コスト・硬直化」の課題を解消。Luareはテクノロジーと高度人材を融合させた運営プロセスにより、圧倒的なコストパフォーマンスとガバナンスの両立を実現します。
          </p>
        </div>

        {/* ── TABLE ── */}
        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                {/* Item header — empty */}
                <th className="w-[22%] py-4 pr-6 text-left align-bottom">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40">
                    比較項目
                  </span>
                </th>

                {/* Luare — highlighted */}
                <th className="w-[26%] px-6 py-4 text-center align-bottom bg-brand-navy/[0.04] border-x border-brand-navy/10 rounded-t-sm">
                  <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-brand-navy/70 block mb-1">
                    Our Service
                  </span>
                  <span className="font-serif text-base font-bold text-brand-navy">
                    Luare
                  </span>
                </th>

                {/* Big 4 */}
                <th className="w-[26%] px-6 py-4 text-center align-bottom border-b border-slate-200">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40 block mb-1">
                    Alternative A
                  </span>
                  <span className="font-serif text-sm font-medium text-brand-slate/60">
                    Big 4 / 外資系BPO
                  </span>
                </th>

                {/* In-house */}
                <th className="w-[26%] px-6 py-4 text-center align-bottom border-b border-slate-200">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40 block mb-1">
                    Alternative B
                  </span>
                  <span className="font-serif text-sm font-medium text-brand-slate/60">
                    In-house（直接雇用）
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`group transition-colors duration-150 ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  {/* Item label */}
                  <td className="py-5 pr-6 align-middle border-t border-slate-100">
                    <span className="text-xs font-bold text-brand-charcoal/80 leading-snug">
                      {row.item}
                    </span>
                  </td>

                  {/* Luare — highlighted column */}
                  <td className="px-6 py-5 text-center align-middle border-t border-brand-navy/10 bg-brand-navy/[0.04] border-x border-brand-navy/10">
                    <span className="text-xs font-bold text-brand-navy leading-snug">
                      {row.luare}
                    </span>
                  </td>

                  {/* Big 4 */}
                  <td className="px-6 py-5 text-center align-middle border-t border-slate-100">
                    <span className="text-xs text-brand-slate/55 font-medium leading-snug">
                      {row.big4}
                    </span>
                  </td>

                  {/* In-house */}
                  <td className="px-6 py-5 text-center align-middle border-t border-slate-100">
                    <span className="text-xs text-brand-slate/55 font-medium leading-snug">
                      {row.inhouse}
                    </span>
                  </td>
                </tr>
              ))}

              {/* Bottom border of Luare column */}
              <tr>
                <td className="py-0 border-t border-slate-100" />
                <td className="py-0 border-t border-brand-navy/10 bg-brand-navy/[0.04] border-x border-brand-navy/10 rounded-b-sm" />
                <td className="py-0 border-t border-slate-100" />
                <td className="py-0 border-t border-slate-100" />
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-[10px] text-brand-slate/40 leading-relaxed">
          ※ 年間コストは中規模クロスボーダー企業（日本法人設立済、従業員50名以下）を想定した概算値です。個別の状況に応じて異なります。
        </p>

      </div>
    </section>
  );
}
