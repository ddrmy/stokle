import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { getAllProducts } from "@/app/services/productService";

const prisma = new PrismaClient();

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}
