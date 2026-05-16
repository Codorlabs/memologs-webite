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
          <div className="verb-row">
            <span className="verb-word">Measures</span>
            <span className="verb-obj">causality</span>
            <span className="verb-prod">Incrementality IQ</span>
          </div>
          <div className="verb-row">
            <span className="verb-word">Fixes</span>
            <span className="verb-obj">creative</span>
            <span className="verb-prod">Creative IQ</span>
          </div>
          <div className="verb-row">
            <span className="verb-word">Targets</span>
            <span className="verb-obj">buyers</span>
            <span className="verb-prod">Audience IQ</span>
          </div>
          <div className="verb-row verb-row-accent">
            <span className="verb-word">Remembers</span>
            <span className="verb-obj"><em>why</em> it all worked</span>
            <span className="verb-prod">Memory IQ</span>
          </div>
        </div>
        <div className="hc-foot verbs-foot">
          <div className="verbs-foot-line">The only platform that does all four — and lets each one teach the next.</div>
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
