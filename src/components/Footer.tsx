export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-charcoal text-brand-silver border-t border-brand-darknavy/40 pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-brand-silver/10">
          
          {/* Company Brief */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-serif text-2xl font-medium tracking-[0.25em] text-brand-platinum mb-6">
              LUARE
            </span>
            <p className="text-xs text-brand-silver/80 leading-relaxed tracking-wider mb-6 max-w-sm">
              Luare（ルアーレ）は、中国・アジア企業の日本進出、および日本企業の海外展開に特化したハイエンド財務コンサルティング＆BPOファームです。AIとプロフェッショナルの力でグローバルガバナンスを構築します。
            </p>
            <span className="text-[10px] text-brand-silver/50 tracking-widest font-mono">
              Luare Consulting Group © 2026
            </span>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-platinum mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <a href="#services" className="hover:text-brand-platinum transition-colors tracking-wide">
                  日本進出・会社設立支援
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-platinum transition-colors tracking-wide">
                  経理BPO・内部統制構築
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-platinum transition-colors tracking-wide">
                  グローバル財務フルアウトソーシング
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-platinum mb-6">
              Resources
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <a href="#insights" className="hover:text-brand-platinum transition-colors tracking-wide">
                  Insights (ブログ)
                </a>
              </li>
              <li>
                <a href="#concept" className="hover:text-brand-platinum transition-colors tracking-wide">
                  Concept (概念図)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-platinum transition-colors tracking-wide">
                  会社概要 (Company)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-platinum mb-6">
              Office Location
            </h4>
            <p className="text-xs text-brand-silver/80 leading-relaxed tracking-wider mb-2">
              東京都港区虎ノ門 1-17-1<br />
              虎ノ門ヒルズビジネスタワー
            </p>
            <p className="text-xs text-brand-silver/60 tracking-wider">
              contact@luare-consulting.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-6 text-[10px] tracking-wider text-brand-silver/50">
            <a href="#" className="hover:text-brand-platinum transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-platinum transition-colors">Terms of Service</a>
          </div>
          <span className="text-[10px] tracking-widest text-brand-silver/40 font-mono">
            Designed by Luare UI/UX Lab
          </span>
        </div>

      </div>
    </footer>
  );
}
