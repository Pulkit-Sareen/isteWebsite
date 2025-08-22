import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Cards from './Cards';
import AboutUs from './AboutUs';
import { whiteLogo } from "../../assets/images/index.js"
import styles from './Homepage1.module.css';
import { FaArrowDown } from "react-icons/fa";
import heroImg from '../../assets/images/om3.jpg'

const NeonCursorHero = () => {

  return (
    <>

      <div className={styles.heroMain}>
        <div className={styles.heroCover}>
          <img src={heroImg} alt="" className={styles.heroImg} />
        </div>

        <div className={styles.heroMainContent}>
          <div className={styles.heroContent}>
            <div className={styles.heroName}>
            <h1 className={styles.heroNameText}><b>I</b>ndian</h1>
            <h1 className={styles.heroNameText}> <b>S</b>ociety for</h1>
            <h1 className={styles.heroNameText}> <b>T</b>echnical</h1>
            <h1 className={styles.heroNameText}><b>E</b>ducation</h1>
            </div>

            <div className={styles.heroDesc}>
              <h1>Welcome Batch 2029</h1>
              <h2>ORIENTATION 2025</h2>
              <p>Join our vibrant community of innovators, developers, and tech enthusiasts. Build groundbreaking projects, master cutting-edge technologies, and shape the digital future together</p>
              <div className={styles.heroButton}>
                <Link to="https://iste-website-service-822744258677.asia-south2.run.app/register/">Register</Link>
              </div>
            </div>
          </div>

        </div>
            <HashLink smooth to="#card" className={styles.heroScroll}>
              <button className={styles.downButton}><p>Scroll Down</p><FaArrowDown /></button>
            </HashLink>

      </div>

      <Cards />
      <AboutUs />
    </>
  );
};

export default NeonCursorHero;
