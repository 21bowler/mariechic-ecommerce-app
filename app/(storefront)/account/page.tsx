import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Package,
  UserRound,
  LockKeyhole,
  LogOut,
  Pencil,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const UserAccountPage = () => {
  return (
    <section className="container-base flex flex-col justify-center items-center">
      {/* Account Image */}
      <div className="my-10 text-center p-4">
        {/* Image here */}
        <div className="h-32 w-32 mx-auto border-2 border-border bg-card rounded-full" />
        <div className="py-4">
          <h2 className="font-semibold text-2xl mb-2">Julianne Sterling</h2>
          <p className="text-sm text-muted-foreground mb-3">
            julianne@marichic.gmail.com
          </p>
          <Badge variant="secondary" className="uppercase font-medium">
            Member since | June 2025
          </Badge>
        </div>
      </div>

      {/* User Details */}
      <div className="bg-card border w-full border-border rounded-xl mb-8">
        <div className="flex items-center justify-between p-6">
          <h3 className="font-semibold text-xl">Account Details</h3>
          <UserRound size={18} />
        </div>

        <div className="border border-border" />

        <div className="grid sm:grid-cols-2 px-6 py-4">
          <div>
            <div className="mb-4">
              <p className="uppercase text-muted-foreground text-sm tracking-wider mb-1">
                Full Name
              </p>
              <p className="capitalize text-sm">julianne sterling</p>
            </div>
            <div className="mb-4">
              <p className="uppercase text-muted-foreground text-sm tracking-wider mb-1">
                Email Address
              </p>
              <p className="text-sm">julianne@marichic.gmail.com</p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="uppercase text-muted-foreground text-sm tracking-wider mb-1">
                Phone Number
              </p>
              <p className="text-sm">+2547 08999750</p>
            </div>
            <div className="mb-4">
              <p className="uppercase text-muted-foreground text-sm tracking-wider mb-1">
                Primary Shipping
              </p>
              <p className="text-sm">
                123 Drumvale Avenue, Ruai, Apex Apartment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-card flex flex-col justify-between gap-4 border w-full rounded-xl p-6  sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center bg-primary/30 rounded-xl justify-between p-4">
            <Package size={24} className="text-primary" />
          </div>
          <div>
            <p className="font-bold text-lg">Order History</p>
            <p className="text-sm text-muted-foreground sm:max-w-sm">
              Manage your recent shipments. track deliveries, and view your
              purchase receipts.
            </p>
          </div>
        </div>

        <Link
          href="/my-orders"
          className="border flex rounded-lg bg-background items-center text-sm justify-center gap-2 px-4 py-2"
        >
          View orders <ArrowRight size={18} />
        </Link>
      </div>

      <div className="my-8 h-px w-full bg-border" />

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 justify-between w-full mb-10 md:flex-row">
        <div className="flex gap-4">
          {/* Change Password*/}
          <Button variant="ghost" className="border flex-1">
            <LockKeyhole size={16} />
            Change Password
          </Button>
          {/* Logout */}
          <Button
            variant="ghost"
            className="border border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>

        {/* Edit Profile */}
        <Button className="cursor-pointer">
          <Pencil size={16} />
          Edit Profile
        </Button>
      </div>
    </section>
  );
};

export default UserAccountPage;
