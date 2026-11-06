import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Calendar, MapPin, Mic } from "lucide-react";
import { HeroSection } from "../components/sections/HeroSection";
import { WhereIWorkSection } from "../components/sections/WhereIWorkSection";
import { IntroductionSection } from "../components/sections/IntroductionSection";
import { ValueChainSection } from "../components/sections/ValueChainSection";
import { WhySharatSection } from "../components/sections/WhySharatSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";
import { CUSTOMER_CATEGORIES } from "../data/customers";
import { INSIGHTS_DATA } from "../data/insights";
import { SPEAKING_ENGAGEMENTS } from "../data/speaking";

export function HomePage() {
  // 2 Primary Insights for Homepage preview
  const previewInsights = INSIGHTS_DATA.slice(0, 2);

  // 2 Speaking items for Homepage preview
  const previewSpeaking = SPEAKING_ENGAGEMENTS.filter((s) => s.id !== "spk-pcim-2024").slice(0, 2);

  return (
    <>
      {/* 01: HERO (FROM SILICON TO SCALE) */}
      <HeroSection />

      {/* 02: WHERE WE WORK (ADVANCED PACKAGING, MANUFACTURING & TEST, ECOSYSTEMS) */}
      <WhereIWorkSection />

      {/* 03: INTRODUCTION (WHO IS SHARAT KAUL?) */}
      <IntroductionSection />

      {/* 04: EXPERIENCE (EXPERIENCE THAT SPANS THE VALUE CHAIN) */}
      <ValueChainSection />

      {/* 06: CLIENT VERTICALS (WORKING ACROSS THE ECOSYSTEM) */}
      <section className="py-24 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
                CLIENT VERTICALS
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
                WORKING ACROSS <br />
                <span className="font-serif italic font-normal text-[#C9A46C]">THE ECOSYSTEM.</span>
              </h2>
            </div>
            <Link
              to="/customers"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
            >
              <span>Explore Engagement Model</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Client Verticals Cards from Customer Page */}
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

      {/* 07: WHY SHARAT (COMPLEX PROBLEMS NEED CONNECTED THINKING) */}
      <WhySharatSection />

      {/* 08: INSIGHTS (PERSPECTIVES & THOUGHT LEADERSHIP) */}
      <section className="py-24 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
                THOUGHT LEADERSHIP
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
                PERSPECTIVES &amp; <br />
                <span className="font-serif italic font-normal text-[#C9A46C]">BRIEFINGS.</span>
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
            >
              <span>View All Briefs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewInsights.map((article) => (
              <div
                key={article.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#08090B] border border-[#242933] hover:border-[#C9A46C]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#C9A46C]">
                      {article.category}
                    </span>
                    <span className="text-xs font-mono text-[#66717D]">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-4">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242933]">
                  <Link
                    to={`/insights/${article.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FAFAF8] hover:text-[#C9A46C] transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C9A46C]" />
                    <span>Read Full Perspective</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09: SPEAKING (IDEAS WORTH SHARING) */}
      <section className="py-24 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
                KEYNOTES &amp; SYMPOSIA
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
                IDEAS WORTH SHARING
              </h2>
            </div>
            <Link
              to="/speaking"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
            >
              <span>Explore Speaking Topics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewSpeaking.map((spk) => (
              <div
                key={spk.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C9A46C] mb-3">
                    <Mic className="w-3.5 h-3.5" />
                    <span>{spk.format}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] mb-3">
                    {spk.topic}
                  </h3>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {spk.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242933] flex items-center justify-between text-xs font-mono text-[#66717D]">
                  <span className="text-[#FAFAF8]">{spk.event}</span>
                  <span>{spk.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10: PERSONAL PHILOSOPHY ("TECHNOLOGY IS ONLY HALF THE STORY.") */}
      <section className="py-24 px-6 lg:px-12 bg-[#111317] border-y border-[#242933] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1E24] border border-[#242933] text-[10px] font-mono text-[#C9A46C] uppercase tracking-wider mb-6">
            PERSONAL PHILOSOPHY
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAFAF8] leading-tight mb-8">
            "Technology is only <span className="italic text-[#C9A46C]">half</span> the story."
          </h2>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl mx-auto leading-relaxed mb-8">
            The other half is understanding people, markets, partnerships and the ecosystems required to turn technology into impact.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
          >
            <span>Learn More About RKS Consulting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11: FINAL CTA */}
      <FinalCTASection />
    </>
  );
}
