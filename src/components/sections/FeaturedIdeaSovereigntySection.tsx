export function FeaturedIdeaSovereigntySection() {
  return (
    <section className="relative py-36 px-6 lg:px-12 bg-[#07090D] overflow-hidden border-t border-[#1F2633]">
      {/* Background Animated SVG Schematic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 300 Q 300 100, 600 300 T 1100 300"
            fill="none"
            stroke="#6FA8FF"
            strokeWidth="1.2"
            strokeDasharray="6 8"
          />
          <path
            d="M 100 350 Q 400 550, 700 350 T 1100 350"
            fill="none"
            stroke="#D88A52"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <circle cx="600" cy="300" r="140" fill="none" stroke="#6FA8FF" strokeWidth="0.8" strokeOpacity="0.4" />
          <circle cx="600" cy="300" r="8" fill="#6FA8FF" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A22] border border-[#1F2633] text-xs font-mono text-[#D88A52] uppercase tracking-wider mb-8">
          <span>STRATEGIC MANIFESTO</span>
        </div>

        {/* Big Editorial Statement */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-10 max-w-4xl mx-auto">
          FROM DESIGN LEADERSHIP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FA8FF] via-[#FAFAF8] to-[#69A88A]">
            TO MANUFACTURING SOVEREIGNTY.
          </span>
        </h2>

        {/* Narrative */}
        <p className="text-lg sm:text-xl text-[#A8B0BA] font-light max-w-2xl mx-auto leading-relaxed mb-12">
          A recurring theme in Sharat Kaul’s public semiconductor work is the historic opportunity to strengthen India’s capabilities beyond front-end chip design and toward domestic advanced packaging, ATMP manufacturing, and resilient supply chain sovereignty.
        </p>

        {/* Micro Annotation */}
        <div className="inline-flex items-center gap-6 text-xs font-mono text-[#66717D]">
          <span>INDIA SEMICONDUCTOR MISSION ALIGNMENT</span>
          <span>·</span>
          <span>ADVANCED PACKAGING ROADMAP</span>
        </div>
      </div>
    </section>
  );
}
