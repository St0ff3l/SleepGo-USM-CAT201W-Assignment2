import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#111827', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ marginBottom: '1rem' }}>SleepGo.</h2>
                <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Dream Big. Code Smart.</p>
                <p style={{ fontSize: '0.8rem', color: '#4b5563' }}>&copy; 2026 SleepGo USM Assignment. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;