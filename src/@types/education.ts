import { z } from "zod";

export const educationSchema = z.object({
  schoolName: z.string(),
  city: z.string(),
  country: z.string(),
  program: z.string(),
  graduationMonth: z.string(),
  graduationYear: z.string(),
  showAdditionalInfo: z.boolean(),
  additionalInfo: z.object({
    gpa: z.number(),
    awards: z.string(),
    extracurricular: z.string(),
  }),
});
