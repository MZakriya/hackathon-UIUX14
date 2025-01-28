import HeroSection from "@/components/HeroSection"
import BrowseSection from "@/components/BrowseSection"
import InspirationSection from "@/components/inspiration-section"
import GallerySection from "@/components/gallery-section"
import OurProducts from "@/components/OurProducts"



export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrowseSection />
      <OurProducts/>
      <InspirationSection />
      <GallerySection />
    </div>
  );
}
