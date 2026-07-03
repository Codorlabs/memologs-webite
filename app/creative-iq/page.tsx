import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";
import ReadinessRing from "@/components/ReadinessRing";
import CarouselDots from "@/components/CarouselDots";

export const metadata: Metadata = {
  title: "Creative IQ — Closed-loop creative decision OS | MemoLogs",
  description:
    "Creative IQ is the decision OS for paid social creative. A 9-signal Andromeda fatigue model, a Diversity Gap Map, and an AI Top Brief generator — every decision logged, every outcome measured.",
  keywords:
    "creative decision OS, ad fatigue, Andromeda Readiness Score, diversity gap map, AI creative brief, Meta ads, MemoLogs",
};

export default function CreativeIQPage() {
  return (
    <div className="cq-iq-page">
      {/* ═══════════════════ HERO — 1a "Bone & Ink" cream, color-block creative ═══════════════════ */}
      <section className="cq-hero-1a" aria-labelledby="cq-h1" style={{ background: "#F5F4EF", color: "#16181C" }}>
        <div className="cq-hero-aurora" aria-hidden="true"></div>
        <div className="cq-hero-1a-inner" style={{ maxWidth: 1440, margin: "0 auto", padding: "72px 56px 96px" }}>
          <div style={{ fontSize: 13, color: "#8A8D93", marginBottom: 28 }}>
            <Link href="/" style={{ color: "#0B7B5A", fontWeight: 500 }}>Platform</Link> › Creative IQ
          </div>

          <div className="cq-hero-1a-grid" style={{ display: "grid", gridTemplateColumns: "1fr 620px", gap: 64, alignItems: "center" }}>
            <div className="cq-hero-lead">
              <span className="cq-hero-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #E0DDD2", background: "#FFFFFF", borderRadius: 999, padding: "7px 14px", fontSize: 12.5, fontWeight: 600, color: "#43464C" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0B7B5A" }}></span>Creative decision OS
              </span>
              <h1 id="cq-h1" style={{ margin: "22px 0 0", fontSize: 60, lineHeight: 1.04, fontWeight: 650, letterSpacing: "-0.035em" }}>
                Every creative decision, <span style={{ color: "#0B7B5A" }}>closed-loop</span>.
              </h1>

              {/* Mobile-only animated closed-loop engine */}
              <div className="cq-hero-engine" aria-hidden="true">
                <svg viewBox="0 0 300 232" className="cq-eng-svg" fill="none">
                  <defs>
                    <radialGradient id="cqEngCore" cx="38%" cy="30%" r="72%">
                      <stop offset="0%" stopColor="#CFFFEF" />
                      <stop offset="42%" stopColor="#1BAE82" />
                      <stop offset="100%" stopColor="#064A34" />
                    </radialGradient>
                    <radialGradient id="cqEngNode" cx="38%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#EEECE4" />
                    </radialGradient>
                    <linearGradient id="cqEngPill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F3F2EC" />
                    </linearGradient>
                    <filter id="cqEngShadow" x="-40%" y="-40%" width="180%" height="200%">
                      <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#16181C" floodOpacity="0.18" />
                    </filter>
                    <filter id="cqEngGlow" x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur stdDeviation="5" />
                    </filter>
                    <filter id="cqEngSoft" x="-60%" y="-60%" width="220%" height="220%">
                      <feGaussianBlur stdDeviation="1.6" />
                    </filter>
                  </defs>

                  {/* closed-loop feedback arc (results feed back) */}
                  <path className="cq-eng-orbit" d="M280 168 C 250 224 66 224 34 178" stroke="rgba(11,123,90,0.28)" strokeWidth="1.3" strokeDasharray="3 7" strokeLinecap="round" />
                  <path d="M34 178 l6 1 l-3 5" stroke="rgba(11,123,90,0.5)" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* flow lines */}
                  <g className="cq-eng-lines" strokeLinecap="round">
                    <path className="cq-eng-flow" d="M38 58 L140 112" stroke="#B9C0BB" strokeWidth="1.3" />
                    <path className="cq-eng-flow" d="M28 112 L140 112" stroke="#B9C0BB" strokeWidth="1.3" />
                    <path className="cq-eng-flow" d="M38 166 L140 112" stroke="#B9C0BB" strokeWidth="1.3" />
                    <path className="cq-eng-flow out" d="M166 108 L190 56" stroke="#E0AE9E" strokeWidth="1.3" />
                    <path className="cq-eng-flow out" d="M168 111 L190 90" stroke="#9EC7B5" strokeWidth="1.3" />
                    <path className="cq-eng-flow out" d="M168 114 L190 124" stroke="#A9BBD6" strokeWidth="1.3" />
                    <path className="cq-eng-flow out" d="M166 117 L190 158" stroke="#C3B7E4" strokeWidth="1.3" />
                  </g>

                  {/* traveling signals */}
                  <g>
                    <circle r="2.6" fill="#17A87E"><animateMotion dur="1.6s" begin="0s" repeatCount="indefinite" path="M38 58 L140 112" /></circle>
                    <circle r="2.6" fill="#17A87E"><animateMotion dur="1.6s" begin="0.55s" repeatCount="indefinite" path="M28 112 L140 112" /></circle>
                    <circle r="2.6" fill="#17A87E"><animateMotion dur="1.6s" begin="1.1s" repeatCount="indefinite" path="M38 166 L140 112" /></circle>
                    <circle r="2.6" fill="#E0653F"><animateMotion dur="1.3s" begin="0.3s" repeatCount="indefinite" path="M166 108 L190 56" /></circle>
                    <circle r="2.6" fill="#0B7B5A"><animateMotion dur="1.3s" begin="0.6s" repeatCount="indefinite" path="M168 111 L190 90" /></circle>
                    <circle r="2.6" fill="#4A6FA5"><animateMotion dur="1.3s" begin="0.9s" repeatCount="indefinite" path="M168 114 L190 124" /></circle>
                    <circle r="2.6" fill="#7A5FC0"><animateMotion dur="1.3s" begin="1.2s" repeatCount="indefinite" path="M166 117 L190 158" /></circle>
                  </g>

                  {/* input source nodes */}
                  <g fontFamily="Inter, sans-serif">
                    <g transform="translate(38 58)">
                      <circle r="15" fill="url(#cqEngNode)" stroke="#E2E0D8" filter="url(#cqEngShadow)" />
                      <g stroke="#0B7B5A" strokeWidth="1.5" fill="none" strokeLinecap="round"><rect x="-6" y="-5" width="6" height="9" rx="1" /><rect x="1" y="-2" width="6" height="9" rx="1" /></g>
                    </g>
                    <g transform="translate(28 112)">
                      <circle r="15" fill="url(#cqEngNode)" stroke="#E2E0D8" filter="url(#cqEngShadow)" />
                      <path d="M-7 4 L-2 -1 L1 2 L7 -5 M4 -5 L7 -5 L7 -2" stroke="#0B7B5A" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <g transform="translate(38 166)">
                      <circle r="15" fill="url(#cqEngNode)" stroke="#E2E0D8" filter="url(#cqEngShadow)" />
                      <g stroke="#0B7B5A" strokeWidth="1.5" fill="none" strokeLinecap="round"><circle cx="0" cy="0" r="6" /><path d="M0 -3 L0 0 L2.5 1.5" /></g>
                    </g>
                    <g fill="#8A8D93" fontSize="8.5" textAnchor="middle" letterSpacing="0.3">
                      <text x="38" y="82">Competition</text>
                      <text x="28" y="137">Trends</text>
                      <text x="38" y="190">History</text>
                    </g>
                  </g>

                  {/* output pills */}
                  <g fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="600">
                    <g className="cq-eng-out" style={{ animationDelay: "0s" }}>
                      <rect x="190" y="44" width="104" height="24" rx="12" fill="url(#cqEngPill)" stroke="#E5E2D8" filter="url(#cqEngShadow)" />
                      <circle cx="204" cy="56" r="3.4" fill="#E0653F" />
                      <text x="215" y="59.5" fill="#16181C">Detect fatigue</text>
                    </g>
                    <g className="cq-eng-out" style={{ animationDelay: "0.4s" }}>
                      <rect x="190" y="78" width="104" height="24" rx="12" fill="url(#cqEngPill)" stroke="#E5E2D8" filter="url(#cqEngShadow)" />
                      <circle cx="204" cy="90" r="3.4" fill="#0B7B5A" />
                      <text x="215" y="93.5" fill="#16181C">Performance</text>
                    </g>
                    <g className="cq-eng-out" style={{ animationDelay: "0.8s" }}>
                      <rect x="190" y="112" width="104" height="24" rx="12" fill="url(#cqEngPill)" stroke="#E5E2D8" filter="url(#cqEngShadow)" />
                      <circle cx="204" cy="124" r="3.4" fill="#4A6FA5" />
                      <text x="215" y="127.5" fill="#16181C">A/B tests</text>
                    </g>
                    <g className="cq-eng-out" style={{ animationDelay: "1.2s" }}>
                      <rect x="190" y="146" width="104" height="24" rx="12" fill="url(#cqEngPill)" stroke="#E5E2D8" filter="url(#cqEngShadow)" />
                      <circle cx="204" cy="158" r="3.4" fill="#7A5FC0" />
                      <text x="215" y="161.5" fill="#16181C">AI briefs</text>
                    </g>
                  </g>

                  {/* engine core — glossy 3D orb */}
                  <ellipse cx="140" cy="146" rx="22" ry="5" fill="#064A34" opacity="0.18" filter="url(#cqEngGlow)" />
                  <circle className="cq-eng-core-glow" cx="140" cy="112" r="33" fill="#25C596" filter="url(#cqEngGlow)" />
                  <circle cx="140" cy="112" r="28" fill="url(#cqEngCore)" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
                  <ellipse cx="131" cy="101" rx="9" ry="5.5" fill="#FFFFFF" opacity="0.55" filter="url(#cqEngSoft)" />
                  <path d="M140 96 L143.8 106.2 L154 110 L143.8 113.8 L140 124 L136.2 113.8 L126 110 L136.2 106.2 Z" fill="#FFFFFF" />
                </svg>
              </div>

              <p className="cq-hero-sub" style={{ margin: "22px 0 0", fontSize: 18, lineHeight: 1.6, color: "#5F6368", maxWidth: 540 }}>
                We don&apos;t generate ads. We close the loop on the ones you&apos;re already running — spotting fatigue before your CPA does, surfacing the audience gaps you never enter, and turning every signal into your next brief.
              </p>
              <p className="cq-hero-sub-short">We close the loop on the ads you&apos;re already running — spotting fatigue before your CPA does, and turning every signal into your next brief.</p>

              <div className="cq-hero-features" style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 30 }}>
                <div className="cq-hero-feat" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: 10, background: "#FFFFFF", border: "1px solid #E5E2D8", alignItems: "center", justifyContent: "center", color: "#0B7B5A" }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v4l2.5 2"></path></svg>
                  </span>
                  <span style={{ fontSize: 15 }}><b style={{ fontWeight: 600 }}>Detect fatigue</b><span style={{ color: "#8A8D93" }}> — 9-signal model, day-precise runway</span></span>
                </div>
                <div className="cq-hero-feat" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: 10, background: "#FFFFFF", border: "1px solid #E5E2D8", alignItems: "center", justifyContent: "center", color: "#0B7B5A" }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1" strokeDasharray="2 2"></rect></svg>
                  </span>
                  <span style={{ fontSize: 15 }}><b style={{ fontWeight: 600 }}>Find gaps</b><span style={{ color: "#8A8D93" }}> — audience × angle × format map</span></span>
                </div>
                <div className="cq-hero-feat" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: 10, background: "#FFFFFF", border: "1px solid #E5E2D8", alignItems: "center", justifyContent: "center", color: "#0B7B5A" }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 4l1.8 4.4L18 10l-4.2 1.6L12 16l-1.8-4.4L6 10l4.2-1.6z"></path></svg>
                  </span>
                  <span style={{ fontSize: 15 }}><b style={{ fontWeight: 600 }}>Compose briefs</b><span style={{ color: "#8A8D93" }}> — AI-fused, production-ready</span></span>
                </div>
              </div>

              <div className="cq-hero-1a-cta" style={{ display: "flex", gap: 14, marginTop: 36 }}>
                <a href="https://app.memologs.com/" className="cq-hero-1a-cta-primary" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#16181C", color: "#FFFFFF", borderRadius: 999, padding: "15px 30px", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>Try Creative IQ →</a>
                <a href="#readiness" className="cq-hero-1a-cta-secondary" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF", border: "1px solid #DCD9CE", color: "#16181C", borderRadius: 999, padding: "15px 30px", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>See the Readiness Score</a>
              </div>
            </div>

            {/* Product frame */}
            <aside className="cq-hero-frame" style={{ background: "#FFFFFF", border: "1px solid #E5E2D8", borderRadius: 22, boxShadow: "0 24px 60px -28px rgba(22,24,28,0.18)", overflow: "hidden" }} aria-label="Creative IQ — Today decision queue">
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "13px 18px", borderBottom: "1px solid #EFEDE5" }}>
                <span style={{ display: "flex", gap: 6 }}><span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E4E1D7" }}></span><span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E4E1D7" }}></span><span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E4E1D7" }}></span></span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "#8A8D93" }}>Creative IQ · Today</span>
              </div>
              <div className="cq-hero-frame-body" style={{ padding: 18 }}>
                <div className="cq-hero-frame-ready" style={{ display: "flex", alignItems: "center", gap: 16, background: "#F8F7F3", border: "1px solid #EFEDE5", borderRadius: 14, padding: "14px 16px" }}>
                  <span style={{ position: "relative", width: 56, height: 56, flex: "none" }}>
                    <svg viewBox="0 0 100 100" width="56" height="56"><circle cx="50" cy="50" r="42" fill="none" stroke="#E9E7DE" strokeWidth="10"></circle><circle cx="50" cy="50" r="42" fill="none" stroke="#0B7B5A" strokeWidth="10" strokeDasharray="264" strokeDashoffset="100" strokeLinecap="round" transform="rotate(-90 50 50)"></circle></svg>
                    <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700 }}>62</span>
                  </span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8A8D93" }}>Andromeda Readiness</span>
                    <span style={{ display: "block", fontSize: 15, fontWeight: 650, marginTop: 2 }}>Watch · Aura Skin</span>
                    <span style={{ display: "block", fontSize: 12, color: "#8A8D93", marginTop: 1 }}>3 backed · 5 candidates · 14d window</span>
                  </span>
                  <span style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
                    <span style={{ width: 6, height: 16, borderRadius: 3, background: "#D9A441" }}></span>
                    <span style={{ width: 6, height: 14, borderRadius: 3, background: "#D9A441" }}></span>
                    <span style={{ width: 6, height: 20, borderRadius: 3, background: "#0B7B5A" }}></span>
                    <span style={{ width: 6, height: 10, borderRadius: 3, background: "#C4472E" }}></span>
                    <span style={{ width: 6, height: 18, borderRadius: 3, background: "#0B7B5A" }}></span>
                  </span>
                </div>

                <div className="cq-hero-when" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
                  <div className="cq-hero-when-pills" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span className="cq-hero-when-lab" style={{ fontSize: 11.5, fontWeight: 600, color: "#8A8D93" }}>WHEN</span>
                    <span className="cq-hero-when-pill" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#16181C", color: "#fff", borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3ECF9A" }}></span>Now · 2</span>
                    <span className="cq-hero-when-pill" style={{ display: "inline-flex", background: "#F1EFE8", color: "#5F6368", borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>Today · 3</span>
                    <span className="cq-hero-when-pill" style={{ display: "inline-flex", background: "#F1EFE8", color: "#5F6368", borderRadius: 999, padding: "6px 12px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>1–3d · 5</span>
                  </div>
                  <span className="cq-hero-when-brief" style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #0B7B5A", color: "#0B7B5A", borderRadius: 999, padding: "6px 14px", fontSize: 12.5, fontWeight: 650, whiteSpace: "nowrap" }}>✦ AI Brief</span>
                </div>

                <div className="cq-hero-frame-rows" style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, border: "1px solid #EFEDE5", borderRadius: 14, padding: "12px 14px" }}>
                    <span style={{ width: 52, height: 66, borderRadius: 10, background: "#E8734A", flex: "none", display: "flex", alignItems: "flex-end", padding: 6, boxSizing: "border-box" }}><span style={{ color: "#fff", fontSize: 8.5, fontWeight: 700, lineHeight: 1.2 }}>Quiet skin<br />Winter serum</span></span>
                    <span style={{ flex: 1 }}><span style={{ display: "inline-flex", background: "#FBEAE4", color: "#C4472E", borderRadius: 6, padding: "2px 8px", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.04em" }}>APPLY</span><span style={{ display: "block", fontSize: 14, fontWeight: 650, marginTop: 4 }}>Aura Skin — Winter Serum</span><span style={{ display: "block", fontSize: 12, color: "#8A8D93", marginTop: 2 }}>hook · question &nbsp;·&nbsp; age 21d &nbsp;·&nbsp; <b style={{ color: "#C4472E", fontWeight: 650 }}>fatigued</b></span></span>
                    <span style={{ position: "relative", width: 46, height: 46, flex: "none" }}><svg viewBox="0 0 100 100" width="46" height="46"><circle cx="50" cy="50" r="42" fill="none" stroke="#EFEDE5" strokeWidth="12"></circle><circle cx="50" cy="50" r="42" fill="none" stroke="#C4472E" strokeWidth="12" strokeDasharray="264" strokeDashoffset="58" strokeLinecap="round" transform="rotate(-90 50 50)"></circle></svg><span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#C4472E" }}>78</span></span>
                    <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: 999, background: "#16181C", color: "#fff", alignItems: "center", justifyContent: "center", fontSize: 11 }}>▐▐</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, border: "1px solid #EFEDE5", borderRadius: 14, padding: "12px 14px" }}>
                    <span style={{ width: 52, height: 66, borderRadius: 10, background: "#F5B82E", flex: "none", display: "flex", alignItems: "flex-end", padding: 6, boxSizing: "border-box" }}><span style={{ color: "#16181C", fontSize: 8.5, fontWeight: 700, lineHeight: 1.2 }}>Hydrate<br />different</span></span>
                    <span style={{ flex: 1 }}><span style={{ display: "inline-flex", background: "#E9EEF6", color: "#4A6FA5", borderRadius: 6, padding: "2px 8px", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.04em" }}>TEST</span><span style={{ display: "block", fontSize: 14, fontWeight: 650, marginTop: 4 }}>Pulse — Question hook × LAL 1%</span><span style={{ display: "block", fontSize: 12, color: "#8A8D93", marginTop: 2 }}>hook · question &nbsp;·&nbsp; LAL 1% &nbsp;·&nbsp; 3d optimal</span></span>
                    <span style={{ position: "relative", width: 46, height: 46, flex: "none" }}><svg viewBox="0 0 100 100" width="46" height="46"><circle cx="50" cy="50" r="42" fill="none" stroke="#EFEDE5" strokeWidth="12"></circle><circle cx="50" cy="50" r="42" fill="none" stroke="#4A6FA5" strokeWidth="12" strokeDasharray="264" strokeDashoffset="105" strokeLinecap="round" transform="rotate(-90 50 50)"></circle></svg><span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#4A6FA5" }}>62</span></span>
                    <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: 999, background: "#FFFFFF", border: "1px solid #DCD9CE", alignItems: "center", justifyContent: "center", fontSize: 13 }}>⚗</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, border: "1px solid #EFEDE5", borderRadius: 14, padding: "12px 14px" }}>
                    <span style={{ width: 52, height: 66, borderRadius: 10, background: "#E98BB4", flex: "none", display: "flex", alignItems: "flex-end", padding: 6, boxSizing: "border-box" }}><span style={{ color: "#fff", fontSize: 8.5, fontWeight: 700, lineHeight: 1.2 }}>Everyday<br />carry</span></span>
                    <span style={{ flex: 1 }}><span style={{ display: "inline-flex", background: "#F7EEDD", color: "#A87A1F", borderRadius: 6, padding: "2px 8px", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.04em" }}>BRIEF</span><span style={{ display: "block", fontSize: 14, fontWeight: 650, marginTop: 4 }}>Meridian — Fill Question gap</span><span style={{ display: "block", fontSize: 12, color: "#8A8D93", marginTop: 2 }}>UGC vertical &nbsp;·&nbsp; +18% lift &nbsp;·&nbsp; AI-drafted</span></span>
                    <span style={{ position: "relative", width: 46, height: 46, flex: "none" }}><svg viewBox="0 0 100 100" width="46" height="46"><circle cx="50" cy="50" r="42" fill="none" stroke="#EFEDE5" strokeWidth="12"></circle><circle cx="50" cy="50" r="42" fill="none" stroke="#D9A441" strokeWidth="12" strokeDasharray="264" strokeDashoffset="63" strokeLinecap="round" transform="rotate(-90 50 50)"></circle></svg><span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#A87A1F" }}>76</span></span>
                    <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: 999, background: "#FFFFFF", border: "1px solid #DCD9CE", alignItems: "center", justifyContent: "center", fontSize: 13 }}>✦</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Stat band */}
          <div className="cq-hero-1a-stats" style={{ marginTop: 56 }}>
            <div className="cq-1a-stat">
              <span className="cq-1a-ico" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <circle className="anim-ring" cx="16" cy="16" r="10" strokeOpacity="0.35" />
                  <g strokeWidth="2">
                    <line x1="16" y1="3" x2="16" y2="6" />
                    <line x1="24" y1="6" x2="22" y2="8" />
                    <line x1="28" y1="13" x2="25" y2="14" />
                    <line x1="28" y1="19" x2="25" y2="18" />
                    <line x1="24" y1="26" x2="22" y2="24" />
                    <line x1="16" y1="29" x2="16" y2="26" />
                    <line x1="8" y1="26" x2="10" y2="24" />
                    <line x1="4" y1="19" x2="7" y2="18" />
                    <line x1="4" y1="13" x2="7" y2="14" />
                  </g>
                  <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <div>
                <div className="cq-1a-stat-num" style={{ fontSize: 40, fontWeight: 650, letterSpacing: "-0.03em", lineHeight: 1 }}>9</div>
                <div style={{ fontSize: 14, color: "#8A8D93", marginTop: 6 }}>Signal fatigue model</div>
              </div>
            </div>
            <div className="cq-1a-stat">
              <span className="cq-1a-ico" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="17" r="9" />
                  <path d="M16 12v5l3.5 2.5" />
                  <g className="anim-count">
                    <circle cx="16" cy="5" r="1.8" fill="currentColor" stroke="none" />
                    <circle cx="16" cy="5" r="3.6" strokeOpacity="0.35" />
                  </g>
                </svg>
              </span>
              <div>
                <div className="cq-1a-stat-num" style={{ fontSize: 40, fontWeight: 650, letterSpacing: "-0.03em", lineHeight: 1 }}>~14d</div>
                <div style={{ fontSize: 14, color: "#8A8D93", marginTop: 6 }}>Early warning on fatigue</div>
              </div>
            </div>
            <div className="cq-1a-stat">
              <span className="cq-1a-ico" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <g strokeWidth="2.4">
                    <line className="anim-bar" x1="8" y1="22" x2="8" y2="14" style={{ animationDelay: "0s" }} />
                    <line className="anim-bar" x1="14" y1="22" x2="14" y2="10" style={{ animationDelay: "0.3s" }} />
                    <line className="anim-bar" x1="20" y1="22" x2="20" y2="16" style={{ animationDelay: "0.6s" }} />
                  </g>
                  <path d="M24 12l3 3 5-6" strokeWidth="2" transform="translate(-4 3)" />
                  <line x1="4" y1="24" x2="28" y2="24" strokeOpacity="0.35" />
                </svg>
              </span>
              <div>
                <div className="cq-1a-stat-num" style={{ fontSize: 40, fontWeight: 650, letterSpacing: "-0.03em", lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: 14, color: "#8A8D93", marginTop: 6 }}>Decisions joined to outcomes</div>
              </div>
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

      {/* ═══════════════════ LAG CHART — 1a light + Apple vibrancy/blur ═══════════════════ */}
      <section className="cq-lag-1a" style={{ background: "#FFFFFF", color: "#16181C" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "96px 56px" }}>
          <div className="cq-lib-1a-head" style={{ display: "flex", justifyContent: "space-between", gap: 48, alignItems: "flex-end", marginBottom: 44 }}>
            <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.1, fontWeight: 650, letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>CPA is a <span style={{ color: "#0B7B5A" }}>lagging</span> indicator.<br />Fatigue isn&apos;t.</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "#5F6368", maxWidth: 560 }}>By the time your CPA chart spikes, the audience has already moved on. The leading signals were there all along — CTR drifted, frequency climbed, sentiment cooled. Creative IQ reads them in real time so you act before the bill lands.</p>
          </div>

          <div className="cq-lag-1a-card">
            <span className="cq-lag-1a-blob a" aria-hidden="true"></span>
            <span className="cq-lag-1a-blob b" aria-hidden="true"></span>
            <span className="cq-lag-1a-blob c" aria-hidden="true"></span>

            <div className="cq-lag-1a-inner">
              <div className="cq-lag-legendrow" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", gap: 24, fontSize: 13, color: "rgba(255,255,255,0.75)", flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 18, height: 3, borderRadius: 2, background: "#00FFC2" }}></span>Andromeda Readiness (leading)</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 18, height: 3, borderRadius: 2, background: "#FF6B5B" }}></span>CPA (lagging)</span>
                  <span className="cq-lag-legend-gap" style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 14, height: 14, borderRadius: 4, background: "rgba(255,179,71,0.14)", border: "1px dashed #D9A441" }}></span>Detection gap — day-precise runway</span>
                </div>
                <span className="cq-lag-badge" style={{ fontSize: 12, fontWeight: 600, color: "#9AA3B4", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "6px 12px", background: "rgba(255,255,255,0.06)" }}>Real pilot · SKU-447 · Meta</span>
              </div>

              <svg viewBox="0 0 900 260" className="cq-lag-1a-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style={{ width: "100%", height: "auto", display: "block" }}>
                <defs>
                  <linearGradient id="cqHealthL" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.42" />
                    <stop offset="55%" stopColor="#00FFC2" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="cqCpaL" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FF6B5B" stopOpacity="0.38" />
                    <stop offset="55%" stopColor="#FF6B5B" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#FF6B5B" stopOpacity="0.02" />
                  </linearGradient>
                  <filter id="cqGlow" x="-20%" y="-40%" width="140%" height="180%">
                    <feGaussianBlur stdDeviation="5" />
                  </filter>
                  {/* Frosted-vibrancy blur for the area fills under the curves */}
                  <filter id="cqFrost" x="-10%" y="-30%" width="120%" height="160%">
                    <feGaussianBlur stdDeviation="9" />
                  </filter>
                </defs>

                <g stroke="rgba(255,255,255,0.07)" strokeWidth="1">
                  <line x1="50" x2="880" y1="40" y2="40" /><line x1="50" x2="880" y1="100" y2="100" />
                  <line x1="50" x2="880" y1="160" y2="160" /><line x1="50" x2="880" y1="210" y2="210" />
                </g>
                <g fill="#A9ACB0" fontFamily="-apple-system, sans-serif" fontSize="11">
                  <text x="12" y="44">100</text><text x="18" y="104">70</text>
                  <text x="18" y="164">40</text><text x="18" y="214">10</text>
                </g>

                <rect x="320" y="20" width="240" height="200" fill="rgba(217,164,65,0.08)" stroke="#D9A441" strokeDasharray="4 4" strokeWidth="1" />
                <text x="330" y="36" fill="#FFB347" fontFamily="-apple-system, sans-serif" fontSize="11" fontWeight="600">RUNWAY · ~5d · CI 4–6d</text>

                {/* Gradient area fills (kept from original) */}
                <path d="M50 55 L120 60 L190 72 L260 92 L320 112 L400 138 L480 162 L560 178 L620 190 L700 198 L770 202 L830 204 L880 205 L880 220 L50 220 Z" fill="url(#cqHealthL)" filter="url(#cqFrost)" />
                <path d="M50 190 L120 188 L190 186 L260 184 L320 180 L400 174 L480 162 L560 138 L620 108 L700 80 L770 62 L830 52 L880 48 L880 220 L50 220 Z" fill="url(#cqCpaL)" filter="url(#cqFrost)" />

                {/* Soft blurred glow under each curve — Apple-like vibrancy */}
                <path d="M50 55 L120 60 L190 72 L260 92 L320 112 L400 138 L480 162 L560 178 L620 190 L700 198 L770 202 L830 204 L880 205" stroke="#00FFC2" strokeOpacity="0.45" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#cqGlow)" />
                <path d="M50 190 L120 188 L190 186 L260 184 L320 180 L400 174 L480 162 L560 138 L620 108 L700 80 L770 62 L830 52 L880 48" stroke="#FF6B5B" strokeOpacity="0.40" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#cqGlow)" />

                {/* Sharp curves */}
                <path d="M50 55 L120 60 L190 72 L260 92 L320 112 L400 138 L480 162 L560 178 L620 190 L700 198 L770 202 L830 204 L880 205" stroke="#00FFC2" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50 190 L120 188 L190 186 L260 184 L320 180 L400 174 L480 162 L560 138 L620 108 L700 80 L770 62 L830 52 L880 48" stroke="#FF6B5B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                <circle cx="320" cy="112" r="5" fill="#00FFC2" />
                <circle cx="320" cy="112" r="10" fill="none" stroke="#00FFC2" strokeOpacity="0.35" strokeWidth="1.5" />
                <text x="195" y="96" fill="#00FFC2" fontFamily="-apple-system, sans-serif" fontSize="11" fontWeight="600">Readiness dip</text>
                <circle cx="560" cy="138" r="5" fill="#FF6B5B" />
                <circle cx="560" cy="138" r="10" fill="none" stroke="#FF6B5B" strokeOpacity="0.35" strokeWidth="1.5" />
                <text x="584" y="130" fill="#FF6B5B" fontFamily="-apple-system, sans-serif" fontSize="11" fontWeight="600">CPA spike (too late)</text>

                <g fill="#A9ACB0" fontFamily="-apple-system, sans-serif" fontSize="11">
                  <text x="50" y="250">Day 0</text><text x="200" y="250">Day 7</text>
                  <text x="320" y="250" fill="#00FFC2">Day 14</text><text x="480" y="250">Day 21</text>
                  <text x="560" y="250" fill="#FF6B5B">Day 28</text><text x="700" y="250">Day 35</text>
                  <text x="850" y="250" textAnchor="end">Day 42</text>
                </g>
              </svg>

              <div className="cq-lag-foot" style={{ display: "flex", justifyContent: "space-between", gap: 32, marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap" }}>
                <div className="cq-lag-foot-meta" style={{ display: "flex", gap: 28, fontSize: 13, color: "#8A8D93", flexWrap: "wrap" }}>
                  <span><b style={{ color: "#EDEFF3", fontWeight: 600 }}>Day-precise</b> runway with CI</span>
                  <span><b style={{ color: "#EDEFF3", fontWeight: 600 }}>Terminal state</b> past fatigue point</span>
                  <span><b style={{ color: "#EDEFF3", fontWeight: 600 }}>Value Ledger</b> vs. counterfactual</span>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: "#5F6368", maxWidth: 420 }}><b style={{ fontWeight: 600, color: "#EDEFF3" }}>Takeaway:</b> the green curve names the dying grain — the red curve tells the same story in dollars, two weeks late.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ANDROMEDA READINESS SCORE ═══════════════════ */}
      <section className="sp-section alt cq-readiness-section" id="readiness" style={{ background: "#F5F4EF" }}>
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">AI reads every signal. You read <em>one number</em>.</h2>
            <p className="section-sub">Nine fatigue signals, five weighted components, thousands of ad-level data points — the Andromeda engine crunches all of it every night and hands back a single 0–100.</p>
          </div>

          {/* Hero: animated score ring + context */}
          <div className="cq-readiness-hero-v2">
            <ReadinessRing />

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
          <CarouselDots targetSelector=".cq-readiness-strip" />
        </div>
      </section>

      {/* ═══════════════════ CREATIVE LIBRARY — 1a light cards + real lifestyle photos ═══════════════════ */}
      <section className="cq-lib-1a" style={{ background: "#FFFFFF", color: "#16181C" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "96px 56px" }}>
          <div className="cq-lib-1a-head" style={{ display: "flex", justifyContent: "space-between", gap: 48, alignItems: "flex-end", marginBottom: 44 }}>
            <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.1, fontWeight: 650, letterSpacing: "-0.03em", maxWidth: 480 }}>Every creative <span style={{ color: "#0B7B5A" }}>scored</span> at the grain.</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "#5F6368", maxWidth: 620 }}>Not a swipe file. Not an inspiration library. Creative IQ knows which of your ads is fatigued, why, and what to swap in — because every live creative is grain-scored on hook, tone, angle, audience, format, and length.</p>
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
          </div>        </div>
      </section>

      {/* ═══════════════════ 9 SIGNALS — ANIMATED HUB ═══════════════════ */}
      <section className="sp-section cq-signals-section" id="signals" style={{ background: "#F5F4EF" }}>
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
                      </div>
                    );
                  })}
                </div>

                {/* Mobile-only: rectangular layout — tiles pipe signals down into the engine block */}
                <div className="cq-signals-mobile" role="img" aria-label="9 signals feeding the fatigue engine">
                  <div className="cq-sm-grid">
                    {HUB.map((sig) => (
                      <div key={sig.key} className="cq-sm-tile" style={{ ['--tone' as string]: sig.tone }}>
                        <span className="ico">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{sig.icon}</svg>
                        </span>
                        <b>{sig.name}</b>
                      </div>
                    ))}
                  </div>

                  {/* Animated pipes: 3 columns converge to a manifold, then feed the engine */}
                  <svg className="cq-sm-pipes" viewBox="0 0 300 76" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="cqSmPipe" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0B7B5A" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#064A34" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>
                    {/* static pipe paths */}
                    <path d="M50 0 L50 40 L150 40 L150 76" stroke="url(#cqSmPipe)" strokeWidth="1.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M150 0 L150 76" stroke="url(#cqSmPipe)" strokeWidth="1.9" fill="none" strokeLinecap="round" />
                    <path d="M250 0 L250 40 L150 40 L150 76" stroke="url(#cqSmPipe)" strokeWidth="1.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    {/* streaming particles feeding the engine */}
                    {[
                      { p: "M50 0 L50 40 L150 40 L150 76", d: "2.4s", b: "0s", c: "#00FFC2" },
                      { p: "M50 0 L50 40 L150 40 L150 76", d: "2.4s", b: "1.2s", c: "#00FFC2" },
                      { p: "M150 0 L150 76", d: "1.8s", b: "0.4s", c: "#B8A6FF" },
                      { p: "M150 0 L150 76", d: "1.8s", b: "1.3s", c: "#B8A6FF" },
                      { p: "M250 0 L250 40 L150 40 L150 76", d: "2.4s", b: "0.7s", c: "#FF8A7E" },
                      { p: "M250 0 L250 40 L150 40 L150 76", d: "2.4s", b: "1.9s", c: "#FF8A7E" },
                    ].map((s, i) => (
                      <circle key={i} r="2.1" fill={s.c}>
                        <animateMotion dur={s.d} begin={s.b} repeatCount="indefinite" path={s.p} />
                        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={s.d} begin={s.b} repeatCount="indefinite" />
                      </circle>
                    ))}
                  </svg>

                  {/* Rectangular engine block */}
                  <div className="cq-sm-engine">
                    <span className="cq-sm-eng-kicker">Andromeda · fatigue engine</span>
                    <div className="cq-sm-eng-row">
                      <span className="cq-sm-eng-num">24</span>
                      <div className="cq-sm-eng-meta">
                        <b>Fatigues in <span>~5d</span></b>
                        <em>9 signals weighted · CI 4–6d</em>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ═══════════════════ AD DETAIL — CREATIVE BREAKDOWN ═══════════════════ */}
      <section className="sp-section alt cq-dash-section" id="ad-detail" style={{ background: "#FFFFFF" }}>
        <div className="wrap">
          <div className="cq-lib-1a-head" style={{ display: "flex", justifyContent: "space-between", gap: 48, alignItems: "flex-end", marginBottom: 44 }}>
            <h2 className="section-title" style={{ margin: 0, maxWidth: 440 }}>Open an ad.<br />See it broken down.</h2>
            <p className="section-sub" style={{ margin: 0, maxWidth: 560, fontSize: "16.5px", lineHeight: 1.6 }}>Creative IQ doesn&apos;t stop at &ldquo;this ad is tired.&rdquo; Every ad has a detail page with a six-icon Creative Breakdown — quality, brand, coverage, readiness, fatigue, confidence — plus colour-coded tags for every dimension we&apos;ve classified (hook, tone, format, audience, angle) and campaign › adset breadcrumbs.</p>
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
                  <b>Aura Skin — Winter Serum<span className="cq-detail-variant"> · UGC Vertical A</span></b>
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
      <section className="sp-section cq-gap-section" id="gap-map" style={{ background: "#F5F4EF" }}>
        <div className="wrap">
          <div className="section-head split">
            <h2 className="section-title">See what you&apos;re <em>missing</em>.</h2>
            <p className="section-sub">We map every audience, angle, and format your ads never touch — and rank each gap by the upside you&apos;re leaving on the table. When a winner starts to tire, you already know where to run next.</p>
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
              <div className="cq-gap-items">
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
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════ AI TOP BRIEF ═══════════════════ */}
      <section className="sp-section alt cq-brief-section" id="ai-brief" style={{ background: "#FFFFFF" }}>
        <div className="wrap">
          <div className="cq-lib-1a-head" style={{ display: "flex", justifyContent: "space-between", gap: 48, alignItems: "flex-end", marginBottom: 44 }}>
            <h2 className="section-title" style={{ margin: 0, maxWidth: 440 }}>One brief.<br />Every signal we have.</h2>
            <p className="section-sub" style={{ margin: 0, maxWidth: 680, fontSize: "16.5px", lineHeight: 1.6 }}>The AI Top Brief generator fuses every signal already on your account into one production-ready brief — the highest-impact gap × your winning grain, cross-referenced with real-world search-trend velocity, cultural moments in flight, and competitor creative directions live in the wild.</p>
          </div>

          <div className="cq-brief-fuse">
            <div className="cq-brief-ings">
              <article className="cq-brief-ing t-diversity"><span className="cq-brief-ing-main"><span className="cq-brief-ing-kicker">Diversity gap</span><b>Question × LAL 1%</b></span><em>+12% ROAS · 0% saturated</em></article>
              <article className="cq-brief-ing t-winners"><span className="cq-brief-ing-main"><span className="cq-brief-ing-kicker">Your winners</span><b>UGC vertical · 15s · warm</b></span><em>Grain-extracted from top 10</em></article>
              <article className="cq-brief-ing t-audience"><span className="cq-brief-ing-main"><span className="cq-brief-ing-kicker">Audience fit</span><b>Lookalike 1% · idx 1.9×</b></span><em>Headroom +38%</em></article>
              <article className="cq-brief-ing t-realworld"><span className="cq-brief-ing-main"><span className="cq-brief-ing-kicker">Real-world</span><b>&ldquo;retinol serum&rdquo; +124%</b></span><em>Coachella &apos;26 · Glossier UGC</em></article>
              <article className="cq-brief-ing t-fatigue"><span className="cq-brief-ing-main"><span className="cq-brief-ing-kicker">Fatigue signal</span><b>3 ads · runway ≤ 7d</b></span><em>9-signal Andromeda</em></article>
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
              <header className="cq-brief-out-head"><span>✦ Production brief</span><em>Draft · 6 sec</em></header>
              <div className="cq-brief-out-fields">
                <div><em>Angle</em><b>Problem → Solve</b></div>
                <div><em>Hook</em><b>Question · &ldquo;What if…&rdquo;</b></div>
                <div><em>Audience</em><b>Lookalike 1%</b></div>
                <div><em>Format</em><b>UGC vertical · 15s</b></div>
                <div><em>KPI</em><b>ROAS ≥ 3.5×</b></div>
                <div><em>Refs</em><b>3 winners auto-attached</b></div>
              </div>
              <footer className="cq-brief-out-foot"><a href="https://app.memologs.com/" className="cq-brief-studio-btn">Open in Brief Studio →</a></footer>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ PLATFORM COVERAGE ═══════════════════ */}
      <section className="sp-section cq-platforms-section" id="platforms" style={{ background: "#F5F4EF" }}>
        <div className="wrap">
          <div className="cq-lib-1a-head" style={{ display: "flex", justifyContent: "space-between", gap: 48, alignItems: "flex-end", marginBottom: 44 }}>
            <h2 className="section-title" style={{ margin: 0, maxWidth: 480 }}>Where Creative IQ <em>works</em> today.</h2>
            <p className="section-sub" style={{ margin: 0, maxWidth: 560, fontSize: "16.5px", lineHeight: 1.6 }}>Run Meta ads? You&apos;re ready on day one. TikTok and YouTube are on the way — join the waitlist and we&apos;ll onboard you the moment those platforms are live.</p>
          </div>

          <div className="cq-platforms">
            {/* META — live */}
            <article className="cq-pf cq-pf-live">
              <div className="cq-pf-top">
                <span className="cq-pf-logo" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path fill="#0081FB" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.303-1.82 2.174-.688-.871-1.351-1.643-1.926-2.15C9.868 4.443 8.746 4.03 6.915 4.03Zm.089 4.02c.669 0 1.312.263 1.955.744.526.394 1.06.941 1.63 1.652-.582.914-1.096 1.652-1.402 2.108-1.42 2.109-1.834 2.72-2.34 3.373-.729.935-1.15 1.108-1.702 1.108-.61 0-1.038-.264-1.354-.73-.293-.427-.45-1.058-.45-1.86 0-1.918.53-4.096 1.398-5.44.629-.977 1.442-1.606 2.312-1.606l.353.001Zm9.99.001c.63 0 1.331.363 2.036 1.055.898.88 1.55 2.208 1.897 3.603.235.94.352 1.933.352 2.93 0 .958-.176 1.652-.518 2.098-.234.306-.552.457-.985.457-.507 0-.907-.204-1.404-.751-.591-.652-1.13-1.472-1.767-2.532l-2.121-3.543.128-.207c.694-1.117 1.278-1.916 1.803-2.427.579-.567 1.026-.766 1.622-.766l-.043-.001Z"/></svg>
                </span>
                <b className="cq-pf-name">Meta</b>
                <span className="cq-pf-badge live"><span className="dot"></span>Live</span>
              </div>
              <ul className="cq-pf-list">
                <li><span className="mk">✓</span>Per-ad fatigue scoring &amp; day-precise runway</li>
                <li><span className="mk">✓</span>Diversity Gap Map — the cells you never enter</li>
                <li><span className="mk">✓</span>Decision queue — Apply, Test, Brief, Watch</li>
                <li><span className="mk">✓</span>AI Top Brief generator (Scale plan)</li>
                <li><span className="mk">✓</span>Outcomes measured against a counterfactual</li>
              </ul>
              <div className="cq-pf-foot">
                <a href="https://app.memologs.com/" className="cq-pf-btn primary">Try Creative IQ →</a>
                <span className="cq-pf-note">Refreshes nightly</span>
              </div>
            </article>

            {/* TIKTOK — coming soon */}
            <article className="cq-pf cq-pf-roadmap">
              <div className="cq-pf-top">
                <span className="cq-pf-logo" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </span>
                <b className="cq-pf-name">TikTok</b>
                <span className="cq-pf-badge soon">Coming soon</span>
              </div>
              <ul className="cq-pf-list">
                <li><span className="mk mk-soon">—</span>Same 9-signal fatigue engine, TikTok-tuned</li>
                <li><span className="mk mk-soon">—</span>Gap map across audience, angle, and format</li>
                <li><span className="mk mk-soon">—</span>Decision queue &amp; brief workflow</li>
                <li><span className="mk mk-soon">—</span>Portfolio view alongside your Meta account</li>
              </ul>
              <div className="cq-pf-foot">
                <PilotCTA
                  className="cq-pf-btn ghost"
                  modalTitle="Join the TikTok waitlist"
                  modalSubtitle="Tell us about your TikTok ad account. We'll email as soon as Creative IQ is live on TikTok — and onboard you first."
                >
                  Join the waitlist →
                </PilotCTA>
              </div>
            </article>

            {/* YOUTUBE — coming soon */}
            <article className="cq-pf cq-pf-roadmap">
              <div className="cq-pf-top">
                <span className="cq-pf-logo" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </span>
                <b className="cq-pf-name">YouTube</b>
                <span className="cq-pf-badge soon">Coming soon</span>
              </div>
              <ul className="cq-pf-list">
                <li><span className="mk mk-soon">—</span>Watch-through decay &amp; skip-rate saturation</li>
                <li><span className="mk mk-soon">—</span>Shorts &amp; in-stream format coverage</li>
                <li><span className="mk mk-soon">—</span>Decision queue with the same commit flow</li>
                <li><span className="mk mk-soon">—</span>Portfolio view across every platform you run</li>
              </ul>
              <div className="cq-pf-foot">
                <PilotCTA
                  className="cq-pf-btn ghost"
                  modalTitle="Join the YouTube waitlist"
                  modalSubtitle="Tell us about your YouTube ad account. We'll email as soon as Creative IQ is live on YouTube — and onboard you first."
                >
                  Join the waitlist →
                </PilotCTA>
              </div>
            </article>
          </div>

          <p className="cq-pf-caption">Every score you see is backed by real platform data. If a signal can&apos;t be measured, we don&apos;t show a number — we tell you.</p>
        </div>
      </section>

      {/* ═══════════════════ QUOTE + CTA ═══════════════════ */}
      <section className="sp-section cq-close-section" style={{ background: "#FFFFFF" }}>
        <div className="wrap">
          <blockquote className="sp-quote">
            <p>&ldquo;We used to have a creative dashboard. Creative IQ gave us a decision queue. The team opens MemoLogs, commits three or four things, and goes back to making ads — instead of sifting through fatigue charts.&rdquo;</p>
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

      {/* Mobile-only sticky CTA */}
      <div className="cq-mobile-cta" aria-hidden="false">
        <a href="https://app.memologs.com/" className="cq-mobile-cta-btn">Try Creative IQ →</a>
      </div>
    </div>
  );
}
