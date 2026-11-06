import { Link } from "react-router-dom";
import { ArrowRight, Building2, Calendar, CheckCircle2, Compass, Hammer, MapPin, Network, TrendingUp } from "lucide-react";
import { CAREER_MILESTONES } from "../data/career";

export function ExperiencePage() {
  const enablesCards = [
    {
      action: "BUILD",
      label: "Capability Creation",
      icon: Hammer,
      headline: "Creating & Developing Technology Capabilities",
      description: "From designing custom silicon blocks and digital signal processors to establishing cleanroom prototype workflows, building physical engineering capability anchors 30 years of practice.",
      contribution: "Transistor-level IC synthesis, FPGA architectures, clean-tech power electronics."
    },
    {
      action: "SCALE",
      label: "Operational Growth",
      icon: TrendingUp,
      headline: "Moving Organizations Toward Commercial & Manufacturing Scale",
      description: "Scaling cross-border engineering teams across North America and India, leading global practices, and delivering high-yield manufacturing operations under demanding commercial timelines.",
      contribution: "Global engineering practice leadership, multi-site delivery, volume OSAT ramp-ups."
    },
    {
      action: "CONNECT",
      label: "Ecosystem Relationships",
      icon: Network,
      headline: "Connecting Companies, People & Ecosystems",
      description: "Bridging the bilateral US-India microelectronics corridor, linking university research curricula with foundry cleanrooms, and connecting technology startups with global customers.",
      contribution: "Co-Chair iMAPS India Chapter, GTU Board of Semiconductor Technologies, ISM alignment."
    },
    {
      action: "STRATEGIZE",
      label: "High-Stakes Foresight",
      icon: Compass,
      headline: "Turning Technology Complexity into Strategic Direction",
      description: "Helping executive teams and boards evaluate capital expenditure, technology roadmaps, chiplet trade-offs, and sovereign supply-chain positioning in post-Moore compute.",
      contribution: "Sovereign semiconductor roadmap advisory, packaging capex prioritization."
    }
  ];

  const industryDomains = [
    { name: "Semiconductors", role: "ASICs, DSPs, Low-Power FPGAs, EDA Synthesis" },
    { name: "Advanced Packaging", role: "2.5D/3D Interposers, TSVs, Chiplets, UCIe" },
    { name: "Manufacturing & OSAT", role: "Assembly, Testing, Marking, Packaging, Cleanrooms" },
    { name: "Technology Strategy", role: "Capex Prioritization, Node Roadmap, IP Evaluation" },
    { name: "Business Development", role: "Strategic Alliances, Cross-Border High-Tech Deals" },
    { name: "Ecosystem Alliances", role: "Govt Task Forces, Packaging Forums, Standards" },
    { name: "Startups & Ventures", role: "Founder/CEO Execution, Commercialization, Scale" },
    { name: "Industry Leadership", role: "Society Co-Chair, Board Advisory, Keynote Speaking" },
  ];

  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              EXECUTIVE CAREER STORY
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            THREE DECADES OF TECHNOLOGY <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">AND TRANSFORMATION.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            A comprehensive track record connecting foundational silicon engineering, global high-tech management, venture commercialization, and sovereign semiconductor strategy.
          </p>
        </div>
      </section>

      {/* What the Experience Enables (BUILD, SCALE, CONNECT, STRATEGIZE) */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              EXECUTIVE VALUE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              WHAT THE EXPERIENCE ENABLES
            </h2>
            <p className="text-sm text-[#969BA3] mt-2">
              Four fundamental capabilities developed through 30+ years of hands-on technology leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enablesCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.action}
                  className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-[#1B1E24] text-[#C9A46C]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-[#C9A46C] font-bold tracking-widest">
                        {card.action}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-3">
                      {card.headline}
                    </h3>

                    <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#242933] text-xs font-mono text-[#FAFAF8]/90">
                    <span className="text-[#66717D]">DELIVERABLE: </span>
                    {card.contribution}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chronological Executive Career Story */}
      <section className="py-20 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              CHRONOLOGY OF LEADERSHIP
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Executive Milestones
            </h2>
            <p className="text-sm text-[#969BA3] mt-2">
              Verified career lineage spanning world-class technology pioneers, high-growth practices, and strategic advisory.
            </p>
          </div>

          <div className="relative border-l border-[#242933] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            {CAREER_MILESTONES.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#111317] border-2 border-[#66717D] group-hover:border-[#C9A46C] group-hover:bg-[#C9A46C] transition-all duration-300" />

                <div className="p-6 sm:p-8 rounded-2xl bg-[#08090B] border border-[#242933] group-hover:border-[#C9A46C]/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C9A46C] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#66717D]">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors mb-1">
                    {item.organization}
                  </h3>

                  <div className="text-sm font-mono text-[#E1C58F] mb-4">
                    {item.role}
                  </div>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-[#242933] flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#111317] border border-[#242933] text-[11px] font-mono text-[#969BA3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience Domain Matrix */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              DOMAIN MATRIX
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Industry Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryDomains.map((domain, i) => (
              <div
                key={domain.name}
                className="p-6 rounded-xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/40 transition-colors"
              >
                <div className="text-xs font-mono text-[#C9A46C] mb-2 font-semibold">
                  0{i + 1}
                </div>
                <h4 className="font-display text-lg font-bold text-[#FAFAF8] mb-2">
                  {domain.name}
                </h4>
                <p className="text-xs text-[#969BA3] leading-relaxed">
                  {domain.role}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10"
            >
              <span>Discuss How We Can Work Together</span>
              <ArrowRight className="w-4 h-4 text-[#08090B]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
