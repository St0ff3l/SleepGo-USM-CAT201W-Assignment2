import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Team from './sections/Team';
import About from './sections/About';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
    // 核心逻辑：监听滚动，触发动画
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 }); // 元素出现 10% 时触发

        const hiddenElements = document.querySelectorAll('.reveal-item');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Team />
            <About />
            <Footer />
        </div>
    );
}

export default App;