const tableRows = [
  {
    global: "海外への財務報告 (IFRS / US-GAAP)",
    luare: "月次決算コンバージョン (基準変換)",
    japan: "日本国内の会社法・税法への準拠",
  },
  {
    global: "グローバルな内部統制・ガバナンス",
    luare: "確かな品質統制 (AI × Expert Review)",
    japan: "確実なローカルコンプライアンス (税務申告)",
  },
  {
    global: "現地のリアルタイムな状況把握",
    luare: "財務BPO・データの一元化",
    japan: "日常の国内オペレーション (ベンダー決済等)",
  },
];

export default function ConceptDiagram() {
  return (
    <section id="concept" className="py-28 sm:py-36 bg-brand-white border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">

        {/* Section label + heading */}
        <div className="max-w-2xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
            Concept
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-4 leading-[1.4]">
            クロスボーダー財務の複雑な要件を、シンプルに。
          </h2>
        </div>

        {/* ── DIAGRAM: 2-Tier Block Structure ── */}
        <div className="flex flex-col w-full max-w-5xl mx-auto mb-20 md:mb-28 rounded-2xl overflow-hidden shadow-xl border border-slate-200">

          {/* ── TOP TIER: 2 Location Cards + Arrow ── */}
          <div className="flex flex-col md:flex-row items-stretch bg-white">

            {/* LEFT CARD: Headquarters */}
            <div className="flex flex-col items-center text-center px-8 py-12 md:py-14 w-full flex-1 border-b md:border-b-0 md:border-r border-slate-100">

              {/* Large Headquarters SVG Illustration */}
              <div className="mb-8 w-32 h-32 flex items-end justify-center">
                <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  {/* Left tower */}
                  <rect x="4" y="28" width="26" height="96" fill="#1C2541" rx="1"/>
                  <rect x="6" y="32" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                  <rect x="13" y="32" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                  <rect x="20" y="32" width="7" height="7" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                  <rect x="6" y="44" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                  <rect x="13" y="44" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                  <rect x="20" y="44" width="7" height="7" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                  <rect x="6" y="56" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="13" y="56" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="20" y="56" width="7" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="6" y="68" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="13" y="68" width="5" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  {/* Center main tower */}
                  <rect x="36" y="4" width="36" height="120" fill="#0B132B" rx="1"/>
                  <rect x="46" y="0" width="16" height="8" fill="#0B132B" rx="1"/>
                  <rect x="52" y="-2" width="4" height="6" fill="#334155" rx="0.5"/>
                  <rect x="39" y="10" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                  <rect x="50" y="10" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                  <rect x="61" y="10" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                  <rect x="39" y="25" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="50" y="25" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="61" y="25" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="39" y="40" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="50" y="40" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="61" y="40" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="39" y="55" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="50" y="55" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="61" y="55" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="39" y="70" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.3"/>
                  <rect x="50" y="70" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.3"/>
                  <rect x="61" y="70" width="8" height="10" fill="#F1F5F9" rx="0.5" opacity="0.3"/>
                  {/* Entrance */}
                  <rect x="48" y="106" width="12" height="18" fill="#1C2541" rx="0.5"/>
                  {/* Right tower */}
                  <rect x="78" y="20" width="24" height="104" fill="#334155" rx="1"/>
                  <rect x="80" y="25" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                  <rect x="88" y="25" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                  <rect x="96" y="25" width="4" height="8" fill="#F1F5F9" rx="0.5" opacity="0.8"/>
                  <rect x="80" y="38" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                  <rect x="88" y="38" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                  <rect x="96" y="38" width="4" height="8" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                  <rect x="80" y="51" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="88" y="51" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  <rect x="80" y="64" width="6" height="8" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  {/* Far right small building */}
                  <rect x="104" y="44" width="20" height="80" fill="#94A3B8" rx="1"/>
                  <rect x="106" y="48" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                  <rect x="113" y="48" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                  <rect x="106" y="58" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="113" y="58" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  {/* Ground line */}
                  <rect x="0" y="124" width="128" height="4" fill="#E2E8F0" rx="0"/>
                </svg>
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">Headquarters</h3>
              <span className="text-[11px] font-normal tracking-wider text-brand-slate/60 mb-5 block">
                グローバル本社：日本または海外
              </span>
              <p className="text-sm text-brand-slate leading-relaxed font-medium max-w-xs">
                IFRS/US-GAAP準拠。海外・国内からのガバナンス要求を満たし、リアルタイムな経営状況の把握を実現。
              </p>
            </div>

            {/* CONNECTOR: Huge bidirectional arrow */}
            <div className="hidden md:flex flex-col items-center justify-center px-4 shrink-0 bg-white">
              <div className="relative flex items-center justify-center w-24">
                {/* Thick line */}
                <div className="w-full h-[4px] bg-brand-navy/70 rounded-full" />
                {/* Arrowhead Right */}
                <div className="absolute -right-3 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-brand-navy/70" />
                {/* Arrowhead Left */}
                <div className="absolute -left-3 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[16px] border-t-transparent border-b-transparent border-r-brand-navy/70" />
              </div>
              <span className="mt-3 text-[9px] font-bold uppercase tracking-[0.3em] text-brand-navy/40">Bilateral</span>
            </div>
            {/* Mobile connector */}
            <div className="flex md:hidden items-center justify-center py-4 bg-white">
              <div className="relative flex flex-col items-center justify-center h-16">
                <div className="h-full w-[4px] bg-brand-navy/70 rounded-full" />
                <div className="absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-brand-navy/70" />
                <div className="absolute -top-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-brand-navy/70" />
              </div>
            </div>

            {/* RIGHT CARD: Subsidiary */}
            <div className="flex flex-col items-center text-center px-8 py-12 md:py-14 w-full flex-1 border-t md:border-t-0 md:border-l border-slate-100">

              {/* Subsidiary SVG Illustration */}
              <div className="mb-8 w-32 h-32 flex items-end justify-center">
                <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  {/* Background small building left */}
                  <rect x="2" y="56" width="18" height="68" fill="#CBD5E1" rx="1"/>
                  <rect x="4" y="60" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="10" y="60" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="4" y="70" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="10" y="70" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  {/* Main office building - center */}
                  <rect x="24" y="24" width="64" height="100" fill="#1C2541" rx="2"/>
                  {/* Horizontal band accent */}
                  <rect x="24" y="44" width="64" height="3" fill="#334155"/>
                  <rect x="24" y="70" width="64" height="3" fill="#334155"/>
                  <rect x="24" y="96" width="64" height="3" fill="#334155"/>
                  {/* Windows grid */}
                  <rect x="30" y="30" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                  <rect x="44" y="30" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                  <rect x="58" y="30" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                  <rect x="72" y="30" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.9"/>
                  <rect x="30" y="50" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="44" y="50" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="58" y="50" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="72" y="50" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="30" y="76" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="44" y="76" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="58" y="76" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="72" y="76" width="10" height="10" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  {/* Entrance */}
                  <rect x="46" y="106" width="20" height="18" fill="#0B132B" rx="1"/>
                  <rect x="55" y="108" width="2" height="16" fill="#334155"/>
                  {/* Right background building */}
                  <rect x="94" y="44" width="22" height="80" fill="#94A3B8" rx="1"/>
                  <rect x="96" y="49" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="104" y="49" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                  <rect x="96" y="61" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="104" y="61" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                  <rect x="96" y="73" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                  {/* Ground */}
                  <rect x="0" y="124" width="128" height="4" fill="#E2E8F0"/>
                </svg>
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">Subsidiary</h3>
              <span className="text-[11px] font-normal tracking-wider text-brand-slate/60 mb-5 block">
                現地子会社：日本または海外
              </span>
              <p className="text-sm text-brand-slate leading-relaxed font-medium max-w-xs">
                進出先の会社法・税法への確実な準拠。ローカル取引における100%のコンプライアンスを両立。
              </p>
            </div>
          </div>

          {/* ── BOTTOM TIER: Luare Foundation Block ── */}
          <div className="bg-slate-900 px-8 md:px-16 py-10 md:py-12 flex flex-col items-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">
              Luare 統合財務インフラストラクチャ
            </span>
            <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed max-w-2xl">
              Luareは両拠点の間に介入するのではなく、データ・ガバナンスを裏側から一元化し、ブラックボックスを排除する『透明かつ強固な財務インフラ』として機能します。
            </p>
          </div>

        </div>

        {/* ── OPERATIONS TABLE ── */}
        <div className="border-t border-slate-100 pt-12">

          {/* Table header */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 mb-5 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 leading-tight">
                海外本社の要求
              </span>
            </div>
            <div className="text-center">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-navy/70 leading-tight">
                Luareの統合・調整
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 leading-tight">
                日本拠点の要件
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-50">
            {tableRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 gap-6 md:gap-10 py-4 group hover:bg-slate-50/70 transition-colors duration-200 -mx-4 px-4 rounded-sm"
              >
                {/* Global column */}
                <div className="flex items-center">
                  <p className="text-[11px] text-brand-slate/75 font-medium leading-relaxed">
                    {row.global}
                  </p>
                </div>

                {/* Luare column — center */}
                <div className="flex items-center justify-center relative gap-2">
                  <div className="hidden md:block w-0 h-0 border-t-[3px] border-b-[3px] border-r-[5px] border-t-transparent border-b-transparent border-r-slate-300" />
                  <p className="text-[11px] font-bold text-brand-navy/80 leading-relaxed text-center">
                    {row.luare}
                  </p>
                  <div className="hidden md:block w-0 h-0 border-t-[3px] border-b-[3px] border-l-[5px] border-t-transparent border-b-transparent border-l-slate-300" />
                </div>

                {/* Japan column */}
                <div className="flex items-center justify-end">
                  <p className="text-[11px] text-brand-slate/75 font-medium leading-relaxed text-right">
                    {row.japan}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
