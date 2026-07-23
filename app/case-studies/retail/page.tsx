import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies/retail" },
  title: "Retail Case Study — 4.9× ROAS Across Multiple Brands",
  description: "How a multi-brand watch retailer reached 4.9× ROAS (a 1.6× measured lift) and 40% YoY revenue growth with causal measurement.",
};

export default function RetailCaseStudyPage() {
  return (
    <>
      <section className="cs-hero">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/case-studies">Case studies</Link> <span>›</span> Multi-brand retail</div>
          <span className="cs-industry">Multi-brand retail</span>
          <h1 style={{fontFamily:"var(--serif)",fontWeight:400,fontSize:"clamp(40px,4.6vw,64px)",lineHeight:1.03,letterSpacing:"-0.01em",margin:"24px 0 0",maxWidth:"900px"}}>A multi-brand watch retailer hit 4.9× ROAS — a 1.6× lift — and 40% YoY revenue growth across 8 brand lines.</h1>
          <div className="cs-stats">
            <div className="cs-stat"><div className="cs-stat-num">1.6×</div><div className="cs-stat-lab">ROAS lift</div></div>
            <div className="cs-stat"><div className="cs-stat-num">+40%</div><div className="cs-stat-lab">YoY revenue</div></div>
            <div className="cs-stat"><div className="cs-stat-num">4 → 9</div><div className="cs-stat-lab">Google Quality Score</div></div>
            <div className="cs-stat"><div className="cs-stat-num">8</div><div className="cs-stat-lab">Brand lines supported</div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cs-body">
            <div className="cs-tag">Challenge</div>
            <div>
              <h2>What wasn&apos;t working.</h2>
              <p>The client managed paid marketing for 8 distinct watch brands — ranging from mass-market to premium Swiss — under one holding company. Each brand had different audiences, price points, and conversion motions, but paid search was being managed with a single generic keyword structure and a single generic creative template.</p>
              <p>Result: Google Quality Score averaged 4, CPCs were 2.3× benchmark, and the shared account was consuming budget that could have driven much higher-intent traffic to each brand line individually.</p>
            </div>

            <div className="cs-tag">Approach</div>
            <div>
              <h2>What we did.</h2>
              <p>We rebuilt the account structure around SKU-level keyword grouping. Every brand got its own campaign tree, and within each, SKU families (dive watches, dress, chronograph, etc.) got their own ad groups with tailored messaging.</p>
              <p>Audience IQ graded the first-party purchase history across all 8 brands, then built cross-brand cross-sell segments — customers who bought a mid-tier dress watch showed strong intent signals for the premium line 9–14 months later.</p>
              <p>Creative IQ handled the ad variants at scale: 300+ ad groups would have been impossible to monitor manually. Health scoring at the asset level meant refresh budget went to the specific SKU groups where it was needed.</p>
            </div>

            <div className="cs-tag">Results</div>
            <div>
              <h2>What changed.</h2>
              <p>Google Quality Score climbed from 4 to 9 across the restructured account within 10 weeks. CPC dropped 34%. ROAS improved from 3.1× to 4.9× — a 1.6× lift. Year-over-year revenue across the brand portfolio grew 40%.</p>
              <table className="cs-table">
                <thead><tr><th>Metric</th><th>Before</th><th>After 90 days</th><th>Change</th></tr></thead>
                <tbody>
                  <tr><td>Google Quality Score (weighted avg)</td><td>4.0</td><td>9.0</td><td className="pos">+125%</td></tr>
                  <tr><td>Average CPC</td><td>Benchmark × 2.3</td><td>Benchmark × 1.5</td><td className="pos">−34%</td></tr>
                  <tr><td>ROAS</td><td>3.1×</td><td>4.9×</td><td className="pos">1.6× lift</td></tr>
                  <tr><td>YoY revenue</td><td>—</td><td>+40%</td><td className="pos">Portfolio-wide</td></tr>
                  <tr><td>Cross-brand cross-sell</td><td>0% attributed</td><td>11% of premium revenue</td><td className="pos">New channel surfaced</td></tr>
                </tbody>
              </table>
              <blockquote className="cs-pull">
                &ldquo;The SKU-level keyword grouping plus tailored messaging per brand was the unlock. Quality Score moved from 4 to 9 in under 10 weeks. Once Audience IQ surfaced the cross-brand buyers, we had a new growth lever we didn&apos;t know existed.&rdquo;
                <br /><cite style={{fontFamily:"var(--mono)",fontSize:"12px",letterSpacing:".12em",textTransform:"uppercase",color:"var(--ink-3)",fontStyle:"normal"}}>— Head of Digital · Multi-brand retail group</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section alt">
        <div className="wrap">
          <div className="sp-cta-inline">
            <div><h3>See what your account is missing.</h3><p>90-day pilot · flat fee · pilot credited to contract.</p></div>
            <PilotCTA className="btn btn-primary btn-lg">Start a pilot →</PilotCTA>
          </div>
          <div className="sp-nav-next">
            <span>← <Link href="/case-studies">All case studies</Link></span>
          </div>
        </div>
      </section>
    </>
  );
}
