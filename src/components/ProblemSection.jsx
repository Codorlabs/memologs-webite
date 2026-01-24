import React from "react";

export default function ProblemSection() {
  return (
    <section
      className="bg-surface-gray py-16 md:py-24 relative overflow-hidden"
      id="problem"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-6 leading-[1.15]">
              Your team isn't forgetting metrics. <br />
              <span className="bg-navy text-primary p-2 text-3xl rounded-sm px-5">
                They're forgetting decisions.
              </span>
            </h2>
            
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Every growth team
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-navy shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">science</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d1d1f] text-base mb-1">
                      Tests constantly
                    </h4>
                    <p className="text-sm text-gray-600">
                      Launching new experiments every week.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-navy shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">tune</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d1d1f] text-base mb-1">
                      Changes variables
                    </h4>
                    <p className="text-sm text-gray-600">
                      Budgets, creatives, and targeting shift daily.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-navy shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d1d1f] text-base mb-1">
                      Moves fast
                    </h4>
                    <p className="text-sm text-gray-600">
                      Execution speed is prioritized under pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative">
            <div className="bg-[#0A0F1D] rounded-2xl shadow-2xl border border-[#1a2235] p-6 md:p-8 relative">
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                  But when results change, <br />
                  no one remembers:
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#141b2d] text-gray-300 rounded-full text-xs font-semibold border border-[#1a2235]">
                    Why
                  </span>
                  <span className="px-3 py-1.5 bg-[#141b2d] text-gray-300 rounded-full text-xs font-semibold border border-[#1a2235]">
                    What conditions
                  </span>
                  <span className="px-3 py-1.5 bg-[#141b2d] text-gray-300 rounded-full text-xs font-semibold border border-[#1a2235]">
                    Whether it failed before
                  </span>
                </div>
              </div>

              {/* Timeline - Using proven alignment approach from example */}
              <div className="relative pl-6 sm:pl-8 md:pl-10 border-l-2 border-[#1a2235] space-y-6 sm:space-y-8 md:space-y-10">
                {/* January - First Experiment */}
                <div className="relative">
                  {/* Dot: Following example pattern (padding + 10px offset): pl-6=24px so -34px, pl-8=32px so -42px, pl-10=40px so -50px */}
                  <div className="absolute -left-[34px] sm:-left-[42px] md:-left-[50px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0A0F1D] border-2 border-[#00FFC2] shadow-sm z-10"></div>
                  <div className="bg-[#141b2d] p-4 sm:p-5 rounded-lg border border-[#1a2235]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-bold text-[#00FFC2] uppercase tracking-wide">
                        January
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                      "Launch freemium tier to boost Top of Funnel."
                    </p>
                  </div>
                </div>

                {/* March - Paused */}
                <div className="relative">
                  <div className="absolute -left-[34px] sm:-left-[42px] md:-left-[50px] top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0A0F1D] border-2 border-gray-500 flex items-center justify-center z-10">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="bg-[#141b2d]/60 p-4 sm:p-5 rounded-lg border border-[#1a2235]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wide">
                        March - Paused
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Conversion dropped. (Reason lost in Slack)
                    </p>
                  </div>
                </div>

                {/* July - The Loop */}
                <div className="relative">
                  <div className="absolute -left-[34px] sm:-left-[42px] md:-left-[50px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00FFC2] border-2 border-[#0A0F1D] shadow-[0_0_12px_rgba(0,255,194,0.5)] z-10"></div>
                  <div className="bg-[#00FFC2]/10 p-4 sm:p-5 rounded-lg border-2 border-[#00FFC2]/40">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-2">
                      <span className="text-xs sm:text-sm font-bold text-[#00FFC2] uppercase tracking-wide">
                        July (Six months later)
                      </span>
                      <span className="text-[10px] sm:text-xs bg-[#00FFC2] text-[#0A0F1D] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-bold uppercase tracking-wide inline-block w-fit">
                        The Loop
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-white font-semibold leading-relaxed mb-2">
                      "Hey, we should try a freemium tier."
                    </p>
                    <p className="text-xs sm:text-sm text-[#00FFC2] font-medium italic border-t border-[#00FFC2]/20 pt-2">
                      Re-testing the same idea unknowingly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Message */}
              <div className="mt-8 pt-6 border-t border-[#1a2235] text-center">
                <p className="text-lg font-bold text-white leading-snug">
                  That's not a tooling problem.
                  <br />
                  That's a{" "}
                  <span className="text-[#0A0F1D] bg-[#00FFC2] px-2 py-0.5 rounded">
                    memory problem
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
