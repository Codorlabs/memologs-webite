import React from "react";

export default function AnswersSection() {
  return (
    <section className="py-16 md:py-20 bg-background-light relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Your company can finally answer the questions it already knows
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-medium max-w-2xl mx-auto">
            Memologs doesn't guess. It surfaces patterns from decisions your
            company has actually made.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-navy border border-white/10 ring-1 ring-white/10">
          <div className="bg-gradient-to-br from-navy to-[#04091A] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 md:w-64 md:h-64 bg-primary-dark/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-[10px] font-bold text-primary/70 uppercase tracking-[0.2em] block mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  Search your organization's memory
                </span>
                <div className="flex items-center gap-4 p-5 bg-surface-dark border border-white/10 rounded-2xl shadow-lg relative group transition-all hover:border-primary/40">
                  <span className="material-symbols-outlined text-primary/80">
                    search
                  </span>
                  <div className="flex-1 text-white/90 font-medium">
                    <span className="text-primary/60 mr-2">Ask:</span>
                    "What happened when we refreshed creatives?"
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all pointer-events-none"></div>
                </div>
              </div>

              <div className="relative py-2">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
              </div>

              <div className="pl-0 md:pl-8">
                <div className="bg-surface-dark/90 backdrop-blur-sm p-8 border border-white/10 rounded-2xl shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        auto_awesome
                      </span>
                      Memologs finds:
                    </span>
                    <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">
                        Confidence:
                      </span>
                      <span className="text-primary font-bold text-xs">
                        Medium
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        7 past creative refresh decisions
                      </h4>
                      <div className="flex flex-wrap gap-2 text-sm text-white/70 font-medium">
                        <span>Similar conditions:</span>
                        <span className="text-white bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          prospecting
                        </span>
                        <span className="text-white bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          Meta
                        </span>
                        <span className="text-white bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          US
                        </span>
                      </div>
                    </div>

                    <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent border-l-2 border-primary/50 rounded-r-2xl">
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-2 opacity-80">
                        Outcome pattern
                      </span>
                      <p className="text-white/90 font-medium leading-relaxed">
                        Rotating from Influencer to UGC consistently{" "}
                        <span className="text-primary font-bold border-b border-primary/40">
                          reduced CAC
                        </span>
                        .
                      </p>
                      <p className="text-[10px] text-white/50 mt-2 font-mono">
                        Based on 5/7 similar cases
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-navy border border-primary/20 rounded-2xl px-8 py-5 shadow-lg">
            <span className="material-symbols-outlined text-primary text-2xl">
              auto_awesome
            </span>
            <p className="text-lg md:text-xl text-white font-medium">
              This isn't AI advice. It's your organization remembering what it
              already paid to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
