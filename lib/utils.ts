import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// formatter helper for Kenyan Shillings
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 0,
  }).format(price);
};

// Discount Calculation Helper function
export const calculateDiscount = (
  originalPrice: number | undefined,
  price: number,
): number => {
  if (originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  }
  return 0;
};
