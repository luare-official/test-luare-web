// Offline contract: no runtime analytics and no external calls.
// Prevent accidental personal or free-text payloads before any future GA4 integration.
const events = new Set([
  "luare_pricing_cta_click",
  "luare_pricing_form_view",
  "luare_pricing_submit_attempt",
  "luare_pricing_submit_accepted",
  "luare_pricing_submit_rejected",
  "luare_contact_cta_click",
]);
const pageAreas = new Set(["home","services","bpo","pricing","contact","other"]);
const serviceCats = new Set(["general","audit","accounting","finance_ops","global","bpo","other"]);
const failureCats = new Set(["validation","rate_limited","provider_error","other"]);
const keySets = new Map([
 ["luare_pricing_cta_click",new Set(["page_area","service_category"])],
 ["luare_pricing_form_view",new Set(["page_area"])],
 ["luare_pricing_submit_attempt",new Set(["page_area"])],
 ["luare_pricing_submit_accepted",new Set(["page_area"])],
 ["luare_pricing_submit_rejected",new Set(["failure_category"])],
 ["luare_contact_cta_click",new Set(["page_area"])],
]);
export function validateAnonymousEvent(name, payload) {
 if(typeof name!=="string"||!events.has(name)) return {valid:false,reason:"event_not_allowed"};
 if(!payload || typeof payload!=="object" || Array.isArray(payload) || Object.getPrototypeOf(payload)!==Object.prototype)
   return {valid:false,reason:"invalid_payload"};
 const allowed=keySets.get(name);
 for (const [key,val] of Object.entries(payload)) {
   if(!allowed.has(key))return {valid:false,reason:"parameter_not_allowed"};
   if(typeof val!=="string") return {valid:false,reason:"value_not_enum"};
   const possible=key==="page_area"?pageAreas:key==="service_category"?serviceCats:failureCats;
   if(!possible.has(val)) return {valid:false,reason:"value_not_enum"};
 }
 // Require exact minimal scheme to avoid silent incomplete analytics dimensions.
 if(name==="luare_pricing_cta_click" && !("page_area" in payload)) return {valid:false,reason:"page_area_required"};
 if(name==="luare_contact_cta_click" && !("page_area" in payload)) return {valid:false,reason:"page_area_required"};
 if(name==="luare_pricing_submit_rejected" && !("failure_category" in payload))return {valid:false,reason:"failure_category_required"};
 if(["luare_pricing_form_view","luare_pricing_submit_attempt","luare_pricing_submit_accepted"].includes(name)&&payload.page_area!=="pricing")
   return {valid:false,reason:"pricing_page_only"};
 return {valid:true,name,params:Object.freeze({...payload})};
}
