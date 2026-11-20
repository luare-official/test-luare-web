"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";

type Lang = "ja" | "en" | "zh";
type Info = {name:string; qualification:string; affiliation:string; specialties:string[]; bio:string; career:string[]};
type Member = {id:string; roman:string; image:string; link:string; photoBg:string; info:Record<Lang,Info>};

const members: Member[] = [
  { id:"nemoto", roman:"Shunichi Nemoto", image:"/images/members/nemoto.webp", photoBg:"#CBD5E9",
    link:"https://www.n-cpa.com/introduction/nemoto/",
    info:{
      ja:{name:"根本 俊一",qualification:"公認会計士・税理士・米国公認会計士（ワシントン州）",affiliation:"日本橋国際会計事務所 代表／J-Bridge国際監査法人 代表社員",specialties:["会計監査","J-SOX・内部統制","IFRS・国際会計","企業価値評価"],bio:"国内外の監査法人で監査・IPO支援・財務アドバイザリーを経験後、独立。シンガポール上場企業のCFOとして決算開示、IR、内部統制の実務にも従事しています。",career:["2000年 BDO International 東京事務所 入所","2004年 監査法人トーマツ 入所","2014年 シンガポール上場企業 CFO就任","2019年 日本橋国際会計事務所 開設","2024年 J-Bridge国際監査法人 代表社員就任"]},
      en:{name:"Shunichi Nemoto",qualification:"Japanese CPA · Tax Accountant · U.S. CPA (Washington)",affiliation:"Principal, Nihonbashi International Accounting Office / Representative Partner, J-Bridge International Audit Firm",specialties:["Financial audits","J-SOX and internal controls","IFRS and international accounting","Valuation"],bio:"His experience includes financial audits, IPO support and financial advisory at international accounting firms. He subsequently established his practice and also served as CFO of a Singapore-listed company, overseeing disclosure, IR and internal controls.",career:["2000 Joined BDO International Tokyo","2004 Joined Deloitte Touche Tohmatsu Japan","2014 Became CFO of a Singapore-listed company","2019 Established Nihonbashi International Accounting Office","2024 Became Representative Partner at J-Bridge International Audit Firm"]},
      zh:{name:"根本 俊一",qualification:"日本注册会计师・税理士・美国注册会计师（华盛顿州）",affiliation:"日本桥国际会计事务所 代表／J-Bridge国际审计法人 代表合伙人",specialties:["财务审计","J-SOX与内部控制","IFRS与国际会计","企业估值"],bio:"曾在国际会计师事务所从事审计、IPO支持和财务咨询，后独立执业。亦曾担任新加坡上市公司首席财务官，负责财务披露、投资者关系及内部控制。",career:["2000年 加入BDO International东京事务所","2004年 加入德勤日本审计法人","2014年 出任新加坡上市企业CFO","2019年 创立日本桥国际会计事务所","2024年 就任J-Bridge国际审计法人代表合伙人"]}
    }
  },
  { id:"shoji", roman:"Takanao Shoji", image:"/images/members/shoji.webp", photoBg:"#D3DBE1",
    link:"https://www.n-cpa.com/introduction/shoji/",
    info:{
      ja:{name:"小路 隆巨",qualification:"米国公認会計士（ワシントン州）",affiliation:"日本橋国際会計事務所",specialties:["クロスボーダーM&A","経営戦略・PMI","海外子会社管理","事業開発"],bio:"ブリヂストンで海外営業・海外子会社の設立と経営管理に長年携わり、中国拠点の総経理を経験。海外企業のM&AやPMI、新規事業のグローバル展開を実務責任者として推進してきました。",career:["2002年 ブリヂストン 入社","2010年 中国拠点に駐在し総経理を担当","2015年以降 事業戦略・M&Aを主導","2022年 MUFG経営企画部門 在籍","2024年 日本橋国際会計事務所 参画"]},
      en:{name:"Takanao Shoji",qualification:"U.S. CPA (Washington)",affiliation:"Nihonbashi International Accounting Office",specialties:["Cross-border M&A","Business strategy and PMI","Overseas subsidiaries","Business development"],bio:"At Bridgestone, he led international sales, subsidiary establishment and overseas business operations, including serving as general manager in China. He has directed cross-border acquisitions, post-merger integration and global new business development.",career:["2002 Joined Bridgestone","2010 Served in China as general manager","2015 onward Led business strategy and M&A projects","2022 Worked in corporate planning at MUFG","2024 Joined Nihonbashi International Accounting Office"]},
      zh:{name:"小路 隆巨",qualification:"美国注册会计师（华盛顿州）",affiliation:"日本桥国际会计事务所",specialties:["跨境并购","经营战略与并购后整合","海外子公司管理","新业务开发"],bio:"长期任职于普利司通，负责海外销售、海外子公司设立及经营管理，并曾担任中国业务总经理。拥有跨境并购、并购后整合及全球新业务开发的实践经验。",career:["2002年 加入普利司通","2010年 驻中国担任业务总经理","2015年起 主导经营战略及并购项目","2022年 在三菱日联金融集团经营企划部门任职","2024年 加入日本桥国际会计事务所"]}
    }
  },
  { id:"matayoshi", roman:"Atsushi Matayoshi", image:"/images/members/matayoshi.webp", photoBg:"#ECF5F6",
    link:"https://www.n-cpa.com/introduction/matayoshi/",
    info:{
      ja:{name:"又吉 敦史",qualification:"公認会計士・税理士",affiliation:"J-Bridge国際監査法人 パートナー／日本橋国際会計事務所 アドバイザー",specialties:["会計監査・J-SOX","上場企業CFO","決算・開示","財務ガバナンス"],bio:"EY新日本有限責任監査法人で監査・J-SOX評価を担当した後、上場企業の財務経理部長やCFOを歴任。監査を行う側と事業会社の経営を担う側、双方の実務経験があります。",career:["2008年 新日本有限責任監査法人 入所","2011年 公認会計士登録","2016年 上場企業の財務経理部長 就任","2020年 同社 CFO 就任","2024年 独立開業・日本橋国際会計事務所 参画","2026年 J-Bridge国際監査法人 パートナー就任"]},
      en:{name:"Atsushi Matayoshi",qualification:"Japanese CPA · Tax Accountant",affiliation:"Partner, J-Bridge International Audit Firm / Adviser, Nihonbashi International Accounting Office",specialties:["Audit and J-SOX","Listed-company CFO","Financial closing and disclosure","Financial governance"],bio:"After handling audits and J-SOX assessments at EY ShinNihon, he served as head of finance and later CFO of a publicly listed company. He brings practical experience from both audit engagements and corporate financial leadership.",career:["2008 Joined ShinNihon Audit Corporation","2011 Registered as a Japanese CPA","2016 Became Head of Finance at a listed company","2020 Became CFO of that company","2024 Established an independent practice and joined Nihonbashi","2026 Became Partner at J-Bridge International Audit Firm"]},
      zh:{name:"又吉 敦史",qualification:"日本注册会计师・税理士",affiliation:"J-Bridge国际审计法人 合伙人／日本桥国际会计事务所 顾问",specialties:["审计与J-SOX","上市企业CFO","财务结算与披露","财务治理"],bio:"曾在EY新日本审计法人从事审计及J-SOX评价，之后担任上市公司财务经理及首席财务官。兼具审计机构与企业财务管理的实践经验。",career:["2008年 加入新日本审计法人","2011年 注册为日本公认会计士","2016年 就任上市公司财务经理","2020年 就任该公司CFO","2024年 独立执业并加入日本桥国际会计事务所","2026年 成为J-Bridge国际审计法人合伙人"]}
    }
  },
  { id:"oh", roman:"Senrin Oh", image:"/images/members/oh.webp", photoBg:"#F4F8FB",
    link:"https://www.dojima.gr.jp/lawyer/o-senrin/",
    info:{
      ja:{name:"王 宣麟",qualification:"弁護士",affiliation:"堂島法律事務所 アソシエイト",specialties:["企業法務・M&A","中国・シンガポール法務","個人情報保護","契約・コンプライアンス"],bio:"大阪大学法学部・京都大学法科大学院で学び、2017年に弁護士登録。中国人民大学で中国法LL.M.を修了し、中国各地およびシンガポールの法律事務所でも研修・実務を経験しています。",career:["2017年 弁護士登録・堂島法律事務所 入所","2022〜2024年 中国各地の法律事務所で研修","2024年 中国人民大学法学院 LL.M.修了","2024〜2025年 シンガポールの法律事務所に出向","2025年 堂島法律事務所に復帰"]},
      en:{name:"Senrin Oh",qualification:"Attorney-at-Law (Japan)",affiliation:"Associate, Dojima Law Office",specialties:["Corporate law and M&A","China and Singapore law","Data protection","Contracts and compliance"],bio:"Admitted to the Japanese bar in 2017, he holds an LL.M. in Chinese law from Renmin University of China. His experience includes training and secondments at law firms in China and Singapore, particularly in cross-border corporate law.",career:["2017 Admitted to the Japanese bar; joined Dojima Law Office","2022–2024 Trained at law firms in China","2024 Completed an LL.M. in Chinese law at Renmin University","2024–2025 Seconded to law firms in Singapore","2025 Returned to Dojima Law Office"]},
      zh:{name:"王 宣麟",qualification:"日本执业律师",affiliation:"堂岛律师事务所 律师",specialties:["企业法务与并购","中国及新加坡法律","个人信息保护","合同与合规"],bio:"2017年取得日本律师资格，之后在中国人民大学完成中国法法学硕士课程，并在中国多个城市及新加坡法律事务所接受培训或派驻任职，熟悉跨境企业法务。",career:["2017年 取得律师资格并加入堂岛律师事务所","2022—2024年 在中国法律事务所研修","2024年 获中国人民大学中国法LL.M.学位","2024—2025年 派驻新加坡法律事务所","2025年 回到堂岛律师事务所"]}
    }
  }
];

