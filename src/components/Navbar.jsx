import React, { useState, useEffect } from 'react';
import './../styles/Navbar.css'; // Import component-specific CSS
import logoLight from './../assets/Navbar/logo-light.gif'; // Import images
import logoDark from './../assets/Navbar/logo-dark.gif';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = ['ABOUT US', 'PROJECTS', 'WEB TOUR', 'CHAPAL TV', 'BLOG', 'CAREER', 'CONTACT US'];

    return (
        <nav 
            className={`mynavbar ${isScrolled ? 'scrolled' : ''}`}
            // Background style is now handled in Navbar.css based on .scrolled class
        >
            <div className="logobox">
                <img 
                    className="logo" 
                    src={isScrolled ? logoDark : logoLight} 
                    alt="Chapal Builders Logo" 
                />
            </div>
            <ul>
                <li id="home">HOME</li> {/* Specific styling for home via ID remains */}
                {navItems.map(item => (
                    <li key={item} className={isScrolled ? 'nav-item-scrolled' : 'nav-item-default'}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;