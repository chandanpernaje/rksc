export const MOTION = {
  duration: {
    instant: 0.15,
    fast: 0.25,
    base: 0.6,
    slow: 1.0,
    cinematic: 1.4,
  },
  ease: {
    smooth: "power2.out",
    cinematic: "power3.out",
    settle: "cubic-bezier(0.16, 1, 0.3, 1)",
    expo: "expo.out",
    inOut: "power2.inOut",
  },
  reveal: {
    distance: 40,
    stagger: 0.08,
  },
  hover: {
    lift: -6,
    scale: 1.02,
  },
  parallax: {
    subtle: 0.12,
    medium: 0.22,
    strong: 0.35,
  }
};
