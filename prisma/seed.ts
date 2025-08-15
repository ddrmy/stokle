import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criar categorias
  const tinta = await prisma.category.create({
    data: { name: "Tinta" },
  });

  const saco = await prisma.category.create({
    data: { name: "Saco" },
  });

  // Criar produtos
  await prisma.product.createMany({
    data: [
      { description: "Base D'água", color: "Branca", categoryId: tinta.id },
      { description: "Base D'água", color: "Amarela", categoryId: tinta.id },
      { description: "Microesfera", color: "Branca", categoryId: saco.id },
      { description: "Microesfera", color: "Amarela", categoryId: saco.id },
    ],
  });
}

main()
  .then(() => console.log("Seed executado com sucesso!"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
