import React from 'react';

interface AddressItemProps {
    title: string;
    address: string;
    details: string;
    city: string;
    state: string;
    country: string;
}

function AddressItem({ title, address, city, details, state, country }: AddressItemProps) {
    return (
        <div className="">
            <h1 className="font-rajdhani text-2xl font-bold text-carbon">{title}</h1>
            <p className="font-league-spartan text-lg/6 text-carbon text-regular ">{address}<br />
                {details}<br />
                {city}/{state}<br />
                {country}</p>
        </div>
    )
}

export default AddressItem;