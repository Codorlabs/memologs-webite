'use client';

import { useState } from 'react';
import PilotCTA from '@/components/PilotCTA';

export default function InflationCalculator() {
  const [spend, setSpend] = useState(500000);
  const [cpa, setCpa] = useState(25);
  const [factor, setFactor] = useState(3);

  const ghost = spend - spend / factor;
  const wastePercent = Math.round((1 - 1 / factor) * 100);
  const reportedConv = Math.round(spend / cpa);
  const realConv = Math.round(reportedConv / factor);
  const realCpa = factor * cpa;
  const annualized = ghost * 12;

  const fmtDollar = (n: number) =>
    '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });

  const fmtShort = (n: number) => {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
    return `$${n}`;
  };

  return (
    <div className="calc-shell">
      {/* ── LEFT: Inputs ── */}
      <div className="calc-inputs">
        <div className="calc-field">
          <span>Monthly media spend</span>
          <div className="calc-input">
            <span className="prefix">$</span>
            <input
              type="number"
              value={spend}
              min={10000}
              max={10000000}
              step={10000}
              onChange={e => setSpend(Number(e.target.value))}
            />
            <span className="suffix">/mo</span>
          </div>
          <input
            type="range"
            min={10000}
            max={5000000}
            step={10000}
            value={spend}
            onChange={e => setSpend(Number(e.target.value))}
          />
        </div>

        <div className="calc-field">
          <span>Platform-reported CPA</span>
          <div className="calc-input">
            <span className="prefix">$</span>
            <input
              type="number"
              value={cpa}
              min={1}
              max={10000}
              step={1}
              onChange={e => setCpa(Number(e.target.value))}
            />
            <span className="suffix">per conv.</span>
          </div>
          <input
            type="range"
            min={1}
            max={500}
            step={1}
            value={cpa}
            onChange={e => setCpa(Number(e.target.value))}
          />
        </div>

        <div className="calc-field">
          <span>Inflation factor <small>(median: 3×)</small></span>
          <div className="calc-input calc-inline">
            {[3, 5, 7, 10].map(f => (
              <button
                key={f}
                type="button"
                className={`chip${factor === f ? ' active' : ''}`}
                onClick={() => setFactor(f)}
              >
                {f}×
              </button>
            ))}
          </div>
          <small>Based on median across 40+ pilot audits.</small>
        </div>
      </div>

      {/* ── RIGHT: Output ── */}
      <div className="calc-output">
        <div>
          <span className="calc-result-label">Likely spend on ghost conversions</span>
          <div className="calc-big">{fmtDollar(ghost)}</div>
          <div className="calc-sub">
            {wastePercent}% of your monthly budget · {fmtShort(annualized)} annualized
          </div>
        </div>

        <div className="calc-compare">
          <div className="calc-bar-row">
            <span className="calc-bar-label">Reported conversions</span>
            <div className="calc-bar">
              <div className="calc-bar-fill reported" style={{ width: '100%' }}></div>
            </div>
            <span className="calc-bar-value">{reportedConv.toLocaleString()}</span>
          </div>
          <div className="calc-bar-row">
            <span className="calc-bar-label">Incremental<br />conversions</span>
            <div className="calc-bar">
              <div className="calc-bar-fill real" style={{ width: `${(1 / factor) * 100}%` }}></div>
            </div>
            <span className="calc-bar-value">{realConv.toLocaleString()}</span>
          </div>
          <div className="calc-spacer"></div>
          <div className="calc-bar-row">
            <span className="calc-bar-label">Reported CPA</span>
            <div className="calc-bar"></div>
            <span className="calc-bar-value">${cpa}</span>
          </div>
          <div className="calc-bar-row">
            <span className="calc-bar-label">Incremental CPA</span>
            <div className="calc-bar"></div>
            <span className="calc-bar-value warn">${realCpa.toLocaleString()}</span>
          </div>
        </div>

        <div className="calc-cta">
          <PilotCTA className="btn btn-primary">Prove it on your real data →</PilotCTA>
          <span className="calc-micro">GeoTwin™ pilot. 90 days. Pilot fee credited to contract.</span>
        </div>
      </div>
    </div>
  );
}
