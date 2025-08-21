import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
});

export type CategorySchema = z.infer<typeof categorySchema>;
