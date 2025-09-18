import React from 'react';

interface HeaderSectionProps {
    // image: string;
    content: React.ReactNode;
    isSecondaryPage?: boolean;
}

function HeaderSection({ content, isSecondaryPage = false }: HeaderSectionProps) {
    return (
        <section className={`py-16 bg-carbon sm:rounded-4xl m-0 sm:m-2 lg:mb-0 h-auto`}>
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