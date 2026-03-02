interface StatItemProps {
    value: string;
    label: string;
    description: string;
}

function StatItem({ value, label, description }: StatItemProps) {
    return (
        <div className="border-t border-eggshell/[0.1] pt-8">
            {/* Big number */}
            <div className="flex items-baseline gap-2 mb-3">
                <h1
                    className="font-rajdhani font-bold text-green-accent"
                >
                    {value} {label}
                </h1>

            </div>

            {/* Description */}
            <h6
                className="font-google-sans-flex text-eggshell leading-relaxed"
            >
                {description}
            </h6>
        </div>
    );
}

export default StatItem;
