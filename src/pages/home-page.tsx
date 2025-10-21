import Header from "../components/header";
import HeroSection from "../components/hero-section";
import CollectionSection from "../components/collection-section";
import AboutSection from "../components/about-section";
import CTASection from "../components/cta-section";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <CollectionSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
