import { ArrowUpRight, Cpu, Layers, Target, Network } from "lucide-react";

export function FocusSection() {
  const cards = [
    {
      num: "01",
      title: "ADVANCED PACKAGING",
      tagline: "Heterogeneous Architecture",
      icon: Layers,
      description:
        "Advanced packaging, 2.5D/3D interposers, heterogeneous integration, chiplets, and emerging silicon co-packaging architectures driving post-Moore scaling.",
      highlights: ["Chiplet Disaggregation", "Through-Silicon Vias", "Glass Substrates", "Thermal Mitigation"]
    },
    {
      num: "02",
      title: "OSAT CAPABILITY",
      tagline: "Manufacturing & Assembly",
      icon: Cpu,
      description:
        "Packaging, assembly, high-reliability test, and the physical manufacturing capabilities required to scale domestic semiconductor ecosystems.",
      highlights: ["Cleanroom Ramp-Up", "Known Good Die (KGD)", "System-Level Test", "High-Reliability EMS"]
    },
    {
      num: "03",
      title: "SEMICONDUCTOR STRATEGY",
      tagline: "Sovereignty & Roadmaps",
      icon: Target,
      description:
        "Technology strategy, supply-chain localization, sovereign capability development, and manufacturing readiness for nations and enterprise consortia.",
      highlights: ["Capex Prioritization", "Fabless-to-Fab Linkage", "Sovereign Supply Chains", "Incentive Architecture"]
    },
    {
      num: "04",
      title: "ECOSYSTEM BUILDING",
      tagline: "Tri-Sector Alignment",
      icon: Network,
      description:
        "Connecting industry leaders, academic institutions, government bodies, and entrepreneurial technology communities into a cohesive, enduring engine.",
      highlights: ["iMAPS Packaging Forums", "Curricula Modernization", "Workforce Pipelines", "Global Alliances"]
    }
  ];

  return (
    <section id="focus" className="relative py-28 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            05 // PILLARS OF PRACTICE
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            WHERE TECHNOLOGY <br />
            <span className="text-[#A8B0BA]">MEETS STRATEGY.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A8B0BA] leading-relaxed">
            Bridging foundational silicon physics with the manufacturing and policy infrastructure required to build durable, sovereign semiconductor capabilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="group relative p-8 sm:p-10 rounded-2xl bg-[#07090D] border border-[#1F2633] hover:border-[#6FA8FF]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-xl bg-[#151A22] border border-[#1F2633] text-[#6FA8FF] group-hover:scale-105 group-hover:border-[#6FA8FF]/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#66717D] tabular-nums">
                        {card.num}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[#66717D] group-hover:text-[#6FA8FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#D88A52] uppercase tracking-wider mb-2">
                    {card.tagline}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAF8] tracking-tight mb-4">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#A8B0BA] leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="pt-6 border-t border-[#1F2633]/60 flex flex-wrap gap-2">
                  {card.highlights.map((item, idx) => (
                    <span
                      key={item}
                      className="text-xs font-mono text-[#66717D] group-hover:text-[#A8B0BA] transition-colors"
                    >
                      {item}
                      {idx < card.highlights.length - 1 && <span className="ml-2 text-[#1F2633]">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
