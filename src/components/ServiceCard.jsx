import React from 'react';

const ServiceCard = ({ title, desc, icon }) => {
    return (
        // Uses a CSS utility class to control responsive padding (larger on desktop, smaller on mobile).
        <div 
            className="reveal-item card-base service-card-padding" 
            data-hover="true"
            style={{
                cursor: 'pointer',
                textAlign: 'left'
            }}
        >
            {/* Icon wrapper (sizing is controlled via CSS). */}
            <div className="service-icon-box">
                {icon}
            </div>

            {/* Service title (typography is controlled via CSS). */}
            <h3 className="service-title">
                {title}
            </h3>

            {/* Service description (typography is controlled via CSS). */}
            <p className="service-desc">
                {desc}
            </p>
        </div>
    );
};

export default ServiceCard;
