import React from 'react';
import Image from 'next/image';

interface TeamMember {
    name: string;
    role: string;
    photo: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
}

/*
 *  TODO: Substituir com dados reais da equipe.
 *  Adicionar fotos em /public/assets/images/team/ (112×112 ou maior, quadradas).
 */
const teamMembers: TeamMember[] = [
    {
        name: 'Moisés Silva',
        role: 'CEO & Full-Stack Developer',
        photo: '/assets/images/team/moises-silva.jpg',
        linkedin: 'https://www.linkedin.com/in/moisessilva/',
        github: 'https://github.com/moisessilva',
    },
    {
        name: 'Ana Costa',
        role: 'UI/UX Designer Lead',
        photo: '/assets/images/team/ana-costa.jpg',
        linkedin: 'https://www.linkedin.com/in/anacosta/',
        instagram: 'https://instagram.com/anacosta',
    },
    {
        name: 'Lucas Ferreira',
        role: 'Backend Engineer',
        photo: '/assets/images/team/lucas-ferreira.jpg',
        linkedin: 'https://www.linkedin.com/in/lucasferreira/',
        github: 'https://github.com/lucasferreira',
    },
    {
        name: 'Juliana Mendes',
        role: 'Mobile Developer',
        photo: '/assets/images/team/juliana-mendes.jpg',
        linkedin: 'https://www.linkedin.com/in/julianamendes/',
    },
];

function SocialLink({ href, icon, alt }: { href: string; icon: string; alt: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-100 transition-opacity duration-300"
        >
            <Image
                src={`/assets/icons/brands/${icon}.svg`}
                alt={alt}
                width={18}
                height={18}
            />
        </a>
    );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
    const cornerClass =
        index === 0
            ? 'rounded-tl-4xl'
            : index === 1
                ? 'rounded-tr-4xl'
                : index === 2
                    ? 'rounded-bl-4xl'
                    : index === 3
                        ? 'rounded-br-4xl'
                        : '';

    return (
        <div
            className={`bg-neutral-200 border-2 border-neutral-300 rounded-2xl ${cornerClass} p-7 lg:p-9 text-center`}
        >
            {/* Avatar */}
            <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-green-accent bg-neutral-300">
                <Image
                    src={member.photo}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <h5 className="font-rajdhani font-bold text-carbon">{member.name}</h5>
            <p className="font-outfit text-carbon/60 text-small mb-4">{member.role}</p>

            {/* Social */}
            <div className="flex items-center justify-center gap-4">
                {member.linkedin && (
                    <SocialLink href={member.linkedin} icon="linkedin" alt="LinkedIn" />
                )}
                {member.github && (
                    <SocialLink href={member.github} icon="github" alt="GitHub" />
                )}
                {member.instagram && (
                    <SocialLink href={member.instagram} icon="instagram" alt="Instagram" />
                )}
            </div>
        </div>
    );
}

function AboutTeamSection() {
    return (
        <section className="bg-eggshell w-full relative overflow-hidden">
            {/* Header */}
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-24 lg:pt-32 pb-4">
                <div className="max-w-3xl">
                    <p className="text-caption font-outfit text-carbon/60 mb-4 tracking-widest uppercase">
                        Nosso Time
                    </p>
                    <h1 className="font-rajdhani text-carbon">
                        <span className="font-medium">As mentes por trás da </span>
                        <span className="font-bold text-green-accent">Dzign-e</span>
                    </h1>
                </div>
            </div>

            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-6 pb-4">
                <p className="font-outfit text-carbon/60 max-w-2xl leading-relaxed">
                    Profissionais apaixonados por tecnologia, design e resultados.
                    Cada membro do nosso time traz uma perspectiva única para
                    construir soluções extraordinárias.
                </p>
            </div>

            {/* Team Grid */}
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32 pt-12 pb-24 lg:pb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    {teamMembers.map((member, i) => (
                        <TeamCard key={i} member={member} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutTeamSection;
