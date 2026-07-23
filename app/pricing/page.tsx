import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing — Flat Fee, Never % of Spend",
  description: "Creative IQ is self-serve — start free. Full platform: $25K 90-day pilot, Growth $15–35K/mo flat, Enterprise custom. We never charge a % of your spend.",
};

export default function PricingPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">Memologs</Link> <span>›</span> Pricing</div>
          <div className="eyebrow"><span className="dot"></span> Flat fee · never % of spend</div>
          <h1>Simple, transparent,<br /><em>aligned with you.</em></h1>
          <p className="lede">Most measurement vendors charge a percentage of media spend — which means the more money you waste, the more they earn. We charge a flat fee. When you cut ghost conversions, we don&apos;t lose revenue. We win the next pilot.</p>
          <p className="lede" style={{ marginTop: 14 }}>Just want to try Creative IQ? It&apos;s self-serve — <a href="https://app.memologs.com/" style={{ color: "var(--teal)", fontWeight: 600 }}>connect your Meta account</a> and start free. The tiers below are for the full platform.</p>
        </div>
      </section>

      <section className="sp-section">
        <div className="wrap">
          <div className="price-grid">
            <div className="price-col">
              <div className="price-tag">Pilot</div>
              <h3 className="price-name">90-Day Pilot</h3>
              <p className="price-desc">See the methodology on your real data before committing. Pilot fee credited 100% toward a 12-month contract.</p>
              <div className="price-num">$25K<small>total · 90 days</small></div>
              <ul className="price-list">
                <li>One geo-lift study with tri-model consensus (GeoTwin · CausalCore · DiffLens)</li>
                <li>Creative IQ health scoring — top 30 assets</li>
                <li>Audience IQ activation — Meta / Google / TikTok sync</li>
                <li>Dedicated account team</li>
                <li>Weekly executive readout</li>
                <li>Final board-ready impact report</li>
              </ul>
              <div className="price-cta"><PilotCTA className="btn btn-ghost">Start a pilot →</PilotCTA></div>
            </div>

            <div className="price-col featured">
              <span className="price-featured-ribbon">Most common</span>
              <div className="price-tag">Growth</div>
              <h3 className="price-name">Full Platform</h3>
              <p className="price-desc">All five IQ products. Built for operators running $500K–$5M/mo in paid media who need the whole system.</p>
              <div className="price-num">$15–35K<small>/ mo · flat fee</small></div>
              <ul className="price-list">
                <li>All 5 IQ products, unlimited usage</li>
                <li>Always-on geo-lift (quarterly studies)</li>
                <li>Full creative fatigue monitoring</li>
                <li>All 4 audience agents, cross-platform sync</li>
                <li>AI Co-Pilot · unlimited queries</li>
                <li>Memory IQ · decision logging + patterns</li>
                <li>Dedicated customer success team</li>
                <li>Slack + email support, 1-business-day SLA</li>
              </ul>
              <div className="price-cta"><PilotCTA className="btn btn-primary" modalTitle="Book a scoping call">Book a scoping call →</PilotCTA></div>
            </div>

            <div className="price-col">
              <div className="price-tag">Enterprise</div>
              <h3 className="price-name">Enterprise</h3>
              <p className="price-desc">For holding companies, multi-brand portfolios, and orgs running $5M+/mo. Custom data residency and SLA.</p>
              <div className="price-num">Custom<small>multi-brand / multi-region</small></div>
              <ul className="price-list">
                <li>Everything in Full Platform</li>
                <li>Multi-account governance + roll-up views</li>
                <li>Cross-brand pattern learning (permissioned)</li>
                <li>Custom data residency (US / EU / APAC)</li>
                <li>Dedicated solutions architect</li>
                <li>Custom DPA</li>
                <li>Quarterly executive business review</li>
                <li>Named phone support</li>
              </ul>
              <div className="price-cta"><PilotCTA className="btn btn-ghost" modalTitle="Talk to sales" modalSubtitle="Tell us about your account. A solutions architect will reach out within one business day.">Talk to sales →</PilotCTA></div>
            </div>
          </div>

          <div className="sp-cta-inline" style={{ marginTop: '40px' }}>
            <div>
              <h3>Why not % of spend?</h3>
              <p>If your measurement vendor earns more when your spend grows, they&apos;re not incentivized to cut waste. We refuse that model on principle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section alt">
        <div className="wrap">
          <div className="section-head">
            <span className="section-kicker"><span className="num">02</span> Questions you might ask</span>
            <h2 className="section-title">FAQ.</h2>
          </div>
          <div className="sp-method">
            <ol>
              <li><div><b>Does the pilot fee really credit 100%?</b><p>Yes. If you sign an annual Full Platform contract within 30 days of pilot completion, your $25K pilot fee is applied dollar-for-dollar to the first two months.</p></div></li>
              <li><div><b>What counts as &ldquo;media spend&rdquo; for the Growth tier?</b><p>Nothing. Growth is flat. Our $15–35K/mo range is based on number of channels, markets, and brand lines — not your ad budget.</p></div></li>
              <li><div><b>How fast can we start?</b><p>From signed SOW to first dashboards live: typically 5 business days. First geo-lift result: week 5.</p></div></li>
              <li><div><b>Do we need to replace our current tools?</b><p>No. Memologs sits alongside your existing attribution, MMM, and platform dashboards via API. We add signal, we don&apos;t remove yours.</p></div></li>
              <li><div><b>Who owns the data?</b><p>You do. We never resell customer data, enrichment never flows back out, and you can export everything at contract end.</p></div></li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
