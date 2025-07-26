import React from 'react';
import CaseCard from './CaseCard';

function CasesListSection() {
    return (
        <section className='bg-eggshell w-full py-32'>
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-rajdhani text-5xl font-bold text-carbon mb-4">
                        Projetos que Transformaram Negócios
                    </h2>
                    <p className="font-league-spartan text-xl text-carbon/80 max-w-3xl mx-auto">
                        Cada projeto é único e desenvolvido com foco nos resultados do cliente.
                        Veja como ajudamos empresas a alcançar seus objetivos através da tecnologia.
                    </p>
                </div>

                <div className="space-y-16">
                    <CaseCard
                        logo="/assets/images/logos/mackenzie.png"
                        company="Universidade Mackenzie"
                        title="Plataforma de Estudos para OAB"
                        description="Criamos uma solução digital exclusiva que potencializou o estudo dos alunos para a OAB, integrando simulados intuitivos com gestão dinâmica do conteúdo pelos professores. A plataforma revolucionou a preparação dos estudantes."
                        mockup="/assets/images/mockups/oabmack_mockup.png"
                        href="/cases/mackenzie"
                        tags={["Educação", "Mobile App", "Web Platform"]}
                        isReversed={false}
                    />

                    <CaseCard
                        logo="/assets/images/logos/sigmacon.png"
                        company="Sigmacon"
                        title="App de Gestão Condominial"
                        description="Desenvolvemos um app que revolucionou a gestão condominial, integrando reservas, câmeras e autorizações de entrada em uma única solução inteligente. A tecnologia virou aliada da segurança."
                        mockup="/assets/images/mockups/oabmack_mockup.png"
                        href="/cases/sigmacon"
                        tags={["Gestão", "Mobile App", "IoT"]}
                        isReversed={true}
                    />

                    <CaseCard
                        logo="/assets/images/logos/ipi.png"
                        company="IPI - Igreja Presbiteriana Independente"
                        title="Plataforma Educacional Personalizada"
                        description="Auxiliamos a IPI no desenvolvimento de uma plataforma personalizada, composta por um aplicativo móvel para alunos e uma interface web para professores. A solução proporcionou uma experiência intuitiva e produtiva de estudos."
                        mockup="/assets/images/mockups/iCalvinus_mockup_4.png"
                        href="/cases/ipi"
                        tags={["Educação", "Mobile App", "Web Platform"]}
                        isReversed={false}
                    />

                    <CaseCard
                        logo="/assets/images/logos/labormed.png"
                        company="Labormed"
                        title="Sistema de Gestão Laboratorial"
                        description="Desenvolvemos um sistema completo para gestão laboratorial, incluindo controle de exames, resultados e integração com equipamentos. A solução otimizou os processos e melhorou a experiência dos pacientes."
                        mockup="/assets/images/mockups/oabmack_mockup_2.png"
                        href="/cases/labormed"
                        tags={["Saúde", "Web System", "Integration"]}
                        isReversed={true}
                    />
                </div>
            </div>
        </section>
    );
}

export default CasesListSection; 