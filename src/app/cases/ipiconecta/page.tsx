import React from 'react';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';
import { getGalleryImages } from '../lib/getGalleryImages';

export const metadata = {
    title: "Case IPI - Plataforma Educacional iCalvinus | Dzign-e",
    description: "Como desenvolvemos uma plataforma educacional personalizada para a Igreja Presbiteriana Independente"
};

function IPIPage() {
    return (
        <main className="flex flex-col">
            <CaseHeroSection
                logo="/assets/images/logos/ipi.png"
                company="IPI - Igreja Presbiteriana Independente"
                title="Plataforma Educacional Personalizada"
                description="Desenvolvemos o iCalvinus, uma plataforma educacional completa com aplicativo móvel para alunos e interface web para professores, revolucionando o ensino teológico digital."
                tags={["Educação", "Mobile App", "Web Platform", "React Native", "LMS"]}
                mockup="/assets/images/mockups/ipiconecta_desktop+mobile_mockup_1.png"
            />

            <CaseDetailsSection
                duration="12 meses"
                team="7 desenvolvedores"
                technologies={["React Native", "Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "TypeScript", "Socket.io"]}
                challenge="A IPI precisava de uma plataforma educacional moderna que oferecesse uma experiência de aprendizado envolvente para estudos teológicos. O desafio incluía criar um sistema que suportasse diferentes tipos de conteúdo (vídeos, textos, avaliações), permitisse interação entre alunos e professores, e oferecesse ferramentas robustas de gestão acadêmica."
                solution="Criamos o iCalvinus, uma plataforma completa composta por um aplicativo móvel intuitivo para estudantes e um painel web avançado para professores. A solução inclui sistema de cursos modulares, avaliações interativas, fóruns de discussão, transmissões ao vivo, biblioteca digital e ferramentas de acompanhamento de progresso personalizado."
                results={[
                    "300% de aumento no engajamento dos alunos",
                    "Mais de 1.500 estudantes ativos na plataforma",
                    "90% de satisfação dos professores com as ferramentas",
                    "Redução de 50% no tempo de correção de avaliações",
                    "Sistema de gamificação aumentou conclusão de cursos em 65%",
                    "Plataforma 100% responsiva com acesso offline"
                ]}
            />

            <CaseGallerySection
                title="Galeria de Imagens"
                description="Explore a galeria de imagens do projeto."
                images={getGalleryImages('/assets/images/mockups/cases/ipiconecta')}
            />

            <CaseNavigationSection
                previousCase={{
                    href: "/cases/sigmaapp",
                    company: "SigmaApp",
                    title: "Sigmacon",
                    mockup: "/assets/images/mockups/sigmaapp-mockup-2.png"
                }}
                nextCase={{
                    href: "/cases/contrata-ja",
                    company: "Contrata Já",
                    title: "Contrata Já",
                    mockup: "/assets/images/mockups/contrataja-ipad-mockup-2.png"
                }}
            />

        </main>
    );
}

export default IPIPage;