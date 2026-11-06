import { PackagingBlueprintVisual } from "../visuals/PackagingBlueprintVisual";

export function AdvancedPackagingSection() {
  return (
    <section id="packaging" className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            09 // THE ADVANCED PACKAGING REVOLUTION
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            PACKAGING IS BECOMING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FA8FF] via-[#FAFAF8] to-[#D88A52]">
              ARCHITECTURE.
            </span>
          </h2>
          <p className="text-base text-[#A8B0BA] max-w-2xl leading-relaxed">
            In the post-Moore era, the package is no longer a passive container for silicon—it is the governing architectural canvas that dictates system bandwidth density, latency boundaries, and thermal feasibility.
          </p>
        </div>

        {/* Blueprint Visual */}
        <PackagingBlueprintVisual />
      </div>
    </section>
  );
}
