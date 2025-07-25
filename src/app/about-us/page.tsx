import Footer from "@/components/footer/Footer";
import React from "react";
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";

const Page = () => {
  return <main className="flex flex-col">
    <HeaderSection image='/assets/main-banner.jpg' content={<HeroSection />} />
    <Footer />
  </main>
};

export default Page;