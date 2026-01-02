import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTagline = ({ text, className = '' }) => {
    const characters = Array.from(text);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02, // 每个字符间隔 0.02 秒
            },
        },
    };

    const characterVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'inline-block' }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={characterVariants}
                    style={{
                        display: 'inline-block',
                        whiteSpace: char === ' ' ? 'pre' : 'normal',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTagline;


