import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { INSIGHTS_DATA } from "../data/insights";

export function InsightsPage() {
  const featuredArticle = INSIGHTS_DATA.find((a) => a.id === "featured-sovereignty") || INSIGHTS_DATA[0];
  const articlesList = INSIGHTS_DATA.filter((a) => a.id !== "featured-sovereignty");

  const upcomingPerspectives = [
    {
      title: "Building the Indian OSAT Backbone: Cleanrooms, Logistics, and Testing",
      category: "Manufacturing Readiness",
      status: "Perspective // Coming Soon",
      summary: "Examining the prerequisite physical capabilities for high-yield ATMP ramp-ups across Gujarat, Assam, and South Asia."
    },
    {
      title: "Fabless-to-Package Economics: Why Heterogeneous Integration Lowers Mask Costs",
      category: "Business Strategy",
      status: "Perspective // Coming Soon",
      summary: "How startups and enterprise OEMs can leverage modular chiplets to enter custom silicon at a fraction of 3nm monolithic capex."
    },
    {
      title: "Workforce Pipelines: Aligning University Microelectronics Curricula with Fabs",
      category: "Ecosystem & Policy",
      status: "Perspective // Coming Soon",
      summary: "Insights from the GTU Board of Semiconductor Technologies on practical cleanroom apprenticeships and EDA tool access."
    }
  ];

  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              PERSPECTIVES &amp; THOUGHT LEADERSHIP
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            INSIGHTS &amp; <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">PERSPECTIVES.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            Perspectives on technology, semiconductors, manufacturing and the ecosystems shaping the future.
          </p>
        </div>
      </section>

      {/* Featured Insight Hero Banner */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#111317] via-[#1B1E24] to-[#111317] border border-[#242933] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none font-serif text-9xl text-white">
              SOVEREIGNTY
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#111317] border border-[#C9A46C]/40 text-xs font-mono text-[#C9A46C]">
                  FEATURED STRATEGIC PERSPECTIVE
                </span>
                <span className="text-xs font-mono text-[#66717D]">{featuredArticle.readTime}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] mb-6 leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-base sm:text-lg text-[#969BA3] leading-relaxed mb-8">
                {featuredArticle.summary}
              </p>

              <Link
                to={`/insights/${featuredArticle.id}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-lg shadow-[#C9A46C]/10"
              >
                <span>Read Full Brief</span>
                <ArrowRight className="w-4 h-4 text-[#08090B]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Articles Grid */}
      <section className="py-16 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              EDITORIAL ESSAYS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Published Analyses &amp; Theses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articlesList.map((article) => (
              <Link
                key={article.id}
                to={`/insights/${article.id}`}
                className="p-8 rounded-2xl bg-[#08090B] border border-[#242933] hover:border-[#C9A46C]/60 hover:-translate-y-1 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#C9A46C] uppercase font-semibold">
                      {article.category}
                    </span>
                    <span className="text-xs font-mono text-[#66717D]">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors mb-3">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {article.summary}
                  </p>

                  <div className="p-4 rounded-xl bg-[#111317] border border-[#242933] mb-6 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#C9A46C] font-semibold">
                      Key Theses:
                    </div>
                    {article.keyTheses.slice(0, 2).map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#969BA3]">
                        <span className="text-[#C9A46C] mt-0.5">•</span>
                        <span className="line-clamp-2">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#242933] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                    <BookOpen className="w-3.5 h-3.5 text-[#C9A46C]" />
                    <span>Read Full Perspective</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Perspectives */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              FORTHCOMING PERSPECTIVES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              In Development
            </h2>
            <p className="text-sm text-[#969BA3] mt-2">
              Future briefing papers prepared for executive roundtables and industry policy forums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingPerspectives.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#111317]/60 border border-[#242933] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#969BA3] uppercase">
                      {p.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1B1E24] text-[#E1C58F] border border-[#242933]">
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">
                    {p.title}
                  </h3>

                  <p className="text-xs text-[#969BA3] leading-relaxed">
                    {p.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#242933] text-[9px] font-mono text-[#66717D]">
                  EXECUTIVE BRIEFING IN PROGRESS
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
