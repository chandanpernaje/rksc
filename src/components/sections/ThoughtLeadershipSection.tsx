import { useState } from "react";
import { INSIGHTS_DATA, InsightArticle } from "../../data/insights";
import { ArrowUpRight, BookOpen, Check, X } from "lucide-react";

export function ThoughtLeadershipSection() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="relative py-28 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            12 // STRATEGIC DISCOURSE
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
              THINKING ABOUT <br />
              <span className="text-[#A8B0BA]">WHAT COMES NEXT.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-[#A8B0BA] leading-relaxed">
              Syntheses, technical briefs, and strategic points of view on post-Moore physics, OSAT manufacturing economics, and domestic semiconductor sovereignty.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INSIGHTS_DATA.map((article) => (
            <div
              key={article.id}
              className="group p-8 rounded-2xl bg-[#07090D] border border-[#1F2633] hover:border-[#6FA8FF]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#D88A52] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs font-mono text-[#66717D]">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] tracking-tight group-hover:text-[#6FA8FF] transition-colors mb-4">
                  {article.title}
                </h3>

                <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
                  {article.summary}
                </p>

                {/* Key Theses */}
                <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#151A22]/50 border border-[#1F2633]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#6FA8FF] font-semibold">
                    Core Architectural Theses:
                  </div>
                  {article.keyTheses.map((thesis, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#A8B0BA]">
                      <span className="text-[#6FA8FF] font-mono mt-0.5">•</span>
                      <span>{thesis}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1F2633] flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#FAFAF8] hover:text-[#6FA8FF] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF]"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#6FA8FF]" />
                  <span>Inspect Full Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#66717D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <span className="text-[10px] font-mono text-[#66717D]">
                  EDITORIAL ESSAY
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal / Lightbox */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#07090D]/90 backdrop-blur-md flex items-center justify-center p-6"
        >
          <div className="max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-[#0D1117] border border-[#1F2633] rounded-2xl p-8 sm:p-10 relative shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-[#A8B0BA] hover:text-white bg-[#151A22] border border-[#1F2633]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#D88A52] mb-3">
              <span>{selectedArticle.category}</span>
              <span>·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 className="font-display text-3xl font-bold text-[#FAFAF8] mb-4">
              {selectedArticle.title}
            </h3>

            <p className="text-base text-[#A8B0BA] leading-relaxed mb-6">
              {selectedArticle.summary}
            </p>

            <div className="p-5 rounded-xl bg-[#151A22] border border-[#1F2633] mb-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6FA8FF] font-bold">
                Detailed Thematic Tenets
              </h4>
              {selectedArticle.keyTheses.map((t, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#FAFAF8]">
                  <span className="text-[#6FA8FF] font-mono font-bold">{idx + 1}.</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="text-xs font-mono text-[#66717D] border-t border-[#1F2633] pt-4">
              {selectedArticle.editorialNote}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
