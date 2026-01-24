import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FBFBFD]/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-lg text-white">
            <span className="material-symbols-outlined text-[20px]">
              memory
            </span>
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1d1d1f]">
            MemoLogs
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            href="#problem"
          >
            The Problem
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            href="#solution"
          >
            Solution
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            href="#how-it-works"
          >
            How it Works
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
        </div>
        <div className="flex items-center gap-4">
          {/* <a
            className="hidden sm:block text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            href="#"
          >
            Log in
          </a> */}
          <button className="bg-background-dark hover:bg-primary/90 text-primary text-sm font-bold py-2 px-5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
