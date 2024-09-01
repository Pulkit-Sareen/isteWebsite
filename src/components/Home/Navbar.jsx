import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
	return (
		<div className="NavPage">
			<div className={styles.Header}>
				<div className={styles.Options}>
					<h1>
						<Link to="/">Home</Link>
					</h1>
					<h1>
						<Link to="/events">Gallery</Link>
					</h1>
					<h1>
						<Link to="/team">Team</Link>
					</h1>
				</div>
				<div className={styles.logo}>
					<img
						src="logopic.jpg"
						alt=""
					/>
				</div>
				<Link to="/contact">
					<button className={styles.contact}>Contact Us</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
