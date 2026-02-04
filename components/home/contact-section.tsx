import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-32 bg-background relative">
      {/* Decorative top border */}
      
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
              Visit Us
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground mb-8 text-balance">
              Find Your Way
              <br />
              <span className="text-accent">To Teague&apos;s</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center border-l-2 border-barber-red group-hover:bg-barber-red/10 transition-colors">
                  <MapPin className="h-5 w-5 text-barber-red" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-foreground mb-2">
                    Location
                  </h3>
                  <a
                    href="https://maps.google.com/?q=7106+Dublin+Blvd,+Dublin,+CA+94568"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    7106 Dublin Blvd
                    <br />
                    Dublin, CA 94568
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center border-l-2 border-barber-blue group-hover:bg-barber-blue/10 transition-colors">
                  <Phone className="h-5 w-5 text-barber-blue" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-foreground mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+19253802797"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    (925) 380-2797
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center border-l-2 border-accent group-hover:bg-accent/10 transition-colors">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-foreground mb-2">
                    Hours
                  </h3>
                  <div className="text-muted-foreground">
                    <p>Monday - Friday: 9am - 7pm</p>
                    <p>Saturday: 9am - 5pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://teaguesbarbershop.glossgenius.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 text-white text-sm uppercase tracking-widest hover:bg-barber-red/90 transition-all duration-300 shadow-lg shadow-barber-red/20 bg-accent"
            >
              Book Your Appointment
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Map placeholder */}
          <div className="relative aspect-square lg:aspect-auto bg-secondary overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.5!2d-121.9252!3d37.7033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fec5f9f5e3d59%3A0x0!2s7106%20Dublin%20Blvd%2C%20Dublin%2C%20CA%2094568!5e0!3m2!1sen!2sus!4v1706472000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Teague's Barber Shop Location"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
