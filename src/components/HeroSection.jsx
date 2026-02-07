import React, { useEffect, useRef, useState } from "react";
import Dashboard from "./dashboard";
import { useWaitlistModal } from "../contexts/WaitlistModalContext";

const WORDS = ["revenue", "growth", "marketing"];

export default function HeroSection() {
  const { openModal } = useWaitlistModal();
  const dashboardRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timeoutMs = isDeleting ? 60 : 120;

    if (!isDeleting && typedText === currentWord) {
      timeoutMs = 1200;
    } else if (isDeleting && typedText === "") {
      timeoutMs = 300;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText === currentWord) {
          setIsDeleting(true);
          return;
        }
        setTypedText(currentWord.slice(0, typedText.length + 1));
        return;
      }

      if (typedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        return;
      }
      setTypedText(currentWord.slice(0, typedText.length - 1));
    }, timeoutMs);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-background-light">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center z-10 relative">
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy border border-primary/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            New Feature: Revenue Retro
          </span>
        </div> */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy mb-4 max-w-4xl leading-[1.1]">
          The memory system for <br className="hidden md:block" />
          <span>
            <span className="hero-gradient-text hero-typewriter-span inline-block align-bottom text-center md:text-left">
              {typedText}
            </span>
            <span className="hero-gradient-text"> decisions.</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary font-medium mb-8 max-w-2xl leading-relaxed">
          Stop losing your best insights to the void. Capture context, track
          outcomes, and learn from every decision.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button 
            onClick={openModal}
            className="h-14 px-8 rounded-full bg-navy text-primary font-bold shadow-xl flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined">play_arrow</span>
            Join Waitlist
          </button>
          <button className="h-14 px-8 rounded-full bg-white text-navy border border-gray-200 font-semibold shadow-sm flex items-center gap-2 cursor-pointer">
            Schedule a Call
          </button>
        </div>
        <div ref={dashboardRef} className="relative w-full mt-16 max-w-5xl group perspective-1000">
          <Dashboard patternCardsOpacity={1} />
        </div>
      </div>
    </section>
  );
}
