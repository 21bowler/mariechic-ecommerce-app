"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { categories } from "@/lib/dummy-products";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-primary tracking-[0.2em] uppercase mb-2 block">
            Collections
          </span>
          <h2 className="text-3xl lg:text-4xl mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our carefully curated collections designed for every
            occasion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Link
                href={`/shop?category=${category.id}`}
                className="group relative block aspect-4/3 rounded-xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <span className="text-primary-foreground/80 text-xs uppercase tracking-wider mb-1">
                    {category.count} Products
                  </span>
                  <h3 className="text-2xl lg:text-3xl text-primary-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mb-4 max-w-xs">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary-foreground font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Explore Collections</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
