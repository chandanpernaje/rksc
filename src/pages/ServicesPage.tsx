import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "../data/services";
import { MagneticButton } from "../components/motion/MagneticButton";

export function ServicesPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              ADVISORY PRACTICES
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            CONSULTING &amp; ADVISORY <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">SERVICES.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            Turning complex semiconductor technology challenges into clear strategic direction, scalable manufacturing partnerships, and commercial growth.
          </p>
        </div>
      </section>

      {/* Services Overview Grid (Short overview linking to dedicated service pages) */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              SELECT A PRACTICE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Dedicated Practice Areas
            </h2>
            <p className="text-sm text-[#969BA3] mt-2">
              Select any practice below to explore detailed scope, capabilities, client profiles, and advisory approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="group p-8 rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/60 hover:bg-[#1B1E24] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#C9A46C] font-semibold">
                      {service.num}
                    </span>
                    <span className="text-[10px] font-mono text-[#66717D] uppercase tracking-wider">
                      {service.visualMeta.domain}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <div className="text-xs font-mono text-[#E1C58F] mb-4">
                    {service.tagline}
                  </div>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242933] flex items-center justify-between text-xs font-mono text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                  <span>Explore Practice Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C9A46C]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Formats */}
      <section className="py-20 px-6 lg:px-12 bg-[#111317] border-t border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              FLEXIBLE FORMATS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Engagement Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-2xl bg-[#08090B] border border-[#242933]">
              <div className="text-xs font-mono text-[#C9A46C] mb-2 uppercase">Retained Advisory</div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">Executive Retainer</h3>
              <p className="text-sm text-[#969BA3] leading-relaxed">
                Ongoing strategic counsel for C-suite leaders and boards navigating major technological shifts, foundry roadmaps, and M&amp;A due diligence.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#08090B] border border-[#242933]">
              <div className="text-xs font-mono text-[#C9A46C] mb-2 uppercase">Sprint Engagements</div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">Project Deep Dives</h3>
              <p className="text-sm text-[#969BA3] leading-relaxed">
                Focused 4 to 12-week strategic sprints: OSAT feasibility evaluations, cleanroom readiness audits, or cross-border market entry architectures.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#08090B] border border-[#242933]">
              <div className="text-xs font-mono text-[#C9A46C] mb-2 uppercase">Board &amp; Keynote</div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">Board &amp; Industry Briefings</h3>
              <p className="text-sm text-[#969BA3] leading-relaxed">
                High-impact private executive sessions, corporate offsites, and keynote perspectives framing the macro semiconductor landscape.
              </p>
            </div>
          </div>

          {/* Bottom CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1B1E24] to-[#08090B] border border-[#242933] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAF8] mb-2">
                Have a Complex Technology Challenge?
              </h3>
              <p className="text-sm text-[#969BA3] max-w-xl">
                Let's discuss how RKS Consulting can help your organization de-risk capital allocation and accelerate packaging capability.
              </p>
            </div>
            <Link to="/contact">
              <MagneticButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10 whitespace-nowrap">
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 text-[#08090B]" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
