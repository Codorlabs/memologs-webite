import React from "react";

export default function SignalSection() {
  return (
    <section className="py-16 md:py-20 bg-background-light relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      }}></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-navy border border-primary/20 rounded-full px-4 py-2 mb-4">
            <span className="material-symbols-outlined text-primary text-sm">filter_alt</span>
            <span className="text-sm font-semibold text-primary">Signal vs Noise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
            Focus on decisions that <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy via-primary-dark to-primary">actually matter</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
            Not every task deserves a log. MemoLogs helps you capture the strategic moves 
            that shape outcomes—and ignore the rest.
          </p>
        </div>

        {/* Visual Signal Meter */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span className="text-sm font-medium text-text-secondary">Noise</span>
          </div>
          <div className="w-1/2 h-2 bg-gradient-to-r from-gray-200 via-gray-300 via-40% to-primary rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/30 border-2 border-white"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm font-semibold text-primary-dark">Signal</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Low Signal Card - NOISE */}
          <div className="relative group">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-10 h-full flex flex-col relative overflow-hidden">
              {/* Diagonal stripes overlay */}
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)`
              }}></div>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 relative">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-text-muted text-xl">volume_off</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Skip These</span>
                    <h3 className="text-xl font-bold text-navy">Low-impact activities</h3>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-text-muted text-lg">close</span>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-text-secondary text-sm mb-6 border-l-2 border-gray-200 pl-4">
                These tasks happen every day but rarely influence your bottom line. 
                Don't clutter your decision history with them.
              </p>

              {/* Items */}
              <div className="space-y-3 flex-1 relative">
                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 border border-gray-100 group/item hover:bg-gray-100 transition-colors cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-text-muted">
                    <span className="material-symbols-outlined text-lg">settings</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy text-sm">Routine ops & fixes</h4>
                    <p className="text-xs text-text-muted">Standard maintenance tasks</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 text-lg">remove</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 border border-gray-100 group/item hover:bg-gray-100 transition-colors cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-text-muted">
                    <span className="material-symbols-outlined text-lg">sync_alt</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy text-sm">Daily creative swaps</h4>
                    <p className="text-xs text-text-muted">A/B copy & image rotations</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 text-lg">remove</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 border border-gray-100 group/item hover:bg-gray-100 transition-colors cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-text-muted">
                    <span className="material-symbols-outlined text-lg">tune</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy text-sm">Micro-optimizations</h4>
                    <p className="text-xs text-text-muted">Small bid & budget tweaks</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 text-lg">remove</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 border border-gray-100 group/item hover:bg-gray-100 transition-colors cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-text-muted">
                    <span className="material-symbols-outlined text-lg">build</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy text-sm">Housekeeping work</h4>
                    <p className="text-xs text-text-muted">Naming conventions, cleanup</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-300 text-lg">remove</span>
                </div>
              </div>

              {/* Visual indicator - Flat line (no impact) */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>Impact over time</span>
                  <span>Minimal</span>
                </div>
                <div className="h-12 w-full flex items-center px-4 bg-gray-50 rounded-lg">
                  <svg className="w-full h-6" viewBox="0 0 200 24" fill="none">
                    <path d="M0 12 L200 12" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* High Signal Card - SIGNAL */}
          <div className="relative group lg:transform lg:scale-[1.02]">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            
            <div className="bg-navy rounded-3xl border-2 border-primary/20 p-8 lg:p-10 h-full flex flex-col relative shadow-xl shadow-primary/5">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">bolt</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Log These</span>
                    <h3 className="text-xl font-bold text-white">Strategic decisions</h3>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-text-light-secondary text-sm mb-6 border-l-2 border-primary/30 pl-4">
                These are the pivots, bets, and shifts that define your trajectory. 
                Capture them so you can learn from every outcome.
              </p>

              {/* Items */}
              <div className="space-y-3 flex-1">
                <div className="bg-primary/5 p-4 rounded-xl flex items-center gap-4 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default group/item">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">attach_money</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Moving money</h4>
                    <p className="text-xs text-text-light-muted">Budget re-allocation & major spend</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl flex items-center gap-4 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default group/item">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">alt_route</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Changing distribution</h4>
                    <p className="text-xs text-text-light-muted">Audience targeting & channel shifts</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl flex items-center gap-4 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default group/item">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">lightbulb</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Testing new ideas</h4>
                    <p className="text-xs text-text-light-muted">Creative strategy & hypotheses</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl flex items-center gap-4 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default group/item">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">crisis_alert</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm">Responding to incidents</h4>
                    <p className="text-xs text-text-light-muted">Unexpected drops & recovery actions</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                </div>
              </div>

              {/* Visual indicator - Growth line (high impact) */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-text-light-secondary">Impact over time</span>
                  <span className="text-primary font-semibold">Compounding</span>
                </div>
                <div className="h-12 w-full flex items-center px-4 bg-primary/5 rounded-lg">
                  <svg className="w-full h-8" viewBox="0 0 200 32" fill="none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#00FFC2"/>
                      </linearGradient>
                    </defs>
                    <path d="M0 28 Q50 26 80 20 T140 10 T200 2" stroke="url(#lineGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <circle cx="200" cy="2" r="3" fill="#00FFC2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12">
          <div className="inline-flex items-center gap-4 bg-navy border border-primary/20 rounded-2xl px-8 py-5 shadow-lg">
            <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
            <p className="text-lg md:text-xl text-white font-medium">
              MemoLogs keeps your log <span className="font-bold text-primary">valuable</span> by keeping it <span className="font-bold text-primary">focused</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
