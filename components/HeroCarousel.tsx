'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroCarousel() {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = () => {
    setSlide(s => (s + 1) % 2);
  };

  useEffect(() => {
    timerRef.current = setTimeout(advance, 7000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [slide]);

  return (
    <aside className="hero-carousel" aria-label="MemoLogs overview">
      {/* Slide 1: Platform architecture */}
      <div className={`hc-slide${slide === 0 ? ' active' : ''}`} data-index="0">
        <div className="hc-head">
          <span className="hc-label">The platform, at a glance</span>
          <span className="hc-tag">System view</span>
        </div>
        <div className="hc-body arch">
          <svg viewBox="-40 -20 440 320" xmlns="http://www.w3.org/2000/svg" className="arch-svg" aria-hidden="true">
            <g className="arch-rings">
              <circle cx="180" cy="130" r="60" fill="none" stroke="rgba(0,255,194,0.14)" strokeDasharray="2 4" />
              <circle cx="180" cy="130" r="100" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 4" />
            </g>
            <g className="arch-lines" stroke="rgba(0,255,194,0.4)" strokeWidth="1">
              <line x1="180" y1="130" x2="78" y2="56" />
              <line x1="180" y1="130" x2="282" y2="56" />
              <line x1="180" y1="130" x2="30" y2="170" />
              <line x1="180" y1="130" x2="330" y2="170" />
              <line x1="180" y1="130" x2="180" y2="240" />
            </g>
            <g className="arch-hub" transform="translate(180 130)">
              <circle r="34" fill="#070B16" stroke="#00FFC2" strokeWidth="1.5" />
              <g stroke="#00FFC2" strokeWidth="1.6" strokeLinecap="round">
                <line x1="0" y1="-14" x2="0" y2="14" />
                <line x1="-14" y1="0" x2="14" y2="0" />
                <line x1="-10" y1="-10" x2="10" y2="10" />
                <line x1="10" y1="-10" x2="-10" y2="10" />
              </g>
              <circle r="4" fill="#070B16" stroke="#00FFC2" strokeWidth="1.4" />
              <text y="-44" textAnchor="middle" className="arch-hub-lab">MEMOLOGS CORE</text>
              <text y="50" textAnchor="middle" className="arch-hub-sub">Unified signal graph</text>
            </g>
            <g className="arch-node" data-slot="tl">
              <circle cx="78" cy="56" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
              <text x="78" y="60" textAnchor="middle" className="arch-node-idx">01</text>
              <text x="78" y="24" textAnchor="middle" className="arch-node-name">Incrementality IQ</text>
              <text x="78" y="100" textAnchor="middle" className="arch-node-role">Causal proof</text>
            </g>
            <g className="arch-node" data-slot="tr">
              <circle cx="282" cy="56" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
              <text x="282" y="60" textAnchor="middle" className="arch-node-idx">02</text>
              <text x="282" y="24" textAnchor="middle" className="arch-node-name">Creative IQ</text>
              <text x="282" y="100" textAnchor="middle" className="arch-node-role">Fatigue model</text>
            </g>
            <g className="arch-node" data-slot="l">
              <circle cx="30" cy="170" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
              <text x="30" y="174" textAnchor="middle" className="arch-node-idx">03</text>
              <text x="30" y="210" textAnchor="middle" className="arch-node-name">Audience IQ</text>
              <text x="30" y="224" textAnchor="middle" className="arch-node-role">6 agents</text>
            </g>
            <g className="arch-node" data-slot="r">
              <circle cx="330" cy="170" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
              <text x="330" y="174" textAnchor="middle" className="arch-node-idx">04</text>
              <text x="330" y="210" textAnchor="middle" className="arch-node-name">AI Co-Pilot</text>
              <text x="330" y="224" textAnchor="middle" className="arch-node-role">Ask anything</text>
            </g>
            <g className="arch-node arch-node-accent" data-slot="b">
              <circle cx="180" cy="240" r="18" fill="#00FFC2" stroke="#00FFC2" />
              <text x="180" y="245" textAnchor="middle" className="arch-node-idx arch-node-idx-dark">05</text>
              <text x="180" y="278" textAnchor="middle" className="arch-node-name">Memory IQ</text>
              <text x="180" y="292" textAnchor="middle" className="arch-node-role">Compounding graph</text>
            </g>
          </svg>
        </div>
        <div className="hc-foot arch-foot">
          <div className="arch-foot-item"><b>One data layer.</b> Every IQ shares signals.</div>
          <div className="arch-foot-item"><b>One memory.</b> Every decision compounds.</div>
        </div>
      </div>

      {/* Slide 2: One channel. Two numbers. */}
      <div className={`hc-slide${slide === 1 ? ' active' : ''}`} data-index="1">
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
      </div>
    </aside>
  );
}
