export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-charcoal text-brand-silver border-t border-brand-darknavy/40 pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-brand-silver/10">
          
          {/* Left Column: Company Brief */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-serif text-lg font-medium tracking-[0.2em] text-brand-platinum mb-6">
              株式会社Luare Consulting
            </span>
            <div className="text-xs text-brand-silver/80 leading-relaxed tracking-wider space-y-4 max-w-md">
              <p>
                Luare Consultingは、国内企業および外資系企業に対し、Finance BPO・財務オペレーション構築・内部統制支援を提供しています。
              </p>
              <p>
                AIと財務専門家の知見を融合し、企業の持続的な成長を支える強固な財務基盤の構築を支援します。
              </p>
            </div>
          </div>

          {/* Center Column: Services & Links */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-platinum mb-6">
                Services
              </h4>
              <ul className="space-y-4 text-xs text-brand-silver/80">
                <li className="tracking-wide">
                  Finance Setup
                </li>
                <li className="tracking-wide">
                  Finance Operations
                </li>
                <li className="tracking-wide">
                  Governance & Internal Control
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-platinum mb-6">
                Links
              </h4>
              <ul className="space-y-4 text-xs">
                <li>
                  <a href="/insights" className="hover:text-brand-platinum transition-colors tracking-wide text-brand-silver/80">
                    Insights (ブログ)
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-brand-platinum transition-colors tracking-wide text-brand-silver/80">
                    会社概要 (About Us)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: CONTACT */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-platinum mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-xs text-brand-silver/80">
              <li>
                <span className="block text-[8px] font-semibold tracking-widest text-brand-silver/40 uppercase mb-1">URL</span>
                <a href="https://luare-consulting.com" className="hover:text-brand-platinum transition-colors tracking-wide">
                  luare-consulting.com
                </a>
              </li>
              <li>
                <span className="block text-[8px] font-semibold tracking-widest text-brand-silver/40 uppercase mb-1">Mail</span>
                <a href="mailto:Y.Lu@Luare-Consulting.com" className="hover:text-brand-platinum transition-colors tracking-wide block">
                  Y.Lu@Luare-Consulting.com
                </a>
                <a href="mailto:contact@luare-consulting.com" className="hover:text-brand-platinum transition-colors tracking-wide block mt-1">
                  contact@luare-consulting.com
                </a>
              </li>
              <li>
                <span className="block text-[8px] font-semibold tracking-widest text-brand-silver/40 uppercase mb-1">Address</span>
                <p className="leading-relaxed tracking-wide">
                  〒220-0004<br />
                  神奈川県横浜市西区北幸二丁目10番48号<br />
                  むつみビル3階
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] tracking-widest text-brand-silver/40 font-mono">
            © 2026 Luare Consulting
          </span>
        </div>

      </div>
    </footer>
  );
}
