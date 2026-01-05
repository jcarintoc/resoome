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
  title: z.string(),
  organization: z.string(),
  country: z.string(),
  city: z.string(),
  startMonth: z.string(),
  startYear: z.number(),
  endMonth: z.string().nullable(),
  endYear: z.number().nullable(),
  currentlyWorking: z.boolean(),
  experience: z.array(z.string()),
});
