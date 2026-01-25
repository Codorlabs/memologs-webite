import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1D] py-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded text-gray-400 border border-gray-700">
            <svg width="24" height="24" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#2FFFD6" strokeWidth="6" strokeLinecap="round">
                <line x1="64" y1="64" x2="64" y2="28" />
                <line x1="64" y1="64" x2="96" y2="44" />
                <line x1="64" y1="64" x2="96" y2="84" />
                <line x1="64" y1="64" x2="64" y2="100" />
                <line x1="64" y1="64" x2="32" y2="84" />
                <line x1="64" y1="64" x2="32" y2="44" />
              </g>
              <g fill="#2FFFD6">
                <circle cx="64" cy="64" r="12" />
                <circle cx="64" cy="28" r="8" />
                <circle cx="96" cy="44" r="8" />
                <circle cx="96" cy="84" r="8" />
                <circle cx="64" cy="100" r="8" />
                <circle cx="32" cy="84" r="8" />
                <circle cx="32" cy="44" r="8" />
              </g>
            </svg>
          </div>
          <span className="font-bold text-gray-400">MemoLogs</span>
        </div>
        <div className="text-sm text-gray-600">
          © 2023 MemoLogs Inc. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a className="text-gray-600 hover:text-white transition-colors" href="#">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a className="text-gray-600 hover:text-white transition-colors" href="#">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect height="12" width="4" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
