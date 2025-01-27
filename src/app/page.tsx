import HeroSection from "@/components/HeroSection"
import BrowseSection from "@/components/BrowseSection"
import InspirationSection from "@/components/inspiration-section"
import ProductSection from "@/components/product-section"
import GallerySection from "@/components/gallery-section"



export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrowseSection />
      <ProductSection />
      <InspirationSection />
      <GallerySection />
    </div>
  );
}
