import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Analytics Privacy and Data Processing Terms",
  description: "How MEMO AI, Inc. handles data for the free MemoLogs Shopify analytics app.",
  alternates: { canonical: "/shopify-privacy" },
};

const sections = [
  {
    id: "scope", title: "The free Shopify analytics service",
    content: <>
      <p>These terms apply to the public MemoLogs Shopify analytics connection operated by MEMO AI, Inc., a Delaware corporation, at 960 W 7TH ST, Los Angeles, CA 90017, United States. Privacy, security and support contact: <a href="mailto:ritvik@memologs.com">ritvik@memologs.com</a>.</p>
      <p><strong>Launch status.</strong> The public MemoLogs Shopify app is being prepared for launch. The retention schedules, security controls and processing commitments below are requirements for activating the public Shopify connection; they are not an attestation that prelaunch deployment verification has already been completed. Public collection is activated only after the corresponding controls are deployed and verified. These commitments apply to this Shopify connection and do not describe other MemoLogs products.</p>
      <p>The Shopify app is free. Its daily sales and order report does not require a paid MemoLogs subscription or a Meta or Google advertising account. Other MemoLogs products may have separate pricing.</p>
      <p>These terms form part of the <Link href="/terms">MemoLogs Terms and Conditions</Link> when an authorized merchant uses or authorizes the Shopify connection. They supplement the <Link href="/privacy">Privacy Policy</Link> and control for Shopify data where either general document permits broader processing. Existing governing-law and dispute provisions remain unchanged. Mandatory privacy rights are not limited by the service being free.</p>
    </>,
  },
  {
    id: "instructions", title: "Your instructions and our role",
    content: <>
      <p>The merchant determines the purposes of its customer data and is the controller; MEMO AI processes that data on the merchant’s behalf. If you act for a merchant, you must have its authority. Authorizing the connection instructs us to read the approved store data, minimize and aggregate it, provide private reporting, and operate security, support and privacy-request handling.</p>
      <p>Merchant-specific statistical analysis requires the current, versioned authorization shown in the app. That authorization does not permit external AI processing, advertising activation or shared training. We process Shopify data only for the documented service instructions or a specific applicable legal obligation, and will flag instructions we believe conflict with applicable data-protection requirements.</p>
      <p>The merchant remains responsible for lawful collection and any required shopper notices and consent. Connecting a store does not waive shopper rights or authorize significant-effect automated decisions about individuals.</p>
    </>,
  },
  {
    id: "data", title: "Data used and reporting coverage",
    content: <>
      <p>We read authorized order dates, merchandise values and discounts, product information, and the city, state, country and postal information needed to resolve reporting geography. Historical-order access supports bounded reporting history. We retain store-level daily and geographic reporting facts and their source ownership, connection credentials in encrypted form, import status, authorization records, and limited privacy/security metadata.</p>
      <p>Routine analytics does not collect customer names, email addresses, phone numbers, street-address lines, payment credentials or a customer list. Shopify privacy requests can contain customer or order identifiers and contact fields; we authenticate those deliveries, discard unnecessary fields and restrict retained request information to fulfillment needs.</p>
      <p>The initial report includes eligible US orders with resolved geography. Test orders and unresolved or non-US geography are excluded. Revenue means merchandise after discounts and before returns, tax, shipping and fees. The report explains this coverage; it may differ from Shopify totals.</p>
    </>,
  },
  {
    id: "restrictions", title: "No advertising use or external AI processing",
    content: <>
      <p>We do not sell Shopify data, share it for cross-context behavioral advertising, use it to create advertising audiences or match people across platforms, or combine merchants’ Shopify data for our own benefit. Website advertising or analytics provisions in the general Privacy Policy do not authorize these uses of Shopify data.</p>
      <p>We do not use this connection’s Shopify data or derived outputs to train, fine-tune or improve generalized or shared AI models or cross-merchant pattern collections. External inference and embedding providers, including OpenAI, Anthropic, Gemini and Jev, are not enabled recipients of this profile’s Shopify data. No AI subprocessor is authorized by this notice. An unavailable AI feature does not prevent the free sales report.</p>
    </>,
  },
  {
    id: "providers", title: "Infrastructure providers and international processing",
    content: <>
      <p>Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States, provides the application’s Google Cloud hosting, database, storage and operational logging. Primary application hosting and Cloud SQL are in us-central1 in the United States. Google’s permitted support and onward processing can occur in other countries under its applicable terms; a storage region is not a promise that all processing stays in that region.</p>
      <p>Google’s <a href="https://cloud.google.com/terms/data-processing-addendum">Cloud Data Processing Addendum</a> and <a href="https://cloud.google.com/terms/subprocessors">subprocessor register</a> describe its processing obligations and onward providers. We require applicable written data-protection obligations for service providers and remain responsible for our processor obligations. This notice does not assert that MEMO AI holds Google’s certifications or Data Privacy Framework certification.</p>
      <p>We will give affected merchants at least 30 days’ notice before a new or replacement subprocessor receives Shopify data. A merchant may object on reasonable data-protection grounds by emailing our privacy contact. We will seek an alternative or mitigation; if unresolved, the merchant can stop the affected processing and export or delete its data without a termination penalty.</p>
      <p>Where a restricted international transfer requires additional safeguards, the parties must establish the applicable transfer instrument before that transfer. This notice does not represent that an incomplete transfer annex has been executed. Contact us before authorizing processing that requires additional contractual safeguards.</p>
    </>,
  },
  {
    id: "retention", title: "Retention and deletion",
    content: <>
      <p>Reporting facts, source ownership and geographic inputs have a maximum rolling retention of 25 months measured from the underlying source date. Earlier valid erasure requests, revoked permissions and source expiry take priority. Temporary reports and downloadable privacy exports expire after seven days; exports are also removed after their first authorized retrieval. Application cache and task payloads have a 24-hour retention ceiling. Payload-free access audit records are kept for 30 days.</p>
      <p>Uninstall or revocation stops collection. We target active-system deletion within seven calendar days and fulfill applicable Shopify privacy requests within 30 calendar days of receipt, subject to a specific legal obligation requiring limited retention. Requests are tracked until verified fulfillment. Automation and manual operations may both be used; receiving a webhook or queuing work is not a claim that deletion is complete.</p>
      <p>Privacy fulfillment includes affected source data and attributable derived copies. We preserve independent sources and other merchants’ data. When ownership or identification is ambiguous, we pause affected processing and review the request rather than claim completion. Minimal completion evidence is retained only for a documented operational or legal need with a finite expiry.</p>
      <p>Production database backups are encrypted. The configured recovery schedule retains 15 successful daily backups and seven days of point-in-time recovery. Deleted records can remain temporarily in restricted recovery copies until expiry; those copies are not used for analytics. Restored data must remain quarantined until applicable erasures have been reapplied. This schedule does not claim immediate physical removal from every cloud-provider storage medium.</p>
    </>,
  },
  {
    id: "rights", title: "Privacy requests and merchant assistance",
    content: <>
      <p>Shopify’s authenticated customer-data access, customer-redaction and store-redaction requests enter our tracked privacy process. Authorized workspace owners and administrators can inspect request status and retrieve a ready export through the Shopify integration. An export of retained aggregates is described as such; we do not fabricate individual order histories that we do not retain.</p>
      <p>Merchants and their authorized representatives can also contact <a href="mailto:ritvik@memologs.com">ritvik@memologs.com</a> for access, correction, return, deletion, restriction, objection and other applicable rights. Shoppers should normally contact their merchant so it can verify and direct the request. We verify authority before disclosing data, notify the merchant of relevant direct requests unless prohibited, and reasonably assist it with data-subject requests, security duties and privacy assessments.</p>
    </>,
  },
  {
    id: "security", title: "Security, incidents and accountability",
    content: <>
      <p>Our operating controls include organization-scoped access, encrypted credentials, authenticated OAuth and webhooks, restricted production access, separate synthetic test data, protected access logs, retention controls and reviewed releases. Personnel authorized for exceptional operational duties are subject to confidentiality and least privilege. Routine staff access to customer data is not permitted. The service requires encryption at rest and in transit and strong staff-account passwords.</p>
      <p>Report a suspected incident to <a href="mailto:ritvik@memologs.com">ritvik@memologs.com</a>. We investigate and contain incidents, preserve appropriate evidence, and notify affected merchants of a personal-data breach without undue delay, with an outside notification target of 24 hours after awareness. Initial notices may be supplemented as facts become available. Our separate obligations to notify Shopify also apply.</p>
      <p>We provide information reasonably necessary to demonstrate our processing obligations and cooperate with appropriate merchant or regulator inquiries and audits, with safeguards for confidentiality and other customers. We do not claim that MEMO AI is SOC 2 or ISO certified. If we cannot meet an applicable processing obligation, we will inform the merchant and support corrective action or cessation of the affected processing.</p>
    </>,
  },
];

