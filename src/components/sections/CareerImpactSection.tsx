import { useState } from "react";
import { Hammer, TrendingUp, Network, Compass, Sparkles } from "lucide-react";

export function CareerImpactSection() {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      action: "BUILD",
      label: "Zero-to-One Engineering",
      icon: Hammer,
      headline: "Constructing Hardware & Ventures from Fundamentals",
      narrative:
        "From silicon yield ramping at Texas Instruments and EDA platform strategy at Synopsys to founding Solar-Apps Energy and executive direction at Global Semiconductor EMS, building physical hardware capabilities has anchored three decades of work.",
      deliverable: "Built multi-megawatt commercial renewable infrastructure and deep-submicron ASIC methodologies."
    },
    {
      action: "SCALE",
      label: "Global Operational Execution",
      icon: TrendingUp,
      headline: "Expanding Cross-Border Practices to Global Delivery",
      narrative:
        "Scaled multinational engineering organizations across North America and India at Infinite Computer Solutions, coordinating hundreds of silicon design, verification, and embedded software engineers delivering mission-critical silicon products.",
      deliverable: "Unified silicon engineering practices generating high-throughput telecom and computing IP."
    },
    {
      action: "CONNECT",
      label: "Ecosystem Alliances",
      icon: Network,
      headline: "Bridging Industry, Academic Research & Government Policy",
      narrative:
        "Fostering durable partnerships between international microelectronics forums (iMAPS), national semiconductor task forces (ISM), and top engineering universities to ensure technology standardization and talent pipelines co-evolve.",
      deliverable: "Reinvigorated iMAPS India chapter into a central forum for advanced microelectronics packaging."
    },
    {
      action: "STRATEGIZE",
      label: "Sovereign Industrial Roadmaps",
      icon: Compass,
      headline: "Formulating Pragmatic Packaging & OSAT Strategies",
      narrative:
        "Advising stakeholders on prioritizing advanced packaging (ATMP/OSAT) as the primary, highest-return catalyst for domestic semiconductor sovereignty—converting 20% global design share into physical packaging autonomy.",
      deliverable: "Formulated actionable policy briefs advocating packaging-first national semiconductor strategy."
    },
    {
      action: "ENABLE",
      label: "Workforce & Curricular Foundations",
      icon: Sparkles,
      headline: "Preparing the Next-Generation Semiconductor Workforce",
      narrative:
        "Directly advising university boards (Gujarat Technological University) on transforming academic curricula to teach practical VLSI, advanced packaging, and test engineering rather than theoretical abstraction alone.",
      deliverable: "Modernized microelectronics syllabi aligned with emerging cleanroom and OSAT fab specifications."
    }
  ];

  return (
    <section id="impact" className="relative py-28 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            07 // PHILOSOPHY OF PRACTICE
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            TITLES TELL YOU WHERE. <br />
            <span className="text-[#A8B0BA]">IMPACT TELLS YOU WHY.</span>
          </h2>
          <p className="text-base text-[#A8B0BA] max-w-2xl leading-relaxed">
            Deconstructing a 30-year executive trajectory into the core actions that create lasting industrial capability.
          </p>
        </div>

        {/* 5 Horizontal/Tab Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Navigation Column */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {panels.map((p, idx) => {
              const isActive = activePanel === idx;
              const Icon = p.icon;
              return (
                <button
                  key={p.action}
                  onClick={() => setActivePanel(idx)}
                  className={`p-4 sm:p-5 rounded-xl text-left transition-all flex items-center justify-between border focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] ${
                    isActive
                      ? "bg-[#151A22] border-[#6FA8FF] shadow-lg shadow-black/40"
                      : "bg-[#07090D] border-[#1F2633] hover:border-[#A8B0BA]/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-lg ${
                        isActive
                          ? "bg-[#6FA8FF]/20 text-[#6FA8FF]"
                          : "bg-[#151A22] text-[#66717D]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold tracking-tight text-[#FAFAF8]">
                        {p.action}
                      </div>
                      <div className="text-xs font-mono text-[#66717D]">
                        {p.label}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#66717D] tabular-nums">
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Detail Showcase */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-2xl bg-[#07090D] border border-[#1F2633] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <span className="font-display text-8xl font-black tracking-tighter text-white">
                {panels[activePanel].action}
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-wider">
                  PILLAR 0{activePanel + 1} IMPACT
                </span>
                <span className="text-[#66717D]">·</span>
                <span className="text-xs font-mono text-[#D88A52] uppercase tracking-wider">
                  {panels[activePanel].label}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#FAFAF8] tracking-tight mb-6 max-w-2xl leading-snug">
                {panels[activePanel].headline}
              </h3>

              <p className="text-base text-[#A8B0BA] leading-relaxed mb-8 max-w-2xl">
                {panels[activePanel].narrative}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#1F2633] bg-[#151A22]/50 -mx-8 -mb-8 p-8 sm:p-10 rounded-b-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D88A52] mb-1.5 font-semibold">
                Measurable Concrete Outcome
              </div>
              <div className="text-sm sm:text-base font-sans text-[#FAFAF8] font-medium">
                {panels[activePanel].deliverable}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
