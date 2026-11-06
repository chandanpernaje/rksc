import { Link } from "react-router-dom";
import { ArrowRight, Layers, ShieldCheck, Zap } from "lucide-react";
import { AdvancedPackagingSection } from "../components/sections/AdvancedPackagingSection";

export function PackagingPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#07090D] border-b border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
              POST-MOORE FRONTIER
            </span>
            <div className="h-[1px] w-12 bg-[#1F2633]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.06] mb-6">
            PACKAGING IS BECOMING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FA8FF] via-[#FAFAF8] to-[#D88A52]">
              ARCHITECTURE.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B0BA] max-w-2xl leading-relaxed">
            As front-end monolithic transistor scaling approaches physical and economic limits, performance scaling has pivoted to multi-die heterogeneous integration, 2.5D/3D interposers, through-silicon vias, and micro-bump interconnects.
          </p>
        </div>
      </section>

      {/* Frame 09: Advanced Packaging Interactive Blueprint Visual */}
      <AdvancedPackagingSection />

      {/* Technical Focus: Glass vs. Organic Substrates & Thermal Mitigation */}
      <section className="py-24 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-mono text-[#D88A52] uppercase tracking-widest mb-4">
            MATERIALS &amp; THERMAL METROLOGY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8] mb-12">
            The Physics of 1000W+ Package Envelopes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#07090D] border border-[#1F2633]">
              <div className="p-3 rounded-xl bg-[#151A22] text-[#6FA8FF] w-fit mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">
                Glass Core Substrates
              </h3>
              <p className="text-sm text-[#A8B0BA] leading-relaxed mb-4">
                Glass provides superior surface planarity and dimensional stability compared to organic ABF, eliminating package warpage during intense thermal cycling and enabling sub-micron line/space routing.
              </p>
              <div className="text-xs font-mono text-[#6FA8FF]">
                CTE MATCHED TO SILICON · TGV VIA PITCH &lt; 50µm
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#07090D] border border-[#1F2633]">
              <div className="p-3 rounded-xl bg-[#151A22] text-[#D88A52] w-fit mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">
                Backside Power Delivery (BSPDN)
              </h3>
              <p className="text-sm text-[#A8B0BA] leading-relaxed mb-4">
                Moving power delivery rails to the backside of the silicon die separates power from high-speed signal routing, dramatically slashing IR drop and freeing front-side metal layers for ultra-dense compute fabrics.
              </p>
              <div className="text-xs font-mono text-[#D88A52]">
                UP TO 30% IR DROP REDUCTION
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#07090D] border border-[#1F2633]">
              <div className="p-3 rounded-xl bg-[#151A22] text-[#69A88A] w-fit mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">
                Direct-to-Die Liquid Cooling
              </h3>
              <p className="text-sm text-[#A8B0BA] leading-relaxed mb-4">
                Dissipating over 1000 watts within a compact multi-chip module necessitates high-conductivity Liquid Metal thermal interface materials (TIM-1) coupled directly with micro-channel liquid cold plates.
              </p>
              <div className="text-xs font-mono text-[#69A88A]">
                MICRO-FLUIDIC MANIFOLD INTEGRATION
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1F2633] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#66717D]">
              NEXT: NATIONAL SEMICONDUCTOR ECOSYSTEM
            </span>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#6FA8FF] hover:text-[#FAFAF8] transition-colors"
            >
              <span>Explore India Semiconductor Ecosystem Topology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
