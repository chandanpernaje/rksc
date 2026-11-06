export interface ServiceKeyArea {
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  path: string;
  num: string;
  title: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  whatWeHelpWith: string[];
  keyAreas: ServiceKeyArea[];
  whoThisIsFor: string[];
  howExperienceAddsValue: string;
  keyDeliverables: string[];
  businessOutcomes: string[];
  visualMeta: {
    domain: string;
    focus: string;
    metric: string;
    metricLabel: string;
  };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "semiconductor-strategy",
    slug: "semiconductor-strategy",
    path: "/services/semiconductor-strategy",
    num: "01",
    title: "Semiconductor Strategy",
    tagline: "Navigating Industry Inflections & Capital Allocation",
    shortDescription: "Helping enterprise leadership, foundry consortiums, and technology investors identify high-return positions within the rapidly evolving global semiconductor landscape.",
    detailedDescription: "The global semiconductor paradigm is shifting from monolithic scaling toward multi-faceted geopolitical, manufacturing, and architectural frontiers. We guide executive teams through comprehensive market opportunity sizing, technology direction evaluation, sovereign subsidy alignment, and competitive positioning.",
    whatWeHelpWith: [
      "Evaluating whether to invest in internal silicon development, joint ventures, or strategic foundry partnerships.",
      "Navigating national microelectronics subsidy frameworks (e.g. India Semiconductor Mission and US CHIPS Act).",
      "De-risking multi-million dollar technology node choices against actual commercial end-market demand.",
      "Synthesizing complex technical trade-offs into boardroom-ready strategic consensus and capital roadmaps."
    ],
    keyAreas: [
      {
        title: "Market Opportunity Sizing",
        desc: "Benchmarking competitive landscape, demand forecasts, and pricing dynamics across targeted verticals."
      },
      {
        title: "Node & Architecture Prioritization",
        desc: "Selecting the optimal process node and packaging approach to balance performance, cost, and yield."
      },
      {
        title: "Sovereign Policy & Incentive Alignment",
        desc: "Maximizing eligibility and compliance with central and regional semiconductor incentive structures."
      },
      {
        title: "Commercialization Architecture",
        desc: "Designing commercial agreements, foundry access contracts, and go-to-market execution plans."
      }
    ],
    whoThisIsFor: [
      "Foundry and OSAT consortium executive teams planning new capital deployments.",
      "System OEMs evaluating custom ASIC investments to differentiate product lines.",
      "Private equity and institutional investors conducting strategic and commercial due diligence.",
      "Government task forces crafting regional semiconductor policy and roadmaps."
    ],
    howExperienceAddsValue: "With more than 30 years bridging foundational engineering at Texas Instruments and Synopsys with business development and corporate strategy, Sharat Kaul evaluates strategic opportunities through both physics-based reality and commercial P&L discipline.",
    keyDeliverables: [
      "Market opportunity & competitive benchmarking",
      "Technology roadmap & node prioritization",
      "Sovereign incentive & policy optimization",
      "Foundry & fabless commercialization models"
    ],
    businessOutcomes: [
      "De-risked multi-year capital deployment",
      "Clear positioning against global incumbents",
      "Accelerated board-level consensus"
    ],
    visualMeta: {
      domain: "Strategic Direction",
      focus: "Capex & Roadmaps",
      metric: "$Bn+",
      metricLabel: "Capital Alignment"
    }
  },
  {
    id: "advanced-packaging-osat",
    slug: "advanced-packaging-osat",
    path: "/services/advanced-packaging-osat",
    num: "02",
    title: "Advanced Packaging & OSAT",
    tagline: "Capturing Value in Post-Moore Heterogeneous Manufacturing",
    shortDescription: "Helping organizations evaluate advanced packaging architectures, OSAT partner qualification, chiplet standards, and assembly test readiness.",
    detailedDescription: "As monolithic silicon scaling encounters physical and economic boundaries, performance gains are increasingly achieved through advanced packaging. We advise companies on navigating 2.5D/3D interposers, through-silicon vias, high-density substrates, and establishing scalable relationships with world-class OSAT partners.",
    whatWeHelpWith: [
      "Assessing the technical and economic viability of transitioning from monolithic SoCs to modular chiplet packaging.",
      "Selecting, auditing, and qualifying Tier-1 and regional OSAT assembly and test facilities.",
      "Structuring Known-Good-Die (KGD) test methodologies to safeguard multi-die yield economics.",
      "Resolving thermal dissipation, warpage, and power integrity challenges in high-density multi-chip modules."
    ],
    keyAreas: [
      {
        title: "Heterogeneous & 2.5D/3D Packaging",
        desc: "Architecture trade-offs across silicon interposers, high-density fan-out, and substrate technologies."
      },
      {
        title: "OSAT Facility Qualification",
        desc: "Cleanroom readiness, equipment selection, and operational process auditing for packaging lines."
      },
      {
        title: "Chiplet Interconnect & UCIe",
        desc: "Standardization of die-to-die interfaces, protocol selection, and multi-vendor supply chain integration."
      },
      {
        title: "Yield & KGD Test Protocols",
        desc: "Robust wafer sort, burn-in, and final package test architectures to protect yield economics."
      }
    ],
    whoThisIsFor: [
      "Semiconductor product companies adopting chiplet architectures for AI, HPC, and networking.",
      "EMS and packaging manufacturers expanding into high-density advanced OSAT operations.",
      "Hardware OEMs seeking reliable second-source advanced packaging supply chains.",
      "Foundry consortiums planning domestic ATMP / OSAT facility investments."
    ],
    howExperienceAddsValue: "As Co-Chair of the iMAPS India Chapter and Executive Director at Global Semiconductor EMS with deep hands-on packaging, plant development, and cleanroom operations experience, Sharat Kaul provides direct, actionable guidance grounded in physical packaging realities.",
    keyDeliverables: [
      "2.5D/3D & Chiplet feasibility assessments",
      "OSAT vendor selection & cleanroom readiness",
      "Known Good Die (KGD) test methodology audit",
      "Thermal, substrate & power integrity strategy"
    ],
    businessOutcomes: [
      "Up to 40% reduction in mask & tape-out risk",
      "Predictable volume packaging ramp-up",
      "Access to Tier-1 packaging supply chains"
    ],
    visualMeta: {
      domain: "Micro-Architectures",
      focus: "2.5D/3D & Chiplets",
      metric: "40%",
      metricLabel: "Tape-out Risk Reduction"
    }
  },
  {
    id: "technology-business-development",
    slug: "technology-business-development",
    path: "/services/technology-business-development",
    num: "03",
    title: "Technology & Business Development",
    tagline: "Bridging Core Silicon to Market Demand & Strategic Partners",
    shortDescription: "Connecting deep engineering breakthroughs with commercial customer contracts, strategic alliances, and international market entry.",
    detailedDescription: "Groundbreaking microelectronics technology requires commercial validation to generate enterprise value. We help technology providers translate complex IP and hardware into customer-facing value propositions, structuring strategic alliances, and closing bilateral high-tech commercial corridors between Silicon Valley and India.",
    whatWeHelpWith: [
      "Translating complex semiconductor IP, EDA tools, or hardware platforms into clear customer value propositions.",
      "Structuring high-trust commercial partnerships and licensing agreements with global technology leaders.",
      "Accelerating customer qualification pipelines and overcoming protracted high-tech sales cycles.",
      "Opening cross-border commercial opportunities across North American and Indian technology ecosystems."
    ],
    keyAreas: [
      {
        title: "Go-to-Market Architecture",
        desc: "Positioning deep-tech products to address specific enterprise and OEM hardware roadmap priorities."
      },
      {
        title: "Bilateral US-India Corridors",
        desc: "Facilitating cross-border commercial partnerships, talent exchanges, and joint ventures."
      },
      {
        title: "Strategic Customer Pipeline",
        desc: "Targeting, qualifying, and engaging decision-makers across global semiconductor accounts."
      },
      {
        title: "Technology Licensing & IP Deals",
        desc: "Structuring commercial terms, royalty frameworks, and strategic co-development agreements."
      }
    ],
    whoThisIsFor: [
      "Fabless chip startups seeking first commercial design wins with tier-1 enterprise customers.",
      "Semiconductor service providers expanding enterprise accounts across the US and India.",
      "Hardware IP providers commercializing proprietary digital or analog blocks.",
      "Established technology firms entering new geographic or vertical hardware markets."
    ],
    howExperienceAddsValue: "Sharat has led global technology practices, closed multi-million dollar high-tech contracts, and navigated both Silicon Valley and Indian corporate cultures, ensuring pragmatic business development that produces signed contracts.",
    keyDeliverables: [
      "Go-to-market architecture & value proposition design",
      "Cross-border technology commercialization (US-India)",
      "Strategic partnership structuring & negotiations",
      "Customer pipeline qualification for deep-tech IP"
    ],
    businessOutcomes: [
      "Shortened enterprise sales & qualification cycles",
      "High-trust institutional partnerships",
      "Durable commercial revenue contracts"
    ],
    visualMeta: {
      domain: "Commercial Growth",
      focus: "Cross-Border Corridors",
      metric: "US-IN",
      metricLabel: "Strategic Corridor"
    }
  },
  {
    id: "ecosystem-development",
    slug: "ecosystem-development",
    path: "/services/ecosystem-development",
    num: "04",
    title: "Ecosystem Development",
    tagline: "Aligning Government, Industry, Academia & Capital",
    shortDescription: "Connecting disparate stakeholders—ministers, foundry executives, university deans, and venture investors—into resilient national technology ecosystems.",
    detailedDescription: "Semiconductor capability cannot thrive in isolation as a single factory. It requires a cohesive web of precision equipment, specialty chemicals, design talent, and regulatory frameworks. We advise industry bodies, government task forces, and academic institutions on constructing self-sustaining microelectronics ecosystems.",
    whatWeHelpWith: [
      "Fostering multi-stakeholder consensus across government departments, industry consortiums, and universities.",
      "Advising universities on modernizing electrical engineering curricula to deliver cleanroom-ready graduates.",
      "Designing supplier localization roadmaps for semiconductor assembly, testing, substrates, and chemicals.",
      "Structuring public-private partnerships (PPPs) that unlock sovereign co-investment and international participation."
    ],
    keyAreas: [
      {
        title: "Tri-Sector Stakeholder Alignment",
        desc: "Aligning public policy incentives, corporate capital expenditures, and academic research agendas."
      },
      {
        title: "Workforce & Talent Pipelines",
        desc: "Developing university curricula, hands-on packaging apprenticeships, and specialized training programs."
      },
      {
        title: "Supply Chain Localization",
        desc: "Attracting and integrating suppliers of specialty chemicals, substrates, leadframes, and testing tools."
      },
      {
        title: "Industry Forum Leadership",
        desc: "Organizing high-impact technical symposia, standard working groups, and policy advisory panels."
      }
    ],
    whoThisIsFor: [
      "Government ministries, industrial development boards, and regional task forces.",
      "Technical universities, engineering colleges, and academic boards building semiconductor centers of excellence.",
      "Industry trade associations seeking strategic guidance on microelectronics roadmaps.",
      "Global consortiums setting up operations in emerging semiconductor clusters."
    ],
    howExperienceAddsValue: "As Co-Chair of iMAPS India Chapter and member of the Board of Semiconductor Technologies at Gujarat Technological University (GTU), Sharat brings authentic institutional stewardship and direct access to key policy and academic leaders.",
    keyDeliverables: [
      "Tri-sector stakeholder alignment (Govt-Industry-Academia)",
      "National packaging forum leadership (iMAPS chapter)",
      "Curricula modernization & workforce pipeline setup",
      "Ecosystem supply chain localization roadmaps"
    ],
    businessOutcomes: [
      "Institutional policy coherence & fast-track approvals",
      "Steady pipeline of cleanroom-ready engineers",
      "Sovereign microelectronics resilience"
    ],
    visualMeta: {
      domain: "National Ecosystems",
      focus: "Govt-Industry-Academia",
      metric: "Tri-Sector",
      metricLabel: "Alignment Model"
    }
  },
  {
    id: "manufacturing-scale-up",
    slug: "manufacturing-scale-up",
    path: "/services/manufacturing-scale-up",
    num: "05",
    title: "Manufacturing & Scale-Up Advisory",
    tagline: "From Silicon Prototype to High-Yield Volume Production",
    shortDescription: "Structuring the operational bridge from first lab prototype and engineering samples to robust, high-reliability commercial manufacturing.",
    detailedDescription: "Moving hardware from functional prototype to high-yield volume production is where deep-tech companies face their highest capital mortality. We bring hands-on operational leadership across cleanrooms, high-reliability defense/aerospace testing, and EMS delivery to guide organizations through yield ramp-ups and quality certification.",
    whatWeHelpWith: [
      "Transitioning new hardware products from NPI (New Product Introduction) prototypes to high-volume manufacturing.",
      "Auditing cleanroom contamination controls, equipment maintenance schedules, and operator quality certifications.",
      "Troubleshooting yield fallout, defect density, and thermal dissipation issues in early production runs.",
      "Ensuring full compliance with demanding industrial, automotive, and defense reliability standards."
    ],
    keyAreas: [
      {
        title: "NPI to Volume Scale Bridge",
        desc: "Establishing rigorous design-for-manufacturability (DFM) and design-for-test (DFT) guidelines."
      },
      {
        title: "Cleanroom Process Audits",
        desc: "Qualifying automated pick-and-place, die attach, wire bond, flip-chip, and encapsulation equipment."
      },
      {
        title: "Yield & Defect Mitigation",
        desc: "Implementing statistical process control (SPC) and failure analysis workflows to drive yield recovery."
      },
      {
        title: "High-Reliability Standards",
        desc: "Securing ISO, automotive, and mission-critical quality certifications for domestic and export markets."
      }
    ],
    whoThisIsFor: [
      "Electronics manufacturing service (EMS) providers transitioning into semiconductor assembly & packaging.",
      "Fabless hardware startups preparing their first high-volume manufacturing tape-outs.",
      "Cleanroom operators troubleshooting yield bottlenecks in early production ramp-ups.",
      "Industrial conglomerates commissioning new advanced electronic assembly facilities."
    ],
    howExperienceAddsValue: "Having directed greenfield semiconductor EMS plant development and high-reliability production lines at Global Semiconductor EMS, Sharat understands the day-to-day operational discipline needed on the factory cleanroom floor.",
    keyDeliverables: [
      "Operational readiness & cleanroom tool qualification",
      "Defect density mitigation & yield enhancement",
      "High-reliability compliance (Automotive, Defense, Industrial)",
      "Supplier capacity audit & contract governance"
    ],
    businessOutcomes: [
      "Drastic reduction in volume yield ramp delays",
      "Zero-defect delivery for mission-critical verticals",
      "Predictable unit economics at scale"
    ],
    visualMeta: {
      domain: "Factory Operations",
      focus: "Cleanroom & Yield Ramp",
      metric: "Zero-Defect",
      metricLabel: "Quality Standard"
    }
  },
  {
    id: "executive-advisory",
    slug: "executive-advisory",
    path: "/services/executive-advisory",
    num: "06",
    title: "Executive & Board Advisory",
    tagline: "Confidential Strategic Counsel for C-Suite & Boards",
    shortDescription: "Serving as trusted advisor to CEOs, founders, and investment committees navigating high-stakes technology transformations.",
    detailedDescription: "When multi-million-dollar technology investments or geopolitical supply-chain shifts threaten existing business models, executive leaders need confidential, non-partisan strategic perspective. We provide independent technical due diligence, executive coaching on hardware strategy, and guidance during key corporate governance junctures.",
    whatWeHelpWith: [
      "Providing confidential sparring and sanity-checking for CEOs facing complex hardware or silicon commitments.",
      "Conducting technical and commercial due diligence for private equity, VC, and corporate M&A deals.",
      "Briefing corporate boards on geopolitical semiconductor dynamics, supply chain vulnerabilities, and CHIPS policies.",
      "Benchmarking executive and technical leadership talent for newly established semiconductor business units."
    ],
    keyAreas: [
      {
        title: "Confidential C-Suite Sparring",
        desc: "A discrete sounding board for CEOs, CTOs, and founders evaluating high-stakes technology pivots."
      },
      {
        title: "M&A & Technical Due Diligence",
        desc: "Evaluating the defensibility of target IP, manufacturing capabilities, and technology roadmaps."
      },
      {
        title: "Boardroom Technology Briefings",
        desc: "Translating macro industry trends, packaging shifts, and sovereign incentives for board directors."
      },
      {
        title: "Strategic Risk Governance",
        desc: "Identifying single-source supply chain bottlenecks and recommending resilient multi-sourcing hedges."
      }
    ],
    whoThisIsFor: [
      "Chief Executive Officers and Managing Directors of technology, automotive, and industrial corporations.",
      "Corporate Boards of Directors seeking independent validation of major capex proposals.",
      "General Partners and Investment Committees evaluating semiconductor venture investments.",
      "Founders of deep-tech ventures preparing for growth-stage institutional funding rounds."
    ],
    howExperienceAddsValue: "Holding an MBA from SMU Cox alongside a BS in Electrical Engineering (BSEE), Sharat communicates fluently with institutional board members and engineering leads alike, delivering unbiased counsel that protects shareholder value.",
    keyDeliverables: [
      "Confidential C-suite technology sparring",
      "M&A and investment technical due diligence",
      "Board briefings on semiconductor geopolitical trends",
      "Executive talent benchmarking for high-tech practices"
    ],
    businessOutcomes: [
      "Independent validation of high-capex bets",
      "Actionable foresight on supply-chain shifts",
      "Protection of shareholder value"
    ],
    visualMeta: {
      domain: "Board Governance",
      focus: "Confidential C-Suite",
      metric: "Trusted",
      metricLabel: "Executive Counsel"
    }
  }
];
