import prisma from "@/lib/prisma";

export async function getAllProducts() {
  return prisma.product.findMany({
    include: { category: true },
  });
}

export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
}

// Futuro: criar, editar, excluir produtos
export async function createProduct(data: {
  description: string;
  color: string;
  categoryId: string;
}) {
  return prisma.product.create({ data });
}
