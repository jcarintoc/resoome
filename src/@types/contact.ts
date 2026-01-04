import { z } from "zod";

export const contactSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  country: z.string(),
  city: z.string(),
  postal: z.string(),
});
