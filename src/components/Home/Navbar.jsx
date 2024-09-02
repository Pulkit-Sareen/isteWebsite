import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
<<<<<<< HEAD
	const [showOptions, setShowOptions] = useState(false);

  const toggleMenu = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={styles.NavPage}>
      <div className={styles.Header}>
				<div className={styles.logo}>
					<img
						src="./src/assets/images/ISTE Thapar Chapter Logo blue.png"
						alt="logo"
					/>
				</div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
				<div className={`${styles.Options} ${showOptions ? styles.show : ""}`}>
=======
	return (
		<div className="NavPage">
			<div className={styles.Header}>
				<div className={styles.Options}>
>>>>>>> bfbbbfb5176755880e7cf7370969db65ab8c2f3f
					<h1>
						<Link to="/">Home</Link>
					</h1>
					<h1>
						<Link to="/events">Gallery</Link>
					</h1>
					<h1>
						<Link to="/team">Team</Link>
					</h1>
<<<<<<< HEAD
				<Link to="/contact">Contact
					{/* <button className={styles.contact}></button> */}
				</Link>
=======
>>>>>>> bfbbbfb5176755880e7cf7370969db65ab8c2f3f
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
