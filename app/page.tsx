import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import HowToRibbon from "@/components/howto-ribbon";
import TripsSection from "@/components/trips-section";
import HowItWorks from "@/components/how-it-works";
import LoyaltySection from "@/components/loyalty-section";
import FinePrint from "@/components/fine-print";
import SiteFooter from "@/components/site-footer";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <HowToRibbon />
      <TripsSection />
      <HowItWorks />
      <LoyaltySection />
      <FinePrint />
      <SiteFooter />
    </>
  );
}
