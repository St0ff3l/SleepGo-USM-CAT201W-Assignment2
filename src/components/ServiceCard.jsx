import React from 'react';

const ServiceCard = ({ title, desc, icon }) => {
    return (
        // 使用 CSS 类控制 Padding (电脑大/手机小)
        <div className="reveal-item card-base service-card-padding" style={{
            cursor: 'pointer',
            textAlign: 'left'
        }}>
            {/* Icon Container - 使用 CSS 类控制大小 */}
            <div className="service-icon-box">
                {icon}
            </div>

            {/* Title - 使用 CSS 类控制字体 */}
            <h3 className="service-title">
                {title}
            </h3>

            {/* Description - 使用 CSS 类控制字体 */}
            <p className="service-desc">
                {desc}
            </p>
        </div>
    );
};

export default ServiceCard;