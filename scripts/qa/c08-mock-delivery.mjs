/**
 * C-08 strictly local in-memory contract simulator.
 * NOT a production API, NOT an email implementation. No network or file IO.
 * Only synthetic addresses from reserved .invalid domain are accepted.
 * Data used here must not be real customer data.
 */
export function createDeliverySimulator({dailyLimit = 2, requirePdfApproval = true, outage = false} = {}) {
  const ledger = new Map();
  const countByAddress = new Map();
  const mailbox = [];
  function request({requestId, company, name, email, privacyConsent} = {}) {
    if (typeof requestId !== "string" || !/^[A-Za-z0-9_-]{6,72}$/.test(requestId)) return {status:"rejected",reason:"id_invalid"};
    if (!company || !name || !email || privacyConsent !== true) return {status:"rejected",reason:"required_fields"};
    if (company.length > 100 || name.length > 80 || email.length > 254) return {status:"rejected",reason:"length_invalid"};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {status:"rejected",reason:"email_invalid"};
    const address = email.trim().toLowerCase();
    // Never let live addresses be used in tests, even if incorrectly passed by a caller.
    if (!address.endsWith(".invalid")) return {status:"rejected",reason:"synthetic_address_only"};
    const payloadHash = JSON.stringify([company,name,address,privacyConsent]);
    if (ledger.has(requestId)) {
      const prior = ledger.get(requestId);
      return prior.payloadHash === payloadHash
        ? {status:"duplicate",count:mailbox.length}
        : {status:"rejected",reason:"idempotency_conflict"};
    }
    if (!requirePdfApproval) return {status:"blocked",reason:"pdf_unapproved"};
    if (outage) return {status:"blocked",reason:"provider_unavailable"};
    const used = countByAddress.get(address) ?? 0;
    if (used >= dailyLimit) return {status:"blocked",reason:"rate_limited"};
    // Store only synthetic messages; never call fetch, email libraries or real APIs.
    mailbox.push(Object.freeze({requestId,recipient:address,kind:"pdf-attachment-mock"}));
    countByAddress.set(address,used+1);
    ledger.set(requestId,{payloadHash});
    return {status:"accepted_mock",count:mailbox.length,mailCountForRequest:1};
  }
  return Object.freeze({request, getMockMailCount:()=>mailbox.length, getMockMailLog:()=>[...mailbox]});
}
