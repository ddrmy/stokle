// app/api/login/route.ts

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  // Simulação simples (ideal: consultar banco)
  const isValid = email === "admin@email.com" && password === "123";

  console.log("Login attempt:", { email, password, isValid });

  if (!isValid) {
    return NextResponse.json(
      { error: "Credenciais inválidas" },
      { status: 401 }
    );
  }

  // Seta cookie
  const cookieStore = cookies();
  cookieStore.("auth-token", "token-fake", {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return NextResponse.json({ success: true });
}
