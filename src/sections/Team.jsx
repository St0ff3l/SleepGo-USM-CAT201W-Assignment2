import React from 'react';
import TeamCard from '../components/TeamCard';

// Import team member images from assets
import member1Img from '../assets/team/Member1.jpg';
import member2Img from '../assets/team/Member2.jpg';
import member3Img from '../assets/team/Member3.jpg';

const Team = () => {
    // Define team member data including names, roles, and images
    const team = [
        {
            name: "Chen Zekai",
            role: "Project Manager & Full Stack",
            image: member1Img
        },
        {
            name: "Zhang Jun",
            role: "UI/UX Designer",
            image: member2Img
        },
        {
            name: "Zhang Yifei",
            role: "Frontend Developer",
            image: member3Img
        }
    ];

    return (
        <section id="team" style={{ background: 'var(--bg-off-white)' }}>
            <div className="container">
                <h2 className="section-title reveal-item">Meet the Team</h2>
                <p className="section-subtitle reveal-item">The brains behind the code</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    justifyContent: 'center'
                }}>
                    {/* Map through the team array to render TeamCard components */}
                    {team.map((t, index) => (
                        <TeamCard key={index} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;