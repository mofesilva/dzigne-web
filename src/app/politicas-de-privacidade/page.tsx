import React from 'react';
import SecondaryHeaderSection from "../../components/SecondaryHeaderSection";
import PrivacyHeroSection from "./components/PrivacyHeroSection";
import PrivacyContentSection from "./components/PrivacyContentSection";

export const metadata = {
    title: "Políticas de Privacidade | Dzign-e",
    description: "Conheça como a Dzign-e trata e protege suas informações pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD).",
};

function PoliticasDePrivacidade() {
    return (
        <main className="flex flex-col">
            <SecondaryHeaderSection content={<PrivacyHeroSection />} />
            <PrivacyContentSection />
        </main>
    );
}

export default PoliticasDePrivacidade;