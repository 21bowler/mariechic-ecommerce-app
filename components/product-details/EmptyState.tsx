import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="max-w-xl mx-auto h-[70vh] rounded-xl p-8 flex items-center justify-center">
      <div className="text-center">
        {/* Search X Icon */}
        <div className="border border-border/50 bg-card p-8 rounded-full inline-flex justify-center">
          <SearchX size={80} className="stroke-primary" />
        </div>
        <h1 className="text-3xl font-serif pt-10 pb-4 font-semibold">
          Product not found
        </h1>
        <p className="max-w-sm text-muted-foreground pb-10">
          We couldn't find a product matching this link. It may have been
          removed or the ID is incorrect.
        </p>
        <Button size="lg">
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
