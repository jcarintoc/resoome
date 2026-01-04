import z from "zod";

export type tabs =
  | "Contact"
  | "Education"
  | "Experience"
  | "Extra"
  | "Leadership & Activities"
  | "Skills"
  | "Certification";

export const templateSchema = z.object({
  jobTitle: z.string(),
  company: z.string(),
  country: z.string(),
  city: z.string(),
  startMonth: z.date(),
  startYear: z.date(),
  endMonth: z.date(),
  endYear: z.date(),
  currentlyWorking: z.boolean(),
  experience: z.array(z.string()),
});
