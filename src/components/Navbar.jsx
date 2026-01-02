import React, { useState, useEffect } from 'react';
// 引入 Logo 图片 (请确保图片路径正确)
import logo from '../assets/images/Logo.png';

const Navbar = () => {
    // 1. 状态管理：检测是否滚动
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. 导航栏样式：结合了滚动特效和居中布局
    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'center',
        // 动态样式：滚动时变白加阴影，不滚动时透明
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
    };

    // 容器样式
    const containerStyle = {
        width: '100%',
        maxWidth: '1200px',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    // Logo 区域样式
    const brandStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px', // 图片和文字的间距
        cursor: 'pointer',
        textDecoration: 'none'
    };

    // 链接样式：无下划线，无黑点
    const linkStyle = {
        textDecoration: 'none',
        color: '#1f2937',
        fontWeight: '600',
        fontSize: '1rem',
        marginLeft: '2rem',
        cursor: 'pointer',
        transition: 'color 0.3s ease'
    };

    return (
        <nav style={navStyle}>
            <div style={containerStyle}>

                {/* 左侧：Logo + 公司名 */}
                <div style={brandStyle} onClick={() => window.scrollTo(0,0)}>
                    {/* 图片 Logo */}
                    <img
                        src={logo}
                        alt="SleepGo Logo"
                        style={{ height: '45px', width: 'auto' }} // 稍微调整了一下高度，看起来更精致
                    />
                    {/* 文字 Logo */}
                    <h1 style={{ fontWeight: '800', fontSize: '1.5rem', color: '#4338ca', margin: 0 }}>
                        SleepGo
                    </h1>
                </div>

                {/* 右侧：导航链接 (使用 div 彻底解决黑点问题) */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#hero" style={linkStyle}>Home</a>
                    <a href="#services" style={linkStyle}>Services</a>
                    <a href="#team" style={linkStyle}>Team</a>
                    <a href="#about" style={linkStyle}>About</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;