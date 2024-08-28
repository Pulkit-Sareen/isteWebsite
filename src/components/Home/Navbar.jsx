import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleMenu = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={styles.NavPage}>
      <div className={styles.Header}>
				<div className={styles.logo}>
					<img
						src="./src/assets/images/logo.png"
						alt="logo"
					/>
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
				<Link to="/contact">Contact
					{/* <button className={styles.contact}></button> */}
				</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
