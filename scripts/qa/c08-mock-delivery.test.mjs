import {test} from "node:test";
import assert from "node:assert/strict";
import {createDeliverySimulator} from "./c08-mock-delivery.mjs";
const valid=(id="ORDER001",email="sample@example.invalid")=>({
 requestId:id, company:"Synthetic Co", name:"Test User", email, privacyConsent:true
});
test("one request yields exactly one mock PDF message (no verification message)",()=>{
 const s=createDeliverySimulator();
 const r=s.request(valid());
 assert.equal(r.status,"accepted_mock");
 assert.equal(r.mailCountForRequest,1);
 assert.equal(s.getMockMailCount(),1);
 assert.equal(s.getMockMailLog()[0].kind,"pdf-attachment-mock");
});
test("same request ID and content deduplicates",()=>{
 const s=createDeliverySimulator();
 s.request(valid()); assert.equal(s.request(valid()).status,"duplicate");
 assert.equal(s.getMockMailCount(),1);
});
test("same request ID with changed address rejects",()=>{
 const s=createDeliverySimulator();
 s.request(valid());const response=s.request(valid("ORDER001","other@example.invalid"));
 assert.deepEqual(response,{status:"rejected",reason:"idempotency_conflict"});
 assert.equal(s.getMockMailCount(),1);
});
test("unauthorized real-world email domains are rejected",()=>{
 const s=createDeliverySimulator();
 assert.equal(s.request(valid("ORDER002","client@example.com")).reason,"synthetic_address_only");
 assert.equal(s.getMockMailCount(),0);
});
test("PDF not approved blocks delivery",()=>{
 const s=createDeliverySimulator({requirePdfApproval:false});
 assert.equal(s.request(valid()).reason,"pdf_unapproved"); assert.equal(s.getMockMailCount(),0);
});
test("provider error blocks delivery without repeating",()=>{
 const s=createDeliverySimulator({outage:true});
 assert.equal(s.request(valid()).reason,"provider_unavailable"); assert.equal(s.getMockMailCount(),0);
});
test("daily limit blocks third request to same synthetic address",()=>{
 const s=createDeliverySimulator({dailyLimit:2});
 assert.equal(s.request(valid("ORDER001")).status,"accepted_mock");
 assert.equal(s.request(valid("ORDER002")).status,"accepted_mock");
 assert.equal(s.request(valid("ORDER003")).reason,"rate_limited");
 assert.equal(s.getMockMailCount(),2);
});
test("invalid email format rejected",()=>{
 const s=createDeliverySimulator();
 assert.equal(s.request(valid("ORDER001","not-an-email")).reason,"email_invalid");
 assert.equal(s.getMockMailCount(),0);
});
test("missing privacy agreement rejected",()=>{
 const s=createDeliverySimulator();
 assert.equal(s.request({...valid(),privacyConsent:false}).reason,"required_fields");
 assert.equal(s.getMockMailCount(),0);
});
test("missing customer name rejected",()=>{
 const s=createDeliverySimulator();
 assert.equal(s.request({...valid(),name:""}).reason,"required_fields");
 assert.equal(s.getMockMailCount(),0);
});
test("request ID collision/conflict stops sending",()=>{
 const s=createDeliverySimulator();
 assert.equal(s.request({...valid(),requestId:"bad"}).reason,"id_invalid");
 assert.equal(s.getMockMailCount(),0);
});
test("fields beyond configured limits rejected",()=>{
 const s=createDeliverySimulator();
 assert.equal(s.request({...valid(),company:"x".repeat(101)}).reason,"length_invalid");
 assert.equal(s.getMockMailCount(),0);
});
test("case difference in address counts toward same rate limit",()=>{
 const s=createDeliverySimulator({dailyLimit:1});
 assert.equal(s.request(valid("ORDER001","Sample@Example.invalid")).status,"accepted_mock");
 assert.equal(s.request(valid("ORDER002","sample@example.invalid")).reason,"rate_limited");
 assert.equal(s.getMockMailCount(),1);
});
