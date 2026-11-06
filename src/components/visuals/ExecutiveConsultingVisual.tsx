import React from "react";
import { ArrowUpRight, Globe, Layers, ShieldCheck, TrendingUp } from "lucide-react";

export function ExecutiveConsultingVisual() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] max-w-[580px] mx-auto rounded-2xl overflow-hidden border border-[#242933] bg-[#111317] p-6 sm:p-8 flex flex-col justify-between shadow-2xl group">
      {/* Background Architectural Geometry & Ambient Warm Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,164,108,0.12)_0%,rgba(8,9,11,0)_70%)] pointer-events-none" />
      <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />

      {/* Decorative Elegant Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="0%" x2="90%" y2="100%" stroke="#C9A46C" strokeWidth="0.8" strokeDasharray="4 8" />
        <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="#242933" strokeWidth="1" />
        <circle cx="80%" cy="25%" r="90" fill="none" stroke="#C9A46C" strokeWidth="0.6" strokeOpacity="0.4" />
        <circle cx="80%" cy="25%" r="140" fill="none" stroke="#242933" strokeWidth="0.8" strokeDasharray="3 6" />
      </svg>

      {/* Top Header Card Stamp */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#242933]/80 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#C9A46C] shadow-[0_0_8px_rgba(201,164,108,0.8)]" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#FAFAF8]/90">
            STRATEGIC ADVISORY BRIEF
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#969BA3] tracking-wider">
          GLOBAL CORRIDOR · US / INDIA
        </span>
      </div>

      {/* Center Editorial Composition */}
      <div className="relative z-10 my-auto py-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16191F] border border-[#C9A46C]/30 text-[10px] font-mono text-[#C9A46C] mb-4">
          <Globe className="w-3 h-3 text-[#C9A46C]" />
          <span>Cross-Sector Semiconductor Advisory</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAFAF8] tracking-tight leading-snug mb-3">
          Connecting technology, <br />
          <span className="italic text-[#C9A46C]">capital</span> &amp; national policy.
        </h3>

        <p className="text-xs sm:text-sm text-[#969BA3] max-w-sm leading-relaxed">
          Guiding leadership through the complex multi-billion-dollar shift from monolithic design to advanced packaging and sovereign manufacturing.
        </p>
      </div>

      {/* Bottom Matrix Indicators */}
      <div className="relative z-10 pt-4 border-t border-[#242933]/80 grid grid-cols-3 gap-2 text-left">
        <div className="p-2.5 rounded-lg bg-[#16191F] border border-[#242933]">
          <div className="text-[9px] font-mono uppercase tracking-wider text-[#969BA3]">Domain</div>
          <div className="text-xs font-semibold text-[#FAFAF8] mt-0.5 truncate">Advanced OSAT</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#16191F] border border-[#242933]">
          <div className="text-[9px] font-mono uppercase tracking-wider text-[#969BA3]">Impact</div>
          <div className="text-xs font-semibold text-[#C9A46C] mt-0.5 truncate">National Scale</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#16191F] border border-[#242933]">
          <div className="text-[9px] font-mono uppercase tracking-wider text-[#969BA3]">Experience</div>
          <div className="text-xs font-semibold text-[#FAFAF8] mt-0.5 truncate">30+ Years</div>
        </div>
      </div>
    </div>
  );
}
