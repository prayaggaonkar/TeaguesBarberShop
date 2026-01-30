import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Classic Haircut",
    description: "Precision cut tailored to your style and face shape",
    price: "$35",
  },
  {
    name: "Beard Trim",
    description: "Expert shaping and grooming for a polished look",
    price: "$20",
  },
  {
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment",
    price: "$40",
  },
  {
    name: "Cut & Beard Combo",
    description: "Complete grooming package for the modern gentleman",
    price: "$50",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground mb-6 text-balance">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            From classic cuts to modern styles, each service is delivered with
            precision and care. Experience the difference of true craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.name}
              className="group p-8 bg-background border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg text-foreground">{service.name}</h3>
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

        <div className="text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent hover:text-foreground transition-colors"
          >
            View All Services
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
