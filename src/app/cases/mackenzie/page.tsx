import React from 'react';
import Footer from '@/components/footer/Footer';
import SecondaryHeaderSection from '@/components/SecondaryHeaderSection';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';

export const metadata = {
    title: "Case Mackenzie - Plataforma OAB | Dzign-e",
    description: "Como desenvolvemos uma plataforma revolucionária para estudos da OAB na Universidade Mackenzie"
};

function MackenziePage() {
    return (
        <div className="flex flex-col">
            <SecondaryHeaderSection
                content={
                    <CaseHeroSection
                        logo="/assets/images/logos/mackenzie1.png"
                        company="Universidade Mackenzie"
                        title="Plataforma de Estudos para OAB"
                        description="Desenvolvemos uma solução digital completa que revolucionou a preparação dos estudantes de Direito para o exame da OAB, integrando simulados intuitivos com gestão dinâmica de conteúdo."
                        tags={["Educação", "Mobile App", "Web Platform", "Flutter", "Node.js"]}
                    />
                }
            />

            <CaseDetailsSection
                duration="6 meses"
                team="2 desenvolvedores"
                technologies={["Flutter", "Dart", "Node.js", "MySQL", "Akamai Cloud"]}
                challenge="A Universidade Mackenzie precisava de uma plataforma moderna que permitisse aos estudantes de Direito se prepararem de forma mais eficiente para o exame da OAB. O desafio era criar uma solução que fosse intuitiva para os alunos e ao mesmo tempo oferecesse ferramentas robustas para os professores gerenciarem o conteúdo dinamicamente."
                solution="Desenvolvemos uma plataforma completa composta por um aplicativo móvel para estudantes e um painel web para professores. O app permite realizar simulados personalizados, acompanhar progresso e estudar com base nas áreas de maior dificuldade. O painel web oferece criação de questões, análise de desempenho dos alunos e gestão completa do conteúdo educacional."
            // results={[
            //     "85% de aumento na taxa de aprovação dos estudantes",
            //     "Mais de 2.000 alunos ativos mensalmente",
            //     "Redução de 40% no tempo de correção para professores",
            //     "Interface 60% mais intuitiva que a solução anterior",
            //     "Sistema de analytics em tempo real implementado",
            //     "100% de compatibilidade mobile implementada"
            // ]}
            />

            <CaseGallerySection
                title="Interface e Funcionalidades"
                description="Conheça as principais telas e funcionalidades que desenvolvemos para transformar a experiência de estudos dos alunos da Mackenzie."
                images={[
                    {
                        src: "/assets/images/mockups/oabmack_mockup.png",
                        alt: "Tela principal do aplicativo OAB Mackenzie",
                        description: "Tela inicial com simulados e estatísticas de desempenho"
                    },
                    {
                        src: "/assets/images/mockups/oabmack_mockup_2.png",
                        alt: "Simulado em andamento no app",
                        description: "Interface de realização de simulados com cronômetro e marcação de questões"
                    }
                ]}
            />

            <CaseNavigationSection
                nextCase={{
                    href: "/cases/sigmacon",
                    company: "Sigmacon",
                    title: "App de Gestão Condominial"
                }}
            />
        </div>
    );
}

export default MackenziePage;