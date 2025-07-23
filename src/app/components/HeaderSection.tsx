import React from 'react';
import HeroSection from './HeroSection';
import Navbar from '@/components/Navbar';
import herobanner from '../../assets/main-banner.jpg';
import Image from 'next/image';

function HeaderSection() {
    return (
        <section className='hero-section-full'>
            <Image src={herobanner} alt="Hero Banner" className='w-full object-cover h-[600px]' quality={100} />
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className="section-container">
                    <Navbar />
                    <HeroSection />
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;