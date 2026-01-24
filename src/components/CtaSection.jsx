import React from "react";

export default function CtaSection() {
  return (
    <section class="relative bg-background-dark pt-48 pb-10 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,194,0.08)_0%,transparent_65%)]"></div>
      <div class="absolute inset-0 pointer-events-none">
        <div class="neural-node top-[20%] left-[10%] animate-pulse"></div>
        <div class="neural-node top-[45%] left-[5%] opacity-40 scale-75"></div>
        <div class="neural-node bottom-[25%] left-[15%] scale-110"></div>
        <div class="neural-node top-[15%] right-[12%] scale-150 shadow-[0_0_20px_#00FFC2]"></div>
        <div class="neural-node top-[50%] right-[8%] opacity-60"></div>
        <div class="neural-node bottom-[15%] right-[20%] scale-90"></div>
        <div class="neural-line w-64 top-[22%] left-[12%] rotate-25"></div>
        <div class="neural-line w-80 top-[48%] left-[7%] -rotate-12"></div>
        <div class="neural-line w-48 top-[18%] right-[15%] rotate-155"></div>
        <div class="neural-line w-72 bottom-[20%] right-[22%] rotate-[5deg]"></div>
        <svg
          class="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10% 20% L 15% 45% L 5% 50% L 15% 75%"
            fill="none"
            stroke="#00FFC2"
            stroke-width="0.5"
          ></path>
          <path
            d="M 88% 15% L 92% 50% L 80% 85%"
            fill="none"
            stroke="#00FFC2"
            stroke-width="0.5"
          ></path>
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            r="300"
            stroke="rgba(0,255,194,0.03)"
            stroke-width="1"
          ></circle>
        </svg>
      </div>
      <div class="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <div class="inline-block mb-8 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
          Now available for growth teams
        </div>
        <h2 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight text-glow">
          Stop repeating expensive decisions.
        </h2>
        <p class="text-xl md:text-2xl text-gray-400 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
          Build your team's organizational memory with MemoLogs. The
          intelligence platform for compound growth.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button class="group relative h-16 px-12 rounded-full bg-gradient-to-r from-primary to-[#00CC9B] text-navy text-lg font-black shadow-emerald-glow hover:scale-105 transition-all duration-300">
            <span class="relative z-10">Get Started for Free</span>
            <div class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          <button class="h-16 px-12 rounded-full border border-white/30 bg-transparent text-white text-lg font-bold hover:bg-white/10 transition-all backdrop-blur-md">
            Talk to Sales
          </button>
        </div>
        <footer class="mt-32 pt-16 border-t border-white/10">
          <div class="flex flex-col md:flex-row items-center justify-between gap-10">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl text-primary border border-white/5">
                <span class="material-symbols-outlined text-[24px] logo-m">
                  hub
                </span>
              </div>
              <span class="text-xl font-bold tracking-tight text-white">
                MemoLogs
              </span>
            </div>
            <nav class="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-semibold text-gray-500">
              <a class="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a class="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
              <a class="hover:text-primary transition-colors" href="#">
                Security
              </a>
              <a class="hover:text-primary transition-colors" href="#">
                Careers
              </a>
            </nav>
            <div class="flex gap-5">
              <a
                class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                href="#"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                href="#"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect height="12" width="4" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-12 text-center text-xs font-bold text-gray-600 uppercase tracking-[0.3em]">
            © 2024 MemoLogs Inc. Built for teams that learn.
          </div>
        </footer>
      </div>
    </section>
  );
}
