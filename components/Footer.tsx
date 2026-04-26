"use client";

import Link from "next/link";
import PilotCTA from "@/components/PilotCTA";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <svg className="brand-mark" width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="foot-bm-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00FFC2" />
                    <stop offset="100%" stopColor="#00D4A3" />
                  </linearGradient>
                </defs>
                <rect x="1" y="1" width="30" height="30" rx="7" fill="#070B16" stroke="url(#foot-bm-g)" strokeWidth="1.2" />
                <g stroke="url(#foot-bm-g)" strokeWidth="2" strokeLinecap="round">
                  <line x1="16" y1="6" x2="16" y2="26" />
                  <line x1="6" y1="16" x2="26" y2="16" />
                  <line x1="9" y1="9" x2="23" y2="23" />
                  <line x1="23" y1="9" x2="9" y2="23" />
                </g>
                <circle cx="16" cy="16" r="3.6" fill="#070B16" stroke="url(#foot-bm-g)" strokeWidth="1.6" />
              </svg>
              <span>
                MemoLogs<span className="dot-accent">.</span>
              </span>
            </div>
            <p className="foot-tag">Know what actually works.<br />Every campaign. Every dollar.</p>
          </div>
          <div>
            <div className="foot-col-title">Platform</div>
            <Link href="/incrementality-iq">Incrementality IQ</Link>
            <Link href="/creative-iq">Creative IQ</Link>
            <Link href="/audience-iq">Audience IQ</Link>
            <Link href="/copilot">AI Co-Pilot</Link>
            <Link href="/memory-iq">Memory IQ</Link>
          </div>
          <div>
            <div className="foot-col-title">Company</div>
            <Link href="/about">About</Link>
            <Link href="/case-studies">Case studies</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div>
            <div className="foot-col-title">Resources</div>
            <a href="/#calculator">Inflation calculator</a>
            <PilotCTA className="foot-link-btn">Book a pilot</PilotCTA>
            <a href="mailto:hello@memologs.ai">hello@memologs.ai</a>
          </div>
        </div>
        <div className="foot-rule"></div>
        <div className="foot-meta">
          <span>© 2026 MemoLogs, Inc.</span>
          <span>SOC 2 compliant · GDPR-ready · Flat-fee pricing</span>
        </div>
      </div>
    </footer>
  );
}
