export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  discipline: string;
  context: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "smu",
    degree: "Master of Business Administration (MBA)",
    institution: "SMU Cox School of Business (Southern Methodist University)",
    location: "Dallas, Texas, USA",
    discipline: "Strategy, Finance & Executive Leadership",
    context: "Advanced executive business frameworks bridging deep technical hardware engineering with corporate strategy, venture scaling, and capital allocation."
  },
  {
    id: "utd",
    degree: "Bachelor of Science Electrical Engineering (BSEE)",
    institution: "University of Texas at Dallas",
    location: "Richardson, Texas, USA",
    discipline: "Electrical & Microelectronics Engineering",
    context: "Rigorous focus on solid-state physics, integrated circuit design, semiconductor device fabrication, and digital signal processing."
  },
  {
    id: "bu",
    degree: "Bachelor of Science / Engineering",
    institution: "Bangalore University / MES College",
    location: "Bengaluru, Karnataka, India",
    discipline: "Electrical & Electronics Engineering",
    context: "Foundational engineering principles, circuit theory, electromagnetic mathematics, and electronic device physics in India's semiconductor hub."
  }
];
