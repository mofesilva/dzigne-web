import React from 'react'
import Image from 'next/image'
import NavigationButton from './NavigationButton'

interface CaseSlideProps {

    text: string
    logo: string
    mockup: string
    href: string
}

function CaseSlide({ text, logo, mockup, href }: CaseSlideProps) {
    return (
        <>
            <div className="case__study__container">
                <div className="mockup__container">
                    <Image src={mockup} alt="Mockup" className="case__mockup" />
                </div>
                <div className="case__study__content">
                    <Image src={logo} alt="Mackenzie Logo" className="case__company__logo" />
                    <p className="case__description">{text}</p>
                    <NavigationButton href={href} text={'Saiba mais'} icon={'fa-solid fa-chevron-right'} />
                </div>
            </div>
        </>
    )
}

export default CaseSlide;