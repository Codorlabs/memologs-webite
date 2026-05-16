'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsBand.module.css';

interface Stat {
  prefix?: string;
  suffix?: string;
  target: number;
  decimals?: number;
  label: string;
  desc: string;
}

const STATS: Stat[] = [
  { target: 2.4, decimals: 1, suffix: '×', label: 'Attribution Inflation', desc: 'uncovered on avg' },
  { target: 60, suffix: '%', label: 'Ad Spend Saved', desc: 'on fatigued creative' },
  { target: 37, suffix: '%', label: 'CAC Reduction', desc: 'across active campaigns' },
  { target: 90, label: 'Days to Payback', desc: 'after pilot kickoff' },
  { target: 2, suffix: '×', label: 'Faster Pivots', desc: 'on budget reallocation' },
];

function useCountUp(target: number, decimals = 0, trigger: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    function step(now: number) {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((ease * target).toFixed(decimals)));
      if (t < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, decimals]);
  return value;
}

function StatItem({ stat, trigger }: { stat: Stat; trigger: boolean }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!trigger) return;
    const id = setTimeout(() => setActive(true), 0);
    return () => clearTimeout(id);
  }, [trigger]);
  const val = useCountUp(stat.target, stat.decimals ?? 0, active);
  const display = (stat.decimals ?? 0) > 0 ? val.toFixed(stat.decimals) : Math.round(val).toString();

  return (
    <div className={`${styles.item}${active ? ' ' + styles.itemActive : ''}`}>
      <div className={styles.num}>
        {stat.prefix && <span className={styles.prefix}>{stat.prefix}</span>}
        {display}
        {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
      </div>
      <div className={styles.label}>{stat.label}</div>
      <div className={styles.desc}>{stat.desc}</div>
    </div>
  );
}

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="metrics-band" ref={ref}>
      <div className="wrap">
        <div className="mb-head">
          <h2 className="display">The numbers behind the platform.</h2>
          <p className='lede'>Measured across $300M+ in managed media — real pilots, real lift.</p>
        </div>
        <div className={styles.wrap}>
          {STATS.map((s, i) => (
            <StatItem key={i} stat={s} trigger={triggered} />
          ))}
        </div>
      </div>
    </div>
  );
}
