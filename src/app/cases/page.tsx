import Footer from "@/components/footer/Footer";
import React from "react";
import SecondaryHeaderSection from "../../components/SecondaryHeaderSection";
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