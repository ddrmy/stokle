// src/app/dashboard/_components/Aside.tsx
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Aside() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(true);

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.replace("/"),
      },
    });
  }

  return (
    <aside className="w-60 bg-gray-900 text-white p-8 flex flex-col gap-6 h-screen sticky top-0 overflow-y-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="text-white hover:underline">
          Home
        </Link>
        <Link href="/dashboard/profile" className="text-white hover:underline">
          Profile
        </Link>
        <Link href="/dashboard/settings" className="text-white hover:underline">
          Settings
        </Link>

        <div>
          <button
            className="text-white hover:underline w-full text-left"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Estoque ▼
          </button>
          {menuOpen && (
            <div className="flex flex-col ml-4 mt-2 gap-2">
              <Link
                href="/dashboard/products"
                className="text-white hover:underline"
              >
                Produtos
              </Link>
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>{" "}
              <Link
                href="/dashboard/categories"
                className="text-white hover:underline"
              >
                Categorias
              </Link>
            </div>
          )}
          ,
          <Link
            href="/dashboard/categories"
            className="text-white hover:underline"
          >
            Categorias
          </Link>{" "}
          <Link
            href="/dashboard/categories"
            className="text-white hover:underline"
          >
            Categorias
          </Link>{" "}
          <Link
            href="/dashboard/categories"
            className="text-white hover:underline"
          >
            Categorias
          </Link>{" "}
          <Link
            href="/dashboard/categories"
            className="text-white hover:underline"
          >
            Categorias
          </Link>{" "}
          <Link
            href="/dashboard/categories"
            className="text-white hover:underline"
          >
            Categorias
          </Link>{" "}
          <Link
            href="/dashboard/categories"
            className="text-white hover:underline"
          >
            Categorias
          </Link>{" "}
          <Link
            href="/dashboard/categories"
            className="text-white hover:underline"
          >
            Categorias
          </Link>
        </div>
      </nav>

      <Button onClick={signOut} className="bg-transparent" variant="outline">
        Sair
      </Button>
    </aside>
  );
}
