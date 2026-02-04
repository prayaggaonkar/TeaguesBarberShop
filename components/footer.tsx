import Link from "next/link";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/images/Logo.PNG" 
                alt="Teague's Barber Shop Logo" 
                className="h-16 w-16 object-contain"
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
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              A legacy of craftsmanship since day one. Where tradition meets
              modern style in Dublin, California.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=7106+Dublin+Blvd,+Dublin,+CA+94568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  7106 Dublin Blvd
                  <br />
                  Dublin, CA 94568
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href="tel:+19253802797"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  (925) 380-2797
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground mb-6">
              Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Mon - Fri: 9am - 7pm</p>
                  <p>Saturday: 9am - 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative stripe */}
        <div className="mt-16 h-1 bg-gradient-to-r from-barber-red via-white to-barber-blue" />
        
        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Teague&apos;s Barber Shop. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/teagues_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
