import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Clock, ChevronRight, Share2, ShieldCheck, Sparkles } from "lucide-react";
import { INSIGHTS_DATA } from "../data/insights";
import { MagneticButton } from "../components/motion/MagneticButton";

export function InsightDetailPage() {
  const { id } = useParams<{ id: string }>();

  const currentIndex = INSIGHTS_DATA.findIndex((a) => a.id === id);
  const article = INSIGHTS_DATA[currentIndex];

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  // Next article in cycle
  const nextIndex = (currentIndex + 1) % INSIGHTS_DATA.length;
  const nextArticle = INSIGHTS_DATA[nextIndex];

  return (
    <div className="pt-28 pb-24">
      {/* 1. Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#66717D]">
          <Link to="/" className="hover:text-[#FAFAF8] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#242933]" />
          <Link to="/insights" className="hover:text-[#FAFAF8] transition-colors">
            Insights
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#242933]" />
          <span className="text-[#C9A46C] truncate max-w-[200px] sm:max-w-none">
            {article.title}
          </span>
        </nav>
      </div>

      {/* 2. Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12">
        <header className="mb-12 pb-10 border-b border-[#242933]">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#111317] border border-[#C9A46C]/40 text-xs font-mono text-[#C9A46C] uppercase tracking-wider font-semibold">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#66717D]">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            {article.date && (
              <>
                <span className="text-[#242933]">•</span>
                <span className="text-xs font-mono text-[#66717D]">{article.date}</span>
              </>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.1] mb-6">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] leading-relaxed font-normal">
            {article.summary}
          </p>

          <div className="mt-8 pt-6 border-t border-[#242933]/60 flex items-center justify-between text-xs font-mono text-[#66717D]">
            <div>BY SHARAT KAUL // RKS CONSULTING</div>
            <div>EXECUTIVE STRATEGY BRIEF</div>
          </div>
        </header>

        {/* 3. Core Theses Card */}
        <section className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] mb-12 shadow-xl shadow-black/20">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C9A46C] font-semibold mb-4">
            KEY STRATEGIC THESES
          </div>

          <div className="space-y-4">
            {article.keyTheses.map((thesis, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <span className="font-mono text-sm font-bold text-[#C9A46C] shrink-0 mt-0.5">
                  0{idx + 1}.
                </span>
                <p className="text-sm sm:text-base text-[#FAFAF8] leading-relaxed">
                  {thesis}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Detailed Analysis Sections */}
        {article.detailedAnalysis && article.detailedAnalysis.length > 0 && (
          <section className="space-y-6 mb-16 text-base sm:text-lg text-[#969BA3] leading-relaxed">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAF8] mb-6">
              Strategic Context &amp; Industry Implications
            </h2>

            {article.detailedAnalysis.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        )}

        {/* 5. Editorial Note & Author Box */}
        <section className="p-8 rounded-2xl bg-[#08090B] border border-[#242933] mb-16">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#111317] border border-[#242933] text-[#C9A46C] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#FAFAF8] mb-2">
                About the Author &amp; Firm
              </h3>
              <p className="text-sm text-[#969BA3] leading-relaxed mb-4">
                Sharat Kaul is an executive technology leader and Co-Chair of the iMAPS India Chapter with over 30 years spanning Texas Instruments, Synopsys, MosChip, and Global Semiconductor EMS. Through RKC Advisory, he advises enterprise CEOs, foundry consortiums, and institutional boards on high-stakes semiconductor strategies.
              </p>
              <div className="text-xs font-mono text-[#66717D]">
                {article.editorialNote}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Call to Action */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#111317] via-[#1B1E24] to-[#111317] border border-[#242933] text-center mb-16 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08090B] border border-[#242933] text-[10px] font-mono text-[#C9A46C] uppercase tracking-wider mb-4">
            EXECUTIVE DIALOGUE
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#FAFAF8] mb-4">
            Navigating This Shift in Your Organization?
          </h2>

          <p className="text-sm sm:text-base text-[#969BA3] max-w-lg mx-auto mb-8 leading-relaxed">
            Schedule a confidential consultation to review your technology roadmap, packaging feasibility, and capital deployment strategy.
          </p>

          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10">
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 text-[#08090B]" />
            </MagneticButton>
          </Link>
        </section>

        {/* 7. Next Insight Navigation */}
        <footer className="pt-8 border-t border-[#242933] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            to="/insights"
            className="text-xs font-mono text-[#969BA3] hover:text-[#FAFAF8] transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C9A46C]" />
            <span>All Published Insights</span>
          </Link>

          <Link
            to={`/insights/${nextArticle.id}`}
            className="group flex items-center gap-4 text-left sm:text-right p-4 rounded-xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/60 hover:bg-[#1B1E24] transition-all"
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#C9A46C]">
                NEXT PERSPECTIVE
              </div>
              <div className="font-display text-sm sm:text-base font-bold text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors truncate max-w-[260px]">
                {nextArticle.title}
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#C9A46C] group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </footer>
      </article>
    </div>
  );
}
