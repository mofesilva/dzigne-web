import React from 'react';
import { TeamCard, TeamMember } from './TeamCard';

/*
 *  TODO: Substituir com dados reais da equipe.
 *  Adicionar fotos em /public/assets/images/team/ (112×112 ou maior, quadradas).
 */
const teamMembers: TeamMember[] = [
    {
        name: 'Marco Antônio Lopes da Silva',
        role: 'Sócio-fundador | Full-Stack Developer | Tech Lead',
        photo: '/assets/images/team/marco-antonio.jpg',
    },
    {
        name: 'Rodrigo Wagner Araújo',
        role: 'Sócio-fundador | Product Designer | Product Manager',
        photo: '/assets/images/team/lucas-ferreira.jpg',
    },
    {
        name: 'Samuel Ferreira e Silva',
        role: 'CEO | Diretor Comercial',
        photo: '/assets/images/team/juliana-mendes.jpg',
    },
    {
        name: 'Moisés Ferreira e Silva',
        role: 'Vice-presidente | Full-Stack Developer | Team Lead',
        photo: '/assets/images/team/juliana-mendes.jpg',
    },

];

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
