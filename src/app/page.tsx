import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import BrandAmbassador from "@/components/home/BrandAmbassador";
import ProductShowcase from "@/components/home/ProductShowcase";
import FeaturesSection from "@/components/home/FeaturesSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import ReviewsSection from "@/components/home/ReviewsSection";
import FAQSection from "@/components/home/FAQSection";


export default function Home() {
  return (
    <main className="block">
      <HeroSection />
      <MarqueeSection />
      <ShopByCategory />
      <FeaturesSection />
      <ProductShowcase />
      <BrandAmbassador />
      <ReviewsSection />
      {/* <div className="bg-[linear-gradient(0deg,#825640,#E96569)]">
        <RecipeSection />
      </div> */}
      {/* <AboutSection /> */}
      <FAQSection />
    </main>
  );
}
