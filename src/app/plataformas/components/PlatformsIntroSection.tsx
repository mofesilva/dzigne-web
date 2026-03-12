'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

function PlatformsIntroSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="bg-eggshell w-full">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32 py-24 md:py-32 lg:py-40">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.p
                        className="text-caption font-outfit mb-6 tracking-widest uppercase text-carbon/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        Nossas Plataformas
                    </motion.p>

                    <motion.h2
                        className="font-rajdhani text-carbon mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <span className="font-medium">Produtos próprios que </span>
                        <span className="font-bold text-green-accent">resolvem problemas reais.</span>
                    </motion.h2>

                    <motion.p
                        className="font-outfit text-carbon/60 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Além de desenvolver soluções sob medida para nossos clientes, criamos plataformas próprias que nascem da nossa experiência e visão de mercado. Conheça os produtos que estamos construindo.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

export default PlatformsIntroSection;
