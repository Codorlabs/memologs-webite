import React, { useEffect, useState, useRef, useCallback } from "react";
import Dashboard from "./dashboard";

// Colors matching dashboard exactly
const COLORS = {
  accentRuby: '#ff3b30',
  primary: '#00FFC2',
  primaryDark: '#00D9A5',
};

// Floating Pattern Card Component - matches dashboard Patterns & Signals cards exactly
function FloatingPatternCard({ type, style, progress = 0 }) {
  // Interpolate background color from #0A0F1D to rgba(19, 28, 38, 0.6)
  const lerp = (start, end, t) => start + (end - start) * t;
  const r = Math.round(lerp(10, 19, progress));
  const g = Math.round(lerp(15, 28, progress));
  const b = Math.round(lerp(29, 38, progress));
  const bgOpacity = lerp(1, 0.6, progress);
  const backgroundColor = `rgba(${r}, ${g}, ${b}, ${bgOpacity})`;

  const isWarning = type === 'warning';
  const accentColor = isWarning ? COLORS.accentRuby : COLORS.primary;
  const iconGlow = `drop-shadow(0 0 8px ${isWarning ? 'rgba(255, 59, 48, 0.5)' : 'rgba(0, 255, 194, 0.5)'})`;

  return (
    <div
      className="fixed rounded-xl overflow-hidden pointer-events-none"
      style={{
        ...style,
        width: style.width || 'auto',
        background: backgroundColor,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="p-6 flex flex-col h-full justify-between gap-6 relative">
        {/* Background gradient */}
        <div 
          className="absolute right-0 top-0 h-full w-1/3 opacity-10"
          style={{
            background: `radial-gradient(circle at center, ${isWarning ? '#ef4444' : '#22c55e'}, transparent)`
          }}
        />
        
        <div className="flex items-start justify-between z-10">
          <div className="flex flex-col gap-2">
            <span 
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              <span 
                className="material-symbols-outlined text-sm"
                style={{ filter: iconGlow }}
              >
                {isWarning ? 'warning' : 'verified'}
              </span>
              {isWarning ? 'Recurring Warning' : 'Winning Formula'}
            </span>
            <h3 className="text-xl font-bold text-white leading-snug text-left">
              {isWarning 
                ? 'Scaling beyond +20% on Mondays leads to CPA spikes.'
                : 'Creative refreshes on PMax every 14 days maintain efficiency.'
              }
            </h3>
          </div>
          <div 
            className="hidden sm:flex size-12 items-center justify-center rounded-full shrink-0"
            style={{
              backgroundColor: `${accentColor}10`,
              color: accentColor,
              border: `1px solid ${accentColor}33`,
            }}
          >
            <span 
              className="material-symbols-outlined text-2xl"
              style={{ filter: iconGlow }}
            >
              {isWarning ? 'priority_high' : 'check'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-slate-400 z-10">
          <div 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md"
            style={{
              backgroundColor: isWarning ? 'rgba(239, 68, 68, 0.1)' : 'rgba(0, 255, 194, 0.1)',
              border: `1px solid ${isWarning ? 'rgba(239, 68, 68, 0.1)' : 'rgba(0, 255, 194, 0.1)'}`,
            }}
          >
            <span 
              className="material-symbols-outlined text-base"
              style={{ color: isWarning ? undefined : COLORS.primary }}
            >
              {isWarning ? 'history' : 'trending_up'}
            </span>
            <span style={{ color: isWarning ? undefined : COLORS.primaryDark, fontWeight: isWarning ? undefined : 500 }}>
              {isWarning ? 'Occurred in 4/5 cases' : 'Efficiency +15%'}
            </span>
          </div>
          <span className="text-slate-500 text-xs">
            {isWarning ? 'Updated 2 days ago' : 'Validated 3x'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [endPositions, setEndPositions] = useState(null);
  const [cardWidth, setCardWidth] = useState(350);
  const sectionRef = useRef(null);
  const dashboardRef = useRef(null);

  // Calculate end positions (where the dashboard cards are)
  const calculateEndPositions = useCallback(() => {
    if (!dashboardRef.current) return;
    
    const dashboardEl = dashboardRef.current;
    const patternsGrid = dashboardEl.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
    
    if (!patternsGrid) return;
    
    const patternCards = patternsGrid.querySelectorAll(':scope > div');
    if (patternCards.length < 2) return;

    const warningCardRect = patternCards[0].getBoundingClientRect();
    const successCardRect = patternCards[1].getBoundingClientRect();

    setCardWidth(warningCardRect.width);
    setEndPositions({
      warning: {
        x: warningCardRect.left,
        y: warningCardRect.top,
      },
      success: {
        x: successCardRect.left,
        y: successCardRect.top,
      },
    });
  }, []);

  // Use refs to track animation frame and scroll state for smooth animation
  const rafRef = useRef(null);
  const scrollStateRef = useRef({ progress: 0, isScrolling: false });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    
    const handleResize = () => {
      checkDesktop();
      calculateEndPositions();
    };
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(calculateEndPositions, 150);

    // Smooth animation update using requestAnimationFrame
    const updateAnimation = () => {
      if (!dashboardRef.current) {
        rafRef.current = requestAnimationFrame(updateAnimation);
        return;
      }
      
      const dashboardEl = dashboardRef.current;
      const viewportHeight = window.innerHeight;
      
      const patternsGrid = dashboardEl.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
      if (!patternsGrid) {
        rafRef.current = requestAnimationFrame(updateAnimation);
        return;
      }
      
      const patternsRect = patternsGrid.getBoundingClientRect();
      
      // Animation triggers
      const triggerStart = viewportHeight + 100;
      const triggerEnd = viewportHeight * 0.35;
      
      const targetProgress = Math.min(Math.max((triggerStart - patternsRect.top) / (triggerStart - triggerEnd), 0), 1);
      
      // Smooth interpolation for fast scrolling - lerp towards target
      const currentProgress = scrollStateRef.current.progress;
      const smoothingFactor = 0.15; // Adjust for smoothness (lower = smoother but slower)
      const newProgress = currentProgress + (targetProgress - currentProgress) * smoothingFactor;
      
      // Only update if there's a meaningful change
      if (Math.abs(newProgress - currentProgress) > 0.001 || Math.abs(targetProgress - currentProgress) > 0.01) {
        scrollStateRef.current.progress = targetProgress > currentProgress ? 
          Math.min(newProgress, targetProgress) : 
          Math.max(newProgress, targetProgress);
        setScrollProgress(scrollStateRef.current.progress);
      }
      
      calculateEndPositions();
      rafRef.current = requestAnimationFrame(updateAnimation);
    };

    // Start the animation loop
    rafRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      clearTimeout(timer);
    };
  }, [calculateEndPositions]);

  // Easing function
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easedProgress = easeOutCubic(scrollProgress);

  // Linear interpolation
  const lerp = (start, end, t) => start + (end - start) * t;

  // Get card style - cards float at fixed viewport positions, then animate to dashboard
  const getCardStyle = (type) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Fixed floating positions in viewport (where cards stay while scrolling)
    const floatingPositions = {
      warning: {
        x: -30, // Left side of screen
        y: viewportHeight * 0.5, // 25% from top
        rotate: -6,
      },
      success: {
        x: viewportWidth - cardWidth + 30, // Right side of screen
        y: viewportHeight * 0.1, // 30% from top
        rotate: 6,
      },
    };

    const floating = floatingPositions[type];
    
    // Scale from 50% to 100% based on progress
    const currentScale = lerp(0.7, 1, easedProgress);
    
    // If no end positions yet or progress is 0, show at floating position
    if (!endPositions || !endPositions[type] || easedProgress === 0) {
      return {
        left: floating.x,
        top: floating.y,
        width: cardWidth,
        transform: `rotate(${floating.rotate}deg) scale(${currentScale})`,
        transformOrigin: 'center center',
        opacity: 1,
        zIndex: 100,
      };
    }

    const end = endPositions[type];
    
    // Interpolate from floating position to end position
    const currentX = lerp(floating.x, end.x, easedProgress);
    const currentY = lerp(floating.y, end.y, easedProgress);
    const currentRotate = lerp(floating.rotate, 0, easedProgress);

    // Fade out near the end
    let opacity = 1;
    if (easedProgress > 0.85) {
      opacity = 1 - ((easedProgress - 0.85) / 0.15);
    }

    return {
      left: currentX,
      top: currentY,
      width: cardWidth,
      transform: `rotate(${currentRotate}deg) scale(${currentScale})`,
      transformOrigin: 'center center',
      opacity: Math.max(0, opacity),
      zIndex: 100,
    };
  };

  // Control dashboard pattern cards opacity
  const patternCardsOpacity = easedProgress > 0.7 ? (easedProgress - 0.7) / 0.3 : 0;

  // Show floating cards only on desktop and before animation completes
  const showFloatingCards = isDesktop && easedProgress < 1;

  return (
    <section ref={sectionRef} className="relative pt-24 pb-32 md:pt-40 md:pb-40 overflow-hidden">
      {/* Floating Pattern Cards - Desktop Only */}
      {showFloatingCards && (
        <>
          <FloatingPatternCard 
            type="warning" 
            style={getCardStyle('warning')} 
            progress={easedProgress}
          />
          <FloatingPatternCard 
            type="success" 
            style={getCardStyle('success')} 
            progress={easedProgress}
          />
        </>
      )}

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background-dark border border-background-dark mb-2 animate-[fadeIn_0.5s_ease-out]">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            New Feature: Revenue Retro
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy mb-6 max-w-4xl leading-[1.1]">
          The memory system for <br className="hidden md:block" />
          <span className="text-navy bg-clip-text text-transparent bg-gradient-to-r from-navy via-[#00cc9b] to-primary">
            revenue decisions.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium mb-10 max-w-2xl leading-relaxed">
          Stop losing your best insights to the void. Capture context, track
          outcomes, and learn from every decision.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="h-14 px-8 rounded-full bg-navy text-primary font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">play_arrow</span>
            Join Waitlist
          </button>
          <button className="h-14 px-8 rounded-full bg-white text-[#1d1d1f] border border-gray-200 text-lg font-bold shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
            Schedule a Call
          </button>
        </div>
        <div ref={dashboardRef} className="relative w-full mt-24 max-w-5xl group perspective-1000">
          <Dashboard patternCardsOpacity={isDesktop ? patternCardsOpacity : 1} />
        </div>
      </div>
    </section>
  );
}
