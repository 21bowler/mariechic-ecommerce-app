export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "bags" | "perfumes";
  brand: string;
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  // Bags
  {
    id: "bag-001",
    name: "Parisian Elegance Tote",
    description:
      "A timeless leather tote featuring gold-tone hardware and a spacious interior. Perfect for the modern woman who values both style and functionality.",
    price: 12500,
    originalPrice: 15000,
    category: "bags",
    brand: "Luxe Atelier",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    ],
    stock: 15,
    rating: 4.8,
    reviews: 124,
    tags: ["leather", "tote", "everyday"],
    isBestSeller: true,
  },
  {
    id: "bag-002",
    name: "Rose Quartz Crossbody",
    description:
      "Delicate blush pink crossbody bag with intricate quilted detailing and adjustable chain strap.",
    price: 8900,
    category: "bags",
    brand: "Bella Rosa",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    ],
    stock: 23,
    rating: 4.6,
    reviews: 89,
    tags: ["crossbody", "quilted", "pink"],
    isNew: true,
  },
  {
    id: "bag-003",
    name: "Midnight Clutch",
    description:
      "Sophisticated evening clutch in midnight blue velvet with crystal embellishments.",
    price: 6500,
    category: "bags",
    brand: "Noir Collection",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    ],
    stock: 8,
    rating: 4.9,
    reviews: 56,
    tags: ["clutch", "evening", "velvet"],
  },
  {
    id: "bag-004",
    name: "Caramel Bucket Bag",
    description:
      "Soft caramel leather bucket bag with drawstring closure and bohemian fringe details.",
    price: 9800,
    category: "bags",
    brand: "Luxe Atelier",
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80",
    ],
    stock: 12,
    rating: 4.7,
    reviews: 78,
    tags: ["bucket", "leather", "boho"],
    isNew: true,
  },
  {
    id: "bag-005",
    name: "Ivory Shoulder Bag",
    description:
      "Classic ivory leather shoulder bag with magnetic closure and inner zip pocket.",
    price: 7500,
    category: "bags",
    brand: "Bella Rosa",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
    stock: 18,
    rating: 4.5,
    reviews: 102,
    tags: ["shoulder", "classic", "white"],
  },
  {
    id: "bag-006",
    name: "Gold Chain Mini",
    description:
      "Petite structured handbag with golden chain handle and luxurious satin lining.",
    price: 5900,
    originalPrice: 7200,
    category: "bags",
    brand: "Noir Collection",
    images: [
      "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=800&q=80",
    ],
    stock: 25,
    rating: 4.4,
    reviews: 67,
    tags: ["mini", "chain", "structured"],
    isBestSeller: true,
  },

  // Perfumes
  {
    id: "perf-001",
    name: "Rose Petal Dreams",
    description:
      "An enchanting floral fragrance with top notes of Bulgarian rose, heart of peony, and base of white musk.",
    price: 4500,
    category: "perfumes",
    brand: "Essence de Luxe",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    ],
    stock: 45,
    rating: 4.9,
    reviews: 203,
    tags: ["floral", "rose", "feminine"],
    isBestSeller: true,
  },
  {
    id: "perf-002",
    name: "Midnight Jasmine",
    description:
      "Mysterious and sensual, featuring night-blooming jasmine with amber and sandalwood undertones.",
    price: 5200,
    category: "perfumes",
    brand: "Essence de Luxe",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
    ],
    stock: 32,
    rating: 4.7,
    reviews: 156,
    tags: ["oriental", "jasmine", "evening"],
    isNew: true,
  },
  {
    id: "perf-003",
    name: "Citrus Breeze",
    description:
      "Fresh and invigorating with bergamot, lemon verbena, and green tea accords.",
    price: 3800,
    category: "perfumes",
    brand: "Aura Scents",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
    ],
    stock: 58,
    rating: 4.5,
    reviews: 89,
    tags: ["fresh", "citrus", "daytime"],
  },
  {
    id: "perf-004",
    name: "Velvet Oud",
    description:
      "Rich and opulent with precious oud wood, Bulgarian rose, and creamy vanilla.",
    price: 7800,
    originalPrice: 9200,
    category: "perfumes",
    brand: "Essence de Luxe",
    images: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80",
    ],
    stock: 15,
    rating: 4.8,
    reviews: 134,
    tags: ["oud", "woody", "luxury"],
    isBestSeller: true,
  },
  {
    id: "perf-005",
    name: "Ocean Whisper",
    description:
      "Aquatic freshness with sea salt, water lily, and driftwood notes.",
    price: 4200,
    category: "perfumes",
    brand: "Aura Scents",
    images: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80",
    ],
    stock: 40,
    rating: 4.6,
    reviews: 78,
    tags: ["aquatic", "fresh", "unisex"],
    isNew: true,
  },
  {
    id: "perf-006",
    name: "Amber Nights",
    description:
      "Warm and seductive with amber, vanilla orchid, and golden honey.",
    price: 5800,
    category: "perfumes",
    brand: "Noir Parfum",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&q=80",
    ],
    stock: 28,
    rating: 4.9,
    reviews: 167,
    tags: ["amber", "warm", "seductive"],
  },
];

export const categories = [
  {
    id: "bags",
    name: "Bags",
    description: "Timeless elegance for every occasion",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    count: products.filter((p) => p.category === "bags").length,
  },
  {
    id: "perfumes",
    name: "Perfumes",
    description: "Signature scents that captivate",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    count: products.filter((p) => p.category === "perfumes").length,
  },
];

export const brands = [...new Set(products.map((p) => p.brand))];

export const getProductById = (id: string) => products.find((p) => p.id === id);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getBestSellers = () => products.filter((p) => p.isBestSeller);

export const getNewArrivals = () => products.filter((p) => p.isNew);