export default function ShopifyPrivacyPage() {
  return <main className="privacy-page">
    <section className="subpage-hero privacy-hero"><div className="wrap">
      <div className="sp-breadcrumb"><Link href="/">MemoLogs</Link> <span>›</span> Shopify privacy</div>
      <div className="eyebrow"><span className="dot" /> MEMO AI, Inc.</div>
      <h1>Shopify analytics <em>privacy and data processing.</em></h1>
      <p className="lede">The data, purposes, providers and privacy process for the free MemoLogs Shopify analytics connection.</p>
      <div className="privacy-meta"><span>Version shopify-privacy-2026-10-19 · Updated October 19, 2026</span><a href="mailto:ritvik@memologs.com">ritvik@memologs.com</a></div>
    </div></section>
    <section className="sp-section privacy-section"><div className="wrap privacy-layout">
      <aside className="privacy-toc" aria-label="Shopify privacy sections"><span className="privacy-toc-title">Sections</span>{sections.map(s => <a key={s.id} href={`#${s.id}`}>{s.title}</a>)}</aside>
      <div className="privacy-content">{sections.map((s,i) => <article key={s.id} id={s.id} className="privacy-card"><span className="privacy-kicker">{String(i+1).padStart(2,"0")}</span><h2>{s.title}</h2>{s.content}</article>)}</div>
    </div></section>
  </main>;
}
