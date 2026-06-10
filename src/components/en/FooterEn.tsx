export default function FooterEn() {
  return (
    <footer id="contact" className="bg-brand-charcoal text-brand-silver border-t border-brand-darknavy/40 pt-12 md:pt-20 pb-8 md:pb-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Top Flex Container */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-16 border-b border-brand-silver/10">
          
          {/* Left Column: Company Brief */}
          <div className="max-w-md flex flex-col items-start">
            <span className="font-serif text-lg font-medium tracking-[0.2em] text-brand-platinum mb-6">
              Luare Consulting Co., Ltd.
            </span>
            <div className="text-xs text-brand-silver/80 leading-relaxed tracking-wider space-y-4">
              <p className="text-sm leading-relaxed text-slate-300">
                Luare Consulting provides high-end Accounting &amp; Finance BPO and compliance advisory services to domestic companies and foreign subsidiaries in Japan.
              </p>
              <p>
                By merging professional bilingual accounting expertise with advanced AI technology, we help build robust localized back-office structures that power sustainable business growth.
              </p>
            </div>
          </div>

          {/* Right Column: CONTACT */}
          <div className="w-full md:w-[320px] shrink-0">
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
              </li>
              <li>
                <span className="block text-[8px] font-semibold tracking-widest text-brand-silver/40 uppercase mb-1">Address</span>
                <p className="leading-relaxed tracking-wide">
                  Mutsumi Bldg. 3F,<br />
                  2-10-48 Kitasaiwai, Nishi-ku,<br />
                  Yokohama, Kanagawa 220-0004, Japan
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] tracking-widest text-brand-silver/40 font-mono">
            © 2026 Luare Consulting Co., Ltd. All Rights Reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
