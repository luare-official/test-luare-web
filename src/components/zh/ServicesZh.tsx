export default function ServicesZh() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-32 bg-brand-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mt-4 mb-6">
            進出から自走まで、フェーズ別のアプローチ
          </h2>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Phase 1 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="bg-brand-navy text-white text-xl font-serif font-bold w-12 h-12 flex items-center justify-center rounded-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">
                Phase 1: 進出と設立
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-brand-gold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-brand-slate text-lg">市場参入戦略の立案</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-brand-gold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-brand-slate text-lg">法人設立・口座開設サポート</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-brand-gold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-brand-slate text-lg">初期の財務・税務インフラ構築</span>
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="bg-brand-navy text-white text-xl font-serif font-bold w-12 h-12 flex items-center justify-center rounded-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">
                Phase 2: 運営とガバナンス
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-brand-gold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-brand-slate text-lg">Total BPOによる全業務の丸投げ対応</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-brand-gold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-brand-slate text-lg">vCFO（仮想CFO）による戦略的支援</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-brand-gold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-brand-slate text-lg">J-SOXなど内部統制の構築と運用サポート</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
