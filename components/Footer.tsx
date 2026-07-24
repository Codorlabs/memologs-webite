"use client";

import Link from "next/link";
import Image from "next/image";
import PilotCTA from "@/components/PilotCTA";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <Image className="brand-mark" src="/brand/memologs-mark.png" width={34} height={34} alt="" aria-hidden="true" />
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
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
            <a href="mailto:hello@memologs.com">hello@memologs.com</a>
          </div>
        </div>
        <div className="foot-rule"></div>
        <div className="foot-meta">
          <span>© 2026 MEMO AI, Inc.</span>
        </div>
      </div>
    </footer>
  );
}
