import React from "react";
import CasesHeroSection from "./components/CasesHeroSection";
import CasesIntroSection from "./components/CasesIntroSection";
import CasesListSection from "./components/CasesListSection";

const Page = () => {
  return (
    <div className="flex flex-col">
      <CasesHeroSection />
      <CasesIntroSection />
      <CasesListSection />
    </div>
  );
};

export default Page;