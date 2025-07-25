import React from 'react'
import Image from 'next/image'
import NavigationButton from './NavigationButton'

interface CaseSlideProps {
    text: string
    logo: string
    alt: string
    mockup: string
    href: string
}

function CaseSlide({ text, logo, alt, mockup, href }: CaseSlideProps) {
    return (
        <div className="flex items-center justify-center w-full h-full gap-8 pr-8">
            <div className="mockup__container flex-shrink-0">
                <Image src={mockup} alt="Mockup" className="h-auto w-[320px] md:w-[400px]" width={600} height={600} quality={100} />
            </div>
            <div className="case__study__content flex flex-col items-start justify-center max-w-xl">
                <Image src={logo} alt={alt} className="h-auto w-[100px] mb-4" width={100} height={100} quality={100} />
                <p className="font-league-spartan text-lg text-eggshell mb-8">{text}</p>
                <NavigationButton href={href} text={'Saiba mais'} icon={'fa-solid fa-chevron-right'} />
            </div>
        </div>
    )
}

export default CaseSlide;