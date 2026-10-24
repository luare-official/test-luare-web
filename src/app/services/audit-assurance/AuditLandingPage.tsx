import { readFileSync } from "node:fs";
import { join } from "node:path";
import "./audit-assurance.css";

/**
 * LP-D01 / 会計監査対応・Group Audit
 * The approved, static HTML source is stored beside this component as
 * audit-approved.html, with styles isolated in audit-assurance.css.
 * It is read at build/prerender time (no browser fetch or client script).
 * Only a reviewed, repository-controlled fragment is rendered here.
 */
const approvedMarkup = readFileSync(
  join(process.cwd(), "src/app/services/audit-assurance/audit-approved.html"),
  "utf8",
);

export default function AuditLandingPage() {
  return (
    <div
      id="luare-audit-lp"
      dangerouslySetInnerHTML={{ __html: approvedMarkup }}
    />
  );
}
