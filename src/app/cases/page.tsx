import React from "react";
import QuoteHeroSection from "@/components/QuoteHeroSection";
import CasesIntroSection from "./components/CasesIntroSection";
import CasesListSection from "./components/CasesListSection";

const Page = () => {
  return (
    <div className="flex flex-col">
      <QuoteHeroSection
        quote="Você não pode construir uma reputação com base no que ainda vai fazer."
        author="Henry Ford"
        portraitSrc="/lowpoly-henryford-w.png"
        portraitAlt="Henry Ford — ilustração geométrica"
      />
      <CasesIntroSection />
      <CasesListSection />
    </div>
  );
};

export default Page;