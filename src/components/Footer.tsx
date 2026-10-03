import Link from "next/link";

export default function Footer() {
  return (
    <footer className="luare-footer">
      <div className="luare-container">
        <div className="luare-footer-main">
          <div>
            <Link href="/" className="luare-footer-logo">
              Luare Consulting
              <small>ACCOUNTING &amp; FINANCE</small>
            </Link>
            <p className="luare-footer-desc">
              外資系・グローバル企業を中心に、会計・財務、監査・税務、
              M&amp;A・Valuation、Global Reportingなどの専門課題を支援します。
            </p>
          </div>
          <nav className="luare-footer-links" aria-label="Footer navigation">
            <Link href="/#services">Services</Link>
            <Link href="/services/audit-assurance">Audit Support</Link>
            <Link href="/bpo">Luare BPO</Link>
            <Link href="/#people">People</Link>
            <Link href="/#case-studies">Case Studies</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="luare-footer-copy">© 2026 Luare Consulting</div>
      </div>
    </footer>
  );
}
