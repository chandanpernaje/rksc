export interface CustomerCategory {
  id: string;
  category: string;
  description: string;
  engagementAreas: string[];
}

export const CUSTOMER_CATEGORIES: CustomerCategory[] = [
  {
    id: "semiconductor",
    category: "Semiconductor Companies",
    description: "Organizations operating across semiconductor design, manufacturing, OSAT assembly, and packaging looking to scale capability and optimize roadmaps.",
    engagementAreas: ["Advanced Packaging Strategy", "Chiplet Integration", "OSAT Readiness", "Die-to-Die Interconnects"]
  },
  {
    id: "tech-platforms",
    category: "Technology Companies",
    description: "Enterprise system builders and hardware OEMs developing next-generation compute, AI hardware, and edge computing platforms.",
    engagementAreas: ["Custom Silicon Architecture", "Heterogeneous Integration", "Supplier Selection", "Thermal Co-Design"]
  },
  {
    id: "manufacturing",
    category: "Manufacturing Organizations",
    description: "Electronics manufacturing service (EMS) and packaging providers establishing cleanroom operations, testing facilities, and volume yield lines.",
    engagementAreas: ["Cleanroom Ramp-Up", "Quality & Yield Protocols", "Known-Good-Die (KGD)", "Equipment Localization"]
  },
  {
    id: "startups",
    category: "Startups & Emerging Ventures",
    description: "Deep-tech fabless startups seeking productization roadmaps, foundry relationships, packaging architecture, and market entry guidance.",
    engagementAreas: ["Tape-out Feasibility", "Packaging Trade-offs", "Investor Briefings", "Cross-Border Commercialization"]
  },
  {
    id: "government-policy",
    category: "Government & Industry Bodies",
    description: "Public policy entities, regional development boards, and academic institutions shaping national semiconductor ecosystems and workforce pipelines.",
    engagementAreas: ["National Strategy Roadmaps", "Incentive Architectures", "Curricula Modernization", "Public-Private Alliances"]
  },
  {
    id: "investors",
    category: "Investors & Strategic Funds",
    description: "Venture capital, private equity, and sovereign wealth funds conducting technical due diligence on semiconductor and hardware opportunities.",
    engagementAreas: ["Technical Due Diligence", "Market Opportunity Sizing", "Technology Risk Evaluation", "Portfolio Advisory"]
  }
];

export interface CustomerLogoItem {
  id: string;
  name: string;
  type: string;
  isPlaceholder: boolean;
}

// TODO: Replace placeholder logo with verified customer/partner logo.
export const PLACEHOLDER_LOGOS: CustomerLogoItem[] = [
  { id: "1", name: "NEXORA", type: "Semiconductor Platform", isPlaceholder: true },
  { id: "2", name: "NEXORA", type: "Advanced Packaging", isPlaceholder: true },
  { id: "3", name: "NEXORA", type: "Compute Systems", isPlaceholder: true },
  { id: "4", name: "NEXORA", type: "Ecosystem Partner", isPlaceholder: true },
];
