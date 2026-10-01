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
              国内企業および外資系・グローバル企業に対し、Accounting &amp; Finance領域の
              コンサルティング、Finance Operations設計、経理BPOを提供しています。
            </p>
          </div>

          <nav className="luare-footer-links" aria-label="Footer navigation">
            <Link href="/#services">Services</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/en">English</Link>
            <Link href="/zh">中文</Link>
          </nav>
        </div>

        <div className="luare-footer-copy">
          © 2026 Luare Consulting
        </div>
      </div>
    </footer>
  );
}
