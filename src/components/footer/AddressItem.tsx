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
        <div className="text-center md:text-left">
            <h6 className="font-rajdhani text-center font-bold text-carbon">{title}</h6>
            <p className="font-outfit text-center text-md/6 text-carbon text-regular ">{address}<br />
                {details}<br />
                {city}/{state}<br />
                {country}</p>
        </div>
    )
}

export default AddressItem;