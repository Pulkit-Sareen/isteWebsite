import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { finalLogo } from "../../assets/images/index.js";

export const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleMenu = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={styles.NavPage}>
      <div className={styles.Header}>
        <div className={styles.logo}>
          <a href="/">
            <img src={finalLogo} alt="logo" />
          </a>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`${styles.Options} ${showOptions ? styles.show : ""}`}>
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <Link to="/events">Event</Link>
          </h1>
          <h1>
            <Link to="/team">Team</Link>
          </h1>
          <h1>
            <Link to="/alumni">Alumni</Link>
          </h1>
          <h1>
            <Link to="/contact">Contact</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
