import React from "react";

export default function ProblemSection() {
  return (
    <section
      className="bg-surface-gray py-24 md:py-32 relative overflow-hidden"
      id="problem"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-8 leading-[1.15]">
              Your team isn't forgetting metrics. <br />
              <span className="inline-block bg-navy text-primary py-1 px-4 mt-2 rounded-lg text-3xl md:text-4xl">
                They're forgetting decisions.
              </span>
            </h2>
            
            <div className="mb-8">
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-4">
                Every growth team
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">science</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base mb-1">
                      Tests constantly
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Launching new experiments every week.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">tune</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base mb-1">
                      Changes variables
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Budgets, creatives, and targeting shift daily.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base mb-1">
                      Moves fast
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Execution speed is prioritized under pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative">
            <div className="bg-navy rounded-2xl shadow-2xl border border-surface-dark p-6 md:p-8 relative">
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                  But when results change, <br />
                  no one remembers:
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-surface-dark text-text-light-secondary rounded-full text-xs font-semibold border border-white/10">
                    Why
                  </span>
                  <span className="px-3 py-1.5 bg-surface-dark text-text-light-secondary rounded-full text-xs font-semibold border border-white/10">
                    What conditions
                  </span>
                  <span className="px-3 py-1.5 bg-surface-dark text-text-light-secondary rounded-full text-xs font-semibold border border-white/10">
                    Whether it failed before
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-6 sm:pl-8 md:pl-10 border-l-2 border-white/10 space-y-6 sm:space-y-8 md:space-y-10">
                {/* January - First Experiment */}
                <div className="relative">
                  <div className="absolute -left-[34px] sm:-left-[42px] md:-left-[50px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-navy border-2 border-primary shadow-sm z-10"></div>
                  <div className="bg-surface-dark p-4 sm:p-5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wide">
                        January
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-text-light-secondary font-medium leading-relaxed">
                      "Launch freemium tier to boost Top of Funnel."
                    </p>
                  </div>
                </div>

                {/* March - Paused */}
                <div className="relative">
                  <div className="absolute -left-[34px] sm:-left-[42px] md:-left-[50px] top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-navy border-2 border-text-muted flex items-center justify-center z-10">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-text-muted"></div>
                  </div>
                  <div className="bg-surface-dark/60 p-4 sm:p-5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-bold text-text-light-muted uppercase tracking-wide">
                        March - Paused
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-text-light-muted leading-relaxed">
                      Conversion dropped. (Reason lost in Slack)
                    </p>
                  </div>
                </div>

                {/* July - The Loop */}
                <div className="relative">
                  <div className="absolute -left-[34px] sm:-left-[42px] md:-left-[50px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary border-2 border-navy shadow-[0_0_12px_rgba(0,255,194,0.5)] z-10"></div>
                  <div className="bg-primary/10 p-4 sm:p-5 rounded-lg border-2 border-primary/40">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-2">
                      <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wide">
                        July (Six months later)
                      </span>
                      <span className="text-[10px] sm:text-xs bg-primary text-navy px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-bold uppercase tracking-wide inline-block w-fit">
                        The Loop
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-white font-semibold leading-relaxed mb-2">
                      "Hey, we should try a freemium tier."
                    </p>
                    <p className="text-xs sm:text-sm text-primary font-medium italic border-t border-primary/20 pt-2">
                      Re-testing the same idea unknowingly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Message */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-lg font-bold text-white leading-snug">
                  That's not a tooling problem.
                  <br />
                  That's a{" "}
                  <span className="text-navy bg-primary px-2 py-0.5 rounded">
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
