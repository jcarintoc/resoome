import type { TemplateType } from "@/hooks/use-template";

export const TEMPLATES: {
  id: TemplateType;
  name: string;
  description: string;
}[] = [
  {
    id: "harvard",
    name: "Harvard",
    description: "Classic academic template",
  },
  {
    id: "ats-1",
    name: "ATS-1",
    description: "Classic professional ATS friendly",
  },
  {
    id: "ats-2",
    name: "ATS-2",
    description: "Modern left-heavy (Bloomberg style)",
  },
];
