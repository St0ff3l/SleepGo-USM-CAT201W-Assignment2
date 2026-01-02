import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
    };

    const containerStyle = {
        width: '100%',
        maxWidth: '1200px',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // Enable wrapping for mobile devices
        flexWrap: 'wrap'
    };

    const brandStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        textDecoration: 'none'
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#1f2937',
        fontWeight: '600',
        fontSize: '1rem',
        marginLeft: '1.5rem', // Reduced spacing slightly
        cursor: 'pointer',
        transition: 'color 0.3s ease'
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
                    <h1 style={{ fontWeight: '800', fontSize: '1.5rem', color: '#4338ca', margin: 0 }}>
                        SleepGo
                    </h1>
                </div>

                {/* Links - Added overflow handling for small screens */}
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
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