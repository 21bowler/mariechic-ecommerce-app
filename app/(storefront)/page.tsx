import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import BestSellers from "@/components/home/BestSellers";
import PromoBanner from "@/components/home/PromoBanner";
import NewArrivals from "@/components/home/NewArrivals";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <BestSellers />
      <PromoBanner />
      <NewArrivals />
    </>
  );
}
