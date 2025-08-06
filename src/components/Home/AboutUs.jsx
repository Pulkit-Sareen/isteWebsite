import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutUs.module.css";
import {Link} from "react-router-dom"
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import { FaLightbulb, FaCode, FaUsers } from "react-icons/fa";

const AboutUs = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const descTriggerRef = useRef(null);
    const mainImageRef = useRef(null); // NEW

    const [animate, setAnimate] = useState(false);
    const [headingVisible, setHeadingVisible] = useState(false);
    const [descVisible, setDescVisible] = useState(false);

    useEffect(() => {
        // Observe the main image for animation trigger
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAnimate(true);
            },
            { threshold: 0, rootMargin: "0% 0px -40% 0px" }
        );

        if (mainImageRef.current) observer.observe(mainImageRef.current);

        // Heading and description observers remain unchanged
        const headingObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setHeadingVisible(true);
            },
            { threshold: 0, rootMargin: "-40% 0px" }
        );

        const descObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setDescVisible(true);
            },
            { threshold: 0, rootMargin: "0px" }
        );

        if (headingRef.current) headingObserver.observe(headingRef.current);
        if (descTriggerRef.current) descObserver.observe(descTriggerRef.current);

        return () => {
            if (mainImageRef.current) observer.unobserve(mainImageRef.current);
            if (headingRef.current) headingObserver.unobserve(headingRef.current);
            if (descTriggerRef.current) descObserver.unobserve(descTriggerRef.current);
        };
    }, []);

    return (
        <section className={styles.aboutSection} id="about" ref={sectionRef}>
            <h2
                ref={headingRef}
                className={`${styles.heading} ${headingVisible ? styles.underlineAnimate : ""}`}
            >
                About Us
            </h2>

            <div className={styles.imageWrapper}>
                <img
                    ref={mainImageRef} // <-- Attach ref here
                    src={image1}
                    alt="Main"
                    className={`${styles.mainImage} ${animate ? styles.revealMain : ""}`}
                />
                <img
                    src={image2}
                    alt="Top Left"
                    className={`${styles.topLeftImage} ${animate ? styles.revealLeft : ""}`}
                />
                <img
                    src={image3}
                    alt="Right Center"
                    className={`${styles.rightCenterImage} ${animate ? styles.revealRight : ""}`}
                />
            </div>
            {/* Trigger div at 60vh */}
            <div
                ref={descTriggerRef}
                style={{ width: "100%", height: 1, pointerEvents: "none" }}
                aria-hidden="true"
            />
            <div
                className={`${styles.descriptionBox} ${descVisible ? styles.descAnimate : ""}`}
            >
                <h3>Who We Are</h3>
                <p>
                    ISTE is a vibrant student chapter dedicated to fostering innovation, collaboration, and technical excellence. Our mission is to empower students through workshops, events, and hands-on projects, building a strong community of future leaders in technology.
                </p>
                <button className={styles.teamButton}>
                    <Link to="/team">Meet Our Team</Link>
                </button>
            </div>
            <div className={styles.aboutHighlights}>
                <div className={`${styles.highlightBox} ${styles.floatLeft}`}>
                    <FaLightbulb className={styles.highlightIcon} />
                    <span>INNOVATION HUB</span>
                </div>
                <div className={`${styles.highlightBox} ${styles.floatMiddle}`}>
                    <FaCode className={styles.highlightIcon} />
                    <span>HANDS ON CODING</span>
                </div>
                <div className={`${styles.highlightBox} ${styles.floatRight}`}>
                    <FaUsers className={styles.highlightIcon} />
                    <span>COMMUNITY DRIVEN</span>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
