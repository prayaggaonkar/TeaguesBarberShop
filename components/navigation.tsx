"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BookingDialog } from "@/components/booking-dialog";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/LogoFix.png" 
              alt="Teague's Barber Shop Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wide text-foreground">
                Teague&apos;s
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Barber Shop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <BookingDialog className="ml-4 px-6 py-2.5 bg-accent text-accent-foreground text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors duration-300">
              Book Now
            </BookingDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <BookingDialog className="mt-2 px-6 py-3 bg-accent text-accent-foreground text-sm uppercase tracking-widest text-center hover:bg-accent/90 transition-colors">
                Book Now
              </BookingDialog>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
