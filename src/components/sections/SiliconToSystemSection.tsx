import { useState } from "react";
import { SiliconStackVisual } from "../visuals/SiliconStackVisual";

export function SiliconToSystemSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="silicon-to-system"
      className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            04 // SIGNATURE NARRATIVE
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08]">
              FROM SILICON <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FA8FF] to-[#D88A52]">
                TO SYSTEMS.
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-[#A8B0BA] leading-relaxed">
              Tracing the technological progression from 300mm crystalline silicon ingots through monolithic reticle limits to disaggregated chiplets, 2.5D interposers, and hyperscale compute racks.
            </p>
          </div>
        </div>

        {/* Silicon to System Architecture Component */}
        <SiliconStackVisual
          activeStageIndex={activeStage}
          onSelectStage={(idx) => setActiveStage(idx)}
        />
      </div>
    </section>
  );
}
