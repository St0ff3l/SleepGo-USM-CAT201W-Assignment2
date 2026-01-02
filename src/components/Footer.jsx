import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            color: '#0F172A',
            padding: '3rem 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
            <div className="container">
                <h2 style={{ marginBottom: '1rem', color: '#4F46E5' }}>SleepGo</h2>
                <p style={{ color: 'rgba(15, 23, 42, 0.7)', marginBottom: '2rem' }}>Dream Big. Code Smart.</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(15, 23, 42, 0.5)' }}>&copy; 2026 SleepGo USM Assignment. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;