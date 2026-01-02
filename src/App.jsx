import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Team from './sections/Team';
import About from './sections/About';
import Footer from './components/Footer';
import FluidBackground from './components/FluidBackground';
import './styles/global.css';

function App() {
    // Watch elements entering the viewport and add the "active" class to trigger reveal animations.
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible.

        const hiddenElements = document.querySelectorAll('.reveal-item');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <FluidBackground />
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