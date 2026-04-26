"use client";

import Link from "next/link";
import { useState } from "react";
import PilotCTA from "@/components/PilotCTA";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="MemoLogs home">
          {/* <svg className="brand-mark" width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00FFC2" />
                <stop offset="100%" stopColor="#00D4A3" />
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="30" height="30" rx="7" fill="#070B16" stroke="url(#bm-g)" strokeWidth="1.2" />
            <g stroke="url(#bm-g)" strokeWidth="2" strokeLinecap="round">
              <line x1="16" y1="6" x2="16" y2="26" />
              <line x1="6" y1="16" x2="26" y2="16" />
              <line x1="9" y1="9" x2="23" y2="23" />
              <line x1="23" y1="9" x2="9" y2="23" />
            </g>
            <circle cx="16" cy="16" r="3.6" fill="#070B16" stroke="url(#bm-g)" strokeWidth="1.6" />
          </svg> */}
          <svg className="brand-mark" width="34" height="34" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g stroke="#2FFFD6" strokeWidth="6" strokeLinecap="round"><line x1="64" y1="64" x2="64" y2="28"></line><line x1="64" y1="64" x2="96" y2="44"></line><line x1="64" y1="64" x2="96" y2="84"></line><line x1="64" y1="64" x2="64" y2="100"></line><line x1="64" y1="64" x2="32" y2="84"></line><line x1="64" y1="64" x2="32" y2="44"></line></g><g fill="#2FFFD6"><circle cx="64" cy="64" r="12"></circle><circle cx="64" cy="28" r="8"></circle><circle cx="96" cy="44" r="8"></circle><circle cx="96" cy="84" r="8"></circle><circle cx="64" cy="100" r="8"></circle><circle cx="32" cy="84" r="8"></circle><circle cx="32" cy="44" r="8"></circle></g></svg>
          <span>
            MemoLogs<span className="dot-accent">.</span>
          </span>
        </Link>

        <nav className="nav-links">
          <div className="nav-item has-dropdown">
            <button>
              Platform <span className="caret">▾</span>
            </button>
            <div className="dropdown">
              <div className="dd-label">Five IQ products</div>
              <Link href="/incrementality-iq">
                <span className="dd-pill">01</span> Incrementality IQ{" "}
                <em>Causal measurement</em>
              </Link>
              <Link href="/creative-iq">
                <span className="dd-pill">02</span> Creative IQ{" "}
                <em>Fatigue detection</em>
              </Link>
              <Link href="/audience-iq">
                <span className="dd-pill">03</span> Audience IQ{" "}
                <em>Buyer-graded segments</em>
              </Link>
              <Link href="/copilot">
                <span className="dd-pill">04</span> AI Co-Pilot{" "}
                <em>Conversational analytics</em>
              </Link>
              <Link href="/memory-iq">
                <span className="dd-pill">05</span> Memory IQ{" "}
                <em>Institutional memory</em>
              </Link>
            </div>
          </div>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/case-studies">Case studies</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="link-muted">
            Sign in
          </a>
          <PilotCTA className="btn btn-primary">Book a pilot →</PilotCTA>
        </div>
      </div>
    </header>
  );
}
