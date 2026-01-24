import React from "react";

export default function ChangesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FBFBFD] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#1d1d1f] tracking-tight">
            What changes after MemoLogs
          </h2>
        </div>
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] border border-gray-100">
          <div className="flex-1 bg-[#1a1a1f] p-10 md:p-16 flex flex-col relative overflow-hidden border-r border-[#2a2a32]">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4"></div>
            <div className="relative z-10">
              <div className="mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/20">
                  Before MemoLogs
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-300 tracking-tight">
                  Guesswork &amp; Repetition
                </h3>
              </div>
              <div className="space-y-8 mt-4 relative">
                <div className="flex items-start gap-4 opacity-80 hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#43434d] border border-[#43434d] flex-shrink-0"></div>
                  <div className="bg-[#43434d] p-5 rounded-2xl rounded-tl-none shadow-lg border border-[#43434d] max-w-sm transform -rotate-1">
                    <p className="text-gray-400 font-medium leading-relaxed">
                      "Let’s try this again — I think we tested it before?"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 flex-row-reverse opacity-70 hover:opacity-100 transition-opacity duration-500 pt-8">
                  <div className="w-10 h-10 rounded-full bg-[#43434d] border border-[#43434d] flex-shrink-0"></div>
                  <div className="bg-[#43434d] p-5 rounded-2xl rounded-tr-none shadow-lg border border-[#43434d] max-w-sm transform rotate-1">
                    <p className="text-gray-400 font-medium leading-relaxed">
                      "Why did CPA spike last time we scaled?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#0A0F1D] p-10 md:p-16 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00FFC2]/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00FFC2]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
            <div className="relative z-10">
              <div className="mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-[#00FFC2]/10 text-[#00FFC2] text-xs font-bold uppercase tracking-widest mb-4 border border-[#00FFC2]/30 shadow-[0_0_15px_rgba(0,255,194,0.2)]">
                  After MemoLogs
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-sm">
                  Compound Learning
                </h3>
              </div>
              <div className="space-y-6 mt-4">
                <div className="group bg-[#141b2d] backdrop-blur-xl border border-[#1a2235] p-6 rounded-2xl shadow-xl hover:border-[#00FFC2]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFC2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.15)] shrink-0">
                      <span className="material-symbols-outlined">
                        history_edu
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-bold text-base">
                          Historical Insight
                        </h4>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 border border-red-500/20 font-medium">
                          Critical
                        </span>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed font-light">
                        "This failed twice under similar conditions."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group bg-[#141b2d] backdrop-blur-xl border border-[#1a2235] p-6 rounded-2xl shadow-xl hover:border-[#00FFC2]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden delay-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFC2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#00FFC2]/10 border border-[#00FFC2]/30 flex items-center justify-center text-[#00FFC2] shadow-[0_0_20px_rgba(0,255,194,0.15)] shrink-0">
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
                      <p className="text-gray-300 text-lg leading-relaxed font-light">
                        "Scaling beyond{" "}
                        <span className="text-[#00FFC2] font-medium">
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
          <p className="text-3xl md:text-5xl font-[350] text-[#1d1d1f] tracking-tight leading-[1.2]">
            That’s not reporting. <br />
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#00FFC2] to-[#00D9A5]">
              That’s organizational learning.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
