export interface RecognitionItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: "Professional Credential" | "Industry Recognition" | "Clean Energy Leadership";
  description: string;
  verificationStatus: "Verified from Public Profile";
}

export const RECOGNITIONS: RecognitionItem[] = [
  {
    id: "ieee-cert",
    title: "IEEE CertifAIed Assessor",
    issuer: "IEEE Standards Association",
    year: "2023",
    category: "Professional Credential",
    description: "Accredited assessor under the IEEE CertifAIed program for autonomous and intelligent systems, evaluating transparency, safety, and ethical governance of hardware/software systems.",
    verificationStatus: "Verified from Public Profile"
  },
  {
    id: "ieee-senior",
    title: "Senior Member",
    issuer: "IEEE (Institute of Electrical and Electronics Engineers)",
    year: "Longstanding",
    category: "Professional Credential",
    description: "Elevation to Senior Member grade in recognition of significant professional maturity and extensive contributions to the field of electrical engineering and microelectronics.",
    verificationStatus: "Verified from Public Profile"
  },
  {
    id: "solar-csr",
    title: "Karnataka Solar CSR Award",
    issuer: "Government of Karnataka / Energy Forum",
    year: "2018",
    category: "Clean Energy Leadership",
    description: "Awarded during tenure leading Solar-Apps Energy for delivering decentralized solar infrastructure and clean renewable energy access to regional underserved facilities.",
    verificationStatus: "Verified from Public Profile"
  }
];
