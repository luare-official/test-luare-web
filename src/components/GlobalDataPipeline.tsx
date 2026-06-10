export default function GlobalDataPipeline() {
  return (
    <div className="bg-brand-white py-16 sm:py-24 animate-in fade-in duration-500 border-b border-slate-100">
      <div className="flex flex-col w-full max-w-6xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold mb-4 block">
            GLOBAL ACCOUNTING & FINANCE STRUCTURE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal">
            本社と在外現地法人をシームレスに繋ぐ経理・財務連携
          </h2>
        </div>

        {/* TOP TIER: HQ -> Pipeline -> Subsidiary */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch w-full">

          {/* LEFT: Headquarters */}
          <div className="flex flex-col items-center text-center px-6 sm:px-8 pt-8 pb-6 md:pt-10 md:pb-8 w-full md:w-[32%] shrink-0 bg-white rounded-2xl md:rounded-r-none shadow-xl border border-slate-200 md:border-r-0">
            <div className="mb-4 w-36 h-36 flex items-end justify-center">
              <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
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
                <rect x="48" y="106" width="12" height="18" fill="#1C2541" rx="0.5"/>
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
                <rect x="104" y="44" width="20" height="80" fill="#94A3B8" rx="1"/>
                <rect x="106" y="48" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                <rect x="113" y="48" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.6"/>
                <rect x="106" y="58" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                <rect x="113" y="58" width="5" height="6" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                <rect x="0" y="124" width="128" height="4" fill="#E2E8F0" rx="0"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">本社</h3>
            <span className="text-[11px] font-bold tracking-widest uppercase text-brand-slate/60 mb-3 block">
              Global HQ
            </span>
            <p className="text-sm text-brand-slate leading-relaxed font-medium max-w-xs">
              高度な経営数値を早期に可視化し、<br />
              タイムリーな経営判断を支援。<br />
              グローバル本社（HQ）の要求を満たす<br />
              レポート品質とガバナンス体制を<br />
              構築・提供します。
            </p>
          </div>

          {/* CENTER: Pipeline */}
          <div className="hidden md:flex flex-col items-center justify-center w-[36%] shrink-0 px-2">
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-center whitespace-nowrap" style={{ color: '#C5A059' }}>
                シームレスな経理財務情報連携<br/>(Seamless Financial Reporting)
              </span>
              <div className="relative w-full rounded-full border-[1.5px] overflow-hidden bg-transparent" style={{ borderColor: '#C5A059', padding: '14px 0' }}>
                <div className="absolute top-[28%] left-0 w-full h-[3px] overflow-hidden pointer-events-none">
                  <div className="beam-right h-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)' }} />
                  <div className="beam-right h-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)', animationDelay: '1.4s' }} />
                </div>
                <div className="absolute bottom-[28%] left-0 w-full h-[3px] overflow-hidden pointer-events-none">
                  <div className="beam-left h-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)' }} />
                  <div className="beam-left h-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)', animationDelay: '1.4s' }} />
                </div>
                <div className="relative z-10 flex items-center justify-center w-full px-5">
                  <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-r-[8px] border-t-transparent border-b-transparent border-r-[#C5A059] shrink-0" />
                  <div className="flex-1 h-[2px] bg-[#C5A059]" />
                  <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#C5A059] shrink-0" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col items-center justify-center py-6 w-full text-center">
            <span className="text-[9px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: '#C5A059' }}>
              シームレスな経理財務情報連携<br/>(Seamless Financial Reporting)
            </span>
            <div className="relative rounded-full border-[1.5px] overflow-hidden bg-transparent" style={{ borderColor: '#C5A059', width: '44px', height: '120px' }}>
              <div className="absolute left-[28%] top-0 w-[3px] h-full overflow-hidden pointer-events-none">
                <div className="beam-down w-full rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)' }} />
                <div className="beam-down w-full rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)', animationDelay: '1.4s' }} />
              </div>
              <div className="absolute right-[28%] top-0 w-[3px] h-full overflow-hidden pointer-events-none">
                <div className="beam-up w-full rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)' }} />
                <div className="beam-up w-full rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, #C5A059 40%, #C5A059 60%, transparent 100%)', animationDelay: '1.4s' }} />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full py-3">
                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#C5A059] shrink-0" />
                <div className="w-[2px] flex-1 bg-[#C5A059]" />
                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#C5A059] shrink-0" />
              </div>
            </div>
          </div>

          {/* RIGHT: Subsidiary */}
          <div className="flex flex-col items-center text-center px-6 sm:px-8 pt-8 pb-6 md:pt-10 md:pb-8 w-full md:w-[32%] shrink-0 bg-white rounded-2xl md:rounded-l-none shadow-xl border border-slate-200 md:border-l-0">
            <div className="mb-4 w-36 h-36 flex items-end justify-center">
              <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                <rect x="2" y="56" width="18" height="68" fill="#CBD5E1" rx="1"/>
                <rect x="4" y="60" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                <rect x="10" y="60" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                <rect x="4" y="70" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                <rect x="10" y="70" width="4" height="5" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                <rect x="24" y="24" width="64" height="100" fill="#1C2541" rx="2"/>
                <rect x="24" y="44" width="64" height="3" fill="#334155"/>
                <rect x="24" y="70" width="64" height="3" fill="#334155"/>
                <rect x="24" y="96" width="64" height="3" fill="#334155"/>
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
                <rect x="46" y="106" width="20" height="18" fill="#0B132B" rx="1"/>
                <rect x="55" y="108" width="2" height="16" fill="#334155"/>
                <rect x="94" y="44" width="22" height="80" fill="#94A3B8" rx="1"/>
                <rect x="96" y="49" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                <rect x="104" y="49" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.7"/>
                <rect x="96" y="61" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                <rect x="104" y="61" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.5"/>
                <rect x="96" y="73" width="6" height="7" fill="#F1F5F9" rx="0.5" opacity="0.4"/>
                <rect x="0" y="124" width="128" height="4" fill="#E2E8F0"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">在外現地法人</h3>
            <span className="text-[11px] font-bold tracking-widest uppercase text-brand-slate/60 mb-3 block">
              Subsidiary
            </span>
            <p className="text-sm text-brand-slate leading-relaxed font-medium max-w-xs">
              『日本独自の日常的な記帳・証憑管理』を<br />
              専門チームで完全に巻き取り、<br />
              迅速なデータ連携を実現します。
            </p>
          </div>
        </div>

        {/* BOTTOM TIER: Foundation Text */}
        <div className="mt-8 rounded-2xl px-8 md:px-16 py-10 flex flex-col items-center text-center border" style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', borderColor: 'rgba(197, 160, 89, 0.2)' }}>
          <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed max-w-2xl">
            Luare Consultingでは、現地法人とグローバル本社の間において、経理・財務情報と<br />
            ガバナンスを本社の要求水準に引き上げます。<br />
            迅速かつ精度の高いデータ連携を可能にする『透明かつ強固な<br />
            経理財務インフラ』として機能し、構築から日々の運用までを一気通貫で伴走します。
          </p>
        </div>
      </div>
    </div>
  );
}
