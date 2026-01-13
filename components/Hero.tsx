import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-img.png"
          alt="Luxury fashion bags hero image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative px-4  z-10">
        <div className="max-w-2xl">
          <div>
            <span className="inline-block text-sm uppercase tracking-[0.3em] text-primary mb-4">
              New Collection {new Date().getFullYear()}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight mb-6">
            Elegance <br /> <span className="text-primary">Redefined</span>
          </h1>
          <p className="text-lg mb-8 text-muted-foreground max-w-md">
            Discover our curated collection of luxury bags and premium
            fragrances, crafted for the modern woman who embraces timeless
            style.{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/shop">
                SHOP NOW
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/shop?category=perfumes">EXPLORE FRAGRANCES</Link>
            </Button>
          </div>

          {/* stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border/50">
            {[
              { value: "100+", label: "Happy Customers" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-2xl font-serif font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
