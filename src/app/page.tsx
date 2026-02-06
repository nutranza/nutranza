import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import AboutSection from "@/components/home/AboutSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <ProductShowcase />
      <AboutSection />
      <CTASection />
    </main>
  );
}
