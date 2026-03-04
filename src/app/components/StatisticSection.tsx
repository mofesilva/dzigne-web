'use client';
import StatItem from './StatItem';

const stats = [
    { value: '15+', label: 'anos', description: 'transformando ideias em produtos digitais' },
    { value: '35+', label: 'anos', description: 'de experiência acumulada em desenvolvimento' },
    { value: '60+', label: 'projetos', description: 'aos nossos parceiros' },
    { value: '9+', label: 'segmentos', description: 'impactados por nossa expertise' },
];

function StatisticSection() {
    return (
        <section className="bg-black w-full relative overflow-hidden py-20 md:py-28 lg:py-36">
            <div className="px-6 md:px-12 lg:px-20 2xl:px-32">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 lg:gap-x-12">
                    {stats.map((stat, i) => (
                        <StatItem
                            key={i}
                            value={stat.value}
                            label={stat.label}
                            description={stat.description}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}

export default StatisticSection;
