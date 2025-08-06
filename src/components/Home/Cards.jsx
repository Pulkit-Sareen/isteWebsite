// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./Cards.module.css";
// import about from "../../assets/images/team.jpg";

// export const Cards = () => {
//   const eventHeadingRef = useRef(null);
//   const eventDescRef = useRef(null);
//   const eventCardRef = useRef(null);
//   const projectHeadingRef = useRef(null);
//   const projectDescRef = useRef(null);
//   const projectCardsRef = useRef([]);

//   const [eventVisible, setEventVisible] = useState(false);
//   const [eventDescVisible, setEventDescVisible] = useState(false);
//   const [eventCardVisible, setEventCardVisible] = useState(false);
//   const [projectVisible, setProjectVisible] = useState(false);
//   const [projectDescVisible, setProjectDescVisible] = useState(false);
//   const [projectCardsVisible, setProjectCardsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const triggerPoint = window.innerHeight * 0.8;

//       if (eventHeadingRef.current && !eventVisible) {
//         const top = eventHeadingRef.current.getBoundingClientRect().top;
//         if (top <= triggerPoint) setEventVisible(true);
//       }

//       if (eventDescRef.current && !eventDescVisible) {
//         const top = eventDescRef.current.getBoundingClientRect().top;
//         if (top <= triggerPoint) setEventDescVisible(true);
//       }

//       if (eventCardRef.current && !eventCardVisible) {
//         const top = eventCardRef.current.getBoundingClientRect().top;
//         if (top <= triggerPoint) setEventCardVisible(true);
//       }

//       if (projectHeadingRef.current && !projectVisible) {
//         const top = projectHeadingRef.current.getBoundingClientRect().top;
//         if (top <= triggerPoint) setProjectVisible(true);
//       }

//       if (projectDescRef.current && !projectDescVisible) {
//         const top = projectDescRef.current.getBoundingClientRect().top;
//         if (top <= triggerPoint) setProjectDescVisible(true);
//       }

//       if (!projectCardsVisible && projectCardsRef.current.length > 0) {
//         const top = projectCardsRef.current[0].getBoundingClientRect().top;
//         if (top <= triggerPoint) setProjectCardsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [eventVisible, eventDescVisible, eventCardVisible, projectVisible, projectDescVisible, projectCardsVisible]);

//   return (
//     <>
//     <section className={styles.cards}>
//       <div className={styles.eventCardSection}>
//         <h2
//           ref={eventHeadingRef}
//           className={`${styles.cardHeading} ${eventVisible ? styles.underlineAnimate : ""}`}
//         >
//           Upcoming Events
//         </h2>
//         <p
//           ref={eventDescRef}
//           className={`${styles.description} ${eventDescVisible ? styles.fadeOutRight : ""}`}
//         >
//           Join our exciting events designed to enhance your technical skills, expand your network, and provide hands-on experience with the latest technologies
//         </p>

//         <div
//           ref={eventCardRef}
//           className={`${styles.eventCard} ${eventCardVisible ? styles.fadeUp : ""}`}
//         >
//           <img src={about} alt="Event" className={styles.eventCardImage} />
//           <div className={styles.eventCardContent}>
//             <h3 className={`${styles.eventCardTitle} ${eventVisible ? styles.cardunderlineAnimate : ""}`}>ORIENTATION 2025</h3>
//             <p className={styles.eventCardText}>
//               Welcome to the ISTE community! During the orientation, new members were introduced to our dynamic organization, delved into exciting projects, and embarked on their tech journeys. They joined us to learn, connect, and innovate, forming valuable connections along the way. Together, we anticipated advancing technology and shaping the future through everyone s unique contributions.
//             </p>
//             <div className={styles.eventDetails}>
//               <p>24 August 2025</p>
//               <p>LT-101</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.projectSection}>
//         <h2
//           ref={projectHeadingRef}
//           className={`${styles.cardHeading} ${projectVisible ? styles.underlineAnimate : ""}`}
//         >
//           Our Projects
//         </h2>
//         <p
//           ref={projectDescRef}
//           className={`${styles.description} ${projectDescVisible ? styles.fadeOutRight : ""}`}
//         >
//           We, as a technical community aim to innovate and solve problems faced by people. Our passionate team of tech enthusiasts come up with innovative real life solutions to tackle such problems.
//         </p>

//         <div className={styles.projectCardSection}>
//           {[0, 1, 2].map((_, index) => (
//             <div
//               key={index}
//               ref={(el) => (projectCardsRef.current[index] = el)}
//               className={`${styles.projectCard} ${projectCardsVisible
//                   ? index === 0
//                     ? styles.fadeRight
//                     : index === 1
//                       ? styles.fadeUp
//                       : styles.fadeLeft
//                   : ""
//                 }`}
//             >
//               <img src={about} alt="" className={styles.projectImg} />
//               <h3>Web Development</h3>
//               <h2>Smart Campus System</h2>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
//             </div>
//           ))}
//         </div>

//         <button className={styles.projectButton}>
//           View More
//         </button>
//       </div>
//       </section>
//     </>
//   );
// };

// export default Cards;




import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";
import about from "../../assets/images/team.jpg";
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
      <section className={styles.cards}>
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
                <p>24 August 2025</p>
                <p>LT-101</p>
              </div>
              <div className={styles.registerButton}><Link to="/">Register</Link></div>
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
            <div className={styles.projectCard}>


              <div className={styles.projectCardContent}>
                <h2>Fairfare</h2>
                <p>FairFare is a web platform that lets users compare real-time taxi fares across different cities and services to help choose the most economical and reliable option.</p>

              </div>
              <FaArrowRight className={styles.projectIcon} />
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectCardContent}>
                <h2>Time Capsule</h2>
                <p>Time Capsule Messenger - Write messages to yourself or friends that only become viewable after X days or even next year.</p>

              </div>
              <FaArrowRight className={styles.projectIcon} />
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectCardContent}>
                <h2>Society Sphere</h2>
                <p>Society Sphere is a streamlined web-based platform designed to empower student societies by simplifying event management, announcements, task coordination, and resource sharing.</p>

              </div>
              <FaArrowRight className={styles.projectIcon} />
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectCardContent}>
                <h2>Smart Campus System</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem veniam est ab dolorem error.</p>

              </div>
              <FaArrowRight className={styles.projectIcon} />
            </div>
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