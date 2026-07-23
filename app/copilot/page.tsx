import type { Metadata } from "next";
import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/copilot" },
  title: "Media Copilot — AI Campaign Command Center",
  description: "One AI analyst. Every channel. Real-time decisions. Your cross-channel performance in one command center — with natural-language Q&A.",
};

export default function CopilotPage() {
  return (
    <>
      {/* Hero */}
      <section className="subpage-hero cp-hero" aria-labelledby="cp-h1">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">Platform</Link> <span>›</span> AI Co-Pilot</div>

          <div className="cp-hero-grid">
            <div className="cp-hero-lead">
              <span className="iq-chip iq-chip-accent">Conversational marketing analytics</span>
              <h1 id="cp-h1">Ask your data <em>anything.</em><br />Act on <em>everything.</em></h1>
              <p className="lede">
                Stop interrogating dashboards. The MemoLogs <b>AI Co-Pilot</b> decomposes any marketing question into sub-queries across your causal, creative, audience, and memory data — and answers with the chart, the reasoning, and the next action. Every answer cited. None hallucinated.
              </p>

              <div className="iq-feature-chips">
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Cited, never hallucinated</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Cross-signal reasoning</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>One-click actions</span>
              </div>

              <div className="cta-row iq-cta-row">
                <PilotCTA className="btn btn-primary btn-lg">Start a 90-day pilot →</PilotCTA>
                <a href="#conversations" className="btn btn-ghost btn-lg">See real conversations</a>
              </div>

              <div className="iq-hero-micro">
                <span>Answers in ~0.4s (&lt;4s p95)</span>
                <span className="sep">·</span>
                <span>Slack &amp; email proactive alerts</span>
                <span className="sep">·</span>
                <span>Board-ready monthly reports</span>
              </div>
            </div>

            <aside className="cp-hero-chat" aria-label="Sample Co-Pilot conversation">
              <div className="cp-chat-frame">
                <div className="cp-chat-chrome">
                  <div className="cp-chat-dots" aria-hidden="true"><span></span><span></span><span></span></div>
                  <span className="cp-chat-tab">MemoLogs · Co-Pilot · Illustrative</span>
                  <span className="cp-chat-status"><span className="cp-chat-dot"></span>Live</span>
                </div>

                <div className="cp-chat-body">
                  <div className="cp-msg cp-msg-user">
                    <div className="cp-msg-bubble">Why did our blended CPA spike on Tuesday?</div>
                    <div className="cp-msg-avatar cp-msg-avatar-user">RS</div>
                  </div>

                  <div className="cp-msg cp-msg-bot">
                    <div className="cp-msg-avatar cp-msg-avatar-bot" aria-hidden="true">
                      <svg viewBox="0 0 32 32"><g stroke="#070B16" strokeWidth="2.4" strokeLinecap="round"><line x1="16" y1="6" x2="16" y2="26" /><line x1="6" y1="16" x2="26" y2="16" /><line x1="9" y1="9" x2="23" y2="23" /><line x1="23" y1="9" x2="9" y2="23" /></g></svg>
                    </div>
                    <div className="cp-msg-bubble cp-msg-bubble-rich">
                      <header className="cp-msg-head">
                        <span className="cp-msg-conf">High confidence · 91%</span>
                        <span className="cp-msg-time">0.4s</span>
                      </header>
                      <p className="cp-msg-summary">Tuesday&apos;s blended CPA spiked <b>+38%</b>. Three compounding causes — ranked by contribution.</p>

                      <div className="cp-viz cp-viz-stacked">
                        <div className="cp-stack-row">
                          <span className="cp-stack-bar">
                            <span className="cp-stack-seg s-creative" style={{ ['--w' as string]: '46%' }} data-v="46%"><em>Creative fatigue</em></span>
                            <span className="cp-stack-seg s-audience" style={{ ['--w' as string]: '32%' }} data-v="32%"><em>Audience overlap</em></span>
                            <span className="cp-stack-seg s-comp" style={{ ['--w' as string]: '22%' }} data-v="22%"><em>Competitor SOV</em></span>
                          </span>
                        </div>
                      </div>

                      <ul className="cp-msg-points">
                        <li><b>Creative fatigue (46%)</b> on ad set SKU-447 crossed the 9-signal threshold Mon night. Frequency 8.4×.</li>
                        <li><b>Audience overlap (32%)</b> with retargeting climbed to 64%. Memory IQ flagged it Sunday.</li>
                        <li><b>Competitor SOV (22%)</b> doubled in priority markets — Brand X re-launched.</li>
                      </ul>

                      <footer className="cp-msg-foot">
                        <div className="cp-msg-cites">
                          <span className="cp-msg-cite-lab">Sources</span>
                          <a className="cp-msg-cite">Creative IQ · SKU-447</a>
                          <a className="cp-msg-cite">Audience IQ · overlap</a>
                          <a className="cp-msg-cite">Memory IQ · Oct&apos;23 pattern</a>
                        </div>
                        <div className="cp-msg-actions">
                          <button className="btn btn-primary btn-sm">Refresh creative</button>
                          <button className="btn btn-ghost btn-sm">Cap retargeting freq.</button>
                        </div>
                      </footer>
                    </div>
                  </div>

                  <div className="cp-chat-suggest">
                    <span className="cp-chat-suggest-lab">Try:</span>
                    <button className="cp-chat-chip">Which channel is most inflated?</button>
                    <button className="cp-chat-chip">Forecast October spend</button>
                    <button className="cp-chat-chip">Where should I move $50K?</button>
                  </div>

                  <form className="cp-chat-input" >
                    <span className="cp-chat-input-ico" aria-hidden="true">›</span>
                    <input type="text" placeholder="Ask anything about your marketing data…" aria-label="Ask the Co-Pilot" />
                    <button className="cp-chat-send">Ask <span aria-hidden="true">→</span></button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Reasoning pipeline */}
      <section className="sp-section cp-reasoning-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">It&apos;s not a chatbot.<br />It&apos;s an <em>analyst.</em></h2>
            <p className="section-sub">Behind every answer is a five-stage reasoning pipeline. The Co-Pilot doesn&apos;t translate your question into SQL and pray — it plans, queries, synthesizes, cites, and proposes actions.</p>
          </div>

          <div className="cp-flow">
            <article className="cp-flow-step">
              <div className="cp-flow-num">01</div>
              <div className="cp-flow-icon-wrap">
                <div className="cp-flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                </div>
                <h4>Plan</h4>
              </div>
              <p>Decomposes your question into the sub-questions that actually answer it. <em>&ldquo;Why did CPA spike?&rdquo;</em> becomes 6 sub-queries.</p>
            </article>
            <article className="cp-flow-arrow" aria-hidden="true">→</article>
            <article className="cp-flow-step">
                <div className="cp-flow-num">02</div>
                <div className="cp-flow-icon-wrap">
                    
                    <div className="cp-flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h18M3 12h12M3 18h6" /></svg>
                    </div>
                    <h4>Query</h4>
                </div>
                <p>Hits the unified graph — platform data, GeoTwin lift, Creative IQ, Audience IQ, Memory IQ — in parallel.</p>
            </article>
            <article className="cp-flow-arrow" aria-hidden="true">→</article>
            <article className="cp-flow-step">
                <div className="cp-flow-num">03</div>
                <div className="cp-flow-icon-wrap">
                    
                    <div className="cp-flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 17l4-4 4 3 5-7 5 5" /></svg>
                    </div>
                    <h4>Synthesize</h4>
                </div>
                <p>Composes a plain-English answer with the right chart, the right ranking, and the right caveats.</p>
            </article>
            <article className="cp-flow-arrow" aria-hidden="true">→</article>
            <article className="cp-flow-step">
                <div className="cp-flow-num">04</div>
                <div className="cp-flow-icon-wrap">
                    
                    <div className="cp-flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 13l4 4 10-10" /><circle cx="19" cy="5" r="2" /></svg>
                    </div>
                    <h4>Cite</h4>
                </div>
                <p>Every claim is linked to its source view. Click any citation to verify in the underlying dashboard.</p>
            </article>
            <article className="cp-flow-arrow" aria-hidden="true">→</article>
            <article className="cp-flow-step cp-flow-step-accent">
                <div className="cp-flow-num">05</div>
                <div className="cp-flow-icon-wrap">
                    
                    <div className="cp-flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-5-6.5 5 2-7L2 9h7z" /></svg>
                    </div>
                    <h4>Act</h4>
                </div>
                <p>Suggested actions are pre-staged — refresh creative, cap frequency, reallocate spend — one click to apply.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Showcase conversations */}
      <section className="sp-section alt cp-shows-section" id="conversations">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">The kind of questions<br />your CFO actually asks.</h2>
            <p className="section-sub">Three conversations the Co-Pilot has every week. Each pulls from a different combination of MemoLogs signals — and lands an answer that&apos;s defensible in the room.</p>
          </div>

          <div className="cp-shows">
            {/* Showcase 1 */}
            <article className="cp-show">
              <header className="cp-show-head">
                <span className="cp-show-num">01</span>
                <span className="cp-show-tag">Cross-channel · 4 sources · Illustrative</span>
              </header>
              <div className="cp-msg cp-msg-user cp-show-user">
                <div className="cp-msg-bubble">Which channel is most inflated right now?</div>
              </div>
              <div className="cp-msg cp-msg-bot cp-show-bot">
                <div className="cp-msg-bubble cp-msg-bubble-rich">
                  <header className="cp-msg-head">
                    <span className="cp-msg-conf">High confidence · 88%</span>
                    <span className="cp-msg-time">0.6s</span>
                  </header>
                  <p className="cp-msg-summary">Branded SEM is the most inflated channel — <b>11.2× over true incrementality</b>. Three of your four channels need a real conversation with finance.</p>
                  <div className="cp-viz cp-viz-bars">
                    <div className="cp-bar-row">
                      <span className="cp-bar-lab">Branded SEM</span>
                      <span className="cp-bar"><span className="cp-bar-fill bad" style={{ ['--w' as string]: '96%' }}></span></span>
                      <span className="cp-bar-val bad">11.2×</span>
                    </div>
                    <div className="cp-bar-row">
                      <span className="cp-bar-lab">Meta Retarget</span>
                      <span className="cp-bar"><span className="cp-bar-fill bad" style={{ ['--w' as string]: '74%' }}></span></span>
                      <span className="cp-bar-val bad">5.4×</span>
                    </div>
                    <div className="cp-bar-row">
                      <span className="cp-bar-lab">Display</span>
                      <span className="cp-bar"><span className="cp-bar-fill mid" style={{ ['--w' as string]: '48%' }}></span></span>
                      <span className="cp-bar-val mid">3.1×</span>
                    </div>
                    <div className="cp-bar-row">
                      <span className="cp-bar-lab">CTV</span>
                      <span className="cp-bar"><span className="cp-bar-fill ok" style={{ ['--w' as string]: '18%' }}></span></span>
                      <span className="cp-bar-val ok">1.2×</span>
                    </div>
                  </div>
                  <footer className="cp-msg-foot">
                    <div className="cp-msg-cites">
                      <span className="cp-msg-cite-lab">Sources</span>
                      <a className="cp-msg-cite">GeoTwin Q3 study</a>
                      <a className="cp-msg-cite">CausalCore validation</a>
                      <a className="cp-msg-cite">Platform-reported CPA</a>
                    </div>
                    <div className="cp-msg-actions">
                      <button className="btn btn-primary btn-sm">Open reallocation plan</button>
                    </div>
                  </footer>
                </div>
              </div>
            </article>

            {/* Showcase 2 */}
            <article className="cp-show">
              <header className="cp-show-head">
                <span className="cp-show-num">02</span>
                <span className="cp-show-tag">Forecast · with caveats · Illustrative</span>
              </header>
              <div className="cp-msg cp-msg-user cp-show-user">
                <div className="cp-msg-bubble">Forecast October spend at our current ROAS target.</div>
              </div>
              <div className="cp-msg cp-msg-bot cp-show-bot">
                <div className="cp-msg-bubble cp-msg-bubble-rich">
                  <header className="cp-msg-head">
                    <span className="cp-msg-conf">Medium confidence · 72%</span>
                    <span className="cp-msg-time">0.7s</span>
                  </header>
                  <p className="cp-msg-summary">Holding ROAS ≥ 2.4 caps October spend at <b>$1.94M</b> blended. Two channels are flagged for diminishing returns past week 2.</p>
                  <div className="cp-viz cp-viz-line">
                    <svg viewBox="0 0 380 140" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="cpLine" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.32" />
                          <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                        <line x1="20" x2="370" y1="20" y2="20" /><line x1="20" x2="370" y1="60" y2="60" /><line x1="20" x2="370" y1="100" y2="100" />
                      </g>
                      <path d="M20 70 L80 64 L140 56 L200 50 L260 46 L320 44 L370 44 L370 88 L320 84 L260 80 L200 76 L140 70 L80 76 L20 86 Z" fill="rgba(0,255,194,0.08)" stroke="rgba(0,255,194,0.18)" strokeWidth="0.6" strokeDasharray="3 3" />
                      <path d="M20 92 L60 86 L100 90 L140 82 L180 78 L210 72" stroke="#00FFC2" strokeWidth="2" fill="none" />
                      <path d="M210 72 L260 66 L320 64 L370 64" stroke="#00FFC2" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                      <path d="M20 92 L60 86 L100 90 L140 82 L180 78 L210 72 L260 66 L320 64 L370 64 L370 130 L20 130 Z" fill="url(#cpLine)" />
                      <line x1="210" y1="20" x2="210" y2="120" stroke="#FFB347" strokeDasharray="3 3" strokeWidth="1" opacity="0.8" />
                      <text x="214" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FFB347" fontWeight="700">TODAY</text>
                      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5A6377">
                        <text x="20" y="138">Sep 1</text>
                        <text x="120" y="138">Sep 15</text>
                        <text x="210" y="138" fill="#FFB347">Oct 1</text>
                        <text x="280" y="138">Oct 15</text>
                        <text x="358" y="138" textAnchor="end">Oct 31</text>
                      </g>
                    </svg>
                  </div>
                  <ul className="cp-msg-points">
                    <li><b>$1.94M</b> blended cap to hold ROAS ≥ 2.4 (90% CI: $1.78M – $2.10M).</li>
                    <li><b>Diminishing returns</b> on Meta past $480K · TikTok past $260K.</li>
                    <li><b>Headroom</b> on CTV — supports +$120K without ROAS hit.</li>
                  </ul>
                  <footer className="cp-msg-foot">
                    <div className="cp-msg-cites">
                      <span className="cp-msg-cite-lab">Sources</span>
                      <a className="cp-msg-cite">Q3 saturation curve</a>
                      <a className="cp-msg-cite">CausalCore window 4w</a>
                      <a className="cp-msg-cite">Memory IQ · Oct seasonality</a>
                    </div>
                    <div className="cp-msg-actions">
                      <button className="btn btn-ghost btn-sm">Run sensitivity</button>
                      <button className="btn btn-primary btn-sm">Apply caps</button>
                    </div>
                  </footer>
                </div>
              </div>
            </article>

            {/* Showcase 3 */}
            <article className="cp-show">
              <header className="cp-show-head">
                <span className="cp-show-num">03</span>
                <span className="cp-show-tag">Decision support · pre-staged · Illustrative</span>
              </header>
              <div className="cp-msg cp-msg-user cp-show-user">
                <div className="cp-msg-bubble">Where should I move $50K to lift incremental revenue this week?</div>
              </div>
              <div className="cp-msg cp-msg-bot cp-show-bot">
                <div className="cp-msg-bubble cp-msg-bubble-rich">
                  <header className="cp-msg-head">
                    <span className="cp-msg-conf">High confidence · 84%</span>
                    <span className="cp-msg-time">0.5s</span>
                  </header>
                  <p className="cp-msg-summary">Pull <b>$50K from Branded SEM</b>. Move <b>$32K to CTV</b>, <b>$18K to YouTube Shorts</b>. Predicted incremental revenue lift: <b>+$111K</b>.</p>
                  <div className="cp-viz cp-viz-table">
                    <div className="cp-table">
                      <div className="cp-table-row cp-table-head">
                        <span>Move</span><span>From</span><span>To</span><span>Incr. ROI</span>
                      </div>
                      <div className="cp-table-row">
                        <span className="cp-table-amt bad">−$50K</span>
                        <span className="cp-from">Branded SEM</span>
                        <span className="cp-arrow" aria-hidden="true">↓</span>
                        <span className="cp-impact bad">0.09×</span>
                      </div>
                      <div className="cp-table-row">
                        <span className="cp-table-amt good">+$32K</span>
                        <span className="cp-from">→ CTV</span>
                        <span className="cp-table-pred">predicted</span>
                        <span className="cp-impact good">2.4×</span>
                      </div>
                      <div className="cp-table-row">
                        <span className="cp-table-amt good">+$18K</span>
                        <span className="cp-from">→ YouTube Shorts</span>
                        <span className="cp-table-pred">predicted</span>
                        <span className="cp-impact good">1.9×</span>
                      </div>
                      <div className="cp-table-row cp-table-total">
                        <span className="cp-table-amt good">+$111K</span>
                        <span className="cp-from">net incremental revenue</span>
                        <span className="cp-table-pred">7-day window</span>
                        <span className="cp-impact good">2.22× avg</span>
                      </div>
                    </div>
                  </div>
                  <footer className="cp-msg-foot">
                    <div className="cp-msg-cites">
                      <span className="cp-msg-cite-lab">Sources</span>
                      <a className="cp-msg-cite">GeoTwin · 4-channel</a>
                      <a className="cp-msg-cite">DiffLens · weekly</a>
                      <a className="cp-msg-cite">Memory IQ · Q4 plays</a>
                    </div>
                    <div className="cp-msg-actions">
                      <button className="btn btn-primary btn-sm">Stage in platform</button>
                      <button className="btn btn-ghost btn-sm">Edit allocation</button>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Signal graph */}
      <section className="sp-section cp-graph-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">One question.<br />Five signals. <em>One</em> answer.</h2>
            <p className="section-sub">Every Co-Pilot answer is the synthesis of five signal layers: causal lift, creative health, audience graph, decision memory, and platform-reported metrics. No single dashboard gets there.</p>
          </div>

          <div className="cp-graph">
            <div className="cp-graph-stage">
              <div className="cp-graph-glow"></div>
              <svg className="cp-graph-svg" viewBox="0 0 720 380" aria-hidden="true">
                <defs>
                  <linearGradient id="cpGraphLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00FFC2" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00FFC2" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="cpBrainGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="360" cy="190" r="170" fill="url(#cpBrainGlow)" />
                <g stroke="url(#cpGraphLine)" strokeWidth="1.4" fill="none">
                  <path id="cpL1" d="M80 100 C200 130 280 160 350 188" />
                  <path id="cpL2" d="M80 280 C200 250 280 220 350 192" />
                  <path id="cpL3" d="M640 100 C520 130 440 160 370 188" />
                  <path id="cpL4" d="M640 280 C520 250 440 220 370 192" />
                  <path id="cpL5" d="M360 30  C360 80 360 130 360 180" />
                </g>
                <g fill="#00FFC2">
                  <circle r="3"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#cpL1" /></animateMotion></circle>
                  <circle r="3"><animateMotion dur="3.4s" repeatCount="indefinite"><mpath href="#cpL2" /></animateMotion></circle>
                  <circle r="3"><animateMotion dur="2.8s" repeatCount="indefinite"><mpath href="#cpL3" /></animateMotion></circle>
                  <circle r="3"><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#cpL4" /></animateMotion></circle>
                  <circle r="3"><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href="#cpL5" /></animateMotion></circle>
                </g>
                <g transform="translate(360 190)">
                  <circle r="56" fill="rgba(7,11,22,0.9)" stroke="url(#cpGraphLine)" strokeWidth="2" />
                  <circle r="40" fill="none" stroke="rgba(0,255,194,0.35)" strokeDasharray="2 4" />
                  <g stroke="#00FFC2" strokeWidth="2" strokeLinecap="round">
                    <line x1="0" y1="-22" x2="0" y2="22" /><line x1="-22" y1="0" x2="22" y2="0" />
                    <line x1="-16" y1="-16" x2="16" y2="16" /><line x1="16" y1="-16" x2="-16" y2="16" />
                  </g>
                  <circle r="8" fill="#070B16" stroke="#00FFC2" strokeWidth="1.8" />
                </g>
              </svg>
              <span className="cp-graph-src cp-graph-s1"><b>Causal lift</b><em>GeoTwin · CausalCore · DiffLens</em></span>
              <span className="cp-graph-src cp-graph-s2"><b>Creative health</b><em>9-signal fatigue model</em></span>
              <span className="cp-graph-src cp-graph-s3"><b>Audience graph</b><em>1.2M graded profiles</em></span>
              <span className="cp-graph-src cp-graph-s4"><b>Decision memory</b><em>Pattern history</em></span>
              <span className="cp-graph-src cp-graph-s5"><b>Platform metrics</b><em>Meta · Google · TikTok</em></span>
              <span className="cp-graph-brain-lab">Co-Pilot reasoning core · Causal Reasoning Translator — our own fine-tuned model (not GPT, not Claude)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Slack alerts */}
      <section className="sp-section alt cp-slack-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">It speaks first.<br />Not just when asked.</h2>
            <p className="section-sub">The Co-Pilot ships proactive alerts to Slack or email at the cadence and severity you set. Creative fatigue, budget waste, audience saturation, incrementality drift — surfaced before the metric reveals it.</p>
          </div>

          <div className="cp-slack">
            <div className="cp-slack-chrome">
              <span className="cp-slack-hash">#</span>
              <span className="cp-slack-channel">growth-alerts</span>
              <span className="cp-slack-meta">7 alerts today · Illustrative</span>
            </div>
            <div className="cp-slack-stream">
              <div className="cp-slack-msg cp-slack-bad">
                <div className="cp-slack-avatar">🤖</div>
                <div className="cp-slack-body">
                  <div className="cp-slack-line"><b>MemoLogs Co-Pilot</b><em>09:14 AM</em><span className="cp-slack-pill bad">Creative fatigue</span></div>
                  <p>Ad set <code>SKU-447</code> health dropped to <b>24</b>. Frequency 8.4×, CTR −38%. Three refresh variants queued — predicted lift +18%.</p>
                  <div className="cp-slack-actions">
                    <button className="cp-slack-btn primary">Apply refresh</button>
                    <button className="cp-slack-btn">Open in dashboard</button>
                  </div>
                </div>
              </div>
              <div className="cp-slack-msg cp-slack-warn">
                <div className="cp-slack-avatar">🤖</div>
                <div className="cp-slack-body">
                  <div className="cp-slack-line"><b>MemoLogs Co-Pilot</b><em>09:32 AM</em><span className="cp-slack-pill mid">Memory pattern</span></div>
                  <p>Q4 paid-social scale-up to <b>$920K</b> matches <b>3 of 4 historical failure patterns</b>. Suggest cap at $650K, shift surplus to CTV.</p>
                  <div className="cp-slack-actions">
                    <button className="cp-slack-btn primary">Review pattern</button>
                    <button className="cp-slack-btn">Override</button>
                  </div>
                </div>
              </div>
              <div className="cp-slack-msg cp-slack-bad">
                <div className="cp-slack-avatar">🤖</div>
                <div className="cp-slack-body">
                  <div className="cp-slack-line"><b>MemoLogs Co-Pilot</b><em>10:08 AM</em><span className="cp-slack-pill bad">Inflation drift</span></div>
                  <p>Branded SEM inflation factor moved <b>9.6× → 11.2×</b> over the last 14 days. Reallocation plan auto-generated.</p>
                  <div className="cp-slack-actions">
                    <button className="cp-slack-btn primary">Open plan</button>
                  </div>
                </div>
              </div>
              <div className="cp-slack-msg cp-slack-good">
                <div className="cp-slack-avatar">🤖</div>
                <div className="cp-slack-body">
                  <div className="cp-slack-line"><b>MemoLogs Co-Pilot</b><em>11:24 AM</em><span className="cp-slack-pill good">All-clear</span></div>
                  <p>Weekly digest ready — CAC −12%, ROAS +0.4×, 4 active experiments healthy, 0 blocked.</p>
                  <div className="cp-slack-actions">
                    <button className="cp-slack-btn primary">View digest</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / citation + board report */}
      <section className="sp-section cp-trust-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Cited, not <em>hallucinated.</em></h2>
            <p className="section-sub">Every number the Co-Pilot shows comes from your data — pulled deterministically from SQL and the IQ modules, never written by the language model. Three hard rules keep it honest: numbers come from your data and are never invented, every claim cites the module and timestamp it drew from, and if the available data can&apos;t cover at least 70% of your question the Co-Pilot says so instead of guessing. The narration runs on our own fine-tuned model — the Causal Reasoning Translator — not GPT, not Claude.</p>
          </div>

          <div className="cp-trust-grid">
            <article className="cp-trust-card">
              <header>
                <span className="cp-trust-tag">Citation example</span>
                <h3>Every number is anchored.</h3>
              </header>
              <div className="cp-cite-demo">
                <p>
                  Tuesday&apos;s CPA spike was driven primarily by{' '}
                  <a className="cp-cite-link">creative fatigue on SKU-447 <sup>[1]</sup></a>,
                  with secondary contribution from{' '}
                  <a className="cp-cite-link">audience overlap <sup>[2]</sup></a>
                  {' '}and a doubling of{' '}
                  <a className="cp-cite-link">competitor share-of-voice <sup>[3]</sup></a>
                  {' '}in priority markets.
                </p>
                <ol className="cp-cite-list">
                  <li>
                    <span>[1]</span>
                    <div><b>Creative IQ · Health Score</b><em>SKU-447 · 24/100 · 9-signal model</em></div>
                    <a className="cp-cite-go">Open ↗</a>
                  </li>
                  <li>
                    <span>[2]</span>
                    <div><b>Audience IQ · Overlap Matrix</b><em>Retargeting × Acquisition · 64%</em></div>
                    <a className="cp-cite-go">Open ↗</a>
                  </li>
                  <li>
                    <span>[3]</span>
                    <div><b>Competitive Pressure Index</b><em>Brand X · +120% SOV · 7-day window</em></div>
                    <a className="cp-cite-go">Open ↗</a>
                  </li>
                </ol>
              </div>
            </article>

            <article className="cp-trust-card cp-trust-card-report">
              <header>
                <span className="cp-trust-tag accent">Board report</span>
                <h3>Monthly digest in one click.</h3>
              </header>
              <div className="cp-report">
                <div className="cp-report-head">
                  <div><b>Q4 · October 2026</b><span>Performance digest · auto-generated · illustrative</span></div>
                  <span className="cp-report-stamp">PDF · ready</span>
                </div>
                <div className="cp-report-rows">
                  <div><span>CAC delta</span><b className="good">−28%</b></div>
                  <div><span>ROAS delta</span><b className="good">+27%</b></div>
                  <div><span>Incremental revenue</span><b className="good">$2.9M</b></div>
                  <div><span>Inflation factor</span><b>3.0×</b></div>
                  <div><span>Creative refreshes</span><b>14 shipped</b></div>
                  <div><span>Budget reallocations</span><b>$420K</b></div>
                </div>
                <footer>
                  <button className="btn btn-primary btn-sm">Send to leadership</button>
                  <span>Generated in 6.2s · 0 analyst hours</span>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="sp-section alt cp-outcomes-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">More signal.<br />Less archaeology.</h2>
            <p className="section-sub">What happens when your team stops asking dashboards and starts asking the data.</p>
          </div>

          <div className="aq-outcomes">
            <article className="aq-outcome">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </div>
              <h3>Decisions in seconds.</h3>
              <p>What used to take a 2-hour ad-hoc pull, three Slack pings, and a follow-up doc now takes one question. Every answer arrives under a second with the chart and the next action attached.</p>
              <div className="aq-outcome-metric"><b>0.4s</b><span>median answer time</span></div>
            </article>
            <article className="aq-outcome aq-outcome-accent">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2a7 7 0 017 7c0 2.8-1.6 5.2-4 6.4V17a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1.6C6.6 14.2 5 11.8 5 9a7 7 0 017-7z" /></svg>
              </div>
              <h3>Analyst hours back.</h3>
              <p>Marketing analytics teams spend ~60% of their week on data stitching and ad-hoc pulls. The Co-Pilot absorbs that load so analysts ship strategy, not exports.</p>
              <div className="aq-outcome-metric"><b>+60%</b><span>strategy hours per analyst</span></div>
            </article>
            <article className="aq-outcome">
              <div className="aq-outcome-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 10h18M3 6h18M3 14h12M3 18h8" /></svg>
              </div>
              <h3>Always-on monitoring.</h3>
              <p>Proactive Slack and email alerts mean fatigue, drift, and waste surface in minutes — not on Monday mornings when you&apos;re already two days into the bleed.</p>
              <div className="aq-outcome-metric"><b>11–18d</b><span>earlier than CPA-based alerts</span></div>
            </article>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="sp-section cp-close-section">
        <div className="wrap">
          <blockquote className="sp-quote">
            <p>&ldquo;My board asks me hard questions. The Co-Pilot is the only tool I&apos;ve used that gives me an answer I can actually defend in the meeting.&rdquo;</p>
            <cite>CMO · Consumer tech</cite>
          </blockquote>

          <div className="sp-cta-inline">
            <div>
              <h3>Stop asking dashboards.<br />Start asking the data.</h3>
              <p>Scoping call · 30 min · free · zero obligation.</p>
            </div>
            <PilotCTA className="btn btn-primary btn-lg">Book a pilot →</PilotCTA>
          </div>

          <div className="sp-nav-next">
            <span>← <Link href="/audience-iq">Audience IQ</Link></span>
            <span><Link href="/memory-iq">Memory IQ</Link> →</span>
          </div>
        </div>
      </section>
    </>
  );
}
