'use client';

import { useState } from 'react';
import Link from 'next/link';
import GeoLiftDemo from './GeoLiftDemo';

const tabs = [
  { id: 'incr', num: '01', name: 'Incrementality IQ', desc: 'Causal measurement' },
  { id: 'creative', num: '02', name: 'Creative IQ', desc: 'Fatigue detection' },
  { id: 'audience', num: '03', name: 'Audience IQ', desc: 'Buyer-graded segments' },
  { id: 'copilot', num: '04', name: 'AI Co-Pilot', desc: 'Conversational analytics' },
  { id: 'memory', num: '05', name: 'Memory IQ', desc: 'Institutional memory' },
];

export default function PillarTabs() {
  const [active, setActive] = useState('incr');

  return (
    <div className="pillar-tabs-shell">
      <div className="pillar-tabs" role="tablist">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`ptab${active === tab.id ? ' active' : ''}`}
            data-tab={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
          >
            <span className="ptab-num">{tab.num}</span>
            <span className="ptab-name">{tab.name}</span>
            <span className="ptab-desc">{tab.desc}</span>
          </button>
        ))}
      </div>

      <div className="ptab-panels">
        {/* Panel 1: Incrementality IQ */}
        <div className={`ppanel${active === 'incr' ? ' active' : ''}`} id="panel-incr">
          <div className="ppanel-copy">
            <div className="ppanel-tag">01 · Incrementality IQ</div>
            <h3>Prove what actually drove revenue.</h3>
            <p>Always-on causal experimentation in live markets. Tri-model consensus with <b>GeoTwin™</b> (synthetic control), <b>CausalCore™</b> (Bayesian time-series), and <b>DiffLens™</b> (difference-in-differences) — reconciled into one boardroom-ready verdict with automated placebo validation, so every lift claim is audit-grade.</p>
            <ul className="ppanel-list">
              <li><b>Design before you spend.</b> ML picks optimal test &amp; control markets. Statistical power guaranteed before dollar one.</li>
              <li><b>GeoTwin™ synthetic markets.</b> A weighted blend of control cities that mirrors your test market in real time — then we watch the gap.</li>
              <li><b>CausalCore™ validation.</b> Counterfactual model runs in parallel on non-campaign windows. If phantom lift appears there, we catch it.</li>
            </ul>
            <Link className="learn-more" href="/incrementality-iq">See the methodology →</Link>
          </div>
          <div className="ppanel-demo">
            <div className="demo-head">
              <span className="demo-chip">Live demo</span>
              <span className="demo-title">GeoTwin™ study — Q2 campaign</span>
            </div>
            <GeoLiftDemo />
          </div>
        </div>

        {/* Panel 2: Creative IQ */}
        <div className={`ppanel${active === 'creative' ? ' active' : ''}`} id="panel-creative">
          <div className="ppanel-copy">
            <div className="ppanel-tag">02 · Creative IQ</div>
            <h3>Know when your creative dies — before the metrics do.</h3>
            <p>7-signal fatigue detection at the asset level. Meta Andromeda entity-ID clustering. AI refresh recommendations with predicted replacement performance.</p>
            <ul className="ppanel-list">
              <li><b>11–18 days earlier.</b> Teams using Creative IQ spot fatigue before CPA reveals it.</li>
              <li><b>Asset-level visibility.</b> We flag the specific hook, the specific frame, the specific caption — not just &ldquo;campaign is tired.&rdquo;</li>
              <li><b>Refresh playbook.</b> The AI queues variants weighted by what worked in analogous fatigue cycles.</li>
            </ul>
            <Link className="learn-more" href="/creative-iq">See fatigue signals →</Link>
          </div>
          <div className="ppanel-demo">
            <div className="demo-head">
              <span className="demo-chip">7-signal fatigue model</span>
              <span className="demo-title">Ad set · SKU-447</span>
            </div>
            <div className="creative-scene" aria-label="Creative IQ — 3D fatigue scene">
              <div className="cs-stage">
                <div className="cs-glow cs-glow-a"></div>
                <div className="cs-glow cs-glow-b"></div>
                <div className="cs-card cs-card-back">
                  <div className="cs-card-media" data-heat="cool"><span className="cs-card-badge">Ad 02</span></div>
                  <div className="cs-card-foot"><span className="cs-pill ok">Healthy · 82</span></div>
                </div>
                <div className="cs-card cs-card-mid">
                  <div className="cs-card-media" data-heat="warm"><span className="cs-card-badge">Ad 03</span></div>
                  <div className="cs-card-foot"><span className="cs-pill mid">Watch · 54</span></div>
                </div>
                <div className="cs-card cs-card-front">
                  <div className="cs-card-media" data-heat="hot">
                    <div className="cs-heatmap" aria-hidden="true">
                      <span className="cs-hot" style={{"--x":"68%","--y":"32%","--s":"90px"} as React.CSSProperties}></span>
                      <span className="cs-hot" style={{"--x":"32%","--y":"62%","--s":"70px"} as React.CSSProperties}></span>
                      <span className="cs-hot" style={{"--x":"78%","--y":"78%","--s":"50px"} as React.CSSProperties}></span>
                    </div>
                    <span className="cs-card-badge">Ad 04 · video</span>
                    <div className="cs-play" aria-hidden="true">▶</div>
                  </div>
                  <div className="cs-card-foot">
                    <span className="cs-pill bad">Fatigued · 24</span>
                    <span className="cs-card-refresh">Refresh now →</span>
                  </div>
                </div>
                <span className="cs-orb cs-orb-ctr" style={{"--t":"-8%","--l":"54%"} as React.CSSProperties}>
                  <span className="cs-orb-val">−38%</span>
                  <span className="cs-orb-lab">CTR decay</span>
                </span>
                <span className="cs-orb cs-orb-freq" style={{"--t":"14%","--l":"92%"} as React.CSSProperties}>
                  <span className="cs-orb-val">11.2×</span>
                  <span className="cs-orb-lab">Frequency</span>
                </span>
                <span className="cs-orb cs-orb-cpa" style={{"--t":"66%","--l":"96%"} as React.CSSProperties}>
                  <span className="cs-orb-val">+27%</span>
                  <span className="cs-orb-lab">CPA drift</span>
                </span>
                <span className="cs-orb cs-orb-over" style={{"--t":"86%","--l":"10%"} as React.CSSProperties}>
                  <span className="cs-orb-val">64%</span>
                  <span className="cs-orb-lab">Overlap</span>
                </span>
                <div className="cs-tray">
                  <div className="cs-tray-head">
                    <span className="cs-tray-lab">Refresh queue</span>
                    <span className="cs-tray-count">3 variants ready</span>
                  </div>
                  <div className="cs-tray-items">
                    <div className="cs-queue cs-q1"><span>V1</span><em>+18% pred.</em></div>
                    <div className="cs-queue cs-q2"><span>V2</span><em>+11% pred.</em></div>
                    <div className="cs-queue cs-q3"><span>V3</span><em>+9% pred.</em></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3: Audience IQ */}
        <div className={`ppanel${active === 'audience' ? ' active' : ''}`} id="panel-audience">
          <div className="ppanel-copy">
            <div className="ppanel-tag">03 · Audience IQ</div>
            <h3>Find the customers who actually convert.</h3>
            <p>First-party data enrichment. Six AI agents working in parallel. Cross-platform audience sync in real time — no CSVs, no lag.</p>
            <ul className="ppanel-list">
              <li><b>Enrichment beyond lookalike.</b> Append demographics, psychographics, and purchase-intent to your first-party data.</li>
              <li><b>Six agents, always running.</b> Prospecting · retargeting · lookalike expansion · suppression · bid management · creative matching.</li>
              <li><b>Cross-platform sync.</b> Optimized audiences pushed to Meta, Google, TikTok instantly.</li>
            </ul>
            <Link className="learn-more" href="/audience-iq">Meet the six agents →</Link>
          </div>
          <div className="ppanel-demo">
            <div className="demo-head">
              <span className="demo-chip">6 agents · 12 live segments</span>
              <span className="demo-title">Audience constellation</span>
            </div>
            <div className="aud-scene" aria-label="Audience IQ — 3D agent constellation">
              <div className="aud-stage">
                <div className="aud-glow"></div>
                <svg className="aud-orbits" viewBox="0 0 400 280" aria-hidden="true">
                  <defs>
                    <radialGradient id="audR" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.22" />
                      <stop offset="70%" stopColor="#00FFC2" stopOpacity="0.04" />
                      <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="audLink" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00FFC2" stopOpacity="0" />
                      <stop offset="50%" stopColor="#00FFC2" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="140" r="120" fill="url(#audR)" />
                  <ellipse cx="200" cy="140" rx="150" ry="42" fill="none" stroke="rgba(255,255,255,0.10)" strokeDasharray="2 4" />
                  <ellipse cx="200" cy="140" rx="110" ry="30" fill="none" stroke="rgba(0,255,194,0.18)" strokeDasharray="2 4" />
                  <ellipse cx="200" cy="140" rx="70" ry="20" fill="none" stroke="rgba(0,255,194,0.30)" strokeDasharray="2 4" />
                  <path d="M200,140 C120,110 90,70 40,50" stroke="url(#audLink)" strokeWidth="1.4" fill="none" />
                  <path d="M200,140 C280,110 310,70 360,50" stroke="url(#audLink)" strokeWidth="1.4" fill="none" />
                  <path d="M200,140 C130,170 95,210 40,230" stroke="url(#audLink)" strokeWidth="1.4" fill="none" />
                  <path d="M200,140 C270,170 305,210 360,230" stroke="url(#audLink)" strokeWidth="1.4" fill="none" />
                </svg>
                <div className="aud-hub">
                  <div className="aud-hub-core">
                    <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
                      <g stroke="#0A0F1D" strokeWidth="2.4" strokeLinecap="round">
                        <line x1="16" y1="6" x2="16" y2="26" />
                        <line x1="6" y1="16" x2="26" y2="16" />
                        <line x1="9" y1="9" x2="23" y2="23" />
                        <line x1="23" y1="9" x2="9" y2="23" />
                      </g>
                    </svg>
                  </div>
                  <span className="aud-hub-lab">Signal graph</span>
                  <span className="aud-hub-sub">1.2M profiles enriched</span>
                </div>
                <span className="aud-agent aa-acq" style={{"--t":"12%","--l":"20%"} as React.CSSProperties}>
                  <span className="aud-agent-dot"></span>
                  <span className="aud-agent-name">Acquisition</span>
                  <span className="aud-agent-size">512K</span>
                </span>
                <span className="aud-agent aa-react" style={{"--t":"8%","--l":"70%"} as React.CSSProperties}>
                  <span className="aud-agent-dot"></span>
                  <span className="aud-agent-name">Reactivation</span>
                  <span className="aud-agent-size">284K</span>
                </span>
                <span className="aud-agent aa-ret" style={{"--t":"38%","--l":"84%"} as React.CSSProperties}>
                  <span className="aud-agent-dot"></span>
                  <span className="aud-agent-name">Retention</span>
                  <span className="aud-agent-size">128K</span>
                </span>
                <span className="aud-agent aa-ctx" style={{"--t":"72%","--l":"78%"} as React.CSSProperties}>
                  <span className="aud-agent-dot"></span>
                  <span className="aud-agent-name">Context</span>
                  <span className="aud-agent-size">67K</span>
                </span>
                <span className="aud-agent aa-sup" style={{"--t":"80%","--l":"28%"} as React.CSSProperties}>
                  <span className="aud-agent-dot"></span>
                  <span className="aud-agent-name">Suppression</span>
                  <span className="aud-agent-size">41K</span>
                </span>
                <span className="aud-agent aa-bid" style={{"--t":"42%","--l":"10%"} as React.CSSProperties}>
                  <span className="aud-agent-dot"></span>
                  <span className="aud-agent-name">Bid mgmt.</span>
                  <span className="aud-agent-size">−14% CAC</span>
                </span>
                <div className="aud-sync">
                  <span className="aud-sync-lab">Cross-platform sync · 3 min ago</span>
                  <div className="aud-sync-chips">
                    <span className="aud-chip">Meta</span>
                    <span className="aud-chip">Google</span>
                    <span className="aud-chip">TikTok</span>
                    <span className="aud-chip">DV360</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 4: AI Co-Pilot */}
        <div className={`ppanel${active === 'copilot' ? ' active' : ''}`} id="panel-copilot">
          <div className="ppanel-copy">
            <div className="ppanel-tag">04 · AI Co-Pilot</div>
            <h3>Ask your data anything.<br />Act on everything.</h3>
            <p>Conversational Q&amp;A across every signal in your stack. Proactive alerts surface issues before they become problems. One-click board-ready reports.</p>
            <ul className="ppanel-list">
              <li><b>Answer, not query.</b> Ask &ldquo;Why did CPA spike on Tuesday?&rdquo; — get the reason, not the filter combinations to find it.</li>
              <li><b>Proactive by default.</b> Creative fatigue, budget waste, audience saturation — the Co-Pilot flags them first.</li>
              <li><b>Board-ready in one click.</b> Monthly performance reports generated automatically. No analyst hours.</li>
            </ul>
            <Link className="learn-more" href="/copilot">Try example prompts →</Link>
          </div>
          <div className="ppanel-demo">
            <div className="demo-head">
              <span className="demo-chip">AI Co-Pilot</span>
              <span className="demo-title">Live chat · try a question</span>
            </div>
            <div className="chat">
              <div className="chat-log">
                <div className="chat-msg user">
                  <div className="chat-bubble">Why did CPA spike on Tuesday?</div>
                </div>
                <div className="chat-msg bot">
                  <div className="chat-bubble">
                    <div className="chat-answer-head">Root cause identified — 91% confidence</div>
                    <p>Tuesday&apos;s CPA spike (+38%) on Meta was driven by three compounding factors:</p>
                    <ol>
                      <li><b>Creative fatigue</b> on ad set SKU-447 crossed the 7-signal threshold Monday night. Frequency hit 11.2.</li>
                      <li><b>Audience overlap</b> with your retargeting segment climbed to 64% — we flagged it in Memory IQ on Sunday.</li>
                      <li><b>Competitor pressure</b> from brand X doubled share-of-voice in your priority markets.</li>
                    </ol>
                    <div className="chat-action">Suggested: refresh creative (3 variants queued) · cap retargeting frequency at 6 · reallocate $18K from Meta → CTV</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 5: Memory IQ */}
        <div className={`ppanel${active === 'memory' ? ' active' : ''}`} id="panel-memory">
          <div className="ppanel-copy">
            <div className="ppanel-tag">05 · Memory IQ</div>
            <h3>Stop paying for the same<br />mistake twice.</h3>
            <p>Every strategic decision logged with context, hypothesis, action, and outcome. Memory IQ pattern-matches new decisions against historical outcomes — and warns you before you walk into a wall you&apos;ve already hit.</p>
            <ul className="ppanel-list">
              <li><b>The Decision Loop.</b> Context → Hypothesis → Action → Outcome → Memory. Tribal knowledge becomes infrastructure.</li>
              <li><b>Pattern warnings.</b> &ldquo;3 of the last 4 times we scaled paid social above $800K in Oct, branded search efficiency dropped. Suggest $650K cap.&rdquo;</li>
              <li><b>Survives turnover.</b> Average marketing team loses 30–40% of institutional knowledge when a senior hire leaves. Not with Memory IQ.</li>
            </ul>
            <Link className="learn-more" href="/memory-iq">Inside the decision log →</Link>
          </div>
          <div className="ppanel-demo">
            <div className="demo-head">
              <span className="demo-chip">Memory IQ</span>
              <span className="demo-title">Pattern warning · before activation</span>
            </div>
            <div className="memory-demo">
              <div className="mem-plan">
                <div className="mem-plan-head">
                  <span className="mem-plan-tag">Pending activation</span>
                  <span className="mem-plan-name">Q4 Paid Social Scale-up</span>
                </div>
                <div className="mem-plan-body">
                  Scale Meta + TikTok to <b>$920K/mo</b> through October.<br />
                  Hypothesis: Q4 seasonal demand will absorb additional spend.<br />
                  Owner: VP Growth · Ready to activate.
                </div>
                <div className="mem-plan-foot">
                  <button className="btn btn-dark btn-sm">Activate</button>
                  <span className="mem-plan-hold">⚠ Memory IQ is holding this — review below</span>
                </div>
              </div>
              <div className="mem-warning">
                <div className="mem-warning-head">
                  <span className="mem-warning-icon">!</span>
                  <span className="mem-warning-title">Matches 3 of 4 historical failure patterns</span>
                </div>
                <table className="mem-table">
                  <thead><tr><th>Date</th><th>What we did</th><th>Outcome</th></tr></thead>
                  <tbody>
                    <tr><td>Oct &apos;24</td><td>Scaled paid social to $880K/mo</td><td className="neg">−18% branded SEM efficiency by week 3</td></tr>
                    <tr><td>Oct &apos;23</td><td>Scaled paid social to $910K/mo</td><td className="neg">+$64K wasted on retargeting overlap</td></tr>
                    <tr><td>Jul &apos;24</td><td>Scaled paid social to $720K/mo</td><td className="pos">Successful — under audience saturation ceiling</td></tr>
                    <tr><td>Oct &apos;22</td><td>Scaled paid social to $840K/mo</td><td className="neg">Creative fatigue compressed, CAC +31%</td></tr>
                  </tbody>
                </table>
                <div className="mem-reco">
                  <b>Pattern-aware recommendation</b> — cap Meta + TikTok at <b>$650K/mo</b>, reallocate surplus to CTV (2.1× incremental ROI in historical Q4 windows).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
