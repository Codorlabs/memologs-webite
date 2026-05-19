'use client';

export default function HeroCarousel() {
  return (
    <aside className="hero-visual" aria-label="MemoLogs platform — memory at the core">
      <div className="hv-head">
        <span className="hv-label"><span className="hv-dot"></span> Held together by memory</span>
        <span className="hv-tag">Platform view</span>
      </div>

      <div className="hv-stage">
        <svg viewBox="-40 -10 440 320" xmlns="http://www.w3.org/2000/svg" className="arch-svg arch-svg-mem hv-svg" aria-hidden="true">
          <defs>
            <radialGradient id="hvMemCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#00D4A3" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.25" />
            </radialGradient>
          </defs>

          {/* Concentric rings */}
          <g className="arch-rings">
            <circle cx="180" cy="140" r="58"  fill="none" stroke="rgba(0,255,194,0.22)" strokeDasharray="2 4" />
            <circle cx="180" cy="140" r="92"  fill="none" stroke="rgba(0,255,194,0.13)" strokeDasharray="2 4" />
            <circle cx="180" cy="140" r="124" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 6" />
          </g>

          {/* Connector lines from each product to memory */}
          <g className="arch-lines" stroke="rgba(0,255,194,0.32)" strokeWidth="1">
            <line x1="180" y1="140" x2="60"  y2="46" />
            <line x1="180" y1="140" x2="300" y2="46" />
            <line x1="180" y1="140" x2="60"  y2="234" />
            <line x1="180" y1="140" x2="300" y2="234" />
          </g>

          {/* Signal pulses flowing INTO memory */}
          <g className="arch-pulses" aria-hidden="true">
            <circle r="3" fill="#00FFC2" className="arch-pulse arch-pulse-1" />
            <circle r="3" fill="#00FFC2" className="arch-pulse arch-pulse-2" />
            <circle r="3" fill="#00FFC2" className="arch-pulse arch-pulse-3" />
            <circle r="3" fill="#00FFC2" className="arch-pulse arch-pulse-4" />
          </g>

          {/* Memory hub (center) */}
          <g className="arch-hub arch-hub-memory" transform="translate(180 140)">
            <circle r="44" fill="url(#hvMemCore)" stroke="#00FFC2" strokeWidth="1.5" className="arch-hub-glow" />
            <circle r="34" fill="#070B16" stroke="#00FFC2" strokeWidth="1.4" />
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
          <g className="arch-node">
            <circle cx="60" cy="46" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
            <text x="60" y="50" textAnchor="middle" className="arch-node-idx">01</text>
            <text x="60" y="14" textAnchor="middle" className="arch-node-name">Incrementality IQ</text>
            <text x="60" y="90" textAnchor="middle" className="arch-node-role">Measures causality</text>
          </g>
          <g className="arch-node">
            <circle cx="300" cy="46" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
            <text x="300" y="50" textAnchor="middle" className="arch-node-idx">02</text>
            <text x="300" y="14" textAnchor="middle" className="arch-node-name">Creative IQ</text>
            <text x="300" y="90" textAnchor="middle" className="arch-node-role">Catches fatigue</text>
          </g>
          <g className="arch-node">
            <circle cx="60" cy="234" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
            <text x="60" y="238" textAnchor="middle" className="arch-node-idx">03</text>
            <text x="60" y="202" textAnchor="middle" className="arch-node-name">Audience IQ</text>
            <text x="60" y="278" textAnchor="middle" className="arch-node-role">Grades buyers</text>
          </g>
          <g className="arch-node">
            <circle cx="300" cy="234" r="22" fill="#0F1628" stroke="rgba(0,255,194,0.6)" />
            <text x="300" y="238" textAnchor="middle" className="arch-node-idx">04</text>
            <text x="300" y="202" textAnchor="middle" className="arch-node-name">AI Co-Pilot</text>
            <text x="300" y="278" textAnchor="middle" className="arch-node-role">Asks anything</text>
          </g>
        </svg>
      </div>

      <div className="hv-foot">
        <div className="hv-foot-item"><b>Signals in.</b> Every campaign teaches memory.</div>
        <div className="hv-foot-item"><b>Decisions out.</b> Memory teaches every campaign.</div>
      </div>
    </aside>
  );
}
