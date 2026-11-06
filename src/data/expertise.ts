export interface ExpertiseNode {
  id: string;
  label: string;
  category: "semiconductor" | "packaging" | "manufacturing" | "strategy" | "ecosystem";
  description: string;
  related: string[];
}

export const EXPERTISE_CATEGORIES = [
  { id: "all", label: "Full Constellation" },
  { id: "semiconductor", label: "Semiconductor Physics & IC" },
  { id: "packaging", label: "Advanced Packaging" },
  { id: "manufacturing", label: "OSAT & Manufacturing" },
  { id: "strategy", label: "Semiconductor Strategy" },
  { id: "ecosystem", label: "Ecosystem & Policy" },
] as const;

export const EXPERTISE_NODES: ExpertiseNode[] = [
  {
    id: "chiplets",
    label: "Chiplet Architectures",
    category: "packaging",
    description: "Modular silicon partitioning (UCIe, BoW), heterogeneous compute fabrics, and die-to-die low-latency interconnects.",
    related: ["interposer", "osat", "heterogeneous", "riscv"]
  },
  {
    id: "interposer",
    label: "2.5D / 3D Interposers",
    category: "packaging",
    description: "Silicon, organic, and glass-core interposers enabling ultra-dense fine-pitch routing between compute and HBM memory.",
    related: ["chiplets", "substrate", "thermal", "hbm"]
  },
  {
    id: "substrate",
    label: "Advanced Substrates & Glass",
    category: "packaging",
    description: "Next-generation high-density build-up substrates (ABF) and emerging glass core substrates for high-frequency signal integrity.",
    related: ["interposer", "thermal", "osat"]
  },
  {
    id: "osat",
    label: "OSAT Operations & Testing",
    category: "manufacturing",
    description: "Outsourced semiconductor assembly and test cleanroom operations, wafer sort, wirebond, flip-chip, and system-level test (SLT).",
    related: ["chiplets", "manufacturing-readiness", "substrate", "quality"]
  },
  {
    id: "heterogeneous",
    label: "Heterogeneous Integration",
    category: "semiconductor",
    description: "Integrating disparate nodes (e.g. 3nm logic + 28nm I/O + SiPh optics) on a single unified package platform.",
    related: ["chiplets", "interposer", "riscv", "strategy-roadmap"]
  },
  {
    id: "thermal",
    label: "Thermal & Power Integrity",
    category: "packaging",
    description: "Vapor chamber heatsinks, microfluidic cooling channels, and power delivery networks (PDN) overcoming the 1000W package barrier.",
    related: ["substrate", "interposer", "heterogeneous"]
  },
  {
    id: "riscv",
    label: "RISC-V & Custom Silicon",
    category: "semiconductor",
    description: "Open architecture processors, custom accelerator microarchitecture, and open silicon verification ecosystems.",
    related: ["chiplets", "heterogeneous", "eda"]
  },
  {
    id: "eda",
    label: "EDA & Synthesis Workflows",
    category: "semiconductor",
    description: "30-year lineage in synthesis, timing analysis, RTL-to-GDSII closure, and modern multi-die package co-design tools.",
    related: ["riscv", "chiplets", "heterogeneous"]
  },
  {
    id: "manufacturing-readiness",
    label: "Yield & Manufacturing Scale",
    category: "manufacturing",
    description: "Defect density reduction, known-good-die (KGD) screening protocols, and volume production yield ramps.",
    related: ["osat", "quality", "strategy-roadmap"]
  },
  {
    id: "strategy-roadmap",
    label: "National Semiconductor Strategy",
    category: "strategy",
    description: "Advising governments and consortiums on sovereign supply chains, fiscal incentives, and targeted fab/OSAT prioritization.",
    related: ["india-mission", "ecosystem-building", "osat"]
  },
  {
    id: "india-mission",
    label: "India Semiconductor Mission",
    category: "ecosystem",
    description: "Catalyzing India's trajectory from design prowess into domestic advanced packaging, ATMP units, and compound fabs.",
    related: ["strategy-roadmap", "talent", "ecosystem-building"]
  },
  {
    id: "talent",
    label: "Workforce & Curricula Pipeline",
    category: "ecosystem",
    description: "Shaping university microelectronics curricula (GTU, academic boards) to train next-gen packaging and test engineers.",
    related: ["india-mission", "ecosystem-building"]
  },
  {
    id: "ecosystem-building",
    label: "Public-Private Partnerships",
    category: "ecosystem",
    description: "Connecting international foundry leaders, academic researchers, startup innovators, and government ministries.",
    related: ["india-mission", "strategy-roadmap", "talent"]
  }
];
