import React from 'react';

interface HeaderSectionProps {
    // image: string;
    content: React.ReactNode;
    isSecondaryPage?: boolean;
}

function HeaderSection({ content, isSecondaryPage = false }: HeaderSectionProps) {
    return (
        <section className={`w-full ${isSecondaryPage ? 'min-h-[50vh]' : 'min-h-screen'} relative overflow-hidden`}>
            {/* Fundo preto */}
            <div className="absolute inset-0 bg-carbon"></div>

            <div className='relative z-10 w-full h-full'>
                <div className="section-container h-full flex flex-col justify-center">
                    <div className={`${isSecondaryPage ? 'mt-8' : 'mt-20'}`}>
                        {content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;