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

export default function LoginForm({ ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {}

  console.log("formLogin", formLogin);
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
            <Button type="submit">Entrar</Button>
            <Button asChild variant={"outline"} type="button">
              <Link href="/register">Cadastre-se</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
