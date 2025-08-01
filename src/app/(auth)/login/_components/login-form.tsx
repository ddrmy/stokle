"use client";

import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { describe } from "node:test";
import { getTranslatedErrorMessage } from "@/lib/error_messages/login-messages";

export default function LoginForm({ ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    let toastId: string | number;
    setIsLoading(true);

    try {
      const { data } = await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onRequest: (ctx) => {
            toastId = toast.loading("Entrando...");
          },
          onSuccess: async (ctx) => {
            toast.success("Bem-Vindo!", {
              id: toastId,
              description: "Redirecionando...",
            });

            try {
              await new Promise((resolve) => setTimeout(resolve, 1500));
              router.replace("/dashboard");
            } catch (err) {
              console.error("Erro no redirecionamento: ", err);
              toast.error("Erro ao redirecionar", {
                description: "Tente novamente mais tarde.",
              });
            }
          },
          onError: (ctx) => {
            toast.error("Erro ao logar", {
              id: toastId,
              description: getTranslatedErrorMessage(ctx.error.message),
              action: {
                label: "Fechar",
                onClick: () => {},
              },
            });
          },
        }
      );
    } catch (err) {
      toast.error("Erro inesperado", {
        description: "Tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    // coloque um espaçamento entre os inputs com tailwindcss
    <div className="w-2/4">
      <Form {...formLogin}>
        <form onSubmit={formLogin.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={formLogin.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormDescription>Insira seu endereço de email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formLogin.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="******"
                      {...field}
                      className="pr-8"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute pb-8 pl-2 place-self-end right-2 -translate-y-1/2 text-gray-500"
                      tabIndex={-1} //evita foco no botão ao tabular
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormDescription>Insira sua senha</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center mt-4">
            <Button disabled={isLoading} type="submit">
              Entrar
            </Button>
            <Button
              disabled={isLoading}
              asChild
              variant={"outline"}
              type="button"
            >
              <Link href="/register">Cadastre-se</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
