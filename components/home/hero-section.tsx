import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-secondary" aria-hidden="true">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 20px,
              #0f4c81 20px,
              #0f4c81 21px,
              transparent 21px,
              transparent 41px,
              #c41e3a 41px,
              #c41e3a 42px
            )`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
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

        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Dublin, California
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground mb-8 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Teague&apos;s
          <br />
          <span className="bg-gradient-to-r from-barber-red via-accent to-barber-blue bg-clip-text text-accent">Barber Shop</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Where tradition meets modern craftsmanship. Experience the art of classic barbering in an atmosphere of refined simplicity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <a
            href="https://teaguesbarbershop.glossgenius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 text-white text-sm uppercase tracking-widest hover:bg-barber-red/90 transition-all duration-300 shadow-lg shadow-barber-red/20 bg-accent"
          >
            Book Your Appointment
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
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
