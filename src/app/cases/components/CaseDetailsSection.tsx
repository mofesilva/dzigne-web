'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { ClockCircle, UsersGroupTwoRounded, CheckCircle } from '@solar-icons/react/ssr';

interface CaseDetailsSectionProps {
    duration: string;
    team: string;
    technologies: string[];
    challenge: string;
    solution: string;
    results?: string[];
}

function CaseDetailsSection({ duration, team, technologies, challenge, solution, results }: CaseDetailsSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const techIconMap: Record<string, string> = {
        'Flutter': '/assets/icons/tech/flutter.svg',
        'Dart': '/assets/icons/tech/dart.svg',
        'Node.js': '/assets/icons/tech/nodedotjs.svg',
        'Firebase': '/assets/icons/tech/firebase.svg',
        'MongoDB': '/assets/icons/tech/mongodb.svg',
        'AWS': '/assets/icons/tech/aws.svg',
        'AWS IoT': '/assets/icons/tech/aws.svg',
        'React Native': '/assets/icons/tech/react.svg',
        'Next.js': '/assets/icons/tech/nextdotjs.svg',
        'PostgreSQL': '/assets/icons/tech/postgresql.svg',
        'JavaScript': '/assets/icons/tech/javascript.svg',
        'TypeScript': '/assets/icons/tech/typescript.svg',
        'Tailwind CSS': '/assets/icons/tech/tailwindcss.svg',
        'Python': '/assets/icons/tech/python.svg',
        'PHP': '/assets/icons/tech/php.svg',
        'Express': '/assets/icons/tech/express.svg',
        'Docker': '/assets/icons/tech/docker.svg',
        'Vercel': '/assets/icons/tech/vercel.svg',
        'Linux': '/assets/icons/tech/linux.svg',
        'MySQL': '/assets/icons/tech/mysql.svg',
        'Akamai Cloud': '/assets/icons/tech/akamai.svg',
        'Redis': '/assets/icons/tech/redis.svg',
        'Socket.io': '/assets/icons/tech/socketdotio.svg',
        'WebRTC': '/assets/icons/tech/webrtc.svg',
    };

    return (
        <section ref={ref} className="bg-eggshell w-full">

            {/* ── Stats bar ── */}
            <div className="border-b border-carbon/10">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-16">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-carbon/[0.05] border border-carbon/[0.1] flex items-center justify-center shrink-0">
                                <ClockCircle weight="Outline" size={24} className="text-carbon" />
                            </div>
                            <h5 className="font-rajdhani font-bold text-carbon">{duration}</h5>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-carbon/[0.05] border border-carbon/[0.1] flex items-center justify-center shrink-0">
                                <UsersGroupTwoRounded weight="Outline" size={24} className="text-carbon" />
                            </div>
                            <h5 className="font-rajdhani font-bold text-carbon">{team}</h5>
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech) => {
                                    const icon = techIconMap[tech];
                                    return icon ? (
                                        <div key={tech} className="group cursor-default" title={tech}>
                                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-carbon/[0.05] border border-carbon/[0.1] flex items-center justify-center group-hover:border-green-accent/40 group-hover:bg-green-accent/[0.06] transition-all duration-300">
                                                <Image
                                                    src={icon}
                                                    alt={tech}
                                                    width={24}
                                                    height={24}
                                                    className="w-5 h-5 lg:w-6 lg:h-6 object-contain invert group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Challenge & Solution ── */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32 py-24 md:py-32 lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Challenge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <p className="flex items-center gap-3 text-caption font-outfit tracking-widest uppercase text-carbon/40 mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-accent -translate-y-px shrink-0" />
                            O Desafio
                        </p>
                        <h2 className="font-rajdhani font-bold text-carbon mb-8">
                            O que precisava ser <span className="text-green-accent">resolvido?</span>
                        </h2>
                        <div className="space-y-6">
                            {challenge.split('\n').filter(p => p.trim()).map((paragraph, i) => (
                                <h6 key={i} className="font-outfit text-carbon/70 text-body leading-relaxed text-justify">
                                    {paragraph}
                                </h6>
                            ))}
                        </div>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="flex items-center gap-3 text-caption font-outfit tracking-widest uppercase text-carbon/40 mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-accent -translate-y-px shrink-0" />
                            Nossa Solução
                        </p>
                        <h2 className="font-rajdhani font-bold text-carbon mb-8">
                            Como<span className="text-green-accent"> resolvemos?</span>
                        </h2>
                        <div className="space-y-6">
                            {solution.split('\n').filter(p => p.trim()).map((paragraph, i) => (
                                <h6 key={i} className="font-outfit text-carbon/70 text-body leading-relaxed text-justify">
                                    {paragraph}
                                </h6>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Results ── */}
            {results && results.length > 0 && (
                <div className="bg-black">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32 py-24 md:py-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <p className="text-caption font-outfit tracking-widest uppercase text-eggshell/30 mb-12 text-center">
                                Resultados Alcançados
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {results.map((result, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                    >
                                        <CheckCircle weight="Bold" size={22} className="text-green-accent shrink-0 mt-0.5" />
                                        <p className="font-outfit text-eggshell/60 leading-relaxed">
                                            {result}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CaseDetailsSection;