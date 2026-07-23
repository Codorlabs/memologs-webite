import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/audience-iq" },
  title: "Audience IQ — Buyer-Graded Segments",
  description: "Four AI agents in parallel. Causal, LTV-graded audiences activated across your paid platforms — no identity graph required. Find buyers, not lookalikes.",
};

export default function AudienceIQPage() {
  return (
    <>
      <section className="subpage-hero aq-hero" aria-labelledby="aq-h1">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">Platform</Link> <span>›</span> Audience IQ</div>
          <div className="aq-hero-grid">
            <div className="aq-hero-lead">
              <span className="iq-chip iq-chip-accent">AI Audience Targeting</span>
              <h1 id="aq-h1">Reach the people who <em>actually</em> buy.</h1>
              <p className="lede">Platform lookalikes find profiles that look like your best customers <em>to the platform&apos;s attribution signal</em> — which is already 3× inflated. <b>Audience IQ</b> grades your first-party customers on causally-measured LTV and ships buyer-graded segments to Meta, Google, and TikTok in real time — activated through each platform&apos;s own hashed-match system, with no cross-platform identity graph.</p>
              <div className="iq-feature-chips">
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Four AI agents, always running</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Causal LTV grading — no identity graph</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Real-time cross-platform sync</span>
              </div>
              <div className="cta-row iq-cta-row">
                <PilotCTA className="btn btn-primary btn-lg">Start a 90-day pilot →</PilotCTA>
                <a href="#agents" className="btn btn-ghost btn-lg">Meet the four agents</a>
              </div>
              <div className="iq-hero-micro">
                <span>+30% click → acquisition</span><span className="sep">·</span>
                <span>−14% CAC on low-LTV segments</span><span className="sep">·</span>
                <span>3-platform sync in &lt;60s p99</span>
              </div>
            </div>

            <aside className="aq-hero-viz" aria-label="Audience IQ — live constellation with graded persona cards">
              <div className="aq-stage">
                <div className="aq-glow"></div>
                <svg className="aq-orbits" viewBox="0 0 480 360" aria-hidden="true">
                  <defs>
                    <radialGradient id="aqHubGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.35" />
                      <stop offset="60%" stopColor="#00FFC2" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="aqLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00FFC2" stopOpacity="0" />
                      <stop offset="50%" stopColor="#00FFC2" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle cx="240" cy="180" r="140" fill="url(#aqHubGlow)" />
                  <ellipse cx="240" cy="180" rx="200" ry="58" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 5" />
                  <ellipse cx="240" cy="180" rx="150" ry="42" fill="none" stroke="rgba(0,255,194,0.18)" strokeDasharray="2 4" />
                  <ellipse cx="240" cy="180" rx="90" ry="26" fill="none" stroke="rgba(0,255,194,0.32)" strokeDasharray="2 4" />
                  <path d="M240,180 C160,140 110,90 40,60" stroke="url(#aqLine)" strokeWidth="1.5" fill="none" />
                  <path d="M240,180 C320,140 370,90 440,60" stroke="url(#aqLine)" strokeWidth="1.5" fill="none" />
                  <path d="M240,180 C170,230 115,280 40,300" stroke="url(#aqLine)" strokeWidth="1.5" fill="none" />
                  <path d="M240,180 C310,230 365,280 440,300" stroke="url(#aqLine)" strokeWidth="1.5" fill="none" />
                </svg>

                <div className="aq-hub">
                  <div className="aq-hub-core">
                    <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
                      <g stroke="#0A0F1D" strokeWidth="2.4" strokeLinecap="round">
                        <line x1="16" y1="6" x2="16" y2="26" /><line x1="6" y1="16" x2="26" y2="16" />
                        <line x1="9" y1="9" x2="23" y2="23" /><line x1="23" y1="9" x2="9" y2="23" />
                      </g>
                    </svg>
                  </div>
                  <span className="aq-hub-lab">Buyer graph</span>
                  <span className="aq-hub-sub">1.2M graded buyer profiles</span>
                </div>

                <article className="aq-persona aq-p1">
                  <div className="aq-p-avatar" aria-hidden="true">
                    <svg viewBox="0 0 32 32"><circle cx="16" cy="11" r="5" /><path d="M5 27c0-6 5-9 11-9s11 3 11 9" /></svg>
                  </div>
                  <div className="aq-p-body">
                    <b>Maya · 34</b><span>High-LTV repeat buyer</span>
                    <div className="aq-p-bar"><div style={{ width: '92%' }}></div></div>
                    <em>LTV 92 · Intent: high</em>
                  </div>
                </article>

                <article className="aq-persona aq-p2">
                  <div className="aq-p-avatar" aria-hidden="true">
                    <svg viewBox="0 0 32 32"><circle cx="16" cy="11" r="5" /><path d="M5 27c0-6 5-9 11-9s11 3 11 9" /></svg>
                  </div>
                  <div className="aq-p-body">
                    <b>Jordan · 28</b><span>New-customer intent</span>
                    <div className="aq-p-bar"><div style={{ width: '74%' }}></div></div>
                    <em>LTV 74 · Cart-add signal</em>
                  </div>
                </article>

                <article className="aq-persona aq-p3">
                  <div className="aq-p-avatar aq-p-avatar-warn" aria-hidden="true">
                    <svg viewBox="0 0 32 32"><circle cx="16" cy="11" r="5" /><path d="M5 27c0-6 5-9 11-9s11 3 11 9" /></svg>
                  </div>
                  <div className="aq-p-body">
                    <b>Alex · 41</b><span>Suppress — charge-back</span>
                    <div className="aq-p-bar warn"><div style={{ width: '18%' }}></div></div>
                    <em>Risk 82 · Excluded</em>
                  </div>
                </article>

                <article className="aq-persona aq-p4">
                  <div className="aq-p-avatar" aria-hidden="true">
                    <svg viewBox="0 0 32 32"><circle cx="16" cy="11" r="5" /><path d="M5 27c0-6 5-9 11-9s11 3 11 9" /></svg>
                  </div>
                  <div className="aq-p-body">
                    <b>Priya · 36</b><span>Lapsed · reactivation</span>
                    <div className="aq-p-bar mid"><div style={{ width: '58%' }}></div></div>
                    <em>Win-back prob: 58%</em>
                  </div>
                </article>

                <div className="aq-platforms">
                  <span className="aq-pf aq-pf-meta">Meta</span>
                  <span className="aq-pf aq-pf-google">Google</span>
                  <span className="aq-pf aq-pf-tiktok">TikTok</span>
                </div>
              </div>

              <footer className="aq-stage-foot">
                <span className="aq-stage-foot-lab">Audience IQ · live</span>
                <span className="aq-stage-foot-val">12 segments syncing · last push &lt;60s ago</span>
              </footer>
            </aside>
          </div>
        </div>
      </section>

      {/* Lookalike vs Buyer-graded compare */}
      <section className="sp-section aq-compare-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Lookalikes find <em>similar profiles.</em><br />Not similar <em>buyers.</em></h2>
            <p className="section-sub">Platform lookalikes optimize for the signal the platform can see — which is already 3× inflated by self-attribution. Audience IQ starts from the ground truth: your actual paid-up, repeat, high-LTV customers.</p>
          </div>

          <div className="aq-compare">
            <article className="aq-compare-col aq-before">
              <header>
                <span className="aq-compare-tag">Platform lookalike</span>
                <h3>A signal that sees itself.</h3>
              </header>
              <ul className="aq-compare-list">
                <li><span className="aq-dot bad"></span>Seed = whoever the pixel saw before a conversion</li>
                <li><span className="aq-dot bad"></span>Conversions already 3× inflated by attribution</li>
                <li><span className="aq-dot bad"></span>No LTV weighting — all buyers treated equal</li>
                <li><span className="aq-dot bad"></span>Can&apos;t suppress fraud, charge-backs, recent buyers</li>
                <li><span className="aq-dot bad"></span>Model is a black box</li>
              </ul>
              <div className="aq-compare-outcome bad">
                <span className="aq-compare-outcome-lab">Result</span>
                <span className="aq-compare-outcome-val">Reach profiles that resemble an inflated signal.</span>
              </div>
            </article>

            <div className="aq-vs" aria-hidden="true"><span>VS</span></div>

            <article className="aq-compare-col aq-after">
              <header>
                <span className="aq-compare-tag good">Audience IQ · buyer-graded</span>
                <h3>A signal that sees the truth.</h3>
              </header>
              <ul className="aq-compare-list">
                <li><span className="aq-dot good"></span>Seed = your top-decile LTV cohort, measured causally</li>
                <li><span className="aq-dot good"></span>Graded on causally-measured LTV, recency &amp; propensity</li>
                <li><span className="aq-dot good"></span>Weighted by realized + projected LTV and recency</li>
                <li><span className="aq-dot good"></span>Auto-suppression of fraud, charge-back, recent buyers</li>
                <li><span className="aq-dot good"></span>Every signal is inspectable and overridable</li>
              </ul>
              <div className="aq-compare-outcome good">
                <span className="aq-compare-outcome-lab">Result</span>
                <span className="aq-compare-outcome-val">Reach the people who <b>actually buy</b>.</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Four AI Agents */}
      <section className="sp-section alt aq-agents-section" id="agents">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Four AI agents. Always running.<br />Never asleep.</h2>
            <p className="section-sub">Audience IQ isn&apos;t a static segment builder. It&apos;s four specialized agents working in parallel over your first-party data — each owning a distinct part of the targeting problem, each shipping to the platforms via API in minutes.</p>
          </div>

          <div className="aq-agents">
            <article className="aq-agent aq-agent-acq">
              <div className="aq-agent-head">
                <div className="aq-agent-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
                </div>
                <div><span className="aq-agent-num">Agent 01</span><h3>Prospector</h3></div>
                <span className="aq-agent-status live">Live</span>
              </div>
              <p className="aq-agent-desc">Discovers net-new segments by scoring prospects on propensity (BG/NBD), seeded on your causally-measured top-decile LTV buyers — not just the platform&apos;s native lookalike model.</p>
              <div className="aq-agent-stats">
                <div><span>Segment</span><b>Net-new prospecting</b></div>
                <div><span>Size</span><b>512K</b></div>
                <div><span>Lift</span><b className="pos">+1.7×</b></div>
              </div>
            </article>

            <article className="aq-agent aq-agent-react">
              <div className="aq-agent-head">
                <div className="aq-agent-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" /></svg>
                </div>
                <div><span className="aq-agent-num">Agent 02</span><h3>Retargeter</h3></div>
                <span className="aq-agent-status live">Live</span>
              </div>
              <p className="aq-agent-desc">Re-engages prior visitors and lapsed buyers using recency-weighted conversion probability, with dynamic frequency caps so you never over-serve.</p>
              <div className="aq-agent-stats">
                <div><span>Segment</span><b>High-LTV lapsed · 90d+</b></div>
                <div><span>Size</span><b>284K</b></div>
                <div><span>Lift</span><b className="pos">+2.3×</b></div>
              </div>
            </article>

            <article className="aq-agent aq-agent-ret">
              <div className="aq-agent-head">
                <div className="aq-agent-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" /></svg>
                </div>
                <div><span className="aq-agent-num">Agent 03</span><h3>Lookalike Refresher</h3></div>
                <span className="aq-agent-status opt">Optimizing</span>
              </div>
              <p className="aq-agent-desc">Monitors seed decay and triggers re-seeding before lookalike performance drops — so expansion audiences never quietly go stale. Runs after Suppression, so excluded profiles never re-enter a seed.</p>
              <div className="aq-agent-stats">
                <div><span>Segment</span><b>Lookalike seeds · 8 active</b></div>
                <div><span>Size</span><b>—</b></div>
                <div><span>Effect</span><b className="pos">Auto-reseed</b></div>
              </div>
            </article>

            <article className="aq-agent aq-agent-sup">
              <div className="aq-agent-head">
                <div className="aq-agent-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M5 5l14 14" /></svg>
                </div>
                <div><span className="aq-agent-num">Agent 04</span><h3>Suppressor</h3></div>
                <span className="aq-agent-status live">Live</span>
              </div>
              <p className="aq-agent-desc">Automatically excludes fraud, charge-back-prone profiles, and recent purchasers — synced to the platforms as negatives within minutes.</p>
              <div className="aq-agent-stats">
                <div><span>Segment</span><b>Supp · fraud + charge-back</b></div>
                <div><span>Size</span><b>41K</b></div>
                <div><span>Effect</span><b className="pos">−22% waste</b></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* LTV Grader Dashboard */}
      <section className="sp-section aq-ltv-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Every customer graded.<br />On outcomes, not identity.</h2>
            <p className="section-sub">Audience IQ doesn&apos;t ship segments built on vibes. It grades every customer in your file on realized LTV, projected LTV, and recency — the causal signals that make lookalike expansion actually work, with no third-party identity append.</p>
          </div>

          <div className="aq-ltv-dash">
            <div className="aq-dash-chrome">
              <div className="aq-dash-dots" aria-hidden="true"><span></span><span></span><span></span></div>
              <div className="aq-dash-tab">Audience IQ · LTV grader · Illustrative</div>
              <div className="aq-dash-user">RS</div>
            </div>

            <div className="aq-dash-body">
              <div className="aq-ltv-chart">
                <div className="aq-ltv-chart-head">
                  <h4>Customer LTV distribution</h4>
                  <span className="aq-ltv-chart-meta">1.2M customers · 12-month realized + projected</span>
                </div>
                <div className="aq-ltv-bars" role="img" aria-label="LTV distribution across deciles">
                  {[
                    { d: 'D1', h: '18%' }, { d: 'D2', h: '28%' }, { d: 'D3', h: '38%' },
                    { d: 'D4', h: '46%' }, { d: 'D5', h: '54%' }, { d: 'D6', h: '62%' },
                    { d: 'D7', h: '70%' }, { d: 'D8', h: '78%' },
                    { d: 'D9', h: '86%', accent: true }, { d: 'D10', h: '96%', peak: true },
                  ].map(({ d, h, accent, peak }) => (
                    <div key={d} className={`aq-ltv-bar${accent ? ' aq-ltv-bar-accent' : ''}${peak ? ' aq-ltv-bar-peak' : ''}`} style={{ ['--h' as string]: h }}>
                      <span className="aq-ltv-val">{d}</span>
                    </div>
                  ))}
                </div>
                <div className="aq-ltv-axis">
                  <span>Bottom-LTV</span>
                  <span className="aq-ltv-seed">← Seed for acquisition lookalike</span>
                  <span>Top-LTV</span>
                </div>
              </div>

              <aside className="aq-enrich">
                <h4>Signal layers applied</h4>
                <ul>
                  <li>
                    <span className="aq-enrich-dot"></span>
                    <div><b>Behavioral intent</b><span>Cart-add, category search, comparison intent — from your own events, 90 days</span></div>
                    <em>+312 signals</em>
                  </li>
                  <li>
                    <span className="aq-enrich-dot"></span>
                    <div><b>Realized + projected LTV</b><span>Per-customer value from your transaction history</span></div>
                    <em>12-mo model</em>
                  </li>
                  <li>
                    <span className="aq-enrich-dot"></span>
                    <div><b>Recency &amp; propensity</b><span>BG/NBD propensity with recency weighting</span></div>
                    <em>Per-customer</em>
                  </li>
                  <li>
                    <span className="aq-enrich-dot warn"></span>
                    <div><b>Suppression signals</b><span>Fraud, charge-back, recent purchaser</span></div>
                    <em>−41K excluded</em>
                  </li>
                </ul>
                <div className="aq-enrich-foot">
                  <span>Built from your first-party data — no cross-platform identity graph.</span>
                  <span className="aq-enrich-badge">GDPR-ready</span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Platform sync */}
      <section className="sp-section alt aq-sync-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">One source of truth.<br />Three platforms. Under a minute.</h2>
            <p className="section-sub">Every approved segment ships to Meta, Google, and TikTok via API in under 60 seconds (p99) — up to 5M records per sync, including suppression lists and bid caps. No CSVs. No 24-hour lag. No manual uploads.</p>
          </div>

          <div className="aq-sync">
            <div className="aq-sync-source">
              <div className="aq-sync-source-core">
                <svg width="36" height="36" viewBox="0 0 32 32" aria-hidden="true">
                  <g stroke="#0A0F1D" strokeWidth="2.4" strokeLinecap="round">
                    <line x1="16" y1="6" x2="16" y2="26" />
                    <line x1="6" y1="16" x2="26" y2="16" />
                    <line x1="9" y1="9" x2="23" y2="23" />
                    <line x1="23" y1="9" x2="9" y2="23" />
                  </g>
                </svg>
              </div>
              <b>Audience IQ</b>
              <span>Buyer graph · graded</span>
            </div>

            <svg className="aq-sync-lines" viewBox="0 0 600 300" aria-hidden="true">
              <defs>
                <linearGradient id="syncL" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00FFC2" stopOpacity="0" />
                  <stop offset="50%" stopColor="#00FFC2" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="url(#syncL)" strokeWidth="1.6" fill="none">
                <path d="M90,150 C200,70 350,70 510,50" />
                <path d="M90,150 C200,110 350,110 510,130" />
                <path d="M90,150 C200,190 350,190 510,170" />
                <path d="M90,150 C200,230 350,230 510,250" />
              </g>
              <g fill="#00FFC2">
                <circle r="3"><animateMotion dur="2.8s" repeatCount="indefinite" path="M90,150 C200,70 350,70 510,50" /></circle>
                <circle r="3"><animateMotion dur="3.2s" repeatCount="indefinite" path="M90,150 C200,110 350,110 510,130" /></circle>
                <circle r="3"><animateMotion dur="2.6s" repeatCount="indefinite" path="M90,150 C200,190 350,190 510,170" /></circle>
                <circle r="3"><animateMotion dur="3.4s" repeatCount="indefinite" path="M90,150 C200,230 350,230 510,250" /></circle>
              </g>
            </svg>

            <div className="aq-sync-targets">
              <article className="aq-target">
                <span className="aq-target-name">Meta</span>
                <span className="aq-target-meta">12 segments · 4 supp.</span>
                <span className="aq-target-dot"></span>
              </article>
              <article className="aq-target">
                <span className="aq-target-name">Google</span>
                <span className="aq-target-meta">9 segments · 3 supp.</span>
                <span className="aq-target-dot"></span>
              </article>
              <article className="aq-target">
                <span className="aq-target-name">TikTok</span>
                <span className="aq-target-meta">7 segments · 2 supp.</span>
                <span className="aq-target-dot"></span>
              </article>
            </div>
          </div>

          <p className="aq-sync-caption">Last full sync <b>&lt;60s ago</b>. Real-time for suppression pushes.</p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="sp-section aq-outcomes-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Better audiences.<br />Better outcomes.</h2>
            <p className="section-sub">What happens when your paid platforms are optimizing against <em>your</em> ground truth instead of their own inflated signal.</p>
          </div>

          <div className="aq-outcomes">
            <article className="aq-outcome">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18" /></svg>
              </div>
              <h3>Adapt in real time.</h3>
              <p>Targeting evolves with new trends and audience shifts. The four agents re-rank segments hourly, not quarterly — so yesterday&apos;s best cohort doesn&apos;t become tomorrow&apos;s dead weight.</p>
              <div className="aq-outcome-metric"><b>Hourly</b><span>segment re-ranking cadence</span></div>
            </article>
            <article className="aq-outcome aq-outcome-accent">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </div>
              <h3>Pick the perfect moment.</h3>
              <p>Every segment is scored on intent velocity. Cart-adders, category researchers, and comparison-shoppers are served when conversion probability peaks — not when the campaign pacer blindly fires.</p>
              <div className="aq-outcome-metric"><b>+30%</b><span>click → acquisition uplift</span></div>
            </article>
            <article className="aq-outcome">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 9h10M7 13h6M7 17h4" /></svg>
              </div>
              <h3>Reduce wasted impressions.</h3>
              <p>Suppression isn&apos;t an afterthought — it&apos;s an agent. Fraud, charge-backs, and recent purchasers are pulled from every campaign within minutes. Every impression is aimed at someone who could convert.</p>
              <div className="aq-outcome-metric"><b>−22%</b><span>impression waste on suppressed</span></div>
            </article>
          </div>
        </div>
      </section>

      {/* Closing quote + CTA + nav */}
      <section className="sp-section alt">
        <div className="wrap">
          <blockquote className="sp-quote">
            <p>&ldquo;We replaced our Meta lookalikes with Audience IQ buyer-graded segments for 30 days. Click-to-acquisition moved from 1.9% to 2.5%. Nothing else changed.&rdquo;</p>
            <cite>Growth lead · Health &amp; Personal Care</cite>
          </blockquote>

          <div className="sp-cta-inline">
            <div>
              <h3>Meet your next best customers.</h3>
              <p>Scoping call · 30 min · free · zero obligation.</p>
            </div>
            <PilotCTA className="btn btn-primary btn-lg">Book a pilot →</PilotCTA>
          </div>

          <div className="sp-nav-next">
            <span>← <Link href="/creative-iq">Creative IQ</Link></span>
            <span><Link href="/copilot">AI Co-Pilot</Link> →</span>
          </div>
        </div>
      </section>
    </>
  );
}
