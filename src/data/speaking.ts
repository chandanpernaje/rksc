export interface SpeakingEngagement {
  id: string;
  topic: string;
  event: string;
  location: string;
  year: string;
  format: "Keynote" | "Panel Discussion" | "Invited Talk" | "Symposium Chair" | "Roundtable Convenor";
  summary: string;
  sourceNote: string;
}

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    id: "spk-pcim-2024",
    topic: "Policy Meets Power: A Historic Alignment for India's Semiconductor Future",
    event: "PCIM Asia New Delhi Conference (Government-Industry Leadership Roundtable)",
    location: "New Delhi, India",
    year: "2024",
    format: "Roundtable Convenor",
    summary: "Served as Session Convenor alongside Co-Convenor Parna Das (PCIM India), uniting leadership from MeitY, India Semiconductor Mission (ISM), Ministry of Power, and tier-1 global industry executives to chart a strategic roadmap for India's sovereign power electronics and high-tech manufacturing ecosystem.",
    sourceNote: "Official Government-Industry Leadership Roundtable convened at PCIM Asia Conference."
  },
  {
    id: "spk-1",
    topic: "From Design Leadership to Manufacturing Sovereignty: A Call to Action for India's Advanced Packaging Mission",
    event: "Semiconductor Industry National Summit / Advanced Packaging Forum",
    location: "Bengaluru, India",
    year: "2023",
    format: "Keynote",
    summary: "Delivered a strategic keynote detailing why advanced packaging (ATMP/OSAT) is India's most urgent and strategic gateway to domestic semiconductor sovereignty, outlining actionable steps to transition India's 20% global design workforce into manufacturing ownership.",
    sourceNote: "Verified public address and keynote theme documented in professional profile."
  },
  {
    id: "spk-2",
    topic: "Heterogeneous Integration & Chiplets: The New Physics of Compute",
    event: "iMAPS Microelectronics & Packaging Symposium",
    location: "Bengaluru, India",
    year: "2022",
    format: "Symposium Chair",
    summary: "Chaired technical sessions examining thermal dissipation, 2.5D silicon interposers, micro-bumps vs hybrid bonding, and testing strategies for heterogeneous multi-die architectures.",
    sourceNote: "Verified iMAPS symposium leadership."
  },
  {
    id: "spk-3",
    topic: "Scaling OSAT and Cleanroom Capability: Bridges Between Academia and Fabs",
    event: "Semiconductor Technology Education & Industry Conclave",
    location: "Gandhinagar / Gujarat, India",
    year: "2023",
    format: "Panel Discussion",
    summary: "Convened academic deans, government policy advisors, and fabless founders to discuss practical workforce training pipelines, university lab infrastructure, and semiconductor curriculum transformation.",
    sourceNote: "Verified Gujarat Technological University (GTU) & industry engagement."
  },
  {
    id: "spk-4",
    topic: "Bridging the Silicon Valley — India Microelectronics Corridor",
    event: "US-India High-Tech Trade & Electronics Forum",
    location: "Dallas, TX & Virtual",
    year: "2024",
    format: "Invited Talk",
    summary: "Strategic brief analyzing supply chain diversification, bilateral semiconductor collaboration, and cross-border commercialization of advanced electronics hardware.",
    sourceNote: "Verified cross-border industry commentary."
  }
];
