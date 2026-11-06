import { SPEAKING_ENGAGEMENTS } from "../../data/speaking";
import { Calendar, MapPin, Mic, ArrowUpRight } from "lucide-react";

export function SpeakingSection() {
  return (
    <section id="speaking" className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#D88A52] uppercase tracking-widest">
            14 // KEYNOTES &amp; SYMPOSIA
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
              IDEAS WORTH TAKING <br />
              <span className="text-[#A8B0BA]">TO THE STAGE.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-[#A8B0BA] leading-relaxed">
              Keynotes, panel discussions, and symposia chairmanships delivering clear strategic imperatives directly to industry decision-makers and policy architects.
            </p>
          </div>
        </div>

        {/* Horizontal Event Cards Scroller */}
        <div
          data-cursor="drag"
          className="flex overflow-x-auto pb-6 gap-6 scrollbar-none snap-x snap-mandatory"
        >
          {SPEAKING_ENGAGEMENTS.map((item, idx) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[320px] sm:w-[420px] p-8 rounded-2xl bg-[#0D1117] border border-[#1F2633] hover:border-[#6FA8FF]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#151A22] border border-[#1F2633] text-[11px] font-mono text-[#6FA8FF]">
                    <Mic className="w-3 h-3" />
                    <span>{item.format}</span>
                  </div>
                  <span className="text-xs font-mono text-[#66717D] tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] tracking-tight mb-4 leading-snug">
                  {item.topic}
                </h3>

                <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[#1F2633] space-y-2">
                <div className="text-xs font-mono text-[#FAFAF8] font-medium">
                  {item.event}
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[#66717D]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#66717D]">
          <span>SCROLL HORIZONTALLY TO TRAVERSE SPEAKING ENGAGEMENTS</span>
          <span>VERIFIED ADDRESSES ONLY</span>
        </div>
      </div>
    </section>
  );
}
