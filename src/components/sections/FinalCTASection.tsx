import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../motion/MagneticButton";

export function FinalCTASection() {
  return (
    <section className="py-28 px-6 lg:px-12 bg-[#08090B] border-t border-[#242933] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,108,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1E24] border border-[#242933] text-[10px] font-mono text-[#C9A46C] uppercase tracking-wider mb-6">
          COMMENCE ADVISORY ENGAGEMENT
        </div>

        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-8">
          HAVE A COMPLEX <br />
          <span className="font-serif italic font-normal text-[#C9A46C]">
            TECHNOLOGY CHALLENGE?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl mx-auto leading-relaxed mb-10">
          Let's explore the opportunity, understand the challenge and identify what comes next.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10 whitespace-nowrap">
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 text-[#08090B]" />
            </MagneticButton>
          </Link>

          <Link to="/services">
            <button className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#111317] text-[#FAFAF8] border border-[#242933] hover:border-[#C9A46C]/50 hover:bg-[#1B1E24] font-mono text-xs font-medium tracking-wide transition-all whitespace-nowrap">
              <span>View Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#C9A46C]" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
