import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ImpactMessage from "@/components/impact-message";
import FeaturesSection from "@/components/features-section";
import InstitutionsSection from "@/components/institutions-section";
import PricingSection from "@/components/pricing-section";
import AppStoreCTA from "@/components/app-store-cta";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ImpactMessage />
      <FeaturesSection />
      <InstitutionsSection />
      <PricingSection />
      <AppStoreCTA />
      <FAQSection />
      <Footer />
    </div>
  );
}
