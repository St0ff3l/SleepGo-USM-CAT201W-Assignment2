import React from 'react';

const ServiceCard = ({ title, desc, icon }) => {
    return (
        <div className="reveal-item card-base" style={{ cursor: 'pointer', textAlign: 'left', padding: '2rem' }}>
            {/* Icon */}
            <div style={{
                fontSize: '2.8rem', // Enlarge icon size
                marginBottom: '1.2rem',
                color: 'var(--primary)',
                background: '#e0e7ff',
                width: '75px',
                height: '75px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
            }}>
                {icon}
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                {title}
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', lineHeight: '1.5' }}>
                {desc}
            </p>
        </div>
    );
};

export default ServiceCard;