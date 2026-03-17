'use client';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
    { label: 'Home', ariaLabel: 'Ir para a página inicial', link: '/' },
    { label: 'Inside Dzign-e', ariaLabel: 'Conhecer a Dzign-e', link: '/about-us' },
    { label: 'Cases', ariaLabel: 'Ver nossos cases', link: '/cases' },
];

const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/dzign.e/' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/dzigne/' },
    { label: 'WhatsApp', link: 'https://wa.me/5519999094848' },
];

function StickyNavbar() {
    return (
        <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={false}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={false}
            colors={['#7fd10c', '#050505']}
            logoUrl="/assets/dzigne-logotype-white-green.png"
            accentColor="#7fd10c"
            isFixed={true}
            closeOnClickAway={true}
        />
    );
}

export default StickyNavbar;
