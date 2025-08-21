import prisma from "@/lib/prisma";
import { CategorySchema } from "@/schemas/category.schema";

export async function createCategory(data: CategorySchema) {
  return await prisma.category.create({ data });
}
