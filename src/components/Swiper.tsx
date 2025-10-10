'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import type { Swiper as SwiperClass } from 'swiper/types'
import 'swiper/css/bundle' // CSS completo do Swiper

type CarouselProps = {
    slides: React.ReactNode[]
    options?: SwiperOptions
    className?: string
    style?: React.CSSProperties
    onSlideChange?: (swiper: SwiperClass) => void
    onSwiper?: (swiper: SwiperClass) => void
}

export default function Carousel({ slides, options, className, style, onSlideChange, onSwiper }: CarouselProps) {
    const enableNavigation = !!(options && options.navigation);
    const enablePagination = !!(options && options.pagination);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={enableNavigation}
            pagination={enablePagination ? { ...(options!.pagination as object) } : false}
            autoplay={options?.autoplay ?? { delay: 8000 }}
            style={style}
            loop={options?.loop ?? true}
            onSlideChange={onSlideChange}
            onSwiper={onSwiper}
            {...(options ?? {})}
            className={className}
        >
            {slides.map((node, i) => (
                <SwiperSlide key={i}>{node}</SwiperSlide>
            ))}
        </Swiper>
    )
}