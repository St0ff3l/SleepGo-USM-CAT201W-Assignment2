import React from 'react';
import { motion } from 'framer-motion';

const BlurBlobs = () => {
    const blobVariants = {
        animate: {
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    const blobVariants2 = {
        animate: {
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
            transition: {
                duration: 25,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    const blobVariants3 = {
        animate: {
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
            transition: {
                duration: 30,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <>
            {/* Indigo Blob */}
            <motion.div
                variants={blobVariants}
                animate="animate"
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, #e0e7ff 0%, transparent 70%)', // Indigo-100
                    zIndex: 0,
                    pointerEvents: 'none',
                    willChange: 'transform',
                }}
            />
            {/* Slate Blob */}
            <motion.div
                variants={blobVariants2}
                animate="animate"
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '15%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, #f1f5f9 0%, transparent 70%)', // Slate-100
                    zIndex: 0,
                    pointerEvents: 'none',
                    willChange: 'transform',
                }}
            />
            {/* Violet/Indigo Blob */}
            <motion.div
                variants={blobVariants3}
                animate="animate"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '550px',
                    height: '550px',
                    background: 'radial-gradient(circle, #e0e7ff 0%, transparent 70%)', // Indigo-100
                    zIndex: 0,
                    pointerEvents: 'none',
                    willChange: 'transform',
                }}
            />
        </>
    );
};

const GrainOverlay = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
                opacity: 0.3, // Increased opacity for visibility on light bg
                mixBlendMode: 'multiply', // Changed to multiply for light bg
            }}
        >
            <svg width="100%" height="100%">
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    );
};

const FluidBackground = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#F8FAFC', // Slate-50
                zIndex: -1,
                overflow: 'hidden',
            }}
        >
            <BlurBlobs />
            <GrainOverlay />
        </div>
    );
};

export default FluidBackground;
