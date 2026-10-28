/** English service/case/article labels translated from the current Japanese HP and r5 master. */
export const enServices=[
{slug:"internal-control",title:"Internal Control, J-SOX & Internal Audit",lead:"Practical support from control design and documentation through evaluation and improvement.",items:[
["Internal Control and J-SOX Framework","Assess business risks, existing controls and ownership to establish a practical internal control framework."],
["Three Core J-SOX Documents","Prepare and update narratives, flowcharts and risk-control matrices (RCMs) based on interviews with process owners."],
["Design and Operating Effectiveness","Support control design reviews, operating effectiveness testing, evidence collection and remediation."],
["Internal Audit and Control Improvement","Scope risk-based reviews, coordinate internal audits and follow up on corrective measures."],
["Internal Control Training","Explain control objectives, responsibilities and required evidence to relevant teams."]]},
{slug:"accounting-management",title:"Accounting, Closing & Management Reporting",lead:"Reliable accounting information and practical financial insights for management decisions.",items:[
["Monthly, Annual and Consolidated Closing","Support accounting reconciliations, closing schedules, consolidation packages and interdepartmental coordination."],
["Accounting and Finance Operations","Assist day-to-day finance work and define responsibilities when teams face staff shortages or workload peaks."],
["Budgeting, FP&A and KPI Analysis","Connect operational drivers with financial performance and build budget-variance and KPI processes."],
["Cash Flow Reporting","Support cash flow preparation and reconciliations using financial statements and supporting schedules."],
["Accounting Advisory and Audit Preparation","Help resolve accounting issues, prepare audit evidence and respond to auditors' questions."]]},
{slug:"finance-ops",title:"Finance Process Improvement, AI & Systems",lead:"Design practical finance workflows and support responsible technology adoption.",items:[
["Faster Closing and Standardization","Improve close timing by examining the quality and availability of source data and the timing of handoffs."],
["Process Mapping and Improvement","Clarify process owners, tasks and controls to reduce duplication and dependency on individuals."],
["AI-Enabled Finance Efficiency","Identify appropriate opportunities for automation while protecting sensitive data and retaining human review."],
["Systems Implementation and Data Migration","Support requirements, reconciliations, migration planning and post-implementation workflows."],
["Finance Policies and Operating Controls","Document approval, verification, escalation and handover procedures for sustained operations."]]},
{slug:"global-finance",title:"Japan Market Entry & Cross-Border Finance",lead:"Bridge local Japanese finance practices and overseas headquarters' reporting needs.",items:[
["Japan Subsidiary Setup Coordination","Organize finance-related setup work and coordinate with registration, tax and other specialists."],
["Finance Setup and Operating Design","Establish account structures, systems requirements, closing calendars and approval workflows."],
["Bookkeeping, Closing and HQ Reporting","Support Japan subsidiary bookkeeping, monthly close and management reports for overseas headquarters."],
["Overseas Subsidiary Management","Reconcile group reporting requirements with local finance information and reporting packages."],
["Japanese / English / Chinese Coordination","Facilitate clear communication among headquarters, Japan teams and professional advisers."]]},
{slug:"audit-assurance",title:"Audit & Assurance Coordination",lead:"Coordinate appropriate statutory, voluntary and group audit support with partner audit firms.",items:[
["Statutory Audit Inquiries","Clarify statutory audit requirements and connect clients with an appropriate partner audit firm."],
["Voluntary Audit Inquiries","Discuss the purpose and scope of voluntary audits and coordinate the engagement approach."],
["Group Audit and Cross-Border Communication","Support audit requests and communication between headquarters, Japan entities and auditors."],
["Audit Readiness and Issue Resolution","Assist with PBC schedules, accounting matters and responses to audit inquiries."],
["Other Assurance Engagements","Discuss specific assurance needs and coordinate with appropriately qualified firms."]]}
] as const;
export const enCases:Record<string,{title:string;type:string;industry:string;impact:string;intro:string;issues:string[];actions:string[];model?:boolean}>={
"case-close":{title:"Connecting Complex Operational Data with a Faster Financial Close",type:"Closing & Process Improvement",industry:"Energy-related diversified corporate group",impact:"Look beyond the closing entries to the process that delivers the underlying data.",intro:"Accounting and cash-flow support for a diversified energy-related group, with a focus on source data, interdepartmental coordination and closing accuracy.",issues:["Different data consolidation requirements across businesses","Limited staff and continuity of closing operations","Misaligned deadlines between operations and accounting"],actions:["Support closing and cash-flow schedules","Map and improve operational data handoffs","Review data accuracy, availability and close timing"]},
"case-music":{title:"Embedding Global Internal Controls in Day-to-Day Operations",type:"Internal Control & Global Business",industry:"Music and entertainment multinational group",impact:"Translate group-level requirements into sustainable local control practices.",intro:"Internal control support for a multinational entertainment group, accounting for business-specific workflows.",issues:["Alignment between group requirements and local practices","Responsibilities spread across departments","Need for operating evidence and clear explanations"],actions:["Identify business and control issues","Clarify roles and operating procedures","Support documentation, evidence and improvements"]},
"case-jsox":{title:"Building J-SOX Process Documentation for an Overseas Operation",type:"IPO Preparation & J-SOX",industry:"Fintech group with Japan holding and Taiwan operations",impact:"Bridge Japan listing requirements and Taiwan operations to document and evaluate controls.",intro:"Supported J-SOX preparation for a fintech group planning a Japan listing, including process interviews, core control documents and audit coordination.",issues:["Explaining J-SOX objectives to local owners","Differences in language and operating practices","Documentation and evaluation for listing and audit requirements"],actions:["Interview local process owners","Develop narratives, flowcharts and RCMs","Coordinate evaluation readiness and audit issues"]},
"case-fpa":{title:"FP&A Operating Model Connecting North American Data to Decisions",type:"FP&A Service Model",industry:"North American operations — illustrative model",impact:"Design a sustainable management cycle linking daily operations, KPIs and budget analysis.",intro:"An illustrative service model for aligning operational and financial metrics between North American business teams and headquarters.",issues:["Time-zone and communication differences","Weak links between business activity and finance metrics","HQ-heavy reporting processes"],actions:["Map operational data generation","Define business KPIs and budget analysis","Establish an ongoing review cycle"],model:true}
};
export const enInsights=[
{slug:"close-process-early-improvement",category:"Closing & Process Improvement",title:"A Faster Close Starts Before the Accounting Team",excerpt:"Review source-data handoffs and approvals to improve closing speed without sacrificing accuracy."},
{slug:"overseas-jsox-three-documents",category:"Internal Control & J-SOX",title:"Overseas J-SOX: Understand the Work Before Drafting the Documents",excerpt:"Review actual operations, responsibilities and evidence before preparing narratives, flowcharts and RCMs."},
{slug:"japan-subsidiary-finance-setup",category:"Japan Market Entry",title:"Five Early Decisions for a Japan Subsidiary's Finance Setup",excerpt:"Consider approvals, monthly close and headquarters reporting together, not only the accounting system."}
] as const;
