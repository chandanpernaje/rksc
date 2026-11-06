import { useState } from "react";

export function PhilosophySection() {
  const tenets = [
    {
      word: "People.",
      sub: "Foundational Ingenuity",
      desc: "Transistors do not build ecosystems—engineers, researchers, and mentors do. Curricula and workforce development must precede cleanroom concrete."
    },
    {
      word: "Strategy.",
      sub: "Architectural Foresight",
      desc: "Selecting where to compete in the semiconductor value chain requires ruthless honesty regarding capital expenditure, talent density, and geopolitical leverage."
    },
    {
      word: "Execution.",
      sub: "Operational Precision",
      desc: "Cleanroom yields, defect densities, and packaging co-design are unforgiving. Excellence lies in obsessive attention to physical tolerances."
    },
    {
      word: "Ecosystems.",
      sub: "Network Resilience",
      desc: "A single fab is a vulnerability; an interdependent matrix of design houses, OSAT packaging lines, substrate suppliers, and universities is an enduring engine."
    },
    {
      word: "Impact.",
      sub: "Technological Sovereignty",
      desc: "Hardware autonomy is the sovereign foundation for artificial intelligence, national security, energy transition, and human advancement."
    }
  ];

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative py-36 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#D88A52] uppercase tracking-widest">
            19 // GUIDING ETHOS
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-16">
          TECHNOLOGY IS ONLY <br />
          <span className="text-[#A8B0BA]">HALF THE STORY.</span>
        </h2>

        {/* 5 Tenets Interactive List */}
        <div className="space-y-4">
          {tenets.map((t, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={t.word}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  isHovered
                    ? "bg-[#151A22] border-[#6FA8FF] shadow-xl"
                    : "bg-[#07090D] border-[#1F2633]"
                }`}
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xs font-mono text-[#66717D] tabular-nums">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] tracking-tight">
                      {t.word}
                    </h3>
                    <div className="text-xs font-mono text-[#6FA8FF] mt-1">
                      {t.sub}
                    </div>
                  </div>
                </div>

                <div className="md:max-w-md">
                  <p className="text-sm text-[#A8B0BA] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
