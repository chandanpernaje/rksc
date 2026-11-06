import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop, refreshScroll } from "../../hooks/useLenis";

export function ScrollToTopOnRoute() {
  const { pathname, search, hash } = useLocation();

  // Prevent browser history from auto-restoring old scroll position on route changes
  useLayoutEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Synchronously reset scroll BEFORE browser paints the new route
  useLayoutEffect(() => {
    // If navigating to an in-page hash anchor (e.g., #contact)
    if (hash) {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
        return;
      }
    }

    // 1. Immediately reset scroll position to 0 (Lenis + Native Window + Document)
    scrollToTop({ immediate: true, offset: 0 });

    // 2. Next animation frame: enforce top position and refresh ScrollTrigger/Lenis calculations
    const rafId = requestAnimationFrame(() => {
      scrollToTop({ immediate: true, offset: 0 });
      refreshScroll();
    });

    // 3. Fallback check after browser layout completes
    const timerId = setTimeout(() => {
      refreshScroll();
    }, 80);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [pathname, search, hash]);

  return null;
}
