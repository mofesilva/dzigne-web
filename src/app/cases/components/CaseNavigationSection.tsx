import React from 'react';
import Link from 'next/link';
import NavigationButton from '@/components/NavigationButton';
import { AltArrowLeft, AltArrowRight } from '@solar-icons/react/ssr';

interface NavigationCase {
    href: string;
    company: string;
    title: string;
}

interface CaseNavigationSectionProps {
    previousCase?: NavigationCase;
    nextCase?: NavigationCase;
}

function CaseNavigationSection({ previousCase, nextCase }: CaseNavigationSectionProps) {
    return (
        <section className="bg-eggshell w-full py-16">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* Case Anterior */}
                    <div className="flex-1">
                        {previousCase ? (
                            <Link href={previousCase.href} className="group block">
                                <div className="text-left">
                                    <p className="font-outfit text-small text-carbon/60 mb-2 flex items-center">
                                        <AltArrowLeft weight="Bold" size={14} className="mr-2" />
                                        Case Anterior
                                    </p>
                                    <h5 className="font-rajdhani font-semibold text-carbon group-hover:text-green-accent transition-colors">
                                        {previousCase.company}
                                    </h5>
                                    <p className="font-outfit text-carbon/80">
                                        {previousCase.title}
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <div></div>
                        )}
                    </div>

                    {/* Botão Ver Todos os Cases */}
                    <div className="flex-shrink-0">
                        <NavigationButton
                            href="/cases"
                            text="Ver Todos os Cases"
                            inverted={true}
                        />
                    </div>

                    {/* Próximo Case */}
                    <div className="flex-1">
                        {nextCase ? (
                            <Link href={nextCase.href} className="group block">
                                <div className="text-right">
                                    <p className="font-outfit text-small text-carbon/60 mb-2 flex items-center justify-end">
                                        Próximo Case
                                        <AltArrowRight weight="Bold" size={14} className="ml-2" />
                                    </p>
                                    <h5 className="font-rajdhani font-semibold text-carbon group-hover:text-green-accent transition-colors">
                                        {nextCase.company}
                                    </h5>
                                    <p className="font-outfit text-carbon/80">
                                        {nextCase.title}
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseNavigationSection;