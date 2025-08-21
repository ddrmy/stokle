"use client";

import { Category } from "../../../../../prisma/";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  if (categories.length === 0) {
    return <p className="mt-4 text-gray-600">Nenhuma categoria cadastrada.</p>;
  }

  return (
    <ul className="mt-4 space-y-2">
      {categories.map((c) => (
        <li key={c.id} className="p-3 border rounded bg-white shadow">
          {c.name}
        </li>
      ))}
    </ul>
  );
}
