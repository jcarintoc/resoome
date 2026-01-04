import { z } from "zod";
import { contactSchema } from "./contact";
import { educationSchema } from "./education";
import { experienceSchema } from "./experience";
import { leadershipAndActivitiesSchema } from "./leadership-and-activities";
import { extraSchema } from "./extra";

// schema for the resume
export const resumeSchema = z.object({
  contact: contactSchema,
  education: z.array(educationSchema),
  experience: z.array(experienceSchema),
  leadership: z.array(leadershipAndActivitiesSchema),
  skills: z.array(z.string()),
  certification: z.array(z.string()),
  extra: z.array(extraSchema),
});

export type ResumeValues = z.infer<typeof resumeSchema>;
