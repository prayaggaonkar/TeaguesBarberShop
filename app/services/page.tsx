import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { BookingDialog } from "@/components/booking-dialog";

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
  
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative">
        {/* Decorative stripe */}
        <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-barber-red/30 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Our Services
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl tracking-tight text-foreground mb-6 text-balance">
            Crafted for
            <br />
            <span className="bg-gradient-to-r from-barber-red via-accent to-barber-blue bg-clip-text text-destructive">Every Customer </span>
          </h1>
          {/* Decorative line */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-barber-red" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-8 h-0.5 bg-barber-blue" />
          </div>
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
                <h2 className="text-xs uppercase tracking-[0.4em] text-accent mb-8 pb-4 border-b border-border flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${category.category === "Haircuts" ? "bg-barber-red" : "bg-barber-blue"}`} />
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((service, index) => (
                    <div
                      key={service.name}
                      className="group p-8 bg-card border border-border hover:border-barber-blue/40 transition-colors duration-300 relative overflow-hidden"
                    >
                      {/* Top accent line on hover */}
                      <div className={`absolute top-0 left-0 w-0 h-0.5 ${index % 2 === 0 ? "bg-barber-red" : "bg-barber-blue"} group-hover:w-full transition-all duration-500`} />
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
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #c41e3a 0px,
            #c41e3a 1px,
            transparent 1px,
            transparent 20px
          )`
        }} />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed mb-8">
            Book your appointment today and discover why our clients keep coming
            back. Walk-ins recommended, but appointments are welcome.
          </p>
          <BookingDialog className="group inline-flex items-center gap-2 px-8 py-4 text-white text-sm uppercase tracking-widest hover:bg-barber-red/90 transition-all duration-300 shadow-lg shadow-barber-red/20 bg-accent">
            Book Your Appointment
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </BookingDialog>
        </div>
      </section>

      <Footer />
    </main>
  );
}
