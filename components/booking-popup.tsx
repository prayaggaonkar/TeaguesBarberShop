"use client";

import React from "react"

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Phone, X } from "lucide-react";

interface BookingPopupProps {
  children: React.ReactNode;
  className?: string;
}

export function BookingPopup({ children, className }: BookingPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>

      {mounted &&
        createPortal(
          isOpen && (
            <div 
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
              role="button"
              tabIndex={0}
              aria-label="Close popup"
            >

              {/* Popup */}
              <div 
                className="relative bg-card border border-border p-8 sm:p-10 max-w-md w-full animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
              >
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
                    className="inline-block text-accent text-2xl font-bold tracking-wide hover:text-accent/80 transition-colors"
                  >
                    (925) 833-9229
                  </a>

                  <p className="mt-6 text-xs text-muted-foreground">
                    Walk-ins recommended, but appointments are welcome.
                  </p>
                </div>
              </div>
            </div>
          ),
          document.body
        )}
    </>
  );
}
