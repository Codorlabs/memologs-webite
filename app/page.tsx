import HeroCarousel from "@/components/HeroCarousel";
import PillarTabs from "@/components/PillarTabs";
import InflationCalculator from "@/components/InflationCalculator";
import ContactForm from "@/components/ContactForm";
import PilotCTA from "@/components/PilotCTA";
import HomeTimelineScroll from "@/components/HomeTimelineScroll";
import Link from "next/link";

export default function Home() {
  const CMP: Array<{ g?: string; cap?: string; sub?: string; plain?: boolean; a?: string; b?: string; c?: string; m?: string; adim?: boolean; bdim?: boolean; cdim?: boolean }> = [
    { g: "The truth layer" },
    { cap: "Causal measurement", sub: "Is the “what worked” causal, or self-reported?", a: "Self-attributed — structurally inflated", adim: true, b: "Real, but a periodic point-in-time read", c: "Bespoke, manual, slow to run", m: "Always-on tri-model consensus (GeoTwin · CausalCore · DiffLens) + trust state" },
    { cap: "Attribution inflation, exposed", sub: "How much each platform over-claims", a: "It is the inflation", adim: true, b: "Partial — “incrementality factors”", c: "Not measured", cdim: true, m: "Per-channel AIF — claimed vs. measured lift, auto-populated" },
    { cap: "Cross-metric halo", sub: "Effect on branded search, organic, and more", a: "Rarely", adim: true, b: "Rare", bdim: true, c: "Rarely", cdim: true, m: "Measures a channel’s downstream lift on other metrics" },
    { g: "Planning the next dollar" },
    { cap: "Media-mix model", sub: "The engine behind the plan", a: "Some — correlational", b: "Core — fit on historical correlation", c: "Periodic planning models", m: "Experiment-anchored — your live geo-tests are its backbone" },
    { cap: "Cross-channel allocation + forecast", sub: "Split the next budget, project the lift", a: "Some", b: "Yes — allocated off the model", c: "Manual, in a deck", m: "Allocates from measured curves + forecasts the reallocation" },
    { cap: "Reliability gate on the plan", sub: "Does it refuse when it can’t be trusted?", a: "Not offered", adim: true, b: "Rare", bdim: true, c: "Not offered", cdim: true, m: "Trust state on every plan — shows measured history when it can’t defend one" },
    { g: "Acting on it" },
    { cap: "Creative intelligence", sub: "Fatigue, refresh, asset-level health", a: "Basic tagging", b: "Not offered", bdim: true, c: "Not offered", cdim: true, m: "9-signal fatigue scoring + refresh recommendations" },
    { cap: "Audience activation", sub: "From measurement to live segments", a: "Lookalikes only", b: "Limited / partner-led", c: "Not offered", cdim: true, m: "4 causal-LTV agents, per-platform sync — no identity graph" },
    { g: "Compounding what you learn" },
    { cap: "Decision memory", sub: "Do learnings survive the readout?", a: "A dashboard, not a memory", adim: true, b: "A readout, then gone", bdim: true, c: "Leaves with the deck", cdim: true, m: "Memory IQ — warns before you repeat a trusted failure" },
    { cap: "SKU & sales-channel truth", sub: "“What did Meta drive on Amazon?”", a: "Channel-blind", adim: true, b: "Channel-blind", bdim: true, c: "Not modeled", cdim: true, m: "SKU price index + marketing→sales-channel*" },
    { g: "How you work with it" },
    { cap: "Grounded AI Co-Pilot", sub: "Answers you can trust and cite", a: "AI dashboards", b: "Some AI narration", c: "Not offered", cdim: true, m: "Source-cited answers — declines when the data can’t support them" },
    { cap: "Time to first causal verdict", plain: true, a: "Real-time (but inflated)", b: "6–12 weeks", c: "30+ days", m: "Under 5 weeks" },
    { cap: "Pricing model", plain: true, a: "% of ad spend", b: "Seats + custom", c: "Retainer", m: "Flat fee — never a % of spend" },
  ];
  return (
    <>
      <HomeTimelineScroll />
      {/* ═══════════ HERO ═══════════ */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-lead">
              <span className="hp-kicker" style={{ display: "inline-block", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00FFC2", marginBottom: 18 }}>Defining a new category</span>
              <h1 className="display hero-display" id="hero-h1">
                The Marketing<br />Decision Platform.
              </h1>
              <p className="hero-tagline">
                The only one with <em>a memory.</em>
              </p>
              <p className="lede">
                Causal measurement, creative AI, audience activation, an experiment-anchored budget planner, and a decision memory — all on one signal graph, all grounded in causal proof. We don&apos;t just store your data; we store the <em>decisions behind it.</em>
              </p>
              <div className="cta-row">
                <PilotCTA className="btn btn-primary btn-lg hide-mobile">Start a 90-day pilot</PilotCTA>
                <a href="#calculator" className="btn btn-ghost btn-lg">See your inflation factor →</a>
              </div>
              <div className="hero-micro hero-micro-imperatives">
                <span><b>Prove</b> what worked.</span>
                <span className="sep">·</span>
                <span><b>Kill</b> what didn&apos;t.</span>
                <span className="sep">·</span>
                <span><b>Compound</b> the rest.</span>
              </div>
            </div>
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* ═══════════ DIAGNOSTIC / PROBLEM ═══════════ */}
      <section className="diag">
        <div className="wrap">
          <div className="section-head">
            <span className="hp-kicker" style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00FFC2", marginBottom: 14 }}>The problem</span>
            <h2 className="section-title">Your stack measures.<br />It doesn&apos;t <em>decide.</em></h2>
            <p className="section-sub">Marketing teams have more data than ever — and less memory of what to do with it. Four expensive things go wrong under the hood, and the same lessons get re-learned every quarter at full cost.</p>
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
        </div>
      </section>

      {/* ═══════════ DIAGNOSTIC / ORBIT ═══════════ */}
      <section className="diag-orbit">
        <div className="wrap">
          <div className="mb-head">
            <h2 className="mb-title">One root cause.</h2>
            <p className="section-sub" style={{ margin: "12px auto 0", maxWidth: 560 }}>Every symptom traces back to the same gap — your tools <em>measure</em>, but nothing <em>decides</em>, and nothing remembers what happened last time.</p>
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
            <span className="hp-kicker" style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00FFC2", marginBottom: 14 }}>The platform</span>
            <h2 className="section-title">Five IQ products.<br />One signal graph. <em>One memory.</em></h2>
            <p className="section-sub">Each product is a serious system on its own. The signal graph and Memory IQ underneath make them compound — every decision your team makes feeds the next one.</p>
          </div>
          <PillarTabs />
        </div>
      </section>

      {/* ═══════════ CALCULATOR ═══════════ */}
      <section id="calculator" className="calc">
        <div className="wrap">
          <div className="section-head">
            <span className="hp-kicker" style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00FFC2", marginBottom: 14 }}>See it on your numbers</span>
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
            <span className="hp-kicker" style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00FFC2", marginBottom: 14 }}>Proof</span>
            <h2 className="section-title">Measured causally.<br />Not platform-reported.</h2>
            <p className="section-sub">Three anonymized engagements — the before, the test, and the after. Where a causal read applies, the numbers are what the incrementality models saw, not what the platform claimed.</p>
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
            <span className="hp-kicker" style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00FFC2", marginBottom: 14 }}>The category</span>
            <h2 className="section-title">Not attribution. Not MMM.<br />Not a dashboard.</h2>
            <p className="section-sub">Each category a CMO shops solves one slice — measurement, or planning, or reporting. Here&apos;s what each does well, where it stops, and what only a connected <em>decision platform</em> does.</p>
          </div>

          <div className="ctbl-shell">
            <style>{`
              .ctbl-shell{margin-top:20px}
              .cmp-ic{width:16px;height:16px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:9.5px;font-weight:800;flex:0 0 16px;line-height:1}
              .cmp-ic.full{background:#00FFC2;color:#052018}
              .cmp-ic.part{background:conic-gradient(#FFB347 0 50%,transparent 50%);border:1px solid rgba(255,179,71,0.6)}
              .cmp-ic.none{border:1px solid rgba(255,255,255,0.22)}

              .ctbl-wrap{display:none;border:1px solid rgba(255,255,255,0.09);border-radius:16px;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))}
              .ctbl{width:100%;border-collapse:separate;border-spacing:0;font-size:13px;table-layout:fixed}
              .ctbl th,.ctbl td{padding:14px 16px;text-align:left;vertical-align:top;overflow-wrap:anywhere}
              .ctbl thead th{position:sticky;top:64px;z-index:20;background:#0c1322;vertical-align:bottom;border-bottom:1px solid rgba(255,255,255,0.14)}
              .ctbl thead .h-name{display:block;font-size:12px;font-weight:700;color:rgba(255,255,255,0.85);line-height:1.25}
              .ctbl thead .h-arch{display:block;margin-top:5px;font-size:9px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,0.36)}
              .ctbl thead th.ct-cap{border-top-left-radius:16px}
              .ctbl thead th.ct-cap .h-name{color:rgba(255,255,255,0.42);font-weight:700;font-size:10px;letter-spacing:.09em;text-transform:uppercase}
              .ctbl td.ct-cap{border-right:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.05)}
              .ctbl td.ct-cap b{display:block;color:#FBFBFD;font-weight:600;font-size:13px;line-height:1.3}
              .ctbl td.ct-cap span{display:block;margin-top:3px;font-size:10.5px;color:rgba(255,255,255,0.44);line-height:1.35}
              .ctbl td.ct-comp{color:rgba(255,255,255,0.64);line-height:1.45;border-bottom:1px solid rgba(255,255,255,0.05)}
              .ctbl td.ct-comp.dim{color:rgba(255,255,255,0.32)}
              .ctbl td .cell{display:flex;gap:9px;align-items:flex-start}
              .ctbl td .cell .cmp-ic{margin-top:1px}
              .ctbl .ct-memo{background:rgba(0,255,194,0.07);border-left:1px solid rgba(0,255,194,0.28);border-right:1px solid rgba(0,255,194,0.28)}
              .ctbl thead th.ct-memo{background:linear-gradient(180deg,#00FFC2,#04e0ac);border-top-left-radius:13px;border-top-right-radius:16px;border-bottom:none}
              .ctbl thead th.ct-memo .h-name{color:#052018;font-weight:800;font-size:13.5px}
              .ctbl thead th.ct-memo .h-arch{color:rgba(5,32,24,0.65)}
              .ctbl td.ct-memo{color:#EAFFF9;font-weight:500;line-height:1.45;border-bottom:1px solid rgba(0,255,194,0.14)}
              .ctbl td.ct-memo b.m-plain{font-weight:700;color:#fff}
              .ctbl tbody tr:last-child td.ct-memo{border-bottom-right-radius:16px}
              .ctbl tbody tr:last-child td.ct-cap{border-bottom-left-radius:16px}
              .ctbl tr.ct-group td{background:rgba(255,255,255,0.025);padding:12px 16px 9px;border-bottom:1px solid rgba(255,255,255,0.06)}
              .ctbl tr.ct-group td.ct-memo{background:rgba(0,255,194,0.1)}
              .ctbl tr.ct-group .gk{display:inline-flex;align-items:center;gap:9px;font-size:10px;font-weight:800;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,0.62)}
              .ctbl tr.ct-group .gk:before{content:"";width:15px;height:2px;border-radius:2px;background:#00FFC2}
              .ctbl tbody tr.ct-row:hover td{background:rgba(255,255,255,0.04)}
              .ctbl tbody tr.ct-row:hover td.ct-memo{background:rgba(0,255,194,0.12)}

              .cmp-scroll{margin-top:16px;overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid rgba(255,255,255,0.09);border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))}
              .cmp-mtbl{border-collapse:separate;border-spacing:0;width:max-content;min-width:100%}
              .cmp-mtbl th,.cmp-mtbl td{border-bottom:1px solid rgba(255,255,255,0.06)}
              .cmp-mtbl tbody tr:last-child th,.cmp-mtbl tbody tr:last-child td{border-bottom:none}
              .cmp-corner,.cmp-tool{position:sticky;left:0;z-index:3;background:#0c1322;text-align:left;min-width:134px;max-width:134px;padding:11px 12px;border-right:1px solid rgba(255,255,255,0.11)}
              .cmp-corner{z-index:4;vertical-align:bottom;border-bottom:1px solid rgba(255,255,255,0.14)}
              .cmp-swipe{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,0.4)}
              .cmp-tool b{display:block;font-size:12px;font-weight:700;color:#FBFBFD;line-height:1.25}
              .cmp-tool span{display:block;margin-top:2px;font-size:8.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,0.34)}
              .cmp-feat{min-width:104px;max-width:104px;padding:11px 9px;vertical-align:bottom;text-align:center;font-size:10.5px;font-weight:600;color:rgba(255,255,255,0.74);line-height:1.28;background:#0c1322;border-bottom:1px solid rgba(255,255,255,0.14)}
              .cmp-cell{min-width:104px;max-width:104px;padding:13px 9px;text-align:center;vertical-align:middle}
              .cmp-cell .cmp-ic{width:19px;height:19px;flex-basis:19px;font-size:11px}
              .cmp-txt{font-size:11px;line-height:1.35;color:rgba(255,255,255,0.62)}
              .cmp-mrow.is-memo th.cmp-tool{background:linear-gradient(180deg,#00FFC2,#04e0ac);border-right-color:rgba(0,255,194,0.4)}
              .cmp-mrow.is-memo th.cmp-tool b{color:#052018;font-weight:800}
              .cmp-mrow.is-memo th.cmp-tool span{color:rgba(5,32,24,0.66)}
              .cmp-mrow.is-memo td.cmp-cell{background:rgba(0,255,194,0.06)}
              .cmp-mrow.is-memo td.cmp-cell .cmp-txt{color:#EAFFF9;font-weight:600}

              .ctbl-legend{display:flex;flex-wrap:wrap;gap:8px 18px;margin:16px 4px 0;font-size:11.5px;color:rgba(255,255,255,0.52)}
              .ctbl-legend span{display:inline-flex;align-items:center;gap:8px}
              .ctbl-foot{margin:9px 4px 0;font-size:11px;color:rgba(255,255,255,0.38);line-height:1.5}
              @media(min-width:900px){.ctbl-wrap{display:block}.cmp-scroll{display:none}}
            `}</style>

            <div className="ctbl-wrap">
              <table className="ctbl">
                <colgroup><col style={{ width: "234px" }} /><col /><col /><col /><col /></colgroup>
                <thead>
                  <tr>
                    <th className="ct-cap" scope="col"><span className="h-name">Capability</span></th>
                    <th scope="col"><span className="h-name">Attribution &amp; analytics</span><span className="h-arch">The dashboards</span></th>
                    <th scope="col"><span className="h-name">Incrementality &amp; MMM</span><span className="h-arch">The measurers</span></th>
                    <th scope="col"><span className="h-name">Consultants &amp; agencies</span><span className="h-arch">The studies</span></th>
                    <th className="ct-memo" scope="col"><span className="h-name">★ MemoLogs</span><span className="h-arch">The system</span></th>
                  </tr>
                </thead>
                <tbody>
                  {CMP.map((r) =>
                    r.g ? (
                      <tr className="ct-group" key={"g-" + r.g}>
                        <td className="ct-cap"><span className="gk">{r.g}</span></td>
                        <td colSpan={3}></td>
                        <td className="ct-memo"></td>
                      </tr>
                    ) : (
                      <tr className="ct-row" key={"r-" + r.cap}>
                        <td className="ct-cap"><b>{r.cap}</b>{r.sub ? <span>{r.sub}</span> : null}</td>
                        {([["a", r.adim], ["b", r.bdim], ["c", r.cdim]] as Array<["a" | "b" | "c", boolean | undefined]>).map(([k, dim]) => (
                          <td className={"ct-comp" + (dim ? " dim" : "")} key={k}>
                            {r.plain ? r[k] : (
                              <span className="cell"><span className={"cmp-ic " + (dim ? "none" : "part")}></span><span>{r[k]}</span></span>
                            )}
                          </td>
                        ))}
                        <td className="ct-memo">
                          {r.plain ? <b className="m-plain">{r.m}</b> : (
                            <span className="cell"><span className="cmp-ic full">✓</span><span>{r.m}</span></span>
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div className="cmp-scroll" role="region" aria-label="Competitive comparison — swipe horizontally to see every capability">
              <table className="cmp-mtbl">
                <thead>
                  <tr>
                    <th className="cmp-corner" scope="col"><span className="cmp-swipe">Swipe&nbsp;→</span></th>
                    {CMP.filter((r) => !r.g).map((r) => (
                      <th className="cmp-feat" key={"mh-" + r.cap} scope="col">{r.cap}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    { key: "a", name: "Attribution & analytics", arch: "The dashboards" },
                    { key: "b", name: "Incrementality & MMM", arch: "The measurers" },
                    { key: "c", name: "Consultants & agencies", arch: "The studies" },
                    { key: "m", name: "★ MemoLogs", arch: "The system", memo: true },
                  ] as Array<{ key: "a" | "b" | "c" | "m"; name: string; arch: string; memo?: boolean }>).map((tool) => (
                    <tr className={tool.memo ? "cmp-mrow is-memo" : "cmp-mrow"} key={"mr-" + tool.key}>
                      <th className="cmp-tool" scope="row"><b>{tool.name}</b><span>{tool.arch}</span></th>
                      {CMP.filter((r) => !r.g).map((r) => {
                        const memo = tool.key === "m";
                        const val = tool.key === "a" ? r.a : tool.key === "b" ? r.b : tool.key === "c" ? r.c : r.m;
                        const dim = tool.key === "a" ? r.adim : tool.key === "b" ? r.bdim : tool.key === "c" ? r.cdim : false;
                        return (
                          <td className={"cmp-cell" + (memo ? " memo" : "")} key={"mc-" + tool.key + "-" + r.cap}>
                            {r.plain ? (
                              <span className="cmp-txt">{val}</span>
                            ) : (
                              <span className={"cmp-ic " + (memo ? "full" : dim ? "none" : "part")}>{memo ? "✓" : ""}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ctbl-legend">
              <span><span className="cmp-ic full">✓</span> Built for it</span>
              <span><span className="cmp-ic part"></span> Partial / with caveats</span>
              <span><span className="cmp-ic none"></span> Not really</span>
            </div>
            <p className="ctbl-foot">* Marketing→sales-channel answers cover the sales channels you connect (your own store today; marketplaces as you add them).</p>

            <div className="land-close" aria-label="Every category to the left solves one slice. MemoLogs is the one system where measurement, planning, activation, and memory connect, so the next decision is always smarter than the last.">
              <span className="land-close-line land-close-line-1">Every category to the left solves <em> one </em> slice.</span>
              <span className="land-close-line land-close-line-2">MemoLogs is the one system where measurement, planning, activation, and memory connect —</span>
              <span className="land-close-line land-close-line-3">so the next decision is always smarter than the last.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW / IMPLEMENTATION ═══════════ */}
      <section className="implement">
        <div className="wrap">
          <div className="section-head">
            <span className="hp-kicker" style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00FFC2", marginBottom: 14 }}>The rollout</span>
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
                Want to know what<br />
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

      {/* ═══════════ MOBILE STICKY CTA ═══════════ */}
      <div className="mobile-cta-bar">
        <PilotCTA
          className="btn btn-primary mobile-cta-btn"
          modalTitle="Schedule a call"
          modalSubtitle="Tell us about your account. We'll reach out within one business day to schedule your call."
        >
          Schedule Call
        </PilotCTA>
      </div>
    </>
  );
}