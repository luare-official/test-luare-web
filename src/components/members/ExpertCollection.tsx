"use client";

import Image from "next/image";
import { useRef } from "react";

export type Lang = "ja" | "en" | "zh";
type Info = { name:string; qualification:string; specialties:string[]; bio:string; career:string[] };
type Member = { id:string; roman:string; image:string; photoBg:string; info:Record<Lang,Info> };

const members:Member[] = [
  {
    "id": "nemoto",
    "roman": "Shunichi Nemoto",
    "image": "/images/members/nemoto.webp",
    "photoBg": "#CBD5E9",
    "info": {
      "ja": {
        "name": "根本 俊一",
        "qualification": "公認会計士・税理士・米国公認会計士（ワシントン州）",
        "specialties": [
          "会計監査",
          "J-SOX・内部統制",
          "IFRS・国際会計",
          "企業価値評価"
        ],
        "bio": "三優監査法人（BDO International）、監査法人トーマツで監査・IPO支援・内部統制構築などに従事。2006年に独立後、シンガポール上場企業のCFOとして決算開示・IRを担当。日本橋国際会計事務所の代表、J-Bridge国際監査法人の代表社員を務める。",
        "career": [
          "2000年 三優監査法人（BDO International）に入所",
          "2004年 監査法人トーマツに入所",
          "2006年 根本公認会計士事務所を開業",
          "2014年 シンガポール上場企業のCFOに就任",
          "2019年 日本橋国際会計事務所を開設",
          "2024年 J-Bridge国際監査法人の代表社員に就任",
          "2026年～ Luare Consultingと協業"
        ]
      },
      "en": {
        "name": "Shunichi Nemoto",
        "qualification": "Japanese CPA, Licensed Tax Accountant, U.S. CPA (Washington)",
        "specialties": [
          "Financial audit",
          "J-SOX & internal controls",
          "IFRS & global accounting",
          "Valuation"
        ],
        "bio": "After working on audits, IPO support and internal controls at Sanyu Audit Corporation (BDO International) and Deloitte Touche Tohmatsu, he established his own practice in 2006. He later served as CFO of a Singapore-listed company, overseeing disclosure and investor relations. He now leads Nihonbashi International Accounting Office and serves as a representative partner of J-Bridge International Audit Firm.",
        "career": [
          "2000 — Joined Sanyu Audit Corporation (BDO International)",
          "2004 — Joined Deloitte Touche Tohmatsu",
          "2006 — Established Nemoto CPA Office",
          "2014 — Became CFO of a Singapore-listed company",
          "2019 — Established Nihonbashi International Accounting Office",
          "2024 — Became representative partner at J-Bridge International Audit Firm",
          "2026–present — Collaborating with Luare Consulting"
        ]
      },
      "zh": {
        "name": "根本 俊一",
        "qualification": "日本注册会计师、税理士、美国注册会计师（华盛顿州）",
        "specialties": [
          "财务审计",
          "J-SOX与内部控制",
          "IFRS与国际会计",
          "企业估值"
        ],
        "bio": "曾在三优审计法人（BDO International）及德勤日本从事审计、上市支持和内部控制相关工作，2006年独立执业。其后担任新加坡上市公司的首席财务官，负责财务披露和投资者关系。现担任日本桥国际会计事务所代表及J-Bridge国际审计法人代表合伙人。",
        "career": [
          "2000年 加入三优审计法人（BDO International）",
          "2004年 加入德勤日本审计法人",
          "2006年 创立根本公认会计士事务所",
          "2014年 就任新加坡上市公司CFO",
          "2019年 创立日本桥国际会计事务所",
          "2024年 就任J-Bridge国际审计法人代表合伙人",
          "2026年至今 与Luare Consulting开展协作"
        ]
      }
    }
  },
  {
    "id": "shoji",
    "roman": "Takanao Shoji",
    "image": "/images/members/shoji.webp",
    "photoBg": "#D3DBE1",
    "info": {
      "ja": {
        "name": "小路 隆巨",
        "qualification": "米国公認会計士（ワシントン州）",
        "specialties": [
          "クロスボーダーM&A",
          "経営戦略・PMI",
          "海外子会社管理",
          "事業開発"
        ],
        "bio": "ブリヂストンで20年以上、海外営業・海外子会社設立・事業管理に従事。上海駐在中は販売会社の総経理を務め、帰国後は海外M&Aを活用した新規事業開発やPMIを推進。MUFGではクロスボーダーM&Aと新規事業に携わる。",
        "career": [
          "2002年 ブリヂストンに入社",
          "2010年から約4年間 上海に駐在、販売会社の総経理を担当",
          "2019年 鉱山ソリューション事業戦略推進部の部長に就任",
          "2022年 MUFGの経営企画部門に在籍",
          "2024年 日本橋国際会計事務所に参画",
          "2026年～ Luare Consultingと協業"
        ]
      },
      "en": {
        "name": "Takanao Shoji",
        "qualification": "U.S. CPA (Washington)",
        "specialties": [
          "Cross-border M&A",
          "Business strategy & PMI",
          "Overseas subsidiary management",
          "Business development"
        ],
        "bio": "During more than 20 years at Bridgestone, he worked in international sales, overseas subsidiary establishment and business management, including serving as general manager of a Shanghai sales subsidiary. He subsequently led overseas M&A-related business development and PMI, and worked on cross-border M&A and new initiatives at MUFG.",
        "career": [
          "2002 — Joined Bridgestone",
          "2010 — Began a four-year assignment as general manager of a sales subsidiary in Shanghai",
          "2019 — Became department head for mining solutions business strategy",
          "2022 — Joined MUFG corporate planning",
          "2024 — Joined Nihonbashi International Accounting Office",
          "2026–present — Collaborating with Luare Consulting"
        ]
      },
      "zh": {
        "name": "小路 隆巨",
        "qualification": "美国注册会计师（华盛顿州）",
        "specialties": [
          "跨境并购",
          "经营战略与并购后整合",
          "海外子公司管理",
          "新业务开发"
        ],
        "bio": "在普利司通工作逾20年，负责海外销售、海外子公司设立及业务管理，驻上海期间曾担任销售公司总经理。其后推动利用海外并购开展的新业务及并购后整合，并在MUFG参与跨境并购和新业务。",
        "career": [
          "2002年 加入普利司通",
          "2010年起约4年 驻上海担任销售公司总经理",
          "2019年 就任矿山解决方案事业战略部门负责人",
          "2022年 在MUFG经营企划部门任职",
          "2024年 加入日本桥国际会计事务所",
          "2026年至今 与Luare Consulting开展协作"
        ]
      }
    }
  },
  {
    "id": "matayoshi",
    "roman": "Atsushi Matayoshi",
    "image": "/images/members/matayoshi.webp",
    "photoBg": "#ECF5F6",
    "info": {
      "ja": {
        "name": "又吉 敦史",
        "qualification": "公認会計士・税理士",
        "specialties": [
          "監査・J-SOX",
          "上場企業の財務管理",
          "決算・開示",
          "財務ガバナンス"
        ],
        "bio": "新日本有限責任監査法人（現・EY新日本有限責任監査法人）で上場企業の監査・J-SOX評価に従事。その後、税務・企業価値評価を経験し、上場企業の財務経理部長、取締役兼CFOを歴任。",
        "career": [
          "2008年 新日本有限責任監査法人に入所",
          "2016年 上場企業の財務経理部長に就任",
          "2020年 同社の取締役兼CFOに就任",
          "2024年 独立開業、日本橋国際会計事務所に参画",
          "2025年 税理士登録",
          "2026年 J-Bridge国際監査法人のパートナーに就任",
          "2026年～ Luare Consultingと協業"
        ]
      },
      "en": {
        "name": "Atsushi Matayoshi",
        "qualification": "Japanese CPA, Licensed Tax Accountant",
        "specialties": [
          "Audit & J-SOX",
          "Listed-company finance management",
          "Financial closing & disclosure",
          "Financial governance"
        ],
        "bio": "He worked on listed-company audits and J-SOX assessments at ShinNihon Audit Corporation (now EY ShinNihon), and later gained experience in tax and valuation. He went on to serve as head of finance and director/CFO of a listed company.",
        "career": [
          "2008 — Joined ShinNihon Audit Corporation (now EY ShinNihon)",
          "2016 — Became head of finance at a listed company",
          "2020 — Became director and CFO of that company",
          "2024 — Established his practice and joined Nihonbashi",
          "2025 — Registered as a licensed tax accountant",
          "2026 — Became partner at J-Bridge International Audit Firm",
          "2026–present — Collaborating with Luare Consulting"
        ]
      },
      "zh": {
        "name": "又吉 敦史",
        "qualification": "日本注册会计师、税理士",
        "specialties": [
          "审计与J-SOX",
          "上市公司财务管理",
          "财务结算与信息披露",
          "财务治理"
        ],
        "bio": "曾在新日本审计法人（现EY新日本）从事上市公司审计及J-SOX评价，随后积累税务及企业估值经验，并历任上市公司财务会计负责人、董事兼CFO。",
        "career": [
          "2008年 加入新日本审计法人（现EY新日本）",
          "2016年 就任上市公司财务会计负责人",
          "2020年 就任该公司董事兼CFO",
          "2024年 独立执业并加入日本桥国际会计事务所",
          "2025年 注册为日本税理士",
          "2026年 就任J-Bridge国际审计法人合伙人",
          "2026年至今 与Luare Consulting开展协作"
        ]
      }
    }
  },
  {
    "id": "oh",
    "roman": "Senrin Oh",
    "image": "/images/members/oh.webp",
    "photoBg": "#F4F8FB",
    "info": {
      "ja": {
        "name": "王 宣麟",
        "qualification": "弁護士",
        "specialties": [
          "企業法務・M&A",
          "中国・シンガポール法務",
          "個人情報保護",
          "契約・コンプライアンス"
        ],
        "bio": "大阪大学法学部卒業、京都大学法科大学院修了。2017年に弁護士登録し、堂島法律事務所に入所。中国人民大学で中国法LL.M.を取得し、中国の法律事務所での研修とシンガポールの法律事務所への出向を経験。企業法務、M&A、中国・シンガポール法務などに取り組む。",
        "career": [
          "2017年 弁護士登録、堂島法律事務所に入所",
          "2022〜2024年 中国の法律事務所5か所で研修",
          "2024年 中国人民大学法学院の中国法LL.M.を修了",
          "2024〜2025年 シンガポールの法律事務所に出向",
          "2025年 堂島法律事務所に復帰",
          "2026年～ Luare Consultingと協業"
        ]
      },
      "en": {
        "name": "Senrin Oh",
        "qualification": "Attorney-at-Law (Japan)",
        "specialties": [
          "Corporate law & M&A",
          "China & Singapore law",
          "Data protection",
          "Contracts & compliance"
        ],
        "bio": "A graduate of Osaka University Faculty of Law and Kyoto University Law School, he was admitted to the Japanese bar and joined Dojima Law Office in 2017. He earned an LL.M. in Chinese law at Renmin University of China, trained at law firms in China and undertook secondments in Singapore. His practice includes corporate law, M&A, and China- and Singapore-related matters.",
        "career": [
          "2017 — Admitted to the Japanese bar; joined Dojima Law Office",
          "2022–2024 — Trained at five law firms in China",
          "2024 — Completed an LL.M. in Chinese law at Renmin University",
          "2024–2025 — Seconded to law firms in Singapore",
          "2025 — Returned to Dojima Law Office",
          "2026–present — Collaborating with Luare Consulting"
        ]
      },
      "zh": {
        "name": "王 宣麟",
        "qualification": "日本执业律师",
        "specialties": [
          "企业法务与并购",
          "中国及新加坡法律",
          "个人信息保护",
          "合同与合规"
        ],
        "bio": "毕业于大阪大学法学部并修毕京都大学法科大学院课程，2017年取得日本律师资格后加入堂岛法律事务所。曾在中国人民大学取得中国法LL.M.学位，在中国法律事务所研修，并赴新加坡法律事务所任职。主要处理企业法务、并购及中国、新加坡相关法律事务。",
        "career": [
          "2017年 取得日本律师资格，加入堂岛法律事务所",
          "2022—2024年 在中国五家法律事务所研修",
          "2024年 获中国人民大学中国法LL.M.学位",
          "2024—2025年 派驻新加坡法律事务所",
          "2025年 返回堂岛法律事务所",
          "2026年至今 与Luare Consulting开展协作"
        ]
      }
    }
  }
];

