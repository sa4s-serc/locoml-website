import { useState, useEffect } from 'react';

export type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'ultrawide';

export function useDevice() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );
  
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Basic touch detection
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let breakpoint: Breakpoint = 'mobile';
  if (windowWidth >= 1536) breakpoint = 'ultrawide';
  else if (windowWidth >= 1280) breakpoint = 'desktop';
  else if (windowWidth >= 1024) breakpoint = 'laptop';
  else if (windowWidth >= 640) breakpoint = 'tablet'; // Combining sm and md as tablet conceptually

  return {
    windowWidth,
    breakpoint,
    isTouchDevice,
  };
}
