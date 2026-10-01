import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function HomeContact() {
  return (
    <section className="luare-section bg-white" id="contact-home">
      <div className="luare-container">
        <ScrollReveal>
          <div className="luare-contact-panel">
            <div>
              <p className="luare-eyebrow">contact</p>
              <h2 className="luare-h2">
                まずは、現在のFinance体制を
                <br />
                お聞かせください。
              </h2>
              <p className="luare-intro">
                経理・財務の課題、海外HQ対応、BPOの相談など、現在の状況から一緒に整理します。
              </p>
            </div>
            <div>
              <Link href="/contact" className="luare-pill-button">
                お問い合わせ <span>→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
