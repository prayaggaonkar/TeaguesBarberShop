import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Classic Haircut",
    description: "A precise haircut tailored to your style and face shape.",
    price: "$50",
  },
  {
    name: "Fade",
    description: "A seamless gradient from skin to your desired length. Available in low, mid, or high variations.",
    price: "$50",
  },
  {
    name: "Taper",
    description: "A smooth taper at the neck and sides that keeps length on top. Available in low, mid, or high variations.",
    price: "$50",
  },
  {
    name: "Beard Trim",
    description: "Expert shaping and trimming to maintain your beard's best look.",
    price: "$30",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          #0f4c81 0px,
          #0f4c81 2px,
          transparent 2px,
          transparent 60px
        )`
      }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground mb-6 text-balance">
            Our Services
          </h2>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-barber-red" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-12 h-0.5 bg-barber-blue" />
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            From classic haircuts to modern styles, each service is delivered with precision and care. Experience the difference of Teague's.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`group p-8 bg-background border border-border hover:border-${index % 2 === 0 ? 'barber-red' : 'barber-blue'}/40 transition-colors duration-300 relative overflow-hidden`}
            >
              {/* Hover accent line */}
              <div className={`absolute top-0 left-0 w-0 h-0.5 ${index % 2 === 0 ? 'bg-barber-red' : 'bg-barber-blue'} group-hover:w-full transition-all duration-500`} />
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
