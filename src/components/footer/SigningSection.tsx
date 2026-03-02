'use client'
import React from 'react';
import BrandIcon from '@/components/BrandIcon';

function SigningSection() {
    return (
        <div className="signing self-center pt-10 pb-2 md:pt-0 md:pb-2">
            <p className='font-rajdhani text-center text-carbon font-semibold'>Made with <BrandIcon name="react" size={16} className="inline-block animate-beat" alt="React" /> by Dzign-e Sistemas e Tecnolgia LTDA
                16.950.862/0001-15 - Todas as imagens pertencem a Freepik/Pexels/Unsplash
            </p>
        </div>
    )
}

export default SigningSection;