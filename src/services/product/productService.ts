import prisma from "@/lib/prisma";
import { Product } from "@/types/product";

export async function getAllProducts(): Promise<Product[]> {
  return prisma.product.findMany({
    include: { category: true }, // ⚡ aqui inclui a categoria
  });
}

export async function getProductById(id: string): Promise<Product | null> {
  return prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
}

export async function createProduct(data: {
  description: string;
  color: string;
  categoryId: string;
}): Promise<Product> {
  return prisma.product.create({ data, include: { category: true } });
}
