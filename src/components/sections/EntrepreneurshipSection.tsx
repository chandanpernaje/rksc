import { Sun, Award, Zap, ArrowUpRight } from "lucide-react";

export function EntrepreneurshipSection() {
  return (
    <section id="entrepreneurship" className="relative py-28 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#D88A52] uppercase tracking-widest">
            17 // VENTURE &amp; SUSTAINABILITY
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            BEYOND SEMICONDUCTORS.
          </h2>
          <p className="text-base text-[#A8B0BA] max-w-2xl leading-relaxed">
            Applying engineering rigor, hardware productization, and venture execution to clean energy infrastructure and commercialization.
          </p>
        </div>

        {/* Solar-Apps Feature Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#07090D] border border-[#1F2633] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded bg-[#D88A52]/15 border border-[#D88A52]/40 text-xs font-mono text-[#D88A52]">
                2013 — 2020 · FOUNDER &amp; CEO
              </span>
              <span className="text-xs font-mono text-[#66717D]">
                SOLAR-APPS ENERGY
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAF8] mb-4">
              Decentralized Renewable Systems &amp; Hardware Commercialization
            </h3>

            <p className="text-sm sm:text-base text-[#A8B0BA] leading-relaxed mb-6">
              Founded and steered Solar-Apps Energy to engineer decentralized photovoltaic systems, smart power electronics, and commercial-scale solar installations. Under Sharat Kaul’s leadership, the company deployed clean electricity across institutional campuses and regional facilities, earning the prestigious Karnataka Solar CSR Award.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1F2633]">
              <div>
                <div className="text-[10px] font-mono text-[#66717D] uppercase">Core Domain</div>
                <div className="text-sm font-mono text-[#FAFAF8] font-semibold mt-1">Power Electronics</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#66717D] uppercase">Execution</div>
                <div className="text-sm font-mono text-[#FAFAF8] font-semibold mt-1">Multi-MW Deployed</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#66717D] uppercase">Recognition</div>
                <div className="text-sm font-mono text-[#D88A52] font-semibold mt-1">Solar CSR Award</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 bg-[#151A22] border border-[#1F2633] rounded-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#69A88A] mb-3">
                <Sun className="w-4 h-4" />
                <span>CLEAN ENERGY INTEGRATION</span>
              </div>
              <h4 className="font-display text-lg font-bold text-[#FAFAF8] mb-2">
                Silicon Meets Photovoltaics
              </h4>
              <p className="text-xs text-[#A8B0BA] leading-relaxed">
                Both silicon semiconductors and photovoltaic wafers share crystalline physics, metallization challenges, and supply-chain dependencies. This entrepreneurial venture demonstrated cross-domain execution, hardware product development, and customer delivery.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F2633] text-[10px] font-mono text-[#66717D]">
              VERIFIED VENTURE CHAPTER IN PROFESSIONAL RECORD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
