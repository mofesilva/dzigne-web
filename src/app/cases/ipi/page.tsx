import React from 'react';
import Footer from '@/components/footer/Footer';
import SecondaryHeaderSection from '@/components/SecondaryHeaderSection';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';

export const metadata = {
    title: "Case IPI - Plataforma Educacional iCalvinus | Dzign-e",
    description: "Como desenvolvemos uma plataforma educacional personalizada para a Igreja Presbiteriana Independente"
};

function IPIPage() {
    return (
        <main className="flex flex-col">
            <SecondaryHeaderSection 
                content={
                    <CaseHeroSection
                        logo="/assets/images/logos/ipi.png"
                        company="IPI - Igreja Presbiteriana Independente"
                        title="Plataforma Educacional Personalizada"
                        description="Desenvolvemos o iCalvinus, uma plataforma educacional completa com aplicativo móvel para alunos e interface web para professores, revolucionando o ensino teológico digital."
                        tags={["Educação", "Mobile App", "Web Platform", "React Native", "LMS"]}
                    />
                }
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
                title="Interface e Experiência do Usuário"
                description="Conheça as telas e funcionalidades que criamos para proporcionar uma experiência de aprendizado única e envolvente."
                images={[
                    {
                        src: "/assets/images/mockups/iCalvinus_mockup.png",
                        alt: "Tela principal do aplicativo iCalvinus",
                        description: "Dashboard do estudante com cursos em andamento e progresso de estudos"
                    },
                    {
                        src: "/assets/images/mockups/iCalvinus_mockup_2.png",
                        alt: "Interface de cursos e lições",
                        description: "Tela de curso com vídeo-aulas, materiais complementares e avaliações"
                    },
                    {
                        src: "/assets/images/mockups/iCalvinus_mockup_3.png",
                        alt: "Sistema de avaliações interativo",
                        description: "Interface de avaliações com diferentes tipos de questões e feedback imediato"
                    },
                    {
                        src: "/assets/images/mockups/iCalvinus_mockup_4.png",
                        alt: "Painel administrativo para professores",
                        description: "Dashboard do professor com gestão de conteúdo e acompanhamento de alunos"
                    }
                ]}
            />

            <CaseNavigationSection
                previousCase={{
                    href: "/cases/sigmacon",
                    company: "Sigmacon",
                    title: "App de Gestão Condominial"
                }}
                nextCase={{
                    href: "/cases/labormed",
                    company: "Labormed",
                    title: "Sistema de Gestão Laboratorial"
                }}
            />

            <Footer />
        </main>
    );
}

export default IPIPage;