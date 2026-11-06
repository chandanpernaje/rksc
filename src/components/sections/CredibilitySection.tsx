import React from "react";

export function CredibilitySection() {
  const metrics = [
    {
      figure: "30+",
      sub: "Years",
      title: "Years of Experience",
      detail: "From foundational Texas Instruments DSPs to high-reliability OSAT manufacturing and cutting-edge 2.5D/3D heterogeneous packaging."
    },
    {
      figure: "GLOBAL",
      sub: "Corridor",
      title: "Industry Perspective",
      detail: "Leading cross-border technology practices, client delivery, and commercial alliances across Silicon Valley, Texas, and India."
    },
    {
      figure: "SEMICONDUCTOR",
      sub: "Depth",
      title: "Technology & Manufacturing",
      detail: "Deep physical and commercial grounding across EDA synthesis, ultra-low power silicon, and high-yield cleanroom packaging."
    },
    {
      figure: "STRATEGY",
      sub: "Advisory",
      title: "Business & Ecosystem",
      detail: "Advising enterprise leadership, institutional boards, and public policy makers on sovereign microelectronics capability."
    },
    {
      figure: "LEADERSHIP",
      sub: "Stewardship",
      title: "Industry Engagement",
      detail: "Co-Chair iMAPS India Chapter, GTU Board of Semiconductor Technologies, and active contributor to the India Semiconductor Mission."
    }
  ];

  return (
    <section id="credibility" className="relative py-24 px-6 lg:px-12 bg-[#08090B] border-t border-[#242933]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Balanced Desktop Alignment */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
                PROVEN TRACK RECORD
              </span>
              <div className="h-[1px] w-12 bg-[#242933]" />
            </div>

            {/* Section Heading */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08]">
              EXPERIENCE THAT CONNECTS <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#C9A46C]">TECHNOLOGY AND BUSINESS.</span>
            </h2>
          </div>

          {/* Right Supporting Summary on Desktop */}
          <div className="max-w-md text-sm text-[#969BA3] leading-relaxed pb-1">
            Over three decades of verified leadership delivering high-impact semiconductor roadmaps, advanced packaging scale-up, and sovereign ecosystem alliances.
          </div>
        </div>

        {/* 5 Metrics Grid - Perfectly Aligned and Balanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {metrics.map((item, idx) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/60 hover:bg-[#1B1E24] transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col">
                {/* Top Row: Sub-label & Index */}
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                  <span className="text-[#C9A46C] uppercase tracking-wider font-semibold">
                    {item.sub}
                  </span>
                  <span className="text-[#66717D]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Figure display with responsive scaling */}
                <div className="font-display text-2xl lg:text-xl xl:text-2xl font-bold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors mb-3 leading-tight break-words">
                  {item.figure}
                </div>

                {/* Metric Title */}
                <h3 className="font-display text-sm font-semibold text-[#FAFAF8] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Metric Detail */}
                <p className="text-xs text-[#969BA3] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#242933] flex items-center justify-between text-[9px] font-mono text-[#66717D]">
                <span>INDEX 0{idx + 1}</span>
                <span className="text-[#C9A46C]/70">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
