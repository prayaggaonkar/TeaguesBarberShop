import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Teague's Barber Shop",
  description:
    "Browse our gallery of cuts, fades, and beard work. See the craftsmanship and precision at Teague's Barber Shop in Dublin, CA.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative">
        {/* Decorative stripe */}
        <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-barber-blue/30 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Our Work
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl tracking-tight text-foreground mb-6 text-balance">
            The Art of
            <br />
            <span className="bg-gradient-to-r from-barber-blue via-accent to-barber-red bg-clip-text bg-[rgba(114,14,14,1)] text-destructive">The Haircut</span>
          </h1>
          {/* Decorative line */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-barber-blue" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-8 h-0.5 bg-barber-red" />
          </div>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            Every cut tells a story. Browse through our work and see the
            precision, style, and attention to detail that defines Teague&apos;s
            Barber Shop.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #0f4c81 0px,
            #0f4c81 1px,
            transparent 1px,
            transparent 20px
          )`
        }} />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed mb-8">
            Let us help you find your perfect look. Book your appointment and
            experience the Teague&apos;s difference.
          </p>
          <a
            href="https://teaguesbarbershop.glossgenius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-barber-red text-white text-sm uppercase tracking-widest hover:bg-barber-red/90 transition-all duration-300 shadow-lg shadow-barber-red/20"
          >
            Book Your Appointment
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
