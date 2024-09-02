import React, { useEffect, useRef } from "react";
import styles from "./Homepage1.module.css";
import Cards from "./Cards";
import { gsap } from "gsap";
function Homepage1() {
  const logoRef = useRef(null);
  const introRef = useRef(null);
  const subsectionRef = useRef(null);

  useEffect(() => {
    // Animation for logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Animation for intro text
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", stagger: 0.2 }
    );

    // Animation for subsection text
    gsap.fromTo(
      subsectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.3 }
    );
  }, []);

  return (
    <>
      <div className={styles.container} id="home">
        <img ref={logoRef} src="./src/assets/images/logo.png" alt="Logo" className={styles.logo} />
        <div ref={introRef} className={styles.intro}>
          {/* <h3>Introducing</h3> */}
          {/* <h1>ISTE</h1> */}
          <h1>Indian Society for Technical Education</h1>
        </div>
        <div ref={subsectionRef} className={styles.subsection}>
          {/* <h3>ISTE</h3> */}
          <h1>A Place to Learn, to Thrive, to Grow. </h1>
          <h1></h1>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default Homepage1;
