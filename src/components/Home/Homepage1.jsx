// import React, { useEffect, useRef } from "react";
// import styles from "./Homepage1.module.css";
// import { whiteLogo} from "../../assets/images/index.js";
// import Cards from "./Cards";
// import AboutUs from "./AboutUs";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import heroImg from "../../assets/images/Collage_Image_1.png";

// gsap.registerPlugin(ScrollTrigger);

// function Homepage1() {
//   const logoSectionRef = useRef(null);
//   const logoRef = useRef(null);
//   const textSectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const fullFormRef = useRef(null);

//   useEffect(() => {
//     // Scale down and hide the logo (no fade)
//     gsap.fromTo(
//       logoRef.current,
//       { scale: 1,opacity: 1 },
//       {
//         scale: 20,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: logoSectionRef.current,
//           start: "top top",
//           end: "+=500",
//           scrub: true,
//           onLeave: () => {
//             logoRef.current.style.display = "none";
//           },
//           onEnterBack: () => {
//             logoRef.current.style.display = "block";
//           },
//         },
//       }
//     );

//     // FullForm fades out and scales down on scroll
//     gsap.fromTo(
//       fullFormRef.current,
//       { scale: 1, opacity: 1 },
//       {
//         scale: 0.3,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: logoSectionRef.current,
//           start: "top top",
//           end: "+=300",
//           scrub: true,
//         },
//       }
//     );

//     // Left text reveal
//     gsap.fromTo(
//       textSectionRef.current,
//       { opacity: 0, x: -100 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: textSectionRef.current,
//           start: "500 90%",
//         },
//       }
//     );

//     // Right image slide-in
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, x: 150 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "500 90%",
//         },
//       }
//     );
//   }, []);


//   return (
//     <>
//       <div className={styles.homepageContainer}>
//         {/* Initial Logo Section */}
//         <div className={styles.logoSection} ref={logoSectionRef}>
//           <img
//             src={whiteLogo}
//             alt="ISTE Logo"
//             className={styles.logo}
//             ref={logoRef}
//           />
//           <h1
//             className={styles.fullForm}
//             ref={fullFormRef}
//           >
//             INDIAN SOCIETY FOR TECHNICAL EDUCATION
//           </h1>
//         </div>

//         {/* Hero Scroll Reveal Section */}
//         <div className={styles.heroContent}>
//           <div className={styles.leftText} ref={textSectionRef}>
//             <h1>ORIENTATION 2025</h1>
//             <p>
//               Join our vibrant community of innovators, developers, and tech
//               enthusiasts. Build groundbreaking projects, master cutting-edge
//               technologies, and shape the digital future together.
//             </p>
//             <button className={styles.heroJoinButton}>Join ISTE</button>
//           </div>

//           <div className={styles.rightImage} ref={imageRef}>
//             <img src={heroImg} alt="Hero Visual" />
//           </div>
//         </div>
//       </div>

//       <Cards />
//       <AboutUs />
//     </>
//   );
// }

// export default Homepage1;









// import React, { useEffect, useRef, useState } from "react";
// import styles from "./Homepage1.module.css";
// import Cards from "./Cards";
// import { gsap } from "gsap";
// import { whiteLogo } from "../../assets/images/index.js"
// import AboutUs from "./AboutUs";

// function Homepage1() {
//   const logoRef = useRef(null);
//   const introRef = useRef(null);
//   const subsectionRef = useRef(null);

//   const image1Ref = useRef(null);
//   const image2Ref = useRef(null);
//   const image3Ref = useRef(null);

//   const [triggered, setTriggered] = useState(false);

//   useEffect(() => {
//     // Logo animation
//     gsap.fromTo(
//       logoRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );

//     // Intro animation
//     gsap.fromTo(
//       introRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", stagger: 0.2 }
//     );

//     // Subsection animation
//     gsap.fromTo(
//       subsectionRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.3 }
//     );

//   }, []);

//   return (
//     <>
//       <div className={styles.heroContainer}>
//         <img ref={logoRef} src={whiteLogo} alt="Logo" className={styles.logo} />
//         <div ref={introRef} className={styles.intro}>
//           <h1>INDIAN SOCIETY FOR TECHNICAL EDUCATION</h1>
//         </div>
//         <div ref={subsectionRef} className={styles.subsection}>
//           {/* <h3>ISTE</h3> */}
//           <h1>ORIENTATION 2025</h1>
//           <h2>Join our vibrant community of innovators, developers, and tech enthusiasts. Build groundbreaking projects, master cutting-edge technologies, and shape the digital future together</h2>

//           <button className={styles.heroJoinButton}>
//             Join ISTE
//           </button>
//         </div>

//       </div>

//       <Cards />
//       <AboutUs />
//     </>
//   );
// }

// export default Homepage1;

















import React, { useEffect } from 'react';
import Cards from './Cards';
import AboutUs from './AboutUs';
import { whiteLogo } from "../../assets/images/index.js"
import styles from './Homepage1.module.css';

const NeonCursorHero = () => {
  useEffect(() => {
    import('https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js')
      .then(({ neonCursor }) => {
        neonCursor({
          el: document.getElementById('app'),
          shaderPoints: 16,
          curvePoints: 80,
          curveLerp: 0.5,
          radius1: 5,
          radius2: 60,
          velocityTreshold: 10,
          sleepRadiusX: 200,
          sleepRadiusY: 150,
          sleepTimeCoefX: 0.0025,
          sleepTimeCoefY: 0.0025,
        });
      });
  }, []);

  return (
    <>
      <div id='app' className={styles.app}>
        <div id='hero' className={styles.hero}>
          <img src={whiteLogo} alt="Logo" className={styles.logo} />
        </div>
      </div>
      <Cards />
      <AboutUs />
    </>
  );
};

export default NeonCursorHero;
