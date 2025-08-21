import { NextResponse, NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
  // matcher: ["/((?!api|_next|static|login|favicon.ico).*)"],
  // Inclui tudo (com .*)
  // Exceto:
  // /api
  // /_next (arquivos do Next.js)
  // /static
  // /login (pra deixar a página de login acessível)
  // /favicon.ico
};
