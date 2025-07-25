import React from 'react';
import FooterContactSection from './FooterContactSection';
import FooterAddressSection from './FooterAddressSection';
import SigningSection from './SigningSection';
import Divider from '../Divider';
import FooterNavigationSection from './FooterNavigationSection';


function Footer() {
    return (
        <footer className="footer-section text-foreground">
            <div className="section-container align-center content-center items-center justify-center">
                <div className="flex gap-4">
                    <FooterContactSection />
                    <Divider width="1" color="carbon" height="200px" />
                    <FooterAddressSection />
                    <Divider width="1" color="carbon" height="200px" />
                    <FooterNavigationSection />
                </div>
                <SigningSection />
            </div>

        </footer>
    )
}

export default Footer;