'use client';

import { useState, useEffect } from 'react';

type Phase = 'select' | 'build' | 'measure' | 'validate';

interface City {
  name: string;
  cx: number;
  cy: number;
  kind: 'test' | 'twin' | 'other';
  weight?: number;
}

const CITIES: City[] = [
  { name: 'CHI', cx: 66, cy: 28, kind: 'test' },
  { name: 'SEA', cx: 9,  cy: 13, kind: 'other' },
  { name: 'SF',  cx: 7,  cy: 37, kind: 'other' },
  { name: 'LA',  cx: 11, cy: 57, kind: 'other' },
  { name: 'DEN', cx: 46, cy: 32, kind: 'twin', weight: 0.38 },
  { name: 'MIN', cx: 55, cy: 20, kind: 'twin', weight: 0.24 },
  { name: 'ATL', cx: 72, cy: 58, kind: 'twin', weight: 0.19 },
  { name: 'PHX', cx: 44, cy: 55, kind: 'twin', weight: 0.12 },
  { name: 'DAL', cx: 54, cy: 60, kind: 'twin', weight: 0.07 },
];

const PHASES: Phase[] = ['select', 'build', 'measure', 'validate'];

const PHASE_LABELS: Record<Phase, string> = {
  select:   '1 · Select markets',
  build:    '2 · Build twin',
  measure:  '3 · Measure lift',
  validate: '4 · Validate',
};

const READOUTS: Record<Phase, React.ReactNode> = {
  select:   <>ML ranked 14 control-market combinations. <b>Dallas, Phoenix, Minneapolis, Atlanta &amp; Denver</b> selected for highest predictive match to test market (<b>Chicago</b>).</>,
  build:    <>GeoTwin™ synthetic control built. Pre-period L2 fit: <b>0.011</b>. Weights — DEN <b>38%</b> · MIN <b>24%</b> · ATL <b>19%</b> · PHX <b>12%</b> · DAL <b>7%</b>. Mirror accuracy: <b>98.6%</b> over 90 days.</>,
  measure:  <>Campaign live. GeoTwin™ tracking divergence in real time. Current lift estimate: <b>+7.2%</b> conversions. Gap is statistically significant at p&lt;0.05.</>,
  validate: <>Placebo test on pre-campaign window shows <b>0.3% lift</b> (statistical noise). Model is calibrated — the measured lift is real.</>,  
};

// ── Chart data ───────────────────────────────────────────────
// Pre-period: both lines track closely
const PRE_TEST = [42, 48, 44, 53, 46, 51, 56, 52];
const PRE_TWIN = [43, 47, 45, 52, 47, 50, 55, 53];
// Campaign period: test rises, twin (counterfactual) stays flat/slight drop
const CAM_TEST = [53, 60, 68, 76, 83, 89, 94, 97];
const CAM_TWIN = [53, 50, 49, 51, 48, 50, 47, 48];

// Placebo data for validate: both lines nearly identical (only noise)
const PBO_TEST = [45, 58, 72, 80, 76, 65, 54, 47];
const PBO_TWIN = [45, 57, 71, 80, 77, 65, 54, 48];

const SPLIT = PRE_TEST.length; // index where campaign starts

const W = 320, H = 120;

type Pt = { x: number; y: number };

function toPoints(vals: number[], startIdx: number, total: number, minV: number, maxV: number): Pt[] {
  return vals.map((v, i) => ({
    x: ((startIdx + i) / (total - 1)) * W,
    y: H - ((v - minV) / (maxV - minV)) * H,
  }));
}

