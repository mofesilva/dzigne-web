import React from 'react';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';

export const metadata = {
    title: "Case Sigmacon - App de Gestão Condominial | Dzign-e",
    description: "Como desenvolvemos um aplicativo revolucionário para gestão condominial integrando IoT, reservas e segurança"
};

function SigmaappPage() {
    return (
        <main className="flex flex-col">
            <CaseHeroSection
                logo="/assets/images/logos/sigmaapp-n.png"
                company="Sigmacon"
                description="Revolucionamos a gestão condominial com um aplicativo inteligente que integra reservas de espaços, sistema de câmeras, controle de acesso e comunicação entre moradores e administração."
                tags={["Gestão", "Mobile App", "IoT", "Flutter", "Firebase"]}
                mockup="/assets/images/mockups/sigmaapp-mockup-2.png"
            />

            <CaseDetailsSection
                duration="8 meses"
                team="2 desenvolvedores"
                technologies={["Flutter", "Firebase", "Node.js", "MongoDB", "AWS IoT", "WebRTC", "TypeScript"]}
                challenge="O CEO da Sigmacon identificou uma lacuna no mercado de segurnça condominial, um aplicativo que intetgrasse enfrentavam dificuldades para gerenciar reservas de espaços comuns, controlar acessos, monitorar segurança e manter comunicação eficiente entre moradores e administração. Era necessária uma solução integrada que centralizasse todas essas funcionalidades em uma plataforma móvel intuitiva."
                solution="Desenvolvemos um aplicativo móvel completo que permite aos moradores reservar espaços comuns, visualizar câmeras de segurança, autorizar visitantes, receber comunicados da administração e acessar serviços do condomínio. Para administradores, criamos um painel de gestão com controle total das funcionalidades, relatórios e monitoramento em tempo real."
            // results={[
            //     "95% de redução no tempo de reserva de espaços",
            //     "Mais de 150 condomínios utilizando a plataforma",
            //     "80% de aumento na satisfação dos moradores",
            //     "Redução de 70% em conflitos por reservas",
            //     "Sistema de segurança 24/7 implementado",
            //     "Comunicação instantânea entre moradores e administração"
            // ]}
            />

            <CaseGallerySection
                title="Galeria de Imagens"
                description="Explore a galeria de imagens do projeto."
                imagesFolder="/assets/images/mockups/cases/sigmaapp"
            />
            <CaseNavigationSection
                previousCase={{
                    href: "/cases/icalvinus",
                    company: "iCalvinus",
                    title: "Igreja Presbiteriana do Brasil",
                    mockup: "/assets/images/mockups/iCalvinus_mockup_4.png"
                }}
                nextCase={{
                    href: "/cases/ipiconecta",
                    company: "IPIConecta",
                    title: "Igreja Presbiteriana Independente do Brasil",
                    mockup: "/assets/images/mockups/ipiconecta_desktop+mobile_mockup_1.png"
                }}
            />

        </main>
    );
}

export default SigmaappPage;