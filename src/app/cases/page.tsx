import React from "react";
import CasesHeroSection from "./components/CasesHeroSection";
import CasesListSection from "./components/CasesListSection";
import HeaderSection from "../components/HeaderSection";

const Page = () => {
  return (
    <div className="flex flex-col">
      <HeaderSection content={<CasesHeroSection />} />
      <CasesListSection />
    </div>
  );
};

export default Page;