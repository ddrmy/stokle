"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

import { categorySchema, CategorySchema } from "@/schemas/category.schema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CategoryForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<CategorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: "" },
  });

  async function onSubmit(values: CategorySchema) {
    let toastId: string | number | undefined;

    try {
      setLoading(true);

      await fetch("/api/categories", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Categoria criada com sucesso!", {
        id: toastId,
      });

      router.push("/dashboard/categories");
      router.refresh();
    } catch (error) {
      toast.error("Erro ao criar categoria", {
        id: toastId,
        description: "Tente novamente mais tarde",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da categoria</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Eletrônicos" {...field} />
              </FormControl>
              <FormDescription>
                O nome que será exibido nos produtos
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </Form>
  );
}
