import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CareerTimelineSection } from "../components/sections/CareerTimelineSection";
import { CareerImpactSection } from "../components/sections/CareerImpactSection";
import { EducationSection } from "../components/sections/EducationSection";
import { EntrepreneurshipSection } from "../components/sections/EntrepreneurshipSection";
import { RecognitionSection } from "../components/sections/RecognitionSection";

export function JourneyPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#07090D] border-b border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#D88A52] uppercase tracking-widest">
              CHRONOLOGY &amp; IMPACT
            </span>
            <div className="h-[1px] w-12 bg-[#1F2633]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.06] mb-6">
            THREE DECADES. <br />
            <span className="text-[#A8B0BA]">ONE EVOLVING INDUSTRY.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B0BA] max-w-2xl leading-relaxed">
            From foundational transistor-level DSP design at Texas Instruments to scaling multinational engineering organizations, clean energy entrepreneurship, and sovereign advanced packaging roadmaps.
          </p>
        </div>
      </section>

      {/* Frame 06: Career Chronology Timeline */}
      <CareerTimelineSection />

      {/* Frame 07: Career by Impact (BUILD, SCALE, CONNECT, STRATEGIZE, ENABLE) */}
      <CareerImpactSection />

      {/* Frame 16: Academic Foundations */}
      <EducationSection />

      {/* Frame 17: Clean Energy Entrepreneurship */}
      <EntrepreneurshipSection />

      {/* Frame 18: Honors & Verified Recognition */}
      <RecognitionSection />

      {/* Navigation Footer */}
      <section className="px-6 lg:px-12 py-12 bg-[#07090D] border-t border-[#1F2633]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#66717D]">
            NEXT: ARCHITECTURAL COMPETENCIES
          </span>
          <Link
            to="/expertise"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#6FA8FF] hover:text-[#FAFAF8] transition-colors"
          >
            <span>Explore Technical Expertise Constellation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
