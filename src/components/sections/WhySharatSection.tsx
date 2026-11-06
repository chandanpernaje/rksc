import React from "react";
import { Award, Compass, Eye, ShieldCheck, Zap } from "lucide-react";

export function WhySharatSection() {
  const cards = [
    {
      num: "01",
      title: "Industry Depth",
      icon: ShieldCheck,
      headline: "Decades of Hands-On Semiconductor & Hardware Grounding",
      detail: "Not theoretical consultants—grounded in 30+ years from Texas Instruments DSPs and Synopsys EDA synthesis to cutting-edge 2.5D/3D OSAT packaging."
    },
    {
      num: "02",
      title: "Strategic Perspective",
      icon: Eye,
      headline: "Connecting Technical Frontiers with Board-Level Business Objectives",
      detail: "Coupling BS Electrical Engineering (BSEE) rigor with SMU Cox MBA business frameworks to evaluate capital allocation, M&A risk, and commercial feasibility."
    },
    {
      num: "03",
      title: "Ecosystem Access",
      icon: Compass,
      headline: "Direct Relationships Across Industry, Government & Academia",
      detail: "Active leadership as Co-Chair iMAPS India Chapter, GTU Board of Semiconductor Technologies, and contributor to the India Semiconductor Mission."
    },
    {
      num: "04",
      title: "Execution Focus",
      icon: Zap,
      headline: "Turning Abstract Strategy into Measurable Operational Reality",
      detail: "Proven track record moving complex hardware from concept to volume cleanroom manufacturing, customer qualification, and commercial scale."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#08090B]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
            THE ADVISORY ADVANTAGE
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
            COMPLEX PROBLEMS NEED <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">CONNECTED THINKING.</span>
          </h2>
          <p className="text-base text-[#969BA3] mt-4">
            Why enterprise CEOs, foundry consortiums, and technology investors engage RKS Consulting to navigate high-stakes semiconductor inflections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-8 rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#1B1E24] text-[#C9A46C]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#66717D]">
                      {card.num}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-2">
                    {card.title}
                  </h3>

                  <div className="text-xs font-mono text-[#E1C58F] mb-4">
                    {card.headline}
                  </div>

                  <p className="text-xs sm:text-sm text-[#969BA3] leading-relaxed">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#242933] text-[9px] font-mono text-[#66717D]">
                  VERIFIED ADVISORY PILLAR
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
