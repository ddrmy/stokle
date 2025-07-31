"use client";

import { Input } from "@/components/ui/input";
import { registerSchema } from "@/schemas/register.schema";
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
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const router = useRouter();

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const { data, error } = await authClient.signUp.email(
      {
        name: values.name,
        email: values.email,
        password: values.password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: (ctx) => {
          console.log("CONECTANDO AO BANCO", ctx);
        },
        onSuccess: (ctx) => {
          console.log("CADASTRADO: ", ctx);
          router.replace("/dashboard");
        },
        onError: (ctx) => {
          console.log("ERRO AO CRIAR CONTA", ctx);
        },
      }
    );
  }

  return (
    // coloque um espaçamento entre os inputs com tailwindcss
    <div className="w-2/4">
      <Form {...registerForm}>
        <form
          onSubmit={registerForm.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={registerForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Gabriel Roberti" {...field} />
                </FormControl>
                {/* <FormDescription>Insira seu endereço de email</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                {/* <FormDescription>Insira seu endereço de email</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
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
                {/* <FormDescription>Insira sua senha</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme sua senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword2 ? "text" : "password"}
                      placeholder="******"
                      {...field}
                      className="pr-8"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword2((prev) => !prev)}
                      className="absolute pb-8 pl-2 place-self-end right-2 -translate-y-1/2 text-gray-500"
                      tabIndex={-1} //evita foco no botão ao tabular
                    >
                      {showPassword2 ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </FormControl>
                {/* <FormDescription>Insira sua senha</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center mt-4">
            <Button type="submit">Registrar</Button>
            <Button asChild variant={"outline"} type="button">
              <Link href={"/login"}>Já possui uma conta?</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
