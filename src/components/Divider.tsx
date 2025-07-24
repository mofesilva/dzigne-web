import React from 'react';

interface DividerProps {
    width: string;
    color: string;
    height: string;
}

function Divider({ width, color, height }: DividerProps) {
    return (
        <div className={`w-${width} h-[${height}]  bg-${color} self-center`}></div>
    )
}

export default Divider;