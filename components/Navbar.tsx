"use client";

import Link from "next/link";
import { IconSearch, IconShoppingCart, IconUser } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-6 z-50 flex justify-center px-4">
      <nav className="container mx-auto flex h-16 items-center justify-between rounded-full border bg-background/60 px-8 py-2 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-primary font-serif"
          >
            Talentz
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Institute
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground rounded-full"
          >
            <IconSearch className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden sm:flex rounded-full">
            Login/Signup
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
          >
            <IconShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
