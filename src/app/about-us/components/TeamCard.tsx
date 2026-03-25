import React from 'react';
import Image from 'next/image';

export interface TeamMember {
    name: string;
    role: string;
    photo: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
}

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
    const cornerClass =
        index === 0
            ? 'rounded-tl-4xl'
            : index === 1
                ? 'rounded-tr-4xl'
                : index === 2
                    ? 'rounded-bl-4xl'
                    : index === 3
                        ? 'rounded-br-4xl'
                        : '';

    return (
        <div
            className={`bg-neutral-200 border-2 border-neutral-300 rounded-2xl ${cornerClass} p-7 lg:p-9 text-center`}
        >
            {/* Avatar */}
            <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-green-accent bg-neutral-300">
                <Image
                    src={member.photo}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <h5 className="font-rajdhani font-bold text-carbon">{member.name}</h5>
            <p className="font-outfit text-carbon/60 text-small mb-4">{member.role}</p>
        </div>
    );
}

