import React from 'react';
import TeamCard from '../components/TeamCard';

const Team = () => {
    const team = [
        { name: "Chen Zekai", role: "Full Stack Lead" },
        { name: "Zhang Jun", role: "Backend Developer" },
        { name: "Zhang Yifei", role: "UI Designer" },
        { name: "Zhang Zhiqi", role: "QA Engineer" }
    ];

    return (
        <section id="team">
            <div className="container">
                <h2 className="section-title reveal-item">Meet the Team</h2>
                <p className="section-subtitle reveal-item">The brains behind the code</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {team.map((t, index) => (
                        <TeamCard key={index} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;