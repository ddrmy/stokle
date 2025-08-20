// src/app/dashboard/_components/dashboardClient.tsx
"use client";
import { Product } from "@/types/product";

export default function DashboardClient({ products }: { products: Product[] }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.description} - {p.color} - {p.category?.name || "Sem categoria"}
        </li>
      ))}
    </ul>
  );
}
