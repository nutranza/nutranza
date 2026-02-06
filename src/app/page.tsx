import HeroSection from "@/components/home/HeroSection";
import FeatureCards from "@/components/home/FeatureCards";
import AboutSection from "@/components/home/AboutSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import CTASection from "@/components/home/CTASection";
import NutritionalBenefits from "@/components/home/NutritionalBenefits";
import FeaturesSection from "@/components/home/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      {/* <FeatureCards /> */}
      <FeaturesSection />
      <ProductShowcase />
      {/* <NutritionalBenefits />  */}
      <AboutSection />
      <CTASection />
    </main>
  );
}
