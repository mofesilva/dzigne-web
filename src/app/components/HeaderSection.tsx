import React from 'react';
import Image from 'next/image';

interface HeaderSectionProps {
    image: string;
    content: React.ReactNode;
}

function HeaderSection({ image, content }: HeaderSectionProps) {
    return (
        <section className='hero-section-full'>
            <Image src={image} alt="Hero Banner" className='w-full object-cover h-[600px]' fill quality={100} />
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className="section-container">
                    <div className="h-36"></div>
                    {content}
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;