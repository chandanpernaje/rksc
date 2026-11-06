import { useState } from "react";
import { Info, CheckCircle2 } from "lucide-react";

interface Annotation {
  id: string;
  name: string;
  category: string;
  x: number; // percentage
  y: number; // percentage
  description: string;
  metric: string;
}

const ANNOTATIONS: Annotation[] = [
  {
    id: "chiplet",
    name: "CHIPLET DIES",
    category: "Compute & Memory",
    x: 32,
    y: 28,
    description: "Disaggregated compute silicon (3nm logic, 4nm GPU accelerator, and HBM3e base dies) co-packaged on high-density routing layers.",
    metric: "1.3 Tbps/mm Beachfront Bandwidth"
  },
  {
    id: "interposer",
    name: "SILICON INTERPOSER",
    category: "Interconnect Fabric",
    x: 50,
    y: 48,
    description: "Passive or active silicon layer with Through-Silicon Vias (TSVs) providing sub-micron line/space interconnects between adjacent dies.",
    metric: "< 2 ns D2D Latency"
  },
  {
    id: "substrate",
    name: "HIGH-DENSITY SUBSTRATE",
    category: "Base Carrier",
    x: 72,
    y: 68,
    description: "Ajinomoto Build-up Film (ABF) or emerging glass-core substrate matching silicon CTE to mitigate thermal-mechanical warpage.",
    metric: "10–14 Build-up Layer Count"
  },
  {
    id: "interconnect",
    name: "MICRO-BUMPS & HYBRID BONDING",
    category: "Physical Joint",
    x: 22,
    y: 40,
    description: "Fine-pitch micro-bumps (25–35µm pitch) or direct copper-to-copper dielectric hybrid bonding (<10µm pitch) eliminating solder resistance.",
    metric: "0.05 pJ/bit Energy per Bit"
  },
  {
    id: "thermal",
    name: "THERMAL DISSIPATION PATH",
    category: "Cooling Architecture",
    x: 68,
    y: 18,
    description: "Direct-to-die vapor chambers and high-conductivity Liquid Metal / TIM-1 conduits evacuating intense localized heat fluxes.",
    metric: "1000W+ Thermal Envelope"
  },
  {
    id: "power",
    name: "BACKSIDE POWER DELIVERY (BSPDN)",
    category: "Power Delivery Network",
    x: 82,
    y: 46,
    description: "Decoupling power delivery vias from signal routing layers, drastically reducing IR drop and eliminating interconnect resistance bottleneck.",
    metric: "94% Power Conversion Efficiency"
  }
];

