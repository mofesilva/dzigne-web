import React from 'react';
import SecondaryHeaderSection from "../../components/SecondaryHeaderSection";
import ServicesHeroSection from "./components/ServicesHeroSection";
import ServicesListSection from "./components/ServicesListSection";
import TechStackSection from "./components/TechStackSection";
import ProcessSection from "./components/ProcessSection";

export const metadata = {
    title: "Serviços | Dzign-e",
    description: "Conheça todos os serviços da Dzign-e: desenvolvimento web e mobile, design, hospedagem, consultoria em TI e muito mais.",
};

function ServicesPage() {
    return (
        <div className="flex flex-col">
            <SecondaryHeaderSection content={<ServicesHeroSection />} />
            <ServicesListSection />
            <TechStackSection />
            <ProcessSection />
        </div>
    );
}

export default ServicesPage;