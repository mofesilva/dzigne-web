import React from 'react';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';
import HeaderSection from '@/app/components/HeaderSection';

function ICalvinusCasePage() {
    return (
        <main className="flex flex-col">
            <HeaderSection
                content={
                    <CaseHeroSection
                        logo="/assets/images/logos/icalvinus-hn.png"
                        company="Igreja Presbiteriana do Brasil"
                        description="Criamos o sistema oficial da Igreja Presbiteriana do Brasil."
                        tags={["Gestão", "Mobile App", "IoT", "Flutter", "Firebase"]}
                    />
                }
            />

            <CaseDetailsSection
                duration="10 meses"
                team="8 desenvolvedores"
                technologies={["Flutter", "Firebase", "Node.js", "MySQL", "Akamai Cloud"]}
                challenge="A Igreja Presbiteriana do Brasil, tendo seu modelo de governo representativo, enfrentava uma enorme dificuldade de gerenciar as informações e documentos de decisões das reuniões conciliares. Todos os documentos e decisões eram impressos e armazenados na Secretaria Executiva. Essa instituições precisava de um sistema que centralizasse todos os documentos passados e futuro, de forma a providenciar o fácil acesso assim como  ."
                solution="Desenvolvemos um aplicativo móvel completo que permite aos moradores reservar espaços comuns, visualizar câmeras de segurança, autorizar visitantes, receber comunicados da administração e acessar serviços do condomínio. Para administradores, criamos um painel de gestão com controle total das funcionalidades, relatórios e monitoramento em tempo real."
                results={[
                    "Redução de 2/3 do tempo de reuniões conciliares",
                    "Mais de 2800 documentos, decisões, ementas concentradas na plataforma",
                    "80% de aumento na satisfação dos moradores",
                    "Redução de 70% em conflitos por reservas",
                    "Sistema de segurança 24/7 implementado",
                    "Comunicação instantânea entre moradores e administração"
                ]}
            />

            <CaseGallerySection
                title="Funcionalidades Inovadoras"
                description="Explore as principais funcionalidades que transformaram a gestão condominial e a experiência dos moradores."
                imagesFolder="/assets/images/mockups/cases/icalvinus"
            />

            <CaseNavigationSection
                previousCase={{
                    href: "/cases/oab-mack",
                    company: "OAB Mack",
                    title: "Universidade Presbiteriana Mackenzie"
                }}
                nextCase={{
                    href: "/cases/sigmaapp",
                    company: "SigmaApp",
                    title: "Sigmacon"
                }}
            />

        </main>
    );
}

export default ICalvinusCasePage;