"use client";

import { motion } from "motion/react";
import { PackageCheck, Smartphone } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type PaymentMethodValue = "mpesa" | "pay_on_delivery";

interface PaymentMethodProps {
  value: PaymentMethodValue;
  onChange: (value: PaymentMethodValue) => void;
}

const PaymentMethod = ({ value, onChange }: PaymentMethodProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-xl p-6"
    >
      <h2 className="mb-6 text-lg">Payment Method</h2>
      <RadioGroup
        value={value}
        onValueChange={(v) => onChange(v as PaymentMethodValue)}
        className="space-y-3"
      >
        <Label
          className={cn(
            "flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors",
            value === "mpesa"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50",
          )}
        >
          <RadioGroupItem value="mpesa" />
          <Smartphone size={24} className="text-green-600" />
          <div>
            <p className="font-medium">M-Pesa</p>
            <p className="text-muted-foreground text-sm">
              Pay with M-Pesa mobile money.
            </p>
          </div>
        </Label>
        <Label
          className={cn(
            "flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors",
            value === "pay_on_delivery"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50",
          )}
        >
          <RadioGroupItem value="pay_on_delivery" />
          <PackageCheck size={24} className="text-blue-600" />
          <div>
            <p className="font-medium">Pay on Delivery</p>
            <p className="text-muted-foreground text-sm">
              Pay once package arrives.
            </p>
          </div>
        </Label>
      </RadioGroup>

      {value === "mpesa" && (
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            You will receive an M-Pesa prompt on your phone to complete the
            payment.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default PaymentMethod;
