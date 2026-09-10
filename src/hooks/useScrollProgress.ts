import { useState, useEffect } from 'react';

export interface ScrollState {
  scrollY: number;
  maxScroll: number;
  progress: number; // 0 to 1 across whole page
  activeScene: number; // 0: Hero, 1: Projects, 2: Pinned Story, 3: Comparison, 4: Tech Matrix, 5: FAQ & Contact
  velocity: number;
}

export function useScrollProgress() {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    maxScroll: 1,
    progress: 0,
    activeScene: 0,
    velocity: 0
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      const velocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Determine active scene based on progress
      let activeScene = 0;
      if (progress < 0.18) {
        activeScene = 0; // Hero
      } else if (progress < 0.42) {
        activeScene = 1; // Projects / Flavors
      } else if (progress < 0.65) {
        activeScene = 2; // Pinned Story / 3D Deep Dive
      } else if (progress < 0.80) {
        activeScene = 3; // Comparison Matrix
      } else if (progress < 0.92) {
        activeScene = 4; // Tech Matrix & Terminal
      } else {
        activeScene = 5; // FAQ & Contact
      }

      setScrollState({
        scrollY: currentScrollY,
        maxScroll,
        progress,
        activeScene,
        velocity
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return scrollState;
}
