import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container reveal-item" style={{
                background: 'linear-gradient(145deg, #ffffff, #f3f4f6)',
                padding: '4rem 2rem',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
                border: '1px solid white'
            }}>
                <h2 className="section-title">About SleepGo</h2>

                {/* Modified text content here */}
                <p style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontSize: '1.15rem',
                    color: 'var(--text-light)',
                    lineHeight: '1.8'
                }}>
                    This website is developed as a group assignment for the <strong>CAT201 Integrated Software Development Workshop</strong> course (Semester 1 2025/2026) at Universiti Sains Malaysia.
                    <br /><br />
                    SleepGo is a fictional software house created to demonstrate our proficiency in <strong>React.js</strong>, <strong>Node.js</strong>, and modern web design principles.
                </p>

                {/* Updated tags below to reflect the course assignment context */}
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <span style={{ padding: '8px 20px', background: '#e0e7ff', color: 'var(--primary)', borderRadius: '20px', fontWeight: 'bold' }}>🎓 USM Project</span>
                    <span style={{ padding: '8px 20px', background: '#e0e7ff', color: 'var(--primary)', borderRadius: '20px', fontWeight: 'bold' }}>💻 CAT201 Assignment</span>
                </div>
            </div>
        </section>
    );
};

export default About;