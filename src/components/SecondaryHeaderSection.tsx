import React from 'react';

interface SecondaryHeaderSectionProps {
    content: React.ReactNode;
}

function SecondaryHeaderSection({ content }: SecondaryHeaderSectionProps) {
    return (
        <div className="bg-carbon min-h-[50vh] item-end content-center pt-20 2xl:pt-0 lg:pb-8 ">
            <div className="section-container flex items-end justify-center pt-24 pb-8 lg:pt-28 lg:pb-12">
                {content}
            </div>
        </div>
    )
}

export default SecondaryHeaderSection; 