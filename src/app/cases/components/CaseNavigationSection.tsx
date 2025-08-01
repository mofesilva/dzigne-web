import React from 'react';
import Link from 'next/link';
import NavigationButton from '@/components/NavigationButton';

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
                                    <p className="font-league-spartan text-sm text-carbon/60 mb-2">
                                        <i className="fa-solid fa-arrow-left mr-2"></i>
                                        Case Anterior
                                    </p>
                                    <h3 className="font-rajdhani text-xl font-semibold text-carbon group-hover:text-green-accent transition-colors">
                                        {previousCase.company}
                                    </h3>
                                    <p className="font-league-spartan text-carbon/80">
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
                            icon="fa-solid fa-grid-2"
                            inverted={false}
                        />
                    </div>

                    {/* Próximo Case */}
                    <div className="flex-1">
                        {nextCase ? (
                            <Link href={nextCase.href} className="group block">
                                <div className="text-right">
                                    <p className="font-league-spartan text-sm text-carbon/60 mb-2">
                                        Próximo Case
                                        <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </p>
                                    <h3 className="font-rajdhani text-xl font-semibold text-carbon group-hover:text-green-accent transition-colors">
                                        {nextCase.company}
                                    </h3>
                                    <p className="font-league-spartan text-carbon/80">
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