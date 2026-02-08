import React from "react";

export default function StackSection() {
  return (
    <section className="py-16 md:py-20 bg-background-light relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="mb-10 md:mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
            Why your current stack <br className="hidden md:block" /> can't
            remember decisions
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed">
            Existing tools capture what happened, not why a decision was made or whether it should be repeated.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/60 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-12px_rgba(0,255,194,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50/30 opacity-50"></div>
            <div className="h-48 w-full mb-8 relative flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-end gap-3 blur-[2px] opacity-80 transition-all duration-500 group-hover:blur-[3px] group-hover:scale-[1.02]">
                <div className="w-1/5 bg-gray-100 h-[40%] rounded-t-lg"></div>
                <div className="w-1/5 bg-gray-200 h-[60%] rounded-t-lg"></div>
                <div className="w-1/5 bg-primary/30 h-[80%] rounded-t-lg"></div>
                <div className="w-1/5 bg-gray-100 h-[50%] rounded-t-lg"></div>
                <div className="w-1/5 bg-gray-200 h-[70%] rounded-t-lg"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md shadow-xl border border-red-100 px-5 py-3 rounded-2xl flex flex-col items-center gap-1 animate-[float_4s_ease-in-out_infinite] hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-1">
                    <span className="material-symbols-outlined">
                      question_mark
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-800">
                    Where is the "Why"?
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-navy mb-3">
                Dashboards
              </h3>
              <p className="text-text-secondary leading-relaxed font-medium">
                They show metrics, not decisions. You see results, not the decisions behind them
              </p>
            </div>
          </div>
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/60 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-12px_rgba(0,255,194,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-purple-50/30 opacity-50"></div>
            <div className="h-48 w-full mb-8 relative flex items-center justify-center perspective-[1000px]">
              <div className="absolute w-36 h-44 bg-white/40 backdrop-blur-sm border border-gray-200 rounded-xl transform -rotate-12 translate-x-[-15px] translate-y-2 shadow-sm transition-transform duration-700 group-hover:-rotate-[15deg] group-hover:translate-x-[-20px]"></div>
              <div className="absolute w-36 h-44 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl transform rotate-6 translate-x-[15px] translate-y-4 shadow-sm transition-transform duration-700 group-hover:rotate-[8deg] group-hover:translate-x-[20px]"></div>
              <div className="absolute w-36 h-44 bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-xl transform -rotate-2 shadow-lg flex flex-col p-4 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
                <div className="h-2 w-16 bg-gray-200 rounded-full mb-4"></div>
                <div className="space-y-2 opacity-50">
                  <div className="h-1.5 w-full bg-gray-200 rounded-full"></div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full"></div>
                  <div className="h-1.5 w-2/3 bg-gray-200 rounded-full"></div>
                </div>
                <div className="mt-auto flex justify-center opacity-30">
                  <span className="material-symbols-outlined text-gray-400 text-4xl">
                    folder_off
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-navy mb-3">
                Notion
              </h3>
              <p className="text-text-secondary leading-relaxed font-medium">
                Stores information, not memory. Decisions fade as pages pile up.
              </p>
            </div>
          </div>
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/60 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-12px_rgba(0,255,194,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-green-50/30 opacity-50"></div>
            <div className="h-48 w-full mb-8 relative flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gray-50 to-white shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_15px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                <span className="material-symbols-outlined text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-400 drop-shadow-sm">
                  check
                </span>
                <div className="absolute -bottom-3 bg-navy text-primary text-[10px] font-bold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-lg border border-white/10">
                  Done ≠ Learned
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-navy mb-3">
                Task Tools
              </h3>
              <p className="text-text-secondary leading-relaxed font-medium">
                They track activity, not outcomes. Useless for knowing if the decision mattered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
