import React, { useRef, useEffect, useState } from 'react';
import FacultySection from './Faculty';
import ExecutiveBoardSection from './ExecutiveBoard';
import ExecutiveCommitteeSection from './ExecutiveCommittee';
import CoreMembersSection from './CoreMembers';
import styles from './TeamPage.module.css';

const TeamPageMain = () => {
    const facultyRef = useRef(null);
    const ebRef = useRef(null);
    const ecRef = useRef(null);
    const coreRef = useRef(null);

    const [activeSection, setActiveSection] = useState('');

    const sectionRefs = [
        { id: 'faculty', ref: facultyRef },
        { id: 'eb', ref: ebRef },
        { id: 'ec', ref: ecRef },
        { id: 'core', ref: coreRef },
    ];

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
        };
        const sections = [
            { ref: facultyRef, id: 'faculty' },
            { ref: ebRef, id: 'eb' },
            { ref: ecRef, id: 'ec' },
            { ref: coreRef, id: 'core' },
        ];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    setActiveSection(id);
                }
            });
        }, options);

        sections.forEach(({ ref, id }) => {
            if (ref.current) {
                ref.current.setAttribute('id', id); // ✅ set id directly
                observer.observe(ref.current);
            }
        });

        return () => {
            sections.forEach(({ ref }) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);


    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.heroSection}>
                <h1 className={styles.title}>Meet Our Team</h1>
                <p className={styles.subTitle}>
                    From faculty guides to executive members, meet the pillars of our team.
                </p>
            </div>

            {/* Sticky Button Bar */}
            <div className={styles.buttonBar}>
                <button
                    onClick={() => scrollToSection(facultyRef)}
                    className={activeSection === 'faculty' ? styles.active : ''}
                >
                    <span>Faculty</span>
                </button>
                <button
                    onClick={() => scrollToSection(ebRef)}
                    className={activeSection === 'eb' ? styles.active : ''}
                >
                    <span>Executive Board</span>
                </button>
                <button
                    onClick={() => scrollToSection(ecRef)}
                    className={activeSection === 'ec' ? styles.active : ''}
                >
                    <span>Executive Committee</span>
                </button>
                <button
                    onClick={() => scrollToSection(coreRef)}
                    className={activeSection === 'core' ? styles.active : ''}
                >
                    <span>Core Members</span>
                </button>
            </div>

            <div ref={facultyRef}>
                <FacultySection />
            </div>
            <div ref={ebRef}>
                <ExecutiveBoardSection />
            </div>
            <div ref={ecRef}>
                <ExecutiveCommitteeSection />
            </div>
            <div ref={coreRef}>
                <CoreMembersSection />
            </div>
        </div>
    );
};

export default TeamPageMain;
