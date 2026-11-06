import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CUSTOMER_CATEGORIES } from "../data/customers";

export function CustomersPage() {
  const steps = [
    {
      num: "01",
      name: "UNDERSTAND",
      headline: "Deconstruct the Strategic Challenge",
      detail: "We begin with rigorous technical and business discovery to map your specific market constraints, technology dependencies, capital parameters, and competitive exposure."
    },
    {
      num: "02",
      name: "STRATEGIZE",
      headline: "Formulate Actionable Roadmaps",
      detail: "Synthesizing cross-border technology trends, OSAT supply chains, and sovereign incentives into clear strategic choices with defined risk-adjusted options."
    },
    {
      num: "03",
      name: "CONNECT",
      headline: "Unite the Requisite Ecosystem",
      detail: "Activating relationships across foundry consortiums, packaging partners, academic research boards, and government bodies to ensure execution feasibility."
    },
    {
      num: "04",
      name: "EXECUTE",
      headline: "Deliver Measurable Outcomes",
      detail: "Transitioning strategic plans into operational next steps: RFPs, packaging tape-out qualification, workforce pipeline structures, or commercial partnership agreements."
    }
  ];

  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              CLIENT ENGAGEMENT VERTICALS
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            CLIENT <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">VERTICALS.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            Working across organizations, industries and ecosystems to turn complex challenges into meaningful commercial and sovereign opportunities.
          </p>
        </div>
      </section>

      {/* Customer Categories */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              CLIENT VERTICALS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Who We Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-8 rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">
                    {cat.category}
                  </h3>
                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#242933]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C9A46C] mb-2 font-semibold">
                    Common Engagement Focus:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.engagementAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#1B1E24] border border-[#242933] text-[11px] font-sans text-[#FAFAF8]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model / How We Work */}
      <section className="py-24 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              CONSULTING METHODOLOGY
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8]">
              HOW WE WORK
            </h2>
            <p className="text-sm sm:text-base text-[#969BA3] mt-3">
              A structured four-step executive engagement model delivering measurable strategic clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-8 rounded-2xl bg-[#111317] border border-[#242933] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-[#C9A46C] font-semibold mb-4">
                    PHASE {st.num}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-2">
                    {st.name}
                  </h3>
                  <div className="text-xs font-mono text-[#E1C58F] mb-4">
                    {st.headline}
                  </div>
                  <p className="text-xs sm:text-sm text-[#969BA3] leading-relaxed">
                    {st.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#242933] text-[9px] font-mono text-[#66717D]">
                  EXECUTIVE DELIVERABLE READY
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#1B1E24]/60 border border-[#242933] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] mb-2">
                Ready to Discuss a Collaboration?
              </h3>
              <p className="text-sm text-[#969BA3]">
                Schedule an initial confidential discussion to review your organization's challenges and timeline.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all whitespace-nowrap"
            >
              <span>Initiate Dialogue</span>
              <ArrowRight className="w-4 h-4 text-[#08090B]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
