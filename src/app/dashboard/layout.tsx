// src/app/dashboard/layout.tsx
import Aside from "./_components/Aside";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Aside />
      <main className="flex-1 p-8 bg-gray-100 overflow-auto max-h-screen">
        {children}
      </main>
    </div>
  );
}
