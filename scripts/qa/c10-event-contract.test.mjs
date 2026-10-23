import {test} from "node:test";
import assert from "node:assert/strict";
import {validateAnonymousEvent as v} from "./c10-event-contract.mjs";
test("known pricing CTA with no identifying information is accepted",()=>{
 assert.equal(v("luare_pricing_cta_click",{page_area:"services",service_category:"audit"}).valid,true);
});
test("successful submit must be in pricing area",()=>{
 assert.equal(v("luare_pricing_submit_accepted",{page_area:"pricing"}).valid,true);
 assert.equal(v("luare_pricing_submit_accepted",{page_area:"home"}).valid,false);
});
test("email address as a key is blocked",()=>{
 assert.equal(v("luare_pricing_submit_accepted",{page_area:"pricing",email:"client@example.com"}).reason,"parameter_not_allowed");
});
test("name and company keys are blocked",()=>{
 assert.equal(v("luare_pricing_cta_click",{page_area:"home",name:"Sample"}).valid,false);
 assert.equal(v("luare_pricing_cta_click",{page_area:"home",company:"SampleCorp"}).valid,false);
});
test("free text embedded in service category is blocked",()=>{
 assert.equal(v("luare_pricing_cta_click",{page_area:"services",service_category:"sample@example.com"}).reason,"value_not_enum");
});
test("paths and query strings are never forwarded",()=>{
 assert.equal(v("luare_contact_cta_click",{page_area:"home",path:"/pricing?email=client@example.com"}).reason,"parameter_not_allowed");
});
test("arbitrary event names are rejected",()=>{
 assert.equal(v("purchase",{value:"100000"}).reason,"event_not_allowed");
});
test("exact failure categories permitted; details blocked",()=>{
 assert.equal(v("luare_pricing_submit_rejected",{failure_category:"rate_limited"}).valid,true);
 assert.equal(v("luare_pricing_submit_rejected",{failure_category:"other",detail:"client@example.com"}).valid,false);
});
test("technical tracking tokens are blocked",()=>{
 assert.equal(v("luare_pricing_submit_accepted",{page_area:"pricing",request_id:"abc"}).valid,false);
});
test("all allowed dimensions must be enums, never numbers or objects",()=>{
 assert.equal(v("luare_contact_cta_click",{page_area:3}).reason,"value_not_enum");
 assert.equal(v("luare_contact_cta_click",{page_area:{x:"home"}}).reason,"value_not_enum");
});
test("non-plain objects, arrays, and null payloads are rejected",()=>{
 assert.equal(v("luare_pricing_form_view",[]).valid,false);
 assert.equal(v("luare_pricing_form_view",null).valid,false);
});
test("missing required dimension is rejected",()=>{
 assert.equal(v("luare_pricing_submit_rejected",{}).reason,"failure_category_required");
 assert.equal(v("luare_contact_cta_click",{}).reason,"page_area_required");
});
test("unknown traffic source not permitted as free text",()=>{
 assert.equal(v("luare_pricing_form_view",{page_area:"pricing",referrer:"https://example.com"}).valid,false);
});
