import React from 'react';
import Footer from '@/components/footer/Footer';
import SecondaryHeaderSection from '@/components/SecondaryHeaderSection';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';

export const metadata = {
    title: "Case Labormed - Sistema de Gestão Laboratorial | Dzign-e",
    description: "Como desenvolvemos um sistema completo para gestão laboratorial com integração de equipamentos e otimização de processos"
};

function LabormedPage() {
    return (
        <main className="flex flex-col">
            <SecondaryHeaderSection 
                content={
                    <CaseHeroSection
                        logo="/assets/images/logos/labormed.png"
                        company="Labormed"
                        title="Sistema de Gestão Laboratorial"
                        description="Desenvolvemos um sistema completo de gestão laboratorial que integra controle de exames, resultados, equipamentos e atendimento ao paciente, revolucionando a eficiência operacional."
                        tags={["Saúde", "Web System", "Integration", "React", "API"]}
                    />
                }
            />

            <CaseDetailsSection
                duration="14 meses"
                team="9 desenvolvedores"
                technologies={["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "TypeScript", "HL7 FHIR"]}
                challenge="A Labormed enfrentava desafios significativos na gestão de exames laboratoriais, desde o agendamento até a entrega de resultados. O processo manual causava atrasos, erros de comunicação e dificuldades no controle de qualidade. Era necessário um sistema que integrasse todos os equipamentos laboratoriais e otimizasse o fluxo de trabalho completo."
                solution="Criamos um sistema web completo que automatiza todo o processo laboratorial: desde o agendamento online de exames, passagem pelo sistema de coleta, integração com equipamentos de análise, até a entrega digital de resultados. O sistema inclui dashboard para gestores, portal do paciente, integração com convênios e módulo de controle de qualidade em tempo real."
                results={[
                    "75% de redução no tempo de entrega de resultados",
                    "Mais de 10.000 exames processados mensalmente",
                    "90% de redução em erros de digitação",
                    "Integração com 25+ equipamentos laboratoriais",
                    "98% de satisfação dos pacientes com o portal digital",
                    "Economia de 60% em custos operacionais"
                ]}
            />

            <CaseGallerySection
                title="Sistema Completo e Integrado"
                description="Explore as principais funcionalidades que transformaram a gestão laboratorial e a experiência dos pacientes."
                images={[
                    {
                        src: "/assets/images/mockups/oabmack_mockup_2.png",
                        alt: "Dashboard principal do sistema Labormed",
                        description: "Painel de controle com visão geral de exames, equipamentos e indicadores em tempo real"
                    },
                    {
                        src: "/assets/images/mockups/oabmack_mockup.png",
                        alt: "Portal do paciente",
                        description: "Interface intuitiva para agendamento de exames e acesso a resultados digitais"
                    }
                ]}
            />

            <CaseNavigationSection
                previousCase={{
                    href: "/cases/ipi",
                    company: "IPI - Igreja Presbiteriana Independente",
                    title: "Plataforma Educacional Personalizada"
                }}
            />

            <Footer />
        </main>
    );
}

export default LabormedPage;