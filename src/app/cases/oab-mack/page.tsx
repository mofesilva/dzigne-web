import React from 'react';
import CaseHeroSection from '../components/CaseHeroSection';
import CaseDetailsSection from '../components/CaseDetailsSection';
import CaseGallerySection from '../components/CaseGallerySection';
import CaseNavigationSection from '../components/CaseNavigationSection';
import HeaderSection from '@/app/components/HeaderSection';

function MackenziePage() {
    return (
        <div className="flex flex-col">
            <HeaderSection
                content={
                    <CaseHeroSection
                        logo="/assets/images/logos/mackenzie2.png"
                        company="Universidade Mackenzie"
                        title='OAB Mack'
                        description="Desenvolvemos uma solução digital completa que revolucionou a preparação dos estudantes de Direito para o exame da OAB, integrando simulados intuitivos com gestão dinâmica de conteúdo."
                        tags={["Educação", "Mobile App", "Web Platform", "Flutter", "Node.js"]}
                    />
                }
            />

            <CaseDetailsSection
                duration="6 meses"
                team="3 desenvolvedores"
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
                title="Galeria de Imagens"
                description="Explore a galeria de imagens do projeto."
                imagesFolder="/assets/images/mockups/cases/oab-mack"
            />

            <CaseNavigationSection
                nextCase={{
                    href: "/cases/icalvinus",
                    company: "iCalvinus",
                    title: "Igreja Presbiteriana do Brasil"
                }}
            />
        </div>
    );
}

export default MackenziePage;