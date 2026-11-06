import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ExpertiseSection } from "../components/sections/ExpertiseSection";

export function ExpertisePage() {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#07090D] border-b border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
              KNOWLEDGE TOPOLOGY
            </span>
            <div className="h-[1px] w-12 bg-[#1F2633]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.06] mb-6">
            DEEP TECHNOLOGY. <br />
            <span className="text-[#A8B0BA]">STRATEGIC PERSPECTIVE.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B0BA] max-w-2xl leading-relaxed">
            Traversing the interdisciplinary graph connecting device physics, electronic design automation (EDA), heterogeneous chiplet interconnects, OSAT testing economics, and national semiconductor policy.
          </p>
        </div>
      </section>

      {/* Frame 08: Interactive Expertise Constellation */}
      <ExpertiseSection />

      {/* Navigation Footer */}
      <section className="px-6 lg:px-12 py-12 bg-[#0D1117] border-t border-[#1F2633]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#66717D]">
            NEXT: THE ADVANCED PACKAGING REVOLUTION
          </span>
          <Link
            to="/packaging"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#6FA8FF] hover:text-[#FAFAF8] transition-colors"
          >
            <span>Inspect Advanced Packaging Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
