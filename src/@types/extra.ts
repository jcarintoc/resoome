import z from "zod";

export const extraSchema = z.object({
  laguages: z.array(z.string()),
  laboratory: z.array(z.string()),
  interest: z.array(z.string()),
});
