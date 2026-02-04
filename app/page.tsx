import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { ContactSection } from "@/components/home/contact-section";
import { BarberPole } from "@/components/barber-pole";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <BarberPole side="left" />
      <BarberPole side="right" />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <ContactSection />
      <Footer />
    </main>
  );
}
