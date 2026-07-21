import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  title: "Fintech Case Study — MemoLogs",
  description: "How a unicorn fintech cut CPI 37% in one quarter.",
};

export default function FintechCaseStudyPage() {
  return (
    <>
      <section className="cs-hero">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/case-studies">Case studies</Link> <span>›</span> Fintech</div>
          <span className="cs-industry">Fintech</span>
          <h1 style={{fontFamily:"var(--serif)",fontWeight:400,fontSize:"clamp(40px,4.6vw,64px)",lineHeight:1.03,letterSpacing:"-0.01em",margin:"24px 0 0",maxWidth:"900px"}}>A unicorn fintech cut CPI 37% and increased click-to-acquisition 30% in one quarter.</h1>
          <div className="cs-stats">
            <div className="cs-stat"><div className="cs-stat-num">−37%</div><div className="cs-stat-lab">Cost per install</div></div>
            <div className="cs-stat"><div className="cs-stat-num">+30%</div><div className="cs-stat-lab">Click-to-acquisition</div></div>
            <div className="cs-stat"><div className="cs-stat-num">95%</div><div className="cs-stat-lab">Install spend audited</div></div>
            <div className="cs-stat"><div className="cs-stat-num">&lt; 5wk</div><div className="cs-stat-lab">Time to first result</div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cs-body">
            <div className="cs-tag">Challenge</div>
            <div>
              <h2>What wasn&apos;t working.</h2>
              <p>The client — a late-stage consumer fintech running $1.2M/mo in paid acquisition across Meta, Google, and TikTok — had hit a wall. CPI had climbed 22% over two quarters despite no change in creative or targeting strategy. Platform dashboards were inconsistent: Meta Ads Manager claimed a $6 CPI, GA4 said $11, and their CRM suggested something in between.</p>
              <p>Worse, their VP of Growth had just left. Institutional memory of why previous scale-ups failed was walking out the door.</p>
            </div>

            <div className="cs-tag">Approach</div>
            <div>
              <h2>What we did.</h2>
              <p>We started with a full attribution audit on the 95% of install spend concentrated in Meta and Google.</p>
              <p>In week two, Creative IQ identified four fatiguing ad sets that accounted for 38% of spend — their 9-signal health scores had all dropped below 30. We queued refresh variants and began A/B testing immediately.</p>
              <p>Weeks 3–5, we ran the first geo-lift study to establish true incremental CPI versus platform-reported CPI. Tri-model consensus (GeoTwin · CausalCore · DiffLens) returned an Attribution Inflation Factor of 2.8× on Meta and 4.1× on branded Google search.</p>
              <div className="cs-pull">&ldquo;Meta claimed a $6 CPI. Geo-lift said $17. Once we stopped optimizing against the lie, everything got better.&rdquo;</div>
              <p>The reallocation plan: cap branded search at 60% of its prior budget, move the surplus into Meta prospecting creative that had tested well in the fatigue-replacement cohort, and add frequency caps at the audience level.</p>
            </div>

            <div className="cs-tag">Results</div>
            <div>
              <h2>What changed.</h2>
              <p>By end of Q2, CPI on the recovered-signal basis had dropped from $17 (true incremental) to $10.70 — a 37% improvement. Click-to-acquisition improved 30% as the refreshed creatives and tightened frequency caps lifted relevance.</p>
              <table className="cs-table">
                <thead><tr><th>Metric</th><th>Before</th><th>After 90 days</th><th>Change</th></tr></thead>
                <tbody>
                  <tr><td>Reported CPI (Meta)</td><td>$6.10</td><td>$4.90</td><td className="pos">−20%</td></tr>
                  <tr><td>Incremental CPI (geo-lift)</td><td>$17.10</td><td>$10.70</td><td className="pos">−37%</td></tr>
                  <tr><td>Click → acquisition</td><td>1.9%</td><td>2.5%</td><td className="pos">+30%</td></tr>
                  <tr><td>Branded search spend</td><td>$340K/mo</td><td>$200K/mo</td><td className="pos">−41% (waste)</td></tr>
                  <tr><td>Creative refresh cadence</td><td>30 days (calendar)</td><td>~14 days (fatigue-triggered)</td><td className="pos">Reactive → proactive</td></tr>
                </tbody>
              </table>
              <blockquote className="cs-pull">
                &ldquo;We analyzed campaigns driving 95% of installs. The frequency capping alone brought immediate efficiency — then the creative refresh queue and the branded search reallocation stacked on top. Every month since, the number has gotten cleaner, not noisier.&rdquo;
                <br /><cite style={{fontFamily:"var(--mono)",fontSize:"12px",letterSpacing:".12em",textTransform:"uppercase",color:"var(--ink-3)",fontStyle:"normal"}}>— VP Growth · Consumer fintech app</cite>
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
            <span><Link href="/case-studies/retail">Next: Multi-brand retail</Link> →</span>
          </div>
        </div>
      </section>
    </>
  );
}
