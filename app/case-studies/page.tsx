import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "Case Studies — Real Pilots, Measured With Geo-Lift",
  description: "Real pilots measured with geo-lift across fintech, retail, DTC, consumer tech, health, and QSR — including the Creative IQ luggage fatigue story.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">Memologs</Link> <span>›</span> Case studies</div>
          <div className="eyebrow"><span className="dot"></span> Proof · not promises</div>
          <h1>Real pilots.<br /><em>Measured results.</em></h1>
          <p className="lede">Every engagement below was measured with geo-lift — the same methodology we&apos;d run on your account. Every number is what the causal model saw, not what the platform reported.</p>
        </div>
      </section>

      <section className="sp-section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-kicker"><span className="num">01</span> Portfolio</span>
            <h2 className="section-title">Six industries. One pattern.</h2>
            <p className="section-sub">Across fintech, retail, DTC, consumer tech, health, and hyperlocal QSR — the same methodology produces the same kind of result: truer signal, lower CAC, higher ROAS.</p>
          </div>

          <div className="hub-grid">
            <Link href="/case-studies/fintech" className="hub-card">
              <div className="hub-card-head"><span className="cs-industry">Fintech</span><span className="hub-card-cta">→</span></div>
              <h3>Unicorn fintech app cut CPI 37% in one quarter.</h3>
              <div className="hub-card-stats">
                <div><span className="hub-card-stat-val">−37%</span><span className="hub-card-stat-lab">CPI</span></div>
                <div><span className="hub-card-stat-val">+30%</span><span className="hub-card-stat-lab">Click→acquisition</span></div>
              </div>
              <p className="hub-card-quote">&ldquo;We analyzed campaigns driving 95% of installs. Frequency capping brought immediate efficiency.&rdquo;</p>
            </Link>

            <Link href="/case-studies/retail" className="hub-card">
              <div className="hub-card-head"><span className="cs-industry">Multi-brand retail</span><span className="hub-card-cta">→</span></div>
              <h3>A multi-brand watch retailer hit 4.9× ROAS (1.6× lift) and 40% YoY revenue growth.</h3>
              <div className="hub-card-stats">
                <div><span className="hub-card-stat-val">1.6×</span><span className="hub-card-stat-lab">ROAS lift</span></div>
                <div><span className="hub-card-stat-val">+40%</span><span className="hub-card-stat-lab">YoY revenue</span></div>
              </div>
              <p className="hub-card-quote">&ldquo;SKU-level keyword grouping + tailored messaging per brand. Quality Score moved from 4 to 9.&rdquo;</p>
            </Link>

            <div className="hub-card">
              <div className="hub-card-head"><span className="cs-industry">DTC</span></div>
              <h3>DTC luggage brand delivered 500% revenue growth in its flagship season.</h3>
              <div className="hub-card-stats">
                <div><span className="hub-card-stat-val">+500%</span><span className="hub-card-stat-lab">Revenue</span></div>
                <div><span className="hub-card-stat-val">−22%</span><span className="hub-card-stat-lab">CAC</span></div>
              </div>
              <p className="hub-card-quote">&ldquo;Creative IQ caught fatigue 14 days before we would have. We redeployed $220K into variants that actually worked.&rdquo;</p>
            </div>

            <div className="hub-card">
              <div className="hub-card-head"><span className="cs-industry">Consumer tech</span></div>
              <h3>Gaming accessory brand doubled ROAS on a stuck account.</h3>
              <div className="hub-card-stats">
                <div><span className="hub-card-stat-val">2.0×</span><span className="hub-card-stat-lab">ROAS</span></div>
                <div><span className="hub-card-stat-val">+46%</span><span className="hub-card-stat-lab">Incremental rev</span></div>
              </div>
              <p className="hub-card-quote">&ldquo;Attribution Inflation Factor of 4.3× on Meta. Reallocated to CTV and podcasts. Board meeting went great.&rdquo;</p>
            </div>

            <div className="hub-card">
              <div className="hub-card-head"><span className="cs-industry">Health &amp; PCare</span></div>
              <h3>Subscription skincare brand hit +37% click-to-acquisition.</h3>
              <div className="hub-card-stats">
                <div><span className="hub-card-stat-val">+37%</span><span className="hub-card-stat-lab">Click→acquisition</span></div>
                <div><span className="hub-card-stat-val">−18%</span><span className="hub-card-stat-lab">CAC</span></div>
              </div>
              <p className="hub-card-quote">&ldquo;The 4 audience agents found buyers our lookalikes were missing. Retention cohort quality went up, too.&rdquo;</p>
            </div>

            <div className="hub-card">
              <div className="hub-card-head"><span className="cs-industry">Hyperlocal QSR</span></div>
              <h3>Multi-city QSR chain lifted store visits 42% via geo-targeted CTV.</h3>
              <div className="hub-card-stats">
                <div><span className="hub-card-stat-val">+42%</span><span className="hub-card-stat-lab">Store visits</span></div>
                <div><span className="hub-card-stat-val">+18%</span><span className="hub-card-stat-lab">Same-store rev</span></div>
              </div>
              <p className="hub-card-quote">&ldquo;Geo-lift told us CTV was the only channel with statistically significant store-visit lift. We doubled down.&rdquo;</p>
            </div>
          </div>

          <div className="sp-cta-inline">
            <div>
              <h3>Want this result on your account?</h3>
              <p>Every pilot uses the same methodology. Start with a 30-minute scoping call.</p>
            </div>
            <PilotCTA className="btn btn-primary btn-lg">Book a pilot →</PilotCTA>
          </div>
        </div>
      </section>
    </>
  );
}
