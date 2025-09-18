import React from 'react';
import CaseCard from './CaseCard';
import Divider from '@/components/Divider';

function CasesListSection() {
    return (
        <section className='bg-eggshell w-full pt-16 pb-32'>
            <div className="section-container">
                <div className="space-y-16">
                    <CaseCard
                        logo="/assets/images/logos/mackenzie2.png"
                        company="Universidade Mackenzie"
                        title="OAB Mack"
                        description="Criamos uma solução digital exclusiva que potencializou o estudo dos alunos para a OAB, integrando simulados intuitivos com gestão dinâmica do conteúdo pelos professores. A plataforma revolucionou a preparação dos estudantes."
                        mockup="/assets/images/mockups/oabmack_mockup_2.png"
                        href="/cases/oab-mack"
                        tags={["Educação", "Direito", "Plataforma de Estudos"]}
                        isReversed={false}
                    />
                    <Divider width="1" color="carbon" height="100%" horizontal={true} />
                    <CaseCard
                        logo="/assets/images/logos/icalvinus-h.png"
                        company="Igreja Presbiteriana do Brasil"
                        description="Auxiliamos a IPI no desenvolvimento de uma plataforma personalizada, composta por um aplicativo móvel para alunos e uma interface web para professores. A solução proporcionou uma experiência intuitiva e produtiva de estudos."
                        mockup="/assets/images/mockups/iCalvinus_mockup_4.png"
                        href="/cases/icalvinus"
                        tags={["Gestão Conciliar", "Organização Religiosa", "Gestão de Documentos"]}
                        isReversed={true}
                    />
                    <Divider width="1" color="carbon" height="100%" horizontal={true} />
                    <CaseCard
                        logo="/assets/images/logos/sigmaapp.png"
                        company="Sigmacon"
                        description="Desenvolvemos um app que revolucionou a gestão condominial, integrando reservas, câmeras e autorizações de entrada em uma única solução inteligente. A tecnologia virou aliada da segurança."
                        mockup="/assets/images/mockups/sigmaapp-mockup-2.png"
                        href="/cases/sigmaapp"
                        tags={["Gestão", "Condomínios", "IoT"]}
                        isReversed={false}
                    />
                    <Divider width="1" color="carbon" height="100%" horizontal={true} />
                    <CaseCard
                        logo="/assets/images/logos/ipiconecta-h4.png"
                        company="Igreja Presbiteriana Independente do Brasil"

                        description="Desenvolvemos um sistema completo para gestão laboratorial, incluindo controle de exames, resultados e integração com equipamentos. A solução otimizou os processos e melhorou a experiência dos pacientes."
                        mockup="/assets/images/mockups/ipiconecta_desktop+mobile_mockup_1.png"
                        href="/cases/ipiconecta"
                        tags={["Gestão Conciliar", "Mobile App", "Web Platform"]}
                        isReversed={true}
                    />
                    <Divider width="1" color="carbon" height="100%" horizontal={true} />
                    <CaseCard
                        logo="/assets/images/logos/contrataja-h.png"
                        company="Contrata Já"
                        description="Desenvolvemos um sistema completo para gestão laboratorial, incluindo controle de exames, resultados e integração com equipamentos. A solução otimizou os processos e melhorou a experiência dos pacientes."
                        mockup="/assets/images/mockups/oabmack_mockup_2.png"
                        href="/cases/contrata-ja"
                        tags={["Plataforma de Contratação de Serviços", "Marketplace", "Setor de Serviços"]}
                        isReversed={false}
                    />
                    {/* <Divider width="1" color="carbon" height="100%" horizontal={true} /> */}
                    {/* <CaseCard
                        logo="/assets/images/logos/labormed.png"
                        company="Ergon Missões"
                        title="Ergon Missões"
                        description="Desenvolvemos um sistema completo para gestão laboratorial, incluindo controle de exames, resultados e integração com equipamentos. A solução otimizou os processos e melhorou a experiência dos pacientes."
                        mockup="/assets/images/mockups/oabmack_mockup_2.png"
                        href="/cases/labormed"
                        tags={["Saúde", "Web System", "Integration"]}
                        isReversed={true}
                    /> */}
                </div>
            </div>
        </section>
    );
}

export default CasesListSection; 