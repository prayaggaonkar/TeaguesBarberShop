"use client";

import React from "react"

import { useState } from "react";
import { Phone, X } from "lucide-react";

export function BookingDialog({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div className="relative bg-card border border-border p-8 max-w-md w-full animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="mx-auto w-14 h-14 bg-accent/10 flex items-center justify-center rounded-full mb-6">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">
                Book Your Appointment
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Please call or text us to schedule your appointment.
              </p>
              <a
                href="tel:+19257847549"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-lg font-semibold tracking-wide hover:bg-accent/90 transition-colors duration-300 w-full justify-center"
              >
                <Phone className="h-5 w-5" />
                (925) 784-7549
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                Call or text anytime
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
