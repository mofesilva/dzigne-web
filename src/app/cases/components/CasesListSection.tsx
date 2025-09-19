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
                        description="Uma plataforma educacional que transformou a preparação dos estudantes de Direito para o exame da OAB, integrando simulados interativos com gestão dinâmica de conteúdo."
                        mockup="/assets/images/mockups/oabmack_mockup_2.png"
                        href="/cases/oab-mack"
                        tags={["Educação", "Direito", "Plataforma de Estudos"]}
                        isReversed={false}
                    />
                    <Divider width="1" color="carbon" height="100%" horizontal={true} />
                    <CaseCard
                        logo="/assets/images/logos/icalvinus-h.png"
                        company="Igreja Presbiteriana do Brasil"
                        description="Um sistema inovador que transformou a gestão conciliar da Igreja Presbiteriana do Brasil, centralizando documentos e decisões em uma plataforma digital acessível e eficiente."
                        mockup="/assets/images/mockups/iCalvinus_mockup_4.png"
                        href="/cases/icalvinus"
                        tags={["Gestão", "Organização Religiosa", "Gestão de Documentos"]}
                        isReversed={true}
                    />
                    <Divider width="1" color="carbon" height="100%" horizontal={true} />
                    <CaseCard
                        logo="/assets/images/logos/sigmaapp.png"
                        company="Sigmacon"
                        description="O aplicativo móvel que mudou a forma de gerenciar segurança em condomínios, integrando reservas de espaços, controle de acesso e monitoramento em uma única plataforma intuitiva."
                        mockup="/assets/images/mockups/sigmaapp-mockup-2.png"
                        href="/cases/sigmaapp"
                        tags={["Segurança", "Condomínios", "IoT", "Gestão de Espaços"]}
                        isReversed={false}
                    />
                    <Divider width="1" color="carbon" height="100%" horizontal={true} />
                    <CaseCard
                        logo="/assets/images/logos/ipiconecta-h4.png"
                        company="Igreja Presbiteriana Independente do Brasil"
                        description="Um sistema definitivo para gestão conciliar, centralizando documentos, decisões e comunicações em uma plataforma digital acessível e eficiente, além de cadastro de sínodos, presbitérios, igrejas e rol de membros."
                        mockup="/assets/images/mockups/ipiconecta_desktop+mobile_mockup_1.png"
                        href="/cases/ipiconecta"
                        tags={["Gestão", "Organização Religiosa", "Gestão de Documentos"]}
                        isReversed={true}
                    />
                    <Divider width="1" color="carbon" height="100%" horizontal={true} />
                    <CaseCard
                        logo="/assets/images/logos/contrataja-h.png"
                        company="Contrata Já"
                        description="Uma marketplace em desenvolvimento que conecta profissionais de serviços a clientes, facilitando contratações rápidas e seguras com avaliações e portfólios integrados."
                        mockup="/assets/images/mockups/contrataja-ipad-mockup-2.png"
                        href="/cases/contrata-ja"
                        tags={["Serviços", "Marketplace", "Plataforma de Contratação"]}
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