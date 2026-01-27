import React from "react";

export default function Dashboard({ patternCardsOpacity = 1 }) {
  return (
    <div
      className="dark relative rounded-2xl flex  w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden mesh-bg font-display"
      style={{
        "--color-primary": "#00FFC2",
        "--color-primary-dark": "#00D9A5",
        "--color-accent-ruby": "#ff3b30",
        "--color-background-light": "#FBFBFD",
        "--color-background-dark": "#0A0F1D",
        "--color-surface-dark": "#131c26",
      }}
    >
      <div className="md:hidden p-4">
        <img
          src="/dashboard.png"
          alt="MemoLogs learning review dashboard"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #131c26;
        }
        ::-webkit-scrollbar-thumb {
          background: #2a3b4d;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3e546a;
        }

        .glass-panel {
          background: rgba(19, 28, 38, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mesh-bg {
          background-color: #0A0F1D;
          background-image:
            radial-gradient(at 0% 0%, rgba(0, 255, 194, 0.08) 0px, transparent 50%),
            radial-gradient(at 90% 10%, rgba(20, 50, 80, 0.5) 0px, transparent 50%),
            radial-gradient(at 50% 90%, rgba(20, 40, 60, 0.5) 0px, transparent 50%);
        }

        .icon-glow-success {
          filter: drop-shadow(0 0 8px rgba(0, 255, 194, 0.5));
        }
        .icon-glow-ruby {
          filter: drop-shadow(0 0 8px rgba(255, 59, 48, 0.5));
        }
        .icon-glow-blue {
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
        }

        .shadow-glow-primary {
          box-shadow: 0 0 20px rgba(0, 255, 194, 0.15);
        }
        .shadow-glow-ruby {
          box-shadow: 0 0 20px rgba(255, 59, 48, 0.15);
        }
      `}</style>
      <div className="hidden md:flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col max-w-[1200px] flex-1 gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-2">
            <div className="flex flex-col gap-2 text-left">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                Dashboard Overview
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                October Retrospective
              </h1>
              <p className="text-slate-400 text-base max-w-2xl mt-1">
                Analysis of{" "}
                <span className="text-white font-semibold">
                  24 decisions
                </span>{" "}
                and{" "}
                <span className="text-white font-semibold">3 incidents</span>{" "}
                across engineering and marketing.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/5 hover:bg-white/10 border border-primary/30 text-primary text-sm font-bold leading-normal tracking-wide transition-all shadow-glow-primary">
                <span className="material-symbols-outlined mr-2 text-[18px]">
                  download
                </span>
                <span className="truncate">Export Report</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary">
                  <span className="material-symbols-outlined icon-glow-success text-2xl">
                    trending_up
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  +12%{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_upward
                  </span>
                </span>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">
                  Learning Velocity
                </p>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  84{" "}
                  <span className="text-lg text-slate-500 font-normal">
                    insights
                  </span>
                </h3>
              </div>
              <div className="mt-4 flex items-end gap-1 h-8 opacity-50">
                <div className="w-1/6 bg-primary/30 h-[40%] rounded-sm"></div>
                <div className="w-1/6 bg-primary/40 h-[60%] rounded-sm"></div>
                <div className="w-1/6 bg-primary/50 h-[50%] rounded-sm"></div>
                <div className="w-1/6 bg-primary/60 h-[80%] rounded-sm"></div>
                <div className="w-1/6 bg-primary/80 h-[70%] rounded-sm"></div>
                <div className="w-1/6 bg-primary h-[90%] rounded-sm"></div>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400">
                  <span className="material-symbols-outlined icon-glow-blue text-2xl">
                    verified_user
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400">
                  -5%{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_downward
                  </span>
                </span>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">
                  Error Repetition Rate
                </p>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  4.2%
                </h3>
              </div>
              <div className="mt-4 flex items-end gap-1 h-8 opacity-50">
                <div className="w-1/6 bg-blue-500/30 h-[80%] rounded-sm"></div>
                <div className="w-1/6 bg-blue-500/40 h-[60%] rounded-sm"></div>
                <div className="w-1/6 bg-blue-500/50 h-[50%] rounded-sm"></div>
                <div className="w-1/6 bg-blue-500/60 h-[40%] rounded-sm"></div>
                <div className="w-1/6 bg-blue-500/80 h-[30%] rounded-sm"></div>
                <div className="w-1/6 bg-blue-500 h-[20%] rounded-sm"></div>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-400">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))",
                    }}
                  >
                    psychology
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-400">
                  +3pts
                </span>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">
                  Decision Confidence
                </p>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  88
                  <span className="text-slate-500 text-lg font-normal">
                    /100
                  </span>
                </h3>
              </div>
              <div className="mt-5 h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-purple-500 to-indigo-500 w-[88%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 px-1 mb-5">
              <span className="material-symbols-outlined text-primary text-xl">
                hub
              </span>
              <h2 className="text-white text-xl font-bold leading-tight">
                Patterns &amp; Signals
              </h2>
            </div>
            <div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-opacity duration-300"
              style={{ opacity: patternCardsOpacity }}
            >
              <div className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-accent-ruby group hover:border-l-red-500 transition-all">
                <div className="p-6 flex flex-col h-full justify-between gap-6 relative">
                  <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-500 to-transparent"></div>
                  <div className="flex items-start justify-between z-10">
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex items-center gap-1.5 text-accent-ruby text-xs font-bold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm icon-glow-ruby">
                          warning
                        </span>{" "}
                        Recurring Warning
                      </span>
                      <h3 className="text-xl md:text-xl font-bold text-white leading-snug text-left">
                        Scaling beyond +20% on Mondays leads to CPA spikes.
                      </h3>
                    </div>
                    <div className="hidden sm:flex size-12 items-center justify-center rounded-full bg-accent-ruby/10 text-accent-ruby border border-accent-ruby/20 shrink-0">
                      <span className="material-symbols-outlined icon-glow-ruby text-2xl">
                        priority_high
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-400 z-10">
                    <div className="flex items-center gap-1.5 bg-red-500/10 px-3 py-1.5 rounded-md border border-red-500/10">
                      <span className="material-symbols-outlined text-base">
                        history
                      </span>
                      <span>Occurred in 4/5 cases</span>
                    </div>
                    <span className="text-slate-500 text-xs">
                      Updated 2 days ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-primary group hover:border-l-primary-dark transition-all">
                <div className="p-6 flex flex-col h-full justify-between gap-6 relative">
                  <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-green-500 to-transparent"></div>
                  <div className="flex items-start justify-between z-10">
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm icon-glow-success">
                          verified
                        </span>{" "}
                        Winning Formula
                      </span>
                      <h3 className="text-xl md:text-xl font-bold text-white leading-snug text-left">
                        Creative refreshes on PMax every 14 days maintain
                        efficiency.
                      </h3>
                    </div>
                    <div className="hidden sm:flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                      <span className="material-symbols-outlined icon-glow-success text-2xl">
                        check
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-400 z-10">
                    <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-md border border-primary/10">
                      <span className="material-symbols-outlined text-base text-primary">
                        trending_up
                      </span>
                      <span className="text-primary-dark font-medium">
                        Efficiency +15%
                      </span>
                    </div>
                    <span className="text-slate-500 text-xs">Validated 3x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 text-xl">
                  history_edu
                </span>
                <h2 className="text-white text-xl font-bold leading-tight">
                  Recent Post-Mortems
                </h2>
              </div>
              <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                View All
              </button>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-white/5 text-xs uppercase font-semibold text-slate-300">
                    <tr>
                      <th className="px-6 py-4" scope="col">
                        Date
                      </th>
                      <th className="px-6 py-4" scope="col">
                        Decision / Incident
                      </th>
                      <th className="px-6 py-4" scope="col">
                        Impact
                      </th>
                      <th className="px-6 py-4 min-w-[300px]" scope="col">
                        Final Learning
                      </th>
                      <th className="px-6 py-4 text-right" scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-slate-300">
                        Oct 28
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-red-500/20 flex items-center justify-center text-red-500 border border-red-500/20">
                            <span className="material-symbols-outlined text-lg">
                              bug_report
                            </span>
                          </div>
                          <span className="font-medium text-white">
                            Q3 Budget Overrun
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-500/20">
                          High
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        Automated stops failed due to API latency; manual check
                        added.
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:text-primary-dark font-medium text-xs">
                          Read Full
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-slate-300">
                        Oct 24
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500 border border-blue-500/20">
                            <span className="material-symbols-outlined text-lg">
                              campaign
                            </span>
                          </div>
                          <span className="font-medium text-white">
                            Holiday Promo Launch
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                          Medium
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        Early teaser emails increased Day 1 conversion by 14%.
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:text-primary-dark font-medium text-xs">
                          Read Full
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}