import React from 'react';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';

export const metadata = {
    title: "Case Contrata Já - Marketplace de Serviços | Dzign-e",
    description: "Como desenvolvemos uma marketplace que conecta profissionais de serviços a clientes de forma rápida e segura"
};

function ContrataJaPage() {
    return (
        <main className="flex flex-col">
            <CaseHeroSection
                logo="/assets/images/logos/contrataja-hn2.png"
                company="Contrata Já"
                description="Uma marketplace em desenvolvimento que conecta profissionais de serviços a clientes, facilitando contratações rápidas e seguras com avaliações e portfólios integrados."
                tags={["Serviços", "Marketplace", "Plataforma de Contratação"]}
                mockup="/assets/images/mockups/contrataja-ipad-mockup-2.png"
            />

            <CaseDetailsSection
                duration="10 meses"
                team="8 desenvolvedores"
                technologies={["Flutter", "Firebase", "Node.js", "MongoDB", "AWS IoT", "WebRTC", "TypeScript"]}
                challenge="Os condomínios enfrentavam dificuldades para gerenciar reservas de espaços comuns, controlar acessos, monitorar segurança e manter comunicação eficiente entre moradores e administração. Era necessária uma solução integrada que centralizasse todas essas funcionalidades em uma plataforma móvel intuitiva."
                solution="Desenvolvemos um aplicativo móvel completo que permite aos moradores reservar espaços comuns, visualizar câmeras de segurança, autorizar visitantes, receber comunicados da administração e acessar serviços do condomínio. Para administradores, criamos um painel de gestão com controle total das funcionalidades, relatórios e monitoramento em tempo real."
                results={[
                    "95% de redução no tempo de reserva de espaços",
                    "Mais de 150 condomínios utilizando a plataforma",
                    "80% de aumento na satisfação dos moradores",
                    "Redução de 70% em conflitos por reservas",
                    "Sistema de segurança 24/7 implementado",
                    "Comunicação instantânea entre moradores e administração"
                ]}
            />

            <CaseGallerySection
                title="Funcionalidades Inovadoras"
                description="Explore as principais funcionalidades que transformaram a gestão condominial e a experiência dos moradores."
                imagesFolder="/assets/images/mockups/contrata-ja"
            />

            <CaseNavigationSection
                previousCase={{
                    href: "/cases/ipiconecta",
                    company: "IPIConecta",
                    title: "Igreja Presbiteriana Independente do Brasil",
                    mockup: "/assets/images/mockups/ipiconecta_desktop+mobile_mockup_1.png"
                }}
            // nextCase={{
            //     href: "/cases/ipi",
            //     company: "IPI - Igreja Presbiteriana Independente",
            //     title: "Plataforma Educacional Personalizada"
            // }}
            />

        </main>
    );
}

export default ContrataJaPage;