"use client";

import { useEffect, useRef, useState } from "react";

const TARGET = 90;

export default function ReadinessRing() {
  const [score, setScore] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;

    const run = () => {
      started = true;
      const start = performance.now();
      const dur = 1900;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        setScore(Math.round(eased * TARGET));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const r = 76;
  const C = 2 * Math.PI * r;
  const offset = C * (1 - score / 100);

  let color = "#FF6B5B"; // ACT
  let label = "ACT";
  if (score >= 75) {
    color = "#00FFC2"; // READY
    label = "READY";
  } else if (score >= 50) {
    color = "#FFB347"; // WATCH
    label = "WATCH";
  }

  return (
    <div
      ref={ref}
      className="cq-ring-big cq-ring-dyn"
      aria-label={`Andromeda Readiness Score: ${score} out of 100 — ${label}`}
    >
      <svg viewBox="0 0 200 200">
        <g className="ring-ticks">
          {Array.from({ length: 60 }, (_, i) => {
            const a = (i * 360) / 60;
            const outer = 96;
            const inner = i % 5 === 0 ? 86 : 90;
            const rad = (a - 90) * (Math.PI / 180);
            const f = (n: number) => (Math.round(n * 1000) / 1000).toFixed(3);
            return (
              <line
                key={i}
                x1={f(100 + outer * Math.cos(rad))}
                y1={f(100 + outer * Math.sin(rad))}
                x2={f(100 + inner * Math.cos(rad))}
                y2={f(100 + inner * Math.sin(rad))}
                stroke={i % 5 === 0 ? color : "rgba(255,255,255,0.14)"}
                strokeWidth={i % 5 === 0 ? 1.6 : 1}
                strokeLinecap="round"
                style={{ transition: "stroke 300ms ease" }}
              />
            );
          })}
        </g>
        <circle cx="100" cy="100" r="76" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="14" />
        <circle
          className="ring-pulse"
          cx="100" cy="100" r="76"
          fill="none"
          stroke={color}
          strokeOpacity="0.22"
          strokeWidth="24"
          style={{ transition: "stroke 300ms ease" }}
        />
        <circle
          cx="100" cy="100" r="76"
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={offset}
          transform="rotate(-90 100 100)"
          style={{ transition: "stroke 300ms ease" }}
        />
      </svg>
      <div className="core-num" style={{ color }}>{score}</div>
      <div className="core-lab" style={{ color }}>{label}</div>
    </div>
  );
}
