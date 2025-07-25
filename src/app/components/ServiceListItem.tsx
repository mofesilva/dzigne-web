import React from 'react'


interface ServiceListItemProps {
    icon: string;
    title: string;
    description: string;
}

function ServiceListItem({ icon, title, description }: ServiceListItemProps) {
    return (
        <li className="">
            <div className="">
                <i className={`fa-solid ${icon} text-green-accent text-4xl pb-4`}></i>
                <h1 className="font-rajdhani text-2xl font-bold pb-4 text-green-accent">{title}</h1>
                <p className="font-league-spartan text-lg/6">{description}</p>
            </div>
        </li>
    )
}

export default ServiceListItem