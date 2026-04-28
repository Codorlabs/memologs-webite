import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  title: "Creative IQ — Creative Fatigue Detection | MemoLogs",
  description: "7-signal fatigue detection at the asset level. Know when your creative dies — before the metrics do. 11–18 days earlier than CPA-based alerts.",
};

export default function CreativeIQPage() {
  return (
    <>
      <section className="subpage-hero cq-hero" aria-labelledby="cq-h1">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">Platform</Link> <span>›</span> Creative IQ</div>
          <div className="cq-hero-grid">
            <div className="cq-hero-lead">
              <span className="iq-chip iq-chip-accent">Creative Fatigue Detection</span>
              <h1 id="cq-h1">Know when creative dies <em>before</em> the metrics do.</h1>
              <p className="lede">We don&apos;t generate ads. We diagnose them. <b>Creative IQ</b> reads seven leading fatigue signals at the asset level — so you know which specific hook, frame, or caption is dying, 11 to 18 days before CPA spikes reveal the damage.</p>
              <div className="iq-feature-chips">
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Asset-level, not campaign-level</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>7-signal health score</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>AI-ranked refresh queue</span>
              </div>
              <div className="cta-row iq-cta-row">
                <PilotCTA className="btn btn-primary btn-lg">Start a 90-day pilot →</PilotCTA>
                <a href="#signals" className="btn btn-ghost btn-lg">See the 7 signals</a>
              </div>
              <div className="iq-hero-micro">
                <span>11–18 days earlier than CPA-based alerts</span>
                <span className="sep">·</span>
                <span>20–40% overspend avoided</span>
                <span className="sep">·</span>
                <span>Meta · TikTok · YouTube</span>
              </div>
            </div>
            <aside className="cq-hero-viz" aria-label="Creative IQ — fatigue scene">
              <div className="cq-stage">
                <div className="cq-glow cq-glow-a"></div>
                <div className="cq-glow cq-glow-b"></div>
                <div className="cq-card cq-card-back">
                  <div className="cq-card-media" data-heat="cool"><span className="cq-card-badge">Ad 02</span></div>
                  <div className="cq-card-foot"><span className="cq-pill ok">Healthy · 82</span></div>
                </div>
                <div className="cq-card cq-card-mid">
                  <div className="cq-card-media" data-heat="warm"><span className="cq-card-badge">Ad 03</span></div>
                  <div className="cq-card-foot"><span className="cq-pill mid">Watch · 54</span></div>
                </div>
                <div className="cq-card cq-card-front">
                  <div className="cq-card-media" data-heat="hot">
                    <div className="cq-heatmap" aria-hidden="true">
                      <span className="cq-hot" style={{left:"68%",top:"32%",["--s" as string]:"100px"}}></span>
                      <span className="cq-hot" style={{left:"30%",top:"60%",["--s" as string]:"80px"}}></span>
                      <span className="cq-hot" style={{left:"78%",top:"78%",["--s" as string]:"58px"}}></span>
                    </div>
                    <span className="cq-card-badge">Ad 04 · video</span>
                    <div className="cq-play" aria-hidden="true">▶</div>
                  </div>
                  <div className="cq-card-foot">
                    <span className="cq-pill bad">Fatigued · 24</span>
                    <span className="cq-card-refresh">Refresh now →</span>
                  </div>
                </div>
                <span className="cq-orb cq-orb-ctr"><span className="cq-orb-val">−38%</span><span className="cq-orb-lab">CTR decay</span></span>
                <span className="cq-orb cq-orb-freq"><span className="cq-orb-val">11.2×</span><span className="cq-orb-lab">Frequency</span></span>
                <span className="cq-orb cq-orb-cpa"><span className="cq-orb-val">+27%</span><span className="cq-orb-lab">CPA drift</span></span>
                <span className="cq-orb cq-orb-over"><span className="cq-orb-val">64%</span><span className="cq-orb-lab">Overlap</span></span>
                <div className="cq-tray">
                  <div className="cq-tray-head">
                    <span className="cq-tray-lab">Refresh queue</span>
                    <span className="cq-tray-count">3 variants ranked</span>
                  </div>
                  <div className="cq-tray-items">
                    <div className="cq-queue"><span>V1</span><em>+18% pred.</em></div>
                    <div className="cq-queue"><span>V2</span><em>+11% pred.</em></div>
                    <div className="cq-queue"><span>V3</span><em>+9% pred.</em></div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CPA lag chart */}
      <section className="sp-section cq-lag-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">CPA is a <em>lagging</em> indicator.<br />Fatigue isn&apos;t.</h2>
            <p className="section-sub">By the time your CPA chart spikes, the audience has already moved on from the creative. The leading signals were there all along — CTR drifted, frequency climbed, sentiment cooled. Creative IQ reads them in real time so you act before the bill lands.</p>
          </div>

          <div className="cq-lag-chart">
            <header className="cq-lag-head">
              <div className="cq-lag-legend">
                <span className="cq-lag-legend-item"><span className="cq-lag-line teal"></span>Creative health (leading)</span>
                <span className="cq-lag-legend-item"><span className="cq-lag-line coral"></span>CPA (lagging)</span>
                <span className="cq-lag-legend-item"><span className="cq-lag-zone"></span>Detection gap — 11 to 18 days</span>
              </div>
              <span className="cq-lag-badge">Real pilot · SKU-447 · Meta</span>
            </header>
            <svg viewBox="0 0 900 260" className="cq-lag-svg" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="cqHealth" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="cqCpa" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FF6B5B" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#FF6B5B" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                <line x1="50" x2="880" y1="40" y2="40" /><line x1="50" x2="880" y1="100" y2="100" />
                <line x1="50" x2="880" y1="160" y2="160" /><line x1="50" x2="880" y1="210" y2="210" />
              </g>
              <g fill="#5A6377" fontFamily="JetBrains Mono, monospace" fontSize="10">
                <text x="10" y="44">100</text><text x="10" y="104">70</text>
                <text x="10" y="164">40</text><text x="10" y="214">10</text>
              </g>
              <rect x="320" y="20" width="240" height="200" fill="rgba(255,179,71,0.05)" stroke="rgba(255,179,71,0.3)" strokeDasharray="4 4" strokeWidth="1" />
              <text x="330" y="36" fill="#FFB347" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700">DETECTION GAP · 14 DAYS</text>
              <path d="M50 55 L120 60 L190 72 L260 92 L320 112 L400 138 L480 162 L560 178 L620 190 L700 198 L770 202 L830 204 L880 205" stroke="#00FFC2" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 55 L120 60 L190 72 L260 92 L320 112 L400 138 L480 162 L560 178 L620 190 L700 198 L770 202 L830 204 L880 205 L880 220 L50 220 Z" fill="url(#cqHealth)" />
              <path d="M50 190 L120 188 L190 186 L260 184 L320 180 L400 174 L480 162 L560 138 L620 108 L700 80 L770 62 L830 52 L880 48" stroke="#FF6B5B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 190 L120 188 L190 186 L260 184 L320 180 L400 174 L480 162 L560 138 L620 108 L700 80 L770 62 L830 52 L880 48 L880 220 L50 220 Z" fill="url(#cqCpa)" />
              <circle cx="320" cy="112" r="5" fill="#00FFC2" />
              <circle cx="320" cy="112" r="10" fill="none" stroke="#00FFC2" strokeOpacity="0.4" strokeWidth="1.5" />
              <text x="180" y="94" fill="#00FFC2" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700">⚠ Fatigue signal</text>
              <circle cx="560" cy="138" r="5" fill="#FF6B5B" />
              <circle cx="560" cy="138" r="10" fill="none" stroke="#FF6B5B" strokeOpacity="0.4" strokeWidth="1.5" />
              <text x="584" y="130" fill="#FF6B5B" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700">CPA spike (too late)</text>
              <g fill="#5A6377" fontFamily="JetBrains Mono, monospace" fontSize="10">
                <text x="50" y="250">Day 0</text><text x="200" y="250">Day 7</text>
                <text x="320" y="250" fill="#00FFC2">Day 14</text><text x="480" y="250">Day 21</text>
                <text x="560" y="250" fill="#FF6B5B">Day 28</text><text x="700" y="250">Day 35</text>
                <text x="872" y="250" textAnchor="end">Day 42</text>
              </g>
            </svg>
            <footer className="cq-lag-foot">
              <div className="cq-lag-meta">
                <span><b>14 days</b> from fatigue detection</span>
                <span><b>28 days</b> from CPA reveal</span>
                <span><b>$64K</b> typical overspend in the gap</span>
              </div>
              <p className="cq-lag-takeaway"><b>Takeaway:</b> acting on the teal curve saves ~40% of the red curve&apos;s damage — and preserves ad-set velocity you&apos;d otherwise have to rebuild.</p>
            </footer>
          </div>
        </div>
      </section>

      {/* 7 Signals */}
      <section className="sp-section alt cq-signals-section" id="signals">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Seven signals. One health score.<br />Zero guessing.</h2>
            <p className="section-sub">Every active asset is scored nightly on seven leading signals, weighted and normalized against your own historical cohorts. When the composite drops below 40, the refresh queue triggers automatically.</p>
          </div>

          <div className="cq-signals">
            <article className="cq-signal">
              <div className="cq-sig-head">
                <div className="cq-sig-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 20h18M6 16l4-5 4 4 5-7" /></svg>
                </div>
                <div><span className="cq-sig-num">Signal 01</span><h3>CTR decay</h3></div>
                <span className="cq-sig-weight">21%</span>
              </div>
              <p>Rolling 7-day CTR slope vs. cohort baseline. Sharpest early indicator — catches novelty-effect decline before any other metric.</p>
              <div className="cq-sig-bar"><div className="cq-sig-fill bad" style={{ width: '82%' }}></div></div>
              <span className="cq-sig-val bad">82 · Critical</span>
            </article>

            <article className="cq-signal">
              <div className="cq-sig-head">
                <div className="cq-sig-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 5h14l-4 4h-7l-3-3v-1zM3 12h18M3 19h14M3 5v14" /></svg>
                </div>
                <div><span className="cq-sig-num">Signal 02</span><h3>Frequency</h3></div>
                <span className="cq-sig-weight">18%</span>
              </div>
              <p>Per-user exposure rate. Modeled against cohort saturation ceiling. Triggers when frequency exceeds historical burnout threshold.</p>
              <div className="cq-sig-bar"><div className="cq-sig-fill bad" style={{ width: '91%' }}></div></div>
              <span className="cq-sig-val bad">11.2× · Saturated</span>
            </article>

            <article className="cq-signal">
              <div className="cq-sig-head">
                <div className="cq-sig-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" /></svg>
                </div>
                <div><span className="cq-sig-num">Signal 03</span><h3>CPA drift</h3></div>
                <span className="cq-sig-weight">16%</span>
              </div>
              <p>Short-window CPA slope vs. campaign baseline. Confirmatory — arrives after CTR but before ad-set CPA noticeably shifts.</p>
              <div className="cq-sig-bar"><div className="cq-sig-fill mid" style={{ width: '73%' }}></div></div>
              <span className="cq-sig-val mid">+27% · Warn</span>
            </article>

            <article className="cq-signal">
              <div className="cq-sig-head">
                <div className="cq-sig-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 19L10 13l4 4 6-7" /><path d="M20 10V6h-4" /></svg>
                </div>
                <div><span className="cq-sig-num">Signal 04</span><h3>Engagement slope</h3></div>
                <span className="cq-sig-weight">14%</span>
              </div>
              <p>Watch-through, save, share, and comment velocity. Detects silent disengagement that doesn&apos;t yet show in click-based metrics.</p>
              <div className="cq-sig-bar"><div className="cq-sig-fill mid" style={{ width: '66%' }}></div></div>
              <span className="cq-sig-val mid">−22% · Watch</span>
            </article>

            <article className="cq-signal">
              <div className="cq-sig-head">
                <div className="cq-sig-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M8 13a4 4 0 008 0M9 9h.01M15 9h.01" /></svg>
                </div>
                <div><span className="cq-sig-num">Signal 05</span><h3>Sentiment decay</h3></div>
                <span className="cq-sig-weight">10%</span>
              </div>
              <p>Comment and reply tonality scored with a fine-tuned LLM. Early warning when the audience starts parodying the creative.</p>
              <div className="cq-sig-bar"><div className="cq-sig-fill ok" style={{ width: '42%' }}></div></div>
              <span className="cq-sig-val ok">Stable · 0.78</span>
            </article>

            <article className="cq-signal">
              <div className="cq-sig-head">
                <div className="cq-sig-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="8" cy="12" r="5" /><circle cx="16" cy="12" r="5" /></svg>
                </div>
                <div><span className="cq-sig-num">Signal 06</span><h3>Audience overlap</h3></div>
                <span className="cq-sig-weight">11%</span>
              </div>
              <p>Overlap with your other active ad sets via Andromeda entity clustering. High overlap amplifies burnout faster than either set alone predicts.</p>
              <div className="cq-sig-bar"><div className="cq-sig-fill bad" style={{ width: '78%' }}></div></div>
              <span className="cq-sig-val bad">64% · Overlap</span>
            </article>

            <article className="cq-signal">
              <div className="cq-sig-head">
                <div className="cq-sig-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 20l5-5 5 2 5-9 5 5" /><circle cx="16" cy="8" r="1.5" /></svg>
                </div>
                <div><span className="cq-sig-num">Signal 07</span><h3>Competitive pressure</h3></div>
                <span className="cq-sig-weight">10%</span>
              </div>
              <p>Share-of-voice changes in your priority markets via public ad library signals. Rising competitor spend compresses your attention window.</p>
              <div className="cq-sig-bar"><div className="cq-sig-fill mid" style={{ width: '58%' }}></div></div>
              <span className="cq-sig-val mid">+18% SOV · Watch</span>
            </article>

            <article className="cq-signal cq-signal-composite">
              <div className="cq-sig-head">
                <div className="cq-sig-ico cq-sig-ico-accent" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <div><span className="cq-sig-num">Composite</span><h3>Creative Health Score</h3></div>
              </div>
              <p>All seven signals weighted and normalized against your cohort. 0–100 scale. Below 40 = refresh now. Below 60 = watch weekly.</p>
              <div className="cq-score-ring" aria-label="Health score: 24 out of 100">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#FF6B5B" strokeWidth="8" strokeDasharray="264" strokeDashoffset="200" strokeLinecap="round" transform="rotate(-90 50 50)" />
                </svg>
                <div className="cq-score-num">24</div>
                <div className="cq-score-lab">Refresh now</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Asset dashboard */}
      <section className="sp-section cq-dash-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Every asset scored.<br />Every element inspectable.</h2>
            <p className="section-sub">Creative IQ doesn&apos;t stop at &ldquo;this campaign is tired.&rdquo; It tells you which ad, which hook, which frame, which caption is dying — so your refresh is targeted, not a total rewrite.</p>
          </div>

          <div className="cq-dash">
            <div className="aq-dash-chrome">
              <div className="aq-dash-dots" aria-hidden="true"><span></span><span></span><span></span></div>
              <div className="aq-dash-tab">Creative IQ · Asset health</div>
              <div className="aq-dash-user">RS</div>
            </div>

            <div className="cq-dash-body">
              <header className="cq-dash-bar">
                <div>
                  <b>Ad set · SKU-447</b>
                  <span>12 active assets · Meta + TikTok</span>
                </div>
                <div className="cq-dash-filters">
                  <span className="cq-dash-filter active">All health</span>
                  <span className="cq-dash-filter">Refresh ≤ 40</span>
                  <span className="cq-dash-filter">Watch 41–59</span>
                  <span className="cq-dash-filter">Healthy 60+</span>
                </div>
              </header>

              <div className="cq-asset-table">
                <div className="cq-asset-row cq-asset-head">
                  <span>Asset</span>
                  <span>Health</span>
                  <span>Top signal</span>
                  <span>Dying element</span>
                  <span>Action</span>
                </div>

                <div className="cq-asset-row cq-asset-bad">
                  <div className="cq-asset-meta">
                    <div className="cq-asset-thumb" data-heat="hot"><span>04</span></div>
                    <div><b>Ad 04 · video</b><em>Andromeda #a88f</em></div>
                  </div>
                  <div className="cq-asset-health">
                    <div className="cq-asset-bar"><div style={{ width: '24%' }} className="bad"></div></div>
                    <span className="bad">24</span>
                  </div>
                  <div className="cq-asset-sig">
                    <span className="cq-asset-sig-name">Frequency</span>
                    <span className="cq-asset-sig-val bad">11.2×</span>
                  </div>
                  <div className="cq-asset-element">
                    <span className="cq-el-pill bad">Hook · frame 0–2s</span>
                    <small>Opening montage ran 6 weeks</small>
                  </div>
                  <div className="cq-asset-action"><button className="btn btn-primary btn-sm">Refresh</button></div>
                </div>

                <div className="cq-asset-row cq-asset-mid">
                  <div className="cq-asset-meta">
                    <div className="cq-asset-thumb" data-heat="warm"><span>03</span></div>
                    <div><b>Ad 03 · static</b><em>Andromeda #3df1</em></div>
                  </div>
                  <div className="cq-asset-health">
                    <div className="cq-asset-bar"><div style={{ width: '54%' }} className="mid"></div></div>
                    <span className="mid">54</span>
                  </div>
                  <div className="cq-asset-sig">
                    <span className="cq-asset-sig-name">CTR decay</span>
                    <span className="cq-asset-sig-val mid">−18%</span>
                  </div>
                  <div className="cq-asset-element">
                    <span className="cq-el-pill mid">Caption</span>
                    <small>&ldquo;Save 20%&rdquo; CTA — 3-week drift</small>
                  </div>
                  <div className="cq-asset-action"><button className="btn btn-ghost btn-sm">Watch</button></div>
                </div>

                <div className="cq-asset-row cq-asset-ok">
                  <div className="cq-asset-meta">
                    <div className="cq-asset-thumb" data-heat="cool"><span>02</span></div>
                    <div><b>Ad 02 · carousel</b><em>Andromeda #7b2c</em></div>
                  </div>
                  <div className="cq-asset-health">
                    <div className="cq-asset-bar"><div style={{ width: '82%' }} className="ok"></div></div>
                    <span className="ok">82</span>
                  </div>
                  <div className="cq-asset-sig">
                    <span className="cq-asset-sig-name">Sentiment</span>
                    <span className="cq-asset-sig-val ok">+0.78</span>
                  </div>
                  <div className="cq-asset-element">
                    <span className="cq-el-pill ok">All stable</span>
                    <small>2 weeks live, healthy slope</small>
                  </div>
                  <div className="cq-asset-action"><button className="btn btn-ghost btn-sm">Scale</button></div>
                </div>

                <div className="cq-asset-row cq-asset-ok">
                  <div className="cq-asset-meta">
                    <div className="cq-asset-thumb" data-heat="cool"><span>01</span></div>
                    <div><b>Ad 01 · video</b><em>Andromeda #112e</em></div>
                  </div>
                  <div className="cq-asset-health">
                    <div className="cq-asset-bar"><div style={{ width: '88%' }} className="ok"></div></div>
                    <span className="ok">88</span>
                  </div>
                  <div className="cq-asset-sig">
                    <span className="cq-asset-sig-name">Engagement</span>
                    <span className="cq-asset-sig-val ok">+12%</span>
                  </div>
                  <div className="cq-asset-element">
                    <span className="cq-el-pill ok">All stable</span>
                    <small>Fresh drop · 6 days live</small>
                  </div>
                  <div className="cq-asset-action"><button className="btn btn-ghost btn-sm">Scale</button></div>
                </div>
              </div>

              <footer className="cq-dash-foot">
                <span>Last scored: 3 min ago · nightly full re-score at 02:00 UTC</span>
                <span className="cq-dash-compute">7-signal composite · Meta Andromeda clustering</span>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Refresh queue */}
      <section className="sp-section alt cq-queue-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">A refresh queue that <em>ranks</em> itself.</h2>
            <p className="section-sub">When an asset drops below 40, Creative IQ pulls variants from your existing library and ranks them by predicted lift — based on which creative patterns won during analogous fatigue cycles in your own history.</p>
          </div>

          <div className="cq-queue">
            <article className="cq-var cq-var-1">
              <header>
                <span className="cq-var-rank">#1</span>
                <span className="cq-var-type">Video · 15s</span>
              </header>
              <div className="cq-var-thumb" data-heat="teal">
                <span className="cq-var-label">V1 — fresh hook</span>
              </div>
              <div className="cq-var-body">
                <div className="cq-var-metric"><span>Predicted CPA lift</span><b>+18%</b></div>
                <div className="cq-var-signals">
                  <span className="cq-var-sig">Hook: new opener</span>
                  <span className="cq-var-sig">Pacing: faster cut</span>
                </div>
                <div className="cq-var-confidence">
                  <span>Confidence</span>
                  <div className="cq-var-conf-bar"><div style={{ width: '86%' }}></div></div>
                  <b>86%</b>
                </div>
                <p className="cq-var-reason">Matches 4 of 5 winning refreshes from past fatigue cycles on this SKU.</p>
              </div>
              <footer><button className="btn btn-primary btn-sm">Queue for A/B</button></footer>
            </article>

            <article className="cq-var cq-var-2">
              <header>
                <span className="cq-var-rank">#2</span>
                <span className="cq-var-type">Static · carousel</span>
              </header>
              <div className="cq-var-thumb" data-heat="mid">
                <span className="cq-var-label">V2 — caption swap</span>
              </div>
              <div className="cq-var-body">
                <div className="cq-var-metric"><span>Predicted CPA lift</span><b>+11%</b></div>
                <div className="cq-var-signals">
                  <span className="cq-var-sig">Caption: urgency frame</span>
                  <span className="cq-var-sig">CTA: price-anchored</span>
                </div>
                <div className="cq-var-confidence">
                  <span>Confidence</span>
                  <div className="cq-var-conf-bar"><div style={{ width: '72%' }}></div></div>
                  <b>72%</b>
                </div>
                <p className="cq-var-reason">Similar caption refresh lifted CTR 14% on ad set Q3-09.</p>
              </div>
              <footer><button className="btn btn-ghost btn-sm">Queue for A/B</button></footer>
            </article>

            <article className="cq-var cq-var-3">
              <header>
                <span className="cq-var-rank">#3</span>
                <span className="cq-var-type">Video · 30s</span>
              </header>
              <div className="cq-var-thumb" data-heat="neutral">
                <span className="cq-var-label">V3 — testimonial</span>
              </div>
              <div className="cq-var-body">
                <div className="cq-var-metric"><span>Predicted CPA lift</span><b>+9%</b></div>
                <div className="cq-var-signals">
                  <span className="cq-var-sig">Format: testimonial cut</span>
                  <span className="cq-var-sig">Mid-frame refresh</span>
                </div>
                <div className="cq-var-confidence">
                  <span>Confidence</span>
                  <div className="cq-var-conf-bar"><div style={{ width: '58%' }}></div></div>
                  <b>58%</b>
                </div>
                <p className="cq-var-reason">Lower historical sample — testimonials used 3× on this SKU.</p>
              </div>
              <footer><button className="btn btn-ghost btn-sm">Queue for A/B</button></footer>
            </article>
          </div>

          <p className="cq-queue-caption">Every queued variant ships with built-in incrementality checks — we measure whether the refresh worked, not just assume it did.</p>
        </div>
      </section>

      {/* Platform comparison */}
      <section className="sp-section cq-platforms-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">One score.<br />Three platforms.</h2>
            <p className="section-sub">Health scores are comparable across Meta, TikTok, and YouTube — so your team triages the worst-performing assets across the portfolio, not one channel at a time.</p>
          </div>

          <div className="cq-platforms">
            <article className="cq-pf cq-pf-meta">
              <header>
                <span className="cq-pf-name">Meta</span>
                <span className="cq-pf-count">8 assets</span>
              </header>
              <div className="cq-pf-body">
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '82%' }} className="ok"></div></span><b className="ok">82</b></div>
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '54%' }} className="mid"></div></span><b className="mid">54</b></div>
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '24%' }} className="bad"></div></span><b className="bad">24</b></div>
              </div>
              <footer><span>Cohort avg</span><b>53</b></footer>
            </article>

            <article className="cq-pf">
              <header>
                <span className="cq-pf-name">TikTok</span>
                <span className="cq-pf-count">6 assets</span>
              </header>
              <div className="cq-pf-body">
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '76%' }} className="ok"></div></span><b className="ok">76</b></div>
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '62%' }} className="ok"></div></span><b className="ok">62</b></div>
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '48%' }} className="mid"></div></span><b className="mid">48</b></div>
              </div>
              <footer><span>Cohort avg</span><b>62</b></footer>
            </article>

            <article className="cq-pf">
              <header>
                <span className="cq-pf-name">YouTube</span>
                <span className="cq-pf-count">4 assets</span>
              </header>
              <div className="cq-pf-body">
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '88%' }} className="ok"></div></span><b className="ok">88</b></div>
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '70%' }} className="ok"></div></span><b className="ok">70</b></div>
                <div className="cq-pf-row"><span className="cq-pf-bar"><div style={{ width: '36%' }} className="bad"></div></span><b className="bad">36</b></div>
              </div>
              <footer><span>Cohort avg</span><b>65</b></footer>
            </article>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="sp-section alt cq-outcomes-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">On target.<br />On time.<br />On budget.</h2>
            <p className="section-sub">Three outcomes every performance team cares about when fatigue goes from surprise to signal.</p>
          </div>

          <div className="aq-outcomes">
            <article className="aq-outcome">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></svg>
              </div>
              <h3>On target.</h3>
              <p>Refreshes are targeted at the element that&apos;s actually dying — the hook, the frame, the caption — not the whole ad. Creative teams move faster because they know exactly what to swap.</p>
              <div className="aq-outcome-metric"><b>3×</b><span>faster refresh turnaround</span></div>
            </article>
            <article className="aq-outcome aq-outcome-accent">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </div>
              <h3>On time.</h3>
              <p>You find fatigue 11 to 18 days before CPA reveals it. That&apos;s the window where refreshes preserve ad-set velocity instead of rebuilding from zero.</p>
              <div className="aq-outcome-metric"><b>14d</b><span>avg lead time on CPA alerts</span></div>
            </article>
            <article className="aq-outcome">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v18M5 7l7-4 7 4v10l-7 4-7-4V7z" /></svg>
              </div>
              <h3>On budget.</h3>
              <p>Teams using Creative IQ avoid the 20–40% overspend that happens in the dead-creative window — because budget keeps pacing into impressions no one is converting on.</p>
              <div className="aq-outcome-metric"><b>−28%</b><span>7-day CPA at same spend</span></div>
            </article>
          </div>
        </div>
      </section>

      {/* Closing quote + CTA */}
      <section className="sp-section cq-close-section">
        <div className="wrap">
          <blockquote className="sp-quote">
            <p>&ldquo;We used to refresh creative on a calendar. Now we refresh when the health score drops. Our 7-day CPA is 28% better than last quarter at the same spend.&rdquo;</p>
            <cite>Head of Performance · DTC apparel</cite>
          </blockquote>

          <div className="sp-cta-inline">
            <div>
              <h3>See your creative before your CPA does.</h3>
              <p>Scoping call · 30 min · free · zero obligation.</p>
            </div>
            <PilotCTA className="btn btn-primary btn-lg">Book a pilot →</PilotCTA>
          </div>

          <div className="sp-nav-next">
            <span>← <Link href="/incrementality-iq">Incrementality IQ</Link></span>
            <span><Link href="/audience-iq">Audience IQ</Link> →</span>
          </div>
        </div>
      </section>
    </>
  );
}
