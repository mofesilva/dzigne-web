import React from 'react'
import Image from 'next/image';

function CompanyHighlightsSection() {
    return (
        <section className="bg-eggshell w-full h-[200px] flex items-center">
            <div className="section-container flex items-center justify-between w-full min-w-0">
                <h1 className="text-3xl font-rajdhani font-bold text-carbon flex-shrink-0">Empresas que inovaram <br />com a nossa
                    <span className="bg-green-accent text-carbon ml-1 px-2 py-1">expertise!</span>
                </h1>
                <div className="flex gap-16 items-center flex-shrink">
                    <Image src='/assets/images/logos/labormed.png' alt="Labormed Logo" width={120} height={120} />
                    <Image src='/assets/images/logos/arion.png' alt="Arion Logo" width={120} height={120} />
                    <Image src='/assets/images/logos/mackenzie.png' alt="Mackenzie Logo" width={120} height={120} />
                </div>
            </div>
        </section>
    )
}

export default CompanyHighlightsSection;    