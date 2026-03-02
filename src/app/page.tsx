import CompanyHighlightsSection from "./components/CompanyHighlightsSection";
import HeroSection from "./components/HeroSection";
import CasesHighlightsSection from "./components/CasesHighlightsSection";
import ServicesSection from "./components/ServicesSection";
import CompanyBio from "./components/CompanyBio";
import StatisticSection from "./components/StatisticSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="">
        <HeroSection />
        <StatisticSection />
        <CompanyHighlightsSection />
        <ServicesSection />
        <CasesHighlightsSection />
        <CompanyBio />
        <TestimonialsSection />
      </div>
    </div>
  );
}
