import React from 'react';
import Image from 'next/image';

interface HeaderSectionProps {
    image: string;
    content: React.ReactNode;
}

function HeaderSection({ image, content }: HeaderSectionProps) {
    return (
        <section className='w-full min-h-screen relative overflow-hidden'>
            {/* Fundo preto */}
            <div className="absolute inset-0 bg-carbon"></div>

            <div className='relative z-10 w-full h-full'>
                <div className="section-container h-full flex flex-col justify-center">
                    <div className="mt-20">
                        {content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;