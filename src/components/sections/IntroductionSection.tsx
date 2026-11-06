import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck } from "lucide-react";
import { PROFILE } from "../../data/profile";

export function IntroductionSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Who is Sharat Kaul */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1E24] border border-[#242933] text-[10px] font-mono text-[#C9A46C] uppercase tracking-wider mb-4">
              EXECUTIVE INTRODUCTION
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight mb-6">
              WHO IS <br />
              <span className="font-serif italic font-normal text-[#C9A46C]">RKS CONSULTING?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#969BA3] leading-relaxed mb-6">
              RKS Consulting is an executive technology advisory firm led by Sharat Kaul, operating at the confluence of semiconductor design, advanced packaging, manufacturing scale-up, and national industrial policy.
            </p>

            <p className="text-sm sm:text-base text-[#969BA3] leading-relaxed mb-8">
              Over three decades, he has helped ramp foundational silicon at Texas Instruments, direct marketing at QuickLogic, scale business development at Infinite, drive strategic accounts at Synopsys, commercialize clean energy at Solar-Apps, and lead executive initiatives at MosChip, IESA, and Global Semiconductor EMS. Today, he advises C-suites, foundry consortiums, and public policy leaders on capturing value in post-Moore computing.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
              >
                <span>Read Complete Executive Biography</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Pillars Snapshot */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#08090B] border border-[#242933] space-y-6">
            <h3 className="font-display text-xl font-bold text-[#FAFAF8] border-b border-[#242933] pb-4">
              Core Leadership Footprint
            </h3>

            <div className="space-y-4 text-xs font-sans text-[#969BA3]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C9A46C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FAFAF8] block">Advanced Packaging &amp; OSAT</strong>
                  Guidance on 2.5D/3D interposers, modular chiplets, through-silicon vias, and cleanroom test protocols.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C9A46C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FAFAF8] block">Sovereign Ecosystem Alliances</strong>
                  Co-Chair iMAPS India Chapter and board advisor to Gujarat Technological University (GTU).
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C9A46C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FAFAF8] block">Global Corridor Execution</strong>
                  Cross-border technology strategy bridging Silicon Valley, Texas, and India’s semiconductor corridor.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C9A46C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FAFAF8] block">Bilingual Tech &amp; Business Rigor</strong>
                  Holds an MBA from SMU Cox and a BS in Electrical Engineering (BSEE) from UT Dallas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
