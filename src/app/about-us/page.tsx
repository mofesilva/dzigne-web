import React from "react";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutPassionSection from "./components/AboutPassionSection";
import AboutEssenceSection from "./components/AboutEssenceSection";
import AboutTechStackSection from "./components/AboutTechStackSection";
import AboutTeamSection from "./components/AboutTeamSection";
import AboutCTASection from "./components/AboutCTASection";

export const metadata = {
  title: "Sobre Nós | Dzign-e",
  description:
    "Conheça a Dzign-e — equipe, tecnologias e o que nos move.",
};

const Page = () => {
  return (
    <main className="flex flex-col">
      <AboutHeroSection />
      <AboutPassionSection />
      <AboutEssenceSection />
      <AboutTechStackSection />
      <AboutTeamSection />
      <AboutCTASection />
    </main>
  );
};

export default Page;