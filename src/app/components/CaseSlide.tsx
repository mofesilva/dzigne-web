import React from 'react'
import Image from 'next/image'
import NavigationButton from '../../components/NavigationButton'

interface CaseSlideProps {
    text: string
    logo: string
    alt: string
    mockup: string
    href: string
}

function CaseSlide({ text, logo, alt, mockup, href }: CaseSlideProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-center w-full min-h-full py-8 gap-8 px-4 md:pr-8 md:px-0">
            <div className="mockup__container flex-shrink-0 flex justify-center md:justify-start">
                <Image src={mockup} alt="Mockup" className="h-auto w-[200px] md:w-[400px]" width={600} height={600} quality={100} />
            </div>
            <div className="case__study__content flex flex-col items-center md:items-start justify-center max-w-xl">
                <Image src={logo} alt={alt} className="h-auto w-[100px] mb-4" width={100} height={100} quality={100} />
                <p className="font-league-spartan text-lg text-eggshell mb-8 cursor-default text-center md:text-left">{text}</p>
                <NavigationButton href={href} text={'Saiba mais'} icon={'fa-solid fa-chevron-right'} />
            </div>
        </div>
    )
}

export default CaseSlide;