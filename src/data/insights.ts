export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  keyTheses: string[];
  externalUrl?: string;
  editorialNote: string;
  date?: string;
  detailedAnalysis?: string[];
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: "featured-sovereignty",
    title: "From Technology Leadership to Manufacturing Impact",
    category: "National Semiconductor Strategy",
    readTime: "8 min read",
    date: "Q1 2026",
    summary: "Exploring how technology leadership, advanced packaging, and ecosystem development work together to create sustainable industry sovereignty—connecting India’s 20% global design talent to domestic ATMP cleanrooms.",
    keyTheses: [
      "Connecting design leadership directly to domestic packaging creates immediate value capture without multi-billion dollar leading-edge fab gestation delays.",
      "OSAT cleanrooms require lower water and power infrastructure hurdles than sub-3nm wafer front-ends.",
      "Packaging sovereignty insulates domestic telecom, defense, and automotive supply chains against external geopolitical shocks.",
      "A strategic corridor between Silicon Valley architecture and Indian manufacturing scale provides mutual de-risking."
    ],
    editorialNote: "Strategic position paper reflecting discourse presented at national industry forums.",
    detailedAnalysis: [
      "For decades, the global semiconductor playbook dictated that national prestige required owning sub-5nm monolithic wafer fabrication facilities. However, the realities of extreme capital costs, geopolitical supply chain chokepoints, and the physical limits of Moore's Law have fundamentally rewritten this equation.",
      "Today, advanced packaging—encompassing 2.5D/3D heterogeneous integration, high-density fan-out, and modular chiplets—has emerged as the true engine of computing innovation. By focusing on advanced packaging and OSAT capability first, emerging microelectronics hubs can build immediate sovereign capability.",
      "With India already housing approximately 20% of the world's semiconductor design engineers, coupling this intellectual property directly to domestic packaging infrastructure allows domestic value capture to increase from ~15% to over 65% of the total bill of materials."
    ]
  },
  {
    id: "packaging-is-architecture",
    title: "Packaging Is Becoming Architecture: The Post-Moore Frontier",
    category: "Advanced Packaging",
    readTime: "6 min read",
    date: "2026",
    summary: "As monolithic die scaling hits economic and thermal walls, performance scaling has shifted from gate length shrink to heterogeneous packaging, die-to-die interconnects, and package-level power delivery.",
    keyTheses: [
      "Monolithic cost per good die increases asymptotically beyond 3nm; chiplet partitioning restores economic linearity.",
      "Interconnect latency and bandwidth density are the new benchmarks of system performance.",
      "Thermal dissipation and mechanical warpage dictate packaging feasibility at 1000W compute envelopes."
    ],
    editorialNote: "Original editorial thesis synthesizing 30 years of semiconductor architecture transitions.",
    detailedAnalysis: [
      "The historical assumption that scaling node geometry automatically lowers cost-per-transistor broke down with leading-edge multi-patterning and EUV lithography complexity.",
      "In modern AI and high-performance computing silicon, the challenge is no longer just how many transistors can be packed on a single die, but how quickly and efficiently data can move between compute, memory (HBM), and I/O domains.",
      "Heterogeneous packaging turns the package into the motherboard of the 21st century. Those who master substrate engineering, micro-bumps, through-silicon vias, and thermal interface materials will define the computational frontier."
    ]
  },
  {
    id: "india-packaging-first",
    title: "Why India's Semiconductor Sovereignty Must Start with Advanced Packaging",
    category: "Semiconductor Strategy",
    readTime: "8 min read",
    date: "2026",
    summary: "While high-volume leading-edge wafer fabs require tens of billions in capex and decade-long gestation, advanced packaging (OSAT/ATMP) offers a faster, high-impact pathway to domestic technological sovereignty.",
    keyTheses: [
      "India already possesses ~20% of the world's semiconductor design engineers; connecting design directly to domestic packaging creates immediate value capture.",
      "OSAT facilities require significantly lower water and cleanroom capex than 3nm front-end fabs, enabling accelerated production readiness.",
      "Packaging sovereignty protects critical infrastructure, aerospace, and telecom supply chains against geopolitical shocks."
    ],
    editorialNote: "Strategic position paper reflecting discourse presented at national industry forums.",
    detailedAnalysis: [
      "The strategic imperative for any nation embarking on the semiconductor journey is balancing capital allocation speed with supply chain defensibility.",
      "Foundry front-ends demand continuous multi-billion-dollar upgrades every two years to prevent obsolescence. In contrast, modern ATMP facilities offer diverse product flexibility across automotive, industrial, and consumer verticals.",
      "By establishing high-reliability cleanrooms and packaging alliances under the India Semiconductor Mission, the ecosystem can train thousands of specialized cleanroom operators, establishing the foundation for future wafer fab integration."
    ]
  },
  {
    id: "chiplet-standardization",
    title: "The Battle for the Die-to-Die Interconnect: UCIe, BoW, and Open Silicon",
    category: "Chiplets",
    readTime: "5 min read",
    date: "2026",
    summary: "For the chiplet revolution to achieve plug-and-play democratized silicon, industry standards like UCIe and Bunch of Wires (BoW) must balance electrical efficiency with multi-vendor testability.",
    keyTheses: [
      "Known Good Die (KGD) test methodologies require paradigm shifts in wafer-probe and test vectors.",
      "Proprietary interconnect interfaces risk creating vendor lock-in that undermines heterogeneous integration benefits.",
      "Open standards enable smaller fabless innovators to build bespoke accelerators without financing a full custom tapeout."
    ],
    editorialNote: "Technical commentary on heterogeneous integration standards and market dynamics.",
    detailedAnalysis: [
      "Standardization is the catalyst that transforms niche packaging experiments into a flourishing global industry.",
      "Universal Chiplet Interconnect Express (UCIe) and BoW are laying the electrical and protocol groundwork for multi-die interoperability across diverse foundry nodes.",
      "However, commercial success relies not only on protocol specs, but on establishing rigorous Known Good Die (KGD) supply agreements and shared liability frameworks between OSATs, foundries, and system integrators."
    ]
  },
  {
    id: "glass-core-substrates",
    title: "Glass Core Substrates: Overcoming the Organic ABF Limit",
    category: "Substrate Technology",
    readTime: "7 min read",
    date: "2026",
    summary: "An in-depth analysis of why the semiconductor industry is pivoting toward glass core substrates for high-density AI accelerators requiring unprecedented planarity, dimensional stability, and high-frequency signaling.",
    keyTheses: [
      "Glass exhibits superior surface smoothness, enabling sub-micron line and space routing.",
      "Coefficient of Thermal Expansion (CTE) matched closely to silicon prevents destructive package warping at thermal extremes.",
      "Manufacturing hurdles: Through-Glass Via (TGV) formation and brittle mechanical handling in standard OSAT lines."
    ],
    editorialNote: "Advanced materials technical brief exploring next-generation packaging substrates.",
    detailedAnalysis: [
      "Organic Ajinomoto Build-up Film (ABF) substrates have reached physical boundaries in terms of pitch density, thermal expansion mismatch, and mechanical warpage at package sizes exceeding 100mm x 100mm.",
      "Glass core substrates introduce a revolutionary alternative: superior flatness, ultra-high electrical insulation, and thermal stability that closely matches silicon dies.",
      "While fabrication hurdles like laser via drilling and substrate brittleness remain, major players are investing heavily to qualify glass substrates for late-decade high-performance computing ramps."
    ]
  }
];
