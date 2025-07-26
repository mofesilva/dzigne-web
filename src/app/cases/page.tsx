import Footer from "@/components/footer/Footer";
import React from "react";
import SecondaryHeaderSection from "../../components/SecondaryHeaderSection";
import CasesHeroSection from "./components/CasesHeroSection";
import CasesListSection from "./components/CasesListSection";

const Page = () => {
  return (
    <main className="flex flex-col">
      <SecondaryHeaderSection content={<CasesHeroSection />} />
      <CasesListSection />
      <Footer />
    </main>
  );
};

export default Page;