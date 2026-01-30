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
      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Our Work
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl tracking-tight text-foreground mb-6 text-balance">
            The Art of
            <br />
            <span className="text-accent">The Cut</span>
          </h1>
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
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
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
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm uppercase tracking-widest hover:bg-accent/90 transition-all duration-300"
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
