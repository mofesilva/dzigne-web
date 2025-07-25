import React from 'react';

interface DividerProps {
    width: string;
    color: string;
    height: string;
    horizontal?: boolean; // true = horizontal, false/undefined = vertical
}

function Divider({ width, color, height, horizontal = false }: DividerProps) {
    const getColorValue = (colorName: string) => {
        const colors: { [key: string]: string } = {
            'carbon': '#171717',
            'green-accent': '#7fd10c',
            'green-accent-light': '#95f50e',
            'eggshell': '#eeeeee',
            'white': '#ffffff',
            'black': '#000000'
        };
        return colors[colorName] || colorName;
    };

    return (
        <div
            className="self-center"
            style={{
                width: horizontal ? height : `${width}px`,
                height: horizontal ? `${width}px` : height,
                backgroundColor: getColorValue(color)
            }}
        />
    )
}

export default Divider;