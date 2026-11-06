import electronicaThumbnail from "../assets/images/electronica_interview_thumbnail.jpg";
import efyThumbnail from "../assets/images/efy_interview_thumbnail.jpg";
import pcimThumbnail from "../assets/images/RKS_PCIM.jpg";
import semiconductorSummitThumbnail from "../assets/images/videoframe_0.png";

export interface MediaItem {
  id: string;
  title: string;
  source: string;
  format: "Video Interview" | "Published Article / Expert Interview" | "Industry Analysis" | "Symposium Proceedings" | "Policy Brief" | "Executive Discourse" | "Leadership Roundtable";
  year: string;
  summary: string;
  topics: string[];
  url?: string;
  thumbnailUrl?: string;
  thumbnailPosition?: string;
  thumbnailFit?: "cover" | "contain";
  speakers?: string;
  featuredExpert?: string;
  moderatedBy?: string;
  readTime?: string;
  keyTakeaways?: string[];
  hideOnHome?: boolean;
}

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "media-semiconductor-summit-2026",
    title: "India's Advanced Packaging Opportunity in a Resilient Semiconductor Supply Chain",
    source: "The Hindu",
    format: "Video Interview",
    year: "2026",
    thumbnailUrl: semiconductorSummitThumbnail,
    thumbnailFit: "contain",
    featuredExpert: "Sharat Kaul, iNEMI",
    summary: "Speaking at Semiconductor Summit 2026, Sharat Kaul highlighted the importance of resilient semiconductor supply chains and identified advanced packaging as India's biggest opportunity in the global chip industry. He explained how India's strengths in engineering, software, and semiconductor design can help the country leapfrog into the next phase of semiconductor innovation.",
    topics: ["Advanced Packaging", "Supply Chain Resilience", "Semiconductor Design", "India Ecosystem"],
    url: "https://www.linkedin.com/posts/semiconductor-semiconductorsummit2026-ugcPost-7520902497016672256-2gSg/?utm_source=share&utm_medium=member_android&rcm=ACoAAAZU2dcBiwIPql4ahMlBYUW49n84uo5WyXo",
    readTime: "Semiconductor Summit 2026",
    keyTakeaways: [
      "Building resilient semiconductor supply chains",
      "Advanced packaging as India's strongest global chip-industry opportunity",
      "Leveraging engineering, software, and design talent to accelerate innovation"
    ]
  },
  {
    id: "media-pcim-roundtable",
    title: "Policy Meets Power: A Historic Alignment for India’s Semiconductor Future",
    source: "PCIM Asia New Delhi Conference (LinkedIn)",
    format: "Leadership Roundtable",
    year: "2024",
    thumbnailUrl: pcimThumbnail,
    moderatedBy: "Session Convenor: Sharat Kaul, (iNEMI) & Session Co-Convenor: Parna Das (PCIM India)",
    summary: "A high-level Government-Industry Leadership Roundtable convened at the PCIM Asia New Delhi Conference, serving as a vital bridge between India’s semiconductor policy vision and global industry majors to chart an actionable roadmap for domestic power electronics and manufacturing resilience.",
    topics: ["Power Electronics", "Semiconductor Policy", "Grid Infrastructure", "iNEMI", "PCIM Asia"],
    url: "https://lnkd.in/p/ghDkWe4i",
    readTime: "Executive Roundtable",
    hideOnHome: true,
    keyTakeaways: [
      "Sovereignty in Semiconductor Fabrication",
      "Sustainable Grid Infrastructure",
      "Global Supply Chain Resilience"
    ]
  },
  {
    id: "media-electronica-interview",
    title: "Industry Insights: Developing India’s Electronics & Semiconductor Manufacturing Ecosystem",
    source: "electronica India & productronica India",
    format: "Video Interview",
    year: "2024",
    thumbnailUrl: electronicaThumbnail,
    speakers: "Sharat Kaul (India Representative, iNEMI / Advanced Packaging Advisor) in conversation with Sanjeev Keskar (CEO, Arvind Consultancy; Chairman, National Advisory Council)",
    summary: "An in-depth discussion on strengthening India's electronics manufacturing supply chain, closing the gap between active silicon and passive components, scaling domestic OSAT/packaging capabilities, and leveraging government policy frameworks to establish India as a competitive global electronics hub.",
    topics: ["OSAT / Packaging", "Supply Chain", "Active & Passive Components", "India Ecosystem"],
    url: "https://www.youtube.com/watch?v=VYRVKVjLPUQ",
    readTime: "Broadcast Dialogue",
    keyTakeaways: [
      "Closing the ecosystem gap between active silicon fabrication and passive component production",
      "Scaling domestic OSAT and advanced packaging infrastructure to anchor electronics manufacturing",
      "Leveraging India Semiconductor Mission (ISM) policy frameworks to establish a global export hub"
    ]
  },
  {
    id: "media-efy-riscv-interview",
    title: "RISC-V and Open Source are India's Golden Moment to Become Relevant in Semiconductor Product Design Innovation",
    source: "Electronics For You (EFY)",
    format: "Published Article / Expert Interview",
    year: "2024",
    thumbnailUrl: efyThumbnail,
    featuredExpert: "Sharat Kaul (Global Design, Advanced Packaging, and OSAT Advisor; India Representative, iNEMI)",
    summary: "An industry interview exploring India’s transition from a services-led semiconductor model to product ownership, capitalizing on open-source EDA tools and RISC-V architectures, and closing critical domestic supply-chain gaps in upstream materials and advanced packaging.",
    topics: ["RISC-V", "Open Source EDA", "Product Ownership", "Advanced Packaging"],
    url: "https://www.electronicsforu.com/technology-trends/risc-v-open-source-are-india-golden-moment-to-become-relevant-in-semiconductor-product-design-innovation-sharat-kaul",
    readTime: "6 min read",
    keyTakeaways: [
      "Transitioning from offshore design services execution to sovereign silicon product ownership",
      "Capitalizing on RISC-V architectures and open-source EDA automation for accessible innovation",
      "Closing domestic supply-chain bottlenecks in upstream materials, substrates, and advanced packaging"
    ]
  },
  {
    id: "media-1",
    title: "Building the Indian OSAT Backbone: Infrastructure, Cleanrooms, and Workforce Realities",
    source: "Semiconductor Ecosystem Discussions",
    format: "Industry Analysis",
    year: "2023",
    summary: "Detailed review of the prerequisite operational capabilities for ATMP/OSAT ramp-ups: ultrapure gas supply, sub-micron thermal paste dispensing, automated optical inspection, and trained technician cohorts.",
    topics: ["OSAT", "Manufacturing", "Cleanrooms", "India Semiconductor Mission"]
  },
  {
    id: "media-2",
    title: "Why Heterogeneous Integration Changes the Economics of the Fabless Model",
    source: "Microelectronics Technical Briefing",
    format: "Executive Discourse",
    year: "2024",
    summary: "How startups and enterprise system architects can utilize chiplet-based heterogeneous integration to bring custom silicon to market at a fraction of leading-edge monolithic mask costs.",
    topics: ["Chiplets", "Fabless Economics", "Heterogeneous Integration", "ASIC"]
  },
  {
    id: "media-3",
    title: "Bridging Academia and Foundries: The Gujarat Semiconductor Curriculum Framework",
    source: "GTU Board of Semiconductor Technologies",
    format: "Policy Brief",
    year: "2023",
    summary: "Strategic outline on restructuring undergraduate electrical and materials engineering courses to align with hands-on semiconductor packaging, EDA automation, and cleanroom test protocols.",
    topics: ["Workforce Development", "Curricula", "University Partnerships", "Talent Pipeline"]
  }
];
