import HeaderSection from "./components/HeaderSection";
import CompanyHighlightsSection from "./components/CompanyHighlightsSection";
import HeroSection from "./components/HeroSection";
import CasesHighlightsSection from "./components/CasesHighlightsSection";
import ServicesSection from "./components/ServicesSection";
import CompanyBio from "./components/CompanyBio";
import LogosGrid from "./components/LogosGrid";
import StatisticSection from "./components/StatisticSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="">
        <HeaderSection content={<HeroSection />} />
        <CompanyHighlightsSection />
        <ServicesSection />
        <CasesHighlightsSection />
        <StatisticSection />
        <CompanyBio />
        <TestimonialsSection />
        <LogosGrid />
      </div>
    </div>
  );
}
