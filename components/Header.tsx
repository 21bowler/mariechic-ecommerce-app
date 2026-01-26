"use client";

import { Menu, X, User, Heart, ShoppingBasket, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Bags", href: "/shop?category=bags" },
  { label: "Perfumes", href: "/shop?category=perfumes" },
];

const Header = () => {
  const pathname = usePathname();

  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky glass top-0 z-50 border-b border-border/50 overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20 min-w-0">
          {/* mobile menu button*/}
          <button
            className="lg:hidden cursor-pointer p-2 transition-colors duration-200 hover:bg-gold/50 rounded-md shrink-0"
            aria-label="Open menu"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo*/}
          <Link href="/" className="min-w-0">
            <h1 className="text-xl lg:text-2xl font-semibold tracking-tight truncate">
              <span className="text-primary">Marie</span>
              <span className="text-foreground">Chic</span>
            </h1>
          </Link>

          {/* Desktop Navigation*/}
          <nav
            className="hidden lg:flex items-center gap-8
          "
          >
            {navLinks.map(
              ({ label, href }: { label: string; href: string }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary",
                    pathname === href
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>

          {/* Action Buttons*/}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0 mr-1">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart size={20} />
            </Button>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User size={20} />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingBasket size={20} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-medium translate-x-1/4 -translate-y-1/4"
                >
                  {totalItems}
                </motion.span>
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 border-t border-border/50 bg-background overflow-x-clip">
          <nav className="container py-4 space-y-2">
            {navLinks.map(
              ({ label, href }: { label: string; href: string }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "block py-2 text-sm font-medium tracking-wide uppercase transition-colors",
                    pathname === href
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
