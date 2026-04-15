import React from "react";
import QuoteHeroSection from "@/components/QuoteHeroSection";
import AboutIdentitySection from "./components/AboutIdentitySection";
import AboutProcessSection from "./components/AboutProcessSection";
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
      <QuoteHeroSection
        quote="A única forma de fazer um trabalho extraordinário é amar o que você faz."
        author="Steve Jobs"
        portraitSrc="/lowpoly-stevejobs-w.png"
        portraitAlt="Steve Jobs — ilustração geométrica"
      />
      <AboutIdentitySection />
      <AboutProcessSection />
      <AboutTechStackSection />
      <AboutTeamSection />
      <AboutCTASection />
    </main>
  );
};

export default Page;