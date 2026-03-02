import React from 'react'
import LazyImage from '@/components/LazyImage'
import NavigationButton from '../../components/NavigationButton'
import { AltArrowRight } from '@solar-icons/react/ssr';

interface CaseSlideProps {
    text: string
    logo: string
    isLogoHorizontal?: boolean
    alt: string
    mockup: string
    href: string
}

function CaseSlide({ text, logo, alt, mockup, href, isLogoHorizontal = false }: CaseSlideProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-center w-full min-h-full py-16 gap-8 px-4 md:pr-8 md:px-0">
            <div className="mockup__container flex-shrink-0 flex justify-center md:justify-start">
                <LazyImage src={mockup} alt="Mockup" className="w-auto h-[200px] md:h-[400px]" width={600} height={600} quality={100} />
            </div>
            <div className="case__study__content flex flex-col items-center md:items-start justify-center max-w-xl">
                <LazyImage src={logo} alt={alt} className={`h-auto mb-4 ${isLogoHorizontal ? 'w-[150px]' : 'w-[100px]'}`} width={100} height={100} quality={100} />
                <h6 className="font-league-spartan text-eggshell mb-8 cursor-default text-center md:text-left">{text}</h6>
                <NavigationButton href={href} text={'Saiba mais'} icon={<AltArrowRight weight="Outline" size={16} />} />
            </div>
        </div>
    )
}

export default CaseSlide;