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
              <h1 className="display hero-display" id="hero-h1">
                AI Marketing<br />Intelligence Platform
              </h1>
              <p className="hero-tagline">
                MemoLogs <em>thinks.</em> Your stack <em>measures.</em>
              </p>
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
                <h3>Platforms over-count conversions <em>3×</em>.</h3>
                <p>Every budget call you make downstream is off by a multiple. You&apos;re not optimizing — you&apos;re calibrating on fiction.</p>
              </div>
              <div className="dc-exhibit dc-inflation">
                <div className="dc-inf-row"><span className="dc-inf-lab">Platform says</span><div className="dc-inf-bar"><div className="dc-inf-fill ghost" style={{width:"100%"}}></div></div><span className="dc-inf-val">12,500</span></div>
                <div className="dc-inf-row"><span className="dc-inf-lab">Actually caused</span><div className="dc-inf-bar"><div className="dc-inf-fill real" style={{width:"33%"}}></div></div><span className="dc-inf-val">4,200</span></div>
                <div className="dc-inf-delta"><span className="dc-inf-delta-tag">Inflation factor · illustrative</span><span className="dc-inf-delta-val">3.0×</span></div>
              </div>
            </article>

            <article className="diag-card">
              <header className="dc-head">
                <span className="dc-idx">02</span>
                <span className="dc-tag">Creative</span>
              </header>
              <div className="dc-body">
                <h3>Your creative is dying in silence.</h3>
                <p>By the time CPA spikes, you&apos;ve already overspent up to 60%. The symptom arrives weeks after the death.</p>
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
        </div>
      </section>

      {/* ═══════════ DIAGNOSTIC / ORBIT ═══════════ */}
      <section className="diag-orbit">
        <div className="wrap">
          <div className="mb-head">
            <h2 className="mb-title">One root cause.</h2>
          </div>

          <div className="orbit-stage" role="img" aria-label="Eight marketing-stack symptoms orbiting one root cause">
            <svg className="orbit-svg" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="orbitCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"  stopColor="#00FFC2" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#00D4A3" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.15" />
                </radialGradient>
              </defs>

              {/* Orbit ellipses */}
              <ellipse cx="400" cy="200" rx="320" ry="130"
                fill="none" stroke="rgba(0,255,194,0.14)" strokeDasharray="2 6" />
              <ellipse cx="400" cy="200" rx="260" ry="100"
                fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 6" />

              {/* Connector lines (center → symptom) */}
              <g className="orbit-lines" stroke="rgba(0,255,194,0.32)" strokeWidth="1">
                <line x1="400" y1="200" x2="400" y2="70" />
                <line x1="400" y1="200" x2="626" y2="108" />
                <line x1="400" y1="200" x2="720" y2="200" />
                <line x1="400" y1="200" x2="626" y2="292" />
                <line x1="400" y1="200" x2="400" y2="330" />
                <line x1="400" y1="200" x2="174" y2="292" />
                <line x1="400" y1="200" x2="80"  y2="200" />
                <line x1="400" y1="200" x2="174" y2="108" />
              </g>

              {/* Outward pulses from center along each line */}
              <g className="orbit-pulses" fill="#00FFC2" aria-hidden="true">
                <circle r="3" cx="0" cy="0">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s"
                    path="M 400 200 L 400 70" />
                </circle>
                <circle r="3" cx="0" cy="0">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.3s"
                    path="M 400 200 L 626 108" />
                </circle>
                <circle r="3" cx="0" cy="0">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.6s"
                    path="M 400 200 L 720 200" />
                </circle>
                <circle r="3" cx="0" cy="0">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.9s"
                    path="M 400 200 L 626 292" />
                </circle>
                <circle r="3" cx="0" cy="0">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s"
                    path="M 400 200 L 400 330" />
                </circle>
                <circle r="3" cx="0" cy="0">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.5s"
                    path="M 400 200 L 174 292" />
                </circle>
                <circle r="3" cx="0" cy="0">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.8s"
                    path="M 400 200 L 80 200" />
                </circle>
                <circle r="3" cx="0" cy="0">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin="2.1s"
                    path="M 400 200 L 174 108" />
                </circle>
              </g>

              {/* Central core: outer halo + ring + nucleus */}
              <g className="orbit-core">
                <circle className="orbit-ripple" cx="400" cy="200" r="26"
                  fill="none" stroke="#00FFC2" strokeOpacity="0.5" strokeWidth="1.4" />
                <circle cx="400" cy="200" r="34" fill="url(#orbitCore)" className="orbit-core-glow" />
                <circle cx="400" cy="200" r="18" fill="none" stroke="#00FFC2" strokeWidth="1.6" />
                <circle cx="400" cy="200" r="6"  fill="#070B16" stroke="#00FFC2" strokeWidth="1.2" />
                <circle cx="400" cy="200" r="2.4" fill="#00FFC2" />
              </g>

              {/* Symptom dots (coral) */}
              <g className="orbit-dots" fill="#FF6B5B">
                <circle cx="400" cy="70"  r="5" />
                <circle cx="626" cy="108" r="5" />
                <circle cx="720" cy="200" r="5" />
                <circle cx="626" cy="292" r="5" />
                <circle cx="400" cy="330" r="5" />
                <circle cx="174" cy="292" r="5" />
                <circle cx="80"  cy="200" r="5" />
                <circle cx="174" cy="108" r="5" />
              </g>

              {/* Symptom labels */}
              <g className="orbit-labels" fill="rgba(230,235,255,0.9)"
                 fontFamily="Inter, system-ui, sans-serif" fontSize="14">
                <text x="400" y="52"  textAnchor="middle">Creative fatigue blind spot</text>
                <text x="630" y="90"  textAnchor="middle">MMM 98 days late</text>
                <text x="734" y="195" textAnchor="start">Walled-garden silos</text>
                <text x="630" y="314" textAnchor="middle">Last-touch bias</text>
                <text x="400" y="356" textAnchor="middle">Memory walks with the VP</text>
                <text x="170" y="314" textAnchor="middle">Audiences fragmenting</text>
                <text x="66"  y="195" textAnchor="end">Attribution 3× inflated</text>
                <text x="170" y="90"  textAnchor="middle">iOS / cookie signal loss</text>
              </g>
            </svg>
          </div>

          <p className="orbit-headline">
            MemoLogs fixes all — by measuring <em>true causality</em> across every campaign, and locking every lesson into a <em>memory the next one inherits</em>.
          </p>

          <p className="orbit-sub">
            Your stack measures <em>clicks</em> and <em>last-touch</em>, not <em>causality</em> and <em>memory</em>.
          </p>
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
              <h3>A multi-brand watch retailer hit 4.9× ROAS (1.6× lift) and 40% YoY revenue growth.</h3>
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(238px, 1fr))", gap: 18, marginTop: 8 }}>
            {[
              {
                cat: "Attribution & analytics platforms",
                buy: "Shopped when “attribution is broken.”",
                gives: ["Every channel’s numbers in one real-time dashboard", "MTA, pixels, and first-party tracking"],
                leaves: ["It’s still platform self-attribution — the same inflated signal, now aggregated", "No causal truth, and no memory of what actually worked"],
              },
              {
                cat: "Incrementality & experiment tools",
                buy: "Shopped when “we need a real lift number.”",
                gives: ["Clean holdouts and geo-tests", "A trustworthy read on a single test"],
                leaves: ["The test is a one-time readout", "Nothing turns it into next quarter’s plan, or feeds creative, audience, and memory"],
              },
              {
                cat: "Media-mix models & planning",
                buy: "Shopped when “we need to plan the budget.”",
                gives: ["Forecasting and cross-channel allocation", "A board-level view of where spend goes"],
                leaves: ["Fit on historical correlation and calibrated by occasional tests — so it can confidently mislead", "No trust state that refuses a plan it can’t defend; disconnected from the rest of the stack"],
              },
              {
                cat: "Consultants & agencies",
                buy: "Shopped when “we need senior brains on it.”",
                gives: ["A bespoke study and a strategy deck", "Experienced human judgment"],
                leaves: ["Slow and point-in-time — 30+ days per study, not always-on", "The learning walks out the door with the deck"],
              },
            ].map((c) => (
              <div key={c.cat} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "22px 22px 24px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#FBFBFD", margin: "0 0 4px", letterSpacing: "-0.01em" }}>{c.cat}</h3>
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.42)", margin: "0 0 18px" }}>{c.buy}</p>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 9 }}>What you get</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px" }}>
                  {c.gives.map((g, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13.5, lineHeight: 1.5, color: "rgba(255,255,255,0.74)", marginBottom: 7 }}>
                      <span aria-hidden="true" style={{ color: "#00FFC2", flexShrink: 0, marginTop: 1 }}>✓</span><span>{g}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFB347", marginBottom: 9 }}>What it leaves on the table</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {c.leaves.map((l, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 13.5, lineHeight: 1.5, color: "rgba(255,255,255,0.74)", marginBottom: 7 }}>
                      <span aria-hidden="true" style={{ color: "#FFB347", flexShrink: 0, marginTop: 1 }}>—</span><span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18, background: "linear-gradient(180deg, rgba(0,255,194,0.09), rgba(0,255,194,0.02))", border: "1px solid rgba(0,255,194,0.32)", borderRadius: 18, padding: "30px 30px 30px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00FFC2", marginBottom: 10 }}>Where MemoLogs starts</div>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "#FBFBFD", margin: "0 0 24px", maxWidth: 780, letterSpacing: "-0.01em" }}>Every category above answers one question and stops. MemoLogs is the layer underneath — one causal system where measurement, creative, audience, memory, and the budget plan compound.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(258px, 1fr))", gap: 20 }}>
              {[
                { h: "Causal truth, not platform credit", b: "Three independent causal models — GeoTwin, CausalCore, and DiffLens — reconciled into a trust state on every verdict, plus a per-channel Attribution Inflation Factor that shows exactly how much each platform over-claims versus the measured truth." },
                { h: "A plan gated to what it can defend", b: "An experiment-anchored causal MMM — your live geo-tests are its backbone, not a periodic calibration — allocates the next dollar across channels and forecasts the lift. Every plan carries a trust state, so it surfaces a recommendation only when it’s trustworthy, and shows your measured history when it isn’t." },
                { h: "Down to the SKU and the sales channel", b: "It controls for a SKU-level, mix-adjusted price index (not blended AOV) and promo — and answers “what did Meta drive on Amazon?” for the sales channels you connect." },
                { h: "It compounds", b: "Every decision and its measured outcome is remembered, so Memory IQ can warn you before you repeat a trusted failure — and a grounded Co-Pilot answers all of it with the source records attached." },
              ].map((f) => (
                <div key={f.h}>
                  <div style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 6 }}>
                    <span aria-hidden="true" style={{ color: "#00FFC2", fontWeight: 700, flexShrink: 0 }}>→</span>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: "#FBFBFD", margin: 0 }}>{f.h}</h4>
                  </div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,0.66)", margin: 0, paddingLeft: 18 }}>{f.b}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(0,255,194,0.18)", display: "flex", flexWrap: "wrap", gap: "6px 18px", fontSize: 13, color: "rgba(255,255,255,0.72)" }}>
              <span>Flat fee — never a % of spend</span><span aria-hidden="true" style={{ color: "rgba(0,255,194,0.5)" }}>·</span>
              <span>First causal verdict in week 5</span><span aria-hidden="true" style={{ color: "rgba(0,255,194,0.5)" }}>·</span>
              <span>Sits alongside your existing stack</span>
            </div>
          </div>

          <div className="land-close" aria-label="Other tools answer one question and stop. MemoLogs closes the loop: measure causal truth, remember every decision, and plan the next dollar from it, gated so it only recommends what it can defend.">
            <span className="land-close-line land-close-line-1">Other tools answer <em> one </em> question and stop.</span>
            <span className="land-close-line land-close-line-2">MemoLogs closes the loop — measure causal truth, remember every decision, and plan the next dollar from it.</span>
            <span className="land-close-line land-close-line-3">Gated, so it only ever recommends what it can defend.</span>
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

                  <p><b>Your data stays yours.</b>No re-sold signals.</p>
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