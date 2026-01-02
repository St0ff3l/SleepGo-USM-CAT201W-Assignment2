import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo.png'; // Ensure the asset path is correct

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
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        // When scrolled, use an opaque background with blur/shadow; otherwise keep it transparent.
        // (Mobile-specific overrides can be applied via CSS if needed.)
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        padding: '1rem 0',
    };

    return (
        <nav style={navStyle} className="navbar-custom">
            {/* Outer container for layout (max width, horizontal padding, and alignment). */}
            <div className="container nav-container" style={{
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>

                {/* Brand / Logo */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    textDecoration: 'none'
                }} onClick={() => window.scrollTo(0,0)}>
                    <img
                        src={logo}
                        alt="SleepGo Logo"
                        style={{ height: '45px', width: 'auto' }}
                    />
                    <h1 style={{ fontWeight: '800', fontSize: '1.5rem', color: '#4338ca', margin: 0 }}>
                        SleepGo
                    </h1>
                </div>

                {/* Navigation links */}
                <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#hero" className="nav-item">Home</a>
                    <a href="#services" className="nav-item">Services</a>
                    <a href="#team" className="nav-item">Team</a>
                    <a href="#about" className="nav-item">About</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;