import { useEffect, useRef, useState } from "react";

export function ThesisSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section the viewport is
      const start = windowHeight * 0.8;
      const end = -rect.height * 0.4;
      const progress = (start - rect.top) / (start - end);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headlineWords = "THE CHIP IS NO LONGER THE WHOLE STORY.".split(" ");
  const bodyParagraph =
    "As computing becomes more heterogeneous, the value of the system increasingly depends on what happens beyond the silicon: packaging, interconnect, thermal design, manufacturing capability and the ecosystem surrounding it.";
  const bodyWords = bodyParagraph.split(" ");

  return (
    <section
      id="thesis"
      ref={sectionRef}
      className="relative py-36 px-6 lg:px-12 bg-[#07090D] overflow-hidden border-t border-[#1F2633]"
    >
      <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono text-[#D88A52] uppercase tracking-widest">
            03 // CORE THESIS
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        {/* Huge Headline Word-by-Word Scrub */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.06]">
            {headlineWords.map((word, i) => {
              const wordThreshold = (i + 1) / (headlineWords.length + 2);
              const isLit = scrollProgress >= wordThreshold * 0.6;
              return (
                <span
                  key={i}
                  className={`inline-block mr-3 sm:mr-5 transition-opacity duration-300 ${
                    isLit ? "text-[#FAFAF8] opacity-100" : "text-[#FAFAF8] opacity-20"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>

        {/* Supporting Copy Scrub */}
        <div className="max-w-3xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
            {bodyWords.map((w, j) => {
              const bThreshold = 0.35 + (j / bodyWords.length) * 0.55;
              const isWordActive = scrollProgress >= bThreshold;
              return (
                <span
                  key={j}
                  className={`inline-block mr-2 transition-all duration-200 ${
                    isWordActive
                      ? "text-[#FAFAF8] opacity-100 font-normal"
                      : "text-[#A8B0BA] opacity-25"
                  }`}
                >
                  {w}
                </span>
              );
            })}
          </p>
        </div>

        {/* Technical Footer Annotation */}
        <div className="mt-16 pt-8 border-t border-[#1F2633] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#66717D]">
          <div>BEYOND MONOLITHIC SCALING: HETEROGENEOUS CO-DESIGN</div>
          <div className="text-[#6FA8FF]">ARCHITECTURAL PARADIGM SHIFT</div>
        </div>
      </div>
    </section>
  );
}