// Cubic bezier smooth path (catmull-rom style)
function smoothPath(pts: Pt[]): string {
  if (pts.length < 2) return '';
  let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[Math.max(0, i - 2)];
    const p1 = pts[i - 1];
    const p2 = pts[i];
    const p3 = pts[Math.min(pts.length - 1, i + 1)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

function smoothArea(topPts: Pt[], botPts: Pt[]): string {
  const top = smoothPath(topPts);
  const botRev = [...botPts].reverse();
  let d = top;
  // Line back along bottom (reversed)
  for (let i = 0; i < botRev.length; i++) {
    d += ` ${i === 0 ? 'L' : 'L'}${botRev[i].x.toFixed(1)},${botRev[i].y.toFixed(1)}`;
  }
  return d + 'Z';
}

export default function GeoLiftDemo() {
  const [phase, setPhase] = useState<Phase>('select');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % 4), 3500);
    return () => clearInterval(id);
  }, []);
  useEffect(() => { setPhase(PHASES[tick]); }, [tick]);

  // Combined full timeline for measure/validate
  const fullTest = [...PRE_TEST, ...CAM_TEST];
  const fullTwin = [...PRE_TWIN, ...CAM_TWIN];
  const total = fullTest.length;

  const allVals = [...fullTest, ...fullTwin];
  const minV = Math.min(...allVals) - 6;
  const maxV = Math.max(...allVals) + 6;

  const fullTestPts = toPoints(fullTest, 0, total, minV, maxV);
  const fullTwinPts = toPoints(fullTwin, 0, total, minV, maxV);

  // Pre-period only (build phase)
  const preTestPts = toPoints(PRE_TEST, 0, PRE_TEST.length, minV, maxV);
  const preTwinPts = toPoints(PRE_TWIN, 0, PRE_TWIN.length, minV, maxV);

  // Campaign-start x position
  const splitX = (SPLIT / (total - 1)) * W;

  // Post-campaign points for fill area
  const postTestPts = fullTestPts.slice(SPLIT - 1); // include junction
  const postTwinPts = fullTwinPts.slice(SPLIT - 1);

  const isMeasure = phase === 'measure';
  const isValidate = phase === 'validate';

  // Placebo points (validate phase — pre-period window replay)
  const pboAllVals = [...PBO_TEST, ...PBO_TWIN];
  const pboMin = Math.min(...pboAllVals) - 6;
  const pboMax = Math.max(...pboAllVals) + 6;
  const pboTestPts = toPoints(PBO_TEST, 0, PBO_TEST.length, pboMin, pboMax);
  const pboTwinPts = toPoints(PBO_TWIN, 0, PBO_TWIN.length, pboMin, pboMax);

  return (
    <div className="geolift">
      {/* Header bar */}
      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <span style={{ background: '#00FFC2', color: '#0a0e1a', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', padding: '4px 10px', borderRadius: '4px' }}>LIVE DEMO</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>GeoTwin™ study — Q2 campaign</span>
      </div> */}

      <div className="geo-grid">
        <div className='geo-grid-in' style={{  }}>

          {/* ── MAP ── */}
          <div style={{ flex: '0 0 46%' }} aria-label="US geo-lift map">
            <svg viewBox="0 0 100 78" style={{ width: '100%', height: '100%' }} aria-hidden="true">
              {CITIES.filter(c => c.kind === 'twin').map(c => {
                const strokeW = phase === 'build' ? (c.weight ?? 0.1) * 4 : 0.6;
                const op = phase === 'build' ? 0.15 + (c.weight ?? 0) * 1.2 : 0.2;
                return (
                  <line key={'l-' + c.name} x1={66} y1={28} x2={c.cx} y2={c.cy}
                    stroke="#FFB347" strokeWidth={strokeW} strokeDasharray="2 2" opacity={op} />
                );
              })}
              {CITIES.map(c => {
                const fill = c.kind === 'test' ? '#00FFC2' : c.kind === 'twin' ? '#FFB347' : 'rgba(255,255,255,0.3)';
                const r = c.kind === 'test' ? 2.8
                  : (c.kind === 'twin' && phase === 'build') ? 1.2 + (c.weight ?? 0.1) * 5
                  : 2;
                return (
                  <g key={c.name}>
                    {c.kind === 'test' && <circle cx={c.cx} cy={c.cy} r={r + 3} fill="rgba(0,255,194,0.12)" />}
                    <circle cx={c.cx} cy={c.cy} r={r} fill={fill} />
                    <text x={c.cx} y={c.cy - 3.5} textAnchor="middle" fontSize="4.2"
                      fill={fill} opacity={0.9} fontFamily="JetBrains Mono, monospace">{c.name}</text>
                    {phase === 'build' && c.kind === 'twin' && (
                      <text x={c.cx} y={c.cy + 6.5} textAnchor="middle" fontSize="3.4"
                        fill="#FFB347" opacity={0.7} fontFamily="JetBrains Mono, monospace">
                        {Math.round((c.weight ?? 0) * 100)}%
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ── CHART ── */}
          <div style={{ flex: 1, border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', position: 'relative', overflow: 'hidden', background: 'rgba(0,0,0,0.2)' }}>
            <span style={{ position: 'absolute', top: '8px', left: '10px', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase', zIndex: 1 }}>
              Conversions per day
            </span>

            {phase === 'select' ? (
              <svg viewBox={`-10 -8 ${W + 20} ${H + 16}`} style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="rankFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.02" />
                  </linearGradient>
                </defs>

                {/* Baseline and light grid */}
                <line x1={0} y1={H - 2} x2={W} y2={H - 2} stroke="rgba(255,255,255,0.14)" strokeDasharray="3 3" />
                <line x1={0} y1={H * 0.66} x2={W} y2={H * 0.66} stroke="rgba(255,255,255,0.08)" strokeDasharray="2 3" />
                <line x1={0} y1={H * 0.33} x2={W} y2={H * 0.33} stroke="rgba(255,255,255,0.08)" strokeDasharray="2 3" />

                {/* Candidate fit-score curve */}
                <path d="M0,96 C40,88 72,80 104,72 C136,64 168,58 200,56 C230,54 260,48 320,36" fill="none" stroke="#00FFC2" strokeWidth="2" />
                <path d="M0,96 C40,88 72,80 104,72 C136,64 168,58 200,56 C230,54 260,48 320,36 L320,120 L0,120 Z" fill="url(#rankFill)" />

                {/* Best candidate marker */}
                <line x1={268} y1={8} x2={268} y2={120} stroke="rgba(255,179,71,0.55)" strokeDasharray="4 3" />
                <circle cx={268} cy={46} r={4} fill="#FFB347" />

                {/* Labels */}
                <text x={8} y={12} fontSize="7.5" fill="rgba(255,255,255,0.42)" fontFamily="JetBrains Mono, monospace">control combinations ranked by fit score</text>
                <text x={W - 4} y={12} fontSize="8" fill="#FFB347" textAnchor="end" fontFamily="JetBrains Mono, monospace">best candidate: 98.6% match</text>
                <text x={W - 4} y={24} fontSize="7.5" fill="rgba(255,255,255,0.45)" textAnchor="end" fontFamily="JetBrains Mono, monospace">test city: Chicago (CHI)</text>
                <text x={8} y={H - 8} fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="JetBrains Mono, monospace">14 market combinations scored by ML</text>
              </svg>
            ) : (
              <svg viewBox={`-10 -8 ${W + 20} ${H + 16}`} style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="liftFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#00FFC2" stopOpacity="0.05" />
                  </linearGradient>
                  <clipPath id="postClip">
                    <rect x={splitX} y={-10} width={W - splitX + 10} height={H + 20} />
                  </clipPath>
                </defs>

                {/* Build phase */}
                {phase === 'build' && (
                  <>
                    <path d={smoothArea(preTestPts, preTwinPts)} fill="rgba(255,179,71,0.07)" />
                    <path d={smoothPath(preTwinPts)} stroke="rgba(255,179,71,0.65)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                    <path d={smoothPath(preTestPts)} stroke="#00FFC2" strokeWidth="2" fill="none" />
                    <text x={preTestPts.at(-1)!.x - 4} y={preTestPts.at(-1)!.y - 5} fontSize="8" fill="#00FFC2" textAnchor="end">Chicago</text>
                    <text x={preTwinPts.at(-1)!.x - 4} y={preTwinPts.at(-1)!.y + 11} fontSize="8" fill="#FFB347" textAnchor="end">GeoTwin™</text>
                    <rect x={4} y={H - 18} width={64} height={15} rx="3" fill="rgba(0,255,194,0.1)" stroke="rgba(0,255,194,0.3)" strokeWidth="0.6" />
                    <text x={8} y={H - 7} fontSize="7" fill="#00FFC2" fontFamily="JetBrains Mono, monospace">L2: 0.011 · fit 98.6%</text>
                  </>
                )}

                {/* Measure phase */}
                {isMeasure && (
                  <>
                    <path d={smoothPath(fullTwinPts)} stroke="rgba(255,179,71,0.7)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                    <g clipPath="url(#postClip)">
                      <path d={smoothArea(postTestPts, postTwinPts)} fill="url(#liftFill)" />
                    </g>
                    <path d={smoothPath(fullTestPts)} stroke="#00FFC2" strokeWidth="2" fill="none" />
                    <line x1={splitX} y1={-4} x2={splitX} y2={H + 4}
                      stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="4 3" />
                    <text x={splitX + 4} y={10} fontSize="7.5" fill="rgba(255,255,255,0.4)"
                      fontFamily="JetBrains Mono, monospace">campaign start</text>
                    <text x={W - 4} y={10} fontSize="8" fill="#00FFC2" textAnchor="end"
                      fontFamily="JetBrains Mono, monospace">test: +7.2% lift</text>
                    <text x={W - 4} y={21} fontSize="7.5" fill="rgba(255,179,71,0.8)" textAnchor="end"
                      fontFamily="JetBrains Mono, monospace">synthetic twin (counterfactual)</text>
                  </>
                )}

                {/* Validate phase: placebo window — lines nearly overlap */}
                {isValidate && (
                  <>
                    {/* Orange dashed twin closely tracking teal */}
                    <path d={smoothPath(pboTwinPts)} stroke="rgba(255,179,71,0.75)" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                    {/* Teal test line on top */}
                    <path d={smoothPath(pboTestPts)} stroke="#00FFC2" strokeWidth="2" fill="none" />
                    {/* Labels top-right */}
                    <text x={W - 4} y={10} fontSize="8" fill="rgba(255,179,71,0.9)" textAnchor="end"
                      fontFamily="JetBrains Mono, monospace">placebo window: 0.3% (noise)</text>
                    <text x={W - 4} y={21} fontSize="8" fill="#00FFC2" textAnchor="end"
                      fontFamily="JetBrains Mono, monospace">✓ model is calibrated</text>
                  </>
                )}
              </svg>
            )}
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}>
          <span style={{ color: '#00FFC2' }}>● Test market</span>
          <span style={{ color: '#FFB347' }}>● Twin markets</span>
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>○ Other markets</span>
        </div>
      </div>

      {/* Phase tabs */}
      <div className="geo-ctrl">
        {PHASES.map(p => (
          <button key={p} className={`geo-btn${phase === p ? ' active' : ''}`} onClick={() => setPhase(p)}>
            {PHASE_LABELS[p]}
          </button>
        ))}
      </div>

      {/* Readout */}
      <div className="geo-readout">{READOUTS[phase]}</div>
    </div>
  );
}

