import React from "react";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import StackSection from "./components/StackSection.jsx";
import DecisionLoopSection from "./components/DecisionLoopSection.jsx";
import SignalSection from "./components/SignalSection.jsx";
import HowItWorksSection from "./components/HowItWorksSection.jsx";
import ChangesSection from "./components/ChangesSection.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-background-light font-display text-[#1d1d1f] antialiased overflow-x-hidden pt-16">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <StackSection />
      <DecisionLoopSection />
      <SignalSection />
      <HowItWorksSection />
      <ChangesSection />
      <CtaSection />
      {/* <Footer /> */}
    </div>
  );
}
