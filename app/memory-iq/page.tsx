import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Memory IQ — Proprietary Signal Layer | MemoLogs",
  description: "Your first-party data, enriched and remembered. Cross-campaign signal accumulation that makes every experiment smarter than the last.",
};

export default function MemoryIQPage() {
  return (
    <>
      {/* Hero */}
      <section className="subpage-hero mem-hero" aria-labelledby="mem-h1">
        <div className="wrap">
          <div className="sp-breadcrumb"><Link href="/">Platform</Link> <span>›</span> Memory IQ</div>

          <div className="mem-hero-grid">
            <div className="mem-hero-lead">
              <span className="iq-chip iq-chip-accent">The memory system for revenue decisions</span>
              <h1 id="mem-h1">Stop paying for the <em>same mistake twice.</em></h1>
              <p className="lede">
                Every high-stakes call your team makes gets logged with its context, hypothesis, action, and outcome — then reappears at the exact moment another team member is about to repeat it. <b>Memory IQ</b> doesn&apos;t guess. It surfaces patterns your company has actually paid to learn.
              </p>

              <div className="iq-feature-chips">
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Pattern warnings before activation</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Audit-ready decision trail</span>
                <span className="iq-fchip"><span className="iq-fchip-dot"></span>Survives turnover &amp; agency swaps</span>
              </div>

              <div className="cta-row iq-cta-row">
                <Link href="/#contact" className="btn btn-primary btn-lg">Start a 90-day pilot →</Link>
                <a href="#decision-loop" className="btn btn-ghost btn-lg">See the decision loop</a>
              </div>

              <div className="iq-hero-micro">
                <span>30–40% of institutional knowledge leaves with senior hires</span>
                <span className="sep">·</span>
                <span>Memory IQ keeps it</span>
              </div>
            </div>

            <aside className="mem-stack" aria-label="Recent decisions captured by Memory IQ">
              <div className="mem-stack-stage">
                <div className="mem-card mem-card-back">
                  <div className="mem-card-head">
                    <span className="mem-card-date">Jan 2024</span>
                    <span className="mem-card-tag">Budget</span>
                  </div>
                  <p className="mem-card-body">Scale paid social to $720K in July. <em>Worked — under saturation ceiling.</em></p>
                </div>
                <div className="mem-card mem-card-mid">
                  <div className="mem-card-head">
                    <span className="mem-card-date">Oct 2023</span>
                    <span className="mem-card-tag">Budget</span>
                  </div>
                  <p className="mem-card-body">Scale paid social to $910K. <em className="bad">−18% branded SEM efficiency.</em></p>
                </div>
                <div className="mem-card mem-card-front">
                  <div className="mem-card-head">
                    <span className="mem-card-date">Oct 2024</span>
                    <span className="mem-card-tag">Budget</span>
                    <span className="mem-card-pulse" aria-hidden="true"></span>
                  </div>
                  <p className="mem-card-body">Scale paid social to <b>$880K</b>. <em className="bad">Repeat pattern — $64K wasted.</em></p>
                  <div className="mem-card-warn">
                    <span className="mem-warn-ico">⚠</span>
                    <div>
                      <b>Matches 3 of 4 historical failures</b>
                      <span>Cap at $650K · shift surplus to CTV</span>
                    </div>
                  </div>
                </div>

                <svg className="mem-stack-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="memLine" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00FFC2" stopOpacity="0" />
                      <stop offset="50%" stopColor="#00FFC2" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M25,18 C30,38 35,58 40,78" stroke="url(#memLine)" strokeWidth="0.4" fill="none" strokeDasharray="1.5 1.5" />
                  <path d="M55,18 C58,38 60,58 62,78" stroke="url(#memLine)" strokeWidth="0.4" fill="none" strokeDasharray="1.5 1.5" />
                </svg>
              </div>

              <div className="mem-stack-foot">
                <span className="mem-stack-foot-lab">Memory IQ connected</span>
                <span className="mem-stack-foot-val">3 past decisions · 2 failures</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Why existing tools fail */}
      <section className="sp-section mem-why">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Your stack captures what happened.<br />Not <em>why</em> you did it.</h2>
            <p className="section-sub">Every tool your team already uses stores information. None of them store memory — the reason behind a call, the hypothesis that drove it, the outcome six months later. That&apos;s how $64K mistakes get repeated.</p>
          </div>

          <div className="mem-why-grid">
            <article className="mem-why-card">
              <div className="mem-why-ico" data-kind="dash">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 14l3-4 3 3 4-6" /></svg>
              </div>
              <h3>Dashboards</h3>
              <p className="mem-why-sub">They show metrics, not decisions.</p>
              <p>You see results — never the call behind them. Why did budgets shift in week 3? The chart won&apos;t say.</p>
            </article>

            <article className="mem-why-card">
              <div className="mem-why-ico" data-kind="slack">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="14" height="12" rx="2" /><path d="M17 8l4-2v12l-4-2M7 10h6M7 13h4" /></svg>
              </div>
              <h3>Slack threads</h3>
              <p className="mem-why-sub">Reasoning lost in the scroll.</p>
              <p>The best strategy debate your team had this year? Buried in #growth-planning by Tuesday. Gone by Friday.</p>
            </article>

            <article className="mem-why-card">
              <div className="mem-why-ico" data-kind="docs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zM14 3v6h6M8 14h8M8 17h6" /></svg>
              </div>
              <h3>Docs &amp; wikis</h3>
              <p className="mem-why-sub">Stores information, not memory.</p>
              <p>Decisions fade as pages pile up. No one finds the Q3 retrospective when Q3 rolls around again.</p>
            </article>

            <article className="mem-why-card mem-why-card-accent">
              <div className="mem-why-ico" data-kind="memo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2M7 12a5 5 0 0010 0" /></svg>
              </div>
              <h3>Memory IQ</h3>
              <p className="mem-why-sub">Decisions &amp; outcomes, connected.</p>
              <p>A structured record of what worked, what didn&apos;t, and why. Resurfaces the moment a similar call is about to be made.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Decision types to capture */}
      <section className="sp-section alt mem-capture">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Not every task deserves a log.<br /><em>These do.</em></h2>
            <p className="section-sub">Memory IQ helps you capture the pivots, bets, and shifts that define your trajectory — and ignore the daily noise. Six decision types your team is already making. Now with a memory.</p>
          </div>

          <div className="mem-cap-grid">
            <article className="mem-cap">
              <span className="mem-cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="8" r="4" /><circle cx="17" cy="12" r="3" /><path d="M2 20c0-4 3-6 7-6s7 2 7 6M14 20c0-2 2-4 4-4s4 2 4 4" /></svg>
              </span>
              <h4>Audience targeting &amp; channel shifts</h4>
              <p>Expanding to a new geo. Switching from influencer to UGC. Moving spend from Meta to CTV.</p>
            </article>
            <article className="mem-cap">
              <span className="mem-cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 6h16v10H4z" /><path d="M8 20h8M12 16v4M8 10l3 2 3-4 3 3" /></svg>
              </span>
              <h4>Creative strategy &amp; hypotheses</h4>
              <p>A new brand angle. A testimonial format. A hook you believe will outperform — and why.</p>
            </article>
            <article className="mem-cap">
              <span className="mem-cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2v20M5 8l7-6 7 6M5 16l7 6 7-6" /></svg>
              </span>
              <h4>Budget re-allocation &amp; major spend</h4>
              <p>Scale-ups above $100K. Cuts during demand dips. Re-baselining after a Q4 push.</p>
            </article>
            <article className="mem-cap">
              <span className="mem-cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M9 5v14M3 12h6M15 12h6" /></svg>
              </span>
              <h4>A/B tests &amp; rotations</h4>
              <p>Copy tests that moved CTR. Image rotations that lifted Quality Score. Landing-page swaps.</p>
            </article>
            <article className="mem-cap">
              <span className="mem-cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 20l4-4 4 3 5-7 5 5" /><circle cx="15" cy="12" r="1.5" /></svg>
              </span>
              <h4>Unexpected drops &amp; recovery</h4>
              <p>CPA spikes and what fixed them. Attribution breaks and the workaround. Frequency capping that worked.</p>
            </article>
            <article className="mem-cap">
              <span className="mem-cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 20V10h4v10M12 20V6h4v14M20 20v-7" /></svg>
              </span>
              <h4>Launches &amp; new bets</h4>
              <p>A freemium tier. A pricing experiment. A new product line. The reasoning — and what shipped.</p>
            </article>
          </div>

          <div className="mem-cap-note">
            <span className="mem-cap-note-bar"></span>
            <p>These tasks happen every day but rarely influence your bottom line — spend pacing tweaks, minor bid adjustments, routine creative swaps. Don&apos;t clutter your decision history with them. Memory IQ helps you separate the signal from the ritual.</p>
          </div>
        </div>
      </section>

      {/* Decision loop */}
      <section className="sp-section mem-loop-section" id="decision-loop">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">The Decision Loop.</h2>
            <p className="section-sub">Context → Hypothesis → Action → Outcome → Memory. Every call your team makes gets logged — and becomes training data for the next one. The result: a system that remembers what worked, what didn&apos;t, and why.</p>
          </div>

          <ol className="mem-loop">
            <li className="mem-loop-step">
              <div className="mem-loop-num">01</div>
              <div className="mem-loop-body">
                <h4>Context</h4>
                <p>What the numbers looked like that week. Audience, spend, constraints, and the market conditions that mattered.</p>
              </div>
            </li>
            <li className="mem-loop-step">
              <div className="mem-loop-num">02</div>
              <div className="mem-loop-body">
                <h4>Hypothesis</h4>
                <p>What you believe will happen — and why. The theory of the case, captured before the result can bias the story.</p>
              </div>
            </li>
            <li className="mem-loop-step">
              <div className="mem-loop-num">03</div>
              <div className="mem-loop-body">
                <h4>Action</h4>
                <p>What changed. Budget shifted, creative swapped, audience tested — logged with owner, date, and scope.</p>
              </div>
            </li>
            <li className="mem-loop-step">
              <div className="mem-loop-num">04</div>
              <div className="mem-loop-body">
                <h4>Outcome</h4>
                <p>What actually happened after. Measured automatically from your platforms, tagged as hit, miss, or mixed.</p>
              </div>
            </li>
            <li className="mem-loop-step mem-loop-step-accent">
              <div className="mem-loop-num">05</div>
              <div className="mem-loop-body">
                <h4>Memory</h4>
                <p>The embedding model connects this decision to every structurally similar one. The next similar call gets the warning — and the receipt.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Warning card */}
      <section className="sp-section alt mem-warn-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Memory IQ caught this<br /><em>before</em> we activated.</h2>
            <p className="section-sub">The signature moment: a team member stages a plan, hits &ldquo;activate,&rdquo; and Memory IQ pauses the button — because three similar decisions in the past cost you money. Here&apos;s what the warning looks like.</p>
          </div>

          <div className="mem-warn-card">
            <div className="mem-warn-pending">
              <header>
                <span className="mem-warn-lab">Pending activation</span>
                <span className="mem-warn-plan">Q4 Paid Social Scale-up</span>
              </header>
              <div className="mem-warn-plan-body">
                <p>Scale Meta + TikTok to <b>$920K/mo</b> through October.</p>
                <p className="mem-warn-hyp"><b>Hypothesis:</b> Q4 seasonal demand will absorb additional spend.</p>
                <p className="mem-warn-owner">Owner: VP Growth · Staged by: @ritvik · Ready to activate</p>
              </div>
              <div className="mem-warn-cta-row">
                <button className="btn btn-dark btn-sm" disabled>Activate</button>
                <span className="mem-warn-hold">⚠ Memory IQ is holding this — review below</span>
              </div>
            </div>

            <div className="mem-warn-match">
              <header>
                <span className="mem-warn-match-ico">!</span>
                <h3>Matches 3 of 4 historical failure patterns</h3>
                <span className="mem-warn-match-conf">94% similarity</span>
              </header>

                <div className="mem-warn-table-wrap">
                    <table className="mem-warn-table">
                        <thead>
                        <tr><th>Date</th><th>What we did</th><th>Outcome</th><th>Signal</th></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Oct &apos;24</td>
                            <td>Scaled paid social to $880K/mo</td>
                            <td className="neg">−18% branded SEM</td>
                            <td><span className="mem-sig bad">Repeat</span></td>
                        </tr>
                        <tr>
                            <td>Oct &apos;23</td>
                            <td>Scaled paid social to $910K/mo</td>
                            <td className="neg">+$64K wasted on retargeting overlap</td>
                            <td><span className="mem-sig bad">Repeat</span></td>
                        </tr>
                        <tr>
                            <td>Oct &apos;22</td>
                            <td>Scaled paid social to $840K/mo</td>
                            <td className="neg">Creative fatigue · CAC +31%</td>
                            <td><span className="mem-sig bad">Repeat</span></td>
                        </tr>
                        <tr className="mem-success">
                            <td>Jul &apos;24</td>
                            <td>Scaled paid social to $720K/mo</td>
                            <td className="pos">Successful · under saturation ceiling</td>
                            <td><span className="mem-sig good">Work</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

              <div className="mem-warn-reco">
                <span className="mem-warn-reco-tag">Pattern-aware recommendation</span>
                <p>Cap Meta + TikTok at <b>$650K/mo</b>. Shift surplus to CTV (which returned <b>2.1× incremental ROI</b> in historical Q4 windows). Re-evaluate at week 3 of the flight.</p>
                <div className="mem-warn-reco-actions">
                  <button className="btn btn-primary btn-sm">Apply recommendation</button>
                  <button className="btn btn-ghost btn-sm">Override with reason</button>
                </div>
              </div>
            </div>
          </div>

          <p className="mem-warn-caption">Every pattern warning ships with the receipts. Override when you&apos;re right — and Memory IQ logs the override reason so it learns from you too.</p>
        </div>
      </section>

      {/* Search dashboard */}
      <section className="sp-section mem-search-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Search your <em>organization&apos;s</em> memory.</h2>
            <p className="section-sub">Every decision is searchable in natural language. Ask the questions your company already knows the answer to — and get the receipts.</p>
          </div>

          <div className="mem-dashboard">
            <div className="mem-dash-chrome">
              <div className="mem-dash-dots" aria-hidden="true"><span></span><span></span><span></span></div>
              <div className="mem-dash-tab">MemoLogs · Learning review</div>
              <div className="mem-dash-user">RS</div>
            </div>

            <div className="mem-dash-body">
              <div className="mem-search-bar">
                <span className="mem-search-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
                </span>
                <input type="text" defaultValue="Why did CPA spike last time we scaled Meta in Q4?" readOnly aria-label="Search decision memory" />
                <span className="mem-search-kbd">⌘ K</span>
              </div>

              <div className="mem-search-suggest">
                <span className="mem-search-suggest-lab">Try:</span>
                <button className="mem-search-chip">What changes after we refresh creatives?</button>
                <button className="mem-search-chip">Why don&apos;t we spend on X channel?</button>
                <button className="mem-search-chip">Where did Q3 paid social tank?</button>
              </div>

              <div className="mem-search-results">
                <div className="mem-result mem-result-hit">
                  <div className="mem-result-left">
                    <span className="mem-result-date">Oct 2024</span>
                    <span className="mem-result-tag">Budget</span>
                  </div>
                  <div className="mem-result-body">
                    <b>Scale paid social to $880K/mo</b>
                    <p>Frequency crossed 11× on primary retargeting segment by week 2. Overlap with acquisition segment hit 64%.</p>
                    <div className="mem-result-meta">
                      <span className="mem-outcome neg">Outcome · −18% branded SEM</span>
                      <span className="mem-sim">Similarity 94%</span>
                    </div>
                  </div>
                </div>
                <div className="mem-result">
                  <div className="mem-result-left">
                    <span className="mem-result-date">Oct 2023</span>
                    <span className="mem-result-tag">Budget</span>
                  </div>
                  <div className="mem-result-body">
                    <b>Scale paid social to $910K/mo</b>
                    <p>Creative fatigue flagged on ad set SKU-447 the week before scale. Refresh was delayed two weeks.</p>
                    <div className="mem-result-meta">
                      <span className="mem-outcome neg">Outcome · +$64K wasted on retargeting overlap</span>
                      <span className="mem-sim">Similarity 91%</span>
                    </div>
                  </div>
                </div>
                <div className="mem-result mem-result-good">
                  <div className="mem-result-left">
                    <span className="mem-result-date">Jul 2024</span>
                    <span className="mem-result-tag">Budget</span>
                  </div>
                  <div className="mem-result-body">
                    <b>Scale paid social to $720K/mo</b>
                    <p>Held under historical saturation ceiling. Creative refresh preceded scale by 5 days. Audience overlap at 38%.</p>
                    <div className="mem-result-meta">
                      <span className="mem-outcome pos">Outcome · +1.6× ROAS in the flight</span>
                      <span className="mem-sim">Similarity 76%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mem-dash-foot">
                <span>12 decisions · 4 direct matches · Oldest: Mar 2022</span>
                <span className="mem-dash-compute">Answered in 0.4s · semantic + structural match</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three steps */}
      <section className="sp-section alt mem-steps-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Decision memory in three steps.</h2>
            <p className="section-sub">No heavy setup. No rigid workflows. Memory IQ slots into the tools your team already uses — Slack, your dashboard, your activation platform — and captures the moves that matter.</p>
          </div>

          <div className="mem-steps">
            <article className="mem-step">
              <div className="mem-step-head">
                <span className="mem-step-num">01</span>
                <span className="mem-step-lab">Capture</span>
              </div>
              <h3>Log decisions where work happens.</h3>
              <p>A 30-second Slack command, a dashboard button, or an automatic capture from staged campaign changes. Owner, hypothesis, scope — done.</p>
              <div className="mem-step-mock">
                <span className="mem-slack-chip">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><rect x="4" y="10" width="16" height="4" rx="2" /></svg>
                  /memo
                </span>
                <div className="mem-slack-bubble">
                  <b>@ritvik</b>
                  <span>Scaling Meta to $920K Q4. Hypothesis: Q4 seasonal demand absorbs +15% spend.</span>
                </div>
              </div>
            </article>

            <article className="mem-step">
              <div className="mem-step-head">
                <span className="mem-step-num">02</span>
                <span className="mem-step-lab">Connect</span>
              </div>
              <h3>Memory IQ connects the dots.</h3>
              <p>An embedding model finds structural similarity between decisions — not just keyword matches. Platform, spend shape, audience, and timing all count.</p>
              <div className="mem-step-mock mem-graph">
                <svg viewBox="0 0 260 120" aria-hidden="true">
                  <defs>
                    <radialGradient id="mg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="130" cy="60" r="50" fill="url(#mg)" opacity="0.5" />
                  <g stroke="rgba(0,255,194,0.45)" strokeWidth="1" strokeDasharray="2 3">
                    <line x1="130" y1="60" x2="40" y2="30" /><line x1="130" y1="60" x2="40" y2="95" />
                    <line x1="130" y1="60" x2="220" y2="25" /><line x1="130" y1="60" x2="220" y2="90" />
                    <line x1="130" y1="60" x2="130" y2="110" />
                  </g>
                  <circle cx="130" cy="60" r="12" fill="#00FFC2" />
                  <text x="130" y="64" textAnchor="middle" fontFamily="Inter" fontSize="8" fill="#0A0F1D" fontWeight="700">NOW</text>
                  <g fill="#0F1628" stroke="#00FFC2" strokeWidth="1">
                    <circle cx="40" cy="30" r="8" /><circle cx="40" cy="95" r="8" />
                    <circle cx="220" cy="25" r="8" /><circle cx="220" cy="90" r="8" />
                    <circle cx="130" cy="110" r="8" />
                  </g>
                  <g fontFamily="JetBrains Mono" fontSize="8" fill="#8A93A6">
                    <text x="40" y="20" textAnchor="middle">Oct &apos;24</text>
                    <text x="40" y="112" textAnchor="middle">Oct &apos;23</text>
                    <text x="220" y="15" textAnchor="middle">Oct &apos;22</text>
                    <text x="220" y="107" textAnchor="middle">Jul &apos;24</text>
                  </g>
                </svg>
                <span className="mem-graph-lab">5 structurally similar decisions · 3 failed</span>
              </div>
            </article>

            <article className="mem-step">
              <div className="mem-step-head">
                <span className="mem-step-num">03</span>
                <span className="mem-step-lab">Consult</span>
              </div>
              <h3>Warnings before activation.</h3>
              <p>When you stage a new campaign, Memory IQ runs it against the graph and surfaces matches before activation — plus a pattern-aware recommendation you can apply or override.</p>
              <div className="mem-step-mock mem-toast">
                <span className="mem-toast-ico">⚠</span>
                <div>
                  <b>Occurred in 4 of 5 similar cases</b>
                  <span>Scaling Meta above $800K in Oct compressed branded SEM efficiency. Suggest $650K cap.</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Transform — two meetings */}
      <section className="sp-section mem-transform-section">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Six months from now.<br />Two very different meetings.</h2>
            <p className="section-sub">Same team. Same problem resurfacing. Without Memory IQ, the conversation starts from zero every time. With it, every meeting picks up where the last one left off.</p>
          </div>

          <div className="mem-transform">
            <article className="mem-transform-col mem-without">
              <header>
                <span className="mem-transform-tag">Without Memory IQ</span>
                <h3>July — six months later.</h3>
              </header>
              <div className="mem-dialogue">
                <div className="mem-bubble mem-bubble-red">&ldquo;Hey, we should try a freemium tier.&rdquo;</div>
                <div className="mem-bubble mem-bubble-red mem-bubble-right">&ldquo;Let&apos;s try this again — I think we tested it before?&rdquo;</div>
                <div className="mem-bubble mem-bubble-red">&ldquo;Reason lost in Slack… was it the pricing that tanked it?&rdquo;</div>
                <div className="mem-bubble mem-bubble-red mem-bubble-right">&ldquo;Idk, our VP left in March.&rdquo;</div>
              </div>
              <footer className="mem-without-foot">
                <span>Re-testing the same idea unknowingly.</span>
              </footer>
            </article>

            <article className="mem-transform-col mem-with">
              <header>
                <span className="mem-transform-tag good">With Memory IQ</span>
                <h3>July — same six months later.</h3>
              </header>
              <div className="mem-dialogue">
                <div className="mem-bubble mem-bubble-green">&ldquo;Hey, we should try a freemium tier.&rdquo;</div>
                <div className="mem-bubble mem-bubble-memo">
                  <b>Memory IQ · 2 matches</b>
                  <span>Tested Jan &apos;24. Failed — Day-1 conversion dropped 22% when paywall was deferred. <em>VP&apos;s note: &ldquo;revisit after we fix onboarding.&rdquo;</em></span>
                </div>
                <div className="mem-bubble mem-bubble-green mem-bubble-right">&ldquo;Oh — so let&apos;s fix onboarding first, then try again with early teaser emails.&rdquo;</div>
                <div className="mem-bubble mem-bubble-memo">
                  <b>Memory IQ · related learning</b>
                  <span>Early teaser emails increased Day 1 conversion by <b>+14%</b> last time they were tried. Pattern confirmed on 3 similar launches.</span>
                </div>
              </div>
              <footer className="mem-with-foot">
                <span><b>Building on what your organization already knows.</b></span>
              </footer>
            </article>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="sp-section alt">
        <div className="wrap">
          <blockquote className="sp-quote">
            <p>&ldquo;My VP left last year. Six months later, Memory IQ caught me about to repeat a budget mistake she had flagged three years before I arrived. That single save paid for the year.&rdquo;</p>
            <cite>Marketing Director · Multi-brand retail</cite>
          </blockquote>

          <div className="sp-cta-inline">
            <div>
              <h3>See your decisions remember themselves.</h3>
              <p>Scoping call · 30 min · free · zero obligation.</p>
            </div>
            <Link href="/#contact" className="btn btn-primary btn-lg">Book a pilot →</Link>
          </div>

          <div className="sp-nav-next">
            <span>← <Link href="/copilot">AI Co-Pilot</Link></span>
            <span><Link href="/case-studies">Case studies</Link> →</span>
          </div>
        </div>
      </section>
    </>
  );
}