const ui:Record<Lang,{home:string;title:string;profile:string;aff:string;spec:string;bio:string;career:string;external:string;close:string}> = {
  ja:{home:"ホーム",title:"メンバー紹介",profile:"経歴を見る",aff:"現在の所属",spec:"専門分野",bio:"プロフィール",career:"主な経歴",external:"所属先プロフィールを見る",close:"閉じる"},
  en:{home:"Home",title:"Our People",profile:"View profile",aff:"Current affiliation",spec:"Areas of expertise",bio:"Professional profile",career:"Career highlights",external:"View original profile",close:"Close"},
  zh:{home:"首页",title:"成员介绍",profile:"查看履历",aff:"现任机构",spec:"专业领域",bio:"个人简介",career:"主要经历",external:"查看所属机构简介",close:"关闭"}
};

export default function MemberPage({ lang }: {lang:Lang}) {
  const c=ui[lang];
  const prefix=lang==="ja"?"":lang==="en"?"/en":"/zh";
  const dialogRefs=useRef<Record<string,HTMLDialogElement|null>>({});
  const triggerRefs=useRef<Record<string,HTMLButtonElement|null>>({});
  const open=(id:string)=> {
    const dialog=dialogRefs.current[id];
    if(dialog && !dialog.open){dialog.showModal();document.body.style.overflow="hidden";}
  };
  const close=(id:string)=>{
    dialogRefs.current[id]?.close();
  };
  const afterClose=(id:string)=>{
    document.body.style.overflow="";
    triggerRefs.current[id]?.focus();
  };
  return <>
    <Navbar solid />
    <main lang={lang==="zh"?"zh-CN":lang} className="min-h-screen flex-1 bg-white pt-20">
      <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
        <div className="mx-auto max-w-[1140px] px-5 pb-11 pt-9 sm:px-10 sm:pb-14 sm:pt-12">
          <nav aria-label={lang==="ja"?"パンくずリスト":"Breadcrumb"} className="mb-9 flex gap-3 text-xs text-[#475569]">
            <Link className="hover:text-[#0B3158] hover:underline" href={prefix||"/"}>{c.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{c.title}</span>
          </nav>
          <p className="mb-3 text-[11px] font-semibold tracking-[.22em] text-[#1766A0]">MEMBERS</p>
          <h1 className="text-[clamp(32px,4.5vw,48px)] font-semibold leading-tight text-[#0B3158]">{c.title}</h1>
        </div>
      </header>

      <section aria-label={c.title} className="bg-[#F5FAFE] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 lg:gap-6">
            {members.map(person=>{
              const info=person.info[lang];
              return <article key={person.id} className="min-w-0 bg-white shadow-[0_10px_28px_rgba(11,49,88,.055)]">
                <button type="button"
                  ref={el=>{triggerRefs.current[person.id]=el;}}
                  aria-label={info.name+" – "+c.profile}
                  aria-haspopup="dialog"
                  onClick={()=>open(person.id)}
                  className="group relative block w-full cursor-pointer overflow-hidden text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#1766A0] focus-visible:outline-offset-4">
                  <span className="relative block aspect-[3/4] overflow-hidden" style={{backgroundColor:person.photoBg}}>
                    {/* Keep the top two photos unchanged. Individually frame Matayoshi and Oh
                        within the same crop, without touching the shared card dimensions. */}
                    <span className="absolute inset-x-0 bottom-0 top-[16px]">
                      <Image src={person.image} alt={info.name} fill sizes="(max-width: 640px) 48vw, (max-width: 1024px) 45vw, 270px"
                        unoptimized className="object-cover object-center" style={{transform: person.id==="matayoshi"?"translateY(-16%) scale(1.10)":person.id==="oh"?"translateY(-12%) scale(1.30)":undefined, transformOrigin: person.id==="matayoshi"?"center 20%":person.id==="oh"?"center 17%":undefined}} />
                    </span>
                    {/* Restrict the dark overlay to the name area, entirely below faces. */}
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[27%] bg-gradient-to-t from-[#092A46]/95 via-[#092A46]/80 to-transparent"/>
                    <span className="absolute bottom-4 left-3 right-12 z-10 block text-white sm:bottom-5 sm:left-5 sm:right-14">
                      <span className="block text-[10px] tracking-[.045em] text-[#D9ECF8] sm:text-xs">{person.roman}</span>
                      <span className="mt-1 block text-lg font-semibold tracking-[.06em] sm:text-[21px]">{info.name}</span>
                      <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[.17em] text-[#BFE4F9]">PROFILE</span>
                    </span>
                    <span aria-hidden="true" className="absolute bottom-4 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/85 bg-[#07568D]/30 text-lg text-white transition-colors group-hover:bg-[#1766A0] sm:bottom-5 sm:right-4 sm:h-9 sm:w-9">↗</span>
                  </span>
                </button>
                <div className="min-h-[93px] border-x border-b border-[#D7E8F4] bg-white px-3 py-4 sm:px-5">
                  <p className="text-[12px] font-semibold leading-6 text-[#0B3158] sm:text-[13px]">{info.qualification}</p>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      {members.map(person=>{
        const info=person.info[lang];
        return <dialog key={person.id} ref={el=>{dialogRefs.current[person.id]=el;}} onClose={()=>afterClose(person.id)}
          aria-labelledby={"member-name-"+person.id}
          onClick={ev=>{if(ev.target===ev.currentTarget)close(person.id);}}
          className="fixed inset-0 m-auto max-h-[min(90vh,900px)] w-[min(94vw,860px)] overflow-y-auto rounded-lg border border-[#C9E2F0] bg-white p-0 text-[#0B3158] shadow-[0_25px_90px_rgba(4,32,58,.28)] backdrop:bg-[#052C4E]/70">
          <div className="sticky top-0 z-10 flex justify-end border-b border-[#E1EDF5] bg-white/95 p-3 backdrop-blur">
            <button type="button" onClick={()=>close(person.id)} aria-label={c.close} className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-[#0B3158] hover:bg-[#EDF5FC]">×</button>
          </div>
          <div className="grid gap-7 p-6 sm:grid-cols-[240px_1fr] sm:gap-9 sm:p-10">
            <div>
              <div className="relative aspect-[3/4] overflow-hidden" style={{backgroundColor:person.photoBg}}>
                <span className="absolute inset-x-0 bottom-0 top-[14px]">
                  <Image src={person.image} alt={info.name} fill sizes="240px" unoptimized className="object-cover object-center" style={{transform: person.id==="matayoshi"?"translateY(-16%) scale(1.06)":person.id==="oh"?"translateY(-12%) scale(1.25)":undefined, transformOrigin: person.id==="matayoshi"?"center 20%":person.id==="oh"?"center 17%":undefined}}/>
                </span>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[.22em] text-[#1766A0]">PROFILE</p>
              <h2 id={"member-name-"+person.id} className="mt-3 text-2xl font-semibold tracking-[.04em] sm:text-3xl">{info.name}</h2>
              <p className="mt-1 text-sm text-[#667D8D]">{person.roman}</p>
              <p className="mt-4 border-b border-[#E1EDF5] pb-5 text-[14px] font-semibold leading-7">{info.qualification}</p>
              <h3 className="mt-5 text-xs font-bold text-[#1766A0]">{c.aff}</h3>
              <p className="mt-2 text-sm leading-7 text-[#475569]">{info.affiliation}</p>
              <h3 className="mt-6 text-xs font-bold text-[#1766A0]">{c.spec}</h3>
              <div className="mt-3 flex flex-wrap gap-2">{info.specialties.map(s=><span key={s} className="bg-[#EDF5FC] px-3 py-1.5 text-[12px] text-[#0B3158]">{s}</span>)}</div>
              <h3 className="mt-7 text-xs font-bold text-[#1766A0]">{c.bio}</h3>
              <p className="mt-3 text-sm leading-8 text-[#475569]">{info.bio}</p>
              <h3 className="mt-7 text-xs font-bold text-[#1766A0]">{c.career}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[#475569]">{info.career.map(item=><li key={item} className="border-l-2 border-[#9BCBE6] pl-3">{item}</li>)}</ul>
              <a href={person.link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex border-b border-[#1766A0] pb-1 text-sm font-semibold text-[#1766A0] hover:text-[#0B3158]">{c.external} ↗</a>
            </div>
          </div>
        </dialog>;
      })}
    </main>
    <Footer />
  </>;
}
