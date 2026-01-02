import React from 'react';

const TeamCard = ({ name, role, image }) => {
    return (
        // 使用 className='team-card-inner' 代替内联 padding
        <div className="reveal-item card-base team-card-inner" style={{ overflow: 'hidden' }}>
            <img
                src={image}
                alt={name}
                // 使用 className='team-img' 代替内联 width/height
                className="team-img"
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    display: 'inline-block' // 保证居中
                }}
            />

            {/* 使用 className='team-name' */}
            <h4 className="team-name" style={{ fontWeight: '800', color: 'var(--text-main)' }}>
                {name}
            </h4>

            {/* 使用 className='team-role' */}
            <span className="team-role" style={{
                display: 'inline-block',
                background: '#e0e7ff',
                color: 'var(--primary)',
                borderRadius: '20px',
                fontWeight: '600',
                maxWidth: '100%', // 防止撑破
            }}>
                {role}
            </span>
        </div>
    );
};

export default TeamCard;