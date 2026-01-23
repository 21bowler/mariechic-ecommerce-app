"use client";

import { motion } from "motion/react";
import React from "react";
import { Product } from "@/lib/dummy-products";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { calculateDiscount, cn, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const discount = calculateDiscount(product.originalPrice, product.price);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-card mb-3">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-foreground text-background text-[10px] uppercase tracking-wider">
                New
              </Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-gold text-foreground text-[10px] uppercase tracking-wider">
                Best Seller
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-primary text-primary-foreground text-[10px]">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Actions*/}
          <motion.div
            initial={false}
            className="absolute bottom-3 left-3 right-3 flex gap-2"
          >
            <Button
              variant="secondary"
              className="flex-1 bg-background/90 backdrop-blur-sm hover:bg-background"
            >
              <ShoppingBasket size={16} />
              Add to Bag
            </Button>
            {/* Add to the favourites button add below */}
          </motion.div>

          {/*  Quick View Eye icon below / functionality*/}
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.brand}
          </p>
          <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              {formatPrice(product.price as number)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice as number)}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={cn(
                    "w-3 h-3",
                    i < Math.floor(product.rating)
                      ? "text-gold fill-gold"
                      : "text-muted fill-muted",
                  )}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
export default ProductCard;
