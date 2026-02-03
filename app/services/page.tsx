import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Teague's Barber Shop",
  description:
    "Explore our full range of barbering services. From classic cuts to hot towel shaves, experience premium grooming at Teague's Barber Shop in Dublin, CA.",
};

const services = [
  {
    category: "Haircuts",
    items: [
      {
        name: "Classic Haircut",
        description:
          "A precision cut tailored to your unique style and face shape.",
        price: "$40",
        duration: "30 min",
      },
      {
        name: "Fade",
        description:
          "Seamless gradient from skin to your desired length. Available in low, mid, or high variations.",
        price: "$40",
        duration: "40 min",
      },
      {
        name: "Taper",
        description:
          "A smooth taper at the neck and sides that keeps length on top. Available in low, mid, or high variations.",
        price: "$40",
        duration: "40 min",
      },
      {
        name: "Kids & Seniors",
        description:
          "For our younger clients (12 and under) and seniors. Same precision and care in a relaxed environment.",
        price: "$33",
        duration: "35 min",
      },
    ],
  },
  {
    category: "Additional Services",
    items: [
      {
        name: "Beard Trim",
        description:
          "Expert shaping and trimming to maintain your beard's best look.",
        price: "$20",
        duration: "20 min",
      },
      {
        name: "Line Up",
        description:
          "Custom beard shaping with detailed line work and precision edges for a sculpted appearance.",
        price: "$25",
        duration: "25 min",
      },
      {
        name: "Specialized Haircuts",
        description:
          "Shear cuts, afro, faux hawks, razor line up.",
        price: "+$7",
        duration: "N/A",
      },
    ],
  },
  {
    category: "Packages",
    items: [
      {
        name: "Cut & Beard Combo",
        description:
          "Complete grooming package combining a classic haircut with a full beard trim and shape.",
        price: "$50",
        duration: "45 min",
      },
      {
        name: "The Full Experience",
        description:
          "Our signature service: haircut, beard trim, hot towel treatment, and scalp massage.",
        price: "$75",
        duration: "60 min",
      },
      {
        name: "Father & Son",
        description:
          "Special bonding package for one adult and one child haircut. Great memories included.",
        price: "$55",
        duration: "50 min",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Our Services
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl tracking-tight text-foreground mb-6 text-balance">
            Crafted for the
            <br />
            <span className="text-accent">Modern Gentleman</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            Every service at Teague&apos;s is delivered with precision,
            expertise, and genuine care. From classic techniques to contemporary
            styles, we&apos;re here to help you look and feel your best.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((category) => (
              <div key={category.category}>
                <h2 className="text-xs uppercase tracking-[0.4em] text-accent mb-8 pb-4 border-b border-border">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((service) => (
                    <div
                      key={service.name}
                      className="group p-8 bg-card border border-border hover:border-accent/30 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg text-foreground mb-1">
                            {service.name}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {service.duration}
                          </span>
                        </div>
                        <span className="font-serif text-2xl text-accent">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed mb-8">
            Book your appointment today and discover why our clients keep coming
            back. Walk-ins welcome, but appointments are recommended.
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
