'use client'
import React, { useState, useCallback } from 'react'
import Image, { ImageProps } from 'next/image'

type LazyImageProps = ImageProps & {
    wrapperClassName?: string
    spinnerClassName?: string
}

export default function LazyImage({ wrapperClassName = '', spinnerClassName = '', className = '', onLoadingComplete, alt = '', ...props }: LazyImageProps) {
    const [loaded, setLoaded] = useState(false)

    const handleLoaded = useCallback((img?: HTMLImageElement) => {
        setLoaded(true)
        if (img && onLoadingComplete) onLoadingComplete(img)
    }, [onLoadingComplete])

    return (
        <div className={`${wrapperClassName} relative overflow-hidden`}>
            {!loaded && (
                <div className={`absolute inset-0 flex items-center justify-center bg-white/0 ${spinnerClassName}`}>
                    <svg className="w-8 h-8 text-gray-400 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carregando">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                </div>
            )}

            <Image
                {...props}
                alt={alt}
                className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                onLoadingComplete={handleLoaded}
                loading={(props.loading as 'lazy' | 'eager') ?? 'lazy'}
            />
        </div>
    )
}
