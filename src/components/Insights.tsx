export default function Insights() {
  const articles = [
    {
      category: "Cross-Border Tax",
      date: "May 20, 2026",
      title: "中国企業の日本進出における初期税務と各種ライセンス手続きの完全ガイド",
      desc: "日本市場への進出期に直面する、税務上のPE（恒久的施設）認定リスクや初期届出のポイントを専門的見地から解説。"
    },
    {
      category: "Internal Control",
      date: "April 15, 2026",
      title: "J-SOX対応とIT全般統制（ITGC）のベストプラクティス：グローバル財務目線での考察",
      desc: "海外親会社と日本法人間のシステム統合における、適切なセキュリティ管理と監査対応のための具体的なアプローチ。"
    },
    {
      category: "Legal Update",
      date: "March 11, 2026",
      title: "令和8年度税制改正が日系多国籍企業の海外バックオフィスに与える影響",
      desc: "移転価格税制の改正や電子帳簿保存法の解釈アップデートなど、クロスボーダー企業が急ぎ対処すべき実務変更点について。"
    }
  ];

  return (
    <section id="insights" className="py-24 sm:py-32 bg-brand-white border-b border-brand-silver/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-slate">
              Publications
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-charcoal mt-4">
              Insights
            </h2>
          </div>
          <a
            href="#all-insights"
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-charcoal hover:text-brand-navy transition-colors border-b border-brand-charcoal/30 hover:border-brand-navy pb-1 self-start md:self-auto"
          >
            View All Reports
          </a>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <a
              key={idx}
              href={`#article-${idx}`}
              className="flex flex-col border border-brand-silver/20 bg-brand-offwhite p-8 hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Category & Date */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono tracking-wider text-brand-navy font-semibold border border-brand-navy/20 px-2 py-0.5">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-brand-slate/70">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-brand-charcoal tracking-wide leading-relaxed mb-4 group-hover:text-brand-navy transition-colors">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-xs text-brand-slate leading-relaxed tracking-wider mb-8">
                {item.desc}
              </p>

              {/* Arrow link decoration (Minimalist) */}
              <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-brand-navy group-hover:gap-3 transition-all duration-300 border-t border-brand-silver/20">
                <span>READ REPORT</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

