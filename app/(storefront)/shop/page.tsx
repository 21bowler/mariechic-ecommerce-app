import FilterSidebar from "@/components/shop/FilterSidebar";
import SortSelector from "@/components/shop/SortSelector";
import ProductGrid from "@/components/shop/ProductGrid";
import { getProducts } from "@/lib/shop-products";
import type { Metadata } from "next";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(props: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const searchParams = await props.searchParams;

  return {
    title: searchParams.category
      ? `Shop | ${searchParams.category} Products`
      : "Shop Products",
    description: "Buy Quality Products at the Best Prices.",
  };
}

const ShopPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;

  const gridCols = Number(searchParams.grid) || 3;

  const products = await getProducts({
    category: searchParams.category as string,
    filter: searchParams.filter as string,
    brands: (searchParams.brand as string)?.split(","),
    maxPrice: Number(searchParams.maxPrice),
    minPrice: Number(searchParams.minPrice),
    sort: searchParams.sort as string,
  });

  return (
    <section>
      {/* Page Header */}
      <div className="py-8 lg:py-12 bg-card/50 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl mb-2">Shop All</h1>
          <p className="text-muted-foreground">
            {products.length} Total Products
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24">
                <h3 className="text-lg mb-6">Filters</h3>
                <FilterSidebar />
              </div>
            </aside>

            {/* Main Content Section */}
            <div className="flex-1">
              {/* Toolbar */}
              <SortSelector />

              {/* Products */}
              <ProductGrid products={products} gridCols={gridCols} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
