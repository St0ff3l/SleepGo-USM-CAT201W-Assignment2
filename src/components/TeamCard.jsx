import React from 'react';

const TeamCard = ({ name, role, image }) => {
    return (
        // Card container; spacing and layout are handled by the CSS class.
        <div 
            className="reveal-item card-base team-card-inner" 
            data-hover="true"
            style={{ overflow: 'hidden', cursor: 'pointer' }}
        >
            <img
                src={image}
                alt={name}
                // Profile image; dimensions are handled by the CSS class.
                className="team-img"
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    display: 'inline-block' // Keep the image centered in its container.
                }}
            />

            {/* Team member name (typography can be controlled via CSS). */}
            <h4 className="team-name" style={{ fontWeight: '800', color: 'var(--text-main)' }}>
                {name}
            </h4>

            {/* Team member role badge. */}
            <span className="team-role" style={{
                display: 'inline-block',
                background: '#e0e7ff', // Indigo-100
                color: 'var(--primary)', // Indigo-600
                borderRadius: '20px',
                fontWeight: '600',
                maxWidth: '100%', // Prevent long text from overflowing the card.
            }}>
                {role}
            </span>
        </div>
    );
};

export default TeamCard;