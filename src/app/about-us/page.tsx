import React from "react";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutMissionSection from "./components/AboutMissionSection";
import AboutValuesSection from "./components/AboutValuesSection";
import AboutTeamSection from "./components/AboutTeamSection";
import HeaderSection from "../components/HeaderSection";

const Page = () => {
  return (
    <main className="flex flex-col">
      <HeaderSection content={<AboutHeroSection />} />
      <AboutMissionSection />
      <AboutValuesSection />
      <AboutTeamSection />
    </main>
  );
};

export default Page;