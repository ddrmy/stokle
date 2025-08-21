import prisma from "@/lib/prisma";

export async function getAllCategories() {
  return await prisma.category.findMany();
}

export async function createCategory(name: string) {
  return await prisma.category.create({
    data: { name },
  });
}
