/* ═══════════ MEMOLOGS SITE INTERACTIONS ═══════════ */

// ------- Pillar tabs -------
(function(){
  const tabs = document.querySelectorAll('.ptab');
  const panels = document.querySelectorAll('.ppanel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.id === 'panel-' + id));
      // Render geo when first shown (svg is zero-height otherwise)
      if (id === 'incr') renderGeo(currentPhase);
    });
  });
})();

// ------- Inflation calculator -------
(function(){
  const inSpend = document.getElementById('inSpend');
  const rngSpend = document.getElementById('rngSpend');
  const inCpa = document.getElementById('inCpa');
  const rngCpa = document.getElementById('rngCpa');
  const chips = document.querySelectorAll('.chip[data-inflation]');

  if (!inSpend) return;

  let factor = 5;

  function fmt$(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function fmtN(n) { return Math.round(n).toLocaleString('en-US'); }

  function update() {
    const spend = Math.max(1000, +inSpend.value || 0);
    const cpa = Math.max(0.5, +inCpa.value || 0);
    const reported = spend / cpa;
    const real = reported / factor;
    const waste = spend - (real * cpa);
    // Actually: waste = spend spent on "ghost" conversions = spend * (1 - 1/factor)
    const ghost = spend * (1 - 1/factor);
    const realCpa = spend / real;
    const wastePct = (ghost / spend * 100);
    const annualGhost = ghost * 12;

    document.getElementById('outWaste').textContent = fmt$(ghost);
    document.getElementById('outWastePct').textContent =
      `${wastePct.toFixed(0)}% of your monthly budget · ${fmt$(annualGhost)} annualized`;

    document.getElementById('valReported').textContent = fmtN(reported);
    document.getElementById('valReal').textContent = fmtN(real);
    document.getElementById('valReportedCpa').textContent = fmt$(cpa);
    document.getElementById('valRealCpa').textContent = fmt$(realCpa);

    // Bar widths (reported = 100%, real = 100/factor)
    document.getElementById('barReported').style.width = '100%';
    document.getElementById('barReal').style.width = (100 / factor) + '%';
  }

  // Sync paired inputs
  inSpend.addEventListener('input', () => { rngSpend.value = Math.min(rngSpend.max, Math.max(rngSpend.min, inSpend.value)); update(); });
  rngSpend.addEventListener('input', () => { inSpend.value = rngSpend.value; update(); });
  inCpa.addEventListener('input', () => { rngCpa.value = Math.min(rngCpa.max, Math.max(rngCpa.min, inCpa.value)); update(); });
  rngCpa.addEventListener('input', () => { inCpa.value = rngCpa.value; update(); });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.toggle('active', c === chip));
      factor = +chip.dataset.inflation;
      update();
    });
  });

  update();
})();


// ------- Geo-lift demo -------
let currentPhase = 'select';

function renderGeo(phase) {
  currentPhase = phase;
  const svg = document.getElementById('geoSvg');
  if (!svg) return;

  // City dots on abstracted US-ish grid
  const cities = [
    { name: 'SEA', x: 90,  y: 80,  role: 'ctrl' },
    { name: 'SF',  x: 70,  y: 170, role: 'ctrl' },
    { name: 'LA',  x: 110, y: 230, role: 'ctrl' },
    { name: 'PHX', x: 170, y: 220, role: 'twin' },
    { name: 'DEN', x: 220, y: 160, role: 'twin' },
    { name: 'MIN', x: 300, y: 90,  role: 'twin' },
    { name: 'DAL', x: 290, y: 240, role: 'twin' },
    { name: 'CHI', x: 350, y: 130, role: 'test' },
    { name: 'ATL', x: 400, y: 220, role: 'twin' },
    { name: 'NYC', x: 470, y: 120, role: 'ctrl' },
    { name: 'BOS', x: 500, y: 90,  role: 'ctrl' },
    { name: 'MIA', x: 450, y: 270, role: 'ctrl' },
  ];

  let dots = '';
  cities.forEach(c => {
    let fill = 'rgba(255,255,255,.18)', ring = '', r = 6, label = 'rgba(255,255,255,.4)';
    if (phase === 'select' || phase === 'build' || phase === 'measure' || phase === 'validate') {
      if (c.role === 'test') { fill = '#00FFC2'; r = 9; label = '#FBFBFD'; ring = `<circle cx="${c.x}" cy="${c.y}" r="16" fill="none" stroke="#00FFC2" stroke-width="1.5" opacity="0.5"/>`; }
      else if (c.role === 'twin' && (phase === 'select' || phase === 'build' || phase === 'measure' || phase === 'validate')) { fill = '#E5923A'; r = 7; label = '#D9DCE4'; }
    }
    dots += ring;
    dots += `<circle cx="${c.x}" cy="${c.y}" r="${r}" fill="${fill}" stroke="rgba(255,255,255,.3)" stroke-width="1"/>`;
    dots += `<text x="${c.x + r + 4}" y="${c.y + 3}" font-family="JetBrains Mono, monospace" font-size="9" fill="${label}">${c.name}</text>`;
  });

  // Right side: chart area
  let chart = '';
  const cx0 = 250, cy0 = 30, cw = 290, ch = 260;
  chart += `<rect x="${cx0}" y="${cy0}" width="${cw}" height="${ch}" fill="#0A0F1D" stroke="rgba(255,255,255,.14)"/>`;
  chart += `<text x="${cx0 + 10}" y="${cy0 + 18}" font-family="JetBrains Mono, monospace" font-size="10" fill="#9AA0AE">Conversions per day</text>`;

  // Generate sample series
  const N = 40;
  const ctrlSeries = [], testSeries = [], twinSeries = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const base = 50 + 10 * Math.sin(t * 6) + 6 * Math.sin(t * 11);
    ctrlSeries.push(base);
    twinSeries.push(base + (Math.random() - 0.5) * 2); // near-identical until intervention
    // Test: follows twin until day 20, then lifts
    let v = twinSeries[i];
    if (i > 20) v += (i - 20) * 0.9;
    testSeries.push(v);
  }

  function pathFor(series, color, dashed) {
    const xs = (i) => cx0 + 20 + (i / (N - 1)) * (cw - 30);
    const ys = (v) => cy0 + ch - 20 - ((v - 30) / 60) * (ch - 40);
    let d = '';
    series.forEach((v, i) => { d += (i === 0 ? 'M' : 'L') + xs(i) + ',' + ys(v); });
    return `<path d="${d}" fill="none" stroke="${color}" stroke-width="2" ${dashed ? 'stroke-dasharray="4 3"' : ''}/>`;
  }

  // Intervention line
  const xIntervention = cx0 + 20 + (20 / (N - 1)) * (cw - 30);

  if (phase === 'select') {
    chart += `<text x="${cx0 + cw / 2}" y="${cy0 + ch / 2}" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#9AA0AE" font-style="italic">Select test + control markets</text>`;
  } else if (phase === 'build') {
    // Show many thin lines converging into a synthetic twin
    for (let k = 0; k < 4; k++) {
      const series = ctrlSeries.map(v => v + (Math.random() - 0.5) * 18);
      chart += pathFor(series, 'rgba(255,255,255,.22)', false);
    }
    chart += pathFor(twinSeries, '#E5923A', true);
    chart += `<text x="${cx0 + cw - 10}" y="${cy0 + 30}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#9AA0AE">candidates</text>`;
    chart += `<text x="${cx0 + cw - 10}" y="${cy0 + 44}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#E5923A">synthetic twin</text>`;
  } else if (phase === 'measure') {
    chart += `<line x1="${xIntervention}" y1="${cy0 + 20}" x2="${xIntervention}" y2="${cy0 + ch - 20}" stroke="#D9DCE4" stroke-width="1" stroke-dasharray="3 3"/>`;
    chart += `<text x="${xIntervention + 4}" y="${cy0 + 30}" font-family="JetBrains Mono, monospace" font-size="9" fill="#D9DCE4">campaign start</text>`;
    chart += pathFor(twinSeries, '#E5923A', true);
    chart += pathFor(testSeries, '#00FFC2', false);
    // Shaded lift area
    const xs = (i) => cx0 + 20 + (i / (N - 1)) * (cw - 30);
    const ys = (v) => cy0 + ch - 20 - ((v - 30) / 60) * (ch - 40);
    let liftPath = `M${xs(20)},${ys(testSeries[20])}`;
    for (let i = 20; i < N; i++) liftPath += `L${xs(i)},${ys(testSeries[i])}`;
    for (let i = N - 1; i >= 20; i--) liftPath += `L${xs(i)},${ys(twinSeries[i])}`;
    liftPath += 'Z';
    chart += `<path d="${liftPath}" fill="#00FFC2" opacity="0.22"/>`;
    chart += `<text x="${cx0 + cw - 10}" y="${cy0 + 30}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#00FFC2">test market: +22.4% lift</text>`;
    chart += `<text x="${cx0 + cw - 10}" y="${cy0 + 44}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#E5923A">synthetic twin (counterfactual)</text>`;
  } else if (phase === 'validate') {
    // Placebo: same model on pre-campaign window
    const placeboSeries = ctrlSeries.map(v => v + (Math.random() - 0.5) * 2);
    chart += pathFor(ctrlSeries, '#E5923A', true);
    chart += pathFor(placeboSeries, '#00FFC2', false);
    chart += `<text x="${cx0 + cw - 10}" y="${cy0 + 30}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#00FFC2">placebo window: 0.3% (noise)</text>`;
    chart += `<text x="${cx0 + cw - 10}" y="${cy0 + 44}" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#D9DCE4">✓ model is calibrated</text>`;
  }

  // Legend under the map
  let legend = '';
  const lx = 30, ly = 295;
  legend += `<circle cx="${lx}" cy="${ly}" r="5" fill="#00FFC2" stroke="rgba(255,255,255,.3)"/><text x="${lx + 10}" y="${ly + 3}" font-family="JetBrains Mono, monospace" font-size="9" fill="#D9DCE4">Test market</text>`;
  legend += `<circle cx="${lx + 100}" cy="${ly}" r="5" fill="#E5923A" stroke="rgba(255,255,255,.3)"/><text x="${lx + 110}" y="${ly + 3}" font-family="JetBrains Mono, monospace" font-size="9" fill="#D9DCE4">Twin markets</text>`;
  legend += `<circle cx="${lx + 200}" cy="${ly}" r="4" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.3)"/><text x="${lx + 210}" y="${ly + 3}" font-family="JetBrains Mono, monospace" font-size="9" fill="#9AA0AE">Other markets</text>`;

  svg.innerHTML = dots + chart + legend;

  // Update readout
  const readouts = {
    select: 'ML ranked 14 control-market combinations. <b>Dallas, Phoenix, Minneapolis, Atlanta &amp; Denver</b> selected for highest predictive match to test market (<b>Chicago</b>).',
    build: 'Synthetic twin constructed from weighted blend of control markets. Pre-period match error: <b>1.8%</b> (target &lt; 5%). Ready to deploy.',
    measure: 'Post-intervention gap: <b>+22.4% incremental conversions</b>. Dual-model agreement: GeoTwin™ <b>+21.9%</b>, CausalCore™ <b>+22.8%</b>. Confidence: <b>97.3%</b>.',
    validate: 'Placebo test on pre-campaign window shows <b>0.3% lift</b> (statistical noise). Model is calibrated — the measured lift is real.'
  };
  const r = document.getElementById('geoReadout');
  if (r) r.innerHTML = readouts[phase];
}

(function(){
  const btns = document.querySelectorAll('.geo-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.toggle('active', b === btn));
      renderGeo(btn.dataset.phase);
    });
  });
  // Initial render (once SVG has layout)
  window.addEventListener('load', () => renderGeo('select'));
  setTimeout(() => renderGeo('select'), 300);
})();


// ------- Chat demo -------
(function(){
  const log = document.getElementById('chatLog');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('chatSend');
  const chips = document.querySelectorAll('.chat-chip');
  if (!log) return;

  const scripted = {
    'what-channel': {
      q: 'Which channel is most inflated?',
      a: `
        <div class="chat-answer-head">Inflation ranking — last 30 days</div>
        <p>Based on your last GeoTwin™ study plus platform-reported conversions:</p>
        <ol>
          <li><b>Meta:</b> 4.8× inflation (reported $18 CPA · incremental $86 CPA)</li>
          <li><b>Google branded search:</b> 11.2× inflation — most of this is organic demand the ad is stealing credit for.</li>
          <li><b>TikTok:</b> 2.6× inflation — your cleanest channel.</li>
          <li><b>Google display:</b> 6.1× — driven by view-through attribution overcounting.</li>
        </ol>
        <div class="chat-action">Action: cut branded search bids 40%, reallocate $18K to TikTok, rerun lift in 4 weeks.</div>`
    },
    'what-forecast': {
      q: 'Forecast October spend.',
      a: `
        <div class="chat-answer-head">October forecast — 93% confidence band</div>
        <p>Based on 18 months of your data, YoY Q4 patterns, and current audience saturation curves:</p>
        <ol>
          <li>Recommended total: <b>$680K</b> (↓ 8% from planned).</li>
          <li>Meta ceiling: <b>$310K</b> — exceeding this matches 3 historical failure patterns flagged by Memory IQ.</li>
          <li>CTV should take <b>$120K</b> — highest incremental ROI in analogous Q4 windows (2.1×).</li>
        </ol>
        <div class="chat-action">Action: cap Meta at $310K, increase CTV by $40K, hold Google where it is.</div>`
    },
    'what-budget': {
      q: 'Where should I move $50K?',
      a: `
        <div class="chat-answer-head">Reallocation suggestion</div>
        <p>Taking $50K from your three lowest-incremental line items:</p>
        <ol>
          <li>From <b>Google branded search</b>: $22K (11.2× inflation — safe cut)</li>
          <li>From <b>Meta retargeting</b>: $18K (audience overlap 64% — declining returns)</li>
          <li>From <b>Google display</b>: $10K (view-through inflation)</li>
        </ol>
        <p>Allocate to:</p>
        <ol>
          <li><b>CTV prospecting:</b> $30K (new reach, incremental ROI 2.1× in pilots)</li>
          <li><b>Podcast sponsorships:</b> $20K (dark-funnel discovery driver)</li>
        </ol>
        <div class="chat-action">Projected impact: +$74K incremental revenue, −$8 incremental CPA.</div>`
    }
  };

  function addMsg(role, html) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + role;
    div.innerHTML = `<div class="chat-bubble">${html}</div>`;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  function handleSuggest(key) {
    const item = scripted[key];
    if (!item) return;
    addMsg('user', item.q);
    setTimeout(() => addMsg('bot', item.a), 350);
  }

  chips.forEach(chip => chip.addEventListener('click', () => handleSuggest(chip.dataset.q)));

  function sendFree() {
    const q = (input.value || '').trim();
    if (!q) return;
    addMsg('user', q);
    input.value = '';
    setTimeout(() => {
      addMsg('bot', `
        <div class="chat-answer-head">Working on it</div>
        <p>This demo only answers a small preset of scripted questions — the full Co-Pilot is live once your data is connected.</p>
        <p>Try one of the suggested questions below, or <a href="#contact" style="color: var(--teal-deep); text-decoration: underline;">book a pilot</a> to ask it anything about your real data.</p>
      `);
    }, 400);
  }
  send.addEventListener('click', sendFree);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendFree(); });
})();

// ------- Hero carousel (auto-scroll only) -------
function initHeroCarousel() {
  const car = document.querySelector('.hero-carousel');
  if (!car) return;
  const slides = car.querySelectorAll('.hc-slide');
  const pills = car.querySelectorAll('.hc-pill');
  if (!slides.length) return;
  let idx = 0;
  const DURATION = 7000;
  let timer = null;

  function show(i) {
    idx = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('active', k === idx));
    pills.forEach((p, k) => {
      p.classList.remove('active', 'done');
      if (k < idx) p.classList.add('done');
      else if (k === idx) p.classList.add('active');
    });
  }
  function tick() {
    show(idx + 1);
  }
  function start() {
    clearInterval(timer);
    timer = setInterval(tick, DURATION);
  }
  show(0);
  start();
  // Pause on hover
  car.addEventListener('mouseenter', () => clearInterval(timer));
  car.addEventListener('mouseleave', start);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroCarousel);
} else {
  initHeroCarousel();
}
