import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Layers } from "lucide-react";
import { ThesisSection } from "../components/sections/ThesisSection";
import { SiliconToSystemSection } from "../components/sections/SiliconToSystemSection";

export function SiliconToSystemPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#07090D] border-b border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
              TECHNOLOGICAL THESIS
            </span>
            <div className="h-[1px] w-12 bg-[#1F2633]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.06] mb-6">
            FROM SILICON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FA8FF] via-[#FAFAF8] to-[#D88A52]">
              TO SYSTEMS.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B0BA] max-w-2xl leading-relaxed">
            As computing becomes heterogeneous, system value is dictated by what happens beyond the silicon die: packaging, interconnect density, thermal dissipation, and manufacturing readiness.
          </p>
        </div>
      </section>

      {/* Frame 03: The Thesis Scroll Scrub */}
      <ThesisSection />

      {/* Frame 04: The 5-Stage Transformation Architecture */}
      <SiliconToSystemSection />

      {/* Deep-Dive Technical Comparison */}
      <section className="py-24 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-mono text-[#D88A52] uppercase tracking-widest mb-4">
            PARADIGM COMPARISON
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8] mb-12">
            Monolithic Limits vs. Heterogeneous Integration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#07090D] border border-[#1F2633]">
              <div className="text-xs font-mono text-[#66717D] uppercase mb-2">Traditional Era</div>
              <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-4">
                The Monolithic Reticle Trap
              </h3>
              <ul className="space-y-4 text-sm text-[#A8B0BA] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#D88A52] font-mono mt-0.5">•</span>
                  <span><strong>Exponential Yield Penalty:</strong> As die size approaches the 858mm² lithography mask boundary, defect probability increases exponentially, causing yield collapse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D88A52] font-mono mt-0.5">•</span>
                  <span><strong>Cost Overhang:</strong> Forcing analog, power management, and I/O circuits onto leading-edge 3nm nodes wastes expensive front-end wafer fabrication capex.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D88A52] font-mono mt-0.5">•</span>
                  <span><strong>Tape-out Inflexibility:</strong> Any single logic defect invalidates the entire monolithic die, demanding an entire multi-million dollar mask re-spin.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#07090D] border border-[#6FA8FF]/40 shadow-xl">
              <div className="text-xs font-mono text-[#6FA8FF] uppercase mb-2">Heterogeneous Era</div>
              <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-4">
                Modular Chiplet Disaggregation
              </h3>
              <ul className="space-y-4 text-sm text-[#A8B0BA] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#6FA8FF] font-mono mt-0.5">•</span>
                  <span><strong>Right-Node Economics:</strong> Place compute cores on 3nm GAA, while keeping I/O and RF on proven, cost-effective 28nm trailing nodes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6FA8FF] font-mono mt-0.5">•</span>
                  <span><strong>Sub-2ns Die-to-Die Interconnects:</strong> UCIe 1.1 and Bunch-of-Wires (BoW) standards deliver high bandwidth density without monolithic die constraints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6FA8FF] font-mono mt-0.5">•</span>
                  <span><strong>Known Good Die (KGD) Testing:</strong> Validate each modular chiplet before packaging assembly, maximizing final assembly yields.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1F2633] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#66717D]">
              CONTINUE READING ARCHITECTURAL ROADMAP
            </div>
            <Link
              to="/packaging"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#6FA8FF] hover:text-[#FAFAF8] transition-colors"
            >
              <span>Explore Advanced Packaging Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
