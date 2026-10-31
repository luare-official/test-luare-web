"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { serviceCategories, serviceItems, serviceCategoryItemHref } from "@/lib/serviceCatalog";

/** Photo-free service directory – approved design A. */
export default function InteractiveServiceGallery() {
  const [active,setActive] = useState(0);
  const inputMethod=useRef<"mouse"|"touch"|"pen"|null>(null);
  function activate(index:number) { setActive(index); }
  return (
    <div className="luare-guide" aria-label="専門サービス一覧">
      
      <div className="luare-guide-list">
        {serviceCategories.map((service,index)=>{
          const open=active===index;
          return <section className={"luare-guide-row"+(open?" is-open":"")}
            key={service.number}
            onPointerEnter={(event)=>{if(event.pointerType==="mouse")activate(index);}}>
            <h4 className="luare-guide-row-heading">
              <button type="button" aria-expanded={open}
                aria-controls={`luare-guide-panel-${index}`}
                onFocus={()=>{if(!open)activate(index);}}
                onPointerDown={(event)=>{inputMethod.current=event.pointerType as "mouse"|"touch"|"pen";}}
                onClick={(event)=>{
                  // Mouse hover has already opened the row: clicking must not unexpectedly close it.
                  if(inputMethod.current==="mouse")activate(index);
                  else if(event.detail===0)setActive(open?-1:index); // keyboard Space/Enter
                  else setActive(open?-1:index); // touch/pen
                  inputMethod.current=null;
                }}
                className="luare-guide-trigger">
                <span className="luare-guide-number">{service.number}</span>
                <span className="luare-guide-main">
                  <span className="luare-guide-title">{service.title}</span>
                  <span className="luare-guide-lead">{service.lead}</span>
                </span>
                <span className="luare-guide-chevron" aria-hidden="true">⌄</span>
              </button>
            </h4>
            <div className="luare-guide-panel" id={`luare-guide-panel-${index}`}
              aria-hidden={!open} inert={!open}>
              <div className="luare-guide-panel-clip">
                <div className="luare-guide-panel-body">
                  <span className="luare-guide-panel-caption">主な支援内容</span>
                  <div className="luare-guide-links">
                    {service.itemIds.map(id=>{
                      const item=serviceItems.find(row=>row.id===id);
                      if(!item)return null;
                      return <Link href={serviceCategoryItemHref(service.number,id)} key={id} className="luare-guide-link">
                        <span>{item.name}</span><span className="luare-guide-link-icon" aria-hidden="true">↗</span>
                      </Link>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>;
        })}
      </div>
    </div>
  );
}
