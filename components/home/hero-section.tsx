import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-secondary" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Dublin, California
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground mb-8 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Teague&apos;s
          <br />
          <span className="text-accent">Barber Shop</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Where tradition meets modern craftsmanship. Experience the art of
          classic barbering in an atmosphere of refined simplicity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <a
            href="https://teaguesbarbershop.glossgenius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm uppercase tracking-widest hover:bg-accent/90 transition-all duration-300"
          >
            Book Your Appointment
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-300"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>
    </section>
  );
}