export function PackagingBlueprintVisual() {
  const [selectedId, setSelectedId] = useState<string>("chiplet");
  const activeAnnotation = ANNOTATIONS.find((a) => a.id === selectedId) || ANNOTATIONS[0];

  return (
    <div className="w-full bg-[#0D1117] border border-[#1F2633] rounded-2xl overflow-hidden shadow-2xl">
      {/* Blueprint Visual Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#1F2633] px-6 py-4 bg-[#07090D] gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#6FA8FF] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#FAFAF8]">
            Interactive Architectural Cross-Section Blueprint
          </span>
        </div>
        <div className="text-xs font-mono text-[#66717D]">
          REV: 4.2 · TSV-PITCH: 35µm · SCALE: 1:12000
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Interactive SVG Blueprint Canvas */}
        <div className="lg:col-span-8 p-6 sm:p-10 relative bg-[#07090D] flex items-center justify-center min-h-[480px]">
          <div className="absolute inset-0 technical-grid-dense opacity-40 pointer-events-none" />

          {/* Blueprint SVG Cross-Section */}
          <div className="relative w-full max-w-[620px] aspect-[16/10]">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Heat Spreader Top */}
              <rect x="60" y="40" width="680" height="35" rx="4" fill="#151A22" stroke="#66717D" strokeWidth="1.2" />
              <text x="400" y="63" textAnchor="middle" fill="#A8B0BA" fontSize="12" fontFamily="JetBrains Mono" letterSpacing="1">
                INTEGRATED COPPER HEAT SPREADER (IHS)
              </text>

              {/* TIM Layer */}
              <rect x="120" y="78" width="560" height="12" fill="#D88A52" opacity="0.4" />
              <text x="400" y="87" textAnchor="middle" fill="#D88A52" fontSize="9" fontFamily="JetBrains Mono">
                TIM-1 THERMAL INTERFACE MATERIAL
              </text>

              {/* Chiplet 1: Logic Core */}
              <rect x="140" y="96" width="160" height="90" rx="3" fill="#0D1117" stroke="#6FA8FF" strokeWidth="2" />
              <text x="220" y="140" textAnchor="middle" fill="#6FA8FF" fontSize="13" fontFamily="JetBrains Mono" fontWeight="bold">
                COMPUTE DIE
              </text>
              <text x="220" y="160" textAnchor="middle" fill="#A8B0BA" fontSize="10" fontFamily="JetBrains Mono">
                3nm GAA Logic
              </text>

              {/* Chiplet 2: Accelerator */}
              <rect x="320" y="96" width="160" height="90" rx="3" fill="#0D1117" stroke="#6FA8FF" strokeWidth="2" />
              <text x="400" y="140" textAnchor="middle" fill="#6FA8FF" fontSize="13" fontFamily="JetBrains Mono" fontWeight="bold">
                AI ACCELERATOR
              </text>
              <text x="400" y="160" textAnchor="middle" fill="#A8B0BA" fontSize="10" fontFamily="JetBrains Mono">
                4nm Tensor Die
              </text>

              {/* Chiplet 3: HBM3e Stack */}
              <rect x="500" y="96" width="160" height="90" rx="3" fill="#0D1117" stroke="#69A88A" strokeWidth="2" />
              <text x="580" y="135" textAnchor="middle" fill="#69A88A" fontSize="13" fontFamily="JetBrains Mono" fontWeight="bold">
                HBM3e STACK
              </text>
              <text x="580" y="155" textAnchor="middle" fill="#A8B0BA" fontSize="10" fontFamily="JetBrains Mono">
                8-Hi DRAM Layers
              </text>

              {/* Micro-bump Array */}
              <g fill="#D88A52">
                {[150, 175, 200, 225, 250, 275, 330, 355, 380, 405, 430, 455, 510, 535, 560, 585, 610, 635].map((x) => (
                  <circle key={x} cx={x} cy="194" r="3.5" />
                ))}
              </g>

              {/* Silicon Interposer Layer with Through-Silicon Vias */}
              <rect x="100" y="204" width="600" height="55" rx="3" fill="#151A22" stroke="#6FA8FF" strokeWidth="1.8" />
              <text x="400" y="235" textAnchor="middle" fill="#FAFAF8" fontSize="13" fontFamily="JetBrains Mono" fontWeight="bold">
                2.5D SILICON INTERPOSER (TSVs &amp; HIGH DENSITY ROUTING)
              </text>

              {/* TSV Vertical lines */}
              <g stroke="#6FA8FF" strokeWidth="1" strokeDasharray="3 2" opacity="0.6">
                {[160, 220, 280, 340, 400, 460, 520, 580, 640].map((x) => (
                  <line key={x} x1={x} y1="205" x2={x} y2="258" />
                ))}
              </g>

              {/* Solder Bumps (C4) */}
              <g fill="#A8B0BA">
                {[130, 190, 250, 310, 370, 430, 490, 550, 610, 670].map((x) => (
                  <circle key={x} cx={x} cy="272" r="7" />
                ))}
              </g>

              {/* Package Substrate */}
              <rect x="50" y="286" width="700" height="85" rx="4" fill="#0D1117" stroke="#1F2633" strokeWidth="1.5" />
              <text x="400" y="325" textAnchor="middle" fill="#A8B0BA" fontSize="12" fontFamily="JetBrains Mono">
                MULTI-LAYER ORGANIC ABF / GLASS CORE SUBSTRATE
              </text>
              <text x="400" y="348" textAnchor="middle" fill="#66717D" fontSize="10" fontFamily="JetBrains Mono">
                14 Build-up Micro-via Routing Layers
              </text>

              {/* BGA Solder Balls to Motherboard */}
              <g fill="#66717D">
                {[80, 130, 180, 230, 280, 330, 380, 430, 480, 530, 580, 630, 680, 720].map((x) => (
                  <circle key={x} cx={x} cy="385" r="9" />
                ))}
              </g>
              <line x1="40" y1="398" x2="760" y2="398" stroke="#1F2633" strokeWidth="2" />
              <text x="400" y="440" textAnchor="middle" fill="#6FA8FF" fontSize="11" fontFamily="JetBrains Mono">
                SYSTEM MOTHERBOARD INTERFACE
              </text>
            </svg>

            {/* Clickable Interactive Hotspot Markers */}
            {ANNOTATIONS.map((anno) => {
              const isSelected = selectedId === anno.id;
              return (
                <button
                  key={anno.id}
                  onClick={() => setSelectedId(anno.id)}
                  style={{ left: `${anno.x}%`, top: `${anno.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6FA8FF] ${
                    isSelected
                      ? "bg-[#6FA8FF] text-[#07090D] font-bold shadow-[0_0_16px_rgba(111,168,255,0.7)] scale-110"
                      : "bg-[#07090D]/90 text-[#A8B0BA] border border-[#1F2633] hover:border-[#6FA8FF] hover:text-[#FAFAF8]"
                  }`}
                  aria-label={`View details for ${anno.name}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? "bg-[#07090D]" : "bg-[#6FA8FF]"
                    }`}
                  />
                  <span>{anno.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail Card for Selected Hotspot */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0D1117] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1F2633]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono text-[#D88A52] uppercase tracking-wider">
                {activeAnnotation.category}
              </span>
              <span className="text-[#66717D]">·</span>
              <span className="text-[11px] font-mono text-[#6FA8FF] uppercase tracking-wider">
                Architectural Node
              </span>
            </div>

            <h4 className="font-display text-2xl font-bold text-[#FAFAF8] tracking-tight mb-3">
              {activeAnnotation.name}
            </h4>

            <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
              {activeAnnotation.description}
            </p>

            {/* Key Metric Indicator */}
            <div className="p-4 bg-[#151A22] border border-[#1F2633] rounded-xl mb-6">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#66717D] mb-1">
                Critical Performance Metric
              </div>
              <div className="text-sm font-mono font-semibold text-[#6FA8FF]">
                {activeAnnotation.metric}
              </div>
            </div>
          </div>

          {/* Quick Hotspot Selector List */}
          <div className="border-t border-[#1F2633] pt-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#66717D] mb-3">
              Select Architectural Layer
            </div>
            <div className="flex flex-col gap-1.5">
              {ANNOTATIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`text-left px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center justify-between ${
                    selectedId === item.id
                      ? "bg-[#151A22] text-[#FAFAF8] font-medium border border-[#6FA8FF]/30"
                      : "text-[#66717D] hover:text-[#A8B0BA]"
                  }`}
                >
                  <span>{item.name}</span>
                  {selectedId === item.id && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6FA8FF]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
