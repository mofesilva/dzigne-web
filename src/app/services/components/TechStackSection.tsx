'use client';
import React, { useState } from 'react';

interface TechItemProps {
    name: string;
    icon: string;
    color: string;
}

function TechItem({ name, icon, color }: TechItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: color }}
            >
                <i className={`${icon} text-2xl text-white`}></i>
            </div>
            <h4 className="font-league-spartan font-semibold text-carbon">{name}</h4>
        </div>
    );
}

interface TechCategoryProps {
    title: string;
    icon: string;
    technologies: TechItemProps[];
}

function TechCategory({ title, icon, technologies }: TechCategoryProps) {
    return (
        <div className="mb-16">
            <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mr-4">
                    <i className={`${icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-carbon">{title}</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                    <TechItem
                        key={index}
                        name={tech.name}
                        icon={tech.icon}
                        color={tech.color}
                    />
                ))}
            </div>
        </div>
    );
}

function TechStackSection() {
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
                { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
                { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" }
            ]
        },
        {
            title: "Cloud & Hospedagem",
            icon: "fas fa-cloud",
            technologies: [
                { name: "Google Firebase", icon: "fas fa-fire", color: "#FFCA28" },
                { name: "Akamai Cloud", icon: "fas fa-cloud", color: "#0096D6" }
            ]
        }
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-rajdhani font-bold text-carbon mb-6">
                        Tecnologias que <span className="text-green-accent">Dominamos</span>
                    </h2>
                    <p className="text-lg font-league-spartan text-gray-700 max-w-3xl mx-auto">
                        Utilizamos as melhores e mais modernas tecnologias do mercado para 
                        garantir performance, escalabilidade e qualidade em todos os projetos.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    {techCategories.map((category, index) => (
                        <TechCategory
                            key={index}
                            title={category.title}
                            icon={category.icon}
                            technologies={category.technologies}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-green-accent">
                        <h3 className="text-xl font-rajdhani font-bold text-carbon mb-4">
                            Stack Personalizada para Seu Projeto
                        </h3>
                        <p className="text-base font-league-spartan text-gray-700 mb-6">
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