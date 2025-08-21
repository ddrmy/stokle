import { getAllCategories } from "@/services/category/categoryService";
import CategoryList from "./_components/CategoryList";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categorias</h1>
      <Link
        href="/dashboard/categories/new"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Nova Categoria
      </Link>

      <CategoryList categories={categories} />
    </div>
  );
}
