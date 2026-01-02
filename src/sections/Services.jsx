import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const services = [
        { title: "Web Development", desc: "React, Node.js, and modern styling.", icon: "💻" },
        { title: "Mobile Apps", desc: "iOS and Android cross-platform solutions.", icon: "📱" },
        { title: "UI/UX Design", desc: "Crafting intuitive and beautiful interfaces.", icon: "🎨" },
    ];

    return (
        <section id="services" style={{ background: 'var(--bg-off-white)' }}>
            <div className="container">
                <h2 className="section-title reveal-item">Our Services</h2>
                <p className="section-subtitle reveal-item">What we do best</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((s, index) => (
                        <ServiceCard key={index} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;