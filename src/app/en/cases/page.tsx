import type {Metadata} from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import styles from "@/components/cases/R5CaseLayout.module.css";
import {r5Cases} from "@/lib/r5Cases";
import {enCases} from "@/lib/enSite";
export const metadata:Metadata={title:"Case Studies | Luare Consulting",description:"Selected accounting, internal control, J-SOX and FP&A engagements.",alternates:{canonical:"https://luare-consulting.com/en/cases"}};
function CaseCard({id,index}:{id:string;index:string}){const c=enCases[id];return <Link href={"/en/cases/"+id} className={styles.card}><span className={styles.index}>{c.type}</span><p className={styles.industry}>{c.industry}</p><h3>{c.title}</h3><p className={styles.impact}>{c.impact}</p><span className={styles.arrowlink}>View case study →</span></Link>;}
export default function CasesEn(){return <><Navbar solid/><main className={styles.page+" flex-1 pt-20"} lang="en">
<div className={styles.hero}><div className={styles.shell}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/en">Home</Link><span>/</span><span>Case Studies</span></nav><p className={styles.eyebrow}>CASE STUDIES</p><h1>Case Studies</h1><p>Explore Luare Consulting's client engagements.</p></div></div>
<section className={styles.section}><div className={styles.shell}><header className={styles.sectionTop}><div><p className={styles.eyebrow}>PROJECTS</p><h2>Selected engagements</h2></div></header><div className={styles.grid2}>{r5Cases.map(c=><CaseCard key={c.id} id={c.id} index={c.index}/>)}</div></div></section>
<section className={styles.closing}><h2>Let's explore the right approach for your business.</h2><p>We will discuss your challenges, scope and timeline before recommending next steps.</p><Link href="/en/contact" className={styles.closingLink}>Contact us</Link></section>
</main><FooterEn/></>}