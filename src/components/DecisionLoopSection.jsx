import React from "react";

export default function DecisionLoopSection() {
  return (
    <section className="py-16 md:py-20 bg-[#0A0F1D] border-y border-[#1a2235]" id="solution">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            The Decision Loop
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            How Memologs turns decisions into memory.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-[#1a2235] z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#141b2d] border-2 border-[#1a2235] text-gray-400 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00FFC2] group-hover:text-[#00FFC2] transition-all duration-300 relative">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
              <h4 className="font-bold text-white mb-2">Context</h4>
              <p className="text-sm text-gray-400 px-2">
                The "why" behind the move.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#141b2d] border-2 border-[#1a2235] text-gray-400 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00FFC2] group-hover:text-[#00FFC2] transition-all duration-300 relative">
                <span className="material-symbols-outlined text-3xl">
                  lightbulb
                </span>
              </div>
              <h4 className="font-bold text-white mb-2">Hypothesis</h4>
              <p className="text-sm text-gray-400 px-2">
                What you expect to happen.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#141b2d] border-2 border-[#1a2235] text-gray-400 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00FFC2] group-hover:text-[#00FFC2] transition-all duration-300 relative">
                <span className="material-symbols-outlined text-3xl">
                  rocket_launch
                </span>
              </div>
              <h4 className="font-bold text-white mb-2">Action</h4>
              <p className="text-sm text-gray-400 px-2">
                The actual implementation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#141b2d] border-2 border-[#1a2235] text-gray-400 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-[#00FFC2] group-hover:text-[#00FFC2] transition-all duration-300 relative">
                <span className="material-symbols-outlined text-3xl">
                  trending_up
                </span>
              </div>
              <h4 className="font-bold text-white mb-2">Outcome</h4>
              <p className="text-sm text-gray-400 px-2">
                The quantitative result.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#00FFC2] text-[#0A0F1D] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,255,194,0.4)] transition-all duration-300 relative z-10 scale-110">
                <span className="material-symbols-outlined text-3xl">
                  school
                </span>
              </div>
              <h4 className="font-bold text-[#00FFC2] mb-2">Memory</h4>
              <p className="text-sm text-gray-400 px-2">
                Whether to do this again.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-10 border-t border-[#1a2235]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              Over time, this becomes:
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141b2d] rounded-2xl p-8 shadow-lg border border-[#1a2235] flex items-start gap-5 hover:border-[#00FFC2]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00FFC2]/10 text-[#00FFC2] flex items-center justify-center shrink-0 border border-[#00FFC2]/20">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1.5 text-lg">
                  A record of what worked
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Never lose a winning strategy. Build a playbook of proven
                  tactics.
                </p>
              </div>
            </div>
            <div className="bg-[#141b2d] rounded-2xl p-8 shadow-lg border border-[#1a2235] flex items-start gap-5 hover:border-[#00FFC2]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1.5 text-lg">
                  A warning system
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Alerts you before you repeat costly mistakes or failed
                  experiments.
                </p>
              </div>
            </div>
            <div className="bg-[#141b2d] rounded-2xl p-8 shadow-lg border border-[#1a2235] flex items-start gap-5 hover:border-[#00FFC2]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1.5 text-lg">
                  A shared memory
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Your entire team, synced on what matters, regardless of
                  turnover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
