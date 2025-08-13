import React, { useEffect } from 'react';
import { HashLink } from "react-router-hash-link";
import Cards from './Cards';
import AboutUs from './AboutUs';
import { whiteLogo } from "../../assets/images/index.js"
import styles from './Homepage1.module.css';
import { FaArrowDown } from "react-icons/fa";

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
          sleepTimeCoefY: 0.0025
        });
      });
  }, []);

  return (
    <>
      <div id='app' className={styles.app}>
        <div id='hero' className={styles.hero}>
          <img src={whiteLogo} alt="Logo" className={styles.logo} />
        </div>
        <div>
      <HashLink smooth to="#card">
        <button className={styles.downButton}><p>Scroll Down</p><FaArrowDown/></button>
      </HashLink>
        </div>
      </div>
      <Cards />
      <AboutUs />
    </>
  );
};

export default NeonCursorHero;
