import React from "react";
import { ArrowRight, Cpu, Target, Network, Factory, Globe2, Sparkles } from "lucide-react";

export function ValueChainSection() {
  const steps = [
    {
      num: "01",
      title: "TECHNOLOGY",
      icon: Cpu,
      detail: "Deep silicon physics, EDA synthesis, and microelectronics fundamentals."
    },
    {
      num: "02",
      title: "STRATEGY",
      icon: Target,
      detail: "Evaluating market opportunities, capital allocation, and post-Moore packaging roadmaps."
    },
    {
      num: "03",
      title: "PARTNERSHIPS",
      icon: Network,
      detail: "Structuring cross-border alliances between Silicon Valley innovators and global foundries."
    },
    {
      num: "04",
      title: "MANUFACTURING",
      icon: Factory,
      detail: "Operational cleanrooms, known-good-die test protocols, and high-yield OSAT delivery."
    },
    {
      num: "05",
      title: "ECOSYSTEM",
      icon: Globe2,
      detail: "Aligning government task forces, packaging forums (iMAPS), and university curricula."
    },
    {
      num: "06",
      title: "IMPACT",
      icon: Sparkles,
      detail: "Transforming design leadership into sovereign manufacturing and commercial scale."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
            END-TO-END CAPABILITY
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
            EXPERIENCE THAT SPANS <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">THE VALUE CHAIN.</span>
          </h2>
          <p className="text-base text-[#969BA3] mt-4">
            True technology leadership requires connecting transistor physics with factory cleanrooms, strategic partnerships, and national policy.
          </p>
        </div>

        {/* 6 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={st.title}
                className="p-6 rounded-2xl bg-[#08090B] border border-[#242933] hover:border-[#C9A46C]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#C9A46C] font-semibold">
                      {st.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#969BA3] group-hover:text-[#C9A46C] transition-colors" />
                  </div>

                  <h3 className="font-display text-base font-bold text-[#FAFAF8] mb-2 tracking-wide">
                    {st.title}
                  </h3>

                  <p className="text-xs text-[#969BA3] leading-relaxed">
                    {st.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#242933]/60 flex items-center justify-between text-[10px] font-mono text-[#66717D]">
                  <span>STEP 0{i + 1}</span>
                  {i < steps.length - 1 ? (
                    <ArrowRight className="w-3 h-3 text-[#C9A46C]/60" />
                  ) : (
                    <span className="text-[#C9A46C]">SCALE</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
