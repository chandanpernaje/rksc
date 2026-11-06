import { Link } from "react-router-dom";
import rksProfilePic from "../assets/images/Rksprofilepic.png";

export function AboutPage() {
  const careerPath = [
    { step: "01", company: "Texas Instruments", role: "Product engineering & DSP" },
    { step: "02", company: "QuickLogic", role: "FPGA architecture & marketing" },
    { step: "03", company: "Infinite", role: "Enterprise technology practices" },
    { step: "04", company: "Synopsys", role: "EDA & RTL-to-GDSII accounts" },
    { step: "05", company: "Solar-Apps", role: "Clean energy founder" },
    { step: "06", company: "Global Semiconductor EMS", role: "Advanced packaging & EMS" },
    { step: "07", company: "MosChip", role: "Turnkey ASIC & embedded systems" },
    { step: "08", company: "IESA", role: "VP Strategy & industry execution" },
    { step: "09", company: "RKC / RKS Advisory", role: "Semiconductor consulting — today" },
  ];

  return (
    <div className="pt-28 lg:pt-36 pb-24 px-6 lg:px-12 xl:px-16 bg-[#08090B] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Quote */}
        <div className="mb-14 lg:mb-16">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-light tracking-tight text-[#FAFAF8] leading-[1.2] max-w-5xl">
            &ldquo;Technology is only half the story. The other half is{" "}
            <span className="text-[#38BDF8] font-normal">
              people, markets and partnerships.
            </span>
            &rdquo;
          </h1>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="h-[1px] w-full bg-[#1E2638] mb-12 lg:mb-16" />

        {/* Three Columns Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column: Circular Portrait & Founder Caption */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border border-[#242933] shadow-xl mb-4 bg-[#111317] shrink-0">
              <img
                src={rksProfilePic}
                alt="Sharat Kaul, founder, RKS Consulting"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#969BA3] font-sans leading-relaxed max-w-[220px]">
              Sharat Kaul, founder, RKS Consulting.
            </p>
          </div>

          {/* Center Column: ABOUT statement, Metadata Grid & Link */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-between lg:pr-4">
            <div>
              <span className="text-xs font-mono font-semibold tracking-wider text-[#38BDF8] uppercase block mb-3">
                ABOUT
              </span>

              <p className="font-display text-xl sm:text-2xl lg:text-[25px] text-[#FAFAF8] leading-relaxed font-normal mb-10">
                30+ years on every side of semiconductors — chip design, EDA, manufacturing and business. Today we help leaders turn design strength into manufacturing capability.
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#66717D] mb-1.5">
                    INDUSTRY
                  </div>
                  <div className="text-sm font-semibold text-[#FAFAF8]">
                    Co-Chair, iMAPS India
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#66717D] mb-1.5">
                    ACADEMIA
                  </div>
                  <div className="text-sm font-semibold text-[#FAFAF8]">
                    GTU Semiconductor Board
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#66717D] mb-1.5">
                    POLICY
                  </div>
                  <div className="text-sm font-semibold text-[#FAFAF8]">
                    India Semiconductor Mission
                  </div>
                </div>
              </div>

              {/* Education row */}
              <div className="mb-8">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#66717D] mb-1.5">
                  EDUCATION
                </div>
                <div className="text-sm font-semibold text-[#FAFAF8]">
                  BS EE, UT Dallas · MBA, SMU Cox
                </div>
              </div>
            </div>

            {/* Read our full story link */}
            <div className="pt-2">
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#38BDF8] hover:text-[#7DD3FC] transition-colors group"
              >
                <span>Read our full story</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: CAREER PATH List */}
          <div className="lg:col-span-4 xl:col-span-3 border-t lg:border-t-0 lg:border-l border-[#1E2638] pt-8 lg:pt-0 lg:pl-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#969BA3] mb-4 pb-2 border-b border-[#1E2638]">
              CAREER PATH
            </div>

            <div className="divide-y divide-[#1E2638]">
              {careerPath.map((item) => (
                <div key={item.step} className="py-3 flex items-start gap-3.5">
                  <span className="text-xs font-mono text-[#66717D] pt-0.5 w-5 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[#FAFAF8] leading-tight">
                      {item.company}
                    </div>
                    <div className="text-xs text-[#969BA3] mt-0.5">
                      {item.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
