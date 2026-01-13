import { Truck, Shield, RefreshCcw, Headphones } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "on orders above KES 5000",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "M-Pesa & Bank Transfer",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "30 day return policy",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description: "Here to help you",
  },
];

interface FeatureProps {
  icon: React.ComponentType;
  title: string;
  description: string;
}

const Features = () => {
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
