const globalRows = [
  {
    item: "Annual Cost (Est.)",
    luare: "Approx. JPY 4.0M~",
    big4: "JPY 6.0M - 10.0M+",
    inhouse: (
      <>
        Approx. JPY 15.0M
        <br />
        <span className="text-[10px]">
          (Bilingual Accounting Manager ~JPY 10M + Staff ~JPY 5M)
        </span>
      </>
    ),
  },
  {
    item: "Bilingual Communication",
    luare: "Native/Fluent level (Standard)",
    big4: "High additional billing option",
    inhouse: "Extremely difficult to recruit",
  },
  {
    item: "IT Infrastructure & DX",
    luare: "AI & Cloud-native (Cutting-edge)",
    big4: "Legacy ERP systems",
    inhouse: "Huge upfront IT infrastructure setup",
  },
  {
    item: "Agility & Scalability",
    luare: "Extremely high (On-demand scaling)",
    big4: "Slow approval flows & bureaucratic",
    inhouse: "High key-person dependency & turnover risks",
  },
];

export default function ComparisonMatrixEn() {
  return (
    <section id="comparison" className="pt-4 md:pt-6 pb-16 sm:pb-24 md:pb-32 bg-brand-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* ── GLOBAL COMPARISON ── */}
        <div className="animate-in fade-in duration-500">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60 mb-4 block">
              Why Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-charcoal mt-0 leading-[1.4]">
              Unparalleled Cost Performance &amp; Agility
            </h2>
            <p className="mt-5 text-sm text-brand-slate/80 leading-relaxed max-w-xl">
              Achieve global-standard compliance and expertise in Japan at optimized operating costs.
            </p>
            
            {/* Lead Statement */}
            <div className="mt-10 mb-2">
              <p className="text-[15px] sm:text-[17px] leading-[1.8] font-bold text-brand-navy">
                By combining accounting-specialized AI agents with experienced bilingual experts, Luare Consulting delivers Big 4 reporting quality and high-speed execution without the premium firm pricing.
              </p>
            </div>
          </div>

          <div className="max-w-5xl md:max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="w-auto md:w-[22%] whitespace-nowrap py-5 pr-8 md:pr-0 text-left md:text-center align-bottom">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/40">Comparison Items</span>
                  </th>
                  <th
                    className="w-1/3 md:w-[26%] px-4 md:px-6 py-5 text-left md:text-center align-bottom border-x-[1.5px] relative"
                    style={{ borderColor: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2.5px]" style={{ backgroundColor: '#C5A059' }} />
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] block mb-1.5" style={{ color: '#C5A059' }}>Recommended</span>
                    <span className="font-serif text-base font-bold text-brand-charcoal">Luare Consulting</span>
                  </th>
                  <th className="w-1/3 md:w-[26%] px-4 md:px-6 py-5 text-left md:text-center align-bottom border-b border-slate-100">
                    <span className="font-serif text-sm font-medium text-brand-slate/50">Global BPO Firm</span>
                  </th>
                  <th className="w-1/3 md:w-[26%] px-4 md:px-6 py-5 text-left md:text-center align-bottom border-b border-slate-100">
                    <span className="font-serif text-sm font-medium text-brand-slate/50">In-house Hiring</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {globalRows.map((row, idx) => (
                  <tr key={idx} className={`group transition-colors duration-150 hover:bg-slate-50/60 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                    <td className="py-5 pr-8 md:pr-0 align-middle border-t border-slate-100 whitespace-nowrap">
                      <div className="text-left md:text-center text-xs font-bold text-brand-charcoal/80 whitespace-normal leading-snug tracking-wide">
                        {row.item}
                      </div>
                    </td>
                    <td
                      className="px-4 md:px-6 py-5 align-middle border-t border-x-[1.5px]"
                      style={{ borderColor: '#C5A059', borderTopColor: 'rgba(197, 160, 89, 0.2)', backgroundColor: 'rgba(197, 160, 89, 0.06)' }}
                    >
                      <div className="text-left md:text-center text-xs font-bold text-brand-charcoal leading-snug">
                        {row.luare}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-5 align-middle border-t border-slate-100">
                      <div className="text-left md:text-center text-xs text-brand-slate/45 font-medium leading-snug">
                        {row.big4}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-5 align-middle border-t border-slate-100">
                      <div className="text-left md:text-center text-xs text-brand-slate/45 font-medium leading-snug">
                        {row.inhouse}
                      </div>
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
        </div>

      </div>
    </section>
  );
}
