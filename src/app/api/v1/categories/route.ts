import { NextResponse } from "next/server";
import { createCategory } from "@/services/category/categoryService";

export async function POST(request: Request) {
  const body = await request.json();

  const category = await createCategory(body);

  return NextResponse.json(category);
}
