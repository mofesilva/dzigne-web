import React from 'react';
import FooterContactSection from './FooterContactSection';
import FooterAddressSection from './FooterAddressSection';
import SigningSection from './SigningSection';
import Divider from '../Divider';
import FooterNavigationSection from './FooterNavigationSection';



function Footer() {
    return (
        <div className="bg-eggshell w-auto h-auto p-2">
            <footer className="footer-section text-foreground justify-center content-center items-center self-center">
                <div className="section-container align-center content-center items-center">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-4 md:items-center justify-between md:justify-center">
                        <FooterContactSection />
                        {/* Divider horizontal no mobile, vertical no desktop */}
                        <div className="block md:hidden">
                            <Divider width="1" color="carbon" height="100%" horizontal={true} />
                        </div>
                        <div className="hidden md:block self-center">
                            <Divider width="1" color="carbon" height="120px" />
                        </div>
                        <FooterAddressSection />
                        {/* Divider horizontal no mobile, vertical no desktop */}
                        <div className="block md:hidden">
                            <Divider width="1" color="carbon" height="100%" horizontal={true} />
                        </div>
                        <div className="hidden md:block self-center">
                            <Divider width="1" color="carbon" height="120px" />
                        </div>
                        <FooterNavigationSection />
                    </div>
                    <SigningSection />
                </div>

            </footer>
        </div>
    )
}

export default Footer;