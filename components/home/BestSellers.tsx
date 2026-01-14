import { getBestSellers } from "@/lib/dummy-products";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "../ProductCard";

const BestSellers = () => {
  const products = getBestSellers();

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-primary mb-2 block">
              Trending now
            </span>
            <h2 className="text-3xl lg:text-4xl">Best Sellers</h2>
            <p className="text-muted-foreground mt-2">
              Our most loved pieces, chosen by you
            </p>
          </div>
          <Button variant="ghost" className="group" asChild>
            <Link href="/shop?filter=bestseller">
              <span>View All</span>
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.slice(0, 4).map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
