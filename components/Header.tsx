"use client";

import { Menu, X, User, Heart, ShoppingBasket, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Bags", href: "/shop?category=bags" },
  { label: "Perfumes", href: "/shop?category=perfumes" },
];

const Header = () => {
  const pathname = usePathname();
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
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button className="hidden sm:flex">
              <Search size={20} />
            </button>
            <button className="hidden sm:flex">
              <Heart size={20} />
            </button>
            <Link href="/account">
              <button>
                <User size={20} />
              </button>
            </Link>
            <button
              className="relative p-1 cursor-pointer"
              aria-label="Open cart"
              type="button"
            >
              <ShoppingBasket size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-medium">
                4
              </span>
            </button>
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
