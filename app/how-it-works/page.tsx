import type { Metadata } from "next";
import Link from "next/link";
import HowItWorksScroll from "@/components/HowItWorksScroll";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  title: "How It Works — The 90-Day MemoLogs Pilot | MemoLogs",
  description: "API-first. No rip and replace. First dashboards live by day 7. First tri-model causal verdict by week 5. A board-ready impact report by week 12. Here's how the first 90 days actually play out.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksScroll />
      {/* Hero */}
      <section className="subpage-hero hw-hero" aria-labelledby="hw-h1">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">MemoLogs</Link> <span>›</span> How it works</div>

          <div className="hw-hero-grid">
            <div className="hw-hero-lead">
              <span className="iq-chip iq-chip-accent">90-day pilot playbook</span>
              <h1 id="hw-h1">First value in <em>week one.</em><br />Proof in <em>week five.</em></h1>
              <p className="lede">
                MemoLogs is API-first. No rip-and-replace. No 90-day onboarding. No consulting retainer bolted on. Four chapters, eleven milestones — here&apos;s exactly what ships, when, and what it looks like when it lands.
              </p>
              <div className="iq-feature-chips">
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>API integrations in 2–3 days</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>First dashboards by day 7</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Tri-model causal verdict by week 5</span>
              </div>
              <div className="cta-row iq-cta-row">
                <PilotCTA className="btn btn-primary btn-lg">Start a 90-day pilot →</PilotCTA>
                <a href="#journey" className="btn btn-ghost btn-lg">See the journey</a>
              </div>
              <div className="iq-hero-micro">
                <span>No seat licenses</span>
                <span className="sep">·</span>
                <span>Rollback anytime in first 30 days</span>
                <span className="sep">·</span>
                <span>SOC 2 · GDPR-ready</span>
              </div>
            </div>

            <aside className="hw-journey" aria-label="90-day pilot journey arc">
              <div className="hw-journey-stage">
                <svg viewBox="0 0 420 420" className="hw-arc-svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="hwArc" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00FFC2" />
                      <stop offset="100%" stopColor="#00D4A3" />
                    </linearGradient>
                    <radialGradient id="hwGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="210" cy="210" r="160" fill="url(#hwGlow)" />
                  <circle cx="210" cy="210" r="160" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 6" />
                  <circle cx="210" cy="210" r="110" fill="none" stroke="rgba(0,255,194,0.24)" strokeWidth="1" strokeDasharray="2 5" />
                  <circle cx="210" cy="210" r="160" fill="none" stroke="url(#hwArc)" strokeWidth="3" strokeDasharray="1005" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 210 210)" />
                  <g transform="translate(370, 146)">
                    <circle r="12" fill="#0A0F1D" stroke="url(#hwArc)" strokeWidth="2" />
                    <text y="4" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#00FFC2" fontWeight="700">D7</text>
                  </g>
                  <g transform="translate(313, 349)">
                    <circle r="12" fill="#0A0F1D" stroke="url(#hwArc)" strokeWidth="2" />
                    <text y="4" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#00FFC2" fontWeight="700">W3</text>
                  </g>
                  <g transform="translate(106, 349)">
                    <circle r="16" fill="#00FFC2" strokeWidth="0" />
                    <text y="4" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#0A0F1D" fontWeight="800">W5</text>
                  </g>
                  <g transform="translate(49, 149)">
                    <circle r="12" fill="#0A0F1D" stroke="url(#hwArc)" strokeWidth="2" />
                    <text y="4" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#00FFC2" fontWeight="700">W12</text>
                  </g>
                  <text x="210" y="184" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8A93A6" letterSpacing="2.5" fontWeight="600">90-DAY PILOT</text>
                  <text x="210" y="224" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="56" fill="#FBFBFD" fontWeight="800" letterSpacing="-2">12</text>
                  <text x="210" y="252" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fill="#8A93A6">weeks</text>
                </svg>

                <span className="hw-chap hw-chap-1"><span className="hw-chap-k">01</span><b>Connect</b><em>Days 1–7</em></span>
                <span className="hw-chap hw-chap-2"><span className="hw-chap-k">02</span><b>Signals</b><em>Weeks 2–3</em></span>
                <span className="hw-chap hw-chap-3"><span className="hw-chap-k">03</span><b>Proof</b><em>Weeks 4–5</em></span>
                <span className="hw-chap hw-chap-4"><span className="hw-chap-k">04</span><b>Compound</b><em>Weeks 6–12</em></span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mission stats */}
      <section className="sp-section hw-mission-section">
        <div className="wrap">
          <div className="hw-mission">
            <div className="hw-mission-cell hw-mission-hero">
              <div className="hw-mission-lab">Engineering lift on your side</div>
              <div className="hw-mission-val">0 <small>hours</small></div>
              <div className="hw-mission-sub">We wire every integration end-to-end — no tickets, no sprints, no dev time required.</div>
            </div>
            <div className="hw-mission-cells">
              <div className="hw-mission-cell">
                <div className="hw-mission-lab">Your team</div>
                <div className="hw-mission-val">1 analyst</div>
                <div className="hw-mission-sub">Growth or performance lead. That&apos;s it.</div>
              </div>
              <div className="hw-mission-cell">
                <div className="hw-mission-lab">Integration window</div>
                <div className="hw-mission-val">&lt; 6 hrs</div>
                <div className="hw-mission-sub">OAuth flows + API-token pastes.</div>
              </div>
              <div className="hw-mission-cell">
                <div className="hw-mission-lab">First dashboards</div>
                <div className="hw-mission-val">Day 7</div>
                <div className="hw-mission-sub">Creative · Audience · Co-Pilot.</div>
              </div>
              <div className="hw-mission-cell">
                <div className="hw-mission-lab">Causal verdict</div>
                <div className="hw-mission-val">Week 5</div>
                <div className="hw-mission-sub">Tri-model consensus lands.</div>
              </div>
              <div className="hw-mission-cell">
                <div className="hw-mission-lab">Board report</div>
                <div className="hw-mission-val">Week 12</div>
                <div className="hw-mission-sub">CAC · ROAS · incremental $.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="hw-journey-section" id="journey">
        <aside className="hw-rail is-active" aria-label="Pilot progress">
          <div className="hw-rail-inner">
            <div className="hw-rail-ring">
              <svg viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <circle cx="30" cy="30" r="26" fill="none" stroke="#00FFC2" strokeWidth="3" strokeDasharray="163.36" strokeDashoffset="163.36" strokeLinecap="round" transform="rotate(-90 30 30)" className="hw-rail-ring-fill" style={{ strokeDashoffset: 119.004 }} />
              </svg>
              <span className="hw-rail-pct" id="hwRailPct">27%</span>
            </div>
            <div className="hw-rail-meta">
              <span className="hw-rail-lab">Currently</span>
              <b className="hw-rail-val" id="hwRailLabel">Day 7</b>
              <span className="hw-rail-chap" id="hwRailChap">Chapter 01 · Connect</span>
            </div>
          </div>
        </aside>

        <div className="wrap hw-journey-wrap">
          <div className="hw-track">
            <div className="hw-spine" aria-hidden="true">
              <div className="hw-spine-fill" id="hwSpineFill" style={{ height: '27.152%' }}></div>
            </div>

            {/* Chapter 1 */}
            <div className="hw-chapter is-visible" data-chapter="1" data-label="Chapter 01 · Connect">
              <header className="hw-chapter-head">
                <span className="hw-chapter-idx">Chapter 01</span>
                <h2 className="hw-chapter-title">Connect.</h2>
                <p className="hw-chapter-sub">Wire MemoLogs into your stack. Read-only API access to the platforms you already run. Your data never leaves your workspace in a form we&apos;d re-sell.</p>
                <span className="hw-chapter-range">Days 1 – 7</span>
              </header>

              <article className="hw-ms hw-ms-left is-visible" data-day="Day 1" data-progress="2">
                <div className="hw-ms-node"><span>D1</span></div>
                <div className="hw-ms-card">
                  <header><span className="hw-ms-when">Day 1</span><h3>Kickoff call · 90 min</h3></header>
                  <p>Align on goals, KPIs, and success criteria. You meet your dedicated account pod: solutions architect, analyst, and success manager. One Slack war room is opened.</p>
                  <div className="hw-preview hw-pv-team">
                    <div className="hw-pv-avatars">
                      <span className="hw-pv-avatar"><b>SA</b><em>Solutions</em></span>
                      <span className="hw-pv-avatar"><b>AN</b><em>Analyst</em></span>
                      <span className="hw-pv-avatar"><b>CS</b><em>Success</em></span>
                      <span className="hw-pv-avatar hw-pv-avatar-you"><b>You</b><em>Sponsor</em></span>
                    </div>
                    <span className="hw-pv-foot">4-person pod · Slack war room live</span>
                  </div>
                </div>
              </article>

              <article className="hw-ms hw-ms-right is-visible" data-day="Days 2–3" data-progress="6">
                <div className="hw-ms-node"><span>D3</span></div>
                <div className="hw-ms-card">
                  <header><span className="hw-ms-when">Days 2–3</span><h3>Data connections live</h3></header>
                  <p>Meta, Google, TikTok, GA4, Shopify, BigQuery, Snowflake — all pre-built. You grant read-only OAuth or paste a service-account token. We handle wiring and schema validation in the war room.</p>
                  <div className="hw-preview hw-pv-plat">
                    <span className="hw-pv-plat-chip">Meta</span>
                    <span className="hw-pv-plat-chip">Google</span>
                    <span className="hw-pv-plat-chip">TikTok</span>
                    <span className="hw-pv-plat-chip">GA4</span>
                    <span className="hw-pv-plat-chip">Shopify</span>
                    <span className="hw-pv-plat-chip">BigQuery</span>
                    <span className="hw-pv-plat-chip">Snowflake</span>
                  </div>
                </div>
              </article>

              <article className="hw-ms hw-ms-left is-visible is-active" data-day="Day 7" data-progress="8">
                <div className="hw-ms-node hw-ms-node-accent"><span>D7</span></div>
                <div className="hw-ms-card hw-ms-card-accent">
                  <header><span className="hw-ms-when">Day 7 · first ship</span><h3>Dashboards go live</h3></header>
                  <p>Creative IQ health scores for your top 50 assets. Audience IQ first-party profiling running. AI Co-Pilot answering questions on your connected data.</p>
                  <div className="hw-preview hw-pv-dash">
                    <div className="hw-pv-dash-tile">
                      <span className="hw-pv-dash-lab">Creative IQ · Health</span>
                      <div className="hw-pv-dash-bars">
                        <span style={{ ['--h' as string]: '82%' }} className="ok"></span>
                        <span style={{ ['--h' as string]: '54%' }} className="mid"></span>
                        <span style={{ ['--h' as string]: '24%' }} className="bad"></span>
                        <span style={{ ['--h' as string]: '88%' }} className="ok"></span>
                      </div>
                    </div>
                    <div className="hw-pv-dash-tile">
                      <span className="hw-pv-dash-lab">Audience IQ · Segments</span>
                      <div className="hw-pv-dash-donut">
                        <svg viewBox="0 0 60 60">
                          <circle cx="30" cy="30" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                          <circle cx="30" cy="30" r="22" fill="none" stroke="#00FFC2" strokeWidth="6" strokeDasharray="138.2" strokeDashoffset="60" strokeLinecap="round" transform="rotate(-90 30 30)" />
                        </svg>
                        <b>12</b>
                      </div>
                    </div>
                    <div className="hw-pv-dash-tile">
                      <span className="hw-pv-dash-lab">AI Co-Pilot · Ready</span>
                      <span className="hw-pv-chat">&ldquo;Why did CPA spike Tuesday?&rdquo;</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Chapter 2 */}
            <div className="hw-chapter is-visible" data-chapter="2" data-label="Chapter 02 · Signals">
              <header className="hw-chapter-head">
                <span className="hw-chapter-idx">Chapter 02</span>
                <h2 className="hw-chapter-title">Find the leaks.</h2>
                <p className="hw-chapter-sub">The stack is wired. Now we start flagging the silent drips — fatiguing creative, overlapping audiences, channels that look profitable but aren&apos;t.</p>
                <span className="hw-chapter-range">Weeks 2 – 3</span>
              </header>

              <article className="hw-ms hw-ms-right is-visible" data-day="Week 2" data-progress="16">
                <div className="hw-ms-node"><span>W2</span></div>
                <div className="hw-ms-card">
                  <header><span className="hw-ms-when">Week 2</span><h3>First creative refresh queue</h3></header>
                  <p>Creative IQ crosses your first asset below health score 40. Three variants are drafted from your existing library, ranked by predicted CPA lift. Your team picks one. First A/B goes live.</p>
                  <div className="hw-preview hw-pv-queue">
                    <div className="hw-pv-var hw-pv-var-1"><span>V1</span><em>+18% pred.</em></div>
                    <div className="hw-pv-var"><span>V2</span><em>+11% pred.</em></div>
                    <div className="hw-pv-var"><span>V3</span><em>+9% pred.</em></div>
                  </div>
                </div>
              </article>

              <article className="hw-ms hw-ms-left is-visible" data-day="Week 3" data-progress="25">
                <div className="hw-ms-node"><span>W3</span></div>
                <div className="hw-ms-card">
                  <header><span className="hw-ms-when">Week 3</span><h3>First automated KPI report</h3></header>
                  <p>A weekly scorecard lands in your inbox Monday 08:00. Cross-channel performance, creative health, audience segment coverage, budget pacing — all auto-generated, zero analyst hours.</p>
                  <div className="hw-preview hw-pv-report">
                    <div className="hw-pv-report-head">
                      <span className="hw-pv-report-chip">Weekly · Q4-W3</span>
                      <span className="hw-pv-report-date">Mon 08:00 UTC</span>
                    </div>
                    <div className="hw-pv-report-rows">
                      <div><span>CAC</span><em className="pos">−12%</em></div>
                      <div><span>ROAS</span><em className="pos">+0.4×</em></div>
                      <div><span>Creative health</span><em className="mid">54 avg</em></div>
                      <div><span>Audience overlap</span><em className="mid">48%</em></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Chapter 3 */}
            <div className="hw-chapter is-visible" data-chapter="3" data-label="Chapter 03 · Proof">
              <header className="hw-chapter-head">
                <span className="hw-chapter-idx">Chapter 03</span>
                <h2 className="hw-chapter-title">Causal ground truth.</h2>
                <p className="hw-chapter-sub">The signature moment. A real experiment in live markets, three causal models running in parallel, one reconciled verdict. This is the artifact you take to your CFO.</p>
                <span className="hw-chapter-range">Weeks 4 – 5</span>
              </header>

              <article className="hw-ms hw-ms-right is-visible" data-day="Week 4" data-progress="33">
                <div className="hw-ms-node"><span>W4</span></div>
                <div className="hw-ms-card">
                  <header><span className="hw-ms-when">Week 4</span><h3>GeoTwin™ study launches</h3></header>
                  <p>ML selects test + control markets from 58K pair permutations. Pre-fit L2 error below 0.012. The synthetic twin is validated. Your campaign goes live in the 4 treatment DMAs.</p>
                  <div className="hw-preview hw-pv-geo">
                    <svg viewBox="0 0 280 140" aria-hidden="true">
                      <defs>
                        <radialGradient id="hwGeoGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.55" />
                          <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <path d="M20 40 L60 28 L130 24 L200 28 L250 38 L260 70 L250 100 L200 112 L140 115 L80 112 L30 100 L18 70 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <g fill="#5A6377" opacity="0.6">
                        <circle cx="180" cy="50" r="2.5" /><circle cx="210" cy="70" r="2.5" />
                        <circle cx="160" cy="90" r="2.5" /><circle cx="130" cy="60" r="2.5" />
                        <circle cx="230" cy="90" r="2.5" /><circle cx="90" cy="90" r="2.5" />
                        <circle cx="220" cy="45" r="2.5" /><circle cx="100" cy="60" r="2.5" />
                      </g>
                      <g>
                        <circle cx="55" cy="40" r="14" fill="url(#hwGeoGlow)" /><circle cx="55" cy="40" r="4" fill="#00FFC2" />
                        <circle cx="52" cy="70" r="14" fill="url(#hwGeoGlow)" /><circle cx="52" cy="70" r="4" fill="#00FFC2" />
                        <circle cx="125" cy="85" r="14" fill="url(#hwGeoGlow)" /><circle cx="125" cy="85" r="4" fill="#00FFC2" />
                        <circle cx="85" cy="110" r="14" fill="url(#hwGeoGlow)" /><circle cx="85" cy="110" r="4" fill="#00FFC2" />
                      </g>
                    </svg>
                    <span className="hw-pv-geo-lab">4 treatment · 22 control · 28-day flight</span>
                  </div>
                </div>
              </article>

              <article className="hw-ms hw-ms-left hw-ms-milestone is-visible" data-day="Week 5" data-progress="42">
                <div className="hw-ms-node hw-ms-node-milestone"><span>W5</span></div>
                <div className="hw-ms-card hw-ms-card-milestone">
                  <header><span className="hw-ms-when">Week 5 · key milestone</span><h3>First consensus verdict delivered</h3></header>
                  <p>GeoTwin™ (SCM), CausalCore™ (BSTS), and DiffLens™ (DiD) run in parallel. Direction agrees 3/3. Two of three reach p&lt;0.05. Your Attribution Inflation Factor per channel lands — with a dollar-impact reallocation plan.</p>
                  <div className="hw-preview hw-pv-verdict">
                    <div className="hw-pv-verdict-head">
                      <span className="hw-pv-verdict-tag">Consensus Verdict</span>
                      <span className="hw-pv-verdict-conf">High confidence</span>
                    </div>
                    <div className="hw-pv-verdict-big"><b>+7.0%</b><span>consensus lift</span></div>
                    <div className="hw-pv-verdict-models">
                      <span><span className="dot" data-m="geo"></span>GeoTwin +7.6%</span>
                      <span><span className="dot" data-m="core"></span>CausalCore +7.1%</span>
                      <span><span className="dot" data-m="lens"></span>DiffLens +6.4%</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Chapter 4 */}
            <div className="hw-chapter is-visible" data-chapter="4" data-label="Chapter 04 · Compound">
              <header className="hw-chapter-head">
                <span className="hw-chapter-idx">Chapter 04</span>
                <h2 className="hw-chapter-title">Memory kicks in.</h2>
                <p className="hw-chapter-sub">Reallocations go live. The decision log starts compounding. By week 12 you have a board-ready impact report — and a system that remembers what it just learned.</p>
                <span className="hw-chapter-range">Weeks 6 – 12</span>
              </header>

              <article className="hw-ms hw-ms-right" data-day="Weeks 6–8" data-progress="60">
                <div className="hw-ms-node"><span>W6–8</span></div>
                <div className="hw-ms-card">
                  <header><span className="hw-ms-when">Weeks 6 – 8</span><h3>Reallocation + second refresh cycle</h3></header>
                  <p>Budget shifts execute in platform. Creative refresh cycle 2 is underway. Audience IQ buyer-graded segments replace platform lookalikes. Weekly KPI report tracks the lift.</p>
                  <div className="hw-preview hw-pv-realloc">
                    <div className="hw-pv-bar-row">
                      <span className="hw-pv-bar-lab">Meta</span>
                      <div className="hw-pv-bar"><div className="before" style={{ width: '100%' }}></div><div className="after" style={{ width: '72%' }}></div></div>
                      <span className="hw-pv-bar-delta bad">−28%</span>
                    </div>
                    <div className="hw-pv-bar-row">
                      <span className="hw-pv-bar-lab">Google</span>
                      <div className="hw-pv-bar"><div className="before" style={{ width: '80%' }}></div><div className="after" style={{ width: '80%' }}></div></div>
                      <span className="hw-pv-bar-delta">Hold</span>
                    </div>
                    <div className="hw-pv-bar-row">
                      <span className="hw-pv-bar-lab">CTV</span>
                      <div className="hw-pv-bar"><div className="before" style={{ width: '40%' }}></div><div className="after" style={{ width: '76%' }}></div></div>
                      <span className="hw-pv-bar-delta good">+90%</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="hw-ms hw-ms-left" data-day="Week 10" data-progress="80">
                <div className="hw-ms-node"><span>W10</span></div>
                <div className="hw-ms-card">
                  <header><span className="hw-ms-when">Week 10</span><h3>Memory IQ activates</h3></header>
                  <p>Decision log populated from pilot history. The first pattern warning fires when a staged plan matches a historical failure — with the receipts that prove the match.</p>
                  <div className="hw-preview hw-pv-memo">
                    <span className="hw-pv-memo-ico">⚠</span>
                    <div>
                      <b>Pattern warning · 94% match</b>
                      <span>Scaling paid social above $800K in Oct compressed branded SEM 3 of 4 times. Suggest $650K cap.</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="hw-ms hw-ms-right hw-ms-milestone" data-day="Week 12" data-progress="100">
                <div className="hw-ms-node hw-ms-node-milestone"><span>W12</span></div>
                <div className="hw-ms-card hw-ms-card-milestone">
                  <header><span className="hw-ms-when">Week 12 · delivery</span><h3>Board-ready impact report</h3></header>
                  <p>Full 90-day impact: CAC delta, ROAS delta, incremental revenue, time-to-insight. Handed off to your CFO team in their format — deck, spreadsheet, or live embed.</p>
                  <div className="hw-preview hw-pv-impact">
                    <div className="hw-pv-impact-row"><span>CAC delta</span><b className="good">−28%</b></div>
                    <div className="hw-pv-impact-row"><span>ROAS delta</span><b className="good">+27%</b></div>
                    <div className="hw-pv-impact-row"><span>Incremental revenue</span><b className="good">$2.9M</b></div>
                    <div className="hw-pv-impact-row"><span>Time to insight</span><b>&lt; 5 weeks</b></div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* What we need / touch / don't */}
      <section className="sp-section alt hw-foot-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">What we need.<br />What we touch.<br />What we <em>don&apos;t.</em></h2>
            <p className="section-sub">The surface area of a MemoLogs pilot is deliberately small. Your lawyers, security team, and CTO like it that way.</p>
          </div>

          <div className="hw-foot-grid">
            <article className="hw-foot-card hw-foot-need">
              <header>
                <span className="hw-foot-ico ok" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 13l4 4 10-10" /></svg>
                </span>
                <span className="hw-foot-tag ok">What we need</span>
              </header>
              <h3>Read-only API access.</h3>
              <p>OAuth or service-account tokens to Meta, Google, TikTok, GA4, Shopify, and your CRM. That&apos;s the whole list. No write permissions required during pilot.</p>
              <ul className="hw-foot-list">
                <li>Ad-platform reporting APIs</li>
                <li>GA4 export / BigQuery</li>
                <li>Commerce / CRM tables (CSV or connector)</li>
              </ul>
            </article>

            <article className="hw-foot-card hw-foot-touch">
              <header>
                <span className="hw-foot-ico mid" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v18M3 12h18" /></svg>
                </span>
                <span className="hw-foot-tag mid">What we touch</span>
              </header>
              <h3>A small audience-sync footprint.</h3>
              <p>Audience IQ can push buyer-graded segments back into Meta, Google, TikTok, and DV360 via API. You approve every segment push — nothing auto-activates in pilot.</p>
              <ul className="hw-foot-list">
                <li>Segment push (opt-in, reversible)</li>
                <li>Suppression lists (opt-in)</li>
                <li>Bid caps (staged, human-approved)</li>
              </ul>
            </article>

            <article className="hw-foot-card hw-foot-dont">
              <header>
                <span className="hw-foot-ico bad" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </span>
                <span className="hw-foot-tag bad">What we don&apos;t</span>
              </header>
              <h3>Your site, your data, your creative.</h3>
              <p>MemoLogs never re-sells data, never injects client-side scripts, and never takes control of your ad accounts. Your raw data never enters a shared training pool.</p>
              <ul className="hw-foot-list">
                <li>No client-side pixels</li>
                <li>No re-sold signals to third parties</li>
                <li>No shared training models across customers</li>
              </ul>
            </article>
          </div>

          <div className="hw-foot-badges">
            <span className="hw-foot-badge">SOC 2 Type II</span>
            <span className="hw-foot-badge">GDPR-ready</span>
            <span className="hw-foot-badge">Pilot-fee credited to contract</span>
            <span className="hw-foot-badge">30-day rollback window</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-section hw-faq-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">The questions your team<br />will actually ask.</h2>
            <p className="section-sub">Nine in ten pilots raise the same nine questions. We&apos;ve collected them here so the people on your team who weren&apos;t on the demo call can see the answers directly.</p>
          </div>

          <div className="hw-faq">
            <details className="hw-faq-item" open>
              <summary><span className="hw-faq-q">How does pricing work?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>Flat fee, starting at <b>$15,000/month</b>. Never a percentage of ad spend, never a seat-based markup. The 90-day pilot fee is credited 100% toward the annual contract if you proceed.</p>
            </details>
            <details className="hw-faq-item">
              <summary><span className="hw-faq-q">Do we need to replace our existing stack?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>No. MemoLogs sits alongside your current platforms — ad platforms, analytics, warehouse, and CRM — via API. It reads the same signals your team does, adds causal measurement + decision memory on top, and pushes optimized audiences back out where you ask it to.</p>
            </details>
            <details className="hw-faq-item">
              <summary><span className="hw-faq-q">How long until we see the first real insight?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>First dashboards land on <b>day 7</b>. First creative refresh queue by <b>week 2</b>. First automated weekly KPI report by <b>week 3</b>. First tri-model causal verdict by <b>week 5</b>.</p>
            </details>
            <details className="hw-faq-item">
              <summary><span className="hw-faq-q">What data do you need from us?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>Read-only API access to your ad platforms (Meta, Google, TikTok), analytics (GA4), and commerce/CRM (Shopify, BigQuery, Snowflake). Roughly 6 total hours of integration effort on your side — all OAuth flows or pasted service-account tokens.</p>
            </details>
            <details className="hw-faq-item">
              <summary><span className="hw-faq-q">Do you share or re-sell our data?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>Never. Your data stays in your workspace. We don&apos;t train shared models on customer data, we don&apos;t syndicate signals, and we don&apos;t enrich our own dataset from your activity.</p>
            </details>
            <details className="hw-faq-item">
              <summary><span className="hw-faq-q">What happens if we want to pause or roll back?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>Cancel or pause anytime within the first 30 days with no further obligation. Audience syncs are fully reversible (we can flush or freeze). Historical dashboards and the decision log remain yours, exportable in CSV or Parquet.</p>
            </details>
            <details className="hw-faq-item">
              <summary><span className="hw-faq-q">Who on our side runs this?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>Two people on your side: typically a performance / analytics lead and a data or engineering lead. MemoLogs provides a dedicated account pod (solutions architect + analyst + success manager) for the duration of the pilot.</p>
            </details>
            <details className="hw-faq-item">
              <summary><span className="hw-faq-q">How does the tri-model consensus actually work?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>Every geo experiment runs through three independent causal models — <b>GeoTwin™</b> (synthetic-control matching), <b>CausalCore™</b> (Bayesian structural time-series), and <b>DiffLens™</b> (two-way fixed-effects regression). The reconciled verdict is only as strong as the narrowest overlap; disagreement across the three surfaces as a caveat, not a hidden flag.</p>
            </details>
            <details className="hw-faq-item">
              <summary><span className="hw-faq-q">Is the 90-day pilot a hard commitment?</span><span className="hw-faq-caret" aria-hidden="true">+</span></summary>
              <p>No. We stage the pilot as three 30-day gates, each with an explicit off-ramp. If the first incrementality verdict in week 5 doesn&apos;t change your mind about your budget, you can walk.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Close CTA */}
      <section className="sp-section alt hw-close-section">
        <div className="wrap">
          <div className="sp-cta-inline">
            <div>
              <h3>Ready to see what week 5 looks like?</h3>
              <p>30-minute scoping call. We&apos;ll audit your attribution, size the likely inflation, and tell you if a pilot makes sense — before you commit a dollar.</p>
            </div>
            <PilotCTA className="btn btn-primary btn-lg" modalTitle="Book a scoping call">Book the call →</PilotCTA>
          </div>

          <div className="sp-nav-next">
            <span>← <Link href="/">Back to platform</Link></span>
            <span><Link href="/pricing">Pricing</Link> →</span>
          </div>
        </div>
      </section>
    </>
  );
}
