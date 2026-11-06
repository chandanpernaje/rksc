import { EcosystemMapVisual } from "../visuals/EcosystemMapVisual";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-28 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#69A88A] uppercase tracking-widest">
            10 // NATIONAL ECOSYSTEM TOPOLOGY
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
              FROM DESIGN STRENGTH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69A88A] via-[#6FA8FF] to-[#FAFAF8]">
                TO MANUFACTURING CAPABILITY.
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-[#A8B0BA] leading-relaxed">
              True semiconductor sovereignty is not built on an isolated fabrication plant. It is an interconnected web of design prowess, advanced packaging, OSAT test beds, chemicals, precision equipment, and specialized university curricula.
            </p>
          </div>
        </div>

        {/* Ecosystem Interactive Topology */}
        <EcosystemMapVisual />
      </div>
    </section>
  );
}
