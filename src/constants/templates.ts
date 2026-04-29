import type { TemplateType } from "@/hooks/use-template";
import harvardImg from "@/assets/templates-images/harvard.webp";
import ats1Img from "@/assets/templates-images/ats-1.webp";
import ats2Img from "@/assets/templates-images/ats-2.webp";

export const TEMPLATES: {
  id: TemplateType;
  name: string;
  description: string;
  image: string;
}[] = [
  {
    id: "harvard",
    name: "Harvard",
    description: "Classic academic template",
    image: harvardImg,
  },
  {
    id: "ats-1",
    name: "ATS-1",
    description: "Classic professional ATS friendly",
    image: ats1Img,
  },
  {
    id: "ats-2",
    name: "ATS-2",
    description: "Modern left-heavy (Bloomberg style)",
    image: ats2Img,
  },
];
