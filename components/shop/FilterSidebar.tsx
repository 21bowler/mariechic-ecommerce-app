"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { brands, categories } from "@/lib/dummy-products";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function FilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Sync local state with URL immediately so the UI reflects the current filters
  const brandParams = searchParams.get("brand")?.split(",") || [];

  // React hooks
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 15000,
  ]);

  // Getting param values from URL
  const categoryParam = searchParams.get("category");
  const filterParam = searchParams.get("filter");

  // Custom update URL
  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);

    // Triggers server-side rerender of data.
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // keep the local state in sync if the URL changes externally (like "Clear All")
  useEffect(() => {
    setPriceRange([
      Number(searchParams.get("minPrice")) || 0,
      Number(searchParams.get("maxPrice")) || 15000,
    ]);
  }, [searchParams]);

  // Helper to update multiple params at once
  const updateUrl = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked
      ? [...brandParams, brand]
      : brandParams.filter((b) => b !== brand);

    updateUrl({ brand: newBrands.length > 0 ? newBrands.join(",") : null });
  };

  // price format to Kenyan Shillings
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const clearAllFilters = () => {
    router.push(pathname, { scroll: false });
  };

  const activeFiltersCount =
    selectedBrands.length +
    (categoryParam ? 1 : 0) +
    (filterParam ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 15000 ? 1 : 0);

  return (
    <div className="space-y-6 px-2">
      {/* Categories */}
      <div>
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilters("category", "")}
            className={cn(
              "block w-full text-left text-sm py-1 transition-colors",
              !categoryParam
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilters("category", cat.id)}
              className={cn(
                "block w-full text-left text-sm py-1 transition-colors",
                categoryParam === cat.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>
      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-3">Price Range</h4>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          // Update URL only when user lets go of the slider
          onValueCommit={(value) => {
            updateUrl({
              minPrice: value[0] > 0 ? value[0].toString() : null,
              maxPrice: value[1] < 15000 ? value[1].toString() : null,
            });
          }}
          max={15000}
          step={500}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>

      {/* Brands */}
      <div>
        <h4 className="font-medium mb-3">Brands</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <Checkbox
                checked={brandParams.includes(brand)}
                onCheckedChange={(checked) =>
                  handleBrandChange(brand, !!checked)
                }
              />
              <span className="text-muted-foreground hover:text-foreground transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button variant="outline" className="w-full" onClick={clearAllFilters}>
          Clear All Filters
        </Button>
      )}
    </div>
  );
}
