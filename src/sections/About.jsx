import React from 'react';

const About = () => {
    return (
        <section id="about" style={{ background: 'var(--bg-off-white)' }}>
            <div className="container reveal-item" style={{
                background: 'white',
                padding: '4rem',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center'
            }}>
                <h2 className="section-title">About SleepGo</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                    Founded in Universiti Sains Malaysia, SleepGo started as a CAT201 assignment and evolved into a vision.
                    We believe in clean code, pure CSS, and efficient systems. We don't just write software; we engineer experiences.
                </p>
            </div>
        </section>
    );
};

export default About;