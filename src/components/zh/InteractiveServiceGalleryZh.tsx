"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { zhServices } from "@/lib/zhSite";

/** Uses the same approved service-row design and behavior as the Japanese homepage. */
export default function InteractiveServiceGalleryZh() {
  const [active,setActive]=useState(0);
  const inputMethod=useRef<"mouse"|"touch"|"pen"|null>(null);
  return (
    <div className="luare-guide" aria-label="专业服务列表">
      
      <div className="luare-guide-list">
        {zhServices.map((svc,index)=>{
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
                    <span className="luare-guide-panel-caption">主要支持内容</span>
                    <div className="luare-guide-links">
                      {svc.items.map((item,i)=><Link key={item.title} href={"/zh/services/"+svc.slug+"#scope-"+(i+1)}
                        className="luare-guide-link">
                        <span>{item.title}</span><span className="luare-guide-link-icon" aria-hidden="true">↗</span>
                      </Link>)}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
