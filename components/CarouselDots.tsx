"use client";

import { useEffect, useRef, useState } from "react";

export default function CarouselDots({ targetSelector }: { targetSelector: string }) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);
  const stripRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const strip = document.querySelector(targetSelector) as HTMLElement | null;
    if (!strip) return;
    stripRef.current = strip;
    const cards = () => Array.from(strip.children) as HTMLElement[];
    setCount(cards().length);

    const onScroll = () => {
      const sr = strip.getBoundingClientRect();
      const center = sr.left + sr.width / 2;
      let idx = 0;
      let best = Infinity;
      cards().forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - center);
        if (d < best) {
          best = d;
          idx = i;
        }
      });
      setActive(idx);
    };

    onScroll();
    strip.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      strip.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetSelector]);

  if (count <= 1) return null;

  const go = (i: number) => {
    const strip = stripRef.current;
    if (!strip) return;
    const card = strip.children[i] as HTMLElement | undefined;
    if (!card) return;
    const sr = strip.getBoundingClientRect();
    const cr = card.getBoundingClientRect();
    strip.scrollTo({ left: strip.scrollLeft + (cr.left - sr.left), behavior: "smooth" });
  };

  return (
    <div className="cq-carousel-dots" role="tablist" aria-label="Component cards">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          className={"cq-carousel-dot" + (i === active ? " is-active" : "")}
          aria-label={`Go to card ${i + 1}`}
          aria-selected={i === active}
          onClick={() => go(i)}
        />
      ))}
    </div>
  );
}
