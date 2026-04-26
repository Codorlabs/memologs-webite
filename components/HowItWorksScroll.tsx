'use client';

import { useEffect } from 'react';

export default function HowItWorksScroll() {
  useEffect(() => {
    const track   = document.querySelector('.hw-track') as HTMLElement | null;
    const spine   = document.getElementById('hwSpineFill');
    const ring    = document.querySelector('.hw-rail-ring-fill') as SVGCircleElement | null;
    const pctEl   = document.getElementById('hwRailPct');
    const labelEl = document.getElementById('hwRailLabel');
    const chapEl  = document.getElementById('hwRailChap');
    const rail    = document.querySelector('.hw-rail') as HTMLElement | null;
    if (!track || !spine || !ring) return;

    const reduced   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const milestones = Array.from(track.querySelectorAll('.hw-ms')) as HTMLElement[];
    const chapters   = Array.from(track.querySelectorAll('.hw-chapter')) as HTMLElement[];
    const RING_CIRC  = 163.36;

    function setProgress(pct: number) {
      pct = Math.max(0, Math.min(100, pct));
      spine!.style.height = pct + '%';
      ring!.style.strokeDashoffset = String(RING_CIRC * (1 - pct / 100));
      if (pctEl) pctEl.textContent = Math.round(pct) + '%';
    }

    function updateActiveMilestone(scrollMid: number) {
      let active: HTMLElement | null = null;
      for (const el of milestones) {
        const r = el.getBoundingClientRect();
        if (r.top + r.height / 2 < scrollMid) active = el;
      }
      milestones.forEach(el => el.classList.toggle('is-active', el === active));

      if (active && labelEl && chapEl) {
        labelEl.textContent = (active as HTMLElement).dataset.day || '';
        let chap: HTMLElement | null = null;
        for (const c of chapters) {
          const r = c.getBoundingClientRect();
          if (r.top < scrollMid) chap = c;
        }
        if (chap) chapEl.textContent = (chap as HTMLElement).dataset.label || '';
      } else {
        if (labelEl) labelEl.textContent = 'Pre-kickoff';
        if (chapEl)  chapEl.textContent  = 'Chapter 01 · Connect';
      }
    }

    function update() {
      const rect     = track!.getBoundingClientRect();
      const vh       = window.innerHeight;
      const total    = rect.height + vh;
      const passed   = Math.min(Math.max(vh - rect.top, 0), total);
      const progress = (passed / total) * 100;
      setProgress(progress);
      updateActiveMilestone(vh / 2);
    }

    if (!reduced && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
      milestones.forEach(el => io.observe(el));
      chapters.forEach(el => io.observe(el));
    } else {
      milestones.forEach(el => el.classList.add('is-visible'));
      chapters.forEach(el => el.classList.add('is-visible'));
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    if ('IntersectionObserver' in window && rail) {
      const railIo = new IntersectionObserver((entries) => {
        entries.forEach(e => rail!.classList.toggle('is-active', e.isIntersecting));
      }, { rootMargin: '-30% 0px -40% 0px' });
      railIo.observe(track!);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
