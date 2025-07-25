import HeaderSection from "./components/HeaderSection";
import Footer from "@/components/footer/Footer";
import CompanyHighlightsSection from "./components/CompanyHighlightsSection";
import HeroSection from "./components/HeroSection";
import CasesHighlightsSection from "./components/CasesHighlightsSection";
import ServicesSection from "./components/ServicesSection";
import CompanyBio from "./components/CompanyBio";
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="">
        <HeaderSection image='/assets/main-banner.jpg' content={<HeroSection />} />
        <CompanyHighlightsSection />
        <ServicesSection />
        <CasesHighlightsSection />
        <CompanyBio />
        <Footer />
      </div>
    </main>
  );
}
