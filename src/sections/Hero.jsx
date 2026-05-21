import React, { useState } from 'react';
import { FaArrowRight, FaTimes, FaCopy, FaCheck } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import demoVideo from '../assets/videos/SleepGo_Video_Demo.mp4';

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);
    const contactEmail = "contact@sleepgo.com";
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

    const handleCopy = () => {
        navigator.clipboard.writeText(contactEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center', // Keep content vertically centered.

            // Top/bottom padding reserves space for the fixed navbar and shifts the visual center slightly upward.
            paddingTop: '60px',
            paddingBottom: '120px',

            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#fff'
        }}>

            {/* Decorative background gradients (positioned absolutely). */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(var(--primary-rgb, 100, 100, 255), 0.1) 0%, rgba(255,255,255,0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(var(--primary-rgb, 100, 100, 255), 0.08) 0%, rgba(255,255,255,0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <motion.div 
                className="container hero-container" 
                style={{
                    scale,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1500px', // Increased container width by 25% to allow video to grow
                }}
            >
                <div className="reveal-item">
                    <h1 style={{ fontSize: 'clamp(5rem, 10vw, 7.8rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        We Code, <br />
                        <span style={{ color: 'var(--primary)' }}>You Sleep.</span>
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--text-light)', marginBottom: '2rem', maxWidth: '625px' }}>
                        sleepgo-usm-cat201w-assignment2 delivers high-performance software solutions tailored for your business needs.
                    </p>

                    <button
                        onClick={() => setShowModal(true)}
                        style={{
                            padding: '18px 40px', background: 'var(--primary)', color: 'white',
                            border: 'none', borderRadius: '60px', fontSize: '1.25rem', fontWeight: '600', cursor: 'pointer',
                            display: 'inline-flex', alignItems: 'center', gap: '12px',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Start Project <FaArrowRight />
                    </button>
                </div>

                <div className="reveal-item" style={{
                    borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)',
                    aspectRatio: '16/9', background: '#000', position: 'relative', width: '100%'
                }}>
                    <video
                        src={demoVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </motion.div>

            {/* Contact modal */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 9999,
                    backdropFilter: 'blur(5px)'
                }} onClick={() => setShowModal(false)}>

                    <div style={{
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '20px',
                        width: '90%',
                        maxWidth: '450px',
                        position: 'relative',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        textAlign: 'center'
                    }} onClick={(e) => e.stopPropagation()}>

                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute', top: '15px', right: '15px',
                                background: 'transparent', border: 'none', fontSize: '1.5rem',
                                cursor: 'pointer', color: '#666'
                            }}
                        >
                            <FaTimes />
                        </button>

                        <h2 style={{ marginBottom: '1rem', color: '#333' }}>Let's Build Together</h2>
                        <p style={{ color: '#666', marginBottom: '2rem' }}>
                            Ready to start your project? Reach out to us directly via email.
                        </p>

                        <div style={{
                            background: '#f3f4f6',
                            padding: '1rem',
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1rem',
                            border: '1px solid #e5e7eb'
                        }}>
                            <span style={{ fontWeight: '600', color: '#333' }}>{contactEmail}</span>
                            <button
                                onClick={handleCopy}
                                style={{
                                    background: copied ? '#10B981' : 'var(--primary)',
                                    color: 'white', border: 'none',
                                    padding: '8px 12px', borderRadius: '8px', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '5px',
                                    transition: 'background 0.3s'
                                }}
                            >
                                {copied ? <FaCheck /> : <FaCopy />}
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>

                        <p style={{ fontSize: '0.85rem', color: '#999' }}>
                            We usually respond within 24 hours.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
