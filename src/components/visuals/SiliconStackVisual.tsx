import { useState } from "react";
import { Cpu, Layers, Disc, Server, Box } from "lucide-react";

export interface StageInfo {
  id: string;
  step: string;
  title: string;
  kicker: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const STAGES: StageInfo[] = [
  {
    id: "silicon",
    step: "01",
    title: "Silicon Wafer",
    kicker: "The Atomic Baseline",
    description: "Monocrystalline silicon ingots sliced into 300mm ultra-planar discs with atomic-scale flatness, providing the crystalline lattice upon which sub-3nm transistors are photolithographically etched.",
    specs: [
      { label: "Diameter", value: "300 mm" },
      { label: "Purity", value: "99.9999999%" },
      { label: "Thickness", value: "775 µm" },
      { label: "Defect Density", value: "< 0.05 / cm²" },
    ],
  },
  {
    id: "die",
    step: "02",
    title: "Monolithic IC Die",
    kicker: "The Reticle Limit",
    description: "Traditional SoCs integrate CPU, cache, memory controllers, and I/O into a single massive silicon die. However, as die size approaches the 858mm² lithography reticle limit, silicon yields decline exponentially.",
    specs: [
      { label: "Gate Length", value: "Sub-3nm" },
      { label: "Reticle Limit", value: "858 mm²" },
      { label: "Transistor Count", value: "50B+ Gates" },
      { label: "Yield Penalty", value: "Asymptotic >600mm²" },
    ],
  },
  {
    id: "chiplet",
    step: "03",
    title: "Modular Chiplets",
    kicker: "Deconstructing Monoliths",
    description: "Partitioning complex silicon into modular function-specific dies: compute cores on leading-edge 3nm, I/O and analog interfaces on cost-effective 28nm, connected via standardized high-density die-to-die fabrics.",
    specs: [
      { label: "Standard", value: "UCIe 1.1 / BoW" },
      { label: "Latency", value: "< 2 ns D2D" },
      { label: "Bandwidth Density", value: "1.3 Tbps/mm" },
      { label: "Cost Savings", value: "35% - 45%" },
    ],
  },
  {
    id: "package",
    step: "04",
    title: "Advanced Package & Interposer",
    kicker: "The Interconnect Architecture",
    description: "Heterogeneous integration using 2.5D silicon interposers, through-silicon vias (TSVs), and 25-micron micro-bumps or hybrid copper bonding to bridge compute dies with high-bandwidth memory (HBM3e).",
    specs: [
      { label: "Bump Pitch", value: "25–45 µm" },
      { label: "Interposer Type", value: "Si / Glass Core" },
      { label: "Thermal Budget", value: "Up to 1000 W" },
      { label: "Warpage Margin", value: "< 120 µm" },
    ],
  },
  {
    id: "system",
    step: "05",
    title: "Compute System & Rack Scale",
    kicker: "The Macro Infrastructure",
    description: "The packaged assembly integrates onto multi-layer motherboards, optical transceivers, liquid cold plates, and power distribution networks powering hyperscale AI clusters and sovereign data infrastructure.",
    specs: [
      { label: "Power Rail", value: "48V to 0.8V" },
      { label: "Cooling Medium", value: "Direct Liquid Cooling" },
      { label: "Fabric Interconnect", value: "800G OSFP" },
      { label: "Scale Target", value: "ExaFLOP Clusters" },
    ],
  },
];

interface SiliconStackVisualProps {
  activeStageIndex?: number;
  onSelectStage?: (index: number) => void;
}

export function SiliconStackVisual({
  activeStageIndex: controlledIndex,
  onSelectStage,
}: SiliconStackVisualProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const handleSelect = (idx: number) => {
    if (onSelectStage) {
      onSelectStage(idx);
    } else {
      setInternalIndex(idx);
    }
  };

  const current = STAGES[activeIndex];

  return (
    <div className="w-full bg-[#0D1117] border border-[#1F2633] rounded-xl overflow-hidden shadow-2xl">
      {/* Control Tabs */}
      <div className="flex border-b border-[#1F2633] overflow-x-auto p-1.5 bg-[#07090D] gap-1">
        {STAGES.map((stage, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={stage.id}
              onClick={() => handleSelect(idx)}
              className={`flex-1 min-w-[120px] py-2 px-3 text-left rounded-lg transition-all text-xs font-mono flex items-center justify-between gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] ${
                isActive
                  ? "bg-[#151A22] text-[#FAFAF8] border border-[#6FA8FF]/40 shadow-sm"
                  : "text-[#66717D] hover:text-[#A8B0BA] hover:bg-[#151A22]/50 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={isActive ? "text-[#6FA8FF]" : "text-[#66717D]"}>
                  {idx === 0 && <Disc className="w-3.5 h-3.5" />}
                  {idx === 1 && <Box className="w-3.5 h-3.5" />}
                  {idx === 2 && <Cpu className="w-3.5 h-3.5" />}
                  {idx === 3 && <Layers className="w-3.5 h-3.5" />}
                  {idx === 4 && <Server className="w-3.5 h-3.5" />}
                </span>
                <span className="font-medium">{stage.title}</span>
              </div>
              <span className="text-[10px] text-[#66717D]">{stage.step}</span>
            </button>
          );
        })}
      </div>

      {/* Main Schematic & Spec Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Interactive SVG Schematic Canvas */}
        <div className="lg:col-span-7 bg-[#07090D] p-6 sm:p-8 flex items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1F2633]">
          <div className="absolute inset-0 technical-grid opacity-50" />

          {/* Dynamic SVG Schematic per Stage */}
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {activeIndex === 0 && (
              /* Stage 01: Silicon Wafer */
              <svg viewBox="0 0 400 400" className="w-full h-full transform transition-all duration-500">
                <circle cx="200" cy="200" r="180" fill="#0D1117" stroke="#6FA8FF" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="#1F2633" strokeDasharray="4 6" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#6FA8FF" strokeOpacity="0.3" />
                {/* Die array */}
                {[-3, -2, -1, 0, 1, 2, 3].map((row) =>
                  [-3, -2, -1, 0, 1, 2, 3].map((col) => {
                    const dist = Math.sqrt(row * row + col * col);
                    if (dist > 3.2) return null;
                    return (
                      <rect
                        key={`${row}-${col}`}
                        x={185 + col * 36}
                        y={185 + row * 36}
                        width="30"
                        height="30"
                        fill="#151A22"
                        stroke="#1F2633"
                        strokeWidth="0.8"
                        rx="1"
                      />
                    );
                  })
                )}
                <path d="M 194 20 L 200 28 L 206 20" fill="none" stroke="#6FA8FF" strokeWidth="2" />
                <text x="200" y="385" textAnchor="middle" fill="#6FA8FF" fontSize="11" fontFamily="JetBrains Mono">
                  300mm RAW SILICON SUBSTRATE
                </text>
              </svg>
            )}

            {activeIndex === 1 && (
              /* Stage 02: Monolithic Die */
              <svg viewBox="0 0 400 400" className="w-full h-full transform transition-all duration-500">
                <rect x="50" y="50" width="300" height="300" rx="6" fill="#0D1117" stroke="#D88A52" strokeWidth="1.5" />
                {/* Monolithic partitions */}
                <rect x="70" y="70" width="120" height="120" fill="#151A22" stroke="#6FA8FF" strokeWidth="1" rx="4" />
                <text x="130" y="135" fill="#FAFAF8" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
                  CPU CORES
                </text>
                <rect x="210" y="70" width="120" height="120" fill="#151A22" stroke="#6FA8FF" strokeWidth="1" rx="4" />
                <text x="270" y="135" fill="#FAFAF8" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
                  GPU ACCEL
                </text>
                <rect x="70" y="210" width="120" height="120" fill="#151A22" stroke="#66717D" strokeWidth="1" rx="4" />
                <text x="130" y="275" fill="#FAFAF8" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
                  SRAM CACHE
                </text>
                <rect x="210" y="210" width="120" height="120" fill="#151A22" stroke="#66717D" strokeWidth="1" rx="4" />
                <text x="270" y="275" fill="#FAFAF8" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
                  I/O & PHY
                </text>
                <text x="200" y="380" textAnchor="middle" fill="#D88A52" fontSize="11" fontFamily="JetBrains Mono">
                  MONOLITHIC RETICLE LIMIT [800mm²]
                </text>
              </svg>
            )}

            {activeIndex === 2 && (
              /* Stage 03: Modular Chiplets */
              <svg viewBox="0 0 400 400" className="w-full h-full transform transition-all duration-500">
                {/* Modular separated chiplets with UCIe bus interconnect */}
                <rect x="60" y="60" width="110" height="110" rx="4" fill="#151A22" stroke="#6FA8FF" strokeWidth="1.5" />
                <text x="115" y="115" fill="#6FA8FF" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                  3nm LOGIC
                </text>
                <text x="115" y="132" fill="#A8B0BA" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                  Compute Core
                </text>

                <rect x="230" y="60" width="110" height="110" rx="4" fill="#151A22" stroke="#6FA8FF" strokeWidth="1.5" />
                <text x="285" y="115" fill="#6FA8FF" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                  4nm AI ENGINE
                </text>
                <text x="285" y="132" fill="#A8B0BA" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                  Tensor Matrix
                </text>

                <rect x="60" y="230" width="110" height="110" rx="4" fill="#151A22" stroke="#D88A52" strokeWidth="1.5" />
                <text x="115" y="285" fill="#D88A52" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                  28nm I/O DIE
                </text>
                <text x="115" y="302" fill="#A8B0BA" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                  PCIe Gen5 / PHY
                </text>

                <rect x="230" y="230" width="110" height="110" rx="4" fill="#151A22" stroke="#69A88A" strokeWidth="1.5" />
                <text x="285" y="285" fill="#69A88A" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                  HBM3e BASE
                </text>
                <text x="285" y="302" fill="#A8B0BA" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                  3D Memory Stack
                </text>

                {/* UCIe interconnect links */}
                <path d="M 170 115 L 230 115" stroke="#6FA8FF" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 115 170 L 115 230" stroke="#D88A52" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 285 170 L 285 230" stroke="#69A88A" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 170 285 L 230 285" stroke="#6FA8FF" strokeWidth="2" strokeDasharray="3 3" />

                <text x="200" y="205" textAnchor="middle" fill="#FAFAF8" fontSize="10" fontFamily="JetBrains Mono">
                  UCIe FABRIC (2ns)
                </text>
                <text x="200" y="380" textAnchor="middle" fill="#6FA8FF" fontSize="11" fontFamily="JetBrains Mono">
                  DISAGGREGATED CHIPLET TOPOLOGY
                </text>
              </svg>
            )}

            {activeIndex === 3 && (
              /* Stage 04: Advanced Packaging Cross-Section */
              <svg viewBox="0 0 400 400" className="w-full h-full transform transition-all duration-500">
                {/* Heat Spreader Top */}
                <rect x="30" y="70" width="340" height="30" rx="3" fill="#1F2633" stroke="#66717D" strokeWidth="1" />
                <text x="200" y="90" textAnchor="middle" fill="#A8B0BA" fontSize="10" fontFamily="JetBrains Mono">
                  INTEGRATED HEAT SPREADER (IHS)
                </text>

                {/* Thermal Interface Material */}
                <rect x="60" y="105" width="280" height="10" fill="#D88A52" opacity="0.6" />

                {/* Compute Dies */}
                <rect x="70" y="125" width="100" height="60" rx="2" fill="#151A22" stroke="#6FA8FF" strokeWidth="1.5" />
                <text x="120" y="160" textAnchor="middle" fill="#6FA8FF" fontSize="10" fontFamily="JetBrains Mono">
                  LOGIC DIE
                </text>
                <rect x="230" y="125" width="100" height="60" rx="2" fill="#151A22" stroke="#69A88A" strokeWidth="1.5" />
                <text x="280" y="160" textAnchor="middle" fill="#69A88A" fontSize="10" fontFamily="JetBrains Mono">
                  HBM3e STACK
                </text>

                {/* Micro-bumps */}
                <g fill="#D88A52">
                  {[80, 100, 120, 140, 160, 240, 260, 280, 300, 320].map((x) => (
                    <circle key={x} cx={x} cy="192" r="3" />
                  ))}
                </g>

                {/* Silicon / Glass Interposer */}
                <rect x="50" y="200" width="300" height="40" rx="2" fill="#0D1117" stroke="#6FA8FF" strokeWidth="1.5" />
                <text x="200" y="225" textAnchor="middle" fill="#6FA8FF" fontSize="11" fontFamily="JetBrains Mono">
                  2.5D INTERPOSER &amp; TSVs
                </text>

                {/* Solder Bumps */}
                <g fill="#A8B0BA">
                  {[70, 110, 150, 190, 230, 270, 310, 330].map((x) => (
                    <circle key={x} cx={x} cy="250" r="5" />
                  ))}
                </g>

                {/* High Density Substrate */}
                <rect x="20" y="260" width="360" height="50" rx="3" fill="#151A22" stroke="#1F2633" strokeWidth="1" />
                <text x="200" y="290" textAnchor="middle" fill="#A8B0BA" fontSize="10" fontFamily="JetBrains Mono">
                  MULTI-LAYER ABF / GLASS SUBSTRATE
                </text>

                {/* BGA Balls */}
                <g fill="#66717D">
                  {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
                    <circle key={x} cx={x} cy="320" r="6" />
                  ))}
                </g>
                <text x="200" y="380" textAnchor="middle" fill="#6FA8FF" fontSize="11" fontFamily="JetBrains Mono">
                  HETEROGENEOUS 2.5D OSAT CROSS-SECTION
                </text>
              </svg>
            )}

            {activeIndex === 4 && (
              /* Stage 05: System & Rack Level */
              <svg viewBox="0 0 400 400" className="w-full h-full transform transition-all duration-500">
                {/* Rack Outline */}
                <rect x="60" y="30" width="280" height="320" rx="4" fill="#0D1117" stroke="#1F2633" strokeWidth="1.5" />

                {/* Blades / Servers */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <g key={i}>
                    <rect
                      x="75"
                      y={50 + i * 48}
                      width="250"
                      height="38"
                      rx="3"
                      fill="#151A22"
                      stroke={i === 2 ? "#6FA8FF" : "#1F2633"}
                      strokeWidth={i === 2 ? "1.5" : "1"}
                    />
                    <circle cx="95" cy={69 + i * 48} r="3" fill={i === 2 ? "#6FA8FF" : "#69A88A"} />
                    <rect x="115" y={64 + i * 48} width="40" height="10" fill="#0D1117" rx="1" />
                    <rect x="165" y={64 + i * 48} width="80" height="10" fill="#0D1117" rx="1" />
                    <text x="290" y={72 + i * 48} fill="#66717D" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
                      {i === 2 ? "8× CHIPLETS" : "NODE"}
                    </text>
                  </g>
                ))}

                <text x="200" y="380" textAnchor="middle" fill="#6FA8FF" fontSize="11" fontFamily="JetBrains Mono">
                  DATACENTER RACK-SCALE INFRASTRUCTURE
                </text>
              </svg>
            )}
          </div>
        </div>

        {/* Right Editorial Story & Metric Specs */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#0D1117]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[#6FA8FF] tracking-wider uppercase">
                PHASE {current.step} OF 05
              </span>
              <span className="text-[#66717D]" aria-hidden="true">·</span>
              <span className="text-xs font-mono text-[#D88A52] tracking-wider uppercase">
                {current.kicker}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAF8] tracking-tight mb-4">
              {current.title}
            </h3>

            <p className="text-sm leading-relaxed text-[#A8B0BA] mb-6">
              {current.description}
            </p>
          </div>

          {/* Calibrated Specs */}
          <div className="border-t border-[#1F2633] pt-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#66717D] mb-3">
              Calibrated Physical Parameters
            </div>
            <div className="grid grid-cols-2 gap-3">
              {current.specs.map((spec) => (
                <div key={spec.label} className="p-3 bg-[#151A22]/70 border border-[#1F2633] rounded-lg">
                  <div className="text-[10px] font-mono text-[#66717D] uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-sm font-mono font-semibold text-[#FAFAF8] mt-1 tabular-nums">
                    {spec.value}
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
