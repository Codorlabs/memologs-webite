import React from "react";

export default function HowItWorksSection() {
  return (
    <section
      className="py-32 bg-surface-gray relative overflow-hidden"
      id="how-it-works"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#00FFC2]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#1d1d1f] mb-4 tracking-tight">
            Intelligence in three steps
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light font-display">
            No heavy setup. No rigid workflows. <br className="hidden md:block" />
            Just better judgment over time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100/50 p-2 mb-8 h-64 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
              <div className="relative w-full max-w-[260px] bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl p-4 transform transition-all duration-500 group-hover:scale-105">
                <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-sm">
                      bolt
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-16 bg-gray-200 rounded mb-1"></div>
                    <div className="h-1.5 w-10 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-3">
                    <span className="w-0.5 h-4 bg-primary animate-pulse"></span>
                    <span className="ml-1 text-xs text-gray-400">
                      Log a decision...
                    </span>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="w-12 h-6 bg-primary rounded-md shadow-lg shadow-primary/20"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
              1. Log the decision
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Capture context without leaving your workflow. Log decisions
              directly from Slack or your browser.
            </p>
          </div>
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100/50 p-2 mb-8 h-64 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
              <div className="relative w-full max-w-[260px] flex flex-wrap content-center justify-center gap-3 p-4">
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-600 text-xs font-semibold shadow-sm transform -rotate-2 hover:scale-110 transition-transform cursor-default">
                  Scale +20%
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 text-purple-600 text-xs font-semibold shadow-sm transform rotate-3 hover:scale-110 transition-transform cursor-default">
                  Retargeting
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 text-orange-600 text-xs font-semibold shadow-sm transform -rotate-1 translate-y-1 hover:scale-110 transition-transform cursor-default">
                  Q3 Budget
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 text-emerald-600 text-xs font-semibold shadow-sm transform rotate-6 hover:scale-110 transition-transform cursor-default">
                  Mobile First
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
              2. Capture the conditions
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Tag your bets with context. Track audience, budget, and hypothesis
              parameters effortlessly.
            </p>
          </div>
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-3xl shadow-soft border border-gray-100/50 p-2 mb-8 h-64 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
              <div className="relative w-full max-w-[260px] h-full flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-red-100 shadow-sm opacity-60 mb-8">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-[10px] font-medium text-gray-400 line-through">
                    Experiment Q1
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-0.5 h-16 bg-gradient-to-b from-red-200 to-primary/50"></div>
                  <div className="absolute bg-white border border-yellow-200 text-yellow-600 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px]">
                      warning
                    </span>{" "}
                    Insight
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-primary/20 shadow-lg relative z-10 mt-8">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold text-gray-800">
                    New Proposal
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
              3. Learn once. Remember forever.
            </h3>
            <p className="text-gray-500 leading-relaxed">
              The system automatically links past failures to current
              decisions, preventing expensive repeats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
