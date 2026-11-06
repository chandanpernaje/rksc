import { RECOGNITIONS } from "../../data/awards";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function RecognitionSection() {
  return (
    <section id="recognition" className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            18 // CREDENTIALS &amp; HONORS
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            VERIFIED CREDENTIALS.
          </h2>
          <p className="text-base text-[#A8B0BA] max-w-2xl leading-relaxed">
            Professional affiliations, senior technical elevations, and public service recognitions.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECOGNITIONS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#0D1117] border border-[#1F2633] hover:border-[#6FA8FF]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#D88A52] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#69A88A]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-2 leading-snug">
                  {item.title}
                </h3>

                <div className="text-sm font-mono text-[#6FA8FF] mb-4">
                  {item.issuer} · {item.year}
                </div>

                <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F2633] text-[10px] font-mono text-[#66717D]">
                {item.verificationStatus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
