import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "drag">("default");
  const [isTouchOrSmall, setIsTouchOrSmall] = useState(true);

  useEffect(() => {
    // Check if device is touch or small screen or prefers reduced motion
    const checkDevice = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmall = window.innerWidth < 1024;
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsTouchOrSmall(isTouch || isSmall || isReduced);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if inside input/textarea/select
      if (["INPUT", "TEXTAREA", "SELECT", "LABEL"].includes(target.tagName)) {
        setCursorState("default");
        return;
      }

      if (target.closest("[data-cursor='drag']")) {
        setCursorState("drag");
      } else if (target.closest("[data-cursor='view']")) {
        setCursorState("view");
      } else if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.closest("[data-cursor='pointer']")
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [visible]);

  if (isTouchOrSmall || !visible) return null;

  const isExpanded = cursorState !== "default";
  const size = isExpanded ? (cursorState === "drag" || cursorState === "view" ? 48 : 36) : 24;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out flex items-center justify-center ${
          cursorState === "drag" || cursorState === "view"
            ? "border-[#C9A46C] bg-[#08090B]/80 backdrop-blur-sm"
            : isExpanded
            ? "border-[#C9A46C] scale-110 bg-[#C9A46C]/10"
            : "border-[#969BA3]/40 bg-transparent"
        }`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `translate3d(${position.x - size / 2}px, ${position.y - size / 2}px, 0)`,
        }}
      >
        {(cursorState === "view" || cursorState === "drag") && (
          <span className="text-[9px] font-mono font-semibold tracking-wider text-[#C9A46C]">
            {cursorState.toUpperCase()}
          </span>
        )}
      </div>

      {/* Center dot */}
      {cursorState === "default" && (
        <div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#C9A46C] pointer-events-none transition-transform duration-75"
          style={{
            transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          }}
        />
      )}
    </div>
  );
}
