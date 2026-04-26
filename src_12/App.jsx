import React from "react";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import StackSection from "./components/StackSection.jsx";
import DecisionLoopSection from "./components/DecisionLoopSection.jsx";
import SignalSection from "./components/SignalSection.jsx";
import HowItWorksSection from "./components/HowItWorksSection.jsx";
import AnswersSection from "./components/AnswersSection.jsx";
import ChangesSection from "./components/ChangesSection.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import { WaitlistModalProvider } from "./contexts/WaitlistModalContext.jsx";

export default function App() {
  return (
    <WaitlistModalProvider>
      <div className="bg-background-light font-display text-[#1d1d1f] antialiased overflow-x-hidden pt-16">
        <NavBar />
        <HeroSection />
        <ProblemSection />
        <StackSection />
        <DecisionLoopSection />
        <SignalSection />
        <HowItWorksSection />
        <AnswersSection />
        <ChangesSection />
        <CtaSection />
        {/* <Footer /> */}
      </div>
    </WaitlistModalProvider>
  );
}
