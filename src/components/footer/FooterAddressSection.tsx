import React from 'react';
import AddressItem from './AddressItem';

function FooterAddressSection() {
    return (
        <>
            <section className="flex gap-8 items-start justify-start h-auto p-10 pl-0">
                <AddressItem title="CAMPINAS" address="Av. Ântonio Artioli, 570" details="Lojas 07 e 08 - Swiss Park" city="Campinas" state='SP' country="Brasil" />
                <AddressItem title="BELO HORIZONTE" address="Rua Professor Pimenta da Veiga, 78" details="Cidade Nova" city="Belo Horizonte" state="MG" country="Brasil" />
                <AddressItem title="LEGNANO" address="Av. Joaquim José Diniz, 20, 905" details="Cidade Nova" city="Legnano" state="Milano" country="Italia" />
            </section>
        </>
    )
}

export default FooterAddressSection;