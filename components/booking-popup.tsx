"use client";

import React from "react"

import { useState } from "react";
import { Phone, X, ArrowRight } from "lucide-react";

interface BookingPopupProps {
  children: React.ReactNode;
  className?: string;
}

export function BookingPopup({ children, className }: BookingPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close popup"
          />

          {/* Popup */}
          <div className="relative bg-card border border-border p-8 sm:p-10 max-w-md w-full animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Decorative top stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-barber-red via-accent to-barber-blue" />

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-accent/10 flex items-center justify-center mb-6">
                <Phone className="h-7 w-7 text-accent" />
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-3">
                Book Your Appointment
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Please call or text us to schedule your appointment.
              </p>

              <a
                href="tel:+19257847549"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-lg font-semibold tracking-wide hover:bg-accent/90 transition-all duration-300 w-full justify-center"
              >
                (925) 784-7549
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="mt-4 text-xs text-muted-foreground">
                Walk-ins recommended, but appointments are welcome.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
