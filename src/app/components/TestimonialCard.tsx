import React from 'react'
import Image from 'next/image'

interface TestimonialCardProps {
    text: string
    name: string
    position: string
    company: string
    photo: string
}

function TestimonialCard({ text, name, position, company, photo }: TestimonialCardProps) {
    return (
        <div className="bg-neutral-200 rounded-2xl p-8 border border-neutral-300 h-auto min-h-[400px] flex flex-col justify-between">
            <div>
                <p className="text-gray-800 font-league-spartan text-base leading-relaxed mb-8">
                    &ldquo;{text}&rdquo;
                </p>
            </div>

            <div className="flex items-center gap-4 mt-auto">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src={photo}
                        alt={`${name} - ${position}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-rajdhani font-bold text-carbon text-lg mb-1">
                        {name}
                    </h4>
                    <p className="text-gray-600 font-league-spartan text-sm">
                        {position}
                    </p>
                    {company && (
                        <p className="text-gray-500 font-league-spartan text-sm">
                            {company}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard 