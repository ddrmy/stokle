import { redirect } from "next/navigation";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}

        <Toaster theme="system" richColors />
      </body>
    </html>
  );
}
