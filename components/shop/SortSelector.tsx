"use client";

// import { useState } from "react";
import { Grid, LayoutGrid, SlidersHorizontal, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import FilterSidebar from "@/components/shop/FilterSidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/lib/dummy-products";

type SortOptions = "newest" | "price-low" | "price-high" | "rating";

const sortOptions: { value: SortOptions; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const SortSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // React Hooks
  // const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);
  // Get grid columns from the parameter
  const gridCols = Number(searchParams.get("grid")) || 3;
  // const [sortBy, setSortBy] = useState<SortOptions>("newest");

  // Derive from search Params.
  const categoryParam = searchParams.get("category");
  const filterParam = searchParams.get("filter");
  const brandParam = searchParams.get("brand")?.split(",") || [];
  const sortBy = searchParams.get("sort") || "newest";

  // Calculate count locally
  const activeFiltersCount =
    (categoryParam ? 1 : 0) + (filterParam ? 1 : 0) + brandParam.length;

  // Helper for updating URL
  const updateUrl = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);

    // Triggers server-side rerender of data.
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const removeBrand = (brand: string) => {
    const newBrand = brandParam.filter((b) => b !== brand);
    updateUrl("brand", newBrand.length > 0 ? newBrand.join(",") : null);
  };

  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {/*  Mobile filter button with count */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden">
            Filters
            <SlidersHorizontal size={16} className="mr-2" />
            {activeFiltersCount > 0 && (
              <Badge className="ml-2 h-5 w-5 p-0 justify-center">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="">Filters</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterSidebar />
          </div>
        </SheetContent>
      </Sheet>

      {/* Active Filter Badges */}
      <div className="hidden lg:flex items-center gap-2 flex-wrap">
        {categoryParam && (
          <Badge
            variant="secondary"
            className="cursor-pointer"
            onClick={() => updateUrl("category", "")}
          >
            {categories.find((c) => c.id === categoryParam)?.name}
            <X size={14} className="ml-1" />
          </Badge>
        )}
        {brandParam.map((brand) => (
          <Badge
            variant="secondary"
            className="cursor-pointer"
            key={brand}
            onClick={() => removeBrand(brand)}
          >
            {brand}
            <X size={14} className="ml-1" />
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {/* Sort */}
        <Select
          value={sortBy}
          onValueChange={(value) => updateUrl("sort", value)}
        >
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Grid Toggle */}
        <div className="hidden md:flex items-center gap-1 border border-border rounded-md p-1">
          <Button
            variant={gridCols === 2 ? "secondary" : "ghost"}
            size="icon"
            className="w-8 h-8"
            onClick={() => updateUrl("grid", "2")}
          >
            <Grid size={16} />
          </Button>
          <Button
            variant={gridCols === 3 ? "secondary" : "ghost"}
            size="icon"
            className="w-8 h-8"
            onClick={() => updateUrl("grid", "3")}
          >
            <LayoutGrid size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SortSelector;
