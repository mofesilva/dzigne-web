import React from 'react'
import Image from 'next/image';
import labormedLogo from '../../assets/images/logos/labormed.png';
import arionLogo from '../../assets/images/logos/arion.png';
import mackenzieLogo from '../../assets/images/logos/mackenzie.png';

function CompanyHighlightsSection() {
    return (
        <>
            <section className="bg-eggshell w-screen h-[200px] flex items-center">
                <div className="section-container flex items-center justify-between w-full">
                    <h1 className="text-3xl font-rajdhani font-bold text-carbon">Empresas que inovaram <br />com a nossa
                        <span className="bg-green-accent text-carbon ml-1 px-2 py-1">expertise!</span>
                    </h1>
                    <div className="flex gap-4 items-center">
                        <Image src={labormedLogo} alt="Labormed Logo" width={150} height={150} />
                        <Image src={arionLogo} alt="Arion Logo" width={150} height={150} />
                        <Image src={mackenzieLogo} alt="Mackenzie Logo" width={150} height={150} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyHighlightsSection;