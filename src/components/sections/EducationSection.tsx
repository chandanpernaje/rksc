import { EDUCATION_DATA } from "../../data/education";
import { GraduationCap, MapPin } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            16 // ACADEMIC FOUNDATIONS
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            DISCIPLINE &amp; INQUIRY.
          </h2>
          <p className="text-base text-[#A8B0BA] max-w-2xl leading-relaxed">
            Formative engineering and executive business training across premier institutions in India and the United States.
          </p>
        </div>

        {/* Education 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#0D1117] border border-[#1F2633] hover:border-[#6FA8FF]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#151A22] border border-[#1F2633] text-[#6FA8FF] w-fit mb-6">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="text-xs font-mono text-[#D88A52] uppercase tracking-wider mb-2">
                  {item.discipline}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] mb-3 leading-snug">
                  {item.degree}
                </h3>

                <div className="text-sm font-semibold text-[#A8B0BA] mb-2">
                  {item.institution}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#66717D] mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <p className="text-xs text-[#A8B0BA] leading-relaxed">
                  {item.context}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1F2633] text-[10px] font-mono text-[#66717D]">
                VERIFIED CREDENTIAL
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
