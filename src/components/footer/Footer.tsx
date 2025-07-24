import React from 'react';
import FooterContactSection from './FooterContactSection';
import FooterAddressSection from './FooterAddressSection';
import SigningSection from './SigningSection';
import Divider from '../Divider';
import FooterNavigationSection from './FooterNavigationSection';


function Footer() {
    return (
        <footer className="footer-section text-foreground">
            <div className="section-container align-center place-content-center content-center items-center justify-center">
                <div className="lg:flex lg:flex-row flex-col gap-4">
                    <FooterContactSection />
                    <Divider width="0.5" color="carbon" height="200" />
                    <FooterAddressSection />
                    <Divider width="0.5" color="carbon" height="200" />
                    <FooterNavigationSection />
                </div>
                <SigningSection />
            </div>

        </footer>
    )
}

export default Footer;