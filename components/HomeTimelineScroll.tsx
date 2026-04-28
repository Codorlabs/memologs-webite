'use client';

import { useEffect } from 'react';

export default function HomeTimelineScroll() {
  useEffect(() => {
    const timeline = document.querySelector('.timeline') as HTMLElement | null;
    const fill = document.querySelector('.timeline-progress') as HTMLElement | null;
    const items = Array.from(document.querySelectorAll('.timeline li')) as HTMLElement[];
    const landClose = document.querySelector('.land-close') as HTMLElement | null;
    if (!timeline || !fill) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function update() {
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const passed = Math.min(Math.max(vh - rect.top, 0), total);
      const progress = Math.max(0, Math.min(100, (passed / total) * 100));
      fill.style.height = `${progress}%`;

      const fillHeight = (progress / 100) * timeline.offsetHeight;
      const revealLine = vh * 0.82;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const dotY = item.offsetTop + 34;

        item.classList.toggle('is-visible', reduced || itemRect.top < revealLine);

        item.classList.toggle('is-active', fillHeight >= dotY);
      });

      if (landClose) {
        const landRect = landClose.getBoundingClientRect();
        landClose.classList.toggle('is-visible', reduced || landRect.top < vh * 0.8);
      }
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}