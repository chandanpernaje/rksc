export interface CareerMilestone {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  focus: string;
  description: string;
  tags: string[];
}

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: "rkc-advisory",
    period: "Jan 2024 — Present",
    role: "Principal Consultant — Semiconductor Design & Manufacturing Advisory",
    organization: "RKC Advisory",
    location: "Bengaluru, India (Hybrid)",
    focus: "Advanced Packaging, RISC-V & AI Accelerators",
    description: "Delivered end-to-end programme management for multiple AI accelerator tape-outs in the GCC region, deploying RTL-to-GDSII flows with advanced EDA tooling. Developed strategic roadmaps for embedded semiconductor startups covering AI HW architecture and RISC-V/ARM silicon. Established MOUs between OSAT providers and skilling bodies supporting India Semiconductor Mission capacity-building goals.",
    tags: ["Advanced Packaging", "RISC-V", "AI Accelerators", "CoWoS", "India Semiconductor Mission", "RTL-to-GDSII"]
  },
  {
    id: "global-ems",
    period: "Apr 2018 — Present",
    role: "Executive Director, Global Semiconductor EMS",
    organization: "Global Semiconductor EMS",
    location: "Bangalore, India (Remote)",
    focus: "Semiconductor EMS Plant Development & Advanced Packaging",
    description: "Oversaw greenfield semiconductor EMS plant development execution, coordinating cross-functional facilities, procurement, and operations teams on schedule. Drove business development strategy for advanced packaging and EMS services in the AI hardware supply chain, establishing executive relationships across India and APAC.",
    tags: ["Semiconductor EMS", "Advanced Packaging", "Greenfield Capacity", "AI Supply Chain", "APAC", "OSAT"]
  },
  {
    id: "iesa",
    period: "Mar 2023 — Oct 2023",
    role: "VP of Strategy, Innovation, and Execution",
    organization: "IESA (India Electronics and Semiconductor Association)",
    location: "Bengaluru, India",
    focus: "ESDM Policy, Semiconductor Strategy & Industry Alliances",
    description: "Led strategic initiatives for India's premier ESDM industry body, collaborating with member companies to establish India as a global destination for semiconductor design and manufacturing. Served as trusted knowledge partner to Central and State Governments formulating electronics manufacturing policies and investment incentives.",
    tags: ["IESA", "ESDM", "National Policy", "Advanced Packaging", "Industry Strategy"]
  },
  {
    id: "moschip",
    period: "Apr 2021 — Oct 2022",
    role: "Vice President of Business Development — India & APAC",
    organization: "MosChip Technologies",
    location: "Bengaluru, India",
    focus: "Turnkey ASIC Design Services & Embedded Systems",
    description: "Scaled business development across India and Asia Pacific in embedded software, system-level hardware, and turnkey ASIC design services. Represented company leadership at major industry platforms including India Semicon, translating design capability into commercial tier-1 client engagements.",
    tags: ["Turnkey ASIC", "ASIC Design Services", "Embedded Software", "Business Development", "APAC"]
  },
  {
    id: "solar-apps",
    period: "Jul 2015 — Apr 2018",
    role: "Founder and CEO",
    organization: "Solar-Apps Energy Pvt. Ltd.",
    location: "Bengaluru, India",
    focus: "Renewable Technology & Clean Energy Hardware",
    description: "Founded and directed clean-tech power electronics company covering DC systems, PV, MPPT, energy storage, EPC, and PPA models. Delivered two consecutive years of 20%+ revenue growth and doubled profitability, closing privately financed commercial rooftop installations exceeding 300 kW.",
    tags: ["Clean Tech", "Power Electronics", "Storage & DC Systems", "Entrepreneurship", "PPA & EPC"]
  },
  {
    id: "synopsys",
    period: "Nov 2004 — Jul 2015",
    role: "Sr. Executive Account Manager",
    organization: "Synopsys",
    location: "Bengaluru Area, India",
    focus: "EDA Tools, RTL-to-GDSII, DFM & Emulation Platforms",
    description: "Consistently exceeded revenue targets managing global strategic accounts with design centres in India, covering EDA, RTL-to-GDSII, DFM, HLS, and ADAS emulation technologies. Built C-suite relationships across leading fabless and IDM companies, securing multi-year EDA platform agreements aligned with customer PPAS (power, performance, area, schedule) goals.",
    tags: ["Synopsys", "EDA Platforms", "RTL-to-GDSII", "DFM", "Strategic Accounts", "PPAS Optimization"]
  },
  {
    id: "infinite",
    period: "Dec 2003 — Sep 2004",
    role: "Business Development Manager",
    organization: "Infinite Computer Solutions",
    location: "Dallas, Texas, United States",
    focus: "ITES, Enterprise Architecture & Global Services",
    description: "Managed enterprise technology business development covering ITES, ERP systems, Microsoft .NET, and global service practices. Successfully closed first-of-kind municipal and commercial contracts, including major ERP engagements exceeding $400,000.",
    tags: ["Enterprise ERP", "Business Development", "ITES", "Global Services", "Dallas"]
  },
  {
    id: "quicklogic",
    period: "Dec 2000 — Oct 2001",
    role: "Product Marketing Manager",
    organization: "QuickLogic Corporation",
    location: "Dallas-Fort Worth Metroplex, Texas",
    focus: "Ultra-Low Power FPGA, SRAM & TI DSP Interface",
    description: "Directed product marketing for low-power FPGA, SRAM, and DSP co-processing devices. Architected and built a hardware prototype evaluation board interfacing with Texas Instruments DSPs, and created comprehensive technical sales enablement collateral for North American sales and FAE teams.",
    tags: ["FPGA", "TI DSP", "Hardware Prototype", "Product Marketing", "Silicon Enablement"]
  },
  {
    id: "texas-instruments",
    period: "Jul 1995 — Dec 2000",
    role: "Product Marketing Engineer",
    organization: "Texas Instruments",
    location: "Dallas, Texas, United States",
    focus: "GSM DSPs, Mixed-Signal & Analog Power Management",
    description: "Ramped Ericsson GSM DSP + microcontroller ICs from prototype to volume production, managing ATE test coverage, DPPM targets, and fab yield improvement programmes. Led failure analysis and product engineering for Motorola and Qualcomm analog and PMIC ICs, reducing field return rates via structured FIT analysis and root-cause reviews.",
    tags: ["Texas Instruments", "DSP Ramping", "GSM Silicon", "Yield Engineering", "Analog & PMIC", "ATE Testing"]
  }
];
