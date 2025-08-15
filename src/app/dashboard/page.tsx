import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Category } from "@/app/types/category";
import { useState } from "react";

const [categories, setCategories] = useState<Category[]>([]);

export default async function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Bem-vindo ao seu painel de controle!</p>
    </div>
  );
}
