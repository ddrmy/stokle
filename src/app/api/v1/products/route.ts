import { NextResponse } from "next/server";
import { getAllProducts } from "@/services/product/productService";

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}
