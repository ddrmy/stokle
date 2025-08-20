import { Category } from "./category";

export interface Product {
  id: string;
  description: string;
  color: string;
  categoryId: string;
  category: Category; // Relação com categoria
}
