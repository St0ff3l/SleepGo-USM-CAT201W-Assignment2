import React from 'react';

const TeamCard = ({ name, role, image }) => {
    return (
        <div className="reveal-item card-base" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <img
                src={image}
                alt={name}
                style={{
                    width: '140px', // Slightly increase avatar size
                    height: '140px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    marginBottom: '1rem',
                    border: '4px solid var(--bg-off-white)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
            />
            {/* Increase name font size to 1.4rem */}
            <h4 style={{ fontWeight: '800', fontSize: '1.4rem', marginBottom: '0.5rem' }}>{name}</h4>
            <span style={{
                display: 'inline-block',
                background: '#e0e7ff',
                color: 'var(--primary)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.95rem', // Increase role font size
                fontWeight: '600'
            }}>
                {role}
            </span>
        </div>
    );
};

export default TeamCard;