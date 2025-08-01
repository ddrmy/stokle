"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: (ctx) => {
          router.replace("/");
        },
      },
    });
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-900 text-white p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link
            href="/dashboard"
            className="text-white no-underline hover:underline"
          >
            Home
          </Link>
          <Link
            href="/dashboard/profile"
            className="text-white no-underline hover:underline"
          >
            Profile
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-white no-underline hover:underline"
          >
            Settings
          </Link>
          <Button
            onClick={signOut}
            className="bg-transparent"
            asChild
            variant={"outline"}
          >
            <Link href="">Sair</Link>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-8">{children}</main>
    </div>
  );
}
