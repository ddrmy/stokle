import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("endereço de email inválido"),
  password: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
});
