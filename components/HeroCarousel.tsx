'use client';

import { useEffect, useRef, useState } from 'react';

const SLIDE_COUNT = 3;

export default function HeroCarousel() {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = () => {
    setSlide(s => (s + 1) % SLIDE_COUNT);
  };

  useEffect(() => {
    timerRef.current = setTimeout(advance, 7000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [slide]);

  return (
    <aside className="hero-carousel" aria-label="MemoLogs overview">
      {/* Slide 1: Memory-centric architecture */}
      <div className={`hc-slide${slide === 0 ? ' active' : ''}`} data-index="0">
        <div className="hc-head">
          <span className="hc-label">Held together by memory</span>
          <span className="hc-tag">System view</span>
        </div>
        <div className="hc-body arch">
          <svg viewBox="-40 -10 440 320" xmlns="http://www.w3.org/2000/svg" className="arch-svg arch-svg-mem" aria-hidden="true">
            <defs>
              <radialGradient id="memCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#00D4A3" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.25" />
              </radialGradient>
            </defs>

            {/* Concentric rings around memory */}
            <g className="arch-rings">
              <circle cx="180" cy="140" r="58"  fill="none" stroke="rgba(0,255,194,0.22)" strokeDasharray="2 4" />
              <circle cx="180" cy="140" r="92"  fill="none" stroke="rgba(0,255,194,0.13)" strokeDasharray="2 4" />
              <circle cx="180" cy="140" r="124" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 6" />
            </g>

            {/* Connector lines from each product to memory hub */}
            <g className="arch-lines" stroke="rgba(0,255,194,0.32)" strokeWidth="1">
              <line x1="180" y1="140" x2="60"  y2="46" />
              <line x1="180" y1="140" x2="300" y2="46" />
              <line x1="180" y1="140" x2="60"  y2="234" />
              <line x1="180" y1="140" x2="300" y2="234" />
            </g>

            {/* Animated signal pulses flowing INTO memory */}
            <g className="arch-pulses" aria-hidden="true">
              <circle r="2.5" fill="#00FFC2" className="arch-pulse arch-pulse-1" />
              <circle r="2.5" fill="#00FFC2" className="arch-pulse arch-pulse-2" />
              <circle r="2.5" fill="#00FFC2" className="arch-pulse arch-pulse-3" />
              <circle r="2.5" fill="#00FFC2" className="arch-pulse arch-pulse-4" />
            </g>

            {/* Memory hub (center, accented) */}
            <g className="arch-hub arch-hub-memory" transform="translate(180 140)">
              <circle r="44" fill="url(#memCore)" stroke="#00FFC2" strokeWidth="1.5" className="arch-hub-glow" />
              <circle r="34" fill="#070B16" stroke="#00FFC2" strokeWidth="1.4" />
              {/* Stylised memory glyph: stacked neural lines */}
              <g stroke="#00FFC2" strokeWidth="1.3" strokeLinecap="round" fill="none">
                <path d="M -16 -8 Q -8 -14 0 -8 Q 8 -2 16 -8" />
                <path d="M -16  0 Q -8 -6 0  0 Q 8  6 16  0" />
                <path d="M -16  8 Q -8  2 0  8 Q 8 14 16  8" />
              </g>
              <circle r="3" cx="-16" cy="-8" fill="#00FFC2" />
              <circle r="3" cx="16"  cy="-8" fill="#00FFC2" />
              <circle r="3" cx="-16" cy="0"  fill="#00FFC2" />
              <circle r="3" cx="16"  cy="0"  fill="#00FFC2" />
              <circle r="3" cx="-16" cy="8"  fill="#00FFC2" />
              <circle r="3" cx="16"  cy="8"  fill="#00FFC2" />
              <text y="-56" textAnchor="middle" className="arch-hub-lab">MEMORY IQ</text>
              <text y="62" textAnchor="middle" className="arch-hub-sub">Remembers why it worked</text>
            </g>

            {/* Orbiting products */}
            <g className="arch-node" data-slot="tl">
              <circle cx="60" cy="46" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
              <text x="60" y="50" textAnchor="middle" className="arch-node-idx">01</text>
              <text x="60" y="14" textAnchor="middle" className="arch-node-name">Incrementality IQ</text>
              <text x="60" y="90" textAnchor="middle" className="arch-node-role">Measures causality</text>
            </g>
            <g className="arch-node" data-slot="tr">
              <circle cx="300" cy="46" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
              <text x="300" y="50" textAnchor="middle" className="arch-node-idx">02</text>
              <text x="300" y="14" textAnchor="middle" className="arch-node-name">Creative IQ</text>
              <text x="300" y="90" textAnchor="middle" className="arch-node-role">Fixes creative</text>
            </g>
            <g className="arch-node" data-slot="bl">
              <circle cx="60" cy="234" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
              <text x="60" y="238" textAnchor="middle" className="arch-node-idx">03</text>
              <text x="60" y="202" textAnchor="middle" className="arch-node-name">Audience IQ</text>
              <text x="60" y="278" textAnchor="middle" className="arch-node-role">Targets buyers</text>
            </g>
            <g className="arch-node" data-slot="br">
              <circle cx="300" cy="234" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
              <text x="300" y="238" textAnchor="middle" className="arch-node-idx">04</text>
              <text x="300" y="202" textAnchor="middle" className="arch-node-name">AI Co-Pilot</text>
              <text x="300" y="278" textAnchor="middle" className="arch-node-role">Asks anything</text>
            </g>
          </svg>
        </div>
        <div className="hc-foot arch-foot">
          <div className="arch-foot-item"><b>Signals in.</b> Every campaign teaches memory.</div>
          <div className="arch-foot-item"><b>Decisions out.</b> Memory teaches every campaign.</div>
        </div>
      </div>

      {/* Slide 2: Four verbs */}
      <div className={`hc-slide${slide === 1 ? ' active' : ''}`} data-index="1">
        <div className="hc-head">
          <span className="hc-label">Four verbs. One memory.</span>
          <span className="hc-tag">What the platform actually does</span>
        </div>
        <div className="hc-body verbs">
          <div className="verb-grid">
            <div className="verb-card">
              <div className="verb-glyph" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="6" y="16" width="5" height="12" rx="1" opacity="0.55" />
                  <rect x="21" y="6" width="5" height="22" rx="1" fill="currentColor" stroke="none" />
                  <path d="M13 11 L19 7" />
                  <path d="M16.5 7 L19 7 L19 9.5" />
                </svg>
              </div>
              <div className="verb-card-body">
                <span className="verb-word">Measures</span>
                <span className="verb-obj">causality</span>
              </div>
              <span className="verb-prod">Incrementality IQ</span>
            </div>

            <div className="verb-card">
              <div className="verb-glyph" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M4 11 Q9 9 14 13 T26 22" />
                  <line x1="22" y1="11" x2="22" y2="18" strokeDasharray="1.5 2" opacity="0.6" />
                  <circle cx="22" cy="21" r="2.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="verb-card-body">
                <span className="verb-word">Catches</span>
                <span className="verb-obj">creative fatigue</span>
              </div>
              <span className="verb-prod">Creative IQ</span>
            </div>

            <div className="verb-card">
              <div className="verb-glyph" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="16" cy="16" r="11" opacity="0.4" />
                  <circle cx="16" cy="16" r="7" opacity="0.75" />
                  <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none" />
                  <circle cx="7" cy="10" r="1.6" fill="currentColor" stroke="none" opacity="0.75" />
                  <circle cx="25" cy="22" r="1.6" fill="currentColor" stroke="none" opacity="0.75" />
                </svg>
              </div>
              <div className="verb-card-body">
                <span className="verb-word">Grades</span>
                <span className="verb-obj">buyers</span>
              </div>
              <span className="verb-prod">Audience IQ</span>
            </div>

            <div className="verb-card verb-card-accent">
              <div className="verb-glyph" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <line x1="8" y1="8" x2="16" y2="16" opacity="0.55" />
                  <line x1="24" y1="8" x2="16" y2="16" opacity="0.55" />
                  <line x1="8" y1="24" x2="16" y2="16" opacity="0.55" />
                  <line x1="24" y1="24" x2="16" y2="16" opacity="0.55" />
                  <circle cx="16" cy="16" r="4" fill="currentColor" stroke="none" />
                  <circle cx="8" cy="8" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />
                  <circle cx="24" cy="8" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />
                  <circle cx="8" cy="24" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />
                  <circle cx="24" cy="24" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />
                </svg>
              </div>
              <div className="verb-card-body">
                <span className="verb-word">Remembers</span>
                <span className="verb-obj"><em>why</em> it worked</span>
              </div>
              <span className="verb-prod">Memory IQ</span>
            </div>
          </div>
        </div>
        <div className="hc-foot verbs-foot">
          <div className="verbs-foot-line">All four. One memory. Each one teaches the next.</div>
        </div>
      </div>

      {/* Slide 3: One channel. Two numbers. */}
      <div className={`hc-slide${slide === 2 ? ' active' : ''}`} data-index="2">
        <div className="hc-head">
          <span className="hc-label">One channel. Two numbers.</span>
          <span className="hc-tag">Outcome view · from a pilot</span>
        </div>
        <div className="hc-body spot-grid">
          <div className="spot-cell spot-reported">
            <div className="spot-small">What Meta reported</div>
            <div className="spot-num">$8<span className="spot-unit">CPA</span></div>
            <div className="spot-meta">12,500 conversions · Budget: scale up ▲</div>
          </div>
          <div className="spot-arrow" aria-hidden="true">
            <svg width="40" height="20" viewBox="0 0 40 20"><path d="M2 10h34M28 2l8 8-8 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square" /></svg>
          </div>
          <div className="spot-cell spot-real">
            <div className="spot-small">What MemoLogs proved</div>
            <div className="spot-num">$24<span className="spot-unit">incremental CPA</span></div>
            <div className="spot-meta">4,200 true conversions · Budget: reallocate ▶</div>
          </div>
        </div>
        <div className="hc-foot spot-foot">
          <div className="inflation-factor">
            <span className="if-label">Attribution inflation factor</span>
            <span className="if-value">3.0×</span>
          </div>
          <div className="spot-copy">Scaling this budget would have torched $180K/mo on conversions that were going to happen anyway.</div>
        </div>
      </div>

      {/* Progress pills */}
      <div className="hc-progress" aria-hidden="true">
        <span className={`hc-pill${slide === 0 ? ' active' : slide > 0 ? ' done' : ''}`} onClick={() => setSlide(0)}>
          <span className="hc-pill-fill"></span>
        </span>
        <span className={`hc-pill${slide === 1 ? ' active' : slide > 1 ? ' done' : ''}`} onClick={() => setSlide(1)}>
          <span className="hc-pill-fill"></span>
        </span>
        <span className={`hc-pill${slide === 2 ? ' active' : slide > 2 ? ' done' : ''}`} onClick={() => setSlide(2)}>
          <span className="hc-pill-fill"></span>
        </span>
      </div>
    </aside>
  );
}
