import React from "react";
import { Link } from "react-router-dom";
import heroWaferImage from "../../assets/images/regenerated_image_1791461675818.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-20 lg:pt-22 xl:pt-24 pb-4 lg:pb-6 px-6 lg:px-12 bg-[#08090B] overflow-hidden min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between min-h-0">
        {/* Top 3-Column Micro-Ticker Strip (No second line underneath) */}
        <div className="-mt-1.5 sm:-mt-2 lg:-mt-3 xl:-mt-3.5 pt-0 pb-2 mb-2 lg:mb-4 shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#969BA3]">
            <div className="text-left font-semibold text-[#FAFAF8]">
              SHARAT KAUL
            </div>
            <div className="text-left sm:text-center text-[#828B99]">
              ADVANCED PACKAGING · OSAT · ECOSYSTEMS
            </div>
            <div className="text-left sm:text-right font-medium text-[#828B99]">
              US / INDIA
            </div>
          </div>
        </div>

        {/* Hero Split Header & CTA Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-end mb-3 lg:mb-5 shrink-0">
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[54px] xl:text-[68px] 2xl:text-[76px] font-medium tracking-tight text-[#FAFAF8] leading-[1.0] mb-0">
              From silicon <br />
              <span className="text-[#38BDF8] font-medium">to scale.</span>
            </h1>
          </div>

          {/* Right Column: Proposition & CTA Button (Reduced width & placed towards right side) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-start lg:ml-auto w-full max-w-[320px] xl:max-w-[340px]">
            <p className="text-xs sm:text-sm lg:text-[14px] xl:text-[15px] text-[#969BA3] leading-relaxed mb-3 lg:mb-3.5 font-normal">
              Advanced packaging and OSAT strategy, built on 30+ years of making chips, factories and partnerships work.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#08090B] font-sans font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#38BDF8]/20 group"
            >
              <span>Book a conversation</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Fig. 01: Panoramic Wafer Probe Section (Dynamically fills remaining screen height) */}
        <div className="relative flex-1 min-h-[160px] sm:min-h-[200px] lg:min-h-0 flex items-stretch pb-1">
          <div className="w-full h-44 sm:h-56 lg:h-full rounded-2xl overflow-hidden border border-[#1E2638] bg-[#111317] shadow-2xl">
            <img
              src={heroWaferImage}
              alt="Wafer probe: where design meets manufacturing"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
