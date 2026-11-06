export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  experienceYears: number;
  linkedin: string;
  location: string;
  status: string;
}

export const PROFILE: ProfileData = {
  name: "Sharat Kaul",
  role: "Semiconductor Technology Leader & Advanced Packaging Strategist",
  tagline: "Shaping what comes after the chip.",
  summary: "30+ years bridging silicon physics, heterogeneous packaging, OSAT manufacturing, and global semiconductor ecosystems.",
  experienceYears: 30,
  linkedin: "https://www.linkedin.com/in/sharatkaul/",
  location: "Dallas, TX & Bengaluru, India",
  status: "Advising governments, foundry consortia, and advanced packaging initiatives"
};
