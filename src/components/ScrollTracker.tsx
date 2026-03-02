'use client';

import { useEffect, useState } from 'react';

export default function ScrollTracker() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(scrollPercent, 100));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
            {/* Track */}
            <div className="relative w-[3px] h-[120px] rounded-full bg-white/10">
                {/* Fill */}
                <div
                    className="absolute top-0 left-0 w-full rounded-full bg-green-accent transition-all duration-150 ease-out"
                    style={{ height: `${progress}%` }}
                />
            </div>
        </div>
    );
}
