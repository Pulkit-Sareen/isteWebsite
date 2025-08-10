import React, { useState } from 'react';
import styles from './TeamPage.module.css';

const teamData = {
    Faculty: [
        { name: 'Dr. Raj Sharma', role: 'Professor', desc: 'Expert in AI and ML.' },
        { name: 'Dr. Neha Verma', role: 'Associate Professor', desc: 'Specialist in Cyber Security.' },
    ],
    'Executive Board': [
        { name: 'Aryan Singh', role: 'President', desc: 'Leads and manages the board.' },
        { name: 'Simran Kaur', role: 'Vice President', desc: 'Coordinates activities.' },
    ],
    'Executive Committee': [
        { name: 'Rohit Malhotra', role: 'Treasurer', desc: 'Handles finances.' },
        { name: 'Aisha Khan', role: 'General Secretary', desc: 'Ensures smooth communication.' },
    ],
    Core: [
        { name: 'Pulkit Sareen', role: 'Web Developer', desc: 'Built this amazing page.' },
        { name: 'Megha Rao', role: 'Designer', desc: 'Handles visuals and design.' },
    ]
};

const TeamPage = () => {
    const [activeSection, setActiveSection] = useState('Faculty');

    return (
        <div className={styles.teamPage}>
            <h1 className={styles.heading}>Meet Our Team</h1>

            <div className={styles.buttons}>
                {Object.keys(teamData).map(section => (
                    <button
                        key={section}
                        className={`${styles.tabButton} ${activeSection === section ? styles.active : ''}`}
                        onClick={() => setActiveSection(section)}
                    >
                        {section}
                    </button>
                ))}
            </div>

            <div className={styles.section}>
                <div className={styles.left}>
                    <h2>{activeSection}</h2>
                </div>

                <div className={styles.right}>
                    <div className={styles.memberList}>
                        {teamData[activeSection].map((member, idx) => (
                            <div className={styles.memberCard} key={idx}>
                                <h3>{member.name}</h3>
                                <p className={styles.role}>{member.role}</p>
                                <p className={styles.desc}>{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
