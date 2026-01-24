import React from "react";

export default function ChangesSection() {
  return (
    <section className="py-24 md:py-32 bg-background-light relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            What changes after MemoLogs
          </h2>
        </div>
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] border border-gray-200">
          <div className="flex-1 bg-surface-gray p-10 md:p-16 flex flex-col relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-12">
                <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/20">
                  Before MemoLogs
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
                  Guesswork &amp; Repetition
                </h3>
              </div>
              <div className="space-y-8 mt-4 relative">
                <div className="flex items-start gap-4 opacity-80 hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 rounded-full bg-text-secondary flex-shrink-0"></div>
                  <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-lg border border-gray-200 max-w-sm transform -rotate-1">
                    <p className="text-navy font-medium leading-relaxed">
                      "Let’s try this again — I think we tested it before?"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 flex-row-reverse opacity-70 hover:opacity-100 transition-opacity duration-500 pt-8">
                  <div className="w-10 h-10 rounded-full bg-text-muted flex-shrink-0"></div>
                  <div className="bg-white p-5 rounded-2xl rounded-tr-none shadow-lg border border-gray-200 max-w-sm transform rotate-1">
                    <p className="text-navy font-medium leading-relaxed">
                      "Why did CPA spike last time we scaled?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-navy p-10 md:p-16 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
            <div className="relative z-10">
              <div className="mb-12">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/30 shadow-[0_0_15px_rgba(0,255,194,0.2)]">
                  After MemoLogs
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-sm">
                  Compound Learning
                </h3>
              </div>
              <div className="space-y-6 mt-4">
                <div className="group bg-surface-dark backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-accent-ruby/10 border border-accent-ruby/30 flex items-center justify-center text-accent-ruby shadow-[0_0_20px_rgba(239,68,68,0.15)] shrink-0">
                      <span className="material-symbols-outlined">
                        history_edu
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-bold text-base">
                          Historical Insight
                        </h4>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-accent-ruby/20 text-accent-ruby border border-accent-ruby/20 font-semibold">
                          Critical
                        </span>
                      </div>
                      <p className="text-text-light-secondary text-lg leading-relaxed">
                        "This failed twice under similar conditions."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group bg-surface-dark backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden delay-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,255,194,0.15)] shrink-0">
                      <span className="material-symbols-outlined">
                        trending_down
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-bold text-base">
                          Performance Alert
                        </h4>
                      </div>
                      <p className="text-text-light-secondary text-lg leading-relaxed">
                        "Scaling beyond{" "}
                        <span className="text-primary font-semibold">
                          +20%
                        </span>{" "}
                        broke efficiency last quarter."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-navy tracking-tight leading-[1.2]">
            That’s not reporting. <br />
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy via-primary-dark to-primary">
              That’s organizational learning.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
