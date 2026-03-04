import React from "react";
import CasesHeroSection from "./components/CasesHeroSection";
import CasesListSection from "./components/CasesListSection";

const Page = () => {
  return (
    <div className="flex flex-col">
      <CasesHeroSection />
      <CasesListSection />
    </div>
  );
};

export default Page;