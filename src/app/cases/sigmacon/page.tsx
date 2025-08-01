import React from 'react';
import Footer from '@/components/footer/Footer';
import SecondaryHeaderSection from '@/components/SecondaryHeaderSection';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';

export const metadata = {
    title: "Case Sigmacon - App de Gestão Condominial | Dzign-e",
    description: "Como desenvolvemos um aplicativo revolucionário para gestão condominial integrando IoT, reservas e segurança"
};

function SigmaconPage() {
    return (
        <main className="flex flex-col">
            <SecondaryHeaderSection 
                content={
                    <CaseHeroSection
                        logo="/assets/images/logos/sigmacon.png"
                        company="Sigmacon"
                        title="App de Gestão Condominial"
                        description="Revolucionamos a gestão condominial com um aplicativo inteligente que integra reservas de espaços, sistema de câmeras, controle de acesso e comunicação entre moradores e administração."
                        tags={["Gestão", "Mobile App", "IoT", "Flutter", "Firebase"]}
                    />
                }
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
                images={[
                    {
                        src: "/assets/images/mockups/oabmack_mockup.png",
                        alt: "Tela principal do app Sigmacon",
                        description: "Dashboard principal com acesso rápido a todas as funcionalidades"
                    },
                    {
                        src: "/assets/images/mockups/oabmack_mockup_2.png",
                        alt: "Sistema de reservas integrado",
                        description: "Interface intuitiva para reserva de espaços comuns com calendário interativo"
                    }
                ]}
            />

            <CaseNavigationSection
                previousCase={{
                    href: "/cases/mackenzie",
                    company: "Universidade Mackenzie",
                    title: "Plataforma de Estudos para OAB"
                }}
                nextCase={{
                    href: "/cases/ipi",
                    company: "IPI - Igreja Presbiteriana Independente",
                    title: "Plataforma Educacional Personalizada"
                }}
            />

            <Footer />
        </main>
    );
}

export default SigmaconPage;