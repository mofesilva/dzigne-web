import React from 'react';

interface SecondaryHeaderSectionProps {
    content: React.ReactNode;
}

function SecondaryHeaderSection({ content }: SecondaryHeaderSectionProps) {
    return (
        <section className='w-full h-[50vh] relative overflow-hidden'>
            {/* Fundo preto */}
            <div className="absolute inset-0 bg-carbon"></div>

            <div className='relative z-10 w-full h-full'>
                <div className="section-container h-full flex items-center justify-center pt-16">
                    {content}
                </div>
            </div>
        </section>
    )
}

export default SecondaryHeaderSection; 