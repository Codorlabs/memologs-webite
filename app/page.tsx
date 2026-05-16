import HeroCarousel from "@/components/HeroCarousel";
import PillarTabs from "@/components/PillarTabs";
import InflationCalculator from "@/components/InflationCalculator";
import ContactForm from "@/components/ContactForm";
import PilotCTA from "@/components/PilotCTA";
import HomeTimelineScroll from "@/components/HomeTimelineScroll";
import StatsBand from "@/components/StatsBand";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeTimelineScroll />
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
                Causal measurement, creative AI, and audience AI — held together by a memory that learns from every campaign you&apos;ll ever run. The only platform that <em>measures causality, fixes creative, targets buyers,</em> and remembers <em>why</em> it all worked.
              </p>
              <div className="cta-row">
                <PilotCTA className="btn btn-primary btn-lg">Start a 90-day pilot</PilotCTA>
                <a href="#calculator" className="btn btn-ghost btn-lg">See your inflation factor →</a>
              </div>
              <div className="hero-micro hero-micro-imperatives">
                <span><b>Prove</b> what worked.</span>
                <span className="sep">·</span>
                <span><b>Kill</b> what didn&apos;t.</span>
                <span className="sep">·</span>
                <span><b>Compound</b> the rest.</span>
              </div>
              <div className="hero-micro hero-micro-meta">
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
            <h2 className="section-title">Built to measure the <em>causality</em>.<br />Not the clicks.</h2>
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
                <p>Q3 paid social failed—and no one knows why. The next senior hire will likely repeat it and waste the same budget.</p>
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

          <aside className="diag-close" aria-label="The root cause beneath the symptoms">
            <div className="dclose-converge" aria-hidden="true">
              <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                <g stroke="rgba(0,255,194,0.55)" strokeWidth="1.2" fill="none" strokeLinecap="round">
                  <line x1="6"   y1="10" x2="60" y2="40" />
                  <line x1="6"   y1="70" x2="60" y2="40" />
                  <line x1="114" y1="10" x2="60" y2="40" />
                  <line x1="114" y1="70" x2="60" y2="40" />
                </g>
                <g className="dclose-converge-dots">
                  <circle cx="6"   cy="10" r="2.6" fill="#00FFC2" />
                  <circle cx="6"   cy="70" r="2.6" fill="#00FFC2" />
                  <circle cx="114" cy="10" r="2.6" fill="#00FFC2" />
                  <circle cx="114" cy="70" r="2.6" fill="#00FFC2" />
                </g>
                <circle cx="60" cy="40" r="8" fill="#070B16" stroke="#00FFC2" strokeWidth="1.6" />
                <circle cx="60" cy="40" r="3" fill="#00FFC2" className="dclose-converge-core" />
              </svg>
            </div>
            <div className="dclose-eyebrow">
              <span className="dclose-rule-line"></span>
              <span className="dclose-lab">One root cause</span>
              <span className="dclose-rule-line"></span>
            </div>
            <p className="dclose-lead">Four symptoms above. Many more under the hood. Every one is a downstream effect of the same problem: your stack measures <em>clicks</em> and <em>last-touch</em>, not <em>causality</em> and <em>memory</em>.</p>
            <p className="dclose-punch">MemoLogs fixes all — by measuring <em>true causality</em> across every campaign, and locking every lesson into a <em>memory the next one inherits</em>.</p>
            <Link className="btn btn-ghost btn-lg dclose-cta" href="/how-it-works">See the full diagnostic →</Link>
          </aside>
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
            <h2 className="section-title">Where other tools stop. Where MemoLogs starts.</h2>
            <p className="section-sub">Every category a CMO shops when they realize their attribution stack is lying. Here&apos;s what each one gives you — and what it quietly leaves on the table.</p>
          </div>

          <div className="land-table-wrap land-table-wrap-desktop">
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
                <tr><td className="lt-cap" data-label="Capability">Causal measurement</td><td data-label="MMM tools">Correlational only</td><td className="x" data-label="Attribution platforms">✗</td><td data-label="Consulting firms">Manual studies</td><td className="lt-memo" data-label="MemoLogs">Tri-model: GeoTwin™ + CausalCore™ + DiffLens™</td></tr>
                <tr><td className="lt-cap" data-label="Capability">Creative intelligence</td><td className="x" data-label="MMM tools">✗</td><td data-label="Attribution platforms">Basic tagging</td><td className="x" data-label="Consulting firms">✗</td><td className="lt-memo" data-label="MemoLogs">7-signal fatigue + AI refresh</td></tr>
                <tr><td className="lt-cap" data-label="Capability">Audience optimization</td><td className="x" data-label="MMM tools">✗</td><td data-label="Attribution platforms">Lookalikes only</td><td className="x" data-label="Consulting firms">✗</td><td className="lt-memo" data-label="MemoLogs">6 agents + cross-platform sync</td></tr>
                <tr><td className="lt-cap" data-label="Capability">Conversational analytics</td><td className="x" data-label="MMM tools">✗</td><td className="x" data-label="Attribution platforms">✗</td><td className="x" data-label="Consulting firms">✗</td><td className="lt-memo" data-label="MemoLogs">AI Co-Pilot</td></tr>
                <tr><td className="lt-cap" data-label="Capability">Institutional memory</td><td className="x" data-label="MMM tools">✗</td><td className="x" data-label="Attribution platforms">✗</td><td className="x" data-label="Consulting firms">✗</td><td className="lt-memo" data-label="MemoLogs">Memory IQ</td></tr>
                <tr><td className="lt-cap" data-label="Capability">Unified platform</td><td data-label="MMM tools">Measurement only</td><td data-label="Attribution platforms">Attribution only</td><td data-label="Consulting firms">Strategy only</td><td className="lt-memo" data-label="MemoLogs">Measure + Create + Audience + Act</td></tr>
                <tr><td className="lt-cap" data-label="Capability">Time to first insight</td><td data-label="MMM tools">6–12 weeks</td><td data-label="Attribution platforms">Real-time (inflated)</td><td data-label="Consulting firms">30+ days</td><td className="lt-memo" data-label="MemoLogs">&lt; 5 weeks</td></tr>
                <tr><td className="lt-cap" data-label="Capability">Typical cost</td><td data-label="MMM tools">$50–150K / qtr</td><td data-label="Attribution platforms">$1–5K / mo</td><td data-label="Consulting firms">$200K+ / qtr</td><td className="lt-memo" data-label="MemoLogs">$15–35K / mo, all-in</td></tr>
                <tr><td className="lt-cap" data-label="Capability">Pricing model</td><td data-label="MMM tools">Seats + custom</td><td data-label="Attribution platforms">% of ad spend</td><td data-label="Consulting firms">Retainer</td><td className="lt-memo" data-label="MemoLogs">Flat fee — never % of spend</td></tr>
              </tbody>
            </table>
          </div>

          <div className="land-table-wrap land-table-wrap-mobile">
            <table className="land-table land-table-mobile">
              <thead>
                <tr>
                  <th className="lt-memo">MemoLogs</th>
                  <th className="lt-cap">Capability</th>
                  <th>MMM tools</th>
                  <th>Attribution platforms</th>
                  <th>Consulting firms</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="lt-memo" data-label="MemoLogs">Tri-model: GeoTwin™ + CausalCore™ + DiffLens™</td><td className="lt-cap" data-label="Capability">Causal measurement</td><td data-label="MMM tools">Correlational only</td><td className="x" data-label="Attribution platforms">✗</td><td data-label="Consulting firms">Manual studies</td></tr>
                <tr><td className="lt-memo" data-label="MemoLogs">7-signal fatigue + AI refresh</td><td className="lt-cap" data-label="Capability">Creative intelligence</td><td className="x" data-label="MMM tools">✗</td><td data-label="Attribution platforms">Basic tagging</td><td className="x" data-label="Consulting firms">✗</td></tr>
                <tr><td className="lt-memo" data-label="MemoLogs">6 agents + cross-platform sync</td><td className="lt-cap" data-label="Capability">Audience optimization</td><td className="x" data-label="MMM tools">✗</td><td data-label="Attribution platforms">Lookalikes only</td><td className="x" data-label="Consulting firms">✗</td></tr>
                <tr><td className="lt-memo" data-label="MemoLogs">AI Co-Pilot</td><td className="lt-cap" data-label="Capability">Conversational analytics</td><td className="x" data-label="MMM tools">✗</td><td className="x" data-label="Attribution platforms">✗</td><td className="x" data-label="Consulting firms">✗</td></tr>
                <tr><td className="lt-memo" data-label="MemoLogs">Memory IQ</td><td className="lt-cap" data-label="Capability">Institutional memory</td><td className="x" data-label="MMM tools">✗</td><td className="x" data-label="Attribution platforms">✗</td><td className="x" data-label="Consulting firms">✗</td></tr>
                <tr><td className="lt-memo" data-label="MemoLogs">Measure + Create + Audience + Act</td><td className="lt-cap" data-label="Capability">Unified platform</td><td data-label="MMM tools">Measurement only</td><td data-label="Attribution platforms">Attribution only</td><td data-label="Consulting firms">Strategy only</td></tr>
                <tr><td className="lt-memo" data-label="MemoLogs">&lt; 5 weeks</td><td className="lt-cap" data-label="Capability">Time to first insight</td><td data-label="MMM tools">6–12 weeks</td><td data-label="Attribution platforms">Real-time (inflated)</td><td data-label="Consulting firms">30+ days</td></tr>
                <tr><td className="lt-memo" data-label="MemoLogs">$15–35K / mo, all-in</td><td className="lt-cap" data-label="Capability">Typical cost</td><td data-label="MMM tools">$50–150K / qtr</td><td data-label="Attribution platforms">$1–5K / mo</td><td data-label="Consulting firms">$200K+ / qtr</td></tr>
                <tr><td className="lt-memo" data-label="MemoLogs">Flat fee — never % of spend</td><td className="lt-cap" data-label="Capability">Pricing model</td><td data-label="MMM tools">Seats + custom</td><td data-label="Attribution platforms">% of ad spend</td><td data-label="Consulting firms">Retainer</td></tr>
              </tbody>
            </table>
          </div>

          <div className="land-close" aria-label="Other tools answer one question. MemoLogs connects causal measurement, creative intelligence, audience optimization, and decision memory in a single system because that's the only way budget decisions actually get better over time.">
            <span className="land-close-line land-close-line-1">Other tools answer <em> one </em> question.</span>
            <span className="land-close-line land-close-line-2">MemoLogs connects causal measurement, creative intelligence, audience optimization, and decision memory in a single system</span>
            <span className="land-close-line land-close-line-3">because that&apos;s the only way budget decisions actually get better over time.</span>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW / IMPLEMENTATION ═══════════ */}
      <section className="implement">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Value before your next board meeting.</h2>
            <p className="section-sub">No rip-and-replace. MemoLogs sits alongside your existing stack via API. Here&apos;s what the rollout looks like, week by week.</p>
          </div>

          <ol className="timeline">
            <span className="timeline-progress" aria-hidden="true"></span>
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
                <div>
                  <svg width="28" height="27" viewBox="0 0 100 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_1202_315" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="97">
                  <rect width="100" height="97" fill="#00ffc2"/>
                  </mask>
                  <g mask="url(#mask0_1202_315)">
                  <path stroke="#00ffc2" d="M89 50.2609C89 71.6559 71.5391 89 50 89C28.4609 89 11 71.6559 11 50.2609C11 28.8658 28.4609 11.5217 50 11.5217C60.2764 11.5217 69.6245 15.4698 76.5909 21.9222M76.5909 21.9222L73.0455 8M76.5909 21.9222H60.6364M67.7273 50.2609H50V25.6087" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  </svg>
                  <p><b>90-day pilot.</b> Pilot fee credited 100% toward annual contract.</p>
                </div>
                <div>
                  <svg width="28" height="27" viewBox="0 0 100 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_1202_316"  maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="97">
                  <rect width="100" height="97" fill="#00ffc2"/>
                  </mask>
                  <g mask="url(#mask0_1202_316)">
                  <path d="M59.5082 23C58.528 26 58.2952 32 65.2057 32C73.8437 32 70.7193 23 69.0653 23" stroke="#00ffc2" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M65.376 27.5325C64.191 22.2128 65.1272 10.9497 78.3528 8.45494C94.8849 5.3365 104.662 18.9109 89.3742 29" stroke="#00ffc2" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M53.8692 14.2321L75.1082 15.6584C79.5125 15.9541 83.0522 19.4004 83.4656 23.7951L85.5286 45.7228C85.8215 48.8363 84.4772 51.8787 81.978 53.7584L40.6066 84.8756C36.7856 87.7495 31.3844 87.1342 28.3077 83.4745L7.97546 59.2889C4.70597 55.3998 5.30183 49.577 9.29129 46.4307L47.6929 16.1451C49.4436 14.7644 51.6445 14.0827 53.8692 14.2321Z" stroke="#00ffc2" strokeWidth="5" strokeLinecap="round"/>
                  </g>
                  </svg>
                  <p><b>Flat fee.</b> $15K/mo starter. Never % of ad spend.</p>
                </div>
                <div>
                  
                  <svg width="28" height="27" viewBox="0 0 100 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1202_325" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="97">
                    <rect width="100" height="97" fill="#00ffc2"/>
                    </mask>
                    <g mask="url(#mask0_1202_325)">
                    <path d="M83.0483 52.6352C84.4111 47.1346 84.4764 42.8987 84.4764 41.6206V23.5358C84.4764 22.5692 83.7538 21.7523 82.7927 21.6372C79.7521 21.269 73.1711 20.3293 67.8933 18.5726C60.7857 16.2098 52.4941 10.0038 49.2382 10.0038V10C45.9823 10 37.6908 16.206 30.5831 18.5687C25.3053 20.3254 18.7243 21.2651 15.6837 21.6334C14.7227 21.7523 14 22.5654 14 23.532V41.6168C14 45.4256 14.5843 75.5081 48.3541 87.0418C48.9269 87.2374 49.5534 87.2374 50.1262 87.0418C54.878 85.4188 58.9727 83.4287 62.5011 81.1963" stroke="#00ffc2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M64.8501 68.0976L69.7684 73.1071L81.6302 61.0254" stroke="#00ffc2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="72.2333" cy="66.3949" r="14.0165" stroke="#00ffc2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>

                  <p><b>Your data stays yours.</b> SOC 2 compliant. No re-sold signals.</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}