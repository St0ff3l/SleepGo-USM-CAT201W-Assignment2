import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// 1. 引入视频文件 (注意路径层级: ../assets)
import demoVideo from '../assets/videos/SleepGo_Video_Demo.mp4';

const Hero = () => {
    return (
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            {/* Added 'hero-container' class for mobile responsiveness defined in global.css */}
            <div className="container hero-container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <div className="reveal-item">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        We Code, <br />
                        <span style={{ color: 'var(--primary)' }}>You Sleep.</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                        SleepGo delivers high-performance software solutions tailored for your business needs.
                    </p>
                    <button style={{
                        padding: '14px 32px', background: 'var(--primary)', color: 'white',
                        border: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
                        display: 'inline-flex', alignItems: 'center', gap: '10px'
                    }}>
                        Start Project <FaArrowRight />
                    </button>
                </div>

                {/* Video Container */}
                <div className="reveal-item" style={{
                    borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)',
                    aspectRatio: '16/9', background: '#000', position: 'relative', width: '100%'
                }}>
                    {/* 2. 使用 video 标签替换了之前的占位符 */}
                    <video
                        src={demoVideo}
                        autoPlay       // 自动播放
                        loop           // 循环播放
                        muted          // 静音 (浏览器强制要求：只有静音才能自动播放)
                        playsInline    // 手机端兼容 (防止在 iOS 上强制全屏)
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;