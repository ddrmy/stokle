// src/app/dashboard/page.tsx
import { getAllProducts } from "@/services/product/productService";
import DashboardClient from "./_components/dashboardClient";

export default async function DashboardPage() {
  const products = await getAllProducts(); // Server Component

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-6">Bem-vindo ao seu painel de controle!</p>
      <DashboardClient products={products} />
      <DashboardClient products={products} />
      <DashboardClient products={products} />
      <DashboardClient products={products} />
      <DashboardClient products={products} />
      <DashboardClient products={products} />
      <DashboardClient products={products} />
      <DashboardClient products={products} />
    </div>
  );
}
