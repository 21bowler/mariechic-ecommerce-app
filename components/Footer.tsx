import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Bags", href: "/shop?category=bags" },
    { label: "Perfumes", href: "/shop?category=perfumes" },
    { label: "New Arrivals", href: "/shop?filter=new" },
    { label: "Best Seller", href: "/shop?filter=bestseller" },
  ],
  help: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQS", href: "/faq" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns", href: "/returns" },
  ],
  about: [{ label: "Our Story", href: "/about" }],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/*  Newsletter section */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="text-2xl mb-3">Join Our World</h3>
          <p className="text-muted-foreground mb-3">
            Subscribe for exclusive offers, new arrivals and styling
            inspiration.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </form>
        </div>

        {/* Links Grid format*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-xl font-semibold">
                <span className="text-primary">Marie</span>
                <span className="text-foreground">Chic</span>
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Curated luxury for the modern woman. Discover timeless elegance in
              every piece.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Mail size={18} />
              </Button>
            </div>
          </div>

          {/*  Shop Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Help
            </h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar*/}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
