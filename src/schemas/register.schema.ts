import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.email("endereço de email inválido"),
    password: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],

    when(payload) {
      return registerSchema
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success;
    },
  });
