'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import 'swiper/css/bundle' // CSS completo do Swiper

type CarouselProps = {
    slides: React.ReactNode[]
    options?: SwiperOptions
    className?: string
    style?: React.CSSProperties
}

export default function Carousel({ slides, options, className, style }: CarouselProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
            style={style}
            loop
            {...options}
            className={className}
        >
            {slides.map((node, i) => (
                <SwiperSlide key={i}>{node}</SwiperSlide>
            ))}
        </Swiper>
    )
}