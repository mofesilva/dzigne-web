'use client';
import React, { useState } from 'react';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-accent"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-accent rounded-lg flex items-center justify-center mr-4">
                    <i className={`${icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-rajdhani font-bold text-carbon">{title}</h3>
            </div>
            
            <p className="text-gray-700 font-league-spartan mb-6 leading-relaxed">
                {description}
            </p>
            
            <div className="space-y-2">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm font-league-spartan text-gray-600">
                        <i className="fas fa-check text-green-accent mr-2"></i>
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ServicesListSection() {
    const services = [
        {
            icon: "fas fa-code",
            title: "Desenvolvimento Web e Mobile",
            description: "Criamos aplicações web e mobile modernas, responsivas e escaláveis usando as melhores tecnologias do mercado.",
            features: [
                "Aplicações web responsivas",
                "Apps nativos e híbridos",
                "Progressive Web Apps (PWA)",
                "Arquitetura escalável"
            ]
        },
        {
            icon: "fas fa-server",
            title: "Hospedagem dos Serviços",
            description: "Soluções completas de hospedagem com alta disponibilidade, segurança e performance para seus projetos.",
            features: [
                "Cloud hosting otimizado",
                "CDN global",
                "Backup automático",
                "Monitoramento 24/7"
            ]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Design de Produtos Digitais",
            description: "Desenvolvemos produtos digitais que combinam funcionalidade excepcional com experiências de usuário memoráveis.",
            features: [
                "Prototipagem interativa",
                "Design system",
                "Pesquisa de usuário",
                "Testes de usabilidade"
            ]
        },
        {
            icon: "fas fa-paint-brush",
            title: "UI/UX Design",
            description: "Criamos interfaces intuitivas e experiências de usuário que encantam e convertem, focando na usabilidade e estética.",
            features: [
                "Interface design",
                "User experience",
                "Wireframes e mockups",
                "Design responsivo"
            ]
        },
        {
            icon: "fas fa-palette",
            title: "Desenvolvimento de Identidade Visual",
            description: "Construímos identidades visuais marcantes que transmitem os valores da sua marca de forma autêntica.",
            features: [
                "Logo e branding",
                "Manual de marca",
                "Paleta de cores",
                "Tipografia personalizada"
            ]
        },
        {
            icon: "fas fa-tools",
            title: "Manutenção",
            description: "Mantemos seus sistemas sempre atualizados, seguros e funcionando perfeitamente com suporte contínuo.",
            features: [
                "Atualizações regulares",
                "Monitoramento proativo",
                "Correção de bugs",
                "Otimização de performance"
            ]
        },
        {
            icon: "fas fa-users",
            title: "Alocação de Equipe",
            description: "Fornecemos profissionais especializados para integrar sua equipe e acelerar o desenvolvimento dos seus projetos.",
            features: [
                "Desenvolvedores experientes",
                "Designers especializados",
                "Gestores de projeto",
                "Consultores técnicos"
            ]
        },
        {
            icon: "fas fa-laptop-code",
            title: "Outsourcing de TI",
            description: "Terceirização completa de TI com equipes dedicadas para otimizar seus processos e reduzir custos operacionais.",
            features: [
                "Equipe dedicada",
                "Gestão completa",
                "SLA garantido",
                "Redução de custos"
            ]
        },
        {
            icon: "fas fa-lightbulb",
            title: "Consultoria em TI",
            description: "Orientação estratégica em tecnologia para ajudar sua empresa a tomar as melhores decisões tecnológicas.",
            features: [
                "Análise de arquitetura",
                "Planejamento estratégico",
                "Auditoria de sistemas",
                "Otimização de processos"
            ]
        }
    ];

    return (
        <section className="w-full py-20 bg-eggshell">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-rajdhani font-bold text-carbon mb-6">
                        Soluções Completas em Tecnologia
                    </h2>
                    <p className="text-lg font-league-spartan text-gray-700 max-w-3xl mx-auto">
                        Da concepção à implementação, oferecemos todos os serviços necessários 
                        para transformar sua visão em realidade digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesListSection;