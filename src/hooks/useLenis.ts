import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/motion/gsap";

let lenisInstance: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function scrollToTop({
  immediate = true,
  offset = 0,
}: {
  immediate?: boolean;
  offset?: number;
} = {}) {
  if (typeof window === "undefined") return;

  // 1. Immediately reset Lenis internal scroll position & velocity
  if (lenisInstance) {
    lenisInstance.scrollTo(offset, { immediate });
  }

  // 2. Immediately reset native window & document scroll positions
  try {
    window.scrollTo({
      top: offset,
      left: 0,
      behavior: immediate ? "instant" : "smooth",
    });
  } catch {
    window.scrollTo(0, offset);
  }

  document.documentElement.scrollTop = offset;
  document.body.scrollTop = offset;

  // 3. Keep ScrollTrigger synchronised with native scroll offset
  ScrollTrigger.update();
}

export function refreshScroll(): void {
  if (typeof window === "undefined") return;

  if (lenisInstance) {
    lenisInstance.resize();
  }
  ScrollTrigger.refresh(true);
}

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    // Honor reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [enabled]);
}
