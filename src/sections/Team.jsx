import React from 'react';
import TeamCard from '../components/TeamCard';

import member1Img from '../assets/team/Member1.jpg';
import member2Img from '../assets/team/Member2.jpg';
import member3Img from '../assets/team/Member3.jpg';

const Team = () => {
    const team = [
        {
            name: "Chen Zekai",
            role: "Project Manager",
            image: member1Img
        },
        {
            name: "Zhang Jun",
            role: "Frontend Dev",
            image: member2Img
        },
        {
            name: "Zhang Yifei",
            role: "UI/UX Designer",
            image: member3Img
        }
    ];

    return (
        <section id="team" style={{ background: 'var(--bg-off-white)' }}>
            <div className="container">
                <h2 className="section-title reveal-item">Meet the Team</h2>
                <p className="section-subtitle reveal-item">The brains behind the code</p>

                {/* Uses the shared team grid layout defined in global.css. */}
                <div className="team-grid">
                    {team.map((t, index) => (
                        <TeamCard key={index} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;