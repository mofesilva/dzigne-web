import React from "react";
import QuoteHeroSection from "@/components/QuoteHeroSection";
import PlatformsIntroSection from "./components/PlatformsIntroSection";
import PlatformsListSection from "./components/PlatformsListSection";

const Page = () => {
  return (
    <div className="flex flex-col">
      <QuoteHeroSection
        quote="A inovação distingue entre um líder e um seguidor."
        author="Steve Jobs"
        portraitSrc="/lowpoly-stevejobs-w.png"
        portraitAlt="Steve Jobs — ilustração geométrica"
      />
      <PlatformsIntroSection />
      <PlatformsListSection />
    </div>
  );
};

export default Page;