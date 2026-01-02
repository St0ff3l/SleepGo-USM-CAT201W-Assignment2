import React from 'react';

const TeamCard = ({ name, role, image }) => {
    const cardStyle = {
        textAlign: 'center',
        padding: '1rem',
    };

    const imgStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '1rem',
        border: '4px solid var(--bg-off-white)',
        boxShadow: 'var(--shadow-sm)',
    };

    return (
        <div className="reveal-item" style={cardStyle}>
            {/* 如果没有图片，用占位符 */}
            <img src={image || "https://ui-avatars.com/api/?name=" + name + "&background=random"} alt={name} style={imgStyle} />
            <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{name}</h4>
            <p style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>{role}</p>
        </div>
    );
};

export default TeamCard;