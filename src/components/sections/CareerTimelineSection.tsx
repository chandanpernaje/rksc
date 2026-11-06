import { CAREER_MILESTONES } from "../../data/career";
import { Building2, Calendar, MapPin } from "lucide-react";

export function CareerTimelineSection() {
  return (
    <section id="journey" className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#D88A52] uppercase tracking-widest">
            06 // CHRONOLOGY OF IMPACT
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-4xl mb-20">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            THREE DECADES. <br />
            MANY ROLES. <br />
            <span className="text-[#A8B0BA]">ONE EVOLVING INDUSTRY.</span>
          </h2>
          <p className="text-base text-[#A8B0BA] max-w-2xl leading-relaxed">
            A comprehensive professional lineage anchored in core silicon design, advancing through global engineering leadership, clean energy entrepreneurship, and sovereign advanced packaging strategy.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#1F2633] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {CAREER_MILESTONES.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline Illuminated Node */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07090D] border-2 border-[#66717D] group-hover:border-[#6FA8FF] group-hover:bg-[#6FA8FF] group-hover:shadow-[0_0_12px_rgba(111,168,255,0.8)] transition-all duration-300" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-[#1F2633] group-hover:border-[#6FA8FF]/40 transition-all duration-300 shadow-lg">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#6FA8FF]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#66717D]">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Organization & Role */}
                <div className="flex items-baseline gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-[#D88A52] shrink-0 mt-1" />
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] group-hover:text-[#6FA8FF] transition-colors">
                    {item.organization}
                  </span>
                </div>

                <div className="text-sm font-mono text-[#D88A52] mb-4">
                  {item.role}
                </div>

                <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Technical Tags */}
                <div className="pt-4 border-t border-[#1F2633] flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#151A22] border border-[#1F2633] text-[11px] font-mono text-[#A8B0BA]"
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
  );
}
