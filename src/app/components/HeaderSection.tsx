import React from 'react';

interface HeaderSectionProps {
    // image: string;
    content: React.ReactNode;
    isSecondaryPage?: boolean;
}

function HeaderSection({ content, isSecondaryPage = false }: HeaderSectionProps) {
    return (
        <section className={`pt-16 bg-carbon lg:rounded-4xl m-0 lg:m-2 lg:mb-0 ${isSecondaryPage ? 'min-h-[50vh]' : 'min-h-screen'}`}>
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