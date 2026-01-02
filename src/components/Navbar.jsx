import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);

        const handleResize = () => setIsMobile(window.innerWidth < 768);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        display: 'flex',

        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',

        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',

        boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
    };

    const containerStyle = {
        width: '100%',
        maxWidth: '100%',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        height: 'auto',
        minHeight: '45px',
        flexWrap: isMobile ? 'wrap' : 'nowrap',
        justifyContent: isMobile ? 'space-between' : 'flex-start',
    };

    const brandStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        textDecoration: 'none',
        zIndex: 2,
        position: 'relative'
    };


    const linksWrapperStyle = isMobile ? {
        position: 'static',
        transform: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        width: '100%',
        justifyContent: 'center',
        marginTop: '1rem'
    } : {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '6rem',
        zIndex: 1
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#0F172A',
        fontWeight: '600',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        whiteSpace: 'nowrap'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={containerStyle}>

                {/* Brand / Logo */}
                <div style={brandStyle} onClick={() => window.scrollTo(0,0)}>
                    <img
                        src={logo}
                        alt="SleepGo Logo"
                        style={{ height: '45px', width: 'auto' }}
                    />
                    <h1 style={{ fontWeight: '800', fontSize: '1.5rem', color: '#4F46E5', margin: 0 }}>
                        SleepGo
                    </h1>
                </div>

                {/* Links */}
                <div style={linksWrapperStyle}>
                    <a href="#hero" style={linkStyle}>Home</a>
                    <a href="#services" style={linkStyle}>Services</a>
                    <a href="#team" style={linkStyle}>Team</a>
                    <a href="#about" style={linkStyle}>About</a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;