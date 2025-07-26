import Footer from "@/components/footer/Footer";
import React from "react";
import HeaderSection from "../components/HeaderSection";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutMissionSection from "./components/AboutMissionSection";
import AboutValuesSection from "./components/AboutValuesSection";
import AboutTeamSection from "./components/AboutTeamSection";
import SecondaryHeaderSection from "../../components/SecondaryHeaderSection";

const Page = () => {
  return (
    <main className="flex flex-col">
      <SecondaryHeaderSection content={<AboutHeroSection />} />
      <AboutMissionSection />
      <AboutValuesSection />
      <AboutTeamSection />
      <Footer />
    </main>
  );
};

export default Page;