import { ArrowRight } from "lucide-react";
import { BookingPopup } from "@/components/booking-popup";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/TeaguesBackground.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom gradient to blend into the charcoal background below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-24 left-8 w-24 h-24 border-l-2 border-t-2 border-barber-blue/30 hidden lg:block" />
      <div className="absolute top-24 right-8 w-24 h-24 border-r-2 border-t-2 border-barber-red/30 hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-24 h-24 border-l-2 border-b-2 border-barber-red/30 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-24 h-24 border-r-2 border-b-2 border-barber-blue/30 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
        {/* Logo */}
        <div className="mb-8 animate-in fade-in zoom-in-95 duration-700">
          
        </div>

        <p className="text-sm sm:text-base uppercase tracking-[0.4em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 font-black border-0 leading-7 text-destructive-foreground">
          Dublin, California
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-8 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 font-bold font-serif text-accent">
          Teague&apos;s
          <br />
          <span>Barber Shop</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 font-semibold text-white">
          {"Best Barbershop in the Tri-Valley. Established in 1991."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <BookingPopup className="group inline-flex items-center gap-2 px-8 py-4 text-white text-sm uppercase tracking-widest hover:bg-barber-red/90 transition-all duration-300 shadow-lg shadow-barber-red/20 bg-accent">
            Book Your Appointment
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </BookingPopup>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border text-foreground text-sm uppercase tracking-widest hover:bg-barber-red/10 hover:border-barber-red hover:text-barber-red transition-colors duration-300 border-accent"
          >
            View Services
          </a>
        </div>
      </div>

      
    </section>
  );
}
