import { useState } from "react";
import { CheckCircle2, ShieldCheck, Layers, Cpu, Wrench, GraduationCap, Zap, Activity } from "lucide-react";

interface EcosystemPillar {
  id: string;
  name: string;
  icon: typeof Cpu;
  status: "World-Class Lead" | "Accelerating" | "Strategic Focus" | "Foundation Building";
  summary: string;
  indiaContext: string;
  connections: string[];
}

const PILLARS: EcosystemPillar[] = [
  {
    id: "design",
    name: "VLSI & SoC DESIGN",
    icon: Cpu,
    status: "World-Class Lead",
    summary: "RTL, physical design, analog/mixed-signal, and synthesis.",
    indiaContext: "India already hosts ~20% of the world's semiconductor design engineers across Bengaluru, Hyderabad, Noida, and Pune.",
    connections: ["packaging", "talent", "systems"]
  },
  {
    id: "packaging",
    name: "ADVANCED PACKAGING",
    icon: Layers,
    status: "Strategic Focus",
    summary: "2.5D/3D interposers, multi-die chiplets, and high-density substrates.",
    indiaContext: "The fastest sovereign pathway to domestic semiconductor resilience, bridging domestic design with physical silicon delivery.",
    connections: ["design", "osat", "systems", "equipment"]
  },
  {
    id: "osat",
    name: "OSAT & ATMP",
    icon: Activity,
    status: "Accelerating",
    summary: "Outsourced Assembly, Testing, Marking, and Packaging facilities.",
    indiaContext: "Multiple multi-billion dollar ATMP and OSAT facilities currently breaking ground in Gujarat and Assam under the India Semiconductor Mission.",
    connections: ["packaging", "test", "materials", "equipment"]
  },
  {
    id: "test",
    name: "SYSTEM-LEVEL TEST",
    icon: ShieldCheck,
    status: "Strategic Focus",
    summary: "Wafer sort, burn-in, known-good-die (KGD) validation, and SLT.",
    indiaContext: "Critical for defense, aerospace, and high-reliability industrial automotive applications requiring zero-defect certification.",
    connections: ["osat", "systems", "talent"]
  },
  {
    id: "materials",
    name: "SUBSTRATES & MATERIALS",
    icon: Zap,
    status: "Foundation Building",
    summary: "ABF films, leadframes, silicon wafers, specialty gases, and copper.",
    indiaContext: "Localizing precursor supply chains to reduce vulnerability to cross-border logistical disruptions.",
    connections: ["osat", "packaging"]
  },
  {
    id: "equipment",
    name: "FAB & OSAT EQUIPMENT",
    icon: Wrench,
    status: "Foundation Building",
    summary: "Wire-bonders, pick-and-place, dicing saws, and inspection tools.",
    indiaContext: "Partnering with global precision tooling suppliers to cultivate regional servicing, maintenance, and precision machining.",
    connections: ["osat", "packaging"]
  },
  {
    id: "systems",
    name: "OEM & SYSTEMS INTEGRATION",
    icon: Activity,
    status: "Accelerating",
    summary: "Telecom gear, defense electronics, automotive ECUs, and smart energy.",
    indiaContext: "Massive domestic demand pull driven by 5G telecom rollout, automotive electrification, and sovereign compute projects.",
    connections: ["design", "packaging", "test"]
  },
  {
    id: "talent",
    name: "WORKFORCE & CURRICULA",
    icon: GraduationCap,
    status: "Accelerating",
    summary: "Academic training pipelines, cleanroom apprenticeships, and EDA access.",
    indiaContext: "Collaborative initiatives like GTU Board of Semiconductor Technologies training 85,000+ industry-ready engineers.",
    connections: ["design", "test", "packaging"]
  }
];

export function EcosystemMapVisual() {
  const [activePillarId, setActivePillarId] = useState<string>("packaging");
  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[1];

  return (
    <div className="w-full bg-[#0D1117] border border-[#1F2633] rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#1F2633] px-6 py-4 bg-[#07090D] gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#69A88A]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#FAFAF8]">
            National Semiconductor Capability Topology
          </span>
        </div>
        <div className="text-xs font-mono text-[#D88A52]">
          ECOSYSTEM &gt; SINGLE FACTORY
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Nodes Grid Canvas */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-[#07090D] flex flex-col justify-center">
          <div className="text-xs font-mono text-[#66717D] mb-4 uppercase tracking-wider">
            Interconnected Capability Pillars · Click to Inspect Linkages
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PILLARS.map((pillar) => {
              const isSelected = activePillarId === pillar.id;
              const isConnected = activePillar.connections.includes(pillar.id);
              const Icon = pillar.icon;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`p-4 rounded-xl border text-left transition-all relative group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] ${
                    isSelected
                      ? "bg-[#151A22] border-[#6FA8FF] shadow-[0_0_20px_rgba(111,168,255,0.15)]"
                      : isConnected
                      ? "bg-[#151A22]/50 border-[#D88A52]/50"
                      : "bg-[#0D1117] border-[#1F2633] hover:border-[#A8B0BA]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? "bg-[#6FA8FF]/20 text-[#6FA8FF]"
                          : isConnected
                          ? "bg-[#D88A52]/20 text-[#D88A52]"
                          : "bg-[#151A22] text-[#A8B0BA]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6FA8FF]" />
                    )}
                    {isConnected && !isSelected && (
                      <span className="text-[10px] font-mono text-[#D88A52]">LINKED</span>
                    )}
                  </div>

                  <div className="text-xs font-mono font-semibold text-[#FAFAF8] mb-1">
                    {pillar.name}
                  </div>

                  <div className="text-[10px] font-mono text-[#66717D]">
                    {pillar.status}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Synthesis Note */}
          <div className="mt-6 p-4 rounded-xl bg-[#151A22]/40 border border-[#1F2633] flex items-center justify-between">
            <span className="text-xs font-mono text-[#A8B0BA]">
              Active Connections to Selected Node:
            </span>
            <div className="flex items-center gap-2">
              {activePillar.connections.map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0D1117] border border-[#1F2633] text-[#6FA8FF] uppercase"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0D1117] border-t lg:border-t-0 lg:border-l border-[#1F2633] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#69A88A]">
                {activePillar.status}
              </span>
              <span className="text-[#66717D]">·</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A8B0BA]">
                Pillar Detail
              </span>
            </div>

            <h4 className="font-display text-2xl font-bold text-[#FAFAF8] tracking-tight mb-3">
              {activePillar.name}
            </h4>

            <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
              {activePillar.summary}
            </p>

            <div className="p-4 bg-[#151A22] border border-[#1F2633] rounded-xl mb-6">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#D88A52] mb-1.5 font-semibold">
                Strategic Indian Landscape
              </div>
              <p className="text-xs text-[#FAFAF8] leading-relaxed">
                {activePillar.indiaContext}
              </p>
            </div>
          </div>

          <div className="border-t border-[#1F2633] pt-4">
            <div className="text-[10px] font-mono text-[#66717D]">
              PERSPECTIVE SYNTHESIZED FROM PUBLIC SEMICONDUCTOR POLICY DISCOURSE &amp; iMAPS INITIATIVES.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
