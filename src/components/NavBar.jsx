import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background-light/90 backdrop-blur-xl border-b border-gray-200/60 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center bg-navy rounded-lg text-primary">
            <span className="material-symbols-outlined text-[20px]">
              memory
            </span>
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
          <button className="bg-navy hover:bg-navy/90 text-primary text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
