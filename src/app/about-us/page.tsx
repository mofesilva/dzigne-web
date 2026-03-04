import React from "react";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutManifestoSection from "./components/AboutManifestoSection";
import AboutStatsSection from "./components/AboutStatsSection";
import AboutMissionValuesSection from "./components/AboutMissionValuesSection";
import AboutTechStackSection from "./components/AboutTechStackSection";
import AboutTeamSection from "./components/AboutTeamSection";
import AboutCTASection from "./components/AboutCTASection";

export const metadata = {
  title: "Sobre Nós | Dzign-e",
  description:
    "Conheça a Dzign-e: nossa missão, valores, equipe e as tecnologias que utilizamos para criar soluções digitais extraordinárias.",
};

const Page = () => {
  return (
    <main className="flex flex-col">
      <AboutHeroSection />
      <AboutManifestoSection />
      <AboutStatsSection />
      <AboutMissionValuesSection />
      <AboutTechStackSection />
      <AboutTeamSection />
      <AboutCTASection />
    </main>
  );
};

export default Page;