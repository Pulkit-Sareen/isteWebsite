import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";
//import about from "../../assets/images/orientation2024.jpg";
import about from "../../assets/Pastevents/oIMG1.png";
import { FaArrowRight } from "react-icons/fa";

export const Cards = () => {
  const eventHeadingRef = useRef(null);
  const eventDescRef = useRef(null);
  const eventCardRef = useRef(null);
  const projectHeadingRef = useRef(null);
  const projectDescRef = useRef(null);

  const [eventVisible, setEventVisible] = useState(false);
  const [eventDescVisible, setEventDescVisible] = useState(false);
  const [eventCardVisible, setEventCardVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [projectDescVisible, setProjectDescVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.8;

      if (eventHeadingRef.current && !eventVisible) {
        const top = eventHeadingRef.current.getBoundingClientRect().top;
        if (top <= triggerPoint) setEventVisible(true);
      }

      if (eventDescRef.current && !eventDescVisible) {
        const top = eventDescRef.current.getBoundingClientRect().top;
        if (top <= triggerPoint) setEventDescVisible(true);
      }

      if (eventCardRef.current && !eventCardVisible) {
        const top = eventCardRef.current.getBoundingClientRect().top;
        if (top <= triggerPoint) setEventCardVisible(true);
      }

      if (projectHeadingRef.current && !projectVisible) {
        const top = projectHeadingRef.current.getBoundingClientRect().top;
        if (top <= triggerPoint) setProjectVisible(true);
      }

      if (projectDescRef.current && !projectDescVisible) {
        const top = projectDescRef.current.getBoundingClientRect().top;
        if (top <= triggerPoint) setProjectDescVisible(true);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [eventVisible, eventDescVisible, eventCardVisible, projectVisible, projectDescVisible]);

  return (
    <>
      <section id="card" className={styles.cards}>
        <div className={styles.eventCardSection}>
          <h2
            ref={eventHeadingRef}
            className={`${styles.cardHeading} ${eventVisible ? styles.underlineAnimate : ""}`}
          >
            Upcoming Events
          </h2>
          <p
            ref={eventDescRef}
            className={`${styles.description} ${eventDescVisible ? styles.fadeOutRight : ""}`}
          >
            Join our exciting events designed to enhance your technical skills, expand your network, and provide hands-on experience with the latest technologies
          </p>

          <div
            ref={eventCardRef}
            className={`${styles.eventCard} ${eventCardVisible ? styles.fadeUp : ""}`}
          >
            <img src={about} alt="Event" className={styles.eventCardImage} />
            <div className={styles.eventCardContent}>
              <h3 className={`${styles.eventCardTitle} ${eventVisible ? styles.cardunderlineAnimate : ""}`}>ORIENTATION 2025</h3>
              <p className={styles.eventCardText}>
                Welcome to the ISTE community! During the orientation, new members were introduced to our dynamic organization, delved into exciting projects, and embarked on their tech journeys. They joined us to learn, connect, and innovate, forming valuable connections along the way. Together, we anticipated advancing technology and shaping the future through everyone s unique contributions.
              </p>
              <div className={styles.eventDetails}>
                <p>25th August 2025</p>
                <p>Main Audi</p>
              </div>
              <div className={styles.registerButton}><Link to="https://iste-website-service-822744258677.asia-south2.run.app/register/">Register</Link></div>
            </div>
          </div>
        </div>

        <div className={styles.projectSection}>
          <h2
            ref={projectHeadingRef}
            className={`${styles.cardHeading} ${projectVisible ? styles.underlineAnimate : ""}`}
          >
            Our Projects
          </h2>
          <p
            ref={projectDescRef}
            className={`${styles.description} ${projectDescVisible ? styles.fadeOutRight : ""}`}
          >
            We, as a technical community aim to innovate and solve problems faced by people. Our passionate team of tech enthusiasts come up with innovative real life solutions to tackle such problems.
          </p>

          <div className={styles.projectCardSection}>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.projectCardContent}>
                <h2>Fairfare</h2>
                <p>
                  FairFare is a web platform that lets users compare real-time taxi fares across different cities and services to help choose the most economical and reliable option.
                </p>
              </div>
              <FaArrowRight className={styles.projectIcon} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.projectCardContent}>
                <h2>Time Capsule</h2>
                <p>
                  Time Capsule Messenger - Write messages to yourself or friends that only become viewable after X days or even next year.
                </p>
              </div>
              <FaArrowRight className={styles.projectIcon} />
            </a>

            <a
              href="https://society-organiser.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.projectCardContent}>
                <h2>Society Sphere</h2>
                <p>
                  Society Sphere is a streamlined web-based platform designed to empower student societies by simplifying event management, announcements, task coordination, and resource sharing.
                </p>
              </div>
              <FaArrowRight className={styles.projectIcon} />
            </a>

            <a
              href="https://fintech-psi-three.vercel.app/landingpage.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.projectCardContent}>
                <h2>FinTech</h2>
                <p>
                  Track spending, income, and expenses; monitor investments with personalized advice; set budgets with alerts; access expert resources; and enjoy an intuitive interface.
                </p>
              </div>
              <FaArrowRight className={styles.projectIcon} />
            </a>

          </div>


          <button className={styles.projectButton}>
            <Link to="/projects">View More</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Cards;