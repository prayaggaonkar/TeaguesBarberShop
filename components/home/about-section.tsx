import { Scissors, Award, Users } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Master Craftsmanship",
    description:
      "Every cut is a work of art, combining timeless techniques with contemporary style.",
    color: "barber-red",
  },
  {
    icon: Award,
    title: "Premium Experience",
    description:
      "From the moment you walk in, experience hospitality that matches our attention to detail.",
    color: "barber-blue",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "More than a barbershop—a gathering place where stories are shared and friendships grow.",
    color: "accent",
  },
];

export function AboutSection() {
  return (
    <section className="py-32 bg-background relative">
      {/* Decorative stripe */}
      
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-secondary overflow-hidden group">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-barber-red z-10" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-barber-blue z-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-barber-blue z-10" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-barber-red z-10" />
            <img
              src="/images/IMG_9932_3.jpg"
              alt="Client with fresh cornrow braids at Teague's Barber Shop"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground mb-8 text-balance">
              A Legacy of
              <br />
              <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Teague's Barber Shop, we believe in the power of a great haircut to transform not just your appearance, but your confidence. Founded on the principles of traditional barbering, we've built a space where every client receives personalized attention and leaves feeling their absolute best.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Our skilled barbers combine decades of experience with a genuine
              passion for their craft. Whether you&apos;re seeking a classic cut
              or a modern fade, we take pride in delivering precision and style
              that exceeds expectations.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center border-l-2 ${
                    feature.color === "barber-red" ? "border-barber-red" : 
                    feature.color === "barber-blue" ? "border-barber-blue" : "border-accent"
                  } group-hover:bg-secondary/80 transition-colors`}>
                    <feature.icon className={`h-5 w-5 ${
                      feature.color === "barber-red" ? "text-barber-red" : 
                      feature.color === "barber-blue" ? "text-barber-blue" : "text-accent"
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
