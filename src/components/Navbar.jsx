import React, { useState, useEffect } from 'react';
import '../styles/global.css';
// 1. 引入 Logo 图片
// 假设 Navbar.jsx 在 src/components/，那么路径应该是 ../assets/images/Logo.png
import logo from '../assets/images/Logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.5rem 0',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none',
    };

    //Logo 和 标题的容器样式
    const brandStyle = {
        display: 'flex',
        alignItems: 'center', // 垂直居中
        gap: '0.1rem',        // Logo 和文字之间的间距
        cursor: 'pointer'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* 2. 修改这里：将 Logo 和 H1 包裹在一起 */}
                <div style={brandStyle}>
                    <img
                        src={logo}
                        alt="SleepGo Logo"
                        style={{ height: '60px', width: 'auto' }} // 根据需要调整高度
                    />
                    <h1 style={{ fontWeight: '800', fontSize: '1.5rem', color: 'var(--primary)', margin: 0 }}>
                        SleepGo.
                    </h1>
                </div>

                <ul style={{ display: 'flex', gap: '2rem', fontWeight: '600' }}>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;