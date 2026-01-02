import React from 'react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'radial-gradient(circle at top right, #e0e7ff, #ffffff 40%)'
        }}>
            <div className="container reveal-item" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <span style={{
            background: '#e0e7ff',
            color: 'var(--primary)',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '600'
        }}>
          USM CAT201 Assignment 2
        </span>
                <h1 style={{ fontSize: '4rem', fontWeight: '800', margin: '1.5rem 0', lineHeight: '1.1' }}>
                    We Build Software While You <span style={{ color: 'var(--primary)' }}>Sleep.</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '2.5rem' }}>
                    SleepGo is a premier software house delivering responsive, robust, and beautiful web solutions.
                </p>
                <button style={{
                    background: 'var(--text-main)',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    fontSize: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600'
                }}>Get Started</button>
            </div>
        </section>
    );
};

export default Hero;