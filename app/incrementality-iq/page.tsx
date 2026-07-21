import type { Metadata } from "next";
import Link from "next/link";
import GeoLiftDemo from "@/components/GeoLiftDemo";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  title: "Incrementality IQ — Causal Measurement | MemoLogs",
  description: "Always-on causal experimentation. Tri-model consensus: GeoTwin™ + CausalCore™ + DiffLens™. Know what your media actually drove.",
};

export default function IncrementalityIQPage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="subpage-hero iq-hero">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">Platform</Link> <span>›</span> Incrementality IQ</div>
          <div className="iq-hero-grid">
            <div className="iq-hero-lead">
              <div className="iq-chip-row">
                <span className="iq-chip iq-chip-accent">Measurement, without the guesswork</span>
              </div>
              <h1>Know what your media <em>actually</em> drove.</h1>
              <p className="lede">Incrementality IQ runs every geo-experiment through <b>three independent causal models</b> — <b>GeoTwin™</b>, <b>CausalCore™</b>, and <b>DiffLens™</b> — then reconciles them into one boardroom-ready verdict. No black boxes. No cherry-picking. No waiting a quarter.</p>
              <div className="iq-feature-chips">
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Causal, not correlational</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>3-model consensus</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Results in minutes</span>
              </div>
              <div className="cta-row iq-cta-row">
                <PilotCTA className="btn btn-primary btn-lg">Start a 90-day pilot →</PilotCTA>
                <a href="#workflow" className="btn btn-ghost btn-lg">See the workflow</a>
              </div>
              <div className="iq-hero-micro">
                <span>Always-on</span><span className="sep">·</span>
                <span>Reproducible run hashes</span><span className="sep">·</span>
                <span>Your data stays in your workspace</span>
              </div>
            </div>

            {/* Consensus Verdict card */}
            <aside className="iq-verdict" aria-label="Sample consensus verdict">
              <div className="iq-verdict-head">
                <span className="iq-verdict-tag">Consensus Verdict · Illustrative</span>
                <span className="iq-verdict-id">EXP-2026-Q4-CTV-WEST</span>
              </div>
              <div className="iq-verdict-sub">Q4 CTV Brand Campaign — West</div>
              <div className="iq-verdict-big">
                <span className="iq-verdict-num">+7.0<small>%</small></span>
                <span className="iq-verdict-lab">consensus lift</span>
              </div>
              <div className="iq-verdict-tiles">
                <div className="iq-vt"><span className="iq-vt-lab">iROAS</span><span className="iq-vt-val">2.38</span></div>
                <div className="iq-vt"><span className="iq-vt-lab">iCPA</span><span className="iq-vt-val">$139</span></div>
                <div className="iq-vt"><span className="iq-vt-lab">Incr. orders</span><span className="iq-vt-val">8,940</span></div>
              </div>
              <div className="iq-verdict-rule"></div>
              <div className="iq-verdict-models">
                <div className="iq-vm"><span className="iq-vm-dot" data-m="geo"></span><span className="iq-vm-name">GeoTwin™ <em>SCM</em></span><span className="iq-vm-val">+7.6%</span></div>
                <div className="iq-vm"><span className="iq-vm-dot" data-m="core"></span><span className="iq-vm-name">CausalCore™ <em>BSTS</em></span><span className="iq-vm-val">+7.1%</span></div>
                <div className="iq-vm"><span className="iq-vm-dot" data-m="lens"></span><span className="iq-vm-name">DiffLens™ <em>DiD</em></span><span className="iq-vm-val">+6.4%</span></div>
              </div>
              <div className="iq-verdict-badge">
                <span className="iq-verdict-check">✓</span>
                <span><b>High confidence.</b> All three models agree on direction; two reach p&lt;0.05. Safe to scale.</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════ WORKFLOW GRID ═══════════ */}
      <section className="sp-section iq-workflow-section" id="workflow">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">The workflow.<br />Six steps, ~40 minutes end-to-end.</h2>
            <p className="section-sub">From raw panel data to a board-ready decision in one afternoon — not one quarter.</p>
          </div>
          <div className="iq-workflow">
            {[
              { num: "01", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h16M4 6l6 6-6 6M14 6l6 6-6 6"></path></svg>', title: "Choose a path", body: "Direct Flight if you already know your test markets. Market Select if you want the power analysis done for you." },
              { num: "02", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v14M6 9l6-6 6 6M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"></path></svg>', title: "Connect KPI data", body: "Historical daily geo KPI from your warehouse, Meta, GA4, Shopify or Snowflake. Schema validated on upload." },
              { num: "03", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6zM9 3v15M15 6v15"></path></svg>', title: "Select markets", body: "Monte Carlo across 58K+ pair permutations. Ranked by power, pre-period fit, and holdout cost." },
              { num: "04", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"></path></svg>', title: "Run analysis", body: "Three causal models execute in parallel. Live engine log, reproducible run hash, under 3 minutes to verdict." },
              { num: "05", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 11l3 3 8-8M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8"></path></svg>', title: "Consensus verdict", body: "Direction agreement, CI overlap, estimate agreement, and a placebo bias check reconciled into one grade.", accent: true },
              { num: "06", icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2a7 7 0 017 7c0 2.8-1.6 5.2-4 6.4V17a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1.6C6.6 14.2 5 11.8 5 9a7 7 0 017-7zM10 21h4"></path></svg>', title: "AI interpretation", body: "Analyst-grade narrative: what happened, why we trust it, what to do next. Board-ready in one click." },
            ].map(step => (
              <article key={step.num} className={`iq-wf-card${step.accent ? ' iq-wf-card-accent' : ''}`}>
                <div className="iq-wf-head">
                    <span className="iq-wf-num">{step.num}</span>
                    {step.icon && <span className="iq-wf-icon" dangerouslySetInnerHTML={{ __html: step.icon }} />}
                </div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY IT WORKS ═══════════ */}
      <section className="sp-section alt">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">The correlation era is over.</h2>
            <p className="section-sub">Platform-reported attribution tells you who saw an ad before a sale. It can&apos;t tell you whether the sale needed the ad to happen. Causal experimentation can. We built the infrastructure to run it continuously.</p>
          </div>
          <div className="sp-feats iq-feats">
            <div className="sp-feat">
              <div className="sp-feat-num">Design phase</div>
              <h4>Power before you spend.</h4>
              <p>ML ranks 58K+ test/control market combinations by pre-period predictive match. You launch with statistical power guaranteed — not hoped for.</p>
            </div>
            <div className="sp-feat">
              <div className="sp-feat-num">GeoTwin™</div>
              <h4>Synthetic-twin counterfactual.</h4>
              <p>A weighted blend of control DMAs whose historical pattern mirrors your test market within a 0.012 pre-fit L2 error. When the campaign runs, the gap is the lift.</p>
            </div>
            <div className="sp-feat">
              <div className="sp-feat-num">Tri-model</div>
              <h4>Three models. One verdict.</h4>
              <p>Every study runs through GeoTwin™ (SCM), CausalCore™ (BSTS), and DiffLens™ (DiD). We report only the range all three agree on. No cherry-picking.</p>
            </div>
            <div className="sp-feat">
              <div className="sp-feat-num">Placebo</div>
              <h4>Self-validating.</h4>
              <p>Every model also runs on 22 sham windows where no lift should exist. If residual lift appears there, the calibration is off — and we flag it before you trust the result.</p>
            </div>
            <div className="sp-feat">
              <div className="sp-feat-num">Always-on</div>
              <h4>Continuous, not quarterly.</h4>
              <p>Most MMM studies run once a quarter. MemoLogs runs experiments continuously — so channel incrementality shifts surface in days, not months.</p>
            </div>
            <div className="sp-feat">
              <div className="sp-feat-num">Reproducible</div>
              <h4>Signed run hashes.</h4>
              <p>Every verdict ships with an immutable run hash, seed, donor weights, and data snapshot. Re-run tomorrow, you get the same answer. Auditors love it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tri-model consensus */}
      <section className="sp-section iq-tri-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">The tri-model <em>consensus</em> engine.</h2>
            <p className="section-sub">Each model answers the same question a different way. When they agree, you can act. When they don&apos;t, we surface why — and what to change before you scale.</p>
          </div>

          <div className="iq-tri">
            <article className="iq-model iq-model-geo">
              <div className="iq-model-head">
                <div className="iq-model-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v18M3 12h18"/>
                  </svg>
                </div>
                <div className="iq-model-meta">
                  <span className="iq-model-kicker">Model 01 · Synthetic Control</span>
                  <h3>GeoTwin<span className="iq-tm">™</span></h3>
                </div>
                <span className="iq-model-badge">SCM</span>
              </div>
              <p className="iq-model-desc">Builds a synthetic twin market from a weighted blend of donor DMAs and measures the gap between the twin and the treatment trajectory.</p>
              <dl className="iq-model-specs">
                <div><dt>Donor DMAs weighted</dt><dd>14 / 22</dd></div>
                <div><dt>Pre-fit L2 error</dt><dd>0.012</dd></div>
                <div><dt>Placebo p-value</dt><dd>0.031</dd></div>
                <div><dt>Lift estimate</dt><dd className="iq-model-lift">+7.6%</dd></div>
              </dl>
            </article>

            <article className="iq-model iq-model-core">
              <div className="iq-model-head">
                <div className="iq-model-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M3 17c3-2 6-2 9 0s6 2 9 0M3 12c3-2 6-2 9 0s6 2 9 0M3 7c3-2 6-2 9 0s6 2 9 0"/>
                  </svg>
                </div>
                <div className="iq-model-meta">
                  <span className="iq-model-kicker">Model 02 · Bayesian Time-Series</span>
                  <h3>CausalCore<span className="iq-tm">™</span></h3>
                </div>
                <span className="iq-model-badge">BSTS</span>
              </div>
              <p className="iq-model-desc">Bayesian structural time-series forecasts the counterfactual. Posterior intervals quantify uncertainty with mathematical rigor.</p>
              <dl className="iq-model-specs">
                <div><dt>Posterior draws</dt><dd>10,000</dd></div>
                <div><dt>R² (pre-period)</dt><dd>0.961</dd></div>
                <div><dt>Tail probability</dt><dd>0.028</dd></div>
                <div><dt>Lift estimate</dt><dd className="iq-model-lift">+7.1%</dd></div>
              </dl>
            </article>

            <article className="iq-model iq-model-lens">
              <div className="iq-model-head">
                <div className="iq-model-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M3 20L21 4M5 4h6v6M13 20h6v-6"/>
                  </svg>
                </div>
                <div className="iq-model-meta">
                  <span className="iq-model-kicker">Model 03 · Difference-in-Differences</span>
                  <h3>DiffLens<span className="iq-tm">™</span></h3>
                </div>
                <span className="iq-model-badge">DiD</span>
              </div>
              <p className="iq-model-desc">Two-way fixed-effects regression — the classic econometric benchmark. Robust, simple, widely trusted by CFOs and auditors alike.</p>
              <dl className="iq-model-specs">
                <div><dt>Parallel-trends test</dt><dd>Pass</dd></div>
                <div><dt>Clustered SE</dt><dd>0.0192</dd></div>
                <div><dt>Coefficient p-value</dt><dd>0.048</dd></div>
                <div><dt>Lift estimate</dt><dd className="iq-model-lift">+6.4%</dd></div>
              </dl>
            </article>
          </div>

          <div className="iq-consensus-banner">
            <div className="iq-cb-left">
              <span className="iq-cb-tag">Consensus Verdict</span>
              <div className="iq-cb-big">+7.0%</div>
              <span className="iq-cb-sub">range: +6.4% to +7.6% · all three models agree</span>
            </div>
            <div className="iq-cb-checks">
              <div className="iq-cb-check"><span className="iq-cb-check-lab">Direction agrees</span><span className="iq-cb-check-val">3 / 3</span></div>
              <div className="iq-cb-check"><span className="iq-cb-check-lab">Models significant</span><span className="iq-cb-check-val">2 / 3 <em>p&lt;0.05</em></span></div>
              <div className="iq-cb-check"><span className="iq-cb-check-lab">CI overlap</span><span className="iq-cb-check-val">Yes <em>90% band</em></span></div>
              <div className="iq-cb-check"><span className="iq-cb-check-lab">Estimate agreement</span><span className="iq-cb-check-val">92%</span></div>
            </div>
          </div>
        </div>
      </section>


      {/* Charts section */}
      <section className="sp-section alt iq-charts-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">See the lift. See the decay.<br />See the counterfactual.</h2>
            <p className="section-sub">Every consensus verdict ships with the visualizations that prove it — the trajectory your campaign caused, the trajectory your market would have taken without it, and how long the lift persists after the flight ends.</p>
          </div>

          {/* Counterfactual chart */}
          <article className="iq-chart">
            <header className="iq-chart-head">
              <div>
                <span className="iq-chart-tag">GeoTwin™ · Synthetic control</span>
                <h3>Observed vs. Counterfactual — daily orders</h3>
              </div>
              <div className="iq-chart-legend">
                <span className="iq-legend-item"><span className="iq-legend-line teal"></span>Observed</span>
                <span className="iq-legend-item"><span className="iq-legend-line dashed"></span>Counterfactual twin</span>
                <span className="iq-legend-item"><span className="iq-legend-swatch lift"></span>Lift zone</span>
              </div>
            </header>
            <svg viewBox="0 0 900 230" className="iq-chart-svg" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="iqCf-ci" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.04" />
                </linearGradient>
                <linearGradient id="iqCf-lift" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                <line x1="40" x2="880" y1="30" y2="30" /><line x1="40" x2="880" y1="80" y2="80" />
                <line x1="40" x2="880" y1="130" y2="130" /><line x1="40" x2="880" y1="180" y2="180" />
              </g>
              <g fill="#5A6377" fontSize="10" fontFamily="JetBrains Mono, monospace">
                <text x="10" y="34">1400</text><text x="10" y="84">1100</text>
                <text x="10" y="134">800</text><text x="10" y="184">500</text>
              </g>
              <line x1="540" x2="540" y1="20" y2="195" stroke="#00FFC2" strokeWidth="1" strokeDasharray="4 4" opacity="0.55" />
              <text x="548" y="30" fill="#00FFC2" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono, monospace">Treatment start · Oct 1</text>
              <path d="M540 138 L580 140 L620 143 L660 145 L700 147 L740 149 L780 151 L820 152 L860 153 L860 170 L820 169 L780 168 L740 166 L700 164 L660 162 L620 159 L580 156 L540 152 Z" fill="url(#iqCf-ci)" />
              <path d="M40 155 L80 152 L120 154 L160 150 L200 148 L240 146 L280 150 L320 147 L360 144 L400 140 L440 145 L480 141 L520 138 L540 135 L580 118 L620 108 L660 100 L700 92 L740 94 L780 88 L820 84 L860 80" stroke="#00FFC2" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M40 155 L80 152 L120 154 L160 150 L200 148 L240 146 L280 150 L320 147 L360 144 L400 140 L440 145 L480 141 L520 138 L540 135 L580 144 L620 147 L660 150 L700 152 L740 154 L780 156 L820 158 L860 160" stroke="#8A93A6" strokeWidth="1.8" fill="none" strokeDasharray="5 5" strokeLinejoin="round" />
              <path d="M540 135 L580 118 L620 108 L660 100 L700 92 L740 94 L780 88 L820 84 L860 80 L860 160 L820 158 L780 156 L740 154 L700 152 L660 150 L620 147 L580 144 L540 135 Z" fill="url(#iqCf-lift)" />
              <g fill="#5A6377" fontSize="10" fontFamily="JetBrains Mono, monospace">
                <text x="40" y="215">Jul 1</text><text x="220" y="215">Aug 1</text>
                <text x="400" y="215">Sep 1</text><text x="540" y="215" fill="#00FFC2">Oct 1</text>
                <text x="720" y="215">Oct 15</text><text x="872" y="215" textAnchor="end">Oct 28</text>
              </g>
            </svg>
            <footer className="iq-chart-foot">
              <div className="iq-chart-meta">
                <span><b>14 of 22</b> donor DMAs weighted</span>
                <span><b>0.012</b> pre-fit L2 error</span>
                <span><b>p = 0.031</b> placebo test</span>
              </div>
            </footer>
          </article>

          {/* Effect decay curve */}
          <article className="iq-chart">
            <header className="iq-chart-head">
              <div>
                <span className="iq-chart-tag">Effect persistence</span>
                <h3>Effect Decay Curve — how long does the lift last?</h3>
              </div>
              <div className="iq-chart-legend">
                <span className="iq-legend-pill"><em>Half-life</em><b>14.0d</b></span>
                <span className="iq-legend-pill"><em>Peak lift</em><b>+9.8%</b></span>
                <span className="iq-legend-pill"><em>Residual @ 21d</em><b>+3.1%</b></span>
              </div>
            </header>
            <svg viewBox="0 0 900 240" className="iq-chart-svg" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="iqDec-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                <line x1="46" x2="880" y1="30" y2="30" /><line x1="46" x2="880" y1="80" y2="80" />
                <line x1="46" x2="880" y1="130" y2="130" /><line x1="46" x2="880" y1="180" y2="180" />
              </g>
              <g fill="#5A6377" fontSize="10" fontFamily="JetBrains Mono, monospace">
                <text x="10" y="34">+12%</text><text x="10" y="84">+8%</text>
                <text x="10" y="134">+4%</text><text x="10" y="184">0%</text>
              </g>
              <line x1="46" x2="880" y1="180" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="420" x2="420" y1="20" y2="210" stroke="#00FFC2" strokeWidth="1" strokeDasharray="4 4" opacity="0.55" />
              <text x="425" y="32" fill="#00FFC2" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono, monospace">Flight end · Day 28</text>
              <line x1="620" x2="620" y1="100" y2="210" stroke="#FFB347" strokeWidth="1" strokeDasharray="3 3" opacity="0.55" />
              <text x="625" y="112" fill="#FFB347" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono, monospace">Half-life · 14d</text>
              <path d="M46 180 L76 170 L106 160 L136 145 L166 130 L196 118 L226 108 L256 98 L286 88 L316 78 L346 70 L376 62 L406 55 L420 52 L450 62 L480 78 L510 96 L540 108 L570 118 L600 128 L620 134 L650 144 L680 152 L710 160 L740 166 L770 170 L800 173 L830 175 L860 177 L880 178" stroke="#00FFC2" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M46 180 L76 170 L106 160 L136 145 L166 130 L196 118 L226 108 L256 98 L286 88 L316 78 L346 70 L376 62 L406 55 L420 52 L450 62 L480 78 L510 96 L540 108 L570 118 L600 128 L620 134 L650 144 L680 152 L710 160 L740 166 L770 170 L800 173 L830 175 L860 177 L880 178 L880 180 L46 180 Z" fill="url(#iqDec-fill)" />
              <path d="M420 52 Q520 70 620 134 T820 176" stroke="#FFB347" strokeWidth="1.5" fill="none" strokeDasharray="5 4" opacity="0.9" />
              <circle cx="420" cy="52" r="4" fill="#00FFC2" />
              <circle cx="420" cy="52" r="9" fill="none" stroke="#00FFC2" strokeOpacity="0.4" strokeWidth="1.5" />
              <g fill="#5A6377" fontSize="10" fontFamily="JetBrains Mono, monospace">
                <text x="46" y="228">Day 0</text><text x="170" y="228">Day 7</text>
                <text x="290" y="228">Day 14</text><text x="406" y="228" fill="#00FFC2">Day 28</text>
                <text x="520" y="228">Day 35</text><text x="640" y="228">Day 42</text>
                <text x="760" y="228">Day 49</text><text x="872" y="228" textAnchor="end">Day 56</text>
              </g>
              <text x="190" y="22" fill="#00FFC2" fontSize="10" fontWeight="600" letterSpacing="1" fontFamily="JetBrains Mono, monospace">TREATMENT</text>
              <text x="620" y="22" fill="#5A6377" fontSize="10" fontWeight="600" letterSpacing="1" fontFamily="JetBrains Mono, monospace">POST-TREATMENT</text>
            </svg>
            <footer className="iq-chart-foot">
              <div className="iq-chart-meta">
                <span><b>Observed lift</b> — solid teal</span>
                <span><b>Decay fit</b> — dashed amber</span>
              </div>
              <p className="iq-chart-takeaway"><b>Flighting takeaway:</b> a 14-day half-life means spacing flights 3–4 weeks apart compounds well. Quarterly pulses retain ≈60% of peak lift on re-entry. Continuous flighting isn&apos;t necessary.</p>
            </footer>
          </article>
        </div>
      </section>

      {/* AI Insights + Market Decomposition */}
      <section className="sp-section iq-insights-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Analyst-grade interpretation.<br />One click.</h2>
            <p className="section-sub">Every verdict is paired with an AI Insights Engine that scores confidence, flags caveats, and produces a boardroom-ready narrative — plus a per-DMA decomposition so you know exactly which markets carried the lift and which underperformed.</p>
          </div>

          <div className="iq-insights-grid">
            {/* AI Insights Engine rail */}
            <aside className="iq-ai-rail">
              <header className="iq-ai-head">
                <div className="iq-ai-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" /><circle cx="12" cy="12" r="4" /></svg>
                </div>
                <div>
                  <p className="iq-ai-title">AI Insights Engine</p>
                  <p className="iq-ai-sub">Grounded in the 3-model readout</p>
                </div>
              </header>

              <div className="iq-ai-confidence">
                <div className="iq-ai-conf-head">
                  <span>High confidence</span>
                  <span className="iq-ai-conf-val">87 / 100</span>
                </div>
                <div className="iq-ai-bar"><div className="iq-ai-bar-fill" style={{ width: '87%' }}></div></div>
                <p className="iq-ai-conf-note">All three models converge on a positive, statistically-meaningful lift. Every diagnostic passes. Safe to inform scaling decisions.</p>
              </div>

              <ul className="iq-ai-checks">
                <li className="iq-ai-check iq-ai-pass"><span className="iq-ai-mark">✓</span><div><b>Raw results</b><p>SCM +7.6%, BSTS +7.1%, DiD +6.4%. Tight 1.2 pp spread.</p></div></li>
                <li className="iq-ai-check iq-ai-pass"><span className="iq-ai-mark">✓</span><div><b>Placebo / bias check</b><p>Mean placebo lift +0.4% across 22 sham windows. No structural bias.</p></div></li>
                <li className="iq-ai-check iq-ai-info"><span className="iq-ai-mark">i</span><div><b>Covariate isolation</b><p>CTV was the only channel adjusted. Paid search &amp; social held flat (±2%).</p></div></li>
                <li className="iq-ai-check iq-ai-info"><span className="iq-ai-mark">i</span><div><b>Window &amp; seasonality</b><p>28-day window above power threshold. Pre-period covers prior-year Oct.</p></div></li>
                <li className="iq-ai-check iq-ai-pass"><span className="iq-ai-mark">✓</span><div><b>Measurement integrity</b><p>100% panel coverage. Zero zero-spend rows. Reconciled with GA4.</p></div></li>
              </ul>

              <div className="iq-ai-reco">
                <span className="iq-ai-reco-tag">Recommendation</span>
                <p><b>Act with confidence.</b> Scale CTV spend 15–20% next flight, rotate Las Vegas (weakest donor fit) for Salt Lake City, and hold the window at 28 days.</p>
              </div>
            </aside>

            {/* Market-level decomposition */}
            <div className="iq-markets">
              <header className="iq-markets-head">
                <div>
                  <h3>Market-level insights</h3>
                  <p>Per-DMA decomposition of the consensus lift · model-adjusted</p>
                </div>
                <span className="iq-markets-badge">4 treatment · 22 control</span>
              </header>

              <ol className="iq-market-list">
                <li>
                  <div className="iq-m-val iq-m-val-good">+8.4%</div>
                  <div className="iq-m-meta"><b>Seattle-Tacoma</b><span>donor R=0.96 · 2,870 incr. orders</span></div>
                  <p>Strongest of the four treatment DMAs. Pre-period donor fit is excellent (L2=0.008). Oct 18 holiday slightly inflates local SCM; stripping that day shifts Seattle to +7.9%, still above average.</p>
                </li>
                <li>
                  <div className="iq-m-val iq-m-val-good">+7.2%</div>
                  <div className="iq-m-meta"><b>Portland</b><span>donor R=0.94 · 2,180 incr. orders</span></div>
                  <p>On-trend with the consensus. Effect builds steadily through week 2 and holds. Historically low variance and tight correlation with Seattle make Portland&apos;s estimate robust to donor-pool perturbations.</p>
                </li>
                <li>
                  <div className="iq-m-val iq-m-val-good">+6.9%</div>
                  <div className="iq-m-meta"><b>Denver</b><span>donor R=0.92 · 2,050 incr. orders</span></div>
                  <p>Slightly below group mean but well within the CI. Denver&apos;s counterfactual weights Phoenix, Austin and Minneapolis heaviest. Lift is stable across all three models — no methodology-specific artifact.</p>
                </li>
                <li>
                  <div className="iq-m-val iq-m-val-warn">+5.8%</div>
                  <div className="iq-m-meta"><b>Las Vegas</b><span>donor R=0.87 · 1,840 incr. orders</span></div>
                  <p>Weakest donor-pool fit of the treatment group — event-driven tourism spikes reduce pre-period correlation. Still positive and directionally consistent, but swapping in Salt Lake City next flight will tighten control.</p>
                </li>
              </ol>

              <footer className="iq-markets-foot">
                <span>All four treatment DMAs posted positive lift · range 5.8% – 8.4%</span>
                <span className="iq-run-hash"><b>Run hash</b> <code>a14f · reproducible · signed</code></span>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">From the verdict to the <em>next dollar</em>.</h2>
            <p className="section-sub">Measurement isn&apos;t the end of the workflow. Every trusted lift result anchors the <b>Budget Planner</b> — a causal media-mix model whose backbone is your own live geo-experiments, not a periodic calibration — so you can plan next quarter from what you measured, not what a model inferred from history.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(238px, 1fr))", gap: 18 }}>
            {[
              { h: "Allocate cross-channel", b: "Split the next budget to maximize measured incremental outcome — bounded to the spend range your experiments actually validated, never extrapolated." },
              { h: "Forecast the reallocation", b: "See the projected lift of moving spend from current to recommended, with credible intervals — not a single point guess." },
              { h: "Gated to what it can defend", b: "Every plan carries a trust state. When the model isn’t trustworthy, the planner shows your measured test history instead of a confident number." },
            ].map((f) => (
              <div key={f.h} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 20px 22px" }}>
                <div style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 7 }}>
                  <span aria-hidden="true" style={{ color: "#00FFC2", fontWeight: 700, flexShrink: 0 }}>→</span>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "#FBFBFD", margin: 0 }}>{f.h}</h3>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,0.66)", margin: 0, paddingLeft: 18 }}>{f.b}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.42)", margin: "16px 0 0" }}>Ask it in the Co-Pilot, or open the Budget Planner — every recommendation carries its trust state.</p>
        </div>
      </section>

{/*       
      <section className="sp-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">See GeoTwin™ in action.</h2>
            <p className="section-sub">Walk through the four phases of a live geo-lift study — from market selection to validated lift.</p>
          </div>
          <GeoLiftDemo />
        </div>
      </section>

      <section className="sp-close-cta">
        <div className="wrap">
          <div className="scc-inner">
            <h2>Ready to measure what actually moved the needle?</h2>
            <p>Book a 30-minute pilot-scoping call. We&apos;ll walk through the methodology on your data and tell you honestly what a geo-lift study would show.</p>
            <Link href="/#contact" className="btn btn-primary btn-lg">Start a 90-day pilot →</Link>
          </div>
        </div>
      </section> */}

      <section className="sp-section alt">
        <div className="wrap">
          <blockquote className="sp-quote">
            <p>&ldquo;We had been spending on branded search for years because the platform said it was our best channel. MemoLogs proved it was 11× inflated. That one insight paid back the whole contract.&rdquo;</p>
            <cite>VP Growth · Consumer fintech</cite>
          </blockquote>

          <div className="sp-cta-inline">
            <div>
              <h3>See it on your account.</h3>
              <p>Scoping call · 30 min · free · zero obligation.</p>
            </div>
            <PilotCTA className="btn btn-primary btn-lg">Book a pilot →</PilotCTA>
          </div>

          <div className="sp-nav-next">
            <span>← <Link href="/">Back to platform</Link></span>
            <span><Link href="/creative-iq">Creative IQ</Link> →</span>
          </div>
        </div>
      </section>
    </>
  );
}
