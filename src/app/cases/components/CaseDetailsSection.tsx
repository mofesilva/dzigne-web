'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { ClockCircle, UsersGroupTwoRounded, CheckCircle, UsersGroupRounded, ClipboardList, GraphUp, Buildings3, Shield, Magnifier, NotebookBookmark, DocumentText } from '@solar-icons/react/ssr';
import CountUp from '@/components/CountUpText';
import { cdnUrl } from '@/lib/cdn';

const RESULT_ICON_SIZE = 32;

const iconMap: Record<string, React.ReactNode> = {
    users: <UsersGroupRounded weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    notebook: <NotebookBookmark weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    checklist: <ClipboardList weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    documents: <DocumentText weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    buildings: <Buildings3 weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    clock: <ClockCircle weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    graph: <GraphUp weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    shield: <Shield weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    magnifier: <Magnifier weight="LineDuotone" size={RESULT_ICON_SIZE} />,
    check: <CheckCircle weight="LineDuotone" size={RESULT_ICON_SIZE} />,
};

/* ─── Result parser ─── */
interface ParsedMetric {
    raw: string;
    numericValue: number | null;
    prefix: string;
    suffix: string;
    label: string;
}

function parseMetric(raw: string): ParsedMetric {
    const match = raw.match(/^(\+?\d[\d.,/]*%?)\s+(.+)$/);
    if (!match) return { raw, numericValue: null, prefix: '', suffix: '', label: raw };

    const value = match[1];
    const label = match[2];

    const parts = value.match(/^(\+?)(\d[\d.,]*?)(%?)$/);
    if (parts) {
        const numStr = parts[2].replace(/\./g, '').replace(',', '.');
        const num = parseFloat(numStr);
        return { raw, numericValue: isNaN(num) ? null : num, prefix: parts[1], suffix: parts[3], label };
    }

    return { raw, numericValue: null, prefix: '', suffix: '', label };
}

interface ResultItem {
    icon: string;
    text: string;
}

interface CaseDetailsSectionProps {
    duration: string;
    team: string;
    technologies: string[];
    challenge: string;
    solution: string;
    resultsCaption?: string;
    results?: ResultItem[];
}

function CaseDetailsSection({ duration, team, technologies, challenge, solution, resultsCaption, results }: CaseDetailsSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const resultsRef = useRef<HTMLDivElement>(null);
    const resultsInView = useInView(resultsRef, { once: true, margin: '-60px' });

    const techIconMap: Record<string, string> = {
        'Flutter': cdnUrl('/icons/flutter.svg'),
        'Dart': cdnUrl('/icons/dart.svg'),
        'Node.js': cdnUrl('/icons/nodedotjs.svg'),
        'Firebase': cdnUrl('/icons/firebase.svg'),
        'MongoDB': cdnUrl('/icons/mongodb.svg'),
        'AWS': cdnUrl('/icons/aws.svg'),
        'AWS IoT': cdnUrl('/icons/aws.svg'),
        'React Native': cdnUrl('/icons/react.svg'),
        'Next.js': cdnUrl('/icons/nextdotjs.svg'),
        'PostgreSQL': cdnUrl('/icons/postgresql.svg'),
        'JavaScript': cdnUrl('/icons/javascript.svg'),
        'TypeScript': cdnUrl('/icons/typescript.svg'),
        'Tailwind CSS': cdnUrl('/icons/tailwindcss.svg'),
        'Python': cdnUrl('/icons/python.svg'),
        'PHP': cdnUrl('/icons/php.svg'),
        'Express': cdnUrl('/icons/express.svg'),
        'Docker': cdnUrl('/icons/docker.svg'),
        'Vercel': cdnUrl('/icons/vercel.svg'),
        'Linux': cdnUrl('/icons/linux.svg'),
        'MySQL': cdnUrl('/icons/mysql.svg'),
        'Akamai Cloud': cdnUrl('/icons/akamai.svg'),
        'Redis': cdnUrl('/icons/redis.svg'),
        'Socket.io': cdnUrl('/icons/socketdotio.svg'),
        'WebRTC': cdnUrl('/icons/webrtc.svg'),
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
                <div ref={resultsRef} className="border-t border-carbon/10">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32 py-24 md:py-32 lg:py-40">

                        {/* Section header */}
                        <motion.div
                            className="mb-16 lg:mb-20"
                            initial={{ opacity: 0, y: 30 }}
                            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7 }}
                        >
                            <p className="flex items-center gap-3 text-caption font-outfit tracking-widest uppercase text-carbon/50 mb-4">
                                <span className="w-2 h-2 rounded-full bg-green-accent -translate-y-px shrink-0" />
                                Resultados Alcançados
                            </p>
                            <h2 className="font-rajdhani font-bold text-carbon mb-5 md:mb-6">
                                O que <span className="text-green-accent">alcançamos?</span>
                            </h2>
                            {resultsCaption && (
                                <h6 className="font-outfit text-carbon/70 max-w-xl">
                                    {resultsCaption}
                                </h6>
                            )}
                        </motion.div>

                        {/* Metrics grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 lg:gap-x-12">
                            {results.map((result, i) => {
                                const metric = parseMetric(result.text);
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    >
                                        <div className="w-14 h-14 rounded-2xl border-2 border-green-accent/40 bg-green-accent/15 flex items-center justify-center text-green-accent mb-5">
                                            {iconMap[result.icon] ?? iconMap.check}
                                        </div>
                                        <div className="border-t border-carbon/15 pt-6">
                                            <h1 className="font-rajdhani font-bold text-green-accent mb-3">
                                                {metric.numericValue !== null ? (
                                                    <>
                                                        {metric.prefix}
                                                        <CountUp
                                                            to={metric.numericValue}
                                                            from={0}
                                                            duration={1}
                                                            separator="."
                                                            startWhen={resultsInView}
                                                        />
                                                        {metric.suffix}
                                                    </>
                                                ) : (
                                                    metric.raw
                                                )}
                                            </h1>
                                            <h6 className="font-outfit text-carbon/80 leading-relaxed">
                                                {metric.label}
                                            </h6>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CaseDetailsSection;