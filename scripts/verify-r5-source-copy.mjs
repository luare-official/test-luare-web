#!/usr/bin/env node
// Regression checks for user's original Luare_HP_Public_Preview_r5.html.
// Keep the source terminology; do not invent that fees were historic or hypothetical.
import {existsSync,readFileSync} from "node:fs";
const read=(stem)=>{
 const p=["out/"+stem+".html","out/"+stem+"/index.html"].find(existsSync);
 if(!p)throw new Error("Missing static page "+stem);
 return readFileSync(p,"utf8");
};
const price=read("pricing");
const en=read("en/pricing");
const zh=read("zh/pricing");
const fail=[];
const ok=(t,msg)=>{if(!t)fail.push(msg);};
for(const t of ["料金のご案内","基本的な料金体系","プロジェクト別の費用目安","お見積りについて","業務の専門性、支援体制、必要工数に応じて個別にお見積りします。","プロジェクトの目的、成果物、対象拠点、必要工数を確認し、支援内容を明確にした上で個別にご提案します。"])
 ok(price.includes(t),"Missing original r5 fee text: "+t);
const titles=["北米事業のFP&amp;A・KPI高度化支援","企業グループの決算実務・改善支援","海外事業拠点のJ-SOX 3点セット構築"];
const norm=price.replaceAll("&amp;","&");
const named=titles.map(t=>t.replaceAll("&amp;","&"));
for(const t of named)ok(norm.includes(t),"Missing original project: "+t);
ok(named.every((t,i)=>i===0||norm.indexOf(named[i-1])<norm.indexOf(t)),"Original r5 project order changed");
for(const t of ["エンターテインメント関連｜北米事業","国内の企業グループ","海外事業法人を有するフィンテック関連グループ",
"予実分析、事業KPI分析、指標の精度改善を支援する場合",
"CF資料、締め工程の可視化と改善施策の検討・実行を支援する場合",
"3点セットのゼロベース作成、評価準備・関係者対応を支援する場合",
"6か月総額（税別）","6,480,000円","5,760,000円","2,880,000円"])
 ok(norm.includes(t),"Original project detail missing: "+t);
for(const extra of ["各例は想定条件に基づく計算です。","過去の実績金額ではありません","支援内容別の参考試算","参考試算総額",
"Figures are hypothetical calculations","not actual past fees","不代表统一定价、历史成交金额"])
 ok(![price,en,zh].some(x=>x.includes(extra)),"Unrequested fee disclaimer remains: "+extra);
for(const [path,titles] of [
 ["services/accounting-management",["会計・決算・経営管理支援","月次・年次・連結決算支援","経理・財務実務支援／アウトソーシング","予算管理・FP&A／事業KPI分析","キャッシュ・フロー作成支援","会計アドバイザリー・監査対応支援"]],
 ["services/finance-ops",["業務改善・AI・システム支援","決算早期化・業務標準化","業務可視化・プロセス改善","AIを活用した経理業務効率化","システム導入・データ移行支援","業務ルール・運用体制の整備"]],
 ["services/global-finance",["日本進出・海外拠点支援","日本法人設立準備・専門家連携","Finance Setup・経理体制構築","記帳・決算・レポーティング代行","海外子会社管理・本社報告","日英中での業務・プロジェクト調整"]]
]){const h=read(path).replaceAll("&amp;","&");for(const t of titles)ok(h.includes(t),path+" missing "+t);ok(!h.includes("こんなお悩みはありませんか"),path+" has independently added concern cards");}
if(fail.length){for(const e of fail)console.error("FAIL",e);process.exitCode=1;}
else console.log("PASS: original r5 fees, industries, project ordering, 3×5 service scopes and source disclaimer fidelity");
