import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import BrandAmbassador from "@/components/home/BrandAmbassador";
import ProductShowcase from "@/components/home/ProductShowcase";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import WaveSeparator from "@/components/ui/WaveSeparator";
import RecipeSection from "@/components/home/RecipeSection";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function Home() {
  return (
    <main className="bg-white block">
      <HeroSection />
      <MarqueeSection />
      <ShopByCategory />
      <FeaturesSection />
      <ProductShowcase />
      <BrandAmbassador />
      <div className="bg-[linear-gradient(0deg,#825640,#E96569)]">
        <ReviewsSection />
        <RecipeSection />
      </div>
      {/* <AboutSection /> */}
      <CTASection />
    </main>
  );
}
