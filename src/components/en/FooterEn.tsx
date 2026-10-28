import Link from "next/link";

export default function FooterEn(){
 return <footer className="luare-footer">
  <div className="luare-container">
   <div className="luare-footer-main">
    <div>
     <Link href="/en" className="luare-footer-logo">Luare Consulting<small>ACCOUNTING &amp; FINANCE</small></Link>
     <p className="luare-footer-desc">Supporting foreign-owned and global businesses in Japan with accounting, financial management, internal control, cross-border reporting and audit coordination.</p>
    </div>
    <nav className="luare-footer-links" aria-label="English footer navigation">
     <Link href="/en">Home</Link>
     <Link href="/en/services">Services</Link>
     <Link href="/en/cases">Case studies</Link>
     <Link href="/en/insights">Insights</Link>
     <Link href="/en/pricing">Pricing</Link>
     <Link href="/en/about">Representative</Link>
     <Link href="/en/contact">Contact</Link>
     <Link href="/privacy">Privacy policy (JP / EN / ZH)</Link>
    </nav>
   </div>
   <div className="luare-footer-copy">© 2026 Luare Consulting</div>
  </div>
 </footer>;
}
