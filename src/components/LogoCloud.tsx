export default function LogoCloud() {
  return (
    <section className="py-10 md:py-16 border-b border-brand-silver/10 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity duration-500">
          
          {/* Logo 1 - Globex */}
          <div className="flex items-center gap-2 text-brand-slate grayscale">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span className="font-serif text-sm tracking-[0.2em] font-bold">GLOBEX</span>
          </div>

          {/* Logo 2 - Acme */}
          <div className="flex items-center gap-2 text-brand-slate grayscale">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 22h20L12 2z" />
              <path d="M12 8l-6 10h12l-6-10z" />
            </svg>
            <span className="font-serif text-sm tracking-[0.2em] font-bold">ACME</span>
          </div>

          {/* Logo 3 - Initech */}
          <div className="flex items-center gap-2 text-brand-slate grayscale">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" />
              <path d="M12 6.5v11" />
            </svg>
            <span className="font-serif text-sm tracking-[0.2em] font-bold">INITECH</span>
          </div>

          {/* Logo 4 - Apex */}
          <div className="flex items-center gap-2 text-brand-slate grayscale">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 21h18M6 21V10l6-6 6 6v11M10 21V14h4v7" />
            </svg>
            <span className="font-serif text-sm tracking-[0.2em] font-bold">APEX</span>
          </div>

          {/* Logo 5 - Vandelay */}
          <div className="flex items-center gap-2 text-brand-slate grayscale col-span-2 md:col-span-1">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4.5 16.5c1.5-3 5.5-3 7 0s5.5 3 7 0M4.5 7.5c1.5 3 5.5 3 7 0s5.5-3 7 0" />
            </svg>
            <span className="font-serif text-sm tracking-[0.2em] font-bold">VANDELAY</span>
          </div>

        </div>
      </div>
    </section>
  );
}