const ui:Record<Lang,{heading:string;label:string;profile:string;spec:string;career:string;close:string;view:string}> = {
  "ja": {
    "heading": "専門家紹介",
    "label": "PROFESSIONALS",
    "profile": "プロフィール",
    "spec": "主な専門領域",
    "career": "主な経歴",
    "close": "閉じる",
    "view": "の経歴を見る"
  },
  "en": {
    "heading": "Our Experts",
    "label": "PROFESSIONALS",
    "profile": "Professional profile",
    "spec": "Key areas of expertise",
    "career": "Career highlights",
    "close": "Close",
    "view": " — view profile"
  },
  "zh": {
    "heading": "专家介绍",
    "label": "PROFESSIONALS",
    "profile": "个人简介",
    "spec": "主要专业领域",
    "career": "主要经历",
    "close": "关闭",
    "view": " — 查看履历"
  }
};

export default function ExpertCollection({ lang, homepage = false }: {lang:Lang; homepage?:boolean}) {
  const c = ui[lang];
  const dialogRefs = useRef<Record<string,HTMLDialogElement|null>>({});
  const triggerRefs = useRef<Record<string,HTMLButtonElement|null>>({});
  const open = (id:string) => {
    const dialog = dialogRefs.current[id];
    if(dialog && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow="hidden";
    }
  };
  const close = (id:string) => dialogRefs.current[id]?.close();
  const afterClose = (id:string) => {
    document.body.style.overflow="";
    triggerRefs.current[id]?.focus();
  };
  // Matayoshi: keep his face comparable in size to the other experts while shifting the head higher.
  // The lower 15% is covered by a suit-coloured backdrop under the existing dark name gradient.
  // Applies to the homepage and directory cards only; the source photos and modals are unchanged.
  const cardPhoto = (id:string) => id==="matayoshi" ? {transform:"translateY(-15%) scale(1)", transformOrigin:"center center"} : id==="oh" ? {transform:"scale(1.25)",transformOrigin:"center 48%"} : undefined;
  const modalPhoto = (id:string) => id==="matayoshi" ? {objectPosition:"center 15%"} : id==="oh" ? {objectPosition:"center 13%"} : {objectPosition:"center 12%"};
  return <>
    <section id={homepage?"experts":"members"} aria-label={c.heading} className={homepage?"bg-[#EDF5FC] py-20 sm:py-24 lg:py-28":"bg-[#F5FAFE] py-14 sm:py-16 lg:py-20"}>
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10">
        {homepage && <header className="mb-9 sm:mb-11">
          <p className="mb-4 text-[11px] font-semibold tracking-[.2em] text-[#1766A0]">{c.label}</p>
          <h2 className="text-[clamp(34px,4vw,54px)] font-normal leading-tight text-[#0B3158]">{c.heading}</h2>
        </header>}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 lg:gap-6">
          {members.map(person=>{
            const info=person.info[lang];
            const qual=lang==="ja"&&person.id==="nemoto" ? ["公認会計士","税理士","米国公認会計士（ワシントン州）"] : [info.qualification];
            return <article key={person.id} className="min-w-0">
              <button type="button" ref={el=>{triggerRefs.current[person.id]=el;}}
                aria-label={info.name+c.view} aria-haspopup="dialog" aria-controls={"expert-dialog-"+person.id}
                onClick={()=>open(person.id)} data-expert={person.id}
                className="group relative block w-full cursor-pointer overflow-hidden text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#1766A0] focus-visible:outline-offset-2">
                <span className="relative block aspect-[.76] overflow-hidden" style={{backgroundColor:person.id==="matayoshi"?"#192238":person.photoBg}}>
                  <Image src={person.image} alt="" fill sizes="(max-width: 640px) 48vw, (max-width: 1024px) 45vw, 280px" unoptimized
                    className="object-cover object-[center_15%] transition-[filter,transform] duration-300 group-hover:brightness-105"
                    style={cardPhoto(person.id)}/>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-[#071A2B]/90 via-[#071A2B]/30 to-transparent"/>
                  <span className="absolute bottom-4 left-3 right-9 z-10 block text-white sm:bottom-5 sm:left-5 sm:right-11">
                    <span className="block text-[clamp(15px,1.8vw,22px)] font-semibold tracking-[.055em] leading-snug">{person.info.ja.name}</span>
                    <span className="mt-1.5 block text-[10px] tracking-[.04em] text-[#DEE8F0]">{person.roman}</span>
                  </span>
                  <span aria-hidden="true" className="absolute bottom-5 right-3 z-10 text-lg font-light leading-none text-white/85 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:right-4">↗</span>
                </span>
              </button>
              <div className="min-h-[82px] border border-t-0 border-[#D7E8F4] bg-white px-3 py-3.5 sm:px-5 sm:py-4">
                {qual.map(q=><p key={q} className="text-[11px] font-semibold leading-[1.8] text-[#0B3158] sm:text-[12px]">{q}</p>)}
              </div>
            </article>;
          })}
        </div>
      </div>
    </section>
    {members.map(person=>{
      const info=person.info[lang];
      return <dialog key={person.id} id={"expert-dialog-"+person.id}
        ref={el=>{dialogRefs.current[person.id]=el;}} onClose={()=>afterClose(person.id)}
        aria-labelledby={"expert-name-"+person.id+"-"+lang}
        onClick={ev=>{if(ev.target===ev.currentTarget)close(person.id);}}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-32px)] w-[min(94vw,960px)] overflow-y-auto border-0 bg-white p-0 text-[#0B3158] shadow-[0_30px_90px_rgba(9,25,44,.36)] backdrop:bg-[#07182D]/70 backdrop:backdrop-blur-[3px]">
        <button type="button" onClick={()=>close(person.id)} aria-label={c.close}
          className="sticky right-4 top-4 z-20 float-right mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4E1EA] bg-white text-2xl text-[#1766A0] shadow-lg hover:bg-[#EDF5FC]">×</button>
        <div className="clear-both grid grid-cols-1 gap-7 px-6 pb-10 pt-2 sm:grid-cols-[208px_minmax(0,1fr)] sm:gap-12 sm:px-8 sm:pb-12 sm:pt-3">
          <div className="relative h-[224px] w-[174px] overflow-hidden rounded-sm bg-[#EDF5FC] sm:h-[260px] sm:w-[208px]">
            <Image src={person.image} alt={info.name} fill sizes="208px" unoptimized className="object-cover" style={modalPhoto(person.id)}/>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#1766A0]">PROFILE</p>
            <h2 id={"expert-name-"+person.id+"-"+lang} className="mt-3 text-[27px] font-semibold leading-tight tracking-[.04em] sm:text-[31px]">{info.name}</h2>
            <p className="mt-1 text-xs text-[#8797A6]">{lang==="en"?person.info.ja.name:person.roman}</p>
            <p className="mt-5 text-[13px] font-semibold leading-7 text-[#0B3158]">{info.qualification}</p>
            <h3 className="mb-3 mt-7 border-b border-[#D4E7F3] pb-2 text-[12px] font-bold text-[#1766A0]">{c.spec}</h3>
            <div className="flex flex-wrap gap-2">{info.specialties.map(s=><span key={s} className="border border-[#D9EAF4] bg-[#F4FAFE] px-3 py-1.5 text-[11px] leading-5 text-[#1766A0]">{s}</span>)}</div>
            <h3 className="mb-3 mt-7 border-b border-[#D4E7F3] pb-2 text-[12px] font-bold text-[#1766A0]">{c.profile}</h3>
            <p className="text-[12px] leading-[2.1] text-[#536477] sm:text-[13px]">{info.bio}</p>
            <h3 className="mb-3 mt-7 border-b border-[#D4E7F3] pb-2 text-[12px] font-bold text-[#1766A0]">{c.career}</h3>
            <ol className="ml-1 border-l border-[#D4E7F3] pl-4 text-[12px] leading-[2] text-[#536477]">
              {info.career.map((item,i)=><li key={i} className="relative mb-3 last:mb-0 before:absolute before:-left-[21px] before:top-[10px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#2C9BC9]">{item}</li>)}
            </ol>
          </div>
        </div>
      </dialog>;
    })}
  </>;
}
