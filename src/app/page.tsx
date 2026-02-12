import HeroSlider from "@/components/home/HeroSlider";
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
    <main className="min-h-screen bg-white">
      <HeroSlider />
      <FeaturesSection />
      <ShopByCategory />
      <WaveSeparator
        isAbsolute={false}
        position="bottom"
        backgroundColor="#EBE6DE"
        color="#EDC375" // Matching the next section's background
        height="h-[60px] md:h-[100px]"
      />
      <div className="bg-[#EDC375]">
        <ProductShowcase />
        <BrandAmbassador />
      </div>
      <WaveSeparator
        isAbsolute={false}
        position="bottom"
        backgroundColor="#EDC375"
        color="#E96569" // Matching the next section's background
        height="h-[60px] md:h-[100px]"
      />
      <div className="bg-[linear-gradient(0deg,#825640,#E96569)]">
        <ReviewsSection />
        <RecipeSection />
      </div>
      {/* <AboutSection /> */}
      <WaveSeparator
        isAbsolute={false}
        position="bottom"
        backgroundColor="#825640"
        color="#FEFDF7" // Matching the next section's background
        height="h-[60px] md:h-[100px]"
      />
      <CTASection />
      <WaveSeparator
        isAbsolute={false}
        position="bottom"
        backgroundColor="#FEFDF7"
        color="#EBE6DE" // Matching the next section's background
        height="h-[60px] md:h-[100px]"
      />
    </main>
  );
}
