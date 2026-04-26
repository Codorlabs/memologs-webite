import HeroCarousel from "@/components/HeroCarousel";
import PillarTabs from "@/components/PillarTabs";
import InflationCalculator from "@/components/InflationCalculator";
import ContactForm from "@/components/ContactForm";
import StatsBand from "@/components/StatsBand";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-lead">
              <div className="eyebrow"><span className="dot"></span> AI Marketing Intelligence Platform</div>
              <h1 className="display" id="hero-h1">
                Your stack measures.<br />
                MemoLogs <em>thinks.</em>
              </h1>
              <p className="lede">
                Causal measurement, creative AI, and audience AI in one platform — with a decision memory that makes every next call smarter. Prove what worked. Kill what didn&apos;t. Compound the rest.
              </p>
              <div className="cta-row">
                <a href="#contact" className="btn btn-primary btn-lg">Start a 90-day pilot</a>
                <a href="#calculator" className="btn btn-ghost btn-lg">See your inflation factor →</a>
              </div>
              <div className="hero-micro">
                <span>Flat fee — never % of spend</span>
                <span className="sep">·</span>
                <span>Results in week 5, not week 12</span>
                <span className="sep">·</span>
                <span>Sits alongside your stack</span>
              </div>
            </div>
            <HeroCarousel />
          </div>
        </div>
      </section>

      <StatsBand />

      {/* ═══════════ DIAGNOSTIC / PROBLEM ═══════════ */}
      <section className="diag">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Built to measure the <em>clicks</em>.<br />Not the causality.</h2>
            <p className="section-sub">Here&apos;s what&apos;s actually going wrong under the hood of most modern marketing stacks — and what it quietly costs you every month you leave it alone.</p>
          </div>

          <div className="diag-grid">
            <article className="diag-card diag-card-wide">
              <header className="dc-head">
                <span className="dc-idx">01</span>
                <span className="dc-tag">Measurement</span>
              </header>
              <div className="dc-body">
                <h3>Platforms over-count conversions <em>3–10×</em>.</h3>
                <p>Every budget call you make downstream is off by a multiple. You&apos;re not optimizing — you&apos;re calibrating on fiction.</p>
              </div>
              <div className="dc-exhibit dc-inflation">
                <div className="dc-inf-row"><span className="dc-inf-lab">Platform says</span><div className="dc-inf-bar"><div className="dc-inf-fill ghost" style={{width:"100%"}}></div></div><span className="dc-inf-val">12,500</span></div>
                <div className="dc-inf-row"><span className="dc-inf-lab">Actually caused</span><div className="dc-inf-bar"><div className="dc-inf-fill real" style={{width:"33%"}}></div></div><span className="dc-inf-val">4,200</span></div>
                <div className="dc-inf-delta"><span className="dc-inf-delta-tag">Inflation factor</span><span className="dc-inf-delta-val">3.0×</span></div>
              </div>
            </article>

            <article className="diag-card">
              <header className="dc-head">
                <span className="dc-idx">02</span>
                <span className="dc-tag">Creative</span>
              </header>
              <div className="dc-body">
                <h3>Your creative is dying in silence.</h3>
                <p>By the time CPA spikes, you&apos;ve already overspent 20–40%. The symptom arrives weeks after the death.</p>
              </div>
              <div className="dc-exhibit dc-fatigue">
                <svg viewBox="0 0 240 90" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="fatShade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B5B" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#FF6B5B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="72" x2="240" y2="72" stroke="rgba(255,255,255,.12)" strokeDasharray="2 3" />
                  <path d="M0 44 Q 30 40 55 42 Q 80 44 105 48 Q 130 54 155 64 Q 180 74 210 82 L 240 86" stroke="#00FFC2" strokeWidth="2" fill="none" />
                  <path d="M130 54 L 240 86 L 240 90 L 130 90 Z" fill="url(#fatShade)" />
                  <line x1="188" y1="14" x2="188" y2="90" stroke="#FF6B5B" strokeDasharray="3 3" strokeWidth="1" />
                  <circle cx="188" cy="78" r="4" fill="#FF6B5B" />
                  <text x="184" y="10" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#9AA0AE">CTR drift →</text>
                  <text x="192" y="10" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#FF6B5B">CPA spike (too late)</text>
                </svg>
                <div className="dc-fatigue-foot">Detection lag: <b>11–18 days</b></div>
              </div>
            </article>

            <article className="diag-card">
              <header className="dc-head">
                <span className="dc-idx">03</span>
                <span className="dc-tag">Timing</span>
              </header>
              <div className="dc-body">
                <h3>MMM tells you what happened <em>last quarter</em>.</h3>
                <p>Regression reports arrive after the market has shifted twice. By readout day, the answer has expired.</p>
              </div>
              <div className="dc-exhibit dc-timing">
                <div className="dc-time-track">
                  <span className="dc-time-evt dc-time-evt-bad">
                    <span className="dc-time-dot"></span>
                    <span className="dc-time-lab">Q2 spend decisions</span>
                    <span className="dc-time-date">APR 1</span>
                  </span>
                  <span className="dc-time-evt dc-time-evt-bad">
                    <span className="dc-time-dot"></span>
                    <span className="dc-time-lab">Market shifts</span>
                    <span className="dc-time-date">MAY 14</span>
                  </span>
                  <span className="dc-time-evt dc-time-evt-bad">
                    <span className="dc-time-dot"></span>
                    <span className="dc-time-lab">MMM readout arrives</span>
                    <span className="dc-time-date">JUL 08</span>
                  </span>
                </div>
                <div className="dc-time-foot"><b>98 days</b> between decision and proof — the answer has already moved.</div>
              </div>
            </article>

            <article className="diag-card diag-card-wide">
              <header className="dc-head">
                <span className="dc-idx">04</span>
                <span className="dc-tag">Memory</span>
              </header>
              <div className="dc-body">
                <h3>Hard-won lessons walk out the door<br />when your VP does.</h3>
                <p>The reason Q3 paid social tanked? Nobody remembers. The next senior hire will repeat the same scale-up — and burn the same budget learning it.</p>
              </div>
              <div className="dc-exhibit dc-memory">
                <div className="dc-mem-decisions">
                  <div className="dc-mem-item"><span className="dc-mem-dot kept"></span><span>Oct &apos;24 — paid-social scale to $880K</span><span className="dc-mem-fate bad">−18% branded SEM</span></div>
                  <div className="dc-mem-item"><span className="dc-mem-dot kept"></span><span>Oct &apos;23 — paid-social scale to $910K</span><span className="dc-mem-fate bad">$64K wasted</span></div>
                  <div className="dc-mem-item dc-mem-leaving"><span className="dc-mem-dot leaving"></span><span>Jul &apos;24 — paid-social scale to $720K (worked)</span><span className="dc-mem-fate">leaving with VP →</span></div>
                </div>
                <div className="dc-mem-note">30–40% of institutional knowledge leaves with senior hires.</div>
              </div>
            </article>
          </div>

          <div className="diag-close">
            <div className="dclose-rule"></div>
            <div className="dclose-copy">
              <span className="dclose-lab">One root cause</span>
              <p>Four symptoms above. Many more under the hood. Every one is a downstream effect of the same problem: your stack measures <em>clicks</em> and <em>last-touch</em>, not <em>causality</em> and <em>memory</em>. MemoLogs fixes all — by fixing the one.</p>
              <Link className="dclose-link" href="/how-it-works">See the full diagnostic →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PILLARS TAB BLOCK ═══════════ */}
      <section id="platform" className="pillars">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">One platform.<br />Five AI products.</h2>
            <p className="section-sub">Every IQ product shares one data layer, one signal graph, and one memory. That&apos;s why MemoLogs produces answers MMM, attribution platforms, and consulting stacks simply can&apos;t.</p>
          </div>
          <PillarTabs />
        </div>
      </section>

      {/* ═══════════ CALCULATOR ═══════════ */}
      <section id="calculator" className="calc">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">What is <em>your</em> attribution inflation factor?</h2>
            <p className="section-sub">Enter your monthly media spend and what your platforms are reporting. We&apos;ll show you what that number likely looks like once you strip out the fluff — and how much is quietly draining every month.</p>
          </div>
          <InflationCalculator />
        </div>
      </section>

      {/* ═══════════ RESULTS ═══════════ */}
      <section className="results">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Inside real customer pilots.</h2>
            <p className="section-sub">Every study below was measured with the same GeoTwin™ methodology we&apos;d run on your account. No case-study theater — just the before, the test, and the after.</p>
          </div>

          <div className="cases">
            <Link href="/case-studies/fintech" className="case">
              <div className="case-head">
                <span className="case-industry">Fintech</span>
                <span className="case-action">Read study →</span>
              </div>
              <h3>Unicorn fintech app cut CPI 37% in one quarter.</h3>
              <div className="case-stats">
                <div><span className="case-stat-val">−37%</span><span className="case-stat-lab">CPI</span></div>
                <div><span className="case-stat-val">+30%</span><span className="case-stat-lab">Click → acquisition</span></div>
              </div>
              <p className="case-quote">&ldquo;We analyzed campaigns driving 95% of installs. Frequency capping brought immediate efficiency.&rdquo;</p>
            </Link>

            <Link href="/case-studies/retail" className="case">
              <div className="case-head">
                <span className="case-industry">Multi-brand retail</span>
                <span className="case-action">Read study →</span>
              </div>
              <h3>India&apos;s largest watch retailer hit 1.6× ROAS and 40% YoY revenue growth.</h3>
              <div className="case-stats">
                <div><span className="case-stat-val">1.6×</span><span className="case-stat-lab">ROAS lift</span></div>
                <div><span className="case-stat-val">+40%</span><span className="case-stat-lab">YoY revenue</span></div>
              </div>
              <p className="case-quote">&ldquo;SKU-level keyword grouping + tailored messaging per brand. Quality Score moved from 4 to 9.&rdquo;</p>
            </Link>

            <Link href="/case-studies" className="case case-more">
              <div className="case-head">
                <span className="case-industry">All studies</span>
              </div>
              <h3>D2C · Consumer tech · Health &amp; Personal Care · Hyperlocal retail.</h3>
              <p className="case-quote-more">500% revenue growth. 42% store-visit lift. 2× ROAS on stuck accounts. See how.</p>
              <div className="case-more-cta">Browse all case studies →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ LANDSCAPE / COMPARISON ═══════════ */}
      <section className="landscape">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Where other tools stop.<br />Where MemoLogs starts.</h2>
            <p className="section-sub">Every category a CMO shops when they realize their attribution stack is lying. Here&apos;s what each one gives you — and what it quietly leaves on the table.</p>
          </div>

          <div className="land-table-wrap">
            <table className="land-table">
              <thead>
                <tr>
                  <th className="lt-cap">Capability</th>
                  <th>MMM tools</th>
                  <th>Attribution platforms</th>
                  <th>Consulting firms</th>
                  <th className="lt-memo">MemoLogs</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="lt-cap">Causal measurement</td><td>Correlational only</td><td className="x">✗</td><td>Manual studies</td><td className="lt-memo">Tri-model: GeoTwin™ + CausalCore™ + DiffLens™</td></tr>
                <tr><td className="lt-cap">Creative intelligence</td><td className="x">✗</td><td>Basic tagging</td><td className="x">✗</td><td className="lt-memo">7-signal fatigue + AI refresh</td></tr>
                <tr><td className="lt-cap">Audience optimization</td><td className="x">✗</td><td>Lookalikes only</td><td className="x">✗</td><td className="lt-memo">6 agents + cross-platform sync</td></tr>
                <tr><td className="lt-cap">Conversational analytics</td><td className="x">✗</td><td className="x">✗</td><td className="x">✗</td><td className="lt-memo">AI Co-Pilot</td></tr>
                <tr><td className="lt-cap">Institutional memory</td><td className="x">✗</td><td className="x">✗</td><td className="x">✗</td><td className="lt-memo">Memory IQ</td></tr>
                <tr><td className="lt-cap">Unified platform</td><td>Measurement only</td><td>Attribution only</td><td>Strategy only</td><td className="lt-memo">Measure + Create + Audience + Act</td></tr>
                <tr><td className="lt-cap">Time to first insight</td><td>6–12 weeks</td><td>Real-time (inflated)</td><td>30+ days</td><td className="lt-memo">&lt; 5 weeks</td></tr>
                <tr><td className="lt-cap">Typical cost</td><td>$50–150K / qtr</td><td>$1–5K / mo</td><td>$200K+ / qtr</td><td className="lt-memo">$15–35K / mo, all-in</td></tr>
                <tr><td className="lt-cap">Pricing model</td><td>Seats + custom</td><td>% of ad spend</td><td>Retainer</td><td className="lt-memo">Flat fee — never % of spend</td></tr>
              </tbody>
            </table>
          </div>

          <div className="land-close">
            Other tools answer <em>one</em> question. MemoLogs connects causal measurement, creative intelligence, audience optimization, and decision memory in a single system — because that&apos;s the only way budget decisions actually get better over time.
          </div>
        </div>
      </section>

      {/* ═══════════ HOW / IMPLEMENTATION ═══════════ */}
      <section className="implement">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Value before your next<br />board meeting.</h2>
            <p className="section-sub">No rip-and-replace. MemoLogs sits alongside your existing stack via API. Here&apos;s what the rollout looks like, week by week.</p>
          </div>

          <ol className="timeline">
            <li>
              <div className="tl-when">Day 1</div>
              <div className="tl-what">
                <h4>Kickoff</h4>
                <p>Align on goals, define KPIs, assign dedicated account team.</p>
              </div>
            </li>
            <li>
              <div className="tl-when">Day 2–3</div>
              <div className="tl-what">
                <h4>Data connections</h4>
                <p>Connect Meta, Google, TikTok, GA4, Shopify, BigQuery via pre-built integrations.</p>
              </div>
            </li>
            <li>
              <div className="tl-when">Day 7</div>
              <div className="tl-what">
                <h4>First dashboards live</h4>
                <p>Creative IQ health scores flowing. Initial Audience IQ profiling against your first-party data.</p>
              </div>
            </li>
            <li>
              <div className="tl-when">Week 3</div>
              <div className="tl-what">
                <h4>First weekly KPI report</h4>
                <p>Automated scorecard, cross-channel performance, creative health.</p>
              </div>
            </li>
            <li className="tl-milestone">
              <div className="tl-when">Week 5</div>
              <div className="tl-what">
                <h4>First incrementality result</h4>
                <p>Full tri-model consensus verdict (GeoTwin™ + CausalCore™ + DiffLens™), Attribution Inflation Factor delivered, budget reallocation plan.</p>
              </div>
            </li>
          </ol>

          <div className="impl-cta">
            <Link href="/how-it-works" className="btn btn-ghost">See the full onboarding →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CLOSE CTA ═══════════ */}
      <section className="close-cta" id="contact">
        <div className="wrap">
          <div className="cc-grid">
            <div className="cc-left">
              <h2 className="display">
                Ready to know what<br />
                <em>actually works?</em>
              </h2>
              <p className="lede">Book a 30-minute pilot-scoping call. We&apos;ll audit your attribution, size the likely inflation on your account, and tell you whether a MemoLogs pilot makes sense — before you commit a dollar.</p>
              <div className="cc-points">
                <div><b>90-day pilot.</b> Pilot fee credited 100% toward annual contract.</div>
                <div><b>Flat fee.</b> $15K/mo starter. Never % of ad spend.</div>
                <div><b>Your data stays yours.</b> SOC 2 compliant. No re-sold signals.</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}