'use client';

import { useEffect, useRef } from 'react';

/**
 * Hero visual — the MemoLogs signal graph as a live, dimensional scene.
 * Four named IQ products sit around a bright Memory IQ core they all feed;
 * a slowly-rotating 3D "signal graph" of ambient nodes gives depth behind
 * them, and teal pulses stream from each product into the core. No card —
 * the canvas is transparent so it blends into the page. Honors
 * prefers-reduced-motion (renders one static, legible frame).
 */
export default function HeroCarousel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const TEAL = '0,255,194';

    // ---- named IQ products (fixed positions → always legible) ----
    // ox/oy are unit offsets from the core; side drives label anchoring.
    type Product = { name: string; role: string; ox: number; oy: number; side: 'l' | 'r'; phase: number; col: string };
    const products: Product[] = [
      { name: 'Incrementality IQ', role: 'Causal measurement', ox: -0.92, oy: -0.66, side: 'l', phase: 0.0, col: '0,255,194' },
      { name: 'Creative IQ', role: 'Fatigue detection', ox: 0.92, oy: -0.66, side: 'r', phase: 1.6, col: '255,107,91' },
      { name: 'Audience IQ', role: 'Buyer-graded segments', ox: -0.92, oy: 0.66, side: 'l', phase: 3.1, col: '184,166,255' },
      { name: 'AI Co-Pilot', role: 'Conversational analytics', ox: 0.92, oy: 0.66, side: 'r', phase: 4.7, col: '255,179,71' },
    ];

    // ---- ambient "signal graph" nodes on a sphere (rotating, unlabeled) ----
    const N = 22;
    const R = 1; // unit sphere; scaled at project time
    type ANode = { x: number; y: number; z: number; size: number };
    const anodes: ANode[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const rr = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      anodes.push({ x: Math.cos(theta) * rr * R, y: y * R, z: Math.sin(theta) * rr * R, size: 1.5 + (i % 4 === 0 ? 1.1 : 0) });
    }
    // proximity edges among ambient nodes
    const edgeSet = new Set<string>();
    const edges: [number, number][] = [];
    for (let i = 0; i < anodes.length; i++) {
      const dists: { j: number; d: number }[] = [];
      for (let j = 0; j < anodes.length; j++) {
        if (i === j) continue;
        const dx = anodes[i].x - anodes[j].x;
        const dy = anodes[i].y - anodes[j].y;
        const dz = anodes[i].z - anodes[j].z;
        dists.push({ j, d: dx * dx + dy * dy + dz * dz });
      }
      dists.sort((a, b) => a.d - b.d);
      for (let k = 0; k < 2; k++) {
        const j = dists[k].j;
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          edges.push([i, j]);
        }
      }
    }

    // pulses: one per product spoke, travelling inward to the core
    const pulses = products.map((_, i) => ({ prod: i, t: i / products.length, speed: 0.0075 + (i % 2) * 0.0018 }));

    let W = 0;
    let H = 0;
    let dpr = 1;
    let cx = 0;
    let cy = 0;
    let rpx = 0;
    let rpy = 0;
    let ambR = 0;
    const TILT = -0.4;
    let rotY = 0.5;
    let targetPar = 0;
    let curPar = 0;
    let frameN = 0;
    let raf = 0;

    function resize() {
      const rect = wrap!.getBoundingClientRect();
      W = Math.max(1, rect.width);
      H = Math.max(1, rect.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      canvas!.style.width = W + 'px';
      canvas!.style.height = H + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2;
      cy = H / 2;
      // keep product nodes inward enough that centered labels never clip the canvas
      rpx = Math.min(W * 0.30, 190, (W / 2 - 92) / 0.92);
      rpy = Math.min(H * 0.30, 170);
      ambR = Math.min(W, H) * 0.46;
    }

    function projectAmbient(n: ANode, ay: number) {
      const cyr = Math.cos(ay);
      const syr = Math.sin(ay);
      let x1 = n.x * cyr - n.z * syr;
      const z1 = n.x * syr + n.z * cyr;
      const cxr = Math.cos(TILT);
      const sxr = Math.sin(TILT);
      const y1 = n.y * cxr - z1 * sxr;
      const z2 = n.y * sxr + z1 * cxr;
      const persp = 1.6 / (1.9 - z2); // gentle perspective
      return {
        sx: cx + x1 * ambR * persp,
        sy: cy + y1 * ambR * persp,
        depth: (z2 + 1) / 2, // 0 far .. 1 near
      };
    }

    function frame() {
      if (!reduce) {
        rotY += 0.0016;
        curPar += (targetPar - curPar) * 0.05;
        frameN += 1;
      }
      const ay = rotY + curPar;
      const parX = curPar * 26; // slight scene shift for products
      ctx!.clearRect(0, 0, W, H);

      const core = { sx: cx + parX, sy: cy };

      // ---- ambient edges ----
      const AP = anodes.map((n) => projectAmbient(n, ay));
      ctx!.lineWidth = 1;
      for (const [a, b] of edges) {
        const pa = AP[a];
        const pb = AP[b];
        const d = (pa.depth + pb.depth) / 2;
        ctx!.strokeStyle = `rgba(${TEAL},${(0.03 + d * 0.1).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.moveTo(pa.sx + parX, pa.sy);
        ctx!.lineTo(pb.sx + parX, pb.sy);
        ctx!.stroke();
      }
      // ---- ambient nodes ----
      const order = anodes.map((_, i) => i).sort((i, j) => AP[i].depth - AP[j].depth);
      for (const i of order) {
        const p = AP[i];
        const r = anodes[i].size * (0.5 + p.depth * 0.9);
        const a = 0.18 + p.depth * 0.4;
        const g = ctx!.createRadialGradient(p.sx + parX, p.sy, 0, p.sx + parX, p.sy, r * 4.5);
        g.addColorStop(0, `rgba(${TEAL},${(a * 0.55).toFixed(3)})`);
        g.addColorStop(1, `rgba(${TEAL},0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(p.sx + parX, p.sy, r * 4.5, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = `rgba(${TEAL},${a.toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(p.sx + parX, p.sy, r, 0, Math.PI * 2);
        ctx!.fill();
      }

      // ---- product screen positions (fixed + gentle bob) ----
      const pos = products.map((p) => {
        const bob = reduce ? 0 : Math.sin(frameN * 0.02 + p.phase) * 4;
        return { x: core.sx + p.ox * rpx, y: core.sy + p.oy * rpy + bob };
      });

      // ---- spokes product → core (tinted per product) ----
      for (let i = 0; i < products.length; i++) {
        const c = products[i].col;
        const g = ctx!.createLinearGradient(pos[i].x, pos[i].y, core.sx, core.sy);
        g.addColorStop(0, `rgba(${c},0.07)`);
        g.addColorStop(1, `rgba(${TEAL},0.30)`);
        ctx!.strokeStyle = g;
        ctx!.lineWidth = 1.2;
        ctx!.beginPath();
        ctx!.moveTo(pos[i].x, pos[i].y);
        ctx!.lineTo(core.sx, core.sy);
        ctx!.stroke();
      }
      // ---- pulses along spokes (carry the product's color inward) ----
      if (!reduce) for (const pl of pulses) { pl.t += pl.speed; if (pl.t > 1) pl.t -= 1; }
      for (const pl of pulses) {
        const from = pos[pl.prod];
        const c = products[pl.prod].col;
        const x = from.x + (core.sx - from.x) * pl.t;
        const y = from.y + (core.sy - from.y) * pl.t;
        const fade = Math.sin(pl.t * Math.PI);
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 6);
        g.addColorStop(0, `rgba(${c},${(0.95 * fade).toFixed(3)})`);
        g.addColorStop(1, `rgba(${c},0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, 6, 0, Math.PI * 2);
        ctx!.fill();
      }

      // ---- product nodes (tinted per product) ----
      for (let i = 0; i < products.length; i++) {
        const { x, y } = pos[i];
        const c = products[i].col;
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 26);
        g.addColorStop(0, `rgba(${c},0.32)`);
        g.addColorStop(1, `rgba(${c},0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, 26, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = '#0A0F1D';
        ctx!.beginPath();
        ctx!.arc(x, y, 6, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.strokeStyle = `rgba(${c},0.98)`;
        ctx!.lineWidth = 1.6;
        ctx!.beginPath();
        ctx!.arc(x, y, 6, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.fillStyle = `rgba(${c},0.98)`;
        ctx!.beginPath();
        ctx!.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx!.fill();
      }

      // ---- the Memory IQ core ----
      const pr = reduce ? 30 : 30 + Math.sin(frameN * 0.04) * 2.4;
      const halo = ctx!.createRadialGradient(core.sx, core.sy, 0, core.sx, core.sy, pr * 2.4);
      halo.addColorStop(0, `rgba(${TEAL},0.5)`);
      halo.addColorStop(0.5, `rgba(${TEAL},0.14)`);
      halo.addColorStop(1, `rgba(${TEAL},0)`);
      ctx!.fillStyle = halo;
      ctx!.beginPath();
      ctx!.arc(core.sx, core.sy, pr * 2.4, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.fillStyle = '#070B16';
      ctx!.beginPath();
      ctx!.arc(core.sx, core.sy, 16, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.strokeStyle = `rgba(${TEAL},0.95)`;
      ctx!.lineWidth = 1.8;
      ctx!.beginPath();
      ctx!.arc(core.sx, core.sy, 16, 0, Math.PI * 2);
      ctx!.stroke();
      // memory glyph — three stacked waves
      ctx!.strokeStyle = `rgba(${TEAL},0.95)`;
      ctx!.lineWidth = 1.5;
      for (let row = -1; row <= 1; row++) {
        const yy = core.sy + row * 5;
        ctx!.beginPath();
        ctx!.moveTo(core.sx - 8, yy);
        ctx!.quadraticCurveTo(core.sx - 3, yy - 3.2, core.sx, yy);
        ctx!.quadraticCurveTo(core.sx + 3, yy + 3.2, core.sx + 8, yy);
        ctx!.stroke();
      }

      // ---- labels (drawn last, upright, centered above/below each node) ----
      ctx!.textAlign = 'center';
      for (let i = 0; i < products.length; i++) {
        const p = products[i];
        const { x, y } = pos[i];
        const above = p.oy < 0;
        const nameY = above ? y - 32 : y + 24;
        const roleY = above ? y - 16 : y + 40;
        ctx!.font = '700 13px Inter, system-ui, sans-serif';
        ctx!.fillStyle = 'rgba(251,251,253,0.96)';
        ctx!.fillText(p.name, x, nameY);
        ctx!.font = '500 11px Inter, system-ui, sans-serif';
        ctx!.fillStyle = 'rgba(154,160,174,0.92)';
        ctx!.fillText(p.role, x, roleY);
      }
      // core label
      ctx!.textAlign = 'center';
      ctx!.font = '700 12px "JetBrains Mono", monospace';
      ctx!.fillStyle = `rgba(${TEAL},0.95)`;
      ctx!.fillText('MEMORY IQ', core.sx, core.sy + 40);
      ctx!.font = '500 10.5px Inter, system-ui, sans-serif';
      ctx!.fillStyle = 'rgba(154,160,174,0.9)';
      ctx!.fillText('the memory every product feeds', core.sx, core.sy + 56);
      ctx!.textAlign = 'left';

      if (!reduce) raf = requestAnimationFrame(frame);
    }

    function onMove(e: MouseEvent) {
      const rect = wrap!.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      targetPar = nx * 0.5;
    }
    function onLeave() {
      targetPar = 0;
    }

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) frame();
    });
    ro.observe(wrap);
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    if (reduce) frame();
    else raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <aside
      className="hero-visual"
      aria-label="The MemoLogs signal graph: Incrementality IQ, Creative IQ, Audience IQ, and AI Co-Pilot all feed one Memory IQ core."
    >
      <div className="hv-canvas-wrap" ref={wrapRef}>
        <canvas ref={canvasRef} className="hv-canvas" aria-hidden="true" />
      </div>
    </aside>
  );
}
