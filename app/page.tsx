import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <ContactSection />
      <Footer />
    </main>
  );
}
