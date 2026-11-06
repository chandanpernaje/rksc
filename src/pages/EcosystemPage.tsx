import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { EcosystemSection } from "../components/sections/EcosystemSection";
import { FeaturedIdeaSovereigntySection } from "../components/sections/FeaturedIdeaSovereigntySection";
import { IndustryLeadershipSection } from "../components/sections/IndustryLeadershipSection";

export function EcosystemPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#07090D] border-b border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#69A88A] uppercase tracking-widest">
              NATIONAL POLICY &amp; INFRASTRUCTURE
            </span>
            <div className="h-[1px] w-12 bg-[#1F2633]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.06] mb-6">
            FROM DESIGN STRENGTH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69A88A] via-[#6FA8FF] to-[#FAFAF8]">
              TO MANUFACTURING SOVEREIGNTY.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B0BA] max-w-2xl leading-relaxed">
            Semiconductor capability is an interconnected ecosystem, not an isolated factory. How India is leveraging its 20% global chip design workforce to establish domestic advanced packaging, OSAT test beds, and supply-chain resilience.
          </p>
        </div>
      </section>

      {/* Frame 10: India Semiconductor Ecosystem Interactive Topology */}
      <EcosystemSection />

      {/* Frame 13: Featured Manifesto */}
      <FeaturedIdeaSovereigntySection />

      {/* Frame 11: Institutional Governance & Verified Roles */}
      <IndustryLeadershipSection />

      {/* Navigation Footer */}
      <section className="px-6 lg:px-12 py-12 bg-[#0D1117] border-t border-[#1F2633]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#66717D]">
            NEXT: STRATEGIC INSIGHTS &amp; BRIEFS
          </span>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#6FA8FF] hover:text-[#FAFAF8] transition-colors"
          >
            <span>Read Thought Leadership &amp; Technical Commentary</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
