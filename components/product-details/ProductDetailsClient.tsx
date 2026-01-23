"use client";

import Image from "next/image";
import {
  ChevronLeft,
  Heart,
  Minus,
  Plus,
  RefreshCw,
  Share2,
  Shield,
  ShoppingBasket,
  Truck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/dummy-products";
import { useState } from "react";
import { calculateDiscount, cn, formatPrice } from "@/lib/utils";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";

const ProductDetailsClient = ({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) => {
  const router = useRouter();

  // Hooks
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const discount = calculateDiscount(product.originalPrice, product.price);

  return (
    // Layout Wrapper
    <div className="container-base overflow-x-hidden">
      <nav aria-label="Product navigation" className="py-4">
        {/* Breadcrumb */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={16} />
          Back
        </button>
      </nav>

      {/* Product Section */}
      <article
        aria-labelledby="Product-title"
        className="grid lg:grid-cols-2 gap-8 lg:gap-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Images */}
          <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-card mb-4">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "w-20 h-20 shrink-0 rounded-lg relative aspect-3/4 overflow-hidden border-2 transition-colors",
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent",
                  )}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-16 lg:py-4"
        >
          {/* Badges */}
          <div className="flex gap-2 mb-4">
            {product.isNew && (
              <Badge className="bg-foreground text-background">New</Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-gold text-foreground">New</Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-primary text-primary-foreground">
                -{discount}%
              </Badge>
            )}
          </div>

          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
            {product.brand}
          </p>
          <h1 className="text-3xl lg:text-4xl font-serif mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={cn(
                    "w-4 h-4",
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
            <span className="text-muted-foreground text-sm">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-semibold text-3xl">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-8">{product.description}</p>

          {/* Stock */}
          <p className="text-sm mb-6">
            <span className="text-muted-foreground">Availability: </span>
            {product.stock ? (
              <span className="text-green-600 font-medium">In Stock</span>
            ) : (
              <span className="text-destructive font-medium">Out of Stock</span>
            )}
          </p>

          {/* Quantity and Add to cart */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center border border-border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setQuantity(Math.min(product.stock, quantity + 1))
                }
                disabled={quantity >= product.stock}
              >
                <Plus size={16} />
              </Button>
            </div>
            <Button
              size="lg"
              className="w-full sm:flex-1"
              disabled={product.stock === 0}
            >
              <ShoppingBasket size={16} />
              Add to Basket
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart
                size={18}
                className={cn(isLiked && "fill-primary text-primary")}
              />
            </Button>

            {/*TODO: Add functionality later */}
            <Button variant="outline" size="lg">
              <Share2 size={18} />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
            <div className="text-center">
              <Truck size={20} className="mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Free Shipping</p>
            </div>
            <div className="text-center">
              <Shield size={20} className="mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Secure Payment</p>
            </div>
            <div className="text-center">
              <RefreshCw size={20} className="mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Easy Returns</p>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm mb-2">Tags: </p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="capitalize">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </article>

      {/* Product Info Tabs */}
      <section className="pb-16">
        <Tabs defaultValue="description" className="w-full min-w-0">
          <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 overflow-x-auto">
            <TabsTrigger
              value="description"
              className="shrink-0 rounded-none border-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="shrink-0 rounded-none border-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="shrink-0 rounded-none border-0 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Reviews ({product.reviews})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6 min-w-0">
            <p className="text-muted-foreground max-w-2xl wrap-break-word">
              {product.description}
            </p>
          </TabsContent>
          <TabsContent value="details" className="pt-6">
            <dl className="grid grid-cols-2 gap-4 max-w-md">
              <dt className="text-muted-foreground">Brand</dt>
              <dd className="font-medium">{product.brand}</dd>
              <dt className="text-muted-foreground">Category</dt>
              <dd className="font-medium capitalize">{product.category}</dd>
              <dt className="text-muted-foreground">SKU</dt>
              <dd className="font-medium uppercase">{product.id}</dd>
            </dl>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <p className="text-muted-foreground">
              Customer reviews coming soon.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pb-16">
          <h2 className="font-serif text-2xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailsClient;
