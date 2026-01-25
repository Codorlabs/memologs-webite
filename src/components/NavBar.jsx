import React from "react";
import { useWaitlistModal } from "../contexts/WaitlistModalContext";

export default function NavBar() {
  const { openModal } = useWaitlistModal();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background-light/90 backdrop-blur-xl border-b border-gray-200/60 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center bg-navy rounded-lg text-primary">
            <svg width="24" height="24" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#2FFFD6" strokeWidth="6" strokeLinecap="round">
                <line x1="64" y1="64" x2="64" y2="28" />
                <line x1="64" y1="64" x2="96" y2="44" />
                <line x1="64" y1="64" x2="96" y2="84" />
                <line x1="64" y1="64" x2="64" y2="100" />
                <line x1="64" y1="64" x2="32" y2="84" />
                <line x1="64" y1="64" x2="32" y2="44" />
              </g>
              <g fill="#2FFFD6">
                <circle cx="64" cy="64" r="12" />
                <circle cx="64" cy="28" r="8" />
                <circle cx="96" cy="44" r="8" />
                <circle cx="96" cy="84" r="8" />
                <circle cx="64" cy="100" r="8" />
                <circle cx="32" cy="84" r="8" />
                <circle cx="32" cy="44" r="8" />
              </g>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-navy">
            MemoLogs
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-semibold text-text-secondary hover:text-navy transition-colors"
            href="#problem"
          >
            The Problem
          </a>
          <a
            className="text-sm font-semibold text-text-secondary hover:text-navy transition-colors"
            href="#solution"
          >
            Solution
          </a>
          <a
            className="text-sm font-semibold text-text-secondary hover:text-navy transition-colors"
            href="#how-it-works"
          >
            How it Works
          </a>
          <a
            className="text-sm font-semibold text-text-secondary hover:text-navy transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={openModal}
            className="bg-navy hover:bg-navy/90 text-primary text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
