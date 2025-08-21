/*
  Warnings:

  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "color",
DROP COLUMN "description",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Produto sem nome',
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "categoryId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
