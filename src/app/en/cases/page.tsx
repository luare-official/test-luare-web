import type {Metadata} from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import styles from "@/components/cases/R5CaseLayout.module.css";
import {r5Cases} from "@/lib/r5Cases";
import {enCases} from "@/lib/enSite";
export const metadata:Metadata={title:"Case Studies | Luare Consulting",description:"Selected accounting, internal control and J-SOX engagements, plus an illustrative FP&A service model.",alternates:{canonical:"https://luare-consulting.com/en/cases"}};
function CaseCard({id,index}:{id:string;index:string}){const c=enCases[id];return <Link href={"/en/cases/"+id} className={styles.card}><span className={styles.index}>CASE {index}</span><p className={styles.industry}>{c.industry}</p><h3>{c.title}</h3><p className={styles.impact}>{c.impact}</p><span className={styles.arrowlink}>View case study →</span></Link>;}
export default function CasesEn(){return <><Navbar solid/><main className={styles.page+" flex-1 pt-20"} lang="en">
<div className={styles.hero}><div className={styles.shell}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/en">Home</Link><span>/</span><span>Case Studies</span></nav><p className={styles.eyebrow}>CASE STUDIES</p><h1>Case Studies</h1><p>Our approach to client challenges, the work involved and the intended results.</p></div></div>
<section className={styles.section}><div className={styles.shell}><header className={styles.sectionTop}><div><p className={styles.eyebrow}>PROJECTS</p><h2>Selected engagements</h2></div></header><div className={styles.grid3}>{r5Cases.filter(c=>c.id!=="case-fpa").map(c=><CaseCard key={c.id} id={c.id} index={c.index}/>)}</div></div></section>
<section className={styles.section+" "+styles.alt}><div className={styles.shell}><header className={styles.sectionTop}><div><p className={styles.eyebrow}>SERVICE MODEL</p><h2>Illustrative support model</h2></div></header><p className="mb-6 text-sm text-[#475569]">The FP&amp;A example describes a possible service, not an actual client engagement.</p><div className={styles.grid2}><CaseCard id="case-fpa" index="04"/></div></div></section>
<section className={styles.closing}><h2>Let's explore the right approach for your business.</h2><p>We will discuss your challenges, scope and timeline before recommending next steps.</p><Link href="/en/contact" className={styles.closingLink}>Contact us</Link></section>
</main><FooterEn/></>}