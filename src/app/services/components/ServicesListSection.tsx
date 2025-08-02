'use client';
import React, { useState } from 'react';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    features: string[];
    globalMousePosition: { x: number, y: number };
    isMouseInSection: boolean;
}

function ServiceCard({ icon, title, description, features, globalMousePosition, isMouseInSection }: ServiceCardProps) {
    const [isNearby, setIsNearby] = useState(false);
    const [isInside, setIsInside] = useState(false);
    const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!cardRef.current || !isMouseInSection) {
            setIsNearby(false);
            setIsInside(false);
            return;
        }

        const rect = cardRef.current.getBoundingClientRect();
        const distance = 120;

        const isNear = globalMousePosition.x >= rect.left - distance &&
            globalMousePosition.x <= rect.right + distance &&
            globalMousePosition.y >= rect.top - distance &&
            globalMousePosition.y <= rect.bottom + distance;

        const isWithin = globalMousePosition.x >= rect.left &&
            globalMousePosition.x <= rect.right &&
            globalMousePosition.y >= rect.top &&
            globalMousePosition.y <= rect.bottom;

        setIsNearby(isNear);
        setIsInside(isWithin);

        if (isNear) {
            setLocalMousePosition({
                x: globalMousePosition.x - rect.left,
                y: globalMousePosition.y - rect.top
            });
        }
    }, [globalMousePosition, isMouseInSection]);

    const handleCardMouseEnter = () => {
        if (isMouseInSection) {
            setIsInside(true);
        }
    };

    const handleCardMouseLeave = () => {
        setIsInside(false);
    };

    return (
        <div
            ref={cardRef}
            className="relative bg-eggshell/5 border border-eggshell/10 rounded-2xl p-8 transition-all duration-300 group"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
        >
            {/* Borda toda verde quando dentro */}
            <div
                className={`absolute -inset-[1px] rounded-2xl border-2 border-green-accent pointer-events-none transition-opacity duration-300 ease-out ${isInside ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Efeito spotlight quando próximo mas fora */}
            {isNearby && !isInside && isMouseInSection && (
                <div
                    className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-200"
                    style={{
                        background: `radial-gradient(80px circle at ${localMousePosition.x}px ${localMousePosition.y}px, rgba(127, 209, 12, 0.6), transparent 70%)`,
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        padding: '1px'
                    }}
                />
            )}

            <div className="mb-6 text-center">
                <i className={`${icon} text-green-accent text-4xl`}></i>
            </div>
            
            <h3 className="font-rajdhani text-2xl font-bold text-white mb-4 group-hover:text-green-accent transition-colors cursor-default text-center">
                {title}
            </h3>
            
            <p className="text-white/70 font-league-spartan mb-6 leading-relaxed cursor-default text-center">
                {description}
            </p>
            
            <div className="space-y-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm font-league-spartan text-white/60">
                        <i className="fas fa-check text-green-accent mr-3 text-xs"></i>
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ServicesListSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseInSection, setIsMouseInSection] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setIsMouseInSection(true);
    };

    const handleMouseLeave = () => {
        setIsMouseInSection(false);
    };

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
            description: "Interfaces intuitivas e experiências excepcionais que conectam usuários aos seus produtos de forma natural.",
            features: [
                "Interface responsiva",
                "Wireframes detalhados",
                "Prototipagem funcional",
                "Design consistente"
            ]
        },
        {
            icon: "fas fa-rocket",
            title: "Consultoria em TI",
            description: "Orientação estratégica para otimizar seus processos tecnológicos e acelerar a transformação digital.",
            features: [
                "Análise de infraestrutura",
                "Planejamento estratégico",
                "Auditoria de sistemas",
                "Otimização de processos"
            ]
        },
        {
            icon: "fas fa-chart-line",
            title: "Analytics e Performance",
            description: "Monitoramento e otimização contínua para garantir que seus produtos digitais performem no máximo potencial.",
            features: [
                "Google Analytics setup",
                "Performance monitoring",
                "SEO optimization",
                "Relatórios detalhados"
            ]
        }
    ];

    return (
        <section 
            className='bg-carbon w-full py-32'
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-rajdhani text-5xl font-bold text-white mb-8">
                        Soluções Completas em <span className="text-green-accent">Tecnologia</span>
                    </h2>
                    <p className="font-league-spartan text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                        Da concepção à implementação, oferecemos todos os serviços necessários 
                        para transformar sua visão em realidade digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            globalMousePosition={mousePosition}
                            isMouseInSection={isMouseInSection}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesListSection;