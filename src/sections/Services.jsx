import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { FaLaptopCode, FaMobileAlt, FaDraftingCompass, FaCloudUploadAlt, FaBrain, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            desc: "Custom React.js & Node.js scalable solutions tailored to your business needs.",
            icon: <FaLaptopCode />
        },
        {
            title: "Mobile Apps",
            desc: "Native iOS and Android cross-platform development with seamless performance.",
            icon: <FaMobileAlt />
        },
        {
            title: "UI/UX Design",
            desc: "Crafting intuitive, user-centered digital experiences that users love.",
            icon: <FaDraftingCompass />
        },
        {
            title: "Cloud Solutions",
            desc: "Secure cloud architecture and DevOps deployment.",
            icon: <FaCloudUploadAlt />
        },
        {
            title: "AI Integration",
            desc: "Smart algorithms and data analytics integration.",
            icon: <FaBrain />
        },
        {
            title: "Cyber Security",
            desc: "Enterprise-grade protection for your digital assets.",
            icon: <FaShieldAlt />
        }
    ];

    return (
        <section id="services">
            <div className="container">
                <h2 className="section-title reveal-item">Our Services</h2>
                <p className="section-subtitle reveal-item">Comprehensive digital solutions</p>

                {/* Use the shared CSS grid class instead of inline layout styles. */}
                <div className="services-grid">
                    {services.map((s, index) => (
                        <ServiceCard key={index} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;