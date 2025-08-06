import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { whiteLogo } from "../../assets/images";
import { FaCode, FaCalendarAlt, FaUsers, FaCube, FaFolder} from "react-icons/fa";
import {MdPhone } from "react-icons/md";

export const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const toggleMenu = () => {
    setShowOptions(!showOptions);
  };

  const handleResize = () => {
    const isNowMobile = window.innerWidth <= 870;
    setIsMobile(isNowMobile);
    if (!isNowMobile) setShowOptions(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.NavPage}>
      <header className={styles.Header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={whiteLogo} alt="logo" />
          </Link>
        </div>

        {isMobile && (
          <div className={styles.hamburger} onClick={toggleMenu}>
            &#9776;
          </div>
        )}

        {!isMobile && (
          <nav className={styles.Options}>
            <Link to="/" className={styles.menuItem}><FaCode /> Home</Link>
            <Link to="/events" className={styles.menuItem}><FaCalendarAlt />Event</Link>
            <Link to="/team" className={styles.menuItem}><FaUsers />Team</Link>
            <Link to="/sponsor" className={styles.menuItem}><FaCube />Sponsor</Link>
            <Link to="/projects" className={styles.menuItem}><FaFolder />Project</Link>
            <Link to="/contact" className={styles.menuItem}><MdPhone />Contact</Link>
          </nav>
        )}

        {!isMobile && (
          <div className={styles.joinButtonDesktop}>
            <Link to="/join" className={styles.joinButton}>
              JOIN US
            </Link>
          </div>
        )}
      </header>

      {isMobile && (
        <nav className={`${styles.OptionsMobile} ${showOptions ? styles.show : ""}`}>
          <Link to="/" className={styles.menuItem}><FaCode /> Home</Link>
          <Link to="/events" className={styles.menuItem}><FaCalendarAlt />Event</Link>
          <Link to="/team" className={styles.menuItem}><FaUsers />Team</Link>
          <Link to="/sponsor" className={styles.menuItem}><FaCube />Sponsor</Link>
          <Link to="/projects" className={styles.menuItem}><FaFolder />Project</Link>
          <Link to="/contact" className={styles.menuItem}><MdPhone />Contact</Link>
          <Link to="/join" className={styles.joinButton}>JOIN US</Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
