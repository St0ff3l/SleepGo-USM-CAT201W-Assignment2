import React from 'react';

const About = () => {
    return (
        <section id="about">
            {/* Card container (styling is handled by CSS classes rather than inline styles). */}
            <div className="container reveal-item about-card">
                <h2 className="section-title">About SleepGo</h2>

                {/* Description text (typography is controlled via the CSS class). */}
                <p className="about-desc">
                    This website is developed as a group assignment for the <strong>CAT201 Integrated Software Development Workshop</strong> course (Semester 1 2025/2026) at Universiti Sains Malaysia.
                    <br /><br />
                    SleepGo is a fictional software house created to demonstrate our proficiency in <strong>React.js</strong>, <strong>Node.js</strong>, and modern web design principles.
                </p>

                {/* Tag badges */}
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                   <span style={{ padding: '8px 20px', background: '#e0e7ff', color: 'var(--primary)', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                       USM Project
                   </span>
                    <span style={{ padding: '8px 20px', background: '#e0e7ff', color: 'var(--primary)', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                       CAT201 Assignment
                   </span>
                </div>
            </div>
        </section>
    );
};

export default About;