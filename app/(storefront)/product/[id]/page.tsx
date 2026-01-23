import { getProductById, getProductsByCategory } from "@/lib/dummy-products";
import ProductDetailsClient from "@/components/product-details/ProductDetailsClient";
import EmptyState from "@/components/product-details/EmptyState";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { id } = await params;

  const product = id ? getProductById(id) : null;

  if (!product) {
    return <EmptyState />;
  }

  // Getting 4 products by category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductDetailsClient product={product} relatedProducts={relatedProducts} />
  );
};

export default ProductDetailsPage;
