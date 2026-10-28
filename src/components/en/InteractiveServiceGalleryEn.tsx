"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { enServices } from "@/lib/enSite";

/** Uses the same approved service-row design and behavior as the Japanese homepage. */
export default function InteractiveServiceGalleryEn() {
  const [active,setActive]=useState(0);
  const inputMethod=useRef<"mouse"|"touch"|"pen"|null>(null);
  return (
    <div className="luare-guide" aria-label="Professional services">
      <div className="luare-guide-intro">
        <h3>Explore our services</h3>
        <p>Hover over a service to view the scope of support. Tap a category on mobile.</p>
      </div>
      <div className="luare-guide-list">
        {enServices.map((svc,index)=>{
          const open=active===index;
          return (
            <section key={svc.slug} className={"luare-guide-row"+(open?" is-open":"")}
              onPointerEnter={event=>{if(event.pointerType==="mouse")setActive(index);}}>
              <h4 className="luare-guide-row-heading">
                <button type="button" className="luare-guide-trigger" aria-expanded={open}
                  aria-controls={"luare-zh-guide-panel-"+index}
                  onFocus={()=>{if(!open)setActive(index);}}
                  onPointerDown={event=>{inputMethod.current=event.pointerType as "mouse"|"touch"|"pen";}}
                  onClick={event=>{
                    if(inputMethod.current==="mouse")setActive(index);
                    else if(event.detail===0)setActive(open?-1:index);
                    else setActive(open?-1:index);
                    inputMethod.current=null;
                  }}>
                  <span className="luare-guide-number">{String(index+1).padStart(2,"0")}</span>
                  <span className="luare-guide-main">
                    <span className="luare-guide-title">{svc.title}</span>
                    <span className="luare-guide-lead">{svc.lead}</span>
                  </span>
                  <span className="luare-guide-chevron" aria-hidden="true">⌄</span>
                </button>
              </h4>
              <div className="luare-guide-panel" id={"luare-zh-guide-panel-"+index}
                aria-hidden={!open} inert={!open}>
                <div className="luare-guide-panel-clip">
                  <div className="luare-guide-panel-body">
                    <span className="luare-guide-panel-caption">Areas of support</span>
                    <div className="luare-guide-links">
                      {svc.items.map((item,i)=><Link key={item[0]} href={"/en/services/"+svc.slug+"#scope-"+(i+1)}
                        className="luare-guide-link">
                        <span>{item[0]}</span><span className="luare-guide-link-icon" aria-hidden="true">↗</span>
                      </Link>)}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <div className="mt-9 border-t border-[#CBD5E1] pt-6">
        <p className="mb-3 text-xs font-semibold tracking-wide text-[#475569]">Additional advisory services</p>
        <Link href="/en/services/ma-finance" className="text-[13px] font-semibold text-[#0B3158] hover:underline">M&A and financial advisory ↗</Link>
      </div>
    </div>
  );
}
