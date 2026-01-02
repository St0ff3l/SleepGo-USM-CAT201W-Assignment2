import React from 'react';

const ServiceCard = ({ title, desc, icon }) => {
    const cardStyle = {
        background: 'var(--bg-white)',
        padding: '2rem',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid #f3f4f6',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
    };

    return (
        <div className="reveal-item service-card" style={cardStyle}
             onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-10px)';
                 e.currentTarget.style.borderColor = 'var(--secondary)';
             }}
             onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.borderColor = '#f3f4f6';
             }}
        >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-light)' }}>{desc}</p>
        </div>
    );
};

export default ServiceCard;