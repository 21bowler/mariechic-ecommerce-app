import { cn } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/lib/dummy-products";
import Link from "next/link";

interface ProductGridProps {
  products: Product[];
  gridCols: number;
}

const ProductGrid = ({ products, gridCols }: ProductGridProps) => {
  return (
    <div>
      {products.length > 0 ? (
        <div
          className={cn(
            "grid gap-4 lg:gap-6",
            gridCols === 2 && "grid-cols-2",
            gridCols === 3 && "grid-cols-2 md:grid-cols-3",
            gridCols === 4 && "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          )}
        >
          {products.map((product, index: number) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground mb-4">
            No products found matching your criteria{" "}
          </p>
          <Link href="/shop" className={buttonVariants({ variant: "outline" })}>
            Clear Filters
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
