import React from "react";
import Footer from "@/components/footer/Footer";
import SecondaryHeaderSection from "../../components/SecondaryHeaderSection";
import HeroSection from "../components/HeroSection";

const Page = () => {
  return (
    <main className="flex flex-col">
      <SecondaryHeaderSection content={<HeroSection />} />
      <Footer />
    </main>
  )
};

export default Page;