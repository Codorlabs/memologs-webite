import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  title: "Creative IQ — Closed-loop creative decision OS | MemoLogs",
  description:
    "Creative IQ is the decision OS for paid social creative. A 9-signal Andromeda fatigue model, a Diversity Gap Map, and an AI Top Brief generator — every decision logged, every outcome measured.",
  keywords:
    "creative decision OS, ad fatigue, Andromeda Readiness Score, diversity gap map, AI creative brief, Meta ads, MemoLogs",
};

export default function CreativeIQPage() {
  return (
    <>
      {/* ═══════════════════ HERO — MotionApp gradient + big product frame ═══════════════════ */}
      <section className="subpage-hero cq-hero-v2" aria-labelledby="cq-h1">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">Platform</Link> <span>›</span> Creative IQ</div>

          <div className="cq-hero-layout">
            <div className="cq-hero-lead">
              <span className="cq-hero-eyebrow cq-reveal"><span className="dot"></span>Creative decision OS · Meta first</span>

              <h1 id="cq-h1" className="cq-hero-h1 cq-reveal d1">
                Every creative decision, <span className="accent">closed-loop</span>.
              </h1>

              <p className="cq-hero-sub cq-reveal d2">
                We don&apos;t generate ads. We close the loop on creative decisions. <b>Creative IQ</b> reads a 9-signal Andromeda fatigue model on every live ad, maps the audience × angle × format gaps you never enter, and composes production-ready briefs from every signal at once — with day-precise runways and every outcome measured.
              </p>

              <div className="cq-hero-pillars cq-reveal d3">
                <article className="cq-pillar">
                  <span className="cq-pillar-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l4-4 4 4M17 12l4 4-4 4"/><path d="M12 2v20"/></svg></span>
                  <b>Detect fatigue</b>
                  <em>9-signal Andromeda · day-precise runway</em>
                </article>
                <article className="cq-pillar">
                  <span className="cq-pillar-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7" strokeDasharray="2 2"/></svg></span>
                  <b>Find gaps</b>
                  <em>Audience × angle × format map</em>
                </article>
                <article className="cq-pillar">
                  <span className="cq-pillar-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6z"/><path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z" opacity="0.5"/></svg></span>
                  <b>Compose briefs</b>
                  <em>AI-fused · production-ready · Scale plan</em>
                </article>
              </div>

              <div className="cta-row iq-cta-row cq-reveal d4">
                <a href="https://app.memologs.com/" className="btn btn-primary btn-lg">Try Creative IQ →</a>
                <a href="#readiness" className="btn btn-ghost btn-lg">See the Readiness Score</a>
              </div>
            </div>

            {/* Product frame — bigger, with mock-ad content inside each row */}
            <aside className="cq-hero-viz" aria-label="Creative IQ — Today decision queue">
              <div className="cq-hero-frame cq-hero-frame-lg">
                <div className="cq-hero-frame-chrome">
                  <div className="dots"><span></span><span></span><span></span></div>
                  <span className="tab">Creative IQ · Today</span>
                </div>
                <div className="cq-hero-frame-body">
                  {/* Readiness banner — north-star metric in the chrome */}
                  <div className="cq-hero-frame-ready" aria-label="Andromeda Readiness Score">
                    <div className="cq-hero-ready-ring" aria-hidden="true">
                      <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10"/>
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#00FFC2" strokeWidth="10" strokeDasharray="264" strokeDashoffset="100" strokeLinecap="round" transform="rotate(-90 50 50)"/>
                      </svg>
                      <span className="val">62</span>
                    </div>
                    <div className="cq-hero-ready-body">
                      <span className="kicker">Andromeda Readiness</span>
                      <span className="val">Watch · Aura Skin</span>
                      <em>3 backed · 5 candidates · 14d window</em>
                    </div>
                    <div className="cq-hero-ready-parts" title="5 components: Diversity · Fatigue · Format · Refresh · Signal">
                      <span className="mid"></span>
                      <span className="mid"></span>
                      <span className="ok"></span>
                      <span className="bad"></span>
                      <span className="ok"></span>
                    </div>
                  </div>

                  {/* Compact filter bar with AI Brief CTA on the right */}
                  <div className="cq-today-filters" style={{ margin: 0 }}>
                    <div className="cq-today-fgroup">
                      <span className="cq-today-flab">When</span>
                      <div className="cq-today-pills">
                        <span className="cq-today-pill on b-now"><span className="dot"></span>Now <em>2</em></span>
                        <span className="cq-today-pill b-today">Today <em>3</em></span>
                        <span className="cq-today-pill b-1_3d">1–3d <em>5</em></span>
                      </div>
                    </div>
                    <button type="button" className="cq-hero-aibrief" aria-label="Generate AI top brief">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6z"/>
                        <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" opacity="0.7"/>
                      </svg>
                      AI Brief
                    </button>
                  </div>

                  <div className="cq-today-rows" style={{ marginTop: 8 }}>
                    {/* AURA SKIN — fatigued */}
                    <article className="cq-today-row r-apply">
                      <div className="cq-today-viz">
                        <div className="cq-today-thumb cq-mock b-aura">
                          <span className="cq-mock-brandmark">Aura</span>
                          <span className="cq-mock-copy">Quiet skin<em>Winter serum</em></span>
                          <span className="cq-thumb-score bad">24</span>
                        </div>
                      </div>
                      <div className="cq-today-body">
                        <span className="cq-today-type t-apply">Apply</span>
                        <b>Aura Skin — Winter Serum</b>
                        <div className="cq-hero-tags">
                          <span className="cq-hero-tag t-hook"><span className="dot"></span>hook · question</span>
                          <span className="cq-hero-tag t-age"><span className="dot"></span>age 21d</span>
                        </div>
                        <span className="cq-today-runway is-fatigued">⏱ FATIGUED</span>
                      </div>
                      <div className="cq-hero-mini-ring" title="Fatigue score 78 · Critical">
                        <svg viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12"/>
                          <circle cx="50" cy="50" r="42" fill="none" stroke="#FF6B5B" strokeWidth="12" strokeDasharray="264" strokeDashoffset="58" strokeLinecap="round" transform="rotate(-90 50 50)"/>
                        </svg>
                        <span className="val" style={{ color: '#FF8A7E' }}>78</span>
                        <span className="lab">Fatigue</span>
                      </div>
                      <div className="cq-today-cta">
                        <button className="btn btn-primary btn-sm" aria-label="Pause ad">▐▐</button>
                      </div>
                    </article>

                    {/* PULSE — test candidate */}
                    <article className="cq-today-row r-test">
                      <div className="cq-today-viz">
                        <div className="cq-today-thumb cq-mock b-pulse">
                          <span className="cq-mock-brandmark">Pulse</span>
                          <span className="cq-mock-copy">Hydrate different<em>Free sample</em></span>
                          <span className="cq-thumb-score lav">+12</span>
                        </div>
                      </div>
                      <div className="cq-today-body">
                        <span className="cq-today-type t-test">Test</span>
                        <b>Pulse — Question hook × LAL 1%</b>
                        <div className="cq-hero-tags">
                          <span className="cq-hero-tag t-hook"><span className="dot"></span>hook · question</span>
                          <span className="cq-hero-tag t-audience"><span className="dot"></span>LAL 1%</span>
                        </div>
                        <span className="cq-today-runway">⏱ 3d optimal</span>
                      </div>
                      <div className="cq-hero-mini-ring" title="Forecast lift +12% · CI 8–17%">
                        <svg viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12"/>
                          <circle cx="50" cy="50" r="42" fill="none" stroke="#B8A6FF" strokeWidth="12" strokeDasharray="264" strokeDashoffset="105" strokeLinecap="round" transform="rotate(-90 50 50)"/>
                        </svg>
                        <span className="val" style={{ color: '#C8B8FF' }}>62</span>
                        <span className="lab">Fit</span>
                      </div>
                      <div className="cq-today-cta">
                        <button className="btn btn-primary btn-sm" aria-label="Start test">⚛</button>
                      </div>
                    </article>

                    {/* MERIDIAN — brief candidate */}
                    <article className="cq-today-row r-brief">
                      <div className="cq-today-viz">
                        <div className="cq-today-thumb cq-mock b-meridian">
                          <span className="cq-mock-brandmark">Meridian</span>
                          <span className="cq-mock-copy">Everyday carry<em>Monogram</em></span>
                          <span className="cq-thumb-score mid">+18</span>
                        </div>
                      </div>
                      <div className="cq-today-body">
                        <span className="cq-today-type t-brief">Brief</span>
                        <b>Meridian — Fill Question gap</b>
                        <div className="cq-hero-tags">
                          <span className="cq-hero-tag t-format"><span className="dot"></span>UGC vertical</span>
                          <span className="cq-hero-tag t-lift"><span className="dot"></span>+18% lift</span>
                        </div>
                        <span className="cq-today-runway">⏱ AI-drafted</span>
                      </div>
                      <div className="cq-hero-mini-ring" title="Gap opportunity score 76 · High">
                        <svg viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12"/>
                          <circle cx="50" cy="50" r="42" fill="none" stroke="#FFB347" strokeWidth="12" strokeDasharray="264" strokeDashoffset="63" strokeLinecap="round" transform="rotate(-90 50 50)"/>
                        </svg>
                        <span className="val" style={{ color: '#FFB347' }}>76</span>
                        <span className="lab">Gap</span>
                      </div>
                      <div className="cq-today-cta">
                        <button className="btn btn-primary btn-sm" aria-label="Generate brief">✦</button>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Full-width stats band — animated icons + gradient numbers */}
          <div className="cq-hero-statband cq-reveal d4" aria-label="Creative IQ stats">
            <div className="cq-stat-tile">
              <span className="cq-stat-ico" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  {/* 9 signals — 9 tick lines around a ring */}
                  <circle className="anim-ring" cx="16" cy="16" r="10" strokeOpacity="0.35"/>
                  <g strokeWidth="2">
                    <line x1="16" y1="3" x2="16" y2="6"/>
                    <line x1="24" y1="6" x2="22" y2="8"/>
                    <line x1="28" y1="13" x2="25" y2="14"/>
                    <line x1="28" y1="19" x2="25" y2="18"/>
                    <line x1="24" y1="26" x2="22" y2="24"/>
                    <line x1="16" y1="29" x2="16" y2="26"/>
                    <line x1="8"  y1="26" x2="10" y2="24"/>
                    <line x1="4"  y1="19" x2="7"  y2="18"/>
                    <line x1="4"  y1="13" x2="7"  y2="14"/>
                  </g>
                  <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none"/>
                </svg>
              </span>
              <div className="cq-stat-body"><b>9</b><em>Signal fatigue model</em></div>
            </div>
            <div className="cq-stat-tile">
              <span className="cq-stat-ico" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {/* Clock face — communicates "time" not "confidence interval" */}
                  <circle cx="16" cy="17" r="9"/>
                  <path d="M16 12v5l3.5 2.5"/>
                  {/* Warning ping above the clock — the "early warning" */}
                  <g className="anim-count">
                    <circle cx="16" cy="5" r="1.8" fill="currentColor" stroke="none"/>
                    <circle cx="16" cy="5" r="3.6" strokeOpacity="0.35"/>
                  </g>
                </svg>
              </span>
              <div className="cq-stat-body"><b>~14d</b><em>Early warning on fatigue</em></div>
            </div>
            <div className="cq-stat-tile">
              <span className="cq-stat-ico" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {/* Bars + checkmark — decisions joined to outcomes */}
                  <g strokeWidth="2.4">
                    <line className="anim-bar" x1="8"  y1="22" x2="8"  y2="14" style={{ animationDelay: '0s' }}/>
                    <line className="anim-bar" x1="14" y1="22" x2="14" y2="10" style={{ animationDelay: '0.3s' }}/>
                    <line className="anim-bar" x1="20" y1="22" x2="20" y2="16" style={{ animationDelay: '0.6s' }}/>
                  </g>
                  <path d="M24 12l3 3 5-6" strokeWidth="2" transform="translate(-4 3)"/>
                  <line x1="4" y1="24" x2="28" y2="24" strokeOpacity="0.35"/>
                </svg>
              </span>
              <div className="cq-stat-body"><b>100%</b><em>Decisions joined to outcomes</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MARQUEE BAND ═══════════════════ */}
      <section className="cq-marquee" aria-hidden="true">
        <div className="cq-marquee-lab">Built for performance teams shipping creative at pace</div>
        <div className="cq-marquee-track">
          <span className="cq-marquee-item">DTC Skincare</span>
          <span className="cq-marquee-item">Ad Agencies</span>
          <span className="cq-marquee-item">Growth Studios</span>
          <span className="cq-marquee-item">Beauty · Fashion</span>
          <span className="cq-marquee-item">Wellness · Fintech</span>
          <span className="cq-marquee-item">Multi-brand holdcos</span>
          <span className="cq-marquee-item">Media buyers</span>
          <span className="cq-marquee-item">Creative strategists</span>
          {/* Duplicate for seamless loop */}
          <span className="cq-marquee-item">DTC Skincare</span>
          <span className="cq-marquee-item">Ad Agencies</span>
          <span className="cq-marquee-item">Growth Studios</span>
          <span className="cq-marquee-item">Beauty · Fashion</span>
          <span className="cq-marquee-item">Wellness · Fintech</span>
          <span className="cq-marquee-item">Multi-brand holdcos</span>
          <span className="cq-marquee-item">Media buyers</span>
          <span className="cq-marquee-item">Creative strategists</span>
        </div>
      </section>

      {/* ═══════════════════ FOREPLAY-STYLE CREATIVE LIBRARY GRID ═══════════════════ */}
      <section className="sp-section alt">
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">Every creative <em>scored</em> at the grain.</h2>
            <p className="section-sub">Not a swipe file. Not an inspiration library. Creative IQ knows which of your ads is fatigued, why, and what to swap in — because every live creative is grain-scored on hook, tone, angle, audience, format, and length. Colour-coded because ambiguity kills speed.</p>
          </div>

          <div className="cq-foreplay">
            {/* AURA SKIN — fatigued */}
            <article className="cq-fp-card cq-mock cq-fp-mock b-aura">
              <span className="cq-mock-brand aura"><span className="brandmark"></span>Aura Skin</span>
              <span className="cq-mock-badge hot">−25%</span>
              <div className="cq-mock-bg">
                <svg viewBox="0 0 40 60" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5">
                  <path d="M15 4h10v7h-10z"/>
                  <path d="M14 11h12l-2 8h-8z" fill="rgba(255,255,255,0.20)"/>
                  <rect x="12" y="19" width="16" height="34" rx="3" fill="rgba(255,255,255,0.14)"/>
                  <line x1="15" y1="32" x2="25" y2="32"/>
                  <line x1="15" y1="38" x2="25" y2="38" strokeOpacity="0.6"/>
                </svg>
              </div>
              <div className="cq-fp-heat"></div>
              <div className="cq-fp-play">▶</div>
              <span className="cq-mock-copy" style={{ bottom: 74, left: 12, right: 12, fontSize: 20, lineHeight: 1.05 }}>Winter serum, quiet skin.<em>Save 25% today</em></span>
              <div className="cq-fp-meta">
                <b>Winter Sale — UGC Vertical A</b>
                <div className="cq-fp-meta-row">
                  <span className="score bad">CTR −38%</span>
                  <span>freq 11.2×</span>
                </div>
              </div>
            </article>

            {/* PULSE — testing new */}
            <article className="cq-fp-card cq-mock cq-fp-mock b-pulse">
              <span className="cq-mock-brand pulse"><span className="brandmark"></span>Pulse</span>
              <span className="cq-mock-badge new">Test</span>
              <div className="cq-mock-bg">
                <svg viewBox="0 0 40 60" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5">
                  <rect x="13" y="6" width="14" height="46" rx="5" fill="rgba(255,255,255,0.12)"/>
                  <path d="M13 28q7 -7 14 0 t-14 0" stroke="rgba(255,255,255,0.95)" strokeWidth="1.4" fill="none"/>
                  <path d="M13 36q7 -7 14 0 t-14 0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
                  <line x1="16" y1="44" x2="24" y2="44"/>
                </svg>
              </div>
              <div className="cq-fp-play">▶</div>
              <span className="cq-mock-copy" style={{ bottom: 74, left: 12, right: 12, fontSize: 20, lineHeight: 1.05 }}>What if hydration hit different?<em>Try Pulse · free sample</em></span>
              <div className="cq-fp-meta">
                <b>Question hook · Lookalike 1%</b>
                <div className="cq-fp-meta-row">
                  <span className="score mid">+12% forecast</span>
                  <span>gap cell</span>
                </div>
              </div>
            </article>

            {/* MERIDIAN — brief draft */}
            <article className="cq-fp-card cq-mock cq-fp-mock b-meridian">
              <span className="cq-mock-brand meridian"><span className="brandmark"></span>Meridian</span>
              <span className="cq-mock-badge sale">Draft</span>
              <div className="cq-mock-bg">
                <svg viewBox="0 0 40 60" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5">
                  <path d="M8 22h24v22H8z" fill="rgba(255,255,255,0.14)"/>
                  <path d="M13 22V18q0-4 7-4t7 4v4"/>
                  <line x1="15" y1="30" x2="25" y2="30" strokeOpacity="0.65"/>
                  <circle cx="20" cy="35" r="1.4" fill="currentColor"/>
                </svg>
              </div>
              <div className="cq-fp-play">✦</div>
              <span className="cq-mock-copy" style={{ bottom: 74, left: 12, right: 12, fontSize: 20, lineHeight: 1.05 }}>Everyday carry, made to last.<em>Free monogram · this week</em></span>
              <div className="cq-fp-meta">
                <b>Demo × High-AOV repeat</b>
                <div className="cq-fp-meta-row">
                  <span className="score mid">+15% forecast</span>
                  <span>AI-drafted</span>
                </div>
              </div>
            </article>

            {/* LUMEN — ready / testimonial winner */}
            <article className="cq-fp-card cq-mock cq-fp-mock b-lumen">
              <span className="cq-mock-brand lumen"><span className="brandmark"></span>Lumen</span>
              <span className="cq-mock-badge new">Winner</span>
              <div className="cq-mock-bg">
                <svg viewBox="0 0 40 60" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5">
                  <circle cx="20" cy="22" r="7" fill="rgba(255,255,255,0.16)"/>
                  <path d="M10 46q10 -10 20 0" fill="rgba(255,255,255,0.10)"/>
                  <path d="M9 50h22"/>
                  <path d="M13 32l2 3" strokeOpacity="0.6"/>
                  <path d="M27 32l-2 3" strokeOpacity="0.6"/>
                </svg>
              </div>
              <div className="cq-fp-play">▶</div>
              <span className="cq-mock-copy" style={{ bottom: 74, left: 12, right: 12, fontSize: 20, lineHeight: 1.05 }}>&ldquo;My sleep just… fixed itself.&rdquo;<em>Real customer · Priya, 34</em></span>
              <div className="cq-fp-meta">
                <b>Testimonial — 15s vertical</b>
                <div className="cq-fp-meta-row">
                  <span className="score ok">ROAS 3.4×</span>
                  <span>6d live</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ LAG CHART ═══════════════════ */}
      <section className="sp-section cq-lag-section">
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">CPA is a <em>lagging</em> indicator.<br />Fatigue isn&apos;t.</h2>
            <p className="section-sub">By the time your CPA chart spikes, the audience has already moved on from the creative. The leading signals were there all along — CTR drifted, frequency climbed, sentiment cooled. Creative IQ reads them in real time so you act before the bill lands.</p>
          </div>

          <div className="cq-lag-chart">
            <header className="cq-lag-head">
              <div className="cq-lag-legend">
                <span className="cq-lag-legend-item"><span className="cq-lag-line teal"></span>Andromeda Readiness (leading)</span>
                <span className="cq-lag-legend-item"><span className="cq-lag-line coral"></span>CPA (lagging)</span>
                <span className="cq-lag-legend-item"><span className="cq-lag-zone"></span>Detection gap — day-precise runway</span>
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
              <text x="330" y="36" fill="#FFB347" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700">RUNWAY · ~5d · CI 4–6d</text>
              <path d="M50 55 L120 60 L190 72 L260 92 L320 112 L400 138 L480 162 L560 178 L620 190 L700 198 L770 202 L830 204 L880 205" stroke="#00FFC2" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 55 L120 60 L190 72 L260 92 L320 112 L400 138 L480 162 L560 178 L620 190 L700 198 L770 202 L830 204 L880 205 L880 220 L50 220 Z" fill="url(#cqHealth)" />
              <path d="M50 190 L120 188 L190 186 L260 184 L320 180 L400 174 L480 162 L560 138 L620 108 L700 80 L770 62 L830 52 L880 48" stroke="#FF6B5B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 190 L120 188 L190 186 L260 184 L320 180 L400 174 L480 162 L560 138 L620 108 L700 80 L770 62 L830 52 L880 48 L880 220 L50 220 Z" fill="url(#cqCpa)" />
              <circle cx="320" cy="112" r="5" fill="#00FFC2" />
              <circle cx="320" cy="112" r="10" fill="none" stroke="#00FFC2" strokeOpacity="0.4" strokeWidth="1.5" />
              <text x="180" y="94" fill="#00FFC2" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700">⚠ Readiness dip</text>
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
                <span><b>Day-precise</b> runway with confidence interval</span>
                <span><b>Terminal state</b> when past predicted fatigue point</span>
                <span><b>Value Ledger</b> measures observed vs. counterfactual</span>
              </div>
              <p className="cq-lag-takeaway"><b>Takeaway:</b> the teal Readiness curve names the specific dying grain — the red CPA curve tells you the same story in dollars, two weeks late.</p>
            </footer>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ANDROMEDA READINESS SCORE ═══════════════════ */}
      <section className="sp-section alt cq-readiness-section" id="readiness">
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">One score for whether your creative is <em>ready to run</em>.</h2>
            <p className="section-sub">The Andromeda Readiness Score fuses five components — diversity of your live library, fatigue of running ads, format coverage, refresh rhythm, and signal strength — into a single 0–100 number your team can steer by.</p>
          </div>

          {/* Hero: big animated score ring + context */}
          <div className="cq-readiness-hero-v2">
            <div className="cq-ring-big" aria-label="Andromeda Readiness Score: 62 out of 100">
              <svg viewBox="0 0 200 200">
                {/* Outer dashed tick marks — rotating slowly */}
                <g className="ring-ticks">
                  {Array.from({ length: 60 }, (_, i) => {
                    const angle = (i * 360) / 60;
                    const outer = 96;
                    const inner = i % 5 === 0 ? 86 : 90;
                    const rad = (angle - 90) * (Math.PI / 180);
                    return (
                      <line
                        key={i}
                        x1={100 + outer * Math.cos(rad)}
                        y1={100 + outer * Math.sin(rad)}
                        x2={100 + inner * Math.cos(rad)}
                        y2={100 + inner * Math.sin(rad)}
                        stroke={i % 5 === 0 ? '#00FFC2' : 'rgba(255,255,255,0.14)'}
                        strokeWidth={i % 5 === 0 ? 1.6 : 1}
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>
                {/* Track ring */}
                <circle cx="100" cy="100" r="76" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
                {/* Pulse ring — soft glow */}
                <circle className="ring-pulse" cx="100" cy="100" r="76" fill="none" stroke="rgba(0,255,194,0.25)" strokeWidth="24" />
                {/* Progress fill — animated draw */}
                <circle
                  className="ring-fill"
                  cx="100" cy="100" r="76"
                  fill="none"
                  stroke="url(#cqReadinessGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  transform="rotate(-90 100 100)"
                />
                <defs>
                  <linearGradient id="cqReadinessGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00FFC2" />
                    <stop offset="50%" stopColor="#5EF0D8" />
                    <stop offset="100%" stopColor="#00D4A3" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="core-num">62</div>
              <div className="core-lab">Ready · watch</div>
            </div>

            <div className="cq-readiness-lede">
              <span className="cq-readiness-eyebrow">Andromeda Readiness Score</span>
              <h3>How steerable is your account this week?</h3>
              <p>Recomputed nightly per brand and per ad account. Above 75 means the mix is broad, fresh, and stable — you can scale winners without worry. Below 50 flags concentration risk, fatigue building, or format gaps that need a brief.</p>
              <div className="cq-readiness-bands">
                <span className="cq-band ok"><b>75+</b> Ready</span>
                <span className="cq-band mid"><b>50–74</b> Watch</span>
                <span className="cq-band bad"><b>&lt;50</b> Act</span>
              </div>
            </div>
          </div>

          {/* 5-component horizontal strip — no more whitespace at bottom */}
          <div className="cq-readiness-strip">
            <article className="cq-partv2 t-diversity">
              <header className="cq-partv2-head">
                <span className="cq-partv2-ico" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="currentColor">
                    <g className="cq-icon-cells">
                      <rect x="4"  y="4"  width="9" height="9" rx="1.5" opacity="0.9"/>
                      <rect x="19" y="4"  width="9" height="9" rx="1.5" opacity="0.55"/>
                      <rect x="4"  y="19" width="9" height="9" rx="1.5" opacity="0.5" />
                      <rect x="19" y="19" width="9" height="9" rx="1.5" opacity="0.85"/>
                    </g>
                  </svg>
                </span>
                <span className="cq-partv2-weight">30%</span>
              </header>
              <div className="cq-partv2-title">
                <span className="cq-partv2-eyebrow">Component 01</span>
                <h4>Diversity</h4>
              </div>
              <p>How much of your audience × angle × format map is populated with live spend. Concentration is the fastest way to burn out a whole account.</p>
              <div className="cq-partv2-bar"><div className="cq-partv2-fill" style={{ width: '52%' }}></div></div>
            </article>

            <article className="cq-partv2 t-fatigue">
              <header className="cq-partv2-head">
                <span className="cq-partv2-ico" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path className="cq-icon-wave" d="M3 12c2.5-2 5 2 7 0s5-6 8-4 4 6 8 4 3-2 3-2"/>
                    <path d="M3 22h26" strokeOpacity="0.35"/>
                    <circle cx="26" cy="10" r="2" fill="currentColor" stroke="none"/>
                  </svg>
                </span>
                <span className="cq-partv2-weight">25%</span>
              </header>
              <div className="cq-partv2-title">
                <span className="cq-partv2-eyebrow">Component 02</span>
                <h4>Fatigue</h4>
              </div>
              <p>The rolled-up 9-signal Andromeda fatigue score across delivering ads. Weighted by spend so a fatigued whale hits harder than the long-tail.</p>
              <div className="cq-partv2-bar"><div className="cq-partv2-fill" style={{ width: '68%' }}></div></div>
            </article>

            <article className="cq-partv2 t-format">
              <header className="cq-partv2-head">
                <span className="cq-partv2-ico" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <g className="cq-icon-shapes">
                      <rect x="6" y="4" width="14" height="18" rx="1.5" fill="currentColor" fillOpacity="0.20"/>
                      <circle cx="22" cy="14" r="6" fill="currentColor" fillOpacity="0.30"/>
                      <path d="M10 24l6 6 6-6" fill="currentColor" fillOpacity="0.40"/>
                    </g>
                  </svg>
                </span>
                <span className="cq-partv2-weight">15%</span>
              </header>
              <div className="cq-partv2-title">
                <span className="cq-partv2-eyebrow">Component 03</span>
                <h4>Format coverage</h4>
              </div>
              <p>UGC vertical, product-only, testimonial, animation, static carousel — how many creative shapes are delivering. Missing formats = missing segments.</p>
              <div className="cq-partv2-bar"><div className="cq-partv2-fill" style={{ width: '74%' }}></div></div>
            </article>

            <article className="cq-partv2 t-refresh">
              <header className="cq-partv2-head">
                <span className="cq-partv2-ico" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <g className="cq-icon-refresh">
                      <path d="M27 16a11 11 0 1 1-3.5-8.1"/>
                      <path d="M28 3v6h-6"/>
                    </g>
                  </svg>
                </span>
                <span className="cq-partv2-weight">15%</span>
              </header>
              <div className="cq-partv2-title">
                <span className="cq-partv2-eyebrow">Component 04</span>
                <h4>Refresh rhythm</h4>
              </div>
              <p>How steady the cadence of new creative going into the account is. Sporadic drops create fatigue cliffs; steady drops smooth the curve.</p>
              <div className="cq-partv2-bar"><div className="cq-partv2-fill" style={{ width: '44%' }}></div></div>
            </article>

            <article className="cq-partv2 t-signal">
              <header className="cq-partv2-head">
                <span className="cq-partv2-ico" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="currentColor">
                    <g className="cq-icon-bars">
                      <rect x="4"  y="10" width="4" height="18" rx="1"/>
                      <rect x="11" y="6"  width="4" height="22" rx="1"/>
                      <rect x="18" y="14" width="4" height="14" rx="1"/>
                      <rect x="25" y="2"  width="4" height="26" rx="1"/>
                    </g>
                  </svg>
                </span>
                <span className="cq-partv2-weight">15%</span>
              </header>
              <div className="cq-partv2-title">
                <span className="cq-partv2-eyebrow">Component 05</span>
                <h4>Signal strength</h4>
              </div>
              <p>How much delivery each ad has — enough to score honestly? Rows without delivery evidence never fake a signal; they degrade the score instead.</p>
              <div className="cq-partv2-bar"><div className="cq-partv2-fill" style={{ width: '81%' }}></div></div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 9 SIGNALS — ANIMATED HUB ═══════════════════ */}
      <section className="sp-section cq-signals-section" id="signals">
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">Nine signals feed the fatigue score.<br />Zero guessing.</h2>
            <p className="section-sub">The Andromeda fatigue engine reads nine leading signals per ad in real time — each weighted against your own historical cohorts. Watch every signal transmit into the engine, then flip to see the per-ad score and day-precise runway it produces.</p>
          </div>

          {(() => {
            const HUB = [
              { key: 'ctr',    name: 'CTR / CVR trend',       weight: '18%', tone: '#00FFC2', icon: <><path d="M3 20h18M6 16l4-5 4 4 5-7"/></> },
              { key: 'freq',   name: 'Frequency',             weight: '14%', tone: '#B8A6FF', icon: <><path d="M3 5h14l-4 4h-7l-3-3v-1zM3 12h18M3 19h14M3 5v14"/></> },
              { key: 'eng',    name: 'Engagement decay',      weight: '12%', tone: '#FF8A7E', icon: <><path d="M4 19L10 13l4 4 6-7"/><path d="M20 10V6h-4"/></> },
              { key: 'age',    name: 'Creative age',          weight: '11%', tone: '#FFB347', icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></> },
              { key: 'peer',   name: 'Peer pressure',         weight: '11%', tone: '#8FCBFF', icon: <><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/></> },
              { key: 'sat',    name: 'Impression saturation', weight: '10%', tone: '#FF9DD3', icon: <><path d="M3 3v18h18M7 15V9M11 15V6M15 15v-4M19 15v-8"/></> },
              { key: 'del',    name: 'Delivery decay',        weight: '10%', tone: '#8FE6BE', icon: <><path d="M4 4l16 16M4 20L20 4"/><circle cx="12" cy="12" r="9" strokeDasharray="2 2"/></> },
              { key: 'sent',   name: 'Sentiment',             weight: '8%',  tone: '#CE9FFF', icon: <><circle cx="12" cy="12" r="9"/><path d="M8 13a4 4 0 008 0M9 9h.01M15 9h.01"/></> },
              { key: 'refresh',name: 'Refresh rhythm',        weight: '6%',  tone: '#F0DAA8', icon: <><path d="M21 12a9 9 0 11-3-6.7M21 4v4h-4"/></> },
            ];
            // Positions: 9 satellites evenly at 40° intervals around center.
            // SVG viewBox is 100×80 (5:4 aspect), center at (50, 40), radius 32.
            const POS = HUB.map((_, i) => {
              const rad = ((i * 360 / 9) - 90) * Math.PI / 180;
              const R = 32;
              return {
                svgX: 50 + R * Math.cos(rad),
                svgY: 40 + R * Math.sin(rad),
                cssLeft: 50 + R * Math.cos(rad),           // % of container width
                cssTop:  (40 + R * Math.sin(rad)) * 1.25,  // % of container height (80 → 100)
              };
            });

            return (
              <>
                <div className="cq-signals-hub" role="img" aria-label="9-signal fatigue engine">
                  {/* Connecting lines + streaming particles */}
                  <svg viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet" className="cq-hub-svg">
                    {HUB.map((sig, i) => {
                      const { svgX, svgY } = POS[i];
                      return (
                        <g key={sig.key}>
                          <line
                            className="cq-hub-spoke"
                            x1={svgX} y1={svgY} x2={50} y2={40}
                            stroke={sig.tone}
                            strokeWidth="0.25"
                          />
                          {[0, 1].map((p) => (
                            <circle key={p} r="0.7" fill={sig.tone}>
                              <animate attributeName="cx" from={svgX} to={50} dur="2.8s" begin={`${i * 0.22 + p * 1.4}s`} repeatCount="indefinite"/>
                              <animate attributeName="cy" from={svgY} to={40} dur="2.8s" begin={`${i * 0.22 + p * 1.4}s`} repeatCount="indefinite"/>
                              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="2.8s" begin={`${i * 0.22 + p * 1.4}s`} repeatCount="indefinite"/>
                            </circle>
                          ))}
                        </g>
                      );
                    })}
                  </svg>

                  {/* Central flipping orb — Creative IQ mark ↔ fatigue score */}
                  <div className="cq-hub-orb" aria-hidden="true">
                    <div className="cq-hub-face front">
                      <svg className="mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6z"/>
                        <path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z" opacity="0.6"/>
                      </svg>
                      <span className="kicker">Andromeda</span>
                      <b>Fatigue engine</b>
                      <em>9 → 1</em>
                    </div>
                    <div className="cq-hub-face back">
                      <span className="kicker">Fatigue score</span>
                      <span className="num">24</span>
                      <span className="runway">Fatigues in <b>~5d</b></span>
                      <em>CI 4–6d</em>
                    </div>
                  </div>

                  {/* 9 satellite tiles */}
                  {HUB.map((sig, i) => {
                    const { cssLeft, cssTop } = POS[i];
                    return (
                      <div
                        key={sig.key}
                        className="cq-hub-sat"
                        style={{
                          left: `${cssLeft}%`,
                          top:  `${cssTop}%`,
                          animationDelay: `${i * 60}ms`,
                          ['--tone' as string]: sig.tone,
                        }}
                      >
                        <span className="ico">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{sig.icon}</svg>
                        </span>
                        <b>{sig.name}</b>
                        <em>{sig.weight}</em>
                      </div>
                    );
                  })}
                </div>

                <p className="cq-hub-caption">
                  Each signal is weighted against your own historical cohorts, then rolled up into a per-ad fatigue score and day-precise runway. When the point estimate collapses to zero, the pill turns red and simply reads <b>Fatigued</b> — no meaningless <em>~0d</em> countdowns.
                </p>
              </>
            );
          })()}
        </div>
      </section>

      {/* ═══════════════════ AD DETAIL — CREATIVE BREAKDOWN ═══════════════════ */}
      <section className="sp-section alt cq-dash-section" id="ad-detail">
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">Open an ad.<br />See it broken down.</h2>
            <p className="section-sub">Creative IQ doesn&apos;t stop at &ldquo;this ad is tired.&rdquo; Every ad has a detail page with a six-icon Creative Breakdown — quality, brand, coverage, readiness, fatigue, confidence — plus colour-coded tags for every dimension we&apos;ve classified (hook, tone, format, audience, angle) and campaign › adset breadcrumbs.</p>
          </div>

          <div className="cq-dash">
            <div className="aq-dash-chrome">
              <div className="aq-dash-dots" aria-hidden="true"><span></span><span></span><span></span></div>
              <div className="aq-dash-tab">Creative IQ · Ad detail</div>
              <div className="aq-dash-user">RS</div>
            </div>

            <div className="cq-dash-body">
              <header className="cq-detail-head">
                <div className="cq-detail-thumb cq-mock b-aura">
                  <div className="cq-mock-bg">
                    <svg viewBox="0 0 24 40" fill="none" stroke="rgba(255,255,255,0.80)" strokeWidth="1.5">
                      <path d="M9 3h6v4h-6z"/>
                      <path d="M8 7h8l-1 6h-6z" fill="rgba(255,255,255,0.20)"/>
                      <rect x="7" y="13" width="10" height="22" rx="2" fill="rgba(255,255,255,0.14)"/>
                      <line x1="9" y1="20" x2="15" y2="20"/>
                    </svg>
                  </div>
                </div>
                <div className="cq-detail-title">
                  <b>Aura Skin — Winter Serum · UGC Vertical A</b>
                  <div className="cq-detail-crumbs">
                    <span><em>Campaign</em>Winter 2026 Skincare Repositioning Push</span>
                    <span><em>Ad set</em>LAL 1% · Skincare-curious 25–34</span>
                  </div>
                </div>
                <div className="cq-detail-status">
                  <span className="cq-pill bad">Fatigued</span>
                  <span className="cq-detail-runway">Runway <b>~5d</b> · CI 4–6d</span>
                </div>
              </header>

              <section className="cq-breakdown">
                <div className="cq-breakdown-lab">Creative breakdown</div>
                <div className="cq-breakdown-grid">
                  <article className="cq-grain ok">
                    <span className="cq-grain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></span>
                    <div><span className="cq-grain-lab">Quality</span><b className="ok">86</b><em>Above cohort</em></div>
                  </article>
                  <article className="cq-grain ok">
                    <span className="cq-grain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3l8 4v6c0 5-3.5 7-8 8-4.5-1-8-3-8-8V7z"/></svg></span>
                    <div><span className="cq-grain-lab">Brand</span><b className="ok">78</b><em>On-tone · logo held</em></div>
                  </article>
                  <article className="cq-grain mid">
                    <span className="cq-grain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7" strokeDasharray="2 2"/></svg></span>
                    <div><span className="cq-grain-lab">Coverage</span><b className="mid">54</b><em>1 gap open</em></div>
                  </article>
                  <article className="cq-grain bad">
                    <span className="cq-grain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/></svg></span>
                    <div><span className="cq-grain-lab">Readiness</span><b className="bad">24</b><em>Below 40 · act</em></div>
                  </article>
                  <article className="cq-grain bad">
                    <span className="cq-grain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 12l4-6 4 4 4-8 4 4"/><path d="M4 20h16"/></svg></span>
                    <div><span className="cq-grain-lab">Fatigue</span><b className="bad">78</b><em>9-signal rollup</em></div>
                  </article>
                  <article className="cq-grain ok">
                    <span className="cq-grain-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 12a8 8 0 1 1 8 8"/><path d="M8 20l4 4-4 4" strokeLinejoin="round"/></svg></span>
                    <div><span className="cq-grain-lab">Confidence</span><b className="ok">High</b><em>34d · 8.2k conv</em></div>
                  </article>
                </div>
              </section>

              <section className="cq-tagstrip">
                <span className="cq-tagstrip-lab">Tags</span>
                <span className="cq-tag t-hook"><span className="dot"></span>hook · question</span>
                <span className="cq-tag t-tone"><span className="dot"></span>tone · warm</span>
                <span className="cq-tag t-format"><span className="dot"></span>format · UGC vertical</span>
                <span className="cq-tag t-audience"><span className="dot"></span>audience · lookalike 1%</span>
                <span className="cq-tag t-angle"><span className="dot"></span>angle · problem→solve</span>
                <span className="cq-tag t-length"><span className="dot"></span>length · 15s</span>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ DIVERSITY GAP MAP ═══════════════════ */}
      <section className="sp-section cq-gap-section" id="gap-map">
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">Find the cells you never enter.<br />Fill them before your winners fatigue.</h2>
            <p className="section-sub">The Diversity Gap Map pivots your live library across two axes you pick — audience × angle, format × hook, tone × cohort — and colours every cell by observed spend and performance vs. your account mean. Empty cells are gaps: territory your creative never enters.</p>
          </div>

          <div className="cq-gap">
            <div className="cq-gap-controls">
              <div className="cq-gap-ctlrow">
                <span className="cq-gap-flab">X axis</span>
                <span className="cq-gap-pill on">Hook</span>
                <span className="cq-gap-pill">Angle</span>
                <span className="cq-gap-pill">Format</span>
              </div>
              <div className="cq-gap-ctlrow">
                <span className="cq-gap-flab">Y axis</span>
                <span className="cq-gap-pill on">Audience</span>
                <span className="cq-gap-pill">Tone</span>
              </div>
              <div className="cq-gap-ctlrow">
                <span className="cq-gap-flab">Metric</span>
                <span className="cq-gap-metric">Spend × ROAS vs. account mean</span>
              </div>
            </div>

            <div className="cq-gap-map">
              <div></div>
              <div className="cq-gap-xlab">Question</div>
              <div className="cq-gap-xlab">Statistic</div>
              <div className="cq-gap-xlab">Testimonial</div>
              <div className="cq-gap-xlab">Demo</div>

              <div className="cq-gap-ylab">LAL 1%</div>
              <div className="cq-gap-cell gap"><span className="ct">0</span><em>+12% lift</em></div>
              <div className="cq-gap-cell hot"><span className="ct">$18k</span><em>+22%</em></div>
              <div className="cq-gap-cell warm"><span className="ct">$8k</span><em>+7%</em></div>
              <div className="cq-gap-cell weak"><span className="ct">$1k</span><em>−4%</em></div>

              <div className="cq-gap-ylab">Skincare 25–34</div>
              <div className="cq-gap-cell warm"><span className="ct">$4k</span><em>+3%</em></div>
              <div className="cq-gap-cell hot"><span className="ct">$21k</span><em>+18%</em></div>
              <div className="cq-gap-cell gap"><span className="ct">0</span><em>+9% lift</em></div>
              <div className="cq-gap-cell warm"><span className="ct">$6k</span><em>+2%</em></div>

              <div className="cq-gap-ylab">High-AOV repeat</div>
              <div className="cq-gap-cell weak"><span className="ct">$2k</span><em>−9%</em></div>
              <div className="cq-gap-cell warm"><span className="ct">$5k</span><em>+1%</em></div>
              <div className="cq-gap-cell hot"><span className="ct">$14k</span><em>+31%</em></div>
              <div className="cq-gap-cell gap"><span className="ct">0</span><em>+15% lift</em></div>

              <div className="cq-gap-ylab">Curiosity seekers</div>
              <div className="cq-gap-cell under"><span className="ct">$3k</span><em>−12%</em></div>
              <div className="cq-gap-cell gap"><span className="ct">0</span><em>+8% lift</em></div>
              <div className="cq-gap-cell weak"><span className="ct">$1k</span><em>−2%</em></div>
              <div className="cq-gap-cell empty"><span className="ct">—</span></div>
            </div>

            <aside className="cq-gap-side">
              <div className="cq-gap-side-lab">Top diversity gaps · ranked</div>
              <article className="cq-gap-item">
                <span className="cq-gap-item-rank">01</span>
                <div><b>Question × LAL 1%</b><em>+12% ROAS forecast · 0% saturated · winners index 1.9×</em></div>
                <button className="btn btn-primary btn-sm">✦ Draft brief</button>
              </article>
              <article className="cq-gap-item">
                <span className="cq-gap-item-rank">02</span>
                <div><b>Demo × High-AOV repeat</b><em>+15% ROAS forecast · headroom 38%</em></div>
                <button className="btn btn-ghost btn-sm">✦ Draft brief</button>
              </article>
              <article className="cq-gap-item">
                <span className="cq-gap-item-rank">03</span>
                <div><b>Statistic × Curiosity seekers</b><em>+8% ROAS forecast · cohort empty</em></div>
                <button className="btn btn-ghost btn-sm">✦ Draft brief</button>
              </article>
            </aside>
          </div>

          <p className="cq-gap-caption">Cross-account brands see one aggregated map plus a per-account overlay — so multi-brand agencies find the gap once and roll it out where the underlying audiences overlap.</p>
        </div>
      </section>

      {/* ═══════════════════ AI TOP BRIEF ═══════════════════ */}
      <section className="sp-section alt cq-brief-section" id="ai-brief">
        <div className="wrap">
          <div className="section-head split">
            <div>
              <span className="iq-chip iq-chip-accent" style={{ marginBottom: 12, display: 'inline-block' }}>✦ Scale plan · AI-fused</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>One brief.<br />Every signal we have.</h2>
            </div>
            <p className="section-sub">Creative teams don&apos;t need another blank page. The AI Top Brief generator fuses every signal already on your account into one production-ready brief — the highest-impact gap × your winning grain, cross-referenced with real-world search-trend velocity, cultural moments in flight, and competitor creative directions live in the wild.</p>
          </div>

          <div className="cq-brief-fuse">
            <div className="cq-brief-ings">
              <article className="cq-brief-ing t-diversity"><span className="cq-brief-ing-kicker">Diversity gap</span><b>Question × LAL 1%</b><em>+12% ROAS · 0% saturated</em></article>
              <article className="cq-brief-ing t-winners"><span className="cq-brief-ing-kicker">Your winners</span><b>UGC vertical · 15s · warm</b><em>Grain-extracted from top 10</em></article>
              <article className="cq-brief-ing t-audience"><span className="cq-brief-ing-kicker">Audience fit</span><b>Lookalike 1% · idx 1.9×</b><em>Headroom +38%</em></article>
              <article className="cq-brief-ing t-realworld"><span className="cq-brief-ing-kicker">Real-world</span><b>&ldquo;retinol serum&rdquo; +124%</b><em>Coachella &apos;26 · Glossier UGC</em></article>
              <article className="cq-brief-ing t-fatigue"><span className="cq-brief-ing-kicker">Fatigue signal</span><b>3 ads · runway ≤ 7d</b><em>9-signal Andromeda</em></article>
            </div>

            <div className="cq-brief-orb-wrap">
              <div className="cq-brief-orb">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 5l3 7 7 2-7 2-3 7-3-7-7-2 7-2z"/>
                  <path d="M30 24l1.5 3.5L35 29l-3.5 1.5L30 34l-1.5-3.5L25 29l3.5-1.5z" opacity="0.6"/>
                </svg>
              </div>
              <span className="cq-brief-orb-lab">AI Top Brief · fusing 5 signals</span>
            </div>

            <div className="cq-brief-out">
              <header className="cq-brief-out-head"><span>Production brief</span><em>Draft · 6 sec</em></header>
              <div className="cq-brief-out-fields">
                <div><em>Angle</em><b>Problem → Solve</b></div>
                <div><em>Hook</em><b>Question · &ldquo;What if…&rdquo;</b></div>
                <div><em>Audience</em><b>Lookalike 1%</b></div>
                <div><em>Format</em><b>UGC vertical · 15s</b></div>
                <div><em>KPI</em><b>ROAS ≥ 3.5×</b></div>
                <div><em>Refs</em><b>3 winners auto-attached</b></div>
              </div>
              <footer className="cq-brief-out-foot"><button className="btn btn-primary btn-sm">Open in Brief Studio →</button></footer>
            </div>
          </div>

          <p className="cq-brief-caption">Locked to the <b>Scale</b> plan. Non-Scale accounts see the CTA and can open the animated walkthrough — showing exactly which signals the AI ingests — before deciding to upgrade.</p>
        </div>
      </section>

      {/* ═══════════════════ PLATFORM COVERAGE ═══════════════════ */}
      <section className="sp-section cq-platforms-section" id="platforms">
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">Where Creative IQ <em>works</em> today.</h2>
            <p className="section-sub">Run Meta ads? You&apos;re ready on day one. TikTok and YouTube are on the way — join the waitlist and we&apos;ll onboard you the moment those platforms are live.</p>
          </div>

          <div className="cq-platforms">
            {/* META — live */}
            <article className="cq-pf cq-pf-live">
              <header className="cq-pf-head">
                <span className="cq-pf-ico cq-pf-ico-meta" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.93H7.9V12h2.1V9.8c0-2.08 1.24-3.23 3.13-3.23.91 0 1.85.16 1.85.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.29V12h2.3l-.37 2.87h-1.93v6.94C18.56 20.87 22 16.84 22 12z"/>
                  </svg>
                </span>
                <span className="cq-pf-name">Meta</span>
                <span className="cq-pf-badge live"><span className="dot"></span>Live</span>
              </header>
              <ul className="cq-pf-list">
                <li>Per-ad fatigue scoring &amp; day-precise runway</li>
                <li>Diversity Gap Map — find the cells you never enter</li>
                <li>Decision queue — Apply, Test, Brief, Watch</li>
                <li>AI Top Brief generator (Scale plan)</li>
                <li>Outcomes measured against a counterfactual</li>
              </ul>
              <footer className="cq-pf-foot">
                <a href="https://app.memologs.com/" className="btn btn-primary btn-sm">Try Creative IQ →</a>
                <span className="cq-pf-note">Refreshes nightly from your Meta ad account</span>
              </footer>
            </article>

            {/* TIKTOK — coming soon */}
            <article className="cq-pf cq-pf-roadmap">
              <header className="cq-pf-head">
                <span className="cq-pf-ico cq-pf-ico-tiktok" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 3h-3.2v13.6c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .6.05.9.14V10.6a6.2 6.2 0 00-.9-.06c-3.4 0-6.1 2.75-6.1 6.15S6.5 22.85 9.9 22.85 16 20.1 16 16.7V9.6c1.25.9 2.8 1.45 4.4 1.45V7.85c-2.4 0-4.4-2-4.4-4.4V3z"/>
                  </svg>
                </span>
                <span className="cq-pf-name">TikTok</span>
                <span className="cq-pf-badge soon">Coming soon</span>
              </header>
              <ul className="cq-pf-list">
                <li>Same 9-signal fatigue engine, TikTok-tuned</li>
                <li>Gap map across audience, angle, and format</li>
                <li>Decision queue &amp; brief workflow</li>
                <li>Portfolio view alongside your Meta account</li>
              </ul>
              <footer className="cq-pf-foot">
                <PilotCTA
                  className="btn btn-ghost btn-sm"
                  modalTitle="Join the TikTok waitlist"
                  modalSubtitle="Tell us about your TikTok ad account. We'll email as soon as Creative IQ is live on TikTok — and onboard you first."
                >
                  Join the waitlist →
                </PilotCTA>
                <span className="cq-pf-note">We&apos;ll email as soon as it&apos;s ready</span>
              </footer>
            </article>

            {/* YOUTUBE — coming soon */}
            <article className="cq-pf cq-pf-roadmap">
              <header className="cq-pf-head">
                <span className="cq-pf-ico cq-pf-ico-youtube" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 6.2s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C16.5 2.5 12 2.5 12 2.5s-4.5 0-7.8.4c-.5.1-1.4.1-2.3 1C1.2 4.6 1 6.2 1 6.2s-.2 1.9-.2 3.7v1.7c0 1.9.2 3.7.2 3.7s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.5 0 7.8-.4c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.7v-1.7c0-1.9-.2-3.7-.2-3.7z"/>
                    <path d="M9.5 14.5V7.5l6.5 3.5z" fill="#0A0F1D"/>
                  </svg>
                </span>
                <span className="cq-pf-name">YouTube</span>
                <span className="cq-pf-badge soon">Coming soon</span>
              </header>
              <ul className="cq-pf-list">
                <li>Watch-through decay &amp; skip-rate saturation</li>
                <li>Shorts &amp; in-stream format coverage</li>
                <li>Decision queue with the same commit flow</li>
                <li>Portfolio view across every platform you run</li>
              </ul>
              <footer className="cq-pf-foot">
                <PilotCTA
                  className="btn btn-ghost btn-sm"
                  modalTitle="Join the YouTube waitlist"
                  modalSubtitle="Tell us about your YouTube ad account. We'll email as soon as Creative IQ is live on YouTube — and onboard you first."
                >
                  Join the waitlist →
                </PilotCTA>
                <span className="cq-pf-note">We&apos;ll email as soon as it&apos;s ready</span>
              </footer>
            </article>
          </div>

          <p className="cq-pf-caption">Every score you see is backed by real platform data. If a signal can&apos;t be measured, we don&apos;t show a number — we tell you.</p>
        </div>
      </section>

      {/* ═══════════════════ QUOTE + CTA ═══════════════════ */}
      <section className="sp-section cq-close-section">
        <div className="wrap">
          <blockquote className="sp-quote">
            <p>&ldquo;We used to have a creative dashboard. Creative IQ gave us a decision queue. The team opens Today, commits three or four things, and goes back to making ads — instead of sifting through fatigue charts.&rdquo;</p>
            <cite>Head of Performance · DTC skincare</cite>
          </blockquote>

          <div className="sp-cta-inline">
            <div>
              <h3>Close the loop on your creative decisions.</h3>
              <p>Sign up in under a minute. Connect your Meta ad account and see your first Readiness Score tonight.</p>
            </div>
            <a href="https://app.memologs.com/" className="btn btn-primary btn-lg">Try Creative IQ →</a>
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
