import React from "react";

export default function CtaSection() {
  return (
    <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,194,0.08)_0%,transparent_65%)]"></div>
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10% 20% L 15% 45% L 5% 50% L 15% 75%"
            fill="none"
            stroke="#00FFC2"
            strokeWidth="0.5"
          ></path>
          <path
            d="M 88% 15% L 92% 50% L 80% 85%"
            fill="none"
            stroke="#00FFC2"
            strokeWidth="0.5"
          ></path>
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            r="300"
            stroke="rgba(0,255,194,0.03)"
            strokeWidth="1"
          ></circle>
        </svg>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
          Now available for growth teams
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          Stop repeating expensive decisions.
        </h2>
        <p className="text-lg md:text-xl text-text-light-secondary mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
          Build your team's organizational memory with MemoLogs. The
          intelligence platform for compound growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="group relative h-14 px-10 rounded-full bg-gradient-to-r from-primary to-primary-dark text-navy text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">
            <span className="relative z-10">Get Started for Free</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          <button className="h-14 px-10 rounded-full border border-white/30 bg-transparent text-white text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-md">
            Talk to Sales
          </button>
        </div>
        <footer className="mt-24 md:mt-32 pt-12 md:pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[24px]">
                  memory
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                MemoLogs
              </span>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-semibold text-text-light-muted">
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Security
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Careers
              </a>
            </nav>
            <div className="flex gap-5">
              <a
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-light-muted hover:text-primary hover:border-primary/50 transition-all"
                href="#"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-light-muted hover:text-primary hover:border-primary/50 transition-all"
                href="#"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect height="12" width="4" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 text-center text-xs font-semibold text-text-light-muted uppercase tracking-[0.2em]">
            © 2024 MemoLogs Inc. Built for teams that learn.
          </div>
        </footer>
      </div>
    </section>
  );
}
