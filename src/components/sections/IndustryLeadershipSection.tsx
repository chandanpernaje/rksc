import { LEADERSHIP_ROLES } from "../../data/organizations";
import { Award, CheckCircle2 } from "lucide-react";

export function IndustryLeadershipSection() {
  return (
    <section id="leadership" className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#D88A52] uppercase tracking-widest">
            11 // GOVERNANCE &amp; ECOSYSTEM ROLES
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            INSTITUTIONAL STEWARDSHIP. <br />
            <span className="text-[#A8B0BA]">SECTOR LEADERSHIP.</span>
          </h2>
          <p className="text-base text-[#A8B0BA] max-w-2xl leading-relaxed">
            Contributing non-partisan strategic guidance, academic board oversight, and microelectronics society stewardship to build enduring semiconductor institutions.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEADERSHIP_ROLES.map((role) => (
            <div
              key={role.organization}
              className="p-8 rounded-2xl bg-[#0D1117] border border-[#1F2633] hover:border-[#6FA8FF]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#151A22] border border-[#1F2633] text-[11px] font-mono text-[#6FA8FF]">
                    {role.nature}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#69A88A]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED ROLE</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-1">
                  {role.organization}
                </h3>

                <div className="text-sm font-mono text-[#D88A52] mb-3">
                  {role.role}
                </div>

                <div className="text-xs font-mono text-[#A8B0BA] mb-4 pb-4 border-b border-[#1F2633]">
                  FOCUS: {role.focus}
                </div>

                <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F2633] text-[10px] font-mono text-[#66717D]">
                {role.sourceNote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
