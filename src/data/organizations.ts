export interface LeadershipRole {
  organization: string;
  role: string;
  focus: string;
  nature: "Leadership / Board" | "Volunteer / Ecosystem Advisory" | "Academic Board";
  description: string;
  sourceNote: string;
}

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    organization: "iMAPS India Chapter",
    role: "Co-Chair & Board Member",
    focus: "Advanced Packaging, Microelectronics Assembly, and Packaging Standards",
    nature: "Leadership / Board",
    description: "Co-leading the Indian chapter of the International Microelectronics Assembly and Packaging Society (iMAPS). Galvanizing industry, research institutions, and equipment suppliers around standardizing 2.5D/3D packaging practices and organizing technical symposia.",
    sourceNote: "Verified leadership role in public professional profile."
  },
  {
    organization: "India Semiconductor Mission (ISM)",
    role: "Volunteer Contributor & Ecosystem Advisor",
    focus: "Sovereign Semiconductor Capability & Advanced Packaging Advisory",
    nature: "Volunteer / Ecosystem Advisory",
    description: "Actively contributing strategic perspective, industry advisory, and cross-border insights to support India's mission of building domestic semiconductor fabs, ATMP (Assembly, Testing, Marking, and Packaging), and OSAT facilities.",
    sourceNote: "Verified volunteer/ecosystem contribution (not direct government employment)."
  },
  {
    organization: "Gujarat Technological University (GTU)",
    role: "Member, Board of Semiconductor Technologies",
    focus: "Workforce Development & Microelectronics Engineering Curricula",
    nature: "Academic Board",
    description: "Advising university leadership and academic boards on engineering syllabi, practical lab infrastructures, and workforce training programs tailored to supply qualified engineers to emerging semiconductor plants across India.",
    sourceNote: "Verified institutional advisory appointment."
  },
  {
    organization: "IEEE (Institute of Electrical and Electronics Engineers)",
    role: "Senior Member & IEEE CertifAIed Assessor",
    focus: "Applied Engineering Ethics, System Integrity, & Microelectronics Standards",
    nature: "Leadership / Board",
    description: "Senior IEEE membership spanning decades of contribution to microelectronics, semiconductor engineering forums, and contemporary AI hardware/ethics certification.",
    sourceNote: "Verified IEEE Senior Member & CertifAIed assessor credential."
  }
];
