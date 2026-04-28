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
              <svg className="brand-mark" width="34" height="34" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g stroke="#2FFFD6" strokeWidth="6" strokeLinecap="round">
                  <line x1="64" y1="64" x2="64" y2="28"></line>
                  <line x1="64" y1="64" x2="96" y2="44"></line>
                  <line x1="64" y1="64" x2="96" y2="84"></line>
                  <line x1="64" y1="64" x2="64" y2="100"></line>
                  <line x1="64" y1="64" x2="32" y2="84"></line>
                  <line x1="64" y1="64" x2="32" y2="44"></line>
                </g>
                <g fill="#2FFFD6">
                  <circle cx="64" cy="64" r="12"></circle>
                  <circle cx="64" cy="28" r="8"></circle>
                  <circle cx="96" cy="44" r="8"></circle>
                  <circle cx="96" cy="84" r="8"></circle>
                  <circle cx="64" cy="100" r="8"></circle>
                  <circle cx="32" cy="84" r="8"></circle>
                  <circle cx="32" cy="44" r="8"></circle>
                </g>
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
