import { products } from "@/lib/dummy-products";

interface ProductFilters {
  category?: string;
  filter?: "bestseller" | "new" | string;
  brands?: string[];
  minPrice?: number;
  maxPrice?: number;
  sort?: "price-low" | "price-high" | "rating" | "newest" | string;
}

export async function getProducts(filters: ProductFilters) {
  let result = [...products];

  // Category Filter
  if (filters.category) {
    result = result.filter((product) => product.category === filters.category);
  }

  //Special Filters - For bestseller and is new
  if (filters.filter === "bestseller") {
    result = result.filter((p) => p.isBestSeller);
  } else if (filters.filter === "new") {
    result = result.filter((p) => p.isNew);
  }

  // Brand Filter
  if (filters.brands && filters.brands.length > 0) {
    result = result.filter((p) => filters.brands!.includes(p.brand));
  }

  // Price Range Filter
  const min = filters.minPrice || 0;
  const max = filters.maxPrice || 100000;
  result = result.filter((p) => p.price >= min && p.price <= max);

  // Sorting
  switch (filters.sort) {
    case "price-low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
    default:
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return result;
}
