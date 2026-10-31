"use client";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";

/** One global consultation entry on all routes. Only home hero hides it until scrolled. */
export default function FreeConsultationRail() {
  const path=usePathname()||"/";
  const lang=path.startsWith("/en")?"EN":path.startsWith("/zh")?"ZH":"JP";
  const home=["/","/en","/zh"].includes(path.replace(/\/$/,"")||"/");
  const label=lang==="EN"?"Free online consultation":lang==="ZH"?"免费在线咨询":"無料オンライン相談";
  const contact=lang==="EN"?"/en/contact":lang==="ZH"?"/zh/contact":"/contact";
  const [visible,setVisible]=useState(!home);
  useEffect(()=>{
    const update=()=>setVisible(!home || window.scrollY>Math.max(420,window.innerHeight*0.72));
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return ()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update);};
  },[home,path]);
  return <a href={contact} className={"luare-consult-rail "+(visible?"is-visible":"")}
    aria-label={label} tabIndex={visible?0:-1} aria-hidden={!visible}>
    <span className="luare-consult-video" aria-hidden="true"><i/></span>
    <strong>{label}</strong>
    <span className="luare-consult-rule" aria-hidden="true"/>
    <span className="luare-consult-languages" aria-label="Japanese, English, Chinese">
      <span className="luare-consult-language"><b>JP</b></span>
      <span className="luare-consult-language"><b>EN</b></span>
      <span className="luare-consult-language"><b>中文</b></span>
    </span>
  </a>;
}
