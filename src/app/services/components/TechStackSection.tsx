'use client';
import React, { useState } from 'react';

interface TechItemProps {
    name: string;
    icon: string;
    color: string;
    globalMousePosition: { x: number, y: number };
    isMouseInSection: boolean;
}

function TechItem({ name, icon, color, globalMousePosition, isMouseInSection }: TechItemProps) {
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
        const distance = 80;

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
            className="relative bg-carbon/5 border border-carbon/10 rounded-xl p-4 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
        >
            {/* Borda toda verde quando dentro */}
            <div
                className={`absolute -inset-[1px] rounded-xl border border-green-accent pointer-events-none transition-opacity duration-300 ease-out ${isInside ? 'opacity-70' : 'opacity-0'
                    }`}
            />

            {/* Efeito spotlight quando próximo mas fora */}
            {isNearby && !isInside && isMouseInSection && (
                <div
                    className="absolute -inset-[1px] rounded-xl pointer-events-none transition-opacity duration-200"
                    style={{
                        background: `radial-gradient(60px circle at ${localMousePosition.x}px ${localMousePosition.y}px, rgba(127, 209, 12, 0.4), transparent 70%)`,
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        padding: '1px'
                    }}
                />
            )}

            <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: color }}
            >
                <i className={`${icon} text-lg text-white`}></i>
            </div>
            <h4 className="font-league-spartan font-semibold text-carbon group-hover:text-green-accent transition-colors">
                {name}
            </h4>
        </div>
    );
}

interface TechCategoryProps {
    title: string;
    icon: string;
    technologies: Array<{name: string, icon: string, color: string}>;
    globalMousePosition: { x: number, y: number };
    isMouseInSection: boolean;
}

function TechCategory({ title, icon, technologies, globalMousePosition, isMouseInSection }: TechCategoryProps) {
    return (
        <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mr-4">
                    <i className={`${icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-3xl font-rajdhani font-bold text-carbon">{title}</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {technologies.map((tech, index) => (
                    <TechItem
                        key={index}
                        name={tech.name}
                        icon={tech.icon}
                        color={tech.color}
                        globalMousePosition={globalMousePosition}
                        isMouseInSection={isMouseInSection}
                    />
                ))}
            </div>
        </div>
    );
}

function TechStackSection() {
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

    const techCategories = [
        {
            title: "Front-end",
            icon: "fas fa-desktop",
            technologies: [
                { name: "React", icon: "fab fa-react", color: "#61DAFB" },
                { name: "Next.js", icon: "fas fa-code", color: "#000000" },
                { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
                { name: "TailwindCSS", icon: "fas fa-paint-brush", color: "#06B6D4" },
                { name: "Flutter", icon: "fas fa-mobile-alt", color: "#02569B" },
                { name: "Dart", icon: "fas fa-code", color: "#0175C2" }
            ]
        },
        {
            title: "Back-end",
            icon: "fas fa-server",
            technologies: [
                { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
                { name: "Express", icon: "fas fa-server", color: "#000000" },
                { name: "PHP", icon: "fab fa-php", color: "#777BB4" },
                { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" }
            ]
        },
        {
            title: "Banco de Dados",
            icon: "fas fa-database",
            technologies: [
                { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
                { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
                { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" },
                { name: "Redis", icon: "fas fa-memory", color: "#DC382D" }
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: "fas fa-cloud",
            technologies: [
                { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
                { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
                { name: "GitHub", icon: "fab fa-github", color: "#181717" },
                { name: "Linux", icon: "fab fa-linux", color: "#FCC624" }
            ]
        }
    ];

    return (
        <section 
            className="bg-eggshell w-full py-32"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="font-rajdhani text-5xl font-bold text-carbon mb-8">
                        Tecnologias que <span className="text-green-accent">Dominamos</span>
                    </h2>
                    <p className="font-league-spartan text-xl text-carbon/80 max-w-4xl mx-auto leading-relaxed">
                        Utilizamos as melhores e mais modernas tecnologias do mercado para 
                        garantir performance, escalabilidade e qualidade em todos os projetos.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {techCategories.map((category, index) => (
                        <TechCategory
                            key={index}
                            title={category.title}
                            icon={category.icon}
                            technologies={category.technologies}
                            globalMousePosition={mousePosition}
                            isMouseInSection={isMouseInSection}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-carbon/5 border border-carbon/10 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-rajdhani font-bold text-carbon mb-4">
                            Stack Personalizada para Seu Projeto
                        </h3>
                        <p className="text-base font-league-spartan text-carbon/70 mb-6 leading-relaxed">
                            Além das tecnologias listadas, adaptamos nossa stack às necessidades específicas 
                            do seu projeto, sempre priorizando performance e escalabilidade.
                        </p>
                        <a 
                            href="/contato" 
                            className="inline-flex items-center px-6 py-3 bg-green-accent text-white font-league-spartan font-semibold rounded-lg hover:bg-green-accent-light transition-colors"
                        >
                            <i className="fas fa-rocket mr-2"></i>
                            Vamos Conversar sobre Seu Projeto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStackSection;